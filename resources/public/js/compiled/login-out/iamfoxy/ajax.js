// Compiled by ClojureScript 1.9.293 {}
goog.provide('iamfoxy.ajax');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('iamfoxy.config');
goog.require('taoensso.timbre');
iamfoxy.ajax.token = cljs.core.atom.call(null,null);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http","http",382524695),(function (p__54686){
var map__54687 = p__54686;
var map__54687__$1 = ((((!((map__54687 == null)))?((((map__54687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54687):map__54687);
var url = cljs.core.get.call(null,map__54687__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__54687__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var json_params = cljs.core.get.call(null,map__54687__$1,new cljs.core.Keyword(null,"json-params","json-params",-1112693596));
var form_params = cljs.core.get.call(null,map__54687__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var handler = cljs.core.get.call(null,map__54687__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__54687__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,map__54687,map__54687__$1,url,method,json_params,form_params,handler,error_handler){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,map__54687,map__54687__$1,url,method,json_params,form_params,handler,error_handler){
return (function (state_54777){
var state_val_54778 = (state_54777[(1)]);
if((state_val_54778 === (7))){
var inst_54710 = (state_54777[(7)]);
var inst_54710__$1 = (state_54777[(2)]);
var state_54777__$1 = (function (){var statearr_54779 = state_54777;
(statearr_54779[(7)] = inst_54710__$1);

return statearr_54779;
})();
if(cljs.core.truth_(inst_54710__$1)){
var statearr_54780_54850 = state_54777__$1;
(statearr_54780_54850[(1)] = (8));

} else {
var statearr_54781_54851 = state_54777__$1;
(statearr_54781_54851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (20))){
var inst_54773 = (state_54777[(2)]);
var state_54777__$1 = state_54777;
var statearr_54782_54852 = state_54777__$1;
(statearr_54782_54852[(2)] = inst_54773);

(statearr_54782_54852[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (1))){
var state_54777__$1 = state_54777;
var G__54783_54853 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__54783_54853) {
case "get":
var statearr_54784_54855 = state_54777__$1;
(statearr_54784_54855[(1)] = (3));


break;
case "post":
var statearr_54785_54856 = state_54777__$1;
(statearr_54785_54856[(1)] = (4));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (24))){
var inst_54738 = (state_54777[(8)]);
var state_54777__$1 = state_54777;
var statearr_54786_54857 = state_54777__$1;
(statearr_54786_54857[(2)] = inst_54738);

(statearr_54786_54857[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (4))){
var state_54777__$1 = state_54777;
var statearr_54787_54858 = state_54777__$1;
(statearr_54787_54858[(2)] = cljs_http.client.post);

(statearr_54787_54858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (15))){
var inst_54743 = error_handler.call(null);
var state_54777__$1 = state_54777;
var statearr_54788_54859 = state_54777__$1;
(statearr_54788_54859[(2)] = inst_54743);

(statearr_54788_54859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (21))){
var inst_54750 = (state_54777[(9)]);
var inst_54761 = error_handler.call(null,inst_54750);
var state_54777__$1 = state_54777;
var statearr_54789_54860 = state_54777__$1;
(statearr_54789_54860[(2)] = inst_54761);

(statearr_54789_54860[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (13))){
var inst_54719 = (state_54777[(2)]);
var state_54777__$1 = state_54777;
var statearr_54790_54861 = state_54777__$1;
(statearr_54790_54861[(2)] = inst_54719);

(statearr_54790_54861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (22))){
var inst_54750 = (state_54777[(9)]);
var inst_54763 = handler.call(null,inst_54750);
var state_54777__$1 = state_54777;
var statearr_54791_54862 = state_54777__$1;
(statearr_54791_54862[(2)] = inst_54763);

(statearr_54791_54862[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (6))){
var state_54777__$1 = state_54777;
var statearr_54792_54863 = state_54777__$1;
(statearr_54792_54863[(2)] = null);

(statearr_54792_54863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (25))){
var state_54777__$1 = state_54777;
var statearr_54793_54864 = state_54777__$1;
(statearr_54793_54864[(2)] = null);

(statearr_54793_54864[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (17))){
var inst_54775 = (state_54777[(2)]);
var state_54777__$1 = state_54777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54777__$1,inst_54775);
} else {
if((state_val_54778 === (3))){
var state_54777__$1 = state_54777;
var statearr_54798_54865 = state_54777__$1;
(statearr_54798_54865[(2)] = cljs_http.client.get);

(statearr_54798_54865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (12))){
var state_54777__$1 = state_54777;
var statearr_54799_54866 = state_54777__$1;
(statearr_54799_54866[(2)] = null);

(statearr_54799_54866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (2))){
var inst_54695 = (state_54777[(2)]);
var inst_54696 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)];
var inst_54701 = cljs.core.deref.call(null,iamfoxy.ajax.token);
var inst_54702 = [false,inst_54701];
var inst_54703 = cljs.core.PersistentHashMap.fromArrays(inst_54696,inst_54702);
var state_54777__$1 = (function (){var statearr_54800 = state_54777;
(statearr_54800[(10)] = inst_54703);

(statearr_54800[(11)] = inst_54695);

return statearr_54800;
})();
if(cljs.core.truth_(json_params)){
var statearr_54801_54884 = state_54777__$1;
(statearr_54801_54884[(1)] = (5));

} else {
var statearr_54803_54885 = state_54777__$1;
(statearr_54803_54885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (23))){
var inst_54765 = (state_54777[(2)]);
var state_54777__$1 = state_54777;
var statearr_54804_54889 = state_54777__$1;
(statearr_54804_54889[(2)] = inst_54765);

(statearr_54804_54889[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (19))){
var inst_54739 = (state_54777[(12)]);
var inst_54767 = cljs.core._EQ_.call(null,inst_54739,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_54777__$1 = state_54777;
if(inst_54767){
var statearr_54805_54890 = state_54777__$1;
(statearr_54805_54890[(1)] = (24));

} else {
var statearr_54806_54891 = state_54777__$1;
(statearr_54806_54891[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (11))){
var inst_54714 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_54715 = [form_params];
var inst_54716 = cljs.core.PersistentHashMap.fromArrays(inst_54714,inst_54715);
var state_54777__$1 = state_54777;
var statearr_54811_54893 = state_54777__$1;
(statearr_54811_54893[(2)] = inst_54716);

(statearr_54811_54893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (9))){
var state_54777__$1 = state_54777;
if(cljs.core.truth_(form_params)){
var statearr_54812_54898 = state_54777__$1;
(statearr_54812_54898[(1)] = (11));

} else {
var statearr_54813_54899 = state_54777__$1;
(statearr_54813_54899[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (5))){
var inst_54705 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_54706 = [json_params];
var inst_54707 = cljs.core.PersistentHashMap.fromArrays(inst_54705,inst_54706);
var state_54777__$1 = state_54777;
var statearr_54814_54904 = state_54777__$1;
(statearr_54814_54904[(2)] = inst_54707);

(statearr_54814_54904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (14))){
var inst_54736 = (state_54777[(13)]);
var inst_54739 = (state_54777[(12)]);
var inst_54731 = (state_54777[(14)]);
var inst_54736__$1 = (state_54777[(2)]);
var inst_54738 = cljs.core.nth.call(null,inst_54736__$1,(0),null);
var inst_54739__$1 = cljs.core.nth.call(null,inst_54736__$1,(1),null);
var inst_54741 = cljs.core._EQ_.call(null,inst_54739__$1,inst_54731);
var state_54777__$1 = (function (){var statearr_54816 = state_54777;
(statearr_54816[(8)] = inst_54738);

(statearr_54816[(13)] = inst_54736__$1);

(statearr_54816[(12)] = inst_54739__$1);

return statearr_54816;
})();
if(inst_54741){
var statearr_54818_54906 = state_54777__$1;
(statearr_54818_54906[(1)] = (15));

} else {
var statearr_54819_54911 = state_54777__$1;
(statearr_54819_54911[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (26))){
var inst_54771 = (state_54777[(2)]);
var state_54777__$1 = state_54777;
var statearr_54821_54912 = state_54777__$1;
(statearr_54821_54912[(2)] = inst_54771);

(statearr_54821_54912[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (16))){
var inst_54739 = (state_54777[(12)]);
var inst_54723 = (state_54777[(15)]);
var inst_54745 = cljs.core._EQ_.call(null,inst_54739,inst_54723);
var state_54777__$1 = state_54777;
if(inst_54745){
var statearr_54826_54916 = state_54777__$1;
(statearr_54826_54916[(1)] = (18));

} else {
var statearr_54827_54917 = state_54777__$1;
(statearr_54827_54917[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (10))){
var inst_54703 = (state_54777[(10)]);
var inst_54695 = (state_54777[(11)]);
var inst_54731 = (state_54777[(14)]);
var inst_54723 = (state_54777[(15)]);
var inst_54721 = (state_54777[(2)]);
var inst_54722 = cljs.core.merge.call(null,inst_54703,inst_54721);
var inst_54723__$1 = inst_54695.call(null,url,inst_54722);
var inst_54731__$1 = cljs.core.async.timeout.call(null,(5000));
var inst_54732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54733 = [inst_54731__$1,inst_54723__$1];
var inst_54734 = (new cljs.core.PersistentVector(null,2,(5),inst_54732,inst_54733,null));
var state_54777__$1 = (function (){var statearr_54828 = state_54777;
(statearr_54828[(14)] = inst_54731__$1);

(statearr_54828[(15)] = inst_54723__$1);

return statearr_54828;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_54777__$1,(14),inst_54734);
} else {
if((state_val_54778 === (18))){
var inst_54738 = (state_54777[(8)]);
var inst_54736 = (state_54777[(13)]);
var inst_54695 = (state_54777[(11)]);
var inst_54739 = (state_54777[(12)]);
var inst_54731 = (state_54777[(14)]);
var inst_54723 = (state_54777[(15)]);
var inst_54750 = (state_54777[(9)]);
var inst_54750__$1 = cljs.core.nth.call(null,inst_54736,(0),null);
var inst_54751 = (function (){var ret54727 = inst_54736;
var response = inst_54750__$1;
var val__29759__auto__ = inst_54738;
var request = inst_54723;
var vec__54747 = inst_54736;
var vec__54728 = inst_54736;
var G__54724 = inst_54731;
var G__54725 = inst_54723;
var ch54726 = inst_54739;
var f = inst_54695;
return ((function (ret54727,response,val__29759__auto__,request,vec__54747,vec__54728,G__54724,G__54725,ch54726,f,inst_54738,inst_54736,inst_54695,inst_54739,inst_54731,inst_54723,inst_54750,inst_54750__$1,state_val_54778,c__29750__auto__,map__54687,map__54687__$1,url,method,json_params,form_params,handler,error_handler){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});
;})(ret54727,response,val__29759__auto__,request,vec__54747,vec__54728,G__54724,G__54725,ch54726,f,inst_54738,inst_54736,inst_54695,inst_54739,inst_54731,inst_54723,inst_54750,inst_54750__$1,state_val_54778,c__29750__auto__,map__54687,map__54687__$1,url,method,json_params,form_params,handler,error_handler))
})();
var inst_54752 = (new cljs.core.Delay(inst_54751,null));
var inst_54753 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"iamfoxy.ajax","/private/var/folders/nj/qg17thm14mxd3k23sgm4vvpm0000gn/T/form-init7952740670408012888.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54752,null,-274466643);
var inst_54754 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_54750__$1);
var inst_54755 = ((400) <= inst_54754);
var state_54777__$1 = (function (){var statearr_54830 = state_54777;
(statearr_54830[(16)] = inst_54753);

(statearr_54830[(9)] = inst_54750__$1);

return statearr_54830;
})();
if(cljs.core.truth_(inst_54755)){
var statearr_54835_54947 = state_54777__$1;
(statearr_54835_54947[(1)] = (21));

} else {
var statearr_54836_54948 = state_54777__$1;
(statearr_54836_54948[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54778 === (8))){
var inst_54710 = (state_54777[(7)]);
var state_54777__$1 = state_54777;
var statearr_54837_54950 = state_54777__$1;
(statearr_54837_54950[(2)] = inst_54710);

(statearr_54837_54950[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
});})(c__29750__auto__,map__54687,map__54687__$1,url,method,json_params,form_params,handler,error_handler))
;
return ((function (switch__29638__auto__,c__29750__auto__,map__54687,map__54687__$1,url,method,json_params,form_params,handler,error_handler){
return (function() {
var iamfoxy$ajax$state_machine__29639__auto__ = null;
var iamfoxy$ajax$state_machine__29639__auto____0 = (function (){
var statearr_54841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54841[(0)] = iamfoxy$ajax$state_machine__29639__auto__);

(statearr_54841[(1)] = (1));

return statearr_54841;
});
var iamfoxy$ajax$state_machine__29639__auto____1 = (function (state_54777){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_54777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e54843){if((e54843 instanceof Object)){
var ex__29642__auto__ = e54843;
var statearr_54845_54957 = state_54777;
(statearr_54845_54957[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54958 = state_54777;
state_54777 = G__54958;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
iamfoxy$ajax$state_machine__29639__auto__ = function(state_54777){
switch(arguments.length){
case 0:
return iamfoxy$ajax$state_machine__29639__auto____0.call(this);
case 1:
return iamfoxy$ajax$state_machine__29639__auto____1.call(this,state_54777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
iamfoxy$ajax$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = iamfoxy$ajax$state_machine__29639__auto____0;
iamfoxy$ajax$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = iamfoxy$ajax$state_machine__29639__auto____1;
return iamfoxy$ajax$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,map__54687,map__54687__$1,url,method,json_params,form_params,handler,error_handler))
})();
var state__29752__auto__ = (function (){var statearr_54847 = f__29751__auto__.call(null);
(statearr_54847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_54847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,map__54687,map__54687__$1,url,method,json_params,form_params,handler,error_handler))
);

return c__29750__auto__;
}));

//# sourceMappingURL=ajax.js.map?rel=1489150144594