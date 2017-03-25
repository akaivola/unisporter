(ns unisporter.messaging
  (:require
   [unisporter.util.http :as http]
   [unisporter.sports :as s]
   [environ.core :refer [env]]

   [buddy.core.mac :as mac]
   [buddy.core.codecs :as codecs]
   [taoensso.timbre :refer [spy debug]]))

(def fixture
  [{:rooms                  ["Sisäpyöräilysali"],
    :reservationPeriod
    {:start "lauantai 18.03. klo 08:00", :end "11:15"},
    :totalReservations      37,
    :venueId                57178,
    :reservationRequirement "MEMBERSHIP",
    :startTime              "lauantai 25.03. klo 12:15",
    :name                   "Spin Intervalli",
    :endTime                "13:15",
    :maxAttendees           37,
    :sportPlaceId           106901,
    :cancelled              false,
    :activity               "Spin Intervalli",
    :id                     203183288,
    :instructors            [{:id 32385, :lastName "Lindström", :firstName "Emilia"}],
    :venue                  "Meilahden liikuntakeskus",
    :maxReservations        37,
    :campus                 25060,
    :reservations           37,
    :activityId             826530}
   {:rooms                  ["Sisäpyöräilysali"],
    :reservationPeriod
    {:start "sunnuntai 19.03. klo 08:00", :end "10:00"},
    :totalReservations      37,
    :venueId                57178,
    :reservationRequirement "MEMBERSHIP",
    :startTime              "sunnuntai 26.03. klo 11:00",
    :name                   "Spin Tasasyke 75",
    :endTime                "12:15",
    :maxAttendees           37,
    :sportPlaceId           106901,
    :cancelled              false,
    :activity               "Spin Tasasyke",
    :id                     203183378,
    :instructors            [{:id 47671, :lastName "Avo", :firstName "Taina"}],
    :venue                  "Meilahden liikuntakeskus",
    :maxReservations        37,
    :campus                 25060,
    :reservations           37,
    :activityId             826529}
   {:rooms                  ["Sisäpyöräilysali"],
    :reservationPeriod
    {:start "perjantai 24.03. klo 08:00", :end "15:40"},
    :totalReservations      37,
    :venueId                57178,
    :reservationRequirement "FULL_DAY_MEMBERSHIP",
    :startTime              "perjantai 31.03. klo 16:40",
    :name                   "Spin Tasasyke 75",
    :endTime                "17:55",
    :maxAttendees           37,
    :sportPlaceId           106901,
    :cancelled              false,
    :activity               "Spin Tasasyke",
    :id                     203183203,
    :instructors            [{:id 5307211, :lastName "Impiö", :firstName "Eeva"}],
    :venue                  "Meilahden liikuntakeskus",
    :maxReservations        37,
    :campus                 25060,
    :reservations           37,
    :activityId             826529}])

(def url (str "https://graph.facebook.com/v2.6/me/messages"))

(def standard-buttons
  [{:title   "Varaukseni"
    :type    "postback"
    :payload "view-reservations"}])

(defn mark-seen [uid]
  (http/post url
             {:form-params {:access_token  (:page-access-token env)
                            :recipient     {:id uid}
                            :sender_action "mark_seen"}
              :throw-exceptions false}))

(defn typing-on [uid]
  (http/post url
             {:form-params {:access_token (:page-access-token env)
                            :recipient     {:id uid}
                            :sender_action "typing_on"}
              :throw-exceptions false}))

(defn begin-response [uid]
  (mark-seen uid)
  (typing-on uid))

(defn compute-app-access-token []
  (some-> (http/get "https://graph.facebook.com/oauth/access_token"
                    {:query-params     {:client_id     (:app-id env)
                                        :client_secret (:app-secret env)
                                        :grant_type    "client_credentials"
                                        :redirect_uri
                                        (if (:dev? env)
                                          (spy (:ngrok env))
                                          "https://unisporter.herokuapp.com/messenger/callback")}
                     :throw-exceptions false})
      :body
      ((fn [foo] (do (debug foo) foo)))
      (clojure.string/split #"\|")
      last))

(def app-access-token
  (memoize compute-app-access-token))

(defn sendmsg [uid msg]
  (http/post url
             {:form-params      {:access_token (:page-access-token env)
                                 :recipient    {:id uid}
                                 :message      {:text msg}
                                 ;:appsecret_proof
                                 #_(-> (mac/hash (app-access-token) {:key (:app-secret env) :alg :hmac+sha256} )
                                       (codecs/bytes->hex))}
              :content-type     :json
              :throw-exceptions false}))

(defn send-spinnings [uid many-items]
  (doseq [items (partition 4 4 nil many-items)]
    (http/post
      url
      {:form-params
       {:access_token (:page-access-token env)
        :recipient    {:id uid}
        :message
        {:attachment
         {:type "template"
          :payload
          (merge
            {:template_type     "generic"
             :elements
             (for [{:keys [id name instructors startTime endTime]} items
                   :let                                            [{:keys [firstName lastName]} (first instructors)]]
               {:title    (format "%s, %s %s" name lastName firstName)
                :subtitle (format "%s - %s" startTime endTime)
                :buttons  [{:title (str "Varaa")
                            :type  "postback"
                            :payload
                            (print-str
                              {:reserve id})}]})
             :buttons           standard-buttons}
            (when (not= 1 (count items))
              {:template_type     "list"
               :top_element_style "compact"}))}}}
       :content-type     :json
       :throw-exceptions false})))

(defn send-reservations [uid many-reservations]
  (doseq [reservations (partition 4 4 nil many-reservations)]
    (http/post
      url
      {:form-params
       {:access_token (:page-access-token env)
        :recipient    {:id uid}
        :message
        {:attachment
         {:type "template"
          :payload
          (merge
            {:template_type "generic"
             :elements
             (for [{:keys [id name instructors startTime endTime]} reservations
                   :let                                            [{:keys [firstName lastName]} (first instructors)]]
               {:title    (format "%s, %s %s" name lastName firstName)
                :subtitle (format "%s - %s"
                                  (s/datestr->humantime startTime)
                                  (s/datestr-short->humantime endTime))
                :buttons  [{:title (str "Poista")
                            :type  "postback"
                            :payload
                            (print-str
                              {:delete-reservation id})}]})}
            (when (not= 1 (count reservations))
              {:template_type     "list"
               :top_element_style "compact"}))}}}
       :content-type     :json
       :throw-exceptions false})))

(defn acknowledge-reservation [uid reservation]
  (http/post
    url
    {:form-params
     {:access_token (:page-access-token env)
      :recipient    {:id uid}
      :message
      {:attachment
       {:type "template"
        :payload
        {:template_type "generic"
         :elements
         [(let [{:keys [id name instructors startTime endTime]} reservation
                {:keys [firstName lastName]}                    (first instructors)]
            {:title    (format "%s, %s %s" name lastName firstName)
             :subtitle (format "%s - %s"
                               (s/datestr->humantime startTime)
                               (s/datestr-short->humantime endTime))
             :buttons  [{:title (str "Poista")
                         :type  "postback"
                         :payload
                         (print-str
                           {:delete-reservation id})}]})]}}}}
     :content-type     :json
     :throw-exceptions false}))
