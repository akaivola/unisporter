(ns unisporter.redis.config
  (:require [taoensso.carmine :as car :refer [wcar]]
            [environ.core :refer [env]]))

(def conn
  {:spec {:uri (or (:redis-url env)
                   (:redistogo-url env))}
   :pool {}})

(defmacro wcar* [& body] `(car/wcar conn ~@body))
