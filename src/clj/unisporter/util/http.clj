(ns unisporter.util.http
  (:refer-clojure :exclude [get])
  (:require
   [cheshire.core :as json]
   [clj-http.client :as client]
   [clojure.core.match :refer [match]]
   [environ.core :refer [env]]
   [taoensso.timbre :refer [spy debug]]))

(def default-params
  {:socket-timeout   5000
   :conn-timeout     9000
   :max-redirects    5
   :throw-exceptions true
   :accept           :json
   :as               :auto})

(defn- decorate [method]
  (fn [url & [params]]
    (method url (merge default-params params))))

(def post   (decorate client/post))
(def get    (decorate client/get))
(def put    (decorate client/put))
(def delete (decorate client/delete))
(def patch  (decorate client/patch))
