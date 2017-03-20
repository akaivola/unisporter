// Compiled by ClojureScript 1.9.293 {}
goog.provide('iamfoxy.login.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('iamfoxy.ajax');
goog.require('re_frame.core');
goog.require('re_frisk.core');
goog.require('iamfoxy.config');
goog.require('taoensso.timbre');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","initialize-db","login/initialize-db",64934087),(function (_,___$1){
return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","set","login/set",402787767),(function (db,p__42886){
var vec__42887 = p__42886;
var _ = cljs.core.nth.call(null,vec__42887,(0),null);
var key = cljs.core.nth.call(null,vec__42887,(1),null);
var value = cljs.core.nth.call(null,vec__42887,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),key], null),value);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","post-login","login/post-login",788965376),(function (p__42890,p__42891){
var map__42892 = p__42890;
var map__42892__$1 = ((((!((map__42892 == null)))?((((map__42892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42892):map__42892);
var db = cljs.core.get.call(null,map__42892__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42893 = p__42891;
var _ = cljs.core.nth.call(null,vec__42893,(0),null);
var response = cljs.core.nth.call(null,vec__42893,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","error","login/error",-1153937795),(function (db,p__42897){
var vec__42898 = p__42897;
var _ = cljs.core.nth.call(null,vec__42898,(0),null);
var response = cljs.core.nth.call(null,vec__42898,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"error","error",-978969032)], null),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("login","valid-email?","login/valid-email?",1221791123),(function (db,p__42901){
var vec__42902 = p__42901;
var _ = cljs.core.nth.call(null,vec__42902,(0),null);
var valid_email_QMARK_ = cljs.core.nth.call(null,vec__42902,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"valid-email?","valid-email?",1066998250)], null),valid_email_QMARK_);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("login","error","login/error",-1153937795),(function (db,_){
var temp__4657__auto__ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_(temp__4657__auto__)){
var error = temp__4657__auto__;
return [cljs.core.str("Valitettavasti palvelussa tapahtui virhe.")].join('');
} else {
return null;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("login","password-given?","login/password-given?",211144338),(function (db,_){
return cljs.core.boolean$.call(null,(function (){var G__42905 = db;
var G__42905__$1 = (((G__42905 == null))?null:new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(G__42905));
var G__42905__$2 = (((G__42905__$1 == null))?null:new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__42905__$1));
var G__42905__$3 = (((G__42905__$2 == null))?null:cljs.core.not_empty.call(null,G__42905__$2));
if((G__42905__$3 == null)){
return null;
} else {
return ((function (G__42905,G__42905__$1,G__42905__$2,G__42905__$3){
return (function (pass){
return ((8) < cljs.core.count.call(null,pass));
});})(G__42905,G__42905__$1,G__42905__$2,G__42905__$3))
.call(null,G__42905__$3);
}
})());
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("login","username-given?","login/username-given?",-670064677),(function (db,_){
var and__25321__auto__ = (function (){var G__42907 = db;
var G__42907__$1 = (((G__42907 == null))?null:new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(G__42907));
var G__42907__$2 = (((G__42907__$1 == null))?null:new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__42907__$1));
if((G__42907__$2 == null)){
return null;
} else {
return cljs.core.not_empty.call(null,G__42907__$2);
}
})();
if(cljs.core.truth_(and__25321__auto__)){
return new cljs.core.Keyword(null,"valid-email?","valid-email?",1066998250).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db));
} else {
return and__25321__auto__;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("login","info","login/info",-180611005),(function (db,_){
return new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("login","debounced?","login/debounced?",1814270420),(function (db,_){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"debounced?","debounced?",1644003653).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db)));
}));
iamfoxy.login.core.get_initialized = (function iamfoxy$login$core$get_initialized(field){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,config),field));
});
iamfoxy.login.core.get_initialized_username = (function iamfoxy$login$core$get_initialized_username(){
return iamfoxy.login.core.get_initialized.call(null,"email");
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("login","username-initialized?","login/username-initialized?",694926333),(function (_,___$1){
return cljs.core.boolean$.call(null,cljs.core.not_empty.call(null,iamfoxy.login.core.get_initialized_username.call(null)));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("login","trigger-debounce","login/trigger-debounce",-249022587),(function (p__42908,p__42909){
var map__42910 = p__42908;
var map__42910__$1 = ((((!((map__42910 == null)))?((((map__42910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42910):map__42910);
var db = cljs.core.get.call(null,map__42910__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__42911 = p__42909;
var _ = cljs.core.nth.call(null,vec__42911,(0),null);
var debounce = cljs.core.nth.call(null,vec__42911,(1),null);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"debounced?","debounced?",1644003653)], null),debounce)], null),(cljs.core.truth_(debounce)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","trigger-debounce","login/trigger-debounce",-249022587),false], null)], null)], null)], null):null));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"login","login",55217519),(function (p__42917,_){
var map__42918 = p__42917;
var map__42918__$1 = ((((!((map__42918 == null)))?((((map__42918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42918):map__42918);
var db = cljs.core.get.call(null,map__42918__$1,new cljs.core.Keyword(null,"db","db",993250759));
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db));
var password = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null),(((cljs.core.some_QMARK_.call(null,username)) && (cljs.core.some_QMARK_.call(null,password)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),"/auth",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (username,password,map__42918,map__42918__$1,db){
return (function (p1__42915_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","post-login","login/post-login",788965376),p1__42915_SHARP_], null));
});})(username,password,map__42918,map__42918__$1,db))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (username,password,map__42918,map__42918__$1,db){
return (function (p1__42916_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","error","login/error",-1153937795),p1__42916_SHARP_], null));
});})(username,password,map__42918,map__42918__$1,db))
], null)], null):null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("password","post-change-password","password/post-change-password",-423755122),(function (db,p__42920){
var vec__42921 = p__42920;
var _ = cljs.core.nth.call(null,vec__42921,(0),null);
var map__42924 = cljs.core.nth.call(null,vec__42921,(1),null);
var map__42924__$1 = ((((!((map__42924 == null)))?((((map__42924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42924):map__42924);
var body = cljs.core.get.call(null,map__42924__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var G__42926_42927 = new cljs.core.Keyword(null,"redirect-url","redirect-url",1795705632).cljs$core$IFn$_invoke$arity$1(body);
if((G__42926_42927 == null)){
} else {
window.location = G__42926_42927;
}

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("password","post-request-password-reset","password/post-request-password-reset",-1791885021),(function (db,p__42928){
var vec__42929 = p__42928;
var _ = cljs.core.nth.call(null,vec__42929,(0),null);
var map__42932 = cljs.core.nth.call(null,vec__42929,(1),null);
var map__42932__$1 = ((((!((map__42932 == null)))?((((map__42932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42932):map__42932);
var body = cljs.core.get.call(null,map__42932__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"info","info",-317069002)], null),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(body));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("password","change-password","password/change-password",-1737314619),(function (p__42936){
var map__42937 = p__42936;
var map__42937__$1 = ((((!((map__42937 == null)))?((((map__42937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42937):map__42937);
var db = cljs.core.get.call(null,map__42937__$1,new cljs.core.Keyword(null,"db","db",993250759));
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db));
var password = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.truth_((function (){var and__25321__auto__ = cljs.core.not_empty.call(null,username);
if(cljs.core.truth_(and__25321__auto__)){
return cljs.core.not_empty.call(null,password);
} else {
return and__25321__auto__;
}
})())){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"info","info",-317069002)], null),"Pyynt\u00F6 l\u00E4hetetty.")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),"/api/password/change",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"password","password",417022471),password,new cljs.core.Keyword(null,"ticket","ticket",1810559700),iamfoxy.login.core.get_initialized.call(null,"ticket"),new cljs.core.Keyword(null,"csrf","csrf",1252357240),iamfoxy.login.core.get_initialized.call(null,"csrf")], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (username,password,map__42937,map__42937__$1,db){
return (function (p1__42934_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("password","post-change-password","password/post-change-password",-423755122),p1__42934_SHARP_], null));
});})(username,password,map__42937,map__42937__$1,db))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (username,password,map__42937,map__42937__$1,db){
return (function (p1__42935_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","error","login/error",-1153937795),p1__42935_SHARP_], null));
});})(username,password,map__42937,map__42937__$1,db))
], null)], null));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("password","request-password-reset","password/request-password-reset",-213361604),(function (p__42941){
var map__42942 = p__42941;
var map__42942__$1 = ((((!((map__42942 == null)))?((((map__42942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42942):map__42942);
var db = cljs.core.get.call(null,map__42942__$1,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(new cljs.core.Keyword(null,"valid-email?","valid-email?",1066998250).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db)))){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"info","info",-317069002)], null),"Pyynt\u00F6 l\u00E4hetetty.")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),"/api/password/reset",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"json-params","json-params",-1112693596),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (map__42942,map__42942__$1,db){
return (function (p1__42939_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("password","post-request-password-reset","password/post-request-password-reset",-1791885021),p1__42939_SHARP_], null));
});})(map__42942,map__42942__$1,db))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (map__42942,map__42942__$1,db){
return (function (p1__42940_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","error","login/error",-1153937795),p1__42940_SHARP_], null));
});})(map__42942,map__42942__$1,db))
], null)], null));
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}
}));
iamfoxy.login.core.status = (function iamfoxy$login$core$status(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.login-error","span.login-error",-833423992),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","error","login/error",-1153937795)], null)))], null);
});
iamfoxy.login.core.application_with_logo = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.application-header.bold.upcase","div.application-header.bold.upcase",-172564820),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/logo.png"], null)], null),"Ymp\u00E4rist\u00F6netti"], null);
iamfoxy.login.core.login = (function iamfoxy$login$core$login(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.outer-login","div.outer-login",-515792466),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.login","div.login",1729923461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42944_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set","login/set",402787767),new cljs.core.Keyword(null,"username","username",1605666410),p1__42944_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42945_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set","login/set",402787767),new cljs.core.Keyword(null,"password","password",417022471),p1__42945_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519)], null));
})], null),"Login"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [iamfoxy.login.core.status], null)], null)], null);
});
iamfoxy.login.core.username = (function iamfoxy$login$core$username(submit_fn){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var node = reagent.core.dom_node.call(null,this$);
return node.oninput = ((function (node){
return (function (_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","valid-email?","login/valid-email?",1221791123),node.checkValidity()], null));
});})(node))
;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (submit_fn__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"email",new cljs.core.Keyword(null,"required","required",1807647006),"required",new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","error","login/error",-1153937795)], null))))?"error":null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"S\u00E4hk\u00F6posti",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),submit_fn__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42946_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set","login/set",402787767),new cljs.core.Keyword(null,"username","username",1605666410),p1__42946_SHARP_.target.value], null));
})], null)], null);
})], null));
});
iamfoxy.login.core.password_reset = (function iamfoxy$login$core$password_reset(){
var password_given_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","password-given?","login/password-given?",211144338)], null));
var username_given_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","username-given?","login/username-given?",-670064677)], null));
var username_initialized_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","username-initialized?","login/username-initialized?",694926333)], null));
var debounced_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","debounced?","login/debounced?",1814270420)], null));
var satisfies_inputs_QMARK_ = reagent.ratom.make_reaction.call(null,((function (password_given_QMARK_,username_given_QMARK_,username_initialized_QMARK_,debounced_QMARK_){
return (function (){
var and__25321__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,debounced_QMARK_));
if(and__25321__auto__){
if(cljs.core.truth_(cljs.core.deref.call(null,username_initialized_QMARK_))){
return cljs.core.deref.call(null,password_given_QMARK_);
} else {
return cljs.core.deref.call(null,username_given_QMARK_);
}
} else {
return and__25321__auto__;
}
});})(password_given_QMARK_,username_given_QMARK_,username_initialized_QMARK_,debounced_QMARK_))
);
var login_info = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","info","login/info",-180611005)], null));
var submit_fn = ((function (password_given_QMARK_,username_given_QMARK_,username_initialized_QMARK_,debounced_QMARK_,satisfies_inputs_QMARK_,login_info){
return (function (){
re_frame.core.dispatch.call(null,(cljs.core.truth_(cljs.core.deref.call(null,username_initialized_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("password","change-password","password/change-password",-1737314619)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("password","request-password-reset","password/request-password-reset",-213361604)], null)));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","trigger-debounce","login/trigger-debounce",-249022587),true], null));
});})(password_given_QMARK_,username_given_QMARK_,username_initialized_QMARK_,debounced_QMARK_,satisfies_inputs_QMARK_,login_info))
;
var submit_on_enter = ((function (password_given_QMARK_,username_given_QMARK_,username_initialized_QMARK_,debounced_QMARK_,satisfies_inputs_QMARK_,login_info,submit_fn){
return (function (e){
if(cljs.core._EQ_.call(null,(13),e.keyCode)){
submit_fn.call(null);

return e.preventDefault();
} else {
return null;
}
});})(password_given_QMARK_,username_given_QMARK_,username_initialized_QMARK_,debounced_QMARK_,satisfies_inputs_QMARK_,login_info,submit_fn))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-outer","div.box-outer",1129747033),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box-inner","div.box-inner",1986248846),iamfoxy.login.core.application_with_logo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Vaihda ymp\u00E4rist\u00F6netin salasana"], null),(cljs.core.truth_(cljs.core.deref.call(null,username_initialized_QMARK_))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.small","p.small",1716494244),"Sy\u00F6t\u00E4 s\u00E4hk\u00F6postiosoitteesi johon voimme l\u00E4hett\u00E4\u00E4 salasanan vaihtolinkin"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.login","div.login",1729923461),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inputs","div.inputs",-928782237),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-box","div.input-box",-1300611342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),(cljs.core.truth_(cljs.core.deref.call(null,username_initialized_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","error","login/error",-1153937795)], null))))?"error":null),new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"required","required",1807647006),"required",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Uusi salasana",new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),submit_on_enter,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (password_given_QMARK_,username_given_QMARK_,username_initialized_QMARK_,debounced_QMARK_,satisfies_inputs_QMARK_,login_info,submit_fn,submit_on_enter){
return (function (p1__42947_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set","login/set",402787767),new cljs.core.Keyword(null,"password","password",417022471),p1__42947_SHARP_.target.value], null));
});})(password_given_QMARK_,username_given_QMARK_,username_initialized_QMARK_,debounced_QMARK_,satisfies_inputs_QMARK_,login_info,submit_fn,submit_on_enter))
], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [iamfoxy.login.core.username,submit_on_enter], null))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [iamfoxy.login.core.status], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn","div.btn",1399662150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,satisfies_inputs_QMARK_))?null:"disabled")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(cljs.core.deref.call(null,satisfies_inputs_QMARK_))?null:"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),submit_fn], null),(cljs.core.truth_(cljs.core.deref.call(null,username_initialized_QMARK_))?"Vaihda salasana":"Pyyd\u00E4 salasanan vaihtoa")], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.info.small","div.info.small",2076514109),cljs.core.deref.call(null,login_info)], null)], null)], null);
});
iamfoxy.login.core.mount_root = (function iamfoxy$login$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.outer-login","div.outer-login",-515792466),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [iamfoxy.login.core.login], null)], null),document.getElementById("login"));
});
iamfoxy.login.core.mount_password_reset_root = (function iamfoxy$login$core$mount_password_reset_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","set","login/set",402787767),new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.not_empty.call(null,iamfoxy.login.core.get_initialized_username.call(null))], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.outer-login","div.outer-login",-515792466),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [iamfoxy.login.core.password_reset], null)], null),document.getElementById("passwordreset"));
});
iamfoxy.login.core.dev_setup = (function iamfoxy$login$core$dev_setup(){
if(cljs.core.truth_(iamfoxy.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
iamfoxy.login.core.init_password_reset = (function iamfoxy$login$core$init_password_reset(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","initialize-db","login/initialize-db",64934087)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","valid-email?","login/valid-email?",1221791123),cljs.core.boolean$.call(null,cljs.core.not_empty.call(null,iamfoxy.login.core.get_initialized_username.call(null)))], null));

iamfoxy.login.core.dev_setup.call(null);

return iamfoxy.login.core.mount_password_reset_root.call(null);
});
iamfoxy.login.core.init_login_screen = (function iamfoxy$login$core$init_login_screen(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","initialize-db","login/initialize-db",64934087)], null));

iamfoxy.login.core.dev_setup.call(null);

return iamfoxy.login.core.mount_root.call(null);
});
iamfoxy.login.core.init = (function iamfoxy$login$core$init(var_args){
var args__26448__auto__ = [];
var len__26441__auto___42953 = arguments.length;
var i__26442__auto___42954 = (0);
while(true){
if((i__26442__auto___42954 < len__26441__auto___42953)){
args__26448__auto__.push((arguments[i__26442__auto___42954]));

var G__42955 = (i__26442__auto___42954 + (1));
i__26442__auto___42954 = G__42955;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return iamfoxy.login.core.init.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});
goog.exportSymbol('iamfoxy.login.core.init', iamfoxy.login.core.init);

iamfoxy.login.core.init.cljs$core$IFn$_invoke$arity$variadic = (function (p__42949){
var vec__42950 = p__42949;
var mode = cljs.core.nth.call(null,vec__42950,(0),null);
if(cljs.core._EQ_.call(null,"password-reset",mode)){
return iamfoxy.login.core.init_password_reset.call(null);
} else {
return iamfoxy.login.core.init_login_screen.call(null);
}
});

iamfoxy.login.core.init.cljs$lang$maxFixedArity = (0);

iamfoxy.login.core.init.cljs$lang$applyTo = (function (seq42948){
return iamfoxy.login.core.init.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42948));
});


//# sourceMappingURL=core.js.map?rel=1489150139698