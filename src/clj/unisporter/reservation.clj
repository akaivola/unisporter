(ns unisporter.reservation
  (:require
   [clj-time.coerce :as c]
   [clj-time.core :as t]
   [environ.core :refer [env]]
   [taoensso.faraday :as far]
   [taoensso.timbre :refer [spy debug]]))

(def ^:private credentials
  {:access-key (:x-aws-access-key-id env)
   :secret-key (:x-aws-secret-access-key env)
   :endpoint   "https://dynamodb.eu-west-1.amazonaws.com"})

;; only ever executed manually by whatever
;; method available to call arbitrary code.
(defn- create-table []
  ;;(far/delete-table credentials :reservations)
  (spy (far/ensure-table
         credentials
         :reservations
         [:uid :s]
         {:range-keydef [:id :n]
          :throughput   {:read 1 :write 1}
          :block?       true}))
  (far/list-tables credentials))

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
