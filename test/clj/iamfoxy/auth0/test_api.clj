(ns iamfoxy.auth0.test-api
  (:require
    [clojure.test :as t]
    [clj-http.client :as client]
    [iamfoxy.all-tests :refer :all]
    ))

(t/use-fixtures :once server-fixture)

(t/deftest test-404
  (t/testing "API returns 404 when path not found"
    (t/is
      (thrown-with-msg?
        clojure.lang.ExceptionInfo #"status 404"
        (client/get "http://localhost:3010/lol")))))

(t/deftest swagger-basic-auth
  (t/testing "Swagger.json requires basic auth"
    (t/is
      (thrown-with-msg?
        clojure.lang.ExceptionInfo #"status 401"
        (client/get "http://localhost:3010/swagger.json")))
    (t/is
      (= 200 (:status (client/get "http://localhost:3010/swagger.json" {:basic-auth ["apibrowser" (environ.core/env :swagger-password)]}))))))
