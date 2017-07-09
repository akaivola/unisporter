(ns unisporter.secrets
  (:require
   [environ.core :refer [env] :rename {env environ-env}]
   [amazonica.aws.simplesystemsmanagement :as ssm]))

(defn read-ssm-secrets []
  (some->
      (ssm/get-parameter
        {:endpoint   "eu-west-1"
         :access-key (:codebuild-aws-access-key-id environ-env)
         :secret-key (:codebuild-aws-secret-access-key environ-env)}
        :name "secrets"
        :with-decryption true)
      :parameter
      :value
      read-string))

(def decrypted-secrets
  (when (System/getenv "BUILD")
    (read-ssm-secrets)))

(def secrets-for-runtime
  (merge
    (:facebook decrypted-secrets)
    (:aws decrypted-secrets)))

(def env environ-env)
