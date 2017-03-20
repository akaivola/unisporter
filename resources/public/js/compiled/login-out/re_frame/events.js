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
var make_chain = (function (p1__49324_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__49324_SHARP_));
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

var temp__4657__auto___49332 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___49332)){
var not_i_49333 = temp__4657__auto___49332;
if(cljs.core.fn_QMARK_.call(null,not_i_49333)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_49333);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_49333);
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
var _STAR_handling_STAR_49358 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_49359 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27679__auto___49378 = re_frame.interop.now.call(null);
var duration__27680__auto___49379 = (end__27679__auto___49378 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__49360_49380 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__49361_49381 = null;
var count__49362_49382 = (0);
var i__49363_49383 = (0);
while(true){
if((i__49363_49383 < count__49362_49382)){
var vec__49364_49384 = cljs.core._nth.call(null,chunk__49361_49381,i__49363_49383);
var k__27681__auto___49385 = cljs.core.nth.call(null,vec__49364_49384,(0),null);
var cb__27682__auto___49386 = cljs.core.nth.call(null,vec__49364_49384,(1),null);
try{cb__27682__auto___49386.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27680__auto___49379,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49367){if((e49367 instanceof java.lang.Exception)){
var e__27683__auto___49387 = e49367;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27681__auto___49385,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27683__auto___49387);
} else {
throw e49367;

}
}
var G__49388 = seq__49360_49380;
var G__49389 = chunk__49361_49381;
var G__49390 = count__49362_49382;
var G__49391 = (i__49363_49383 + (1));
seq__49360_49380 = G__49388;
chunk__49361_49381 = G__49389;
count__49362_49382 = G__49390;
i__49363_49383 = G__49391;
continue;
} else {
var temp__4657__auto___49392 = cljs.core.seq.call(null,seq__49360_49380);
if(temp__4657__auto___49392){
var seq__49360_49393__$1 = temp__4657__auto___49392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49360_49393__$1)){
var c__26147__auto___49394 = cljs.core.chunk_first.call(null,seq__49360_49393__$1);
var G__49395 = cljs.core.chunk_rest.call(null,seq__49360_49393__$1);
var G__49396 = c__26147__auto___49394;
var G__49397 = cljs.core.count.call(null,c__26147__auto___49394);
var G__49398 = (0);
seq__49360_49380 = G__49395;
chunk__49361_49381 = G__49396;
count__49362_49382 = G__49397;
i__49363_49383 = G__49398;
continue;
} else {
var vec__49368_49399 = cljs.core.first.call(null,seq__49360_49393__$1);
var k__27681__auto___49400 = cljs.core.nth.call(null,vec__49368_49399,(0),null);
var cb__27682__auto___49401 = cljs.core.nth.call(null,vec__49368_49399,(1),null);
try{cb__27682__auto___49401.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27680__auto___49379,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e49371){if((e49371 instanceof java.lang.Exception)){
var e__27683__auto___49402 = e49371;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27681__auto___49400,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27683__auto___49402);
} else {
throw e49371;

}
}
var G__49405 = cljs.core.next.call(null,seq__49360_49393__$1);
var G__49406 = null;
var G__49407 = (0);
var G__49408 = (0);
seq__49360_49380 = G__49405;
chunk__49361_49381 = G__49406;
count__49362_49382 = G__49407;
i__49363_49383 = G__49408;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_49359;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_49358;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1489150142401