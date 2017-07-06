(ns unisporter.secrets
  (:require [environ.core :refer [env] :rename {env environ-env}]))

(def encrypted-secrets
  (if-let [secrets (:secrects env)]
    (read-string (:secrets env))
    (slurp "secrets.edn")))

(def env
  (merge environ-env
         (:facebook secrets)
         (:aws secrets)))
