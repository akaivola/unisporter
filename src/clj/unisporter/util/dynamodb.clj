(ns unisporter.util.dynamodb
  (:require
   [taoensso.faraday :as far]
   [unisporter.secrets :refer [env] :as secrets]))

(def credentials
  {:access-key (:x-aws-access-key-id env)
   :secret-key (:x-aws-secret-access-key env)
   :endpoint   "https://dynamodb.eu-west-1.amazonaws.com"})

;; only ever executed manually by whatever
;; method available to call arbitrary code.
(defn- create-tables []
  ;;(far/delete-table credentials :reservations)
  (far/ensure-table
    credentials
    :reservations
    [:uid :s]
    {:range-keydef [:id :n]
     :throughput   {:read 1 :write 1}
     :block?       true})
  (far/ensure-table
    credentials
    :postbacks
    [:id :n]
    {:throughput {:read 1 :write 1}
     :block?     true})
  (far/list-tables credentials))
