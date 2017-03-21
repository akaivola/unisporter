(defproject unisporter "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]

                 ; Clojurescript
                 [org.clojure/clojurescript "1.9.293"]
                 [reagent "0.6.0"]
                 [re-frame "0.9.1"]
                 [re-frisk "0.3.2"]
                 [venantius/accountant "0.1.7"]
                 [cljs-http "0.1.42"]

                 ; Clojure/ClojureScript
                 [com.taoensso/timbre "4.8.0"]
                 [org.clojure/core.async "0.2.395"]
                 [org.clojure/core.match "0.3.0-alpha4"]

                 ; Clojure
                 [aleph "0.4.2-alpha12"]
                 [buddy/buddy-auth "1.4.0"]
                 [cider/cider-nrepl "0.15.0-SNAPSHOT" :exclusions [org.clojure/clojure]]
                 [compojure "1.5.2"]
                 [environ "1.1.0"]
                 [metosin/compojure-api "1.1.10"]
                 [metosin/ring-http-response "0.8.1"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [ring "1.5.1"]
                 [ring/ring-defaults "0.2.2"]
                 [selmer "1.10.5"] ; template parser
                 [clj-http "2.3.0"] ; http client
                 [com.taoensso/carmine "2.15.1"] ; redis
                 [com.cemerick/url "0.1.1"] ]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.8"]
            [lein-less "1.7.5"]
            [lein-ancient "0.6.10"]
            [lein-environ "1.1.0"]
            [lein-resource "16.11.1"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]
  :resource-paths ["resources"]
  :test-paths ["test/clj"]
  :test-refresh {:quiet false ; set to true to disable 'Testing blah.blah.your-test' printing
                 :watch-dirs ["src" "test"]
                 :refresh-dirs ["src" "test"]}
  :jvm-opts ^:replace ["-Xmx2g"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "resources/public/css"
                                    "target"
                                    "test/js"
                                    "out"]

  :auto-clean false

  :figwheel {:css-dirs ["resources/public/css"]}

  :less {:source-paths ["resources/less"]
         :target-path  "resources/public/css/compiled"}

  :repl-options {:init (set! *print-length* 50)}

  :profiles
  {:test
   {:dependencies [[pjstadig/humane-test-output "0.8.1"]]
    :injections [(require 'pjstadig.humane-test-output)
                 (pjstadig.humane-test-output/activate!)]}
   :dev
   {:dependencies [[figwheel-sidecar "0.5.8"]
                   [com.cemerick/piggieback "0.2.1"]
                   [refactor-nrepl "2.2.0"]
                   [snipsnap "0.2.0" :exclusions [org.clojure/clojure]]]
    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
    :plugins [[lein-figwheel "0.5.8"]
              [lein-doo "0.1.7"]
              [cider/cider-nrepl "0.15.0-SNAPSHOT" :exclusions [org.clojure/clojure]]]
    :env {:dev? "true"}}

   :uberjar {:prep-tasks     ["clean" "compile" ["less" "once"] ["cljsbuild" "once" "unisporter-min"]]
             :env            {:production "true"}
             :aot            :all
             :omit-source    true
             :resource-paths ["resources"]}}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs" "src/cljc"]
     :figwheel     {:on-jsload "unisporter.core/mount-root"}
     :compiler     {:main                 unisporter.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/app-out"
                    :asset-path           "js/compiled/app-out"
                    :source-map-timestamp true
                    :source-map           true
                    :optimizations        :none
                    }}

    {:id           "unisporter-min"
     :source-paths ["src/cljs" "src/cljc"]
     :jar          true
     :compiler     {:main            unisporter.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :output-dir      "resources/public/js/compiled/app-min-out"
                    :parallel-build  true
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}

    {:id           "test"
     :source-paths ["src/cljs" "test/cljs"]
     :compiler     {:main          unisporter.runner
                    :output-to     "resources/public/js/compiled/test.js"
                    :output-dir    "resources/public/js/compiled/test/out"
                    :optimizations :none}}]}

  :main unisporter.server

  :aot []

  :uberjar-name "unisporter.jar"

  :prep-tasks ["compile"]

  :aliases {"dev"          ["with-profile" "dev" "run"]
            "demo"         ["with-profile" "dev" "do" "clean" ["less" "once"] ["cljsbuild" "once" "unisporter-min"] "run"]
            "figwheel-dev" ["with-profile" "dev" "figwheel" "dev"]})
