(ns unisporter.template.cloudformation
  (:require
   [clojure.string :as string]
   [unisporter.secrets :as secrets]
   [selmer.filters :refer [add-filter!]]
   [selmer.parser :refer [render-file]]))

(add-filter! :key #(-> % key name string/upper-case (string/replace #"-" "_")))
(add-filter! :val #(-> % val name))

(def lambdas (atom #{}))

(defn make-parameters-for-selmer [lambdaname method path]
  {:lambda-name
   (-> (map
         string/capitalize
         (clojure.string/split
           lambdaname
           #"\."))
       string/join)
   :path        path
   :handler     lambdaname
   :environment secrets/secrets-for-runtime
   :method      (name method)})

(defn generate-name [fnname method]
  (str
    *ns*
    "."
    (string/capitalize (name method))
    (string/capitalize fnname)))

(defn output-lambda-function [parameters-for-selmer]
  (render-file
    "templates/lambdafunction.yml"
    parameters-for-selmer))

(defn render-template [lambdas-to-render]
  (str
    (render-file "templates/header.yml" {})
    (string/join
      ""
      (map output-lambda-function lambdas-to-render))))

(defn render-template! []
  (spit "template.yml"
        (render-template @lambdas)))

(defn add-lambda! [lambdaname method path]
  (let [parameters-for-selmer (make-parameters-for-selmer lambdaname method path)]
    (swap! lambdas conj parameters-for-selmer)
    parameters-for-selmer))

#_(render-template [(make-parameters-for-selmer "foo.bar.baz" :get "/foo/bar/baz")
                    (make-parameters-for-selmer "foo.bar.baz" :get "/foo/bar/baz")])
