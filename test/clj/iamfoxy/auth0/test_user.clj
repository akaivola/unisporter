(ns iamfoxy.auth0.test-user
  (:require [iamfoxy.auth0.user :as user]
            [clj-http.client :as client]
            [clojure.test :as t]
            [faker.name :as name]
            [faker.internet :as internet]
            [clojure.core.match :refer [match]]
            [iamfoxy.all-tests :refer :all]
            [taoensso.timbre :refer [spy debug]]))

(t/use-fixtures :once server-fixture)

(defn gen-users []
  (map #(hash-map :name % :email (internet/email %)) (name/names)))

(def fake-users-listing
  {:start  0
   :limit  100
   :length 41
   :users  (vec (take 41 (gen-users)))
   :total  41})

(def fake-users-page0-listing
  {:start  0
   :limit  100
   :length 100
   :users  (vec (take 100 (gen-users)))
   :total  160})

(def fake-users-page1-listing
  {:start  100
   :limit  100
   :length 60
   :users  (vec (take 60 (gen-users)))
   :total  160})

(t/deftest user
  (t/testing "list users and concat pages"
    (with-redefs [user/load-user-page (fn [page token query-params]
                                        (case page
                                          0 fake-users-page0-listing
                                          1 fake-users-page1-listing))]
      (let [response
            (client/get "http://localhost:3010/api/users"
                        {:as               :json
                         :throw-exceptions false
                         :headers {:authorization "foo"}})]
        (t/is (= 160 (count (:users (:body response))))))))
  (t/testing "list users 1 page only"
    (with-redefs [user/load-user-page (fn [page token query-params]
                                        (case page
                                          0 fake-users-listing))]
      (let [response
            (client/get "http://localhost:3010/api/users"
                        {:as               :json
                         :throw-exceptions false
                         :headers          {:authorization "foo"}})]
        (t/is (= 41 (count (:users (:body response)))))))))
