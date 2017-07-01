(defproject unisporter "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [com.taoensso/timbre "4.8.0"]
                 [org.clojure/core.async "0.3.442"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [clj-time "0.13.0"]
                 [cheshire "5.7.1"]
                 [cider/cider-nrepl "0.15.0-SNAPSHOT" :exclusions [org.clojure/clojure]]
                 [environ "1.1.0"]
                 [org.clojure/tools.logging "0.3.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [clj-http "3.4.1"] ; http client
                 [uswitch/lambada "0.1.2"]
                 [com.cemerick/url "0.1.1"]
                 [selmer "1.10.7"]
                 [com.taoensso/faraday "1.9.0"]]

  :plugins [[lein-ancient "0.6.10"]
            [lein-environ "1.1.0"]
            [lein-resource "16.11.1"]
            [lein-libdir "0.1.1"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]
  :resource-paths ["resources"]
  :test-paths ["test/clj"]
  :test-refresh {:quiet        false ; set to true to disable 'Testing blah.blah.your-test' printing
                 :watch-dirs   ["src" "test"]
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
    :injections   [(require 'pjstadig.humane-test-output)
                   (pjstadig.humane-test-output/activate!)]}
   :dev
   {:dependencies [[refactor-nrepl "2.3.0"]
                   [snipsnap "0.2.0" :exclusions [org.clojure/clojure]]]
    :plugins      [[cider/cider-nrepl "0.15.0-SNAPSHOT" :exclusions [org.clojure/clojure]]]
    :env          {:dev? "true"}}

   :uberjar {:prep-tasks     []
             :env            {:production "true"}
             :aot            :all
             :omit-source    true
             :resource-paths ["resources"]}}

  :aot [unisporter.handler]

  :uberjar-name "unisporter.jar"

  :prep-tasks ["compile"]

  :aliases {"dev" ["with-profile" "dev" "run"]})
