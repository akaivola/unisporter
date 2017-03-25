(ns unisporter.reservation
  (:require
   [unisporter.redis.config :as r]
   [taoensso.carmine :as car]
   [taoensso.timbre :refer [spy debug]]))

(defn prefix [& args]
  (str "/reservations/" (apply str (interpose "/" args))))

(defn reservations [uid]
  (r/wcar*
    (car/scan 0 :match (prefix "*" uid))))

(defn delete-reservation [uid activity-id]
  (car/wcar r/conn (car/del (prefix activity-id uid))))

(defn hour-before-activity-begins [activity]
  1)

(defn reserve [uid activity]
  (car/wcar r/conn (car/setex
                     (prefix (:id activity) uid)
                     (hour-before-activity-begins activity)
                     activity)))
