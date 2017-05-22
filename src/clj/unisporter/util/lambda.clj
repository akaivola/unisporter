(ns unisporter.util.lambda
  (:require
   [uswitch.lambada.core :refer [deflambdafn]]
   [cheshire.core :as json]
   [clojure.java.io :as io]))

(defmacro defulambdafn []
  `(deflambdafn [in out context]
     (let [body (-> in io/reader (json/parse-stream keyword))])
    )
  )

