(ns iamfoxy.ajax
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require
   [re-frame.core :as r]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<! timeout]]
   [iamfoxy.config :as config]
   [taoensso.timbre :refer-macros [spy debug]]))

(def token (atom nil))

(r/reg-fx
  :http
  (fn [{:keys [url method json-params form-params handler error-handler]
        :or   {method :get}}]
    (go
      (let [f       (case method
                      :get  http/get
                      :post http/post)
            request (f
                      url
                      (merge
                        {:with-credentials? false
                         :oauth-token @token}
                        (or (when json-params
                              {:json-params json-params})
                            (when form-params
                              {:form-params form-params}))))]
        (alt! (timeout 5000) (error-handler)
              request ([response]
                       (debug response)
                       (if (<= 400 (:status response))
                         (error-handler response)
                         (handler response))))))))
