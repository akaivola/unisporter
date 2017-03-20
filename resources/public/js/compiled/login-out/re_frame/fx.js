// Compiled by ClojureScript 1.9.293 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__49838 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49839 = null;
var count__49840 = (0);
var i__49841 = (0);
while(true){
if((i__49841 < count__49840)){
var vec__49842 = cljs.core._nth.call(null,chunk__49839,i__49841);
var effect_k = cljs.core.nth.call(null,vec__49842,(0),null);
var value = cljs.core.nth.call(null,vec__49842,(1),null);
var temp__4655__auto___49848 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___49848)){
var effect_fn_49849 = temp__4655__auto___49848;
effect_fn_49849.call(null,value);
} else {
}

var G__49850 = seq__49838;
var G__49851 = chunk__49839;
var G__49852 = count__49840;
var G__49853 = (i__49841 + (1));
seq__49838 = G__49850;
chunk__49839 = G__49851;
count__49840 = G__49852;
i__49841 = G__49853;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49838);
if(temp__4657__auto__){
var seq__49838__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49838__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__49838__$1);
var G__49856 = cljs.core.chunk_rest.call(null,seq__49838__$1);
var G__49857 = c__26147__auto__;
var G__49858 = cljs.core.count.call(null,c__26147__auto__);
var G__49859 = (0);
seq__49838 = G__49856;
chunk__49839 = G__49857;
count__49840 = G__49858;
i__49841 = G__49859;
continue;
} else {
var vec__49845 = cljs.core.first.call(null,seq__49838__$1);
var effect_k = cljs.core.nth.call(null,vec__49845,(0),null);
var value = cljs.core.nth.call(null,vec__49845,(1),null);
var temp__4655__auto___49864 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___49864)){
var effect_fn_49868 = temp__4655__auto___49864;
effect_fn_49868.call(null,value);
} else {
}

var G__49869 = cljs.core.next.call(null,seq__49838__$1);
var G__49870 = null;
var G__49871 = (0);
var G__49872 = (0);
seq__49838 = G__49869;
chunk__49839 = G__49870;
count__49840 = G__49871;
i__49841 = G__49872;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49873 = cljs.core.seq.call(null,value);
var chunk__49874 = null;
var count__49875 = (0);
var i__49876 = (0);
while(true){
if((i__49876 < count__49875)){
var map__49877 = cljs.core._nth.call(null,chunk__49874,i__49876);
var map__49877__$1 = ((((!((map__49877 == null)))?((((map__49877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49877):map__49877);
var effect = map__49877__$1;
var ms = cljs.core.get.call(null,map__49877__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49877__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49873,chunk__49874,count__49875,i__49876,map__49877,map__49877__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49873,chunk__49874,count__49875,i__49876,map__49877,map__49877__$1,effect,ms,dispatch))
,ms);
}

var G__49912 = seq__49873;
var G__49913 = chunk__49874;
var G__49914 = count__49875;
var G__49915 = (i__49876 + (1));
seq__49873 = G__49912;
chunk__49874 = G__49913;
count__49875 = G__49914;
i__49876 = G__49915;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49873);
if(temp__4657__auto__){
var seq__49873__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49873__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__49873__$1);
var G__49923 = cljs.core.chunk_rest.call(null,seq__49873__$1);
var G__49924 = c__26147__auto__;
var G__49925 = cljs.core.count.call(null,c__26147__auto__);
var G__49926 = (0);
seq__49873 = G__49923;
chunk__49874 = G__49924;
count__49875 = G__49925;
i__49876 = G__49926;
continue;
} else {
var map__49883 = cljs.core.first.call(null,seq__49873__$1);
var map__49883__$1 = ((((!((map__49883 == null)))?((((map__49883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49883):map__49883);
var effect = map__49883__$1;
var ms = cljs.core.get.call(null,map__49883__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__49883__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__49873,chunk__49874,count__49875,i__49876,map__49883,map__49883__$1,effect,ms,dispatch,seq__49873__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__49873,chunk__49874,count__49875,i__49876,map__49883,map__49883__$1,effect,ms,dispatch,seq__49873__$1,temp__4657__auto__))
,ms);
}

var G__49930 = cljs.core.next.call(null,seq__49873__$1);
var G__49931 = null;
var G__49932 = (0);
var G__49933 = (0);
seq__49873 = G__49930;
chunk__49874 = G__49931;
count__49875 = G__49932;
i__49876 = G__49933;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__49934 = cljs.core.seq.call(null,value);
var chunk__49935 = null;
var count__49936 = (0);
var i__49937 = (0);
while(true){
if((i__49937 < count__49936)){
var event = cljs.core._nth.call(null,chunk__49935,i__49937);
re_frame.router.dispatch.call(null,event);

var G__49962 = seq__49934;
var G__49963 = chunk__49935;
var G__49964 = count__49936;
var G__49965 = (i__49937 + (1));
seq__49934 = G__49962;
chunk__49935 = G__49963;
count__49936 = G__49964;
i__49937 = G__49965;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49934);
if(temp__4657__auto__){
var seq__49934__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49934__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__49934__$1);
var G__49979 = cljs.core.chunk_rest.call(null,seq__49934__$1);
var G__49980 = c__26147__auto__;
var G__49981 = cljs.core.count.call(null,c__26147__auto__);
var G__49982 = (0);
seq__49934 = G__49979;
chunk__49935 = G__49980;
count__49936 = G__49981;
i__49937 = G__49982;
continue;
} else {
var event = cljs.core.first.call(null,seq__49934__$1);
re_frame.router.dispatch.call(null,event);

var G__49986 = cljs.core.next.call(null,seq__49934__$1);
var G__49987 = null;
var G__49988 = (0);
var G__49989 = (0);
seq__49934 = G__49986;
chunk__49935 = G__49987;
count__49936 = G__49988;
i__49937 = G__49989;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__49991 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__49992 = null;
var count__49993 = (0);
var i__49994 = (0);
while(true){
if((i__49994 < count__49993)){
var event = cljs.core._nth.call(null,chunk__49992,i__49994);
clear_event.call(null,event);

var G__50002 = seq__49991;
var G__50003 = chunk__49992;
var G__50004 = count__49993;
var G__50005 = (i__49994 + (1));
seq__49991 = G__50002;
chunk__49992 = G__50003;
count__49993 = G__50004;
i__49994 = G__50005;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49991);
if(temp__4657__auto__){
var seq__49991__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49991__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__49991__$1);
var G__50008 = cljs.core.chunk_rest.call(null,seq__49991__$1);
var G__50009 = c__26147__auto__;
var G__50010 = cljs.core.count.call(null,c__26147__auto__);
var G__50011 = (0);
seq__49991 = G__50008;
chunk__49992 = G__50009;
count__49993 = G__50010;
i__49994 = G__50011;
continue;
} else {
var event = cljs.core.first.call(null,seq__49991__$1);
clear_event.call(null,event);

var G__50012 = cljs.core.next.call(null,seq__49991__$1);
var G__50013 = null;
var G__50014 = (0);
var G__50015 = (0);
seq__49991 = G__50012;
chunk__49992 = G__50013;
count__49993 = G__50014;
i__49994 = G__50015;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1489150142575