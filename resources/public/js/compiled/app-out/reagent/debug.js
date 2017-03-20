// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26598__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26598 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26599__i = 0, G__26599__a = new Array(arguments.length -  0);
while (G__26599__i < G__26599__a.length) {G__26599__a[G__26599__i] = arguments[G__26599__i + 0]; ++G__26599__i;}
  args = new cljs.core.IndexedSeq(G__26599__a,0);
} 
return G__26598__delegate.call(this,args);};
G__26598.cljs$lang$maxFixedArity = 0;
G__26598.cljs$lang$applyTo = (function (arglist__26600){
var args = cljs.core.seq(arglist__26600);
return G__26598__delegate(args);
});
G__26598.cljs$core$IFn$_invoke$arity$variadic = G__26598__delegate;
return G__26598;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26601__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26602__i = 0, G__26602__a = new Array(arguments.length -  0);
while (G__26602__i < G__26602__a.length) {G__26602__a[G__26602__i] = arguments[G__26602__i + 0]; ++G__26602__i;}
  args = new cljs.core.IndexedSeq(G__26602__a,0);
} 
return G__26601__delegate.call(this,args);};
G__26601.cljs$lang$maxFixedArity = 0;
G__26601.cljs$lang$applyTo = (function (arglist__26603){
var args = cljs.core.seq(arglist__26603);
return G__26601__delegate(args);
});
G__26601.cljs$core$IFn$_invoke$arity$variadic = G__26601__delegate;
return G__26601;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1489150123611