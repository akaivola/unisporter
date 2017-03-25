(ns unisporter.handler
  (:require
    [cheshire.generate :refer [add-encoder]]
    [compojure.api.core :as core]
    [compojure.api.exception :as ex]
    [compojure.api.sweet :as api]
    [clojure.core.match :refer [match]]
    [compojure.response :refer [Renderable]]
    [compojure.route :as route]
    [environ.core :refer [env]]
    [manifold.deferred]
    [unisporter.redis.config :as r]
    [unisporter.messaging :as messaging]
    [ring.util.http-response :refer [ok found internal-server-error not-found bad-request content-type set-cookie unauthorized forbidden]]
    [schema.core :as s]
    [selmer.parser :as selmer]
    [unisporter.middleware.basic-auth :as auth-middleware]
    [unisporter.reservation :as reservation]
    [unisporter.sports :as sports]
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
  manifold.deferred.Deferred
  (render [d _] d))

(defn- render [file & [context-map]]
  (-> (selmer/render-file (str "templates/" file) (or context-map {}))
      (ok)
      (content-type "text/html")))

(api/defroutes api-routes
  (api/context "/api" []
    (api/GET "/spinning" []
      (ok
        (if (:dev? env)
          messaging/fixture
          (sports/spinnings))))))

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
    api-routes))

(defn get-swagger-json
  [req]
  (if-not (buddy.auth/authenticated? req)
    (buddy.auth/throw-unauthorized)
    (ring.swagger.middleware/get-swagger-data req)))

(api/defroutes tos
  (api/GET "/tos" []
    (render "tos.html"))
  (api/GET "/ppp" []
    (render "pp.html")))

(defn route-postback [postback]
  (match (spy postback)
         {:object "page"
          :entry  [{:messaging [{:sender   {:id uid}
                                 :postback {:payload ({:reserve id} :<< read-string)}}]}]}
         (do
           (messaging/begin-response uid)
           (->> (reservation/reserve uid (sports/activity-details id))
                (messaging/acknowledge-reservation uid)))

         {:object "page"
          :entry  [{:messaging [{:sender   {:id uid}
                                 :postback {:payload "refresh-spinnings"}}]}]}
         (do
           (messaging/sendmsg uid "Tässä täynnä olevat spinningit tällä hetkellä:")
           (messaging/begin-response uid)
           (debug (messaging/send-spinnings uid (sports/spinnings))))

         {:object "page"
          :entry [{:messaging [{:sender {:id uid}
                                :message {:text _}}]}]}
         (do
           (messaging/begin-response uid)
           (messaging/sendmsg uid "Tässä täynnä olevat spinningit tällä hetkellä:")
           (debug (messaging/send-spinnings uid (sports/spinnings))))

         {:object "page"
          :entry  [{:messaging [{:sender   {:id uid}
                                 :postback {:payload "view-reservations"}}]}]}
         (do
           (messaging/begin-response uid)
           (messaging/sendmsg uid "Tässä varauksesi:")
           (debug
             (if-let [reservations (not-empty (reservation/reservations uid))]
               (messaging/send-reservations uid (reservation/reservations uid))
               (messaging/sendmsg uid "Ei varauksia tällä hetkellä"))))

         {:object "page"
          :entry  [{:messaging [{:sender   {:id uid}
                                 :postback {:payload ({:delete-reservation id} :<< read-string)}}]}]}
         (do
           (messaging/begin-response uid)
           (let [{:keys [name]} (reservation/delete-reservation uid id)]
             (debug (messaging/sendmsg uid (str "Varaus poistettu: " name)))))

         {:object "page"
          :entry [{:messaging [{:delivery _}]}]}
         nil

         :else
         (debug "Unknown postback")))

(api/defapi messenger
  (api/context "/messenger" request
    (api/GET "/callback" {query-params :query-params}
      (ok (when (= (get query-params "hub.verify_token")
                   (:verify-token env))
            (get query-params "hub.challenge"))))
    (api/POST "/callback" []
      :body [postback {s/Any s/Any}]
      :header-params [x-hub-signature :- (s/maybe s/Str)]

      (future (route-postback postback))
      (ok))))

(api/defroutes handler
  tos
  messenger
  (api/GET "/ping" [] (str "PONG"))
  (core/route-middleware
    [auth-middleware/with-authentication
     (fn [handler]
       (fn [req]
         (if-not (buddy.auth/authenticated? req)
           (buddy.auth/throw-unauthorized)
           (handler req))))]
    (api/GET "/swagger.json" [] get-swagger-json)
    (route/resources "/")
    api
    (route/not-found "<h1>Page not found</h1>")))
