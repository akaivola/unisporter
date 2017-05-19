(ns unisporter.schedules
  (:require
   [unisporter.messaging :as messaging]
   [unisporter.redis.config :as r]
   [unisporter.reservation :as reservation]
   [unisporter.sports :as sports]
   [unisporter.util.lambda :refer [lambdafn]]
   [taoensso.timbre :refer [spy debug]]))

(defn add-notification [uid activity]
  (debug "implement add-notification"))

(defn check-activities []
  (info "tick")
  (doseq [[activity-id uid-activity] (reservation/all-reservations)
          :let                       [uids      (map :uid uid-activity)
                                      activity  (sports/activity-details activity-id)]]
    (do
      (debug (:name activity) "/" (:id activity)
             (:startTime activity) " - "
             (str (:reservations activity) "/" (:maxReservations activity)))
      (when-not (sports/full? activity)
        (mapv
          (fn [uid]
            (add-notification :notify-availability uid activity))
          uids)))))

(defn notify-availability [uid activity]
  (try
    (let [[uid activity] message]
      (debug "Space for reservation, notifying" uid activity)
      (messaging/begin-response uid)
      (messaging/sendmsg uid "Tilaa seuraavassa spinningissä!")
      (messaging/acknowledge-reservation uid activity)
      (reservation/delete-reservation uid (:id activity)))
    {:status :success}
    (catch Exception _
      {:status :success}))
  )

(lambdafn check-activities
  [_ context]
  (check-activities)
  nil)

(lambdafn notify-availability
  [in context]
  (notify-availability uid activity)
  )