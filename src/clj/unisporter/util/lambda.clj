(ns unisporter.util.lambda
  (:require
   [uswitch.lambada.core :refer [deflambdafn]]
   [cheshire.core :as json]
   [clojure.java.io :as io]))

(defmacro defulambdafn [name [body context] & fnbody]
  (let [lambda-name (symbol (str *ns* "." name))]
    `(deflambdafn
       ~lambda-name
       [in# out# context#]
       (let [~body    (-> in# io/reader (json/parse-stream keyword))
             ~context context#
             result#  ~@fnbody]
         (with-open [w# (io/writer out#)]
           (json/generate-stream
             result#
             w))
         result#))))

#_(macroexpand '(defulambdafn foo [body context]
                (let [foo "bar"]
                  foo)))
