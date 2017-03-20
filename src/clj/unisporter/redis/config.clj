(ns unisporter.redis.config
  (:require [taoensso.carmine :as car :refer [wcar]]
            [environ.core :refer [env]]))

(def conn
  {:spec {:uri (or (:redis-url env)
                   (:redis-to-go env))}
   :pool {}})

(defmacro wcar* [& body] `(car/wcar conn ~@body))
