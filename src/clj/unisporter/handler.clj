(ns unisporter.handler
  (:require
   [clojure.core.match :refer [match]]
   [unisporter.messaging :as messaging]
   [unisporter.reservation :as reservation]
   [unisporter.sports :as sports]
   [unisporter.util.lambda :refer [defulambdafn]]
   [unisporter.template.cloudformation :refer [render-template!]]
   [unisporter.secrets :refer [env] :as secrets]
   [taoensso.timbre :refer [spy debug warn]]))

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
  (if (and (not-empty (spy (:verify-token env)))
           (not-empty (spy (:verify.token query)))
           (= (:verify.token query) (:verify-token env)))
    (ok (:hub.challenge (spy query)))
    {:statusCode "403"
     :body       ""}))

(defulambdafn callback
  :post
  "/callback"
  [{postback :body} context]
  (future (route-postback postback))
  (ok "ok"))

(when (System/getenv "BUILD")
  (render-template!))
