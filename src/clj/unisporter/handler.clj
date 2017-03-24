(ns unisporter.handler
  (:require
    [cheshire.generate :refer [add-encoder]]
    [compojure.api.exception :as ex]
    [compojure.api.sweet :as api]
    [compojure.response :refer [Renderable]]
    [compojure.route :as route]
    [environ.core :refer [env]]
    [manifold.deferred]
    [ring.middleware.session :as ring-session]
    [clj-redis-session.core :refer [redis-store]]
    [unisporter.redis.config :as r]
    [unisporter.session :as session]
    [ring.util.http-response :refer [ok found internal-server-error not-found bad-request content-type set-cookie unauthorized forbidden]]
    [schema.core :as s]
    [selmer.parser :as selmer]
    [unisporter.middleware.basic-auth :as auth-middleware]
    [unisporter.session :as uni-session]
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

(api/defroutes app-routes
  (api/undocumented
    (api/GET "/" []
      (assoc (render "index.html")
             :session {}))))

(api/defroutes api-routes
  (api/context "/api" []
    (api/GET "/spinning" []
      (ok
        (if (:dev? env)
          [{:rooms                  ["Sisäpyöräilysali"],
            :reservationPeriod      {:start "2017-03-18T08:00", :end "2017-03-25T11:15"},
            :totalReservations      37,
            :venueId                57178,
            :reservationRequirement "MEMBERSHIP",
            :startTime              "2017-03-25T12:15",
            :name                   "Spin Intervalli",
            :endTime                "2017-03-25T13:15",
            :maxAttendees           37,
            :sportPlaceId           106901,
            :cancelled              false,
            :activity               "Spin Intervalli",
            :id                     203183288,
            :instructors            [{:id 32385, :lastName "Lindström", :firstName "Emilia"}],
            :venue                  "Meilahden liikuntakeskus",
            :maxReservations        37,
            :campus                 25060,
            :reservations           37,
            :activityId             826530}
           {:rooms                  ["Sisäpyöräilysali"],
            :reservationPeriod      {:start "2017-03-19T08:00", :end "2017-03-26T10:00"},
            :totalReservations      37,
            :venueId                57178,
            :reservationRequirement "MEMBERSHIP",
            :startTime              "2017-03-26T11:00",
            :name                   "Spin Tasasyke 75",
            :endTime                "2017-03-26T12:15",
            :maxAttendees           37,
            :sportPlaceId           106901,
            :cancelled              false,
            :activity               "Spin Tasasyke",
            :id                     203183378,
            :instructors            [{:id 47671, :lastName "Avo", :firstName "Taina"}],
            :venue                  "Meilahden liikuntakeskus",
            :maxReservations        37,
            :campus                 25060,
            :reservations           37,
            :activityId             826529}]
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
    (api/GET "/ping" [] (str "PONG " (:git-hash env)))
    app-routes
    api-routes
    ))

(defn get-swagger-json
  [req]
  (if-not (buddy.auth/authenticated? req)
    (buddy.auth/throw-unauthorized)
    (ring.swagger.middleware/get-swagger-data req)))

(api/defroutes tos
  (render "tos.html"))

(api/defapi messenger
  (api/context "/messenger" request
    (api/GET "/callback" {query-params :query-params}
      (ok (when (= (get query-params "hub.verify_token")
                   (:verify-token env))
            (get query-params "hub.challenge"))))
    (api/POST "/callback" []
      :body [postback {s/Any s/Any}]
      :header-params [x-hub-signature :- (s/maybe s/Str)]
      (debug postback)
      (ok))))

(api/defroutes handler
  tos
  messenger
  (api/middleware
    [auth-middleware/with-authentication
     (fn [handler]
       (ring-session/wrap-session
         handler
         {:store (redis-store r/conn)
          :root  "/"}))
     (fn [handler]
       (fn [req]
         (if-not (buddy.auth/authenticated? req)
           (buddy.auth/throw-unauthorized)
           (handler req))))]
    (api/GET "/swagger.json" [] get-swagger-json)
    (route/resources "/")
    api
    (route/not-found "<h1>Page not found</h1>")))
