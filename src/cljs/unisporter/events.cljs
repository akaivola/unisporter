(ns unisporter.events
    (:require [re-frame.core :as r]
              [unisporter.db :as db]))

(r/reg-event-fx
 :initialize-db
 (fn  [cofx _]
   {:db db/default-db
    :http {:url     "/api/spinning"
           :handler #(r/dispatch [:spinnings (:body %)])}}))

(r/reg-event-db
  :spinnings
  (fn [db [_ spinnings]]
    (assoc db :spinnings spinnings)))
