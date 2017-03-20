// Compiled by ClojureScript 1.9.293 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25333__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_48424 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_48424){
return (function (){
var _STAR_always_update_STAR_48425 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_48425;
}});})(_STAR_always_update_STAR_48424))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_48424;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args48426 = [];
var len__26441__auto___48432 = arguments.length;
var i__26442__auto___48433 = (0);
while(true){
if((i__26442__auto___48433 < len__26441__auto___48432)){
args48426.push((arguments[i__26442__auto___48433]));

var G__48434 = (i__26442__auto___48433 + (1));
i__26442__auto___48433 = G__48434;
continue;
} else {
}
break;
}

var G__48430 = args48426.length;
switch (G__48430) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48426.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__48473_48480 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__48474_48481 = null;
var count__48475_48482 = (0);
var i__48476_48483 = (0);
while(true){
if((i__48476_48483 < count__48475_48482)){
var v_48498 = cljs.core._nth.call(null,chunk__48474_48481,i__48476_48483);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_48498);

var G__48502 = seq__48473_48480;
var G__48503 = chunk__48474_48481;
var G__48504 = count__48475_48482;
var G__48505 = (i__48476_48483 + (1));
seq__48473_48480 = G__48502;
chunk__48474_48481 = G__48503;
count__48475_48482 = G__48504;
i__48476_48483 = G__48505;
continue;
} else {
var temp__4657__auto___48508 = cljs.core.seq.call(null,seq__48473_48480);
if(temp__4657__auto___48508){
var seq__48473_48512__$1 = temp__4657__auto___48508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48473_48512__$1)){
var c__26147__auto___48516 = cljs.core.chunk_first.call(null,seq__48473_48512__$1);
var G__48519 = cljs.core.chunk_rest.call(null,seq__48473_48512__$1);
var G__48520 = c__26147__auto___48516;
var G__48521 = cljs.core.count.call(null,c__26147__auto___48516);
var G__48522 = (0);
seq__48473_48480 = G__48519;
chunk__48474_48481 = G__48520;
count__48475_48482 = G__48521;
i__48476_48483 = G__48522;
continue;
} else {
var v_48524 = cljs.core.first.call(null,seq__48473_48512__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_48524);

var G__48525 = cljs.core.next.call(null,seq__48473_48512__$1);
var G__48526 = null;
var G__48527 = (0);
var G__48528 = (0);
seq__48473_48480 = G__48525;
chunk__48474_48481 = G__48526;
count__48475_48482 = G__48527;
i__48476_48483 = G__48528;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1489150142133