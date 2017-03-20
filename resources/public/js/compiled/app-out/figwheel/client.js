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
var args37634 = [];
var len__26441__auto___37637 = arguments.length;
var i__26442__auto___37638 = (0);
while(true){
if((i__26442__auto___37638 < len__26441__auto___37637)){
args37634.push((arguments[i__26442__auto___37638]));

var G__37639 = (i__26442__auto___37638 + (1));
i__26442__auto___37638 = G__37639;
continue;
} else {
}
break;
}

var G__37636 = args37634.length;
switch (G__37636) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37634.length)].join('')));

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
var len__26441__auto___37642 = arguments.length;
var i__26442__auto___37643 = (0);
while(true){
if((i__26442__auto___37643 < len__26441__auto___37642)){
args__26448__auto__.push((arguments[i__26442__auto___37643]));

var G__37644 = (i__26442__auto___37643 + (1));
i__26442__auto___37643 = G__37644;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37641){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37641));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26448__auto__ = [];
var len__26441__auto___37646 = arguments.length;
var i__26442__auto___37647 = (0);
while(true){
if((i__26442__auto___37647 < len__26441__auto___37646)){
args__26448__auto__.push((arguments[i__26442__auto___37647]));

var G__37648 = (i__26442__auto___37647 + (1));
i__26442__auto___37647 = G__37648;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37645){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37645));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37649 = cljs.core._EQ_;
var expr__37650 = (function (){var or__25333__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37653){if((e37653 instanceof Error)){
var e = e37653;
return false;
} else {
throw e37653;

}
}})();
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37649.call(null,"true",expr__37650))){
return true;
} else {
if(cljs.core.truth_(pred__37649.call(null,"false",expr__37650))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37650)].join('')));
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
}catch (e37655){if((e37655 instanceof Error)){
var e = e37655;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37655;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37656){
var map__37659 = p__37656;
var map__37659__$1 = ((((!((map__37659 == null)))?((((map__37659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37659):map__37659);
var message = cljs.core.get.call(null,map__37659__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37659__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__29750__auto___37821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___37821,ch){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___37821,ch){
return (function (state_37790){
var state_val_37791 = (state_37790[(1)]);
if((state_val_37791 === (7))){
var inst_37786 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37792_37822 = state_37790__$1;
(statearr_37792_37822[(2)] = inst_37786);

(statearr_37792_37822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (1))){
var state_37790__$1 = state_37790;
var statearr_37793_37823 = state_37790__$1;
(statearr_37793_37823[(2)] = null);

(statearr_37793_37823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (4))){
var inst_37743 = (state_37790[(7)]);
var inst_37743__$1 = (state_37790[(2)]);
var state_37790__$1 = (function (){var statearr_37794 = state_37790;
(statearr_37794[(7)] = inst_37743__$1);

return statearr_37794;
})();
if(cljs.core.truth_(inst_37743__$1)){
var statearr_37795_37824 = state_37790__$1;
(statearr_37795_37824[(1)] = (5));

} else {
var statearr_37796_37825 = state_37790__$1;
(statearr_37796_37825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (15))){
var inst_37750 = (state_37790[(8)]);
var inst_37765 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37750);
var inst_37766 = cljs.core.first.call(null,inst_37765);
var inst_37767 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37766);
var inst_37768 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37767)].join('');
var inst_37769 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37768);
var state_37790__$1 = state_37790;
var statearr_37797_37826 = state_37790__$1;
(statearr_37797_37826[(2)] = inst_37769);

(statearr_37797_37826[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (13))){
var inst_37774 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37798_37827 = state_37790__$1;
(statearr_37798_37827[(2)] = inst_37774);

(statearr_37798_37827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (6))){
var state_37790__$1 = state_37790;
var statearr_37799_37828 = state_37790__$1;
(statearr_37799_37828[(2)] = null);

(statearr_37799_37828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (17))){
var inst_37772 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37800_37829 = state_37790__$1;
(statearr_37800_37829[(2)] = inst_37772);

(statearr_37800_37829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (3))){
var inst_37788 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37790__$1,inst_37788);
} else {
if((state_val_37791 === (12))){
var inst_37749 = (state_37790[(9)]);
var inst_37763 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37749,opts);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37763)){
var statearr_37801_37830 = state_37790__$1;
(statearr_37801_37830[(1)] = (15));

} else {
var statearr_37802_37831 = state_37790__$1;
(statearr_37802_37831[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (2))){
var state_37790__$1 = state_37790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37790__$1,(4),ch);
} else {
if((state_val_37791 === (11))){
var inst_37750 = (state_37790[(8)]);
var inst_37755 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37756 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37750);
var inst_37757 = cljs.core.async.timeout.call(null,(1000));
var inst_37758 = [inst_37756,inst_37757];
var inst_37759 = (new cljs.core.PersistentVector(null,2,(5),inst_37755,inst_37758,null));
var state_37790__$1 = state_37790;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37790__$1,(14),inst_37759);
} else {
if((state_val_37791 === (9))){
var inst_37750 = (state_37790[(8)]);
var inst_37776 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37777 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37750);
var inst_37778 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37777);
var inst_37779 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37778)].join('');
var inst_37780 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37779);
var state_37790__$1 = (function (){var statearr_37803 = state_37790;
(statearr_37803[(10)] = inst_37776);

return statearr_37803;
})();
var statearr_37804_37832 = state_37790__$1;
(statearr_37804_37832[(2)] = inst_37780);

(statearr_37804_37832[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (5))){
var inst_37743 = (state_37790[(7)]);
var inst_37745 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37746 = (new cljs.core.PersistentArrayMap(null,2,inst_37745,null));
var inst_37747 = (new cljs.core.PersistentHashSet(null,inst_37746,null));
var inst_37748 = figwheel.client.focus_msgs.call(null,inst_37747,inst_37743);
var inst_37749 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37748);
var inst_37750 = cljs.core.first.call(null,inst_37748);
var inst_37751 = figwheel.client.autoload_QMARK_.call(null);
var state_37790__$1 = (function (){var statearr_37805 = state_37790;
(statearr_37805[(8)] = inst_37750);

(statearr_37805[(9)] = inst_37749);

return statearr_37805;
})();
if(cljs.core.truth_(inst_37751)){
var statearr_37806_37833 = state_37790__$1;
(statearr_37806_37833[(1)] = (8));

} else {
var statearr_37807_37834 = state_37790__$1;
(statearr_37807_37834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (14))){
var inst_37761 = (state_37790[(2)]);
var state_37790__$1 = state_37790;
var statearr_37808_37835 = state_37790__$1;
(statearr_37808_37835[(2)] = inst_37761);

(statearr_37808_37835[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (16))){
var state_37790__$1 = state_37790;
var statearr_37809_37836 = state_37790__$1;
(statearr_37809_37836[(2)] = null);

(statearr_37809_37836[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (10))){
var inst_37782 = (state_37790[(2)]);
var state_37790__$1 = (function (){var statearr_37810 = state_37790;
(statearr_37810[(11)] = inst_37782);

return statearr_37810;
})();
var statearr_37811_37837 = state_37790__$1;
(statearr_37811_37837[(2)] = null);

(statearr_37811_37837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37791 === (8))){
var inst_37749 = (state_37790[(9)]);
var inst_37753 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37749,opts);
var state_37790__$1 = state_37790;
if(cljs.core.truth_(inst_37753)){
var statearr_37812_37838 = state_37790__$1;
(statearr_37812_37838[(1)] = (11));

} else {
var statearr_37813_37839 = state_37790__$1;
(statearr_37813_37839[(1)] = (12));

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
});})(c__29750__auto___37821,ch))
;
return ((function (switch__29638__auto__,c__29750__auto___37821,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____0 = (function (){
var statearr_37817 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37817[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__);

(statearr_37817[(1)] = (1));

return statearr_37817;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____1 = (function (state_37790){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_37790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e37818){if((e37818 instanceof Object)){
var ex__29642__auto__ = e37818;
var statearr_37819_37840 = state_37790;
(statearr_37819_37840[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37841 = state_37790;
state_37790 = G__37841;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__ = function(state_37790){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____1.call(this,state_37790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29639__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___37821,ch))
})();
var state__29752__auto__ = (function (){var statearr_37820 = f__29751__auto__.call(null);
(statearr_37820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___37821);

return statearr_37820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___37821,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37842_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37842_SHARP_));
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
var base_path_37845 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37845){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37844){if((e37844 instanceof Error)){
var e = e37844;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37845], null));
} else {
var e = e37844;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37845))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37846){
var map__37855 = p__37846;
var map__37855__$1 = ((((!((map__37855 == null)))?((((map__37855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37855):map__37855);
var opts = map__37855__$1;
var build_id = cljs.core.get.call(null,map__37855__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37855,map__37855__$1,opts,build_id){
return (function (p__37857){
var vec__37858 = p__37857;
var seq__37859 = cljs.core.seq.call(null,vec__37858);
var first__37860 = cljs.core.first.call(null,seq__37859);
var seq__37859__$1 = cljs.core.next.call(null,seq__37859);
var map__37861 = first__37860;
var map__37861__$1 = ((((!((map__37861 == null)))?((((map__37861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37861):map__37861);
var msg = map__37861__$1;
var msg_name = cljs.core.get.call(null,map__37861__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37859__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37858,seq__37859,first__37860,seq__37859__$1,map__37861,map__37861__$1,msg,msg_name,_,map__37855,map__37855__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37858,seq__37859,first__37860,seq__37859__$1,map__37861,map__37861__$1,msg,msg_name,_,map__37855,map__37855__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37855,map__37855__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37869){
var vec__37870 = p__37869;
var seq__37871 = cljs.core.seq.call(null,vec__37870);
var first__37872 = cljs.core.first.call(null,seq__37871);
var seq__37871__$1 = cljs.core.next.call(null,seq__37871);
var map__37873 = first__37872;
var map__37873__$1 = ((((!((map__37873 == null)))?((((map__37873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37873.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37873):map__37873);
var msg = map__37873__$1;
var msg_name = cljs.core.get.call(null,map__37873__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37871__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37875){
var map__37887 = p__37875;
var map__37887__$1 = ((((!((map__37887 == null)))?((((map__37887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37887):map__37887);
var on_compile_warning = cljs.core.get.call(null,map__37887__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37887__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37887,map__37887__$1,on_compile_warning,on_compile_fail){
return (function (p__37889){
var vec__37890 = p__37889;
var seq__37891 = cljs.core.seq.call(null,vec__37890);
var first__37892 = cljs.core.first.call(null,seq__37891);
var seq__37891__$1 = cljs.core.next.call(null,seq__37891);
var map__37893 = first__37892;
var map__37893__$1 = ((((!((map__37893 == null)))?((((map__37893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37893):map__37893);
var msg = map__37893__$1;
var msg_name = cljs.core.get.call(null,map__37893__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37891__$1;
var pred__37895 = cljs.core._EQ_;
var expr__37896 = msg_name;
if(cljs.core.truth_(pred__37895.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37896))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37895.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37896))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37887,map__37887__$1,on_compile_warning,on_compile_fail))
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
return (function (state_38124){
var state_val_38125 = (state_38124[(1)]);
if((state_val_38125 === (7))){
var inst_38044 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38044)){
var statearr_38126_38176 = state_38124__$1;
(statearr_38126_38176[(1)] = (8));

} else {
var statearr_38127_38177 = state_38124__$1;
(statearr_38127_38177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (20))){
var inst_38118 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38128_38178 = state_38124__$1;
(statearr_38128_38178[(2)] = inst_38118);

(statearr_38128_38178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (27))){
var inst_38114 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38129_38179 = state_38124__$1;
(statearr_38129_38179[(2)] = inst_38114);

(statearr_38129_38179[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (1))){
var inst_38037 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38037)){
var statearr_38130_38180 = state_38124__$1;
(statearr_38130_38180[(1)] = (2));

} else {
var statearr_38131_38181 = state_38124__$1;
(statearr_38131_38181[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (24))){
var inst_38116 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38132_38182 = state_38124__$1;
(statearr_38132_38182[(2)] = inst_38116);

(statearr_38132_38182[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (4))){
var inst_38122 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38124__$1,inst_38122);
} else {
if((state_val_38125 === (15))){
var inst_38120 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38133_38183 = state_38124__$1;
(statearr_38133_38183[(2)] = inst_38120);

(statearr_38133_38183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (21))){
var inst_38073 = (state_38124[(2)]);
var inst_38074 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38075 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38074);
var state_38124__$1 = (function (){var statearr_38134 = state_38124;
(statearr_38134[(7)] = inst_38073);

return statearr_38134;
})();
var statearr_38135_38184 = state_38124__$1;
(statearr_38135_38184[(2)] = inst_38075);

(statearr_38135_38184[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (31))){
var inst_38103 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38103)){
var statearr_38136_38185 = state_38124__$1;
(statearr_38136_38185[(1)] = (34));

} else {
var statearr_38137_38186 = state_38124__$1;
(statearr_38137_38186[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (32))){
var inst_38112 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38138_38187 = state_38124__$1;
(statearr_38138_38187[(2)] = inst_38112);

(statearr_38138_38187[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (33))){
var inst_38099 = (state_38124[(2)]);
var inst_38100 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38101 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38100);
var state_38124__$1 = (function (){var statearr_38139 = state_38124;
(statearr_38139[(8)] = inst_38099);

return statearr_38139;
})();
var statearr_38140_38188 = state_38124__$1;
(statearr_38140_38188[(2)] = inst_38101);

(statearr_38140_38188[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (13))){
var inst_38058 = figwheel.client.heads_up.clear.call(null);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(16),inst_38058);
} else {
if((state_val_38125 === (22))){
var inst_38079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38080 = figwheel.client.heads_up.append_warning_message.call(null,inst_38079);
var state_38124__$1 = state_38124;
var statearr_38141_38189 = state_38124__$1;
(statearr_38141_38189[(2)] = inst_38080);

(statearr_38141_38189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (36))){
var inst_38110 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38142_38190 = state_38124__$1;
(statearr_38142_38190[(2)] = inst_38110);

(statearr_38142_38190[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (29))){
var inst_38090 = (state_38124[(2)]);
var inst_38091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38092 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38091);
var state_38124__$1 = (function (){var statearr_38143 = state_38124;
(statearr_38143[(9)] = inst_38090);

return statearr_38143;
})();
var statearr_38144_38191 = state_38124__$1;
(statearr_38144_38191[(2)] = inst_38092);

(statearr_38144_38191[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (6))){
var inst_38039 = (state_38124[(10)]);
var state_38124__$1 = state_38124;
var statearr_38145_38192 = state_38124__$1;
(statearr_38145_38192[(2)] = inst_38039);

(statearr_38145_38192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (28))){
var inst_38086 = (state_38124[(2)]);
var inst_38087 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38088 = figwheel.client.heads_up.display_warning.call(null,inst_38087);
var state_38124__$1 = (function (){var statearr_38146 = state_38124;
(statearr_38146[(11)] = inst_38086);

return statearr_38146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(29),inst_38088);
} else {
if((state_val_38125 === (25))){
var inst_38084 = figwheel.client.heads_up.clear.call(null);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(28),inst_38084);
} else {
if((state_val_38125 === (34))){
var inst_38105 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(37),inst_38105);
} else {
if((state_val_38125 === (17))){
var inst_38064 = (state_38124[(2)]);
var inst_38065 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38066 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38065);
var state_38124__$1 = (function (){var statearr_38147 = state_38124;
(statearr_38147[(12)] = inst_38064);

return statearr_38147;
})();
var statearr_38148_38193 = state_38124__$1;
(statearr_38148_38193[(2)] = inst_38066);

(statearr_38148_38193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (3))){
var inst_38056 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38056)){
var statearr_38149_38194 = state_38124__$1;
(statearr_38149_38194[(1)] = (13));

} else {
var statearr_38150_38195 = state_38124__$1;
(statearr_38150_38195[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (12))){
var inst_38052 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38151_38196 = state_38124__$1;
(statearr_38151_38196[(2)] = inst_38052);

(statearr_38151_38196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (2))){
var inst_38039 = (state_38124[(10)]);
var inst_38039__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38124__$1 = (function (){var statearr_38152 = state_38124;
(statearr_38152[(10)] = inst_38039__$1);

return statearr_38152;
})();
if(cljs.core.truth_(inst_38039__$1)){
var statearr_38153_38197 = state_38124__$1;
(statearr_38153_38197[(1)] = (5));

} else {
var statearr_38154_38198 = state_38124__$1;
(statearr_38154_38198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (23))){
var inst_38082 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38082)){
var statearr_38155_38199 = state_38124__$1;
(statearr_38155_38199[(1)] = (25));

} else {
var statearr_38156_38200 = state_38124__$1;
(statearr_38156_38200[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (35))){
var state_38124__$1 = state_38124;
var statearr_38157_38201 = state_38124__$1;
(statearr_38157_38201[(2)] = null);

(statearr_38157_38201[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (19))){
var inst_38077 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38077)){
var statearr_38158_38202 = state_38124__$1;
(statearr_38158_38202[(1)] = (22));

} else {
var statearr_38159_38203 = state_38124__$1;
(statearr_38159_38203[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (11))){
var inst_38048 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38160_38204 = state_38124__$1;
(statearr_38160_38204[(2)] = inst_38048);

(statearr_38160_38204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (9))){
var inst_38050 = figwheel.client.heads_up.clear.call(null);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(12),inst_38050);
} else {
if((state_val_38125 === (5))){
var inst_38041 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38124__$1 = state_38124;
var statearr_38161_38205 = state_38124__$1;
(statearr_38161_38205[(2)] = inst_38041);

(statearr_38161_38205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (14))){
var inst_38068 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38068)){
var statearr_38162_38206 = state_38124__$1;
(statearr_38162_38206[(1)] = (18));

} else {
var statearr_38163_38207 = state_38124__$1;
(statearr_38163_38207[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (26))){
var inst_38094 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38124__$1 = state_38124;
if(cljs.core.truth_(inst_38094)){
var statearr_38164_38208 = state_38124__$1;
(statearr_38164_38208[(1)] = (30));

} else {
var statearr_38165_38209 = state_38124__$1;
(statearr_38165_38209[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (16))){
var inst_38060 = (state_38124[(2)]);
var inst_38061 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38062 = figwheel.client.heads_up.display_exception.call(null,inst_38061);
var state_38124__$1 = (function (){var statearr_38166 = state_38124;
(statearr_38166[(13)] = inst_38060);

return statearr_38166;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(17),inst_38062);
} else {
if((state_val_38125 === (30))){
var inst_38096 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38097 = figwheel.client.heads_up.display_warning.call(null,inst_38096);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(33),inst_38097);
} else {
if((state_val_38125 === (10))){
var inst_38054 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38167_38210 = state_38124__$1;
(statearr_38167_38210[(2)] = inst_38054);

(statearr_38167_38210[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (18))){
var inst_38070 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38071 = figwheel.client.heads_up.display_exception.call(null,inst_38070);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(21),inst_38071);
} else {
if((state_val_38125 === (37))){
var inst_38107 = (state_38124[(2)]);
var state_38124__$1 = state_38124;
var statearr_38168_38211 = state_38124__$1;
(statearr_38168_38211[(2)] = inst_38107);

(statearr_38168_38211[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38125 === (8))){
var inst_38046 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38124__$1 = state_38124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38124__$1,(11),inst_38046);
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
var statearr_38172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38172[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__);

(statearr_38172[(1)] = (1));

return statearr_38172;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____1 = (function (state_38124){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_38124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e38173){if((e38173 instanceof Object)){
var ex__29642__auto__ = e38173;
var statearr_38174_38212 = state_38124;
(statearr_38174_38212[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38213 = state_38124;
state_38124 = G__38213;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__ = function(state_38124){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____1.call(this,state_38124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,msg_hist,msg_names,msg))
})();
var state__29752__auto__ = (function (){var statearr_38175 = f__29751__auto__.call(null);
(statearr_38175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_38175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,msg_hist,msg_names,msg))
);

return c__29750__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29750__auto___38276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___38276,ch){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___38276,ch){
return (function (state_38259){
var state_val_38260 = (state_38259[(1)]);
if((state_val_38260 === (1))){
var state_38259__$1 = state_38259;
var statearr_38261_38277 = state_38259__$1;
(statearr_38261_38277[(2)] = null);

(statearr_38261_38277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (2))){
var state_38259__$1 = state_38259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38259__$1,(4),ch);
} else {
if((state_val_38260 === (3))){
var inst_38257 = (state_38259[(2)]);
var state_38259__$1 = state_38259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38259__$1,inst_38257);
} else {
if((state_val_38260 === (4))){
var inst_38247 = (state_38259[(7)]);
var inst_38247__$1 = (state_38259[(2)]);
var state_38259__$1 = (function (){var statearr_38262 = state_38259;
(statearr_38262[(7)] = inst_38247__$1);

return statearr_38262;
})();
if(cljs.core.truth_(inst_38247__$1)){
var statearr_38263_38278 = state_38259__$1;
(statearr_38263_38278[(1)] = (5));

} else {
var statearr_38264_38279 = state_38259__$1;
(statearr_38264_38279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (5))){
var inst_38247 = (state_38259[(7)]);
var inst_38249 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38247);
var state_38259__$1 = state_38259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38259__$1,(8),inst_38249);
} else {
if((state_val_38260 === (6))){
var state_38259__$1 = state_38259;
var statearr_38265_38280 = state_38259__$1;
(statearr_38265_38280[(2)] = null);

(statearr_38265_38280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (7))){
var inst_38255 = (state_38259[(2)]);
var state_38259__$1 = state_38259;
var statearr_38266_38281 = state_38259__$1;
(statearr_38266_38281[(2)] = inst_38255);

(statearr_38266_38281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38260 === (8))){
var inst_38251 = (state_38259[(2)]);
var state_38259__$1 = (function (){var statearr_38267 = state_38259;
(statearr_38267[(8)] = inst_38251);

return statearr_38267;
})();
var statearr_38268_38282 = state_38259__$1;
(statearr_38268_38282[(2)] = null);

(statearr_38268_38282[(1)] = (2));


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
});})(c__29750__auto___38276,ch))
;
return ((function (switch__29638__auto__,c__29750__auto___38276,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29639__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29639__auto____0 = (function (){
var statearr_38272 = [null,null,null,null,null,null,null,null,null];
(statearr_38272[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29639__auto__);

(statearr_38272[(1)] = (1));

return statearr_38272;
});
var figwheel$client$heads_up_plugin_$_state_machine__29639__auto____1 = (function (state_38259){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_38259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e38273){if((e38273 instanceof Object)){
var ex__29642__auto__ = e38273;
var statearr_38274_38283 = state_38259;
(statearr_38274_38283[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38284 = state_38259;
state_38259 = G__38284;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29639__auto__ = function(state_38259){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29639__auto____1.call(this,state_38259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29639__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29639__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___38276,ch))
})();
var state__29752__auto__ = (function (){var statearr_38275 = f__29751__auto__.call(null);
(statearr_38275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___38276);

return statearr_38275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___38276,ch))
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
return (function (state_38305){
var state_val_38306 = (state_38305[(1)]);
if((state_val_38306 === (1))){
var inst_38300 = cljs.core.async.timeout.call(null,(3000));
var state_38305__$1 = state_38305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38305__$1,(2),inst_38300);
} else {
if((state_val_38306 === (2))){
var inst_38302 = (state_38305[(2)]);
var inst_38303 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38305__$1 = (function (){var statearr_38307 = state_38305;
(statearr_38307[(7)] = inst_38302);

return statearr_38307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38305__$1,inst_38303);
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
var statearr_38311 = [null,null,null,null,null,null,null,null];
(statearr_38311[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__);

(statearr_38311[(1)] = (1));

return statearr_38311;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____1 = (function (state_38305){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_38305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e38312){if((e38312 instanceof Object)){
var ex__29642__auto__ = e38312;
var statearr_38313_38315 = state_38305;
(statearr_38313_38315[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38316 = state_38305;
state_38305 = G__38316;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__ = function(state_38305){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____1.call(this,state_38305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29639__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_38314 = f__29751__auto__.call(null);
(statearr_38314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_38314;
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
return (function (state_38339){
var state_val_38340 = (state_38339[(1)]);
if((state_val_38340 === (1))){
var inst_38333 = cljs.core.async.timeout.call(null,(2000));
var state_38339__$1 = state_38339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38339__$1,(2),inst_38333);
} else {
if((state_val_38340 === (2))){
var inst_38335 = (state_38339[(2)]);
var inst_38336 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38337 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38336);
var state_38339__$1 = (function (){var statearr_38341 = state_38339;
(statearr_38341[(7)] = inst_38335);

return statearr_38341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38339__$1,inst_38337);
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
var statearr_38345 = [null,null,null,null,null,null,null,null];
(statearr_38345[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__);

(statearr_38345[(1)] = (1));

return statearr_38345;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____1 = (function (state_38339){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_38339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e38346){if((e38346 instanceof Object)){
var ex__29642__auto__ = e38346;
var statearr_38347_38349 = state_38339;
(statearr_38347_38349[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38350 = state_38339;
state_38339 = G__38350;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__ = function(state_38339){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____1.call(this,state_38339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29752__auto__ = (function (){var statearr_38348 = f__29751__auto__.call(null);
(statearr_38348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_38348;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38351){
var map__38355 = p__38351;
var map__38355__$1 = ((((!((map__38355 == null)))?((((map__38355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38355):map__38355);
var file = cljs.core.get.call(null,map__38355__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38355__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38355__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38357 = "";
var G__38357__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38357),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38357);
var G__38357__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38357__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38357__$1);
if(cljs.core.truth_((function (){var and__25321__auto__ = line;
if(cljs.core.truth_(and__25321__auto__)){
return column;
} else {
return and__25321__auto__;
}
})())){
return [cljs.core.str(G__38357__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38357__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38358){
var map__38365 = p__38358;
var map__38365__$1 = ((((!((map__38365 == null)))?((((map__38365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38365):map__38365);
var ed = map__38365__$1;
var formatted_exception = cljs.core.get.call(null,map__38365__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38365__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38365__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38367_38371 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38368_38372 = null;
var count__38369_38373 = (0);
var i__38370_38374 = (0);
while(true){
if((i__38370_38374 < count__38369_38373)){
var msg_38375 = cljs.core._nth.call(null,chunk__38368_38372,i__38370_38374);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38375);

var G__38376 = seq__38367_38371;
var G__38377 = chunk__38368_38372;
var G__38378 = count__38369_38373;
var G__38379 = (i__38370_38374 + (1));
seq__38367_38371 = G__38376;
chunk__38368_38372 = G__38377;
count__38369_38373 = G__38378;
i__38370_38374 = G__38379;
continue;
} else {
var temp__4657__auto___38380 = cljs.core.seq.call(null,seq__38367_38371);
if(temp__4657__auto___38380){
var seq__38367_38381__$1 = temp__4657__auto___38380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38367_38381__$1)){
var c__26147__auto___38382 = cljs.core.chunk_first.call(null,seq__38367_38381__$1);
var G__38383 = cljs.core.chunk_rest.call(null,seq__38367_38381__$1);
var G__38384 = c__26147__auto___38382;
var G__38385 = cljs.core.count.call(null,c__26147__auto___38382);
var G__38386 = (0);
seq__38367_38371 = G__38383;
chunk__38368_38372 = G__38384;
count__38369_38373 = G__38385;
i__38370_38374 = G__38386;
continue;
} else {
var msg_38387 = cljs.core.first.call(null,seq__38367_38381__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38387);

var G__38388 = cljs.core.next.call(null,seq__38367_38381__$1);
var G__38389 = null;
var G__38390 = (0);
var G__38391 = (0);
seq__38367_38371 = G__38388;
chunk__38368_38372 = G__38389;
count__38369_38373 = G__38390;
i__38370_38374 = G__38391;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38392){
var map__38395 = p__38392;
var map__38395__$1 = ((((!((map__38395 == null)))?((((map__38395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38395):map__38395);
var w = map__38395__$1;
var message = cljs.core.get.call(null,map__38395__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/app-out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/app-out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__38407 = cljs.core.seq.call(null,plugins);
var chunk__38408 = null;
var count__38409 = (0);
var i__38410 = (0);
while(true){
if((i__38410 < count__38409)){
var vec__38411 = cljs.core._nth.call(null,chunk__38408,i__38410);
var k = cljs.core.nth.call(null,vec__38411,(0),null);
var plugin = cljs.core.nth.call(null,vec__38411,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38417 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38407,chunk__38408,count__38409,i__38410,pl_38417,vec__38411,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38417.call(null,msg_hist);
});})(seq__38407,chunk__38408,count__38409,i__38410,pl_38417,vec__38411,k,plugin))
);
} else {
}

var G__38418 = seq__38407;
var G__38419 = chunk__38408;
var G__38420 = count__38409;
var G__38421 = (i__38410 + (1));
seq__38407 = G__38418;
chunk__38408 = G__38419;
count__38409 = G__38420;
i__38410 = G__38421;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38407);
if(temp__4657__auto__){
var seq__38407__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38407__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__38407__$1);
var G__38422 = cljs.core.chunk_rest.call(null,seq__38407__$1);
var G__38423 = c__26147__auto__;
var G__38424 = cljs.core.count.call(null,c__26147__auto__);
var G__38425 = (0);
seq__38407 = G__38422;
chunk__38408 = G__38423;
count__38409 = G__38424;
i__38410 = G__38425;
continue;
} else {
var vec__38414 = cljs.core.first.call(null,seq__38407__$1);
var k = cljs.core.nth.call(null,vec__38414,(0),null);
var plugin = cljs.core.nth.call(null,vec__38414,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38426 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38407,chunk__38408,count__38409,i__38410,pl_38426,vec__38414,k,plugin,seq__38407__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38426.call(null,msg_hist);
});})(seq__38407,chunk__38408,count__38409,i__38410,pl_38426,vec__38414,k,plugin,seq__38407__$1,temp__4657__auto__))
);
} else {
}

var G__38427 = cljs.core.next.call(null,seq__38407__$1);
var G__38428 = null;
var G__38429 = (0);
var G__38430 = (0);
seq__38407 = G__38427;
chunk__38408 = G__38428;
count__38409 = G__38429;
i__38410 = G__38430;
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
var args38431 = [];
var len__26441__auto___38438 = arguments.length;
var i__26442__auto___38439 = (0);
while(true){
if((i__26442__auto___38439 < len__26441__auto___38438)){
args38431.push((arguments[i__26442__auto___38439]));

var G__38440 = (i__26442__auto___38439 + (1));
i__26442__auto___38439 = G__38440;
continue;
} else {
}
break;
}

var G__38433 = args38431.length;
switch (G__38433) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38431.length)].join('')));

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

var seq__38434_38442 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38435_38443 = null;
var count__38436_38444 = (0);
var i__38437_38445 = (0);
while(true){
if((i__38437_38445 < count__38436_38444)){
var msg_38446 = cljs.core._nth.call(null,chunk__38435_38443,i__38437_38445);
figwheel.client.socket.handle_incoming_message.call(null,msg_38446);

var G__38447 = seq__38434_38442;
var G__38448 = chunk__38435_38443;
var G__38449 = count__38436_38444;
var G__38450 = (i__38437_38445 + (1));
seq__38434_38442 = G__38447;
chunk__38435_38443 = G__38448;
count__38436_38444 = G__38449;
i__38437_38445 = G__38450;
continue;
} else {
var temp__4657__auto___38451 = cljs.core.seq.call(null,seq__38434_38442);
if(temp__4657__auto___38451){
var seq__38434_38452__$1 = temp__4657__auto___38451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38434_38452__$1)){
var c__26147__auto___38453 = cljs.core.chunk_first.call(null,seq__38434_38452__$1);
var G__38454 = cljs.core.chunk_rest.call(null,seq__38434_38452__$1);
var G__38455 = c__26147__auto___38453;
var G__38456 = cljs.core.count.call(null,c__26147__auto___38453);
var G__38457 = (0);
seq__38434_38442 = G__38454;
chunk__38435_38443 = G__38455;
count__38436_38444 = G__38456;
i__38437_38445 = G__38457;
continue;
} else {
var msg_38458 = cljs.core.first.call(null,seq__38434_38452__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38458);

var G__38459 = cljs.core.next.call(null,seq__38434_38452__$1);
var G__38460 = null;
var G__38461 = (0);
var G__38462 = (0);
seq__38434_38442 = G__38459;
chunk__38435_38443 = G__38460;
count__38436_38444 = G__38461;
i__38437_38445 = G__38462;
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
var len__26441__auto___38467 = arguments.length;
var i__26442__auto___38468 = (0);
while(true){
if((i__26442__auto___38468 < len__26441__auto___38467)){
args__26448__auto__.push((arguments[i__26442__auto___38468]));

var G__38469 = (i__26442__auto___38468 + (1));
i__26442__auto___38468 = G__38469;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38464){
var map__38465 = p__38464;
var map__38465__$1 = ((((!((map__38465 == null)))?((((map__38465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38465):map__38465);
var opts = map__38465__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38463){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38463));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38471){if((e38471 instanceof Error)){
var e = e38471;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38471;

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
return (function (p__38475){
var map__38476 = p__38475;
var map__38476__$1 = ((((!((map__38476 == null)))?((((map__38476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38476):map__38476);
var msg_name = cljs.core.get.call(null,map__38476__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1489150134618