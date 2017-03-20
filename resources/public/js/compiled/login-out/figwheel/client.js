// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args53850 = [];
var len__26441__auto___53853 = arguments.length;
var i__26442__auto___53854 = (0);
while(true){
if((i__26442__auto___53854 < len__26441__auto___53853)){
args53850.push((arguments[i__26442__auto___53854]));

var G__53855 = (i__26442__auto___53854 + (1));
i__26442__auto___53854 = G__53855;
continue;
} else {
}
break;
}

var G__53852 = args53850.length;
switch (G__53852) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53850.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26448__auto__ = [];
var len__26441__auto___53858 = arguments.length;
var i__26442__auto___53859 = (0);
while(true){
if((i__26442__auto___53859 < len__26441__auto___53858)){
args__26448__auto__.push((arguments[i__26442__auto___53859]));

var G__53860 = (i__26442__auto___53859 + (1));
i__26442__auto___53859 = G__53860;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq53857){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53857));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26448__auto__ = [];
var len__26441__auto___53862 = arguments.length;
var i__26442__auto___53863 = (0);
while(true){
if((i__26442__auto___53863 < len__26441__auto___53862)){
args__26448__auto__.push((arguments[i__26442__auto___53863]));

var G__53864 = (i__26442__auto___53863 + (1));
i__26442__auto___53863 = G__53864;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq53861){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53861));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__53865 = cljs.core._EQ_;
var expr__53866 = (function (){var or__25333__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e53869){if((e53869 instanceof Error)){
var e = e53869;
return false;
} else {
throw e53869;

}
}})();
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__53865.call(null,"true",expr__53866))){
return true;
} else {
if(cljs.core.truth_(pred__53865.call(null,"false",expr__53866))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__53866)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e53871){if((e53871 instanceof Error)){
var e = e53871;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e53871;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__53872){
var map__53875 = p__53872;
var map__53875__$1 = ((((!((map__53875 == null)))?((((map__53875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53875):map__53875);
var message = cljs.core.get.call(null,map__53875__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__53875__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25333__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25321__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25321__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25321__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29750__auto___54037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___54037,ch){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___54037,ch){
return (function (state_54006){
var state_val_54007 = (state_54006[(1)]);
if((state_val_54007 === (7))){
var inst_54002 = (state_54006[(2)]);
var state_54006__$1 = state_54006;
var statearr_54008_54038 = state_54006__$1;
(statearr_54008_54038[(2)] = inst_54002);

(statearr_54008_54038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (1))){
var state_54006__$1 = state_54006;
var statearr_54009_54039 = state_54006__$1;
(statearr_54009_54039[(2)] = null);

(statearr_54009_54039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (4))){
var inst_53959 = (state_54006[(7)]);
var inst_53959__$1 = (state_54006[(2)]);
var state_54006__$1 = (function (){var statearr_54010 = state_54006;
(statearr_54010[(7)] = inst_53959__$1);

return statearr_54010;
})();
if(cljs.core.truth_(inst_53959__$1)){
var statearr_54011_54040 = state_54006__$1;
(statearr_54011_54040[(1)] = (5));

} else {
var statearr_54012_54041 = state_54006__$1;
(statearr_54012_54041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (15))){
var inst_53966 = (state_54006[(8)]);
var inst_53981 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53966);
var inst_53982 = cljs.core.first.call(null,inst_53981);
var inst_53983 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53982);
var inst_53984 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_53983)].join('');
var inst_53985 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53984);
var state_54006__$1 = state_54006;
var statearr_54013_54042 = state_54006__$1;
(statearr_54013_54042[(2)] = inst_53985);

(statearr_54013_54042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (13))){
var inst_53990 = (state_54006[(2)]);
var state_54006__$1 = state_54006;
var statearr_54014_54043 = state_54006__$1;
(statearr_54014_54043[(2)] = inst_53990);

(statearr_54014_54043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (6))){
var state_54006__$1 = state_54006;
var statearr_54015_54044 = state_54006__$1;
(statearr_54015_54044[(2)] = null);

(statearr_54015_54044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (17))){
var inst_53988 = (state_54006[(2)]);
var state_54006__$1 = state_54006;
var statearr_54016_54045 = state_54006__$1;
(statearr_54016_54045[(2)] = inst_53988);

(statearr_54016_54045[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (3))){
var inst_54004 = (state_54006[(2)]);
var state_54006__$1 = state_54006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54006__$1,inst_54004);
} else {
if((state_val_54007 === (12))){
var inst_53965 = (state_54006[(9)]);
var inst_53979 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_53965,opts);
var state_54006__$1 = state_54006;
if(cljs.core.truth_(inst_53979)){
var statearr_54017_54046 = state_54006__$1;
(statearr_54017_54046[(1)] = (15));

} else {
var statearr_54018_54047 = state_54006__$1;
(statearr_54018_54047[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (2))){
var state_54006__$1 = state_54006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54006__$1,(4),ch);
} else {
if((state_val_54007 === (11))){
var inst_53966 = (state_54006[(8)]);
var inst_53971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53972 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_53966);
var inst_53973 = cljs.core.async.timeout.call(null,(1000));
var inst_53974 = [inst_53972,inst_53973];
var inst_53975 = (new cljs.core.PersistentVector(null,2,(5),inst_53971,inst_53974,null));
var state_54006__$1 = state_54006;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54006__$1,(14),inst_53975);
} else {
if((state_val_54007 === (9))){
var inst_53966 = (state_54006[(8)]);
var inst_53992 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53993 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53966);
var inst_53994 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53993);
var inst_53995 = [cljs.core.str("Not loading: "),cljs.core.str(inst_53994)].join('');
var inst_53996 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53995);
var state_54006__$1 = (function (){var statearr_54019 = state_54006;
(statearr_54019[(10)] = inst_53992);

return statearr_54019;
})();
var statearr_54020_54048 = state_54006__$1;
(statearr_54020_54048[(2)] = inst_53996);

(statearr_54020_54048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (5))){
var inst_53959 = (state_54006[(7)]);
var inst_53961 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_53962 = (new cljs.core.PersistentArrayMap(null,2,inst_53961,null));
var inst_53963 = (new cljs.core.PersistentHashSet(null,inst_53962,null));
var inst_53964 = figwheel.client.focus_msgs.call(null,inst_53963,inst_53959);
var inst_53965 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_53964);
var inst_53966 = cljs.core.first.call(null,inst_53964);
var inst_53967 = figwheel.client.autoload_QMARK_.call(null);
var state_54006__$1 = (function (){var statearr_54021 = state_54006;
(statearr_54021[(8)] = inst_53966);

(statearr_54021[(9)] = inst_53965);

return statearr_54021;
})();
if(cljs.core.truth_(inst_53967)){
var statearr_54022_54049 = state_54006__$1;
(statearr_54022_54049[(1)] = (8));

} else {
var statearr_54023_54050 = state_54006__$1;
(statearr_54023_54050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (14))){
var inst_53977 = (state_54006[(2)]);
var state_54006__$1 = state_54006;
var statearr_54024_54051 = state_54006__$1;
(statearr_54024_54051[(2)] = inst_53977);

(statearr_54024_54051[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (16))){
var state_54006__$1 = state_54006;
var statearr_54025_54052 = state_54006__$1;
(statearr_54025_54052[(2)] = null);

(statearr_54025_54052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (10))){
var inst_53998 = (state_54006[(2)]);
var state_54006__$1 = (function (){var statearr_54026 = state_54006;
(statearr_54026[(11)] = inst_53998);

return statearr_54026;
})();
var statearr_54027_54053 = state_54006__$1;
(statearr_54027_54053[(2)] = null);

(statearr_54027_54053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54007 === (8))){
var inst_53965 = (state_54006[(9)]);
var inst_53969 = figwheel.client.reload_file_state_QMARK_.call(null,inst_53965,opts);
var state_54006__$1 = state_54006;
if(cljs.core.truth_(inst_53969)){
var statearr_54028_54054 = state_54006__$1;
(statearr_54028_54054[(1)] = (11));

} else {
var statearr_54029_54055 = state_54006__$1;
(statearr_54029_54055[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29750__auto___54037,ch))
;
return ((function (switch__29638__auto__,c__29750__auto___54037,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____0 = (function (){
var statearr_54033 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54033[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__);

(statearr_54033[(1)] = (1));

return statearr_54033;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____1 = (function (state_54006){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_54006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e54034){if((e54034 instanceof Object)){
var ex__29642__auto__ = e54034;
var statearr_54035_54056 = state_54006;
(statearr_54035_54056[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54057 = state_54006;
state_54006 = G__54057;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__ = function(state_54006){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____1.call(this,state_54006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___54037,ch))
})();
var state__29752__auto__ = (function (){var statearr_54036 = f__29751__auto__.call(null);
(statearr_54036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___54037);

return statearr_54036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___54037,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54058_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54058_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_54061 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54061){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54060){if((e54060 instanceof Error)){
var e = e54060;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54061], null));
} else {
var e = e54060;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54061))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54074){
var map__54083 = p__54074;
var map__54083__$1 = ((((!((map__54083 == null)))?((((map__54083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54083):map__54083);
var opts = map__54083__$1;
var build_id = cljs.core.get.call(null,map__54083__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54083,map__54083__$1,opts,build_id){
return (function (p__54085){
var vec__54086 = p__54085;
var seq__54087 = cljs.core.seq.call(null,vec__54086);
var first__54088 = cljs.core.first.call(null,seq__54087);
var seq__54087__$1 = cljs.core.next.call(null,seq__54087);
var map__54089 = first__54088;
var map__54089__$1 = ((((!((map__54089 == null)))?((((map__54089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54089):map__54089);
var msg = map__54089__$1;
var msg_name = cljs.core.get.call(null,map__54089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54087__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54086,seq__54087,first__54088,seq__54087__$1,map__54089,map__54089__$1,msg,msg_name,_,map__54083,map__54083__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54086,seq__54087,first__54088,seq__54087__$1,map__54089,map__54089__$1,msg,msg_name,_,map__54083,map__54083__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54083,map__54083__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54108){
var vec__54109 = p__54108;
var seq__54110 = cljs.core.seq.call(null,vec__54109);
var first__54111 = cljs.core.first.call(null,seq__54110);
var seq__54110__$1 = cljs.core.next.call(null,seq__54110);
var map__54112 = first__54111;
var map__54112__$1 = ((((!((map__54112 == null)))?((((map__54112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54112):map__54112);
var msg = map__54112__$1;
var msg_name = cljs.core.get.call(null,map__54112__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54110__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54114){
var map__54126 = p__54114;
var map__54126__$1 = ((((!((map__54126 == null)))?((((map__54126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54126):map__54126);
var on_compile_warning = cljs.core.get.call(null,map__54126__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54126__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54126,map__54126__$1,on_compile_warning,on_compile_fail){
return (function (p__54128){
var vec__54129 = p__54128;
var seq__54130 = cljs.core.seq.call(null,vec__54129);
var first__54131 = cljs.core.first.call(null,seq__54130);
var seq__54130__$1 = cljs.core.next.call(null,seq__54130);
var map__54132 = first__54131;
var map__54132__$1 = ((((!((map__54132 == null)))?((((map__54132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54132):map__54132);
var msg = map__54132__$1;
var msg_name = cljs.core.get.call(null,map__54132__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54130__$1;
var pred__54134 = cljs.core._EQ_;
var expr__54135 = msg_name;
if(cljs.core.truth_(pred__54134.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54135))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54134.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54135))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54126,map__54126__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,msg_hist,msg_names,msg){
return (function (state_54376){
var state_val_54377 = (state_54376[(1)]);
if((state_val_54377 === (7))){
var inst_54296 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
if(cljs.core.truth_(inst_54296)){
var statearr_54378_54433 = state_54376__$1;
(statearr_54378_54433[(1)] = (8));

} else {
var statearr_54379_54434 = state_54376__$1;
(statearr_54379_54434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (20))){
var inst_54370 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54380_54435 = state_54376__$1;
(statearr_54380_54435[(2)] = inst_54370);

(statearr_54380_54435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (27))){
var inst_54366 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54381_54436 = state_54376__$1;
(statearr_54381_54436[(2)] = inst_54366);

(statearr_54381_54436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (1))){
var inst_54289 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54376__$1 = state_54376;
if(cljs.core.truth_(inst_54289)){
var statearr_54382_54437 = state_54376__$1;
(statearr_54382_54437[(1)] = (2));

} else {
var statearr_54383_54438 = state_54376__$1;
(statearr_54383_54438[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (24))){
var inst_54368 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54384_54439 = state_54376__$1;
(statearr_54384_54439[(2)] = inst_54368);

(statearr_54384_54439[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (4))){
var inst_54374 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54376__$1,inst_54374);
} else {
if((state_val_54377 === (15))){
var inst_54372 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54385_54441 = state_54376__$1;
(statearr_54385_54441[(2)] = inst_54372);

(statearr_54385_54441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (21))){
var inst_54325 = (state_54376[(2)]);
var inst_54326 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54327 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54326);
var state_54376__$1 = (function (){var statearr_54386 = state_54376;
(statearr_54386[(7)] = inst_54325);

return statearr_54386;
})();
var statearr_54387_54444 = state_54376__$1;
(statearr_54387_54444[(2)] = inst_54327);

(statearr_54387_54444[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (31))){
var inst_54355 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54376__$1 = state_54376;
if(cljs.core.truth_(inst_54355)){
var statearr_54388_54448 = state_54376__$1;
(statearr_54388_54448[(1)] = (34));

} else {
var statearr_54389_54449 = state_54376__$1;
(statearr_54389_54449[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (32))){
var inst_54364 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54390_54451 = state_54376__$1;
(statearr_54390_54451[(2)] = inst_54364);

(statearr_54390_54451[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (33))){
var inst_54351 = (state_54376[(2)]);
var inst_54352 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54353 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54352);
var state_54376__$1 = (function (){var statearr_54391 = state_54376;
(statearr_54391[(8)] = inst_54351);

return statearr_54391;
})();
var statearr_54392_54452 = state_54376__$1;
(statearr_54392_54452[(2)] = inst_54353);

(statearr_54392_54452[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (13))){
var inst_54310 = figwheel.client.heads_up.clear.call(null);
var state_54376__$1 = state_54376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(16),inst_54310);
} else {
if((state_val_54377 === (22))){
var inst_54331 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54332 = figwheel.client.heads_up.append_warning_message.call(null,inst_54331);
var state_54376__$1 = state_54376;
var statearr_54393_54453 = state_54376__$1;
(statearr_54393_54453[(2)] = inst_54332);

(statearr_54393_54453[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (36))){
var inst_54362 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54396_54454 = state_54376__$1;
(statearr_54396_54454[(2)] = inst_54362);

(statearr_54396_54454[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (29))){
var inst_54342 = (state_54376[(2)]);
var inst_54343 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54344 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54343);
var state_54376__$1 = (function (){var statearr_54397 = state_54376;
(statearr_54397[(9)] = inst_54342);

return statearr_54397;
})();
var statearr_54398_54455 = state_54376__$1;
(statearr_54398_54455[(2)] = inst_54344);

(statearr_54398_54455[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (6))){
var inst_54291 = (state_54376[(10)]);
var state_54376__$1 = state_54376;
var statearr_54399_54456 = state_54376__$1;
(statearr_54399_54456[(2)] = inst_54291);

(statearr_54399_54456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (28))){
var inst_54338 = (state_54376[(2)]);
var inst_54339 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54340 = figwheel.client.heads_up.display_warning.call(null,inst_54339);
var state_54376__$1 = (function (){var statearr_54400 = state_54376;
(statearr_54400[(11)] = inst_54338);

return statearr_54400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(29),inst_54340);
} else {
if((state_val_54377 === (25))){
var inst_54336 = figwheel.client.heads_up.clear.call(null);
var state_54376__$1 = state_54376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(28),inst_54336);
} else {
if((state_val_54377 === (34))){
var inst_54357 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54376__$1 = state_54376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(37),inst_54357);
} else {
if((state_val_54377 === (17))){
var inst_54316 = (state_54376[(2)]);
var inst_54317 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54318 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54317);
var state_54376__$1 = (function (){var statearr_54401 = state_54376;
(statearr_54401[(12)] = inst_54316);

return statearr_54401;
})();
var statearr_54402_54475 = state_54376__$1;
(statearr_54402_54475[(2)] = inst_54318);

(statearr_54402_54475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (3))){
var inst_54308 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54376__$1 = state_54376;
if(cljs.core.truth_(inst_54308)){
var statearr_54403_54476 = state_54376__$1;
(statearr_54403_54476[(1)] = (13));

} else {
var statearr_54404_54477 = state_54376__$1;
(statearr_54404_54477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (12))){
var inst_54304 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54405_54478 = state_54376__$1;
(statearr_54405_54478[(2)] = inst_54304);

(statearr_54405_54478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (2))){
var inst_54291 = (state_54376[(10)]);
var inst_54291__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54376__$1 = (function (){var statearr_54408 = state_54376;
(statearr_54408[(10)] = inst_54291__$1);

return statearr_54408;
})();
if(cljs.core.truth_(inst_54291__$1)){
var statearr_54409_54479 = state_54376__$1;
(statearr_54409_54479[(1)] = (5));

} else {
var statearr_54410_54480 = state_54376__$1;
(statearr_54410_54480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (23))){
var inst_54334 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54376__$1 = state_54376;
if(cljs.core.truth_(inst_54334)){
var statearr_54411_54481 = state_54376__$1;
(statearr_54411_54481[(1)] = (25));

} else {
var statearr_54412_54482 = state_54376__$1;
(statearr_54412_54482[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (35))){
var state_54376__$1 = state_54376;
var statearr_54413_54483 = state_54376__$1;
(statearr_54413_54483[(2)] = null);

(statearr_54413_54483[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (19))){
var inst_54329 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54376__$1 = state_54376;
if(cljs.core.truth_(inst_54329)){
var statearr_54415_54484 = state_54376__$1;
(statearr_54415_54484[(1)] = (22));

} else {
var statearr_54416_54485 = state_54376__$1;
(statearr_54416_54485[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (11))){
var inst_54300 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54417_54487 = state_54376__$1;
(statearr_54417_54487[(2)] = inst_54300);

(statearr_54417_54487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (9))){
var inst_54302 = figwheel.client.heads_up.clear.call(null);
var state_54376__$1 = state_54376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(12),inst_54302);
} else {
if((state_val_54377 === (5))){
var inst_54293 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54376__$1 = state_54376;
var statearr_54418_54490 = state_54376__$1;
(statearr_54418_54490[(2)] = inst_54293);

(statearr_54418_54490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (14))){
var inst_54320 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54376__$1 = state_54376;
if(cljs.core.truth_(inst_54320)){
var statearr_54419_54494 = state_54376__$1;
(statearr_54419_54494[(1)] = (18));

} else {
var statearr_54420_54495 = state_54376__$1;
(statearr_54420_54495[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (26))){
var inst_54346 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54376__$1 = state_54376;
if(cljs.core.truth_(inst_54346)){
var statearr_54421_54499 = state_54376__$1;
(statearr_54421_54499[(1)] = (30));

} else {
var statearr_54422_54500 = state_54376__$1;
(statearr_54422_54500[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (16))){
var inst_54312 = (state_54376[(2)]);
var inst_54313 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54314 = figwheel.client.heads_up.display_exception.call(null,inst_54313);
var state_54376__$1 = (function (){var statearr_54423 = state_54376;
(statearr_54423[(13)] = inst_54312);

return statearr_54423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(17),inst_54314);
} else {
if((state_val_54377 === (30))){
var inst_54348 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54349 = figwheel.client.heads_up.display_warning.call(null,inst_54348);
var state_54376__$1 = state_54376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(33),inst_54349);
} else {
if((state_val_54377 === (10))){
var inst_54306 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54424_54505 = state_54376__$1;
(statearr_54424_54505[(2)] = inst_54306);

(statearr_54424_54505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (18))){
var inst_54322 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54323 = figwheel.client.heads_up.display_exception.call(null,inst_54322);
var state_54376__$1 = state_54376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(21),inst_54323);
} else {
if((state_val_54377 === (37))){
var inst_54359 = (state_54376[(2)]);
var state_54376__$1 = state_54376;
var statearr_54425_54508 = state_54376__$1;
(statearr_54425_54508[(2)] = inst_54359);

(statearr_54425_54508[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54377 === (8))){
var inst_54298 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54376__$1 = state_54376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54376__$1,(11),inst_54298);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29750__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29638__auto__,c__29750__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____0 = (function (){
var statearr_54429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54429[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__);

(statearr_54429[(1)] = (1));

return statearr_54429;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____1 = (function (state_54376){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_54376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e54430){if((e54430 instanceof Object)){
var ex__29642__auto__ = e54430;
var statearr_54431_54519 = state_54376;
(statearr_54431_54519[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54520 = state_54376;
state_54376 = G__54520;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__ = function(state_54376){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____1.call(this,state_54376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,msg_hist,msg_names,msg))
})();
var state__29752__auto__ = (function (){var statearr_54432 = f__29751__auto__.call(null);
(statearr_54432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_54432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,msg_hist,msg_names,msg))
);

return c__29750__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29750__auto___54591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___54591,ch){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___54591,ch){
return (function (state_54574){
var state_val_54575 = (state_54574[(1)]);
if((state_val_54575 === (1))){
var state_54574__$1 = state_54574;
var statearr_54576_54592 = state_54574__$1;
(statearr_54576_54592[(2)] = null);

(statearr_54576_54592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54575 === (2))){
var state_54574__$1 = state_54574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54574__$1,(4),ch);
} else {
if((state_val_54575 === (3))){
var inst_54572 = (state_54574[(2)]);
var state_54574__$1 = state_54574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54574__$1,inst_54572);
} else {
if((state_val_54575 === (4))){
var inst_54562 = (state_54574[(7)]);
var inst_54562__$1 = (state_54574[(2)]);
var state_54574__$1 = (function (){var statearr_54577 = state_54574;
(statearr_54577[(7)] = inst_54562__$1);

return statearr_54577;
})();
if(cljs.core.truth_(inst_54562__$1)){
var statearr_54578_54593 = state_54574__$1;
(statearr_54578_54593[(1)] = (5));

} else {
var statearr_54579_54594 = state_54574__$1;
(statearr_54579_54594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54575 === (5))){
var inst_54562 = (state_54574[(7)]);
var inst_54564 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54562);
var state_54574__$1 = state_54574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54574__$1,(8),inst_54564);
} else {
if((state_val_54575 === (6))){
var state_54574__$1 = state_54574;
var statearr_54580_54595 = state_54574__$1;
(statearr_54580_54595[(2)] = null);

(statearr_54580_54595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54575 === (7))){
var inst_54570 = (state_54574[(2)]);
var state_54574__$1 = state_54574;
var statearr_54581_54596 = state_54574__$1;
(statearr_54581_54596[(2)] = inst_54570);

(statearr_54581_54596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54575 === (8))){
var inst_54566 = (state_54574[(2)]);
var state_54574__$1 = (function (){var statearr_54582 = state_54574;
(statearr_54582[(8)] = inst_54566);

return statearr_54582;
})();
var statearr_54583_54597 = state_54574__$1;
(statearr_54583_54597[(2)] = null);

(statearr_54583_54597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29750__auto___54591,ch))
;
return ((function (switch__29638__auto__,c__29750__auto___54591,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29639__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29639__auto____0 = (function (){
var statearr_54587 = [null,null,null,null,null,null,null,null,null];
(statearr_54587[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29639__auto__);

(statearr_54587[(1)] = (1));

return statearr_54587;
});
var figwheel$client$heads_up_plugin_$_state_machine__29639__auto____1 = (function (state_54574){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_54574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e54588){if((e54588 instanceof Object)){
var ex__29642__auto__ = e54588;
var statearr_54589_54598 = state_54574;
(statearr_54589_54598[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54599 = state_54574;
state_54574 = G__54599;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29639__auto__ = function(state_54574){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29639__auto____1.call(this,state_54574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29639__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29639__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___54591,ch))
})();
var state__29752__auto__ = (function (){var statearr_54590 = f__29751__auto__.call(null);
(statearr_54590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___54591);

return statearr_54590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___54591,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__){
return (function (state_54620){
var state_val_54621 = (state_54620[(1)]);
if((state_val_54621 === (1))){
var inst_54615 = cljs.core.async.timeout.call(null,(3000));
var state_54620__$1 = state_54620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54620__$1,(2),inst_54615);
} else {
if((state_val_54621 === (2))){
var inst_54617 = (state_54620[(2)]);
var inst_54618 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54620__$1 = (function (){var statearr_54622 = state_54620;
(statearr_54622[(7)] = inst_54617);

return statearr_54622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54620__$1,inst_54618);
} else {
return null;
}
}
});})(c__29750__auto__))
;
return ((function (switch__29638__auto__,c__29750__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____0 = (function (){
var statearr_54626 = [null,null,null,null,null,null,null,null];
(statearr_54626[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__);

(statearr_54626[(1)] = (1));

return statearr_54626;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____1 = (function (state_54620){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_54620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e54627){if((e54627 instanceof Object)){
var ex__29642__auto__ = e54627;
var statearr_54628_54638 = state_54620;
(statearr_54628_54638[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54639 = state_54620;
state_54620 = G__54639;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__ = function(state_54620){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____1.call(this,state_54620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_54629 = f__29751__auto__.call(null);
(statearr_54629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_54629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__))
);

return c__29750__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54665){
var state_val_54666 = (state_54665[(1)]);
if((state_val_54666 === (1))){
var inst_54659 = cljs.core.async.timeout.call(null,(2000));
var state_54665__$1 = state_54665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54665__$1,(2),inst_54659);
} else {
if((state_val_54666 === (2))){
var inst_54661 = (state_54665[(2)]);
var inst_54662 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_54663 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54662);
var state_54665__$1 = (function (){var statearr_54667 = state_54665;
(statearr_54667[(7)] = inst_54661);

return statearr_54667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54665__$1,inst_54663);
} else {
return null;
}
}
});})(c__29750__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29638__auto__,c__29750__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____0 = (function (){
var statearr_54671 = [null,null,null,null,null,null,null,null];
(statearr_54671[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__);

(statearr_54671[(1)] = (1));

return statearr_54671;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____1 = (function (state_54665){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_54665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e54672){if((e54672 instanceof Object)){
var ex__29642__auto__ = e54672;
var statearr_54673_54675 = state_54665;
(statearr_54673_54675[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54676 = state_54665;
state_54665 = G__54676;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__ = function(state_54665){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____1.call(this,state_54665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29752__auto__ = (function (){var statearr_54674 = f__29751__auto__.call(null);
(statearr_54674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_54674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,figwheel_version,temp__4657__auto__))
);

return c__29750__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54677){
var map__54681 = p__54677;
var map__54681__$1 = ((((!((map__54681 == null)))?((((map__54681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54681):map__54681);
var file = cljs.core.get.call(null,map__54681__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54681__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54683 = "";
var G__54683__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__54683),cljs.core.str("file "),cljs.core.str(file)].join(''):G__54683);
var G__54683__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__54683__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__54683__$1);
if(cljs.core.truth_((function (){var and__25321__auto__ = line;
if(cljs.core.truth_(and__25321__auto__)){
return column;
} else {
return and__25321__auto__;
}
})())){
return [cljs.core.str(G__54683__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__54683__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54689){
var map__54737 = p__54689;
var map__54737__$1 = ((((!((map__54737 == null)))?((((map__54737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54737):map__54737);
var ed = map__54737__$1;
var formatted_exception = cljs.core.get.call(null,map__54737__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54737__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54737__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54756_54794 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54757_54795 = null;
var count__54759_54796 = (0);
var i__54760_54797 = (0);
while(true){
if((i__54760_54797 < count__54759_54796)){
var msg_54802 = cljs.core._nth.call(null,chunk__54757_54795,i__54760_54797);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54802);

var G__54807 = seq__54756_54794;
var G__54808 = chunk__54757_54795;
var G__54809 = count__54759_54796;
var G__54810 = (i__54760_54797 + (1));
seq__54756_54794 = G__54807;
chunk__54757_54795 = G__54808;
count__54759_54796 = G__54809;
i__54760_54797 = G__54810;
continue;
} else {
var temp__4657__auto___54815 = cljs.core.seq.call(null,seq__54756_54794);
if(temp__4657__auto___54815){
var seq__54756_54817__$1 = temp__4657__auto___54815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54756_54817__$1)){
var c__26147__auto___54820 = cljs.core.chunk_first.call(null,seq__54756_54817__$1);
var G__54822 = cljs.core.chunk_rest.call(null,seq__54756_54817__$1);
var G__54823 = c__26147__auto___54820;
var G__54824 = cljs.core.count.call(null,c__26147__auto___54820);
var G__54825 = (0);
seq__54756_54794 = G__54822;
chunk__54757_54795 = G__54823;
count__54759_54796 = G__54824;
i__54760_54797 = G__54825;
continue;
} else {
var msg_54829 = cljs.core.first.call(null,seq__54756_54817__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54829);

var G__54831 = cljs.core.next.call(null,seq__54756_54817__$1);
var G__54832 = null;
var G__54833 = (0);
var G__54834 = (0);
seq__54756_54794 = G__54831;
chunk__54757_54795 = G__54832;
count__54759_54796 = G__54833;
i__54760_54797 = G__54834;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54842){
var map__54848 = p__54842;
var map__54848__$1 = ((((!((map__54848 == null)))?((((map__54848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54848):map__54848);
var w = map__54848__$1;
var message = cljs.core.get.call(null,map__54848__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/login-out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/login-out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25321__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25321__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25321__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__54877 = cljs.core.seq.call(null,plugins);
var chunk__54878 = null;
var count__54879 = (0);
var i__54880 = (0);
while(true){
if((i__54880 < count__54879)){
var vec__54881 = cljs.core._nth.call(null,chunk__54878,i__54880);
var k = cljs.core.nth.call(null,vec__54881,(0),null);
var plugin = cljs.core.nth.call(null,vec__54881,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54892 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54877,chunk__54878,count__54879,i__54880,pl_54892,vec__54881,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54892.call(null,msg_hist);
});})(seq__54877,chunk__54878,count__54879,i__54880,pl_54892,vec__54881,k,plugin))
);
} else {
}

var G__54894 = seq__54877;
var G__54895 = chunk__54878;
var G__54896 = count__54879;
var G__54897 = (i__54880 + (1));
seq__54877 = G__54894;
chunk__54878 = G__54895;
count__54879 = G__54896;
i__54880 = G__54897;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54877);
if(temp__4657__auto__){
var seq__54877__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54877__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__54877__$1);
var G__54900 = cljs.core.chunk_rest.call(null,seq__54877__$1);
var G__54901 = c__26147__auto__;
var G__54902 = cljs.core.count.call(null,c__26147__auto__);
var G__54903 = (0);
seq__54877 = G__54900;
chunk__54878 = G__54901;
count__54879 = G__54902;
i__54880 = G__54903;
continue;
} else {
var vec__54886 = cljs.core.first.call(null,seq__54877__$1);
var k = cljs.core.nth.call(null,vec__54886,(0),null);
var plugin = cljs.core.nth.call(null,vec__54886,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54905 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54877,chunk__54878,count__54879,i__54880,pl_54905,vec__54886,k,plugin,seq__54877__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54905.call(null,msg_hist);
});})(seq__54877,chunk__54878,count__54879,i__54880,pl_54905,vec__54886,k,plugin,seq__54877__$1,temp__4657__auto__))
);
} else {
}

var G__54907 = cljs.core.next.call(null,seq__54877__$1);
var G__54908 = null;
var G__54909 = (0);
var G__54910 = (0);
seq__54877 = G__54907;
chunk__54878 = G__54908;
count__54879 = G__54909;
i__54880 = G__54910;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args54913 = [];
var len__26441__auto___54922 = arguments.length;
var i__26442__auto___54923 = (0);
while(true){
if((i__26442__auto___54923 < len__26441__auto___54922)){
args54913.push((arguments[i__26442__auto___54923]));

var G__54924 = (i__26442__auto___54923 + (1));
i__26442__auto___54923 = G__54924;
continue;
} else {
}
break;
}

var G__54915 = args54913.length;
switch (G__54915) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54913.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__54918_54926 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__54919_54927 = null;
var count__54920_54928 = (0);
var i__54921_54929 = (0);
while(true){
if((i__54921_54929 < count__54920_54928)){
var msg_54930 = cljs.core._nth.call(null,chunk__54919_54927,i__54921_54929);
figwheel.client.socket.handle_incoming_message.call(null,msg_54930);

var G__54931 = seq__54918_54926;
var G__54932 = chunk__54919_54927;
var G__54933 = count__54920_54928;
var G__54934 = (i__54921_54929 + (1));
seq__54918_54926 = G__54931;
chunk__54919_54927 = G__54932;
count__54920_54928 = G__54933;
i__54921_54929 = G__54934;
continue;
} else {
var temp__4657__auto___54935 = cljs.core.seq.call(null,seq__54918_54926);
if(temp__4657__auto___54935){
var seq__54918_54936__$1 = temp__4657__auto___54935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54918_54936__$1)){
var c__26147__auto___54937 = cljs.core.chunk_first.call(null,seq__54918_54936__$1);
var G__54938 = cljs.core.chunk_rest.call(null,seq__54918_54936__$1);
var G__54939 = c__26147__auto___54937;
var G__54940 = cljs.core.count.call(null,c__26147__auto___54937);
var G__54941 = (0);
seq__54918_54926 = G__54938;
chunk__54919_54927 = G__54939;
count__54920_54928 = G__54940;
i__54921_54929 = G__54941;
continue;
} else {
var msg_54942 = cljs.core.first.call(null,seq__54918_54936__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_54942);

var G__54943 = cljs.core.next.call(null,seq__54918_54936__$1);
var G__54944 = null;
var G__54945 = (0);
var G__54946 = (0);
seq__54918_54926 = G__54943;
chunk__54919_54927 = G__54944;
count__54920_54928 = G__54945;
i__54921_54929 = G__54946;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26448__auto__ = [];
var len__26441__auto___54954 = arguments.length;
var i__26442__auto___54955 = (0);
while(true){
if((i__26442__auto___54955 < len__26441__auto___54954)){
args__26448__auto__.push((arguments[i__26442__auto___54955]));

var G__54956 = (i__26442__auto___54955 + (1));
i__26442__auto___54955 = G__54956;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54951){
var map__54952 = p__54951;
var map__54952__$1 = ((((!((map__54952 == null)))?((((map__54952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54952):map__54952);
var opts = map__54952__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54949){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54949));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e54960){if((e54960 instanceof Error)){
var e = e54960;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e54960;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__54964){
var map__54965 = p__54964;
var map__54965__$1 = ((((!((map__54965 == null)))?((((map__54965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54965):map__54965);
var msg_name = cljs.core.get.call(null,map__54965__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489150144600