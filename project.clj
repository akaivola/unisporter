(defproject unisporter "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]

                 ; Clojure/ClojureScript
                 [com.taoensso/timbre "4.8.0"]
                 [org.clojure/core.async "0.3.442"]
                 [org.clojure/core.match "0.3.0-alpha4"]

                 ; Clojure
                 [aleph "0.4.3"]
                 [buddy/buddy-auth "1.4.0"]
                 [cider/cider-nrepl "0.15.0-SNAPSHOT" :exclusions [org.clojure/clojure]]
                 [compojure "1.5.2"]
                 [environ "1.1.0"]
                 [metosin/compojure-api "1.2.0-alpha4"]
                 [metosin/ring-http-response "0.8.1"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [ring "1.5.1"]
                 [ring/ring-defaults "0.2.2"]
                 [selmer "1.10.5"] ; template parser
                 [clj-http "3.4.1"] ; http client
                 [com.taoensso/carmine "2.15.1"] ; redis
                 [com.cemerick/url "0.1.1"]]

  :plugins [[lein-ancient "0.6.10"]
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
  :repl-options {:init (set! *print-length* 50)}

  :profiles
  {:test
   {:dependencies [[pjstadig/humane-test-output "0.8.1"]]
    :injections [(require 'pjstadig.humane-test-output)
                 (pjstadig.humane-test-output/activate!)]}
   :dev
   {:dependencies [[refactor-nrepl "2.3.0"]
                   [snipsnap "0.2.0" :exclusions [org.clojure/clojure]]]
    :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
    :plugins [[cider/cider-nrepl "0.15.0-SNAPSHOT" :exclusions [org.clojure/clojure]]]
    :env {:dev? "true"}}

   :uberjar {:prep-tasks     []
             :env            {:production "true"}
             :aot            :all
             :omit-source    true
             :resource-paths ["resources"]}}

  :main unisporter.server

  :aot []

  :uberjar-name "unisporter.jar"

  :prep-tasks ["compile"]

  :aliases {"dev"          ["with-profile" "dev" "run"]})
