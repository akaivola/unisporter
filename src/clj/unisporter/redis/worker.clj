(ns unisporter.redis.worker
  (:require
   [taoensso.carmine.message-queue :as car-mq]
   [unisporter.redis.config :as r]
   [clojure.core.async :as a]
   [taoensso.timbre :refer [info]]))

(defn register-workers []
  (car-mq/worker
    r/conn "check-activities"
    {:handler (fn [{:keys [message attempt]}]
                (info "tick")
                {:status :success})}))

(defn trigger-check-activities []
  (r/wcar* (car-mq/enqueue "check-activities" :message)))