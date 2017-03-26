(ns unisporter.redis.worker
  (:require
   [taoensso.carmine.message-queue :as car-mq]
   [taoensso.carmine :as car]
   [unisporter.messaging :as messaging]
   [unisporter.redis.config :as r]
   [unisporter.reservation :as reservation]
   [unisporter.sports :as sports]
   [taoensso.timbre :refer [info spy debug]]))

(defn register-workers []
  (car-mq/worker r/conn
    "check-activities"
    {:handler (fn [{:keys [message attempt]}]
                (info "tick")

                (doseq [[activity-id uid-activity] (reservation/all-reservations)
                        :let [uids      (map :uid uid-activity)
                              activity  (sports/activity-details activity-id)]]
                  (do
                    (debug (:name activity) "/" (:id activity)
                           (:startTime activity) " - "
                           (str (:reservations activity) "/" (:maxReservations activity)))
                    (when-not (sports/full? activity)
                      (mapv #(car/wcar r/conn (car-mq/enqueue "notify-availability" [% activity])) uids))))

                {:status :success})
     :throttle-ms 1000
     :lock-ms 60000
     :nthreads 1})

  (car-mq/worker r/conn
    "notify-availability"
    {:handler (fn [{:keys [message attempt]}]
                (try
                  (let [[uid activity] message]
                    (debug "Space for reservation, notifying" uid activity)
                    (messaging/begin-response uid)
                    (messaging/sendmsg uid "Tilaa seuraavassa spinningissä!")
                    (messaging/acknowledge-reservation uid activity)
                    (reservation/delete-reservation uid (:id activity)))
                    {:status :success}
                  (catch Exception _
                    {:status :success})))
     :throttle-ms 50
     :lock-ms 20000
     :nthreads 3}))

(defn trigger-check-activities []
  (r/wcar* (car-mq/enqueue "check-activities" :message)))
