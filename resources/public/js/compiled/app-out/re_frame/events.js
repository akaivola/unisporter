// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__27704_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__27704_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___27705 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___27705)){
var not_i_27706 = temp__4657__auto___27705;
if(cljs.core.fn_QMARK_.call(null,not_i_27706)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_27706);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_27706);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_27721 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_27722 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27679__auto___27735 = re_frame.interop.now.call(null);
var duration__27680__auto___27736 = (end__27679__auto___27735 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__27723_27737 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__27724_27738 = null;
var count__27725_27739 = (0);
var i__27726_27740 = (0);
while(true){
if((i__27726_27740 < count__27725_27739)){
var vec__27727_27741 = cljs.core._nth.call(null,chunk__27724_27738,i__27726_27740);
var k__27681__auto___27742 = cljs.core.nth.call(null,vec__27727_27741,(0),null);
var cb__27682__auto___27743 = cljs.core.nth.call(null,vec__27727_27741,(1),null);
try{cb__27682__auto___27743.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27680__auto___27736,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27730){if((e27730 instanceof java.lang.Exception)){
var e__27683__auto___27744 = e27730;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27681__auto___27742,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27683__auto___27744);
} else {
throw e27730;

}
}
var G__27745 = seq__27723_27737;
var G__27746 = chunk__27724_27738;
var G__27747 = count__27725_27739;
var G__27748 = (i__27726_27740 + (1));
seq__27723_27737 = G__27745;
chunk__27724_27738 = G__27746;
count__27725_27739 = G__27747;
i__27726_27740 = G__27748;
continue;
} else {
var temp__4657__auto___27749 = cljs.core.seq.call(null,seq__27723_27737);
if(temp__4657__auto___27749){
var seq__27723_27750__$1 = temp__4657__auto___27749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27723_27750__$1)){
var c__26147__auto___27751 = cljs.core.chunk_first.call(null,seq__27723_27750__$1);
var G__27752 = cljs.core.chunk_rest.call(null,seq__27723_27750__$1);
var G__27753 = c__26147__auto___27751;
var G__27754 = cljs.core.count.call(null,c__26147__auto___27751);
var G__27755 = (0);
seq__27723_27737 = G__27752;
chunk__27724_27738 = G__27753;
count__27725_27739 = G__27754;
i__27726_27740 = G__27755;
continue;
} else {
var vec__27731_27756 = cljs.core.first.call(null,seq__27723_27750__$1);
var k__27681__auto___27757 = cljs.core.nth.call(null,vec__27731_27756,(0),null);
var cb__27682__auto___27758 = cljs.core.nth.call(null,vec__27731_27756,(1),null);
try{cb__27682__auto___27758.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27680__auto___27736,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27734){if((e27734 instanceof java.lang.Exception)){
var e__27683__auto___27759 = e27734;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27681__auto___27757,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27683__auto___27759);
} else {
throw e27734;

}
}
var G__27760 = cljs.core.next.call(null,seq__27723_27750__$1);
var G__27761 = null;
var G__27762 = (0);
var G__27763 = (0);
seq__27723_27737 = G__27760;
chunk__27724_27738 = G__27761;
count__27725_27739 = G__27762;
i__27726_27740 = G__27763;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27722;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_27721;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1489150126618