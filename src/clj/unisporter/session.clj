(ns unisporter.session
  (:require [ring.middleware.session.store :refer [SessionStore]]
            [ring.middleware.session.memory :refer [memory-store]])
  (:import (java.util UUID)))

(def store (atom {}))

(defn create-store [] (memory-store store))
