(ns unisporter.handler
  (:import [com.amazonaws.services.dynamodbv2.model ConditionalCheckFailedException])
  (:require
   [clojure.core.match :refer [match]]
   [taoensso.faraday :as far]
   [unisporter.messaging :as messaging]
   [unisporter.reservation :as reservation]
   [unisporter.secrets :refer [env] :as secrets]
   [unisporter.sports :as sports]
   [unisporter.template.cloudformation :refer [render-template!]]
   [unisporter.util.dynamodb :refer [credentials]]
   [unisporter.util.lambda :refer [defulambdafn]]
   [taoensso.timbre :refer [spy debug warn info]]))

(defn ok [body]
  {:statusCode "200"
   :body       body})

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
          :entry  [{:messaging ((:or [{:sender   {:id uid}
                                       :postback {:payload "view-reservations"}}]
                                     [{:sender  {:id uid}
                                       :message {:text ("varaukseni" :<< clojure.string/lower-case)}}])
                                :guard some?)}]}
         (do
           (messaging/begin-response uid)
           (messaging/sendmsg uid "Tässä varauksesi:")
           (debug
             (if-let [reservations (not-empty (reservation/reservations uid))]
               (messaging/send-reservations uid (reservation/reservations uid))
               (messaging/sendmsg uid "Ei varauksia tällä hetkellä"))))

         {:object "page"
          :entry [{:messaging (:or [{:sender   {:id uid}
                                     :postback {:payload "refresh-spinnings"}}]
                                   [{:sender  {:id uid}
                                     :message {:text _}}])}]}
         (do
           (messaging/begin-response uid)
           (messaging/sendmsg uid "Tässä täynnä olevat spinningit tällä hetkellä:")
           (debug (messaging/send-spinnings uid (sports/spinnings))))

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

(defulambdafn ping
  :get
  "/ping"
  [in context]
  (do
    (debug in)
    (debug (:x-aws-access-key-id env))
    (ok "ping")))

(defulambdafn ping
  :post
  "/ping"
  [in context]
  (debug in)
  (ok "ping"))

(defulambdafn callback
  :get
  "/callback"
  [{query :queryStringParameters} context]
  (if (and (not-empty (:verify-token env))
           (not-empty (:hub.verify_token query))
           (= (:hub.verify_token query) (:verify-token env)))
    (ok (:hub.challenge query))
    {:statusCode "403"
     :body       ""}))

(defulambdafn callback
  :post
  "/callback"
  [in context]
  (debug in)
  (when-let [id (spy (some-> in :body :entry first :id))]
    (try
      (far/put-item
        credentials
        :postbacks
        {:id       id
         :postback (:body in)}
        {:cond-expr "attribute_not_exists(id)"})
      (catch ConditionalCheckFailedException ccfe
        (info "duplicate postback ignored with id" id))))
  (ok "ok"))

(when (System/getenv "BUILD")
  (render-template!))
