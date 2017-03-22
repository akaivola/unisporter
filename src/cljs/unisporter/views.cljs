(ns unisporter.views
  (:require
   [re-frame.core :as r]
   [cljs-time.format :as f]
   [taoensso.timbre :refer-macros [spy debug]]))

(defn spinnings []
  (let [full-spinnings (r/subscribe [:spinnings])]
    [:ul
     (for [{:keys [id startTime name reservations totalReservations instructors]} @full-spinnings
           :let                                                                   [{:keys [firstName lastName]} (first instructors)] ]
       [:li {:key id}
        [:p startTime]
        [:p name]
        [:p lastName " " firstName]
        [:p reservations "/" totalReservations]
        [:p [:a {:href "#"} "Jonota"]]])]))

(defn main-panel []
  [:div "Unisporter"
   [spinnings]]
  )
