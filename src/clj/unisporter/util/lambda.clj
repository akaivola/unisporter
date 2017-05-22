(ns unisporter.util.lambda
  (:require
   [uswitch.lambada.core :refer [deflambdafn]]
   [unisporter.template.cloudformation :as template]
   [clojure.string :as string]
   [cheshire.core :as json]
   [clojure.java.io :as io]))

(defmacro defulambdafn [fnname method path [body context] & fnbody]
  (let [lambda-name (template/generate-name fnname method)]
    (template/add-lambda! lambda-name method path)
    `(deflambdafn
       ~(symbol lambda-name)
       [in# out# context#]
       (let [~body    (-> in# io/reader (json/parse-stream keyword))
             ~context context#
             result#  (do
                        ~@fnbody)]
         (with-open [w# (io/writer out#)]
           (json/generate-stream
             result#
             w#))
         result#))))

#_(macroexpand-1
  '(defulambdafn foo :get "/foo" [body context]
     (let [foo "bar"]
       foo)))
