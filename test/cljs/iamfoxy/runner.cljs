(ns iamfoxy.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [iamfoxy.core-test]))

(doo-tests 'iamfoxy.core-test)
