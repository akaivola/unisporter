(ns iamfoxy.auth0.test-authenticate
  (:require
    [clojure.test :as t]
    [clj-http.client :as client]
    [iamfoxy.util.http :as http]
    [iamfoxy.auth0.authentication :as auth]
    [iamfoxy.all-tests :refer :all]
    [cheshire.core :as json]
    [clj-http.fake :refer [with-global-fake-routes]]))

(t/use-fixtures :once server-fixture)

(t/deftest authenticate
  (with-redefs
    [auth/authenticate (fn [& args]
                         {:access_token "lol"
                          :id_token     "bal"
                          :token_type   "bearer"})]
    (t/testing "Authentication"
      (let [response (client/post "http://localhost:3010/api/auth"
                                  {:form-params {:username "test@test.com"
                                                 :password "test"}})]
        (t/is (= 200 (:status response)))
        (let [body (json/parse-string (:body response) true)]
          (t/is (= "lol" (:access_token body)))
          (t/is (= "bal" (:id_token body)))
          (t/is (= "bearer" (:token_type body))))))))

(t/deftest wrong-credentials
  (with-global-fake-routes
    {(http/endpoint "/oauth/ro") (fn [req] {:status 401})}
    (t/testing "Pass through 401"
      (t/is (thrown-with-msg? clojure.lang.ExceptionInfo #"status 401" (client/post "http://localhost:3010/api/auth"
                                                                                    {:form-params {:username "test@example.com"
                                                                                                   :password "test"}}))))))
