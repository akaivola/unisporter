(ns unisporter.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [unisporter.core-test]))

(doo-tests 'unisporter.core-test)
