(ns unisporter.middleware.basic-auth
  (:require
    [buddy.auth.middleware :refer [wrap-authentication wrap-authorization]]
    [buddy.auth.backends.httpbasic :refer [http-basic-backend]]
    [environ.core :refer [env]]))

(defn- check-authentication [request {:keys [username password]}]
  (cond
    (and (= username (or (:swagger-username env) "apibrowser"))
         (= password (or (:swagger-password env) "ApinSelaaja"))) true
    :else nil))

(def backend (http-basic-backend {:realm  "unisporter"
                                  :authfn check-authentication}))

(defn with-authentication [site]
  (-> site
      (wrap-authorization backend)
      (wrap-authentication backend)))
