(ns migrations.dump-transformations
  (:require [clojurewerkz.elastisch.rest :as esr]
            [clojurewerkz.elastisch.rest.document :as esd]
            [clojurewerkz.elastisch.query :as q]
            [clojurewerkz.elastisch.rest.response :as esrsp]
            [clojure.string :as str]
            [clojure.data.csv :as csv]
            [cheshire.core :as json]))

;query for worksites.csv
;select distinct(SITE_CODE) from D_CUSTOMER_SITE where SITE_CODE<>'0';

(defn create-query [worksite-id]
  (format "_id:%s AND _type:worksite" worksite-id))

(defn query-customer-id [worksite-id]
  (let [conn (esr/connect "http://127.0.0.1:9200")
        res (esd/search-all-types conn "mdm" :query {:query_string {:query                  (create-query worksite-id)
                                                                    :allow_leading_wildcard false
                                                                    :default_operator       "AND"}})
        n (esrsp/total-hits res)
        hits (esrsp/hits-from res)]
    (-> hits first :_source :customer :id)))

(defn worksite-customer-id-pairs [worksite-id]
  (str worksite-id ";" (query-customer-id worksite-id) "\n"))

(defn create-worksite-customer-mapping
  "Read Worksite ids from file. Fetch Customer id for each from elasticsearch containing MDM-dump. Write worksite id -
  customer id pairs to CSV."
  []
  (let [site-codes (str/split-lines (slurp "src/clj/migrations/input/worksites.csv"))]
    (spit "src/clj/migrations/worksite_customerid.csv" (apply str (pmap worksite-customer-id-pairs site-codes)))))


;query for users_worksites.csv
;select M_USER.USER_ID, USER_TYPE,USER_EMAIL, M_USER_PARTY.PARTY_ID, D_CUSTOMER.VAT_NO, D_CUSTOMER.NAME as CUSTOMER_NAME, D_CUSTOMER_SITE.SITE_CODE from M_USER
;join M_USER_PARTY on M_USER.USER_ID=M_USER_PARTY.USER_ID
;join D_CUSTOMER on M_USER_PARTY.PARTY_ID=D_CUSTOMER.PARTY_ID
;join D_CUSTOMER_SITE on D_CUSTOMER_SITE.CUSTOMER_ID=D_CUSTOMER.CUSTOMER_ID
;where D_CUSTOMER_SITE.SITE_CODE<>'0' and M_USER.USER_TYPE='PK'
;order by USER_ID;

(defn- create-user-record [user-row]
  {:email (nth user-row 2) :site-code (nth user-row 6)})

(defn- users-with-site-codes [users-file]
  (let [users (csv/read-csv (slurp users-file) :separator \;)]
    (map create-user-record users)))

(defn create-users-with-worksites-dump
  "Read user data from file. Extract relevant fields. Write result to edn-file."
  []
  (spit "src/clj/migrations/input/users_with_worksites.edn" (str "[" (apply str (users-with-site-codes "src/clj/migrations/input/users_with_worksites.csv")) "]")))


(defn- get-customer-id [customerids-by-worksites user-with-sitecode]
  (first (map second (get customerids-by-worksites (str (:site-code user-with-sitecode))))))

(defn- create-user-with-customer-id [customerids-by-worksites user-with-sitecode]
  (let [customer-id (get-customer-id customerids-by-worksites user-with-sitecode)]
    {:email (:email user-with-sitecode) :customer-id customer-id}))

(defn- map-values [f the-map]
  (->> the-map
       (map (fn [[key value]]
              {key (f value)}))
       (into {})))

(defn- create-email-customer-id-pairs [customer-ids-by-worksites users-worksites]
  (filter #(not (empty? (:customer-id %))) (map #(create-user-with-customer-id customer-ids-by-worksites %) users-worksites)))

(defn create-users-with-customerships-dump
  "Read Worksite-Customer id pairs and User Worksite structure from file. Find Customer id for each User email. Write
  User emails and Customer ids to file."
  []
  (let [customer-ids-by-worksites (group-by first (csv/read-csv (slurp "src/clj/migrations/input/worksite_customerid.csv") :separator \;))
        users-worksites (read-string (slurp "src/clj/migrations/input/users_with_worksites.edn"))
        res (map-values set (map-values #(map :customer-id %) (group-by :email (create-email-customer-id-pairs customer-ids-by-worksites users-worksites))))]
    (spit "src/clj/migrations/input/users.edn" (str "[" (apply str res) "]"))))

(defn parse-names-emails [user-tsv]
  (->> (csv/read-csv user-tsv :separator \tab)
       rest
       (mapv #(select-keys % [0 6]))
       (mapv #(hash-map :email (get % 6) :name (get % 0)))))

(defn attach-name [names-emails user]
  (let [name (:name (first (filter #(= (first user) (:email %)) names-emails)))]
    (conj user name)))

(defn attach-names-to-users
  "Merge names from AD dump to email-customership dump."
  []
  (let [users (read-string (slurp "src/clj/migrations/input/users.edn"))
        names-emails (parse-names-emails (slurp "src/clj/migrations/input/ad-users.txt"))]
    (map #(attach-name names-emails %) users)))

(defn has-name? [user]
  (not= nil (nth user 2)))
(defn has-customers? [user]
  (not (empty? (nth user 1))))

(defn filter-users-output
  "Partition valid and rejected users. Create users.edn for valid users and rejected.edn for invalid users."
  [users]
  (let [valid-users (filter #(and (has-name? %) (has-customers? %)) users)
        rejected-users (filter #(not (and (has-name? %) (has-customers? %))) users)]
    (spit "output/users.edn" (str "[" (apply str valid-users) "]"))
    (spit "output/rejected.edn" (apply str rejected-users))))

