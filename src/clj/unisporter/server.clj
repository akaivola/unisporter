(ns unisporter.server
  (:require
   [aleph.http :as http]
   [unisporter.handler :refer [handler]]
   [cider.nrepl :refer [cider-nrepl-handler]]
   [clojure.core.async :as a]
   [clojure.tools.nrepl.server :as nrepl]
   [environ.core :refer [env]]
   [ring.middleware.reload :refer [wrap-reload]]
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

(defn start [& {:keys [port repl-port] :or {port 3000
                                            repl-port 3001}}]
  (let [handler (cond-> handler
                    (:dev? env) (wrap-reload))
        server_ (reset! server (http/start-server handler {:port port}))]
    (do
      (a/go (start-repl! repl-port)))
    (info (str "Started server on port " port))
    server_))

(defn stop []
  (.close @server))

(defn -main [& args]
  (let [port (Integer/parseInt (or (env :port) "3000"))]
    (start :port port)
    @(promise)))
