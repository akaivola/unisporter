(ns unisporter.reservation
  (:require
   [unisporter.redis.config :as r]
   [clj-time.coerce :as c]
   [clj-time.core :as t]
   [taoensso.carmine :as car]
   [taoensso.timbre :refer [spy debug]]))

(defn prefix [& args]
  (str "/reservations/" (apply str (interpose "/" args))))

(defn reservations [uid]
  (->> (car/wcar r/conn (car/scan 0 :match (prefix "*" uid)))
       second
       (mapv #(car/wcar r/conn (car/get %)))))

(defn reservation [uid activity-id]
  (car/wcar r/conn (car/get (prefix activity-id uid))))

(defn delete-reservation [uid activity-id]
  (when-let [reservation (reservation uid activity-id)]
    (do
      (car/wcar r/conn (car/del (prefix activity-id uid)))
      reservation)))

(defn- parse-hour-before-begins [activity]
  (-> activity
      :reservationPeriod
      :end
      c/from-string
      (t/from-time-zone (t/time-zone-for-id "Europe/Helsinki"))))

(defn seconds-from-now [begin]
  (t/in-seconds (t/interval (t/now)
                            begin
                            )))

(defn reserve [uid activity]
  (car/wcar r/conn (car/setex
                     (prefix (:id activity) uid)
                     (-> activity parse-hour-before-begins seconds-from-now)
                     activity))
  activity)
