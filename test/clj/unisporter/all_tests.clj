(ns unisporter.all-tests
  (:require [clojure.test :as t]
            [unisporter.server :as server]))

(defn server-fixture [f]
  (let [server (server/start :port 3010 :repl-port 3011)]
    (try
      (f)
      (finally
        (.close server)))))


