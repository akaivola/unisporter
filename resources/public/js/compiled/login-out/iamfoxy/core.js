// Compiled by ClojureScript 1.9.293 {}
goog.provide('iamfoxy.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('iamfoxy.views');
goog.require('iamfoxy.config');
goog.require('iamfoxy.events');
goog.require('re_frisk.core');
goog.require('iamfoxy.subs');
goog.require('re_frame.core');
iamfoxy.core.dev_setup = (function iamfoxy$core$dev_setup(){
if(cljs.core.truth_(iamfoxy.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
iamfoxy.core.mount_root = (function iamfoxy$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [iamfoxy.views.main_panel], null),document.getElementById("app"));
});
iamfoxy.core.init = (function iamfoxy$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

iamfoxy.core.dev_setup.call(null);

return iamfoxy.core.mount_root.call(null);
});
goog.exportSymbol('iamfoxy.core.init', iamfoxy.core.init);

//# sourceMappingURL=core.js.map?rel=1489150143301