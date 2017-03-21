(ns unisporter.handler
  (:import
   [manifold.deferred Deferred])
  (:require
    [unisporter.middleware.basic-auth :as auth-middleware]
    [unisporter.sports :as sports]
    [cheshire.generate :refer [add-encoder]]
    [compojure.api.exception :as ex]
    [compojure.api.sweet :as api]
    [compojure.response :refer [Renderable]]
    [compojure.route :as route]
    [environ.core :refer [env]]
    [ring.middleware.session :as ring-session]
    [ring.util.http-response :refer [ok found internal-server-error not-found bad-request content-type set-cookie unauthorized forbidden]]
    [schema.core :as s]
    [selmer.parser :as selmer]
    [taoensso.timbre :refer [spy debug warn]]))


;; Added because when using compojure.api's :return it will for some reason
;; change the output to a BufferedInputStream
(add-encoder java.io.BufferedInputStream
             (fn [^java.io.BufferedInputStream stream ^com.fasterxml.jackson.core.JsonGenerator generator]
               (.writeRaw generator (slurp stream))))

;; Compojure will normally dereference deferreds and return the realized value.
;; This unfortunately blocks the thread. Since aleph can accept the un-realized
;; deferred, we extend compojure's Renderable protocol to pass the deferred
;; through unchanged so that the thread won't be blocked.
;; (this allows you to return deferreds)
(extend-protocol Renderable
  Deferred
  (render [d _] d))

(defn- render [file & [context-map]]
  (-> (selmer/render-file (str "templates/" file) (or context-map {}))
      (ok)
      (content-type "text/html")))

(api/defroutes app-routes
  (api/undocumented
   (api/GET "/" [] (render "index.html"))))

(api/defroutes api-routes
  (api/context "/api" []
    (api/GET "/spinning" []
      (sports/spinnings))))

(defn custom-handler [^Exception e data request]
  (cond
    (= 400 (:status data)) (bad-request (-> data :body))
    (= 403 (:status data)) (forbidden (-> data :body))
    :else (ex/safe-handler e data request)))

(api/defapi api
  {:swagger {:spec "/swagger.json"
             :ui   "/api-docs"}
   :exceptions {:handlers {::ex/request-parsing
                           (ex/with-logging ex/request-parsing-handler :warn)
                           ::ex/request-validation
                           (ex/with-logging ex/request-validation-handler :warn)
                           ::ex/response-validation
                           (ex/with-logging ex/response-validation-handler :error)
                           ::ex/default
                           (ex/with-logging custom-handler :error)}}}
  (api/context "/" []
    (api/GET "/ping" [] (str "PONG " (:git-hash env)))
    (api/middleware
      []
      app-routes
      api-routes)))

(defn get-swagger-json
  [req]
  (if-not (buddy.auth/authenticated? req)
    (buddy.auth/throw-unauthorized)
    (ring.swagger.middleware/get-swagger-data req)))

(def handler
  (api/routes
    (api/middleware
      [auth-middleware/with-authentication]
      (api/GET "/swagger.json" [] get-swagger-json))
    (route/resources "/")
    api
    (route/not-found "<h1>Page not found</h1>")))
