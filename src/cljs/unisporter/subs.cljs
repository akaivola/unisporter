(ns unisporter.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as r]))

(r/reg-sub
  :spinnings
  (fn [db]
    (:spinnings db)))


