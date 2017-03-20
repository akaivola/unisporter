(ns migrations.ymparistonet-user-import
  (:require
    [clojure.data.csv :as csv]
    [iamfoxy.auth0.management :refer [management-auth-header management-token]]
    [iamfoxy.auth0.user :as user]
    [crypto.random :as rand]
    [cheshire.core :as json]))

(defn generate-password [] (rand/hex 8))

(defn make-user [email-customers-name]
  (conj
    {:email (first email-customers-name) :name (last email-customers-name)}
    {:password (generate-password)}
    {:metadata {:customer_ids (into [] (nth email-customers-name 1))}}))

(defn filter-active-users [actives names]
  (filter #(some #{(:email %)} actives) names))

(defn create! [user]
  (user/create user (management-auth-header @management-token)))
(defn migrate-old-ynet-users
  "Create users from a dump that was derived from old Ympäristönetti"
  []
  (let [
        users (map #(make-user %) (read-string (slurp "output/users.edn")))
        user-batches (partition 45 users)
        i (atom 0)]
    (println (str "Batch count: " (count user-batches)))
    (doseq [batch user-batches]
      (println (str "Processing Batch " @i))
      (doseq [user batch] (create! user))
      (Thread/sleep 5000)
      (println (str "Finnished Batch " @i))
      (swap! i inc))))

(defn extract-user [{e :email n :name {ids :customer_ids} :app_metadata}]
  {:email e :name n :password (generate-password) :metadata {:customer_ids ids}})

(defn import-ynet-auth0-users []
  (let [users (json/parse-string (slurp "src/clj/migrations/input/ynet_auth0_users.json") true)]
    (map #(extract-user %) users)))

(defn migrate-ynet-auth0-users
  "Create users retrieved from an auth0 /users-API to another auth0 user DB"
  []
  (let [users (import-ynet-auth0-users)
        auth-header (management-auth-header @management-token)]
    (pmap #(user/create % auth-header) users)))
