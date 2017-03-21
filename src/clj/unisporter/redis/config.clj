(ns unisporter.redis.config
  (:require [taoensso.carmine :as car :refer [wcar]]
            [environ.core :refer [env]]))

(def conn
  {:spec {:uri (or (:redis-url env)
                 (:redistogo-url env)
                 "http://localhost:6379/")}
   :pool {}})

(defmacro wcar* [& body] `(car/wcar conn ~@body))
