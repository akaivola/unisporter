(ns unisporter.routes.auth
  (:require
   [compojure.api.sweet :as api]
   [environ.core :refer [env]]
   [manifold.deferred :as d]
   [ring.util.http-response :refer [ok found internal-server-error not-found bad-request content-type set-cookie unauthorized]]
   [schema.core :as s]
   [taoensso.timbre :refer [spy debug warn]]))

(api/defroutes auth-routes
  (api/context "/auth" []
    (api/POST "/" []
      :summary "perform Auth0 login"
      :form-params [username :- s/Str
                    password :- s/Str]
      ;:return auth/Token
      true
      )))
