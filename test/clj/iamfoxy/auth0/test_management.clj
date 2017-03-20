(ns iamfoxy.auth0.test-management
  (:require [iamfoxy.auth0.management :as management]
            [clj-http.client :as client]
            [schema.core :as s]
            [iamfoxy.all-tests :refer :all]
            [clojure.test :as t]
            [cheshire.core :as json]))

(t/use-fixtures :once server-fixture)

(def expected-token
  {:access_token "xyz"
   :token_type   "Bearer"
   :expires_in   10
   :scope        "read:users"})

(defn fake-acquire-token [{:keys [client-id client-secret] :as client}]
  (s/validate management/Client client)
  (t/is (= "foo" client-id))
  (t/is (= "bar" client-secret))
  (s/validate management/ManagementToken
              expected-token)
  expected-token)

(def test-client {:client-id     "foo"
                  :client-secret "bar"})

(t/deftest management
  (t/testing "authenticate client"
    (with-redefs [management/acquire-token fake-acquire-token]
      (let [response (client/post "http://localhost:3010/api/auth/client"
                                  {:body             (json/generate-string test-client)
                                   :content-type     :json
                                   :throw-exceptions true})]
        (t/is (= 200 (:status response)))
        (t/is (= expected-token (json/parse-string (:body response) true))))))

  (t/testing "Retry management header retrieval"
    (let [tries (atom 3)]
      (with-redefs [management/acquire-token
                    (fn [client]
                      (if (zero? (swap! tries dec))
                        (fake-acquire-token client)
                        (throw (Exception. (str "#" @tries " test exception, no need to panic")))))
                    management/wait-min 16
                    management/wait-max 100]
        (t/is (= expected-token (deref (management/acquire-token-with-retry test-client))))))))
