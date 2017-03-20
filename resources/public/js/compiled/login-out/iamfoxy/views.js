// Compiled by ClojureScript 1.9.293 {}
goog.provide('iamfoxy.views');
goog.require('cljs.core');
goog.require('re_frame.core');
iamfoxy.views.main_panel = (function iamfoxy$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello from ",cljs.core.deref.call(null,name)], null);
});
;})(name))
});

//# sourceMappingURL=views.js.map?rel=1489150143284