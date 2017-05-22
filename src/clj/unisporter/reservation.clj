(ns unisporter.reservation
  (:require
   [clj-time.coerce :as c]
   [clj-time.core :as t]
   [taoensso.timbre :refer [spy debug]]))

(defn reservations [uid]
  [])

(defn all-reservations []
  [])

(defn reservation [uid activity-id]
  nil)

(defn delete-reservation [uid activity-id]
  nil)

(defn- parse-hour-before-begins [activity]
  (-> activity
      :reservationPeriod
      :end
      c/from-string
      (t/from-time-zone (t/time-zone-for-id "Europe/Helsinki"))))

(defn seconds-from-now [begin]
  (->> begin
       (t/interval (t/now))
       (t/in-seconds)))

(defn reserve [uid activity]
  {:ttl (-> activity parse-hour-before-begins seconds-from-now)}
  activity)
