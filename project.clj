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
                 [com.taoensso/faraday "1.9.0"]
                 [com.amazonaws/aws-java-sdk-core "1.11.155"]
                 [amazonica "0.3.106" :exclusions [com.amazonaws/aws-java-sdk-acm
                                                   com.amazonaws/aws-java-sdk-api-gateway
                                                   com.amazonaws/aws-java-sdk-applicationautoscaling
                                                   com.amazonaws/aws-java-sdk-appstream
                                                   com.amazonaws/aws-java-sdk-athena
                                                   com.amazonaws/aws-java-sdk-autoscaling
                                                   com.amazonaws/aws-java-sdk-batch
                                                   com.amazonaws/aws-java-sdk-budgets
                                                   com.amazonaws/aws-java-sdk-clouddirectory
                                                   com.amazonaws/aws-java-sdk-cloudformation
                                                   com.amazonaws/aws-java-sdk-cloudfront
                                                   com.amazonaws/aws-java-sdk-cloudhsm
                                                   com.amazonaws/aws-java-sdk-cloudsearch
                                                   com.amazonaws/aws-java-sdk-cloudtrail
                                                   com.amazonaws/aws-java-sdk-cloudwatch
                                                   com.amazonaws/aws-java-sdk-cloudwatchmetrics
                                                   com.amazonaws/aws-java-sdk-codebuild
                                                   com.amazonaws/aws-java-sdk-codecommit
                                                   com.amazonaws/aws-java-sdk-codedeploy
                                                   com.amazonaws/aws-java-sdk-codepipeline
                                                   com.amazonaws/aws-java-sdk-codestar
                                                   com.amazonaws/aws-java-sdk-cognitoidentity
                                                   com.amazonaws/aws-java-sdk-cognitoidp
                                                   com.amazonaws/aws-java-sdk-cognitosync
                                                   com.amazonaws/aws-java-sdk-config
                                                   com.amazonaws/aws-java-sdk-costandusagereport
                                                   com.amazonaws/aws-java-sdk-datapipeline
                                                   com.amazonaws/aws-java-sdk-dax
                                                   com.amazonaws/jmespath-java
                                                   com.amazonaws/aws-java-sdk-devicefarm
                                                   com.amazonaws/aws-java-sdk-directconnect
                                                   com.amazonaws/aws-java-sdk-directory
                                                   com.amazonaws/aws-java-sdk-discovery
                                                   com.amazonaws/aws-java-sdk-dms
                                                   ;;com.amazonaws/aws-java-sdk-ec2
                                                   com.amazonaws/aws-java-sdk-ecr
                                                   com.amazonaws/aws-java-sdk-ecs
                                                   com.amazonaws/aws-java-sdk-efs
                                                   com.amazonaws/aws-java-sdk-elasticache
                                                   com.amazonaws/aws-java-sdk-elasticbeanstalk
                                                   com.amazonaws/aws-java-sdk-elasticloadbalancing
                                                   com.amazonaws/aws-java-sdk-elasticloadbalancingv2
                                                   com.amazonaws/aws-java-sdk-elasticsearch
                                                   com.amazonaws/aws-java-sdk-elastictranscoder
                                                   com.amazonaws/aws-java-sdk-emr
                                                   com.amazonaws/aws-java-sdk-events
                                                   com.amazonaws/aws-java-sdk-gamelift
                                                   com.amazonaws/aws-java-sdk-glacier
                                                   com.amazonaws/aws-java-sdk-greengrass
                                                   com.amazonaws/aws-java-sdk-health
                                                   com.amazonaws/aws-java-sdk-iam
                                                   com.amazonaws/aws-java-sdk-importexport
                                                   com.amazonaws/aws-java-sdk-inspector
                                                   com.amazonaws/aws-java-sdk-iot
                                                   com.amazonaws/aws-java-sdk-kinesis
                                                   ;;com.amazonaws/aws-java-sdk-kms
                                                   com.amazonaws/aws-java-sdk-lambda
                                                   com.amazonaws/aws-java-sdk-lex
                                                   com.amazonaws/aws-java-sdk-lexmodelbuilding
                                                   com.amazonaws/aws-java-sdk-lightsail
                                                   com.amazonaws/aws-java-sdk-logs
                                                   com.amazonaws/aws-java-sdk-machinelearning
                                                   com.amazonaws/aws-java-sdk-marketplacecommerceanalytics
                                                   com.amazonaws/aws-java-sdk-marketplaceentitlement
                                                   com.amazonaws/aws-java-sdk-marketplacemeteringservice
                                                   com.amazonaws/aws-java-sdk-mechanicalturkrequester
                                                   com.amazonaws/aws-java-sdk-models
                                                   com.amazonaws/aws-java-sdk-opsworks
                                                   com.amazonaws/aws-java-sdk-opsworkscm
                                                   com.amazonaws/aws-java-sdk-organizations
                                                   com.amazonaws/aws-java-sdk-pinpoint
                                                   com.amazonaws/aws-java-sdk-polly
                                                   com.amazonaws/aws-java-sdk-rds
                                                   com.amazonaws/aws-java-sdk-redshift
                                                   com.amazonaws/aws-java-sdk-rekognition
                                                   com.amazonaws/aws-java-sdk-resourcegroupstaggingapi
                                                   com.amazonaws/aws-java-sdk-route53
                                                   com.amazonaws/aws-java-sdk-servermigration
                                                   com.amazonaws/aws-java-sdk-servicecatalog
                                                   com.amazonaws/aws-java-sdk-ses
                                                   com.amazonaws/aws-java-sdk-shield
                                                   com.amazonaws/aws-java-sdk-simpledb
                                                   com.amazonaws/aws-java-sdk-simpleworkflow
                                                   com.amazonaws/aws-java-sdk-snowball
                                                   com.amazonaws/aws-java-sdk-sns
                                                   com.amazonaws/aws-java-sdk-sqs
                                                   ;;com.amazonaws/aws-java-sdk-ssm
                                                   com.amazonaws/aws-java-sdk-stepfunctions
                                                   com.amazonaws/aws-java-sdk-storagegateway
                                                   com.amazonaws/aws-java-sdk-sts
                                                   com.amazonaws/aws-java-sdk-support
                                                   com.amazonaws/aws-java-sdk-swf-libraries
                                                   com.amazonaws/aws-java-sdk-waf
                                                   com.amazonaws/aws-java-sdk-workdocs
                                                   com.amazonaws/aws-java-sdk-workspaces
                                                   com.amazonaws/aws-java-sdk-xray]]]

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
