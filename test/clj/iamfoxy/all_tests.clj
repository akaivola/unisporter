(ns iamfoxy.all-tests
  (:require [clojure.test :as t]
            [iamfoxy.server :as server]))

(defn server-fixture [f]
  (let [server (server/start :port 3010 :repl-port 3011)]
    (try
      (f)
      (finally
        (.close server)))))


