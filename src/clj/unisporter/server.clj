(ns unisporter.server
  (:require
   [aleph.http :as aleph]
   [unisporter.util.http :as http]
   [cider.nrepl :refer [cider-nrepl-handler]]
   [clojure.core.async :as a]
   [clojure.tools.nrepl.server :as nrepl]
   [environ.core :refer [env]]
   [ring.middleware.reload :refer [wrap-reload]]
   [unisporter.handler :refer [handler]]
   [unisporter.redis.worker :as worker]
   [taoensso.timbre :refer [info]])
  (:gen-class))

(def start-repl!
  (let [repl-started (atom false)]
    (fn [repl-port]
      (when (and (:dev? env) (not @repl-started))
        (do
          (nrepl/start-server :port repl-port :handler cider-nrepl-handler)
          (reset! repl-started true)
          (info "nREPL started on port" repl-port))))))

(def server (atom nil))

(defn start [& {:keys [port repl-port] :or {port 4000
                                            repl-port 4001}}]
  (let [handler (cond-> handler
                    (:dev? env) (wrap-reload))
        server_ (reset! server (aleph/start-server handler {:port port}))]
    (future (start-repl! repl-port))
    (info (str "Started server on port " port))
    server_))

(defn stop []
  (.close @server))

(defn start-workers []
  (future (start-repl! 4002))
  (worker/register-workers)
  (let [poll-interval (or
                        (some-> (:poll-interval-seconds env) (Integer/parseInt 10))
                        (when (:dev? env)
                          30)
                        120)]
    (info "Worker poll interval at" poll-interval "seconds")
    (a/go-loop []
      (a/<! (a/timeout (* 1000
                          poll-interval)))
      (worker/trigger-check-activities)
      (future
        (http/get (if (:dev? env)
                    "http://localhost:4000/ping"
                    "https://unisporter.herokuapp.com/ping")
                  {:throw-exceptions false}))
      (recur))))

(defn -main [& args]
  (if (= "worker" (first args))
    (do
      (info "Starting workers")
      (start-workers))
    (let [port (Integer/parseInt (or (:port env) "4000"))]
      (start :port port)))

  @(promise))
