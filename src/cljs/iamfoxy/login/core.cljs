(ns iamfoxy.login.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as reagent]
            [iamfoxy.ajax]
            [re-frame.core :as r :refer [dispatch]]
            [re-frisk.core :refer [enable-re-frisk!]]
            [iamfoxy.config :as config]
            [taoensso.timbre :refer-macros [spy debug]]))

(r/reg-event-db
  :login/initialize-db
  (fn [_ _]
    {}))

(r/reg-event-db
  :login/set
  (fn [db [_ key value]]
    (assoc-in db [:login key] value)))

(r/reg-event-fx
  :login/post-login
  (fn [{:keys [db]} [_ response]]
    ; redirect to app
    {:db db}))

(r/reg-event-db
  :login/error
  (fn [db [_ response]]
    (assoc-in db [:login :error] response)))

(r/reg-event-db
 :login/valid-email?
 (fn [db [_ valid-email?]]
   (assoc-in db [:login :valid-email?] valid-email?)))

(r/reg-sub
  :login/error
  (fn [db _]
    (when-let [error (-> db :login :error)]
      (str "Valitettavasti palvelussa tapahtui virhe."))))

(r/reg-sub
  :login/password-given?
  (fn [db _]
    (boolean
     (some-> db :login :password not-empty
             ((fn [pass] (< 8 (count pass))))))))

(r/reg-sub
 :login/username-given?
 (fn [db _]
   (and
    (some-> db :login :username not-empty)
    (-> db :login :valid-email?))))

(r/reg-sub
 :login/info
 (fn [db _]
   (-> db :login :info)))

(r/reg-sub
 :login/debounced?
 (fn [db _]
   (boolean (-> db :login :debounced?))))

(defn- get-initialized [field]
  (not-empty (get (js->clj js/config) field)))

(defn- get-initialized-username []
  (get-initialized "email"))

(r/reg-sub
 :login/username-initialized?
 (fn [_ _]
   (boolean (not-empty (get-initialized-username)))))

(r/reg-event-fx
 :login/trigger-debounce
 (fn [{:keys [db]} [_ debounce]]
   (merge
    {:db (assoc-in db [:login :debounced?] debounce)}
    (when debounce
      {:dispatch-later [{:ms 1000 :dispatch [:login/trigger-debounce false]}]}))))

