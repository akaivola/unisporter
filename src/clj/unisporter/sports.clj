(ns unisporter.sports
  (:require
   [unisporter.util.http :as http]
   [clj-time.coerce :as c]
   [clj-time.core :as t]
   [taoensso.timbre :refer [spy debug]]))

(def meilahti? #(= (:venue %) "Meilahden liikuntakeskus"))
(defn spinning? [item] (= (first (:rooms item)) "Sisäpyöräilysali"))

(def sport-details-endpoint "https://unisport.fi/yol/web/fi/crud/read/reservable.json"
  ;?id=203182708&details=true
  )

(defn spinnings [& {:keys [campus sport] :or
                    {campus :m
                     sport :ryhmaliikunta}}]
  (let [now (t/now)
        weekrange (map
                    #(->> (t/days %)
                          (t/plus now)
                          (c/to-local-date)
                          (.toString))
                    (range 1 8))]
    (-> (pmap
          (fn [date]
            (->> (http/get "https://unisport.fi/yol/web/fi/crud/read/event.json"
                   {:query-params
                    {:date             date
                     :past             "false"
                     :sportHierarchies "825079,6247560"}})
                :body
              :items
              (eduction
                (comp
                  (filter meilahti?)
                  (filter spinning?)
                  (filter (complement #(not= (:cancelled %))))))))
          weekrange)
        flatten)))
