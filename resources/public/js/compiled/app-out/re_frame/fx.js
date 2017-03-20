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
var seq__27848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27849 = null;
var count__27850 = (0);
var i__27851 = (0);
while(true){
if((i__27851 < count__27850)){
var vec__27852 = cljs.core._nth.call(null,chunk__27849,i__27851);
var effect_k = cljs.core.nth.call(null,vec__27852,(0),null);
var value = cljs.core.nth.call(null,vec__27852,(1),null);
var temp__4655__auto___27858 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27858)){
var effect_fn_27859 = temp__4655__auto___27858;
effect_fn_27859.call(null,value);
} else {
}

var G__27860 = seq__27848;
var G__27861 = chunk__27849;
var G__27862 = count__27850;
var G__27863 = (i__27851 + (1));
seq__27848 = G__27860;
chunk__27849 = G__27861;
count__27850 = G__27862;
i__27851 = G__27863;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27848);
if(temp__4657__auto__){
var seq__27848__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27848__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__27848__$1);
var G__27864 = cljs.core.chunk_rest.call(null,seq__27848__$1);
var G__27865 = c__26147__auto__;
var G__27866 = cljs.core.count.call(null,c__26147__auto__);
var G__27867 = (0);
seq__27848 = G__27864;
chunk__27849 = G__27865;
count__27850 = G__27866;
i__27851 = G__27867;
continue;
} else {
var vec__27855 = cljs.core.first.call(null,seq__27848__$1);
var effect_k = cljs.core.nth.call(null,vec__27855,(0),null);
var value = cljs.core.nth.call(null,vec__27855,(1),null);
var temp__4655__auto___27868 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27868)){
var effect_fn_27869 = temp__4655__auto___27868;
effect_fn_27869.call(null,value);
} else {
}

var G__27870 = cljs.core.next.call(null,seq__27848__$1);
var G__27871 = null;
var G__27872 = (0);
var G__27873 = (0);
seq__27848 = G__27870;
chunk__27849 = G__27871;
count__27850 = G__27872;
i__27851 = G__27873;
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
var seq__27874 = cljs.core.seq.call(null,value);
var chunk__27875 = null;
var count__27876 = (0);
var i__27877 = (0);
while(true){
if((i__27877 < count__27876)){
var map__27878 = cljs.core._nth.call(null,chunk__27875,i__27877);
var map__27878__$1 = ((((!((map__27878 == null)))?((((map__27878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27878):map__27878);
var effect = map__27878__$1;
var ms = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27874,chunk__27875,count__27876,i__27877,map__27878,map__27878__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27874,chunk__27875,count__27876,i__27877,map__27878,map__27878__$1,effect,ms,dispatch))
,ms);
}

var G__27882 = seq__27874;
var G__27883 = chunk__27875;
var G__27884 = count__27876;
var G__27885 = (i__27877 + (1));
seq__27874 = G__27882;
chunk__27875 = G__27883;
count__27876 = G__27884;
i__27877 = G__27885;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27874);
if(temp__4657__auto__){
var seq__27874__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27874__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__27874__$1);
var G__27886 = cljs.core.chunk_rest.call(null,seq__27874__$1);
var G__27887 = c__26147__auto__;
var G__27888 = cljs.core.count.call(null,c__26147__auto__);
var G__27889 = (0);
seq__27874 = G__27886;
chunk__27875 = G__27887;
count__27876 = G__27888;
i__27877 = G__27889;
continue;
} else {
var map__27880 = cljs.core.first.call(null,seq__27874__$1);
var map__27880__$1 = ((((!((map__27880 == null)))?((((map__27880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27880):map__27880);
var effect = map__27880__$1;
var ms = cljs.core.get.call(null,map__27880__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27880__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27874,chunk__27875,count__27876,i__27877,map__27880,map__27880__$1,effect,ms,dispatch,seq__27874__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27874,chunk__27875,count__27876,i__27877,map__27880,map__27880__$1,effect,ms,dispatch,seq__27874__$1,temp__4657__auto__))
,ms);
}

var G__27890 = cljs.core.next.call(null,seq__27874__$1);
var G__27891 = null;
var G__27892 = (0);
var G__27893 = (0);
seq__27874 = G__27890;
chunk__27875 = G__27891;
count__27876 = G__27892;
i__27877 = G__27893;
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

var seq__27894 = cljs.core.seq.call(null,value);
var chunk__27895 = null;
var count__27896 = (0);
var i__27897 = (0);
while(true){
if((i__27897 < count__27896)){
var event = cljs.core._nth.call(null,chunk__27895,i__27897);
re_frame.router.dispatch.call(null,event);

var G__27898 = seq__27894;
var G__27899 = chunk__27895;
var G__27900 = count__27896;
var G__27901 = (i__27897 + (1));
seq__27894 = G__27898;
chunk__27895 = G__27899;
count__27896 = G__27900;
i__27897 = G__27901;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27894);
if(temp__4657__auto__){
var seq__27894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27894__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__27894__$1);
var G__27902 = cljs.core.chunk_rest.call(null,seq__27894__$1);
var G__27903 = c__26147__auto__;
var G__27904 = cljs.core.count.call(null,c__26147__auto__);
var G__27905 = (0);
seq__27894 = G__27902;
chunk__27895 = G__27903;
count__27896 = G__27904;
i__27897 = G__27905;
continue;
} else {
var event = cljs.core.first.call(null,seq__27894__$1);
re_frame.router.dispatch.call(null,event);

var G__27906 = cljs.core.next.call(null,seq__27894__$1);
var G__27907 = null;
var G__27908 = (0);
var G__27909 = (0);
seq__27894 = G__27906;
chunk__27895 = G__27907;
count__27896 = G__27908;
i__27897 = G__27909;
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
var seq__27910 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__27911 = null;
var count__27912 = (0);
var i__27913 = (0);
while(true){
if((i__27913 < count__27912)){
var event = cljs.core._nth.call(null,chunk__27911,i__27913);
clear_event.call(null,event);

var G__27914 = seq__27910;
var G__27915 = chunk__27911;
var G__27916 = count__27912;
var G__27917 = (i__27913 + (1));
seq__27910 = G__27914;
chunk__27911 = G__27915;
count__27912 = G__27916;
i__27913 = G__27917;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27910);
if(temp__4657__auto__){
var seq__27910__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27910__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__27910__$1);
var G__27918 = cljs.core.chunk_rest.call(null,seq__27910__$1);
var G__27919 = c__26147__auto__;
var G__27920 = cljs.core.count.call(null,c__26147__auto__);
var G__27921 = (0);
seq__27910 = G__27918;
chunk__27911 = G__27919;
count__27912 = G__27920;
i__27913 = G__27921;
continue;
} else {
var event = cljs.core.first.call(null,seq__27910__$1);
clear_event.call(null,event);

var G__27922 = cljs.core.next.call(null,seq__27910__$1);
var G__27923 = null;
var G__27924 = (0);
var G__27925 = (0);
seq__27910 = G__27922;
chunk__27911 = G__27923;
count__27912 = G__27924;
i__27913 = G__27925;
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

//# sourceMappingURL=fx.js.map?rel=1489150126816