(r/reg-event-fx
  :login
  (fn [{:keys [db]} _]
    (let [username (-> db :login :username)
          password (-> db :login :password)]
      (merge {:db db}
        (when (and (some? username) (some? password))
          {:http {:url           "/auth"
                  :method        :post
                  :form-params   {:username username
                                  :password password}
                  :handler       #(dispatch [:login/post-login %])
                  :error-handler #(dispatch [:login/error %])}})))))


(r/reg-event-db
  :password/post-change-password
  (fn [db [_ {:keys [body]}]]
    (some->> (:redirect-url body)
      (set! (.-location js/window)))
    db))

(r/reg-event-db
 :password/post-request-password-reset
 (fn [db [_ {:keys [body]}]]
   (assoc-in db [:login :info] (:response body))))

(r/reg-event-fx
  :password/change-password
  (fn [{:keys [db]}]
    (let [username (-> db :login :username)
          password (-> db :login :password)]
      (if (and (not-empty username) (not-empty password))
        (merge {:db (assoc-in db [:login :info] "Pyyntö lähetetty.")}
               {:http {:url           "/api/password/change"
                       :method        :post
                       :json-params   {:username username
                                       :password password
                                       :ticket   (get-initialized "ticket")
                                       :csrf     (get-initialized "csrf")}
                       :handler       #(dispatch [:password/post-change-password %])
                       :error-handler #(dispatch [:login/error %])}})
        {:db db}))))

(r/reg-event-fx
 :password/request-password-reset
 (fn [{:keys [db]}]
   (if (-> db :login :valid-email?)
     (merge {:db (assoc-in db [:login :info] "Pyyntö lähetetty.")}
            {:http {:url           "/api/password/reset"
                    :method        :post
                    :json-params   {:email (-> db :login :username)}
                    :handler       #(dispatch [:password/post-request-password-reset %])
                    :error-handler #(dispatch [:login/error %])}})
     {:db db})))

(defn status []
  [:span.login-error @(r/subscribe [:login/error])])

(def application-with-logo
  [:div.application-header.bold.upcase
   [:img {:src "/images/logo.png"}]
   "Ympäristönetti"])

(defn login []
  [:div.outer-login
   [:div.login
    [:input {:type "text" :placeholder "Username" :on-change #(dispatch [:login/set :username (-> % .-target .-value)])}]
    [:input {:type "password" :placeholder "Password" :on-change #(dispatch [:login/set :password (-> % .-target .-value)])}]
    [:a {:href     "#"
         :on-click #(dispatch [:login])}
     "Login"]
    [status]]])

(defn username [submit-fn]
  (reagent/create-class
   {:component-did-mount
    (fn [this]
      (let [node (reagent/dom-node this)]
        (set! (.-oninput node)
              (fn [_]
                (dispatch [:login/valid-email? (.checkValidity node)])))))
    :reagent-render
    (fn [submit-fn]
      [:input
       {:type        "email"
        :required    "required"
        :class       (when @(r/subscribe [:login/error]) "error")
        :placeholder "Sähköposti"
        :on-key-down submit-fn
        :on-change   #(dispatch [:login/set :username (-> % .-target .-value)])}])}))

(defn password-reset []
  (let [password-given?       (r/subscribe [:login/password-given?])
        username-given?       (r/subscribe [:login/username-given?])
        username-initialized? (r/subscribe [:login/username-initialized?]) 
        debounced?            (r/subscribe [:login/debounced?])
        satisfies-inputs?     (reaction
                               (and
                                (not @debounced?)
                                (if @username-initialized?
                                  @password-given?
                                  @username-given?)))
        login-info            (r/subscribe [:login/info])
        submit-fn             #(do
                                (dispatch
                                 (if @username-initialized?
                                   [:password/change-password]
                                   [:password/request-password-reset]))
                                (dispatch [:login/trigger-debounce true]))
        submit-on-enter       (fn [e]
                                (when
                                  ; enter
                                  (= 13 (.-keyCode e))
                                  (do
                                    (submit-fn)
                                    (.preventDefault e))))]
    [:div.box-outer
     [:div.box-inner
      application-with-logo
      [:p "Vaihda ympäristönetin salasana"]
      (when-not @username-initialized?
        [:p.small "Syötä sähköpostiosoitteesi johon voimme lähettää salasanan vaihtolinkin"])

      [:div.login
       [:div.inputs
        [:div.input-box
         [:form
          (if @username-initialized?
            [:input
             {:class       (when @(r/subscribe [:login/error]) "error")
              :type        "password"
              :required    "required"
              :placeholder "Uusi salasana"
              :on-key-down submit-on-enter
              :on-change   #(dispatch [:login/set :password (-> % .-target .-value)])}]
            [username submit-on-enter]
            )]]
        [status]
        [:div.btn
         {:class (when-not @satisfies-inputs? "disabled")}
         [:a {:href     "#"
              :style    {:pointer-events (when-not @satisfies-inputs? "none")}
              :on-click submit-fn}
          (if @username-initialized?
            "Vaihda salasana"
            "Pyydä salasanan vaihtoa")]]]]
      [:div.info.small
       @login-info]]]))

(defn mount-root []
  (r/clear-subscription-cache!)
  (reagent/render [:div.outer-login
                   [login]]
    (.getElementById js/document "login")))

(defn mount-password-reset-root []
  (r/clear-subscription-cache!)
  (dispatch [:login/set :username (not-empty (get-initialized-username))])
  (reagent/render [:div.outer-login
                   [password-reset]]
    (.getElementById js/document "passwordreset")))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (enable-re-frisk!)
    (println "dev mode")))

(defn init-password-reset []
  (r/dispatch-sync [:login/initialize-db])
  (r/dispatch-sync [:login/valid-email? (boolean (not-empty (get-initialized-username)))])
  (dev-setup)
  (mount-password-reset-root))

;; borken for now, password-reset changes the db state
(defn init-login-screen []
  (r/dispatch-sync [:login/initialize-db])
  (dev-setup)
  (mount-root))

(defn ^:export init [& [mode]]
  (if (= "password-reset" mode)
    (init-password-reset)
    (init-login-screen)))
