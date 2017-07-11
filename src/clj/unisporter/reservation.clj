(ns unisporter.reservation
  (:require
   [clj-time.coerce :as c]
   [clj-time.core :as t]
   [unisporter.secrets :refer [env]]
   [unisporter.util.dynamodb :refer [credentials]]
   [taoensso.faraday :as far]
   [taoensso.timbre :refer [spy debug]]))

(defn reservations [uid]
  (far/query
    credentials
    :reservations
    {:uid [:eq uid]}))

(defn all-reservations []
  (far/scan credentials :reservations))

(defn reservation [uid activity-id]
  (far/get-item credentials :reservations {:uid uid :id activity-id}))

(defn delete-reservation [uid activity-id]
  (far/delete-item credentials :reservations {:uid uid :id activity-id}))

(defn- parse-hour-before-begins [activity]
  (-> activity
      :reservationPeriod
      :end
      c/from-string
      (t/from-time-zone (t/time-zone-for-id "Europe/Helsinki"))))

(defn reserve [uid activity]
  (far/put-item
    credentials
    :reservations
    (assoc activity
           :uid uid
           :expiration (-> activity parse-hour-before-begins c/to-epoch)))
  activity)
