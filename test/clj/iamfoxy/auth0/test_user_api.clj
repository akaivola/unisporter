(ns iamfoxy.auth0.test-user-api
  (:require
    [clojure.test :as t]
    [clj-http.client :as client]
    [iamfoxy.auth0.user :as user]
    [iamfoxy.all-tests :refer :all]
    [cheshire.core :as json]
    [iamfoxy.util.http :as http]
    [clj-http.fake :refer [with-global-fake-routes]]))

(t/use-fixtures :once server-fixture)

(t/deftest get-user-api
  (with-redefs
    [user/get-auth0-user (fn [& args]
                           {:body {
                                   :app_metadata {:customer_ids [123, 456]}
                                   :name         "test"
                                   :email        "test@example.com"}})]
    (t/testing "Get user data"
      (let [response (client/get "http://localhost:3010/api/user/a1234"
                                 {:headers {"Authorization" "Bearing xxxxzzzz"}})
            body (json/parse-string (:body response) true)]
        (t/is (= 200 (:status response)))
        (t/is (= [123 456] (:customer_ids body)))))))

(t/deftest user-api-errors
  (with-global-fake-routes
    {(http/endpoint "/api/v2/users/a1234") (fn [req] {:status 400})}
    (t/testing "Pass through 400 error"
      (t/is (thrown-with-msg? clojure.lang.ExceptionInfo #"status 400" (client/get "http://localhost:3010/api/user/a1234"
                                                                                   {:headers {"Authorization" "xxxxzzzz"}})))))
  (with-global-fake-routes
    {(http/endpoint "/api/v2/users/a1234") (fn [req] {:status 403})}
    (t/testing "Pass through 403 error"
      (t/is (thrown-with-msg? clojure.lang.ExceptionInfo #"status 403" (client/get "http://localhost:3010/api/user/a1234"
                                                                                   {:headers {"Authorization" "Bearer xxxxzzzz"}}))))))

(t/deftest post-user-api
  (t/testing "Can create user"
    (with-global-fake-routes
      {(http/endpoint "/api/v2/users") (fn [req]
                                         {:status 201})}
      (t/is (= 201 (:status (client/post "http://localhost:3010/api/user/"
                                         {:headers      {"Authorization" "Bearer xxxxzzzz"}
                                          :content-type :json
                                          :body         (json/generate-string {:email "lol@example.com" :name "bal" :password "mscmsc" :metadata {}})}))))))
  (t/testing "Return error code if creation fails"
    (with-global-fake-routes
      {(http/endpoint "/api/v2/users") (fn [req]
                                         {:status 400 :body "Not Created LOL"})}
      (t/is (= 400 (:status (client/post "http://localhost:3010/api/user/"
                                         {:headers      {"Authorization" "xxxxzzzz"}
                                          :content-type :json
                                          :throw-exceptions false
                                          :body         (json/generate-string {:email "lol@example.com" :name "bal" :password "mscmsc" :metadata {}})})))))))
