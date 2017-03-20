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
var G__46306__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46308__i = 0, G__46308__a = new Array(arguments.length -  0);
while (G__46308__i < G__46308__a.length) {G__46308__a[G__46308__i] = arguments[G__46308__i + 0]; ++G__46308__i;}
  args = new cljs.core.IndexedSeq(G__46308__a,0);
} 
return G__46306__delegate.call(this,args);};
G__46306.cljs$lang$maxFixedArity = 0;
G__46306.cljs$lang$applyTo = (function (arglist__46309){
var args = cljs.core.seq(arglist__46309);
return G__46306__delegate(args);
});
G__46306.cljs$core$IFn$_invoke$arity$variadic = G__46306__delegate;
return G__46306;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__46313__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46316__i = 0, G__46316__a = new Array(arguments.length -  0);
while (G__46316__i < G__46316__a.length) {G__46316__a[G__46316__i] = arguments[G__46316__i + 0]; ++G__46316__i;}
  args = new cljs.core.IndexedSeq(G__46316__a,0);
} 
return G__46313__delegate.call(this,args);};
G__46313.cljs$lang$maxFixedArity = 0;
G__46313.cljs$lang$applyTo = (function (arglist__46318){
var args = cljs.core.seq(arglist__46318);
return G__46313__delegate(args);
});
G__46313.cljs$core$IFn$_invoke$arity$variadic = G__46313__delegate;
return G__46313;
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

//# sourceMappingURL=debug.js.map?rel=1489150141486