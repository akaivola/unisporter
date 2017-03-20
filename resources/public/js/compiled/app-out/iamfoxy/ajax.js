// Compiled by ClojureScript 1.9.293 {}
goog.provide('iamfoxy.ajax');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('iamfoxy.config');
goog.require('taoensso.timbre');
iamfoxy.ajax.token = cljs.core.atom.call(null,null);
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http","http",382524695),(function (p__42723){
var map__42724 = p__42723;
var map__42724__$1 = ((((!((map__42724 == null)))?((((map__42724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42724):map__42724);
var url = cljs.core.get.call(null,map__42724__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__42724__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var json_params = cljs.core.get.call(null,map__42724__$1,new cljs.core.Keyword(null,"json-params","json-params",-1112693596));
var form_params = cljs.core.get.call(null,map__42724__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var handler = cljs.core.get.call(null,map__42724__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__42724__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,map__42724,map__42724__$1,url,method,json_params,form_params,handler,error_handler){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,map__42724,map__42724__$1,url,method,json_params,form_params,handler,error_handler){
return (function (state_42801){
var state_val_42802 = (state_42801[(1)]);
if((state_val_42802 === (7))){
var inst_42740 = (state_42801[(7)]);
var inst_42740__$1 = (state_42801[(2)]);
var state_42801__$1 = (function (){var statearr_42803 = state_42801;
(statearr_42803[(7)] = inst_42740__$1);

return statearr_42803;
})();
if(cljs.core.truth_(inst_42740__$1)){
var statearr_42804_42848 = state_42801__$1;
(statearr_42804_42848[(1)] = (8));

} else {
var statearr_42805_42849 = state_42801__$1;
(statearr_42805_42849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (20))){
var inst_42797 = (state_42801[(2)]);
var state_42801__$1 = state_42801;
var statearr_42806_42850 = state_42801__$1;
(statearr_42806_42850[(2)] = inst_42797);

(statearr_42806_42850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (1))){
var state_42801__$1 = state_42801;
var G__42807_42851 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__42807_42851) {
case "get":
var statearr_42808_42853 = state_42801__$1;
(statearr_42808_42853[(1)] = (3));


break;
case "post":
var statearr_42809_42854 = state_42801__$1;
(statearr_42809_42854[(1)] = (4));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (24))){
var inst_42767 = (state_42801[(8)]);
var state_42801__$1 = state_42801;
var statearr_42810_42855 = state_42801__$1;
(statearr_42810_42855[(2)] = inst_42767);

(statearr_42810_42855[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (4))){
var state_42801__$1 = state_42801;
var statearr_42811_42856 = state_42801__$1;
(statearr_42811_42856[(2)] = cljs_http.client.post);

(statearr_42811_42856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (15))){
var inst_42771 = error_handler.call(null);
var state_42801__$1 = state_42801;
var statearr_42812_42857 = state_42801__$1;
(statearr_42812_42857[(2)] = inst_42771);

(statearr_42812_42857[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (21))){
var inst_42778 = (state_42801[(9)]);
var inst_42785 = error_handler.call(null,inst_42778);
var state_42801__$1 = state_42801;
var statearr_42813_42858 = state_42801__$1;
(statearr_42813_42858[(2)] = inst_42785);

(statearr_42813_42858[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (13))){
var inst_42749 = (state_42801[(2)]);
var state_42801__$1 = state_42801;
var statearr_42814_42859 = state_42801__$1;
(statearr_42814_42859[(2)] = inst_42749);

(statearr_42814_42859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (22))){
var inst_42778 = (state_42801[(9)]);
var inst_42787 = handler.call(null,inst_42778);
var state_42801__$1 = state_42801;
var statearr_42815_42860 = state_42801__$1;
(statearr_42815_42860[(2)] = inst_42787);

(statearr_42815_42860[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (6))){
var state_42801__$1 = state_42801;
var statearr_42816_42861 = state_42801__$1;
(statearr_42816_42861[(2)] = null);

(statearr_42816_42861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (25))){
var state_42801__$1 = state_42801;
var statearr_42817_42862 = state_42801__$1;
(statearr_42817_42862[(2)] = null);

(statearr_42817_42862[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (17))){
var inst_42799 = (state_42801[(2)]);
var state_42801__$1 = state_42801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42801__$1,inst_42799);
} else {
if((state_val_42802 === (3))){
var state_42801__$1 = state_42801;
var statearr_42818_42863 = state_42801__$1;
(statearr_42818_42863[(2)] = cljs_http.client.get);

(statearr_42818_42863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (12))){
var state_42801__$1 = state_42801;
var statearr_42819_42864 = state_42801__$1;
(statearr_42819_42864[(2)] = null);

(statearr_42819_42864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (2))){
var inst_42729 = (state_42801[(2)]);
var inst_42730 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)];
var inst_42731 = cljs.core.deref.call(null,iamfoxy.ajax.token);
var inst_42732 = [false,inst_42731];
var inst_42733 = cljs.core.PersistentHashMap.fromArrays(inst_42730,inst_42732);
var state_42801__$1 = (function (){var statearr_42820 = state_42801;
(statearr_42820[(10)] = inst_42733);

(statearr_42820[(11)] = inst_42729);

return statearr_42820;
})();
if(cljs.core.truth_(json_params)){
var statearr_42821_42865 = state_42801__$1;
(statearr_42821_42865[(1)] = (5));

} else {
var statearr_42822_42866 = state_42801__$1;
(statearr_42822_42866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (23))){
var inst_42789 = (state_42801[(2)]);
var state_42801__$1 = state_42801;
var statearr_42823_42867 = state_42801__$1;
(statearr_42823_42867[(2)] = inst_42789);

(statearr_42823_42867[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (19))){
var inst_42768 = (state_42801[(12)]);
var inst_42791 = cljs.core._EQ_.call(null,inst_42768,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_42801__$1 = state_42801;
if(inst_42791){
var statearr_42824_42868 = state_42801__$1;
(statearr_42824_42868[(1)] = (24));

} else {
var statearr_42825_42869 = state_42801__$1;
(statearr_42825_42869[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (11))){
var inst_42744 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_42745 = [form_params];
var inst_42746 = cljs.core.PersistentHashMap.fromArrays(inst_42744,inst_42745);
var state_42801__$1 = state_42801;
var statearr_42826_42870 = state_42801__$1;
(statearr_42826_42870[(2)] = inst_42746);

(statearr_42826_42870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (9))){
var state_42801__$1 = state_42801;
if(cljs.core.truth_(form_params)){
var statearr_42827_42871 = state_42801__$1;
(statearr_42827_42871[(1)] = (11));

} else {
var statearr_42828_42872 = state_42801__$1;
(statearr_42828_42872[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (5))){
var inst_42735 = [new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_42736 = [json_params];
var inst_42737 = cljs.core.PersistentHashMap.fromArrays(inst_42735,inst_42736);
var state_42801__$1 = state_42801;
var statearr_42829_42873 = state_42801__$1;
(statearr_42829_42873[(2)] = inst_42737);

(statearr_42829_42873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (14))){
var inst_42768 = (state_42801[(12)]);
var inst_42761 = (state_42801[(13)]);
var inst_42766 = (state_42801[(14)]);
var inst_42766__$1 = (state_42801[(2)]);
var inst_42767 = cljs.core.nth.call(null,inst_42766__$1,(0),null);
var inst_42768__$1 = cljs.core.nth.call(null,inst_42766__$1,(1),null);
var inst_42769 = cljs.core._EQ_.call(null,inst_42768__$1,inst_42761);
var state_42801__$1 = (function (){var statearr_42830 = state_42801;
(statearr_42830[(12)] = inst_42768__$1);

(statearr_42830[(8)] = inst_42767);

(statearr_42830[(14)] = inst_42766__$1);

return statearr_42830;
})();
if(inst_42769){
var statearr_42831_42874 = state_42801__$1;
(statearr_42831_42874[(1)] = (15));

} else {
var statearr_42832_42875 = state_42801__$1;
(statearr_42832_42875[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (26))){
var inst_42795 = (state_42801[(2)]);
var state_42801__$1 = state_42801;
var statearr_42833_42876 = state_42801__$1;
(statearr_42833_42876[(2)] = inst_42795);

(statearr_42833_42876[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (16))){
var inst_42768 = (state_42801[(12)]);
var inst_42753 = (state_42801[(15)]);
var inst_42773 = cljs.core._EQ_.call(null,inst_42768,inst_42753);
var state_42801__$1 = state_42801;
if(inst_42773){
var statearr_42834_42877 = state_42801__$1;
(statearr_42834_42877[(1)] = (18));

} else {
var statearr_42835_42878 = state_42801__$1;
(statearr_42835_42878[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (10))){
var inst_42753 = (state_42801[(15)]);
var inst_42733 = (state_42801[(10)]);
var inst_42729 = (state_42801[(11)]);
var inst_42761 = (state_42801[(13)]);
var inst_42751 = (state_42801[(2)]);
var inst_42752 = cljs.core.merge.call(null,inst_42733,inst_42751);
var inst_42753__$1 = inst_42729.call(null,url,inst_42752);
var inst_42761__$1 = cljs.core.async.timeout.call(null,(5000));
var inst_42762 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42763 = [inst_42761__$1,inst_42753__$1];
var inst_42764 = (new cljs.core.PersistentVector(null,2,(5),inst_42762,inst_42763,null));
var state_42801__$1 = (function (){var statearr_42836 = state_42801;
(statearr_42836[(15)] = inst_42753__$1);

(statearr_42836[(13)] = inst_42761__$1);

return statearr_42836;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42801__$1,(14),inst_42764);
} else {
if((state_val_42802 === (18))){
var inst_42768 = (state_42801[(12)]);
var inst_42753 = (state_42801[(15)]);
var inst_42767 = (state_42801[(8)]);
var inst_42729 = (state_42801[(11)]);
var inst_42761 = (state_42801[(13)]);
var inst_42778 = (state_42801[(9)]);
var inst_42766 = (state_42801[(14)]);
var inst_42778__$1 = cljs.core.nth.call(null,inst_42766,(0),null);
var inst_42779 = (function (){var response = inst_42778__$1;
var val__29759__auto__ = inst_42767;
var request = inst_42753;
var G__42754 = inst_42761;
var ch42756 = inst_42768;
var vec__42775 = inst_42766;
var G__42755 = inst_42753;
var ret42757 = inst_42766;
var vec__42758 = inst_42766;
var f = inst_42729;
return ((function (response,val__29759__auto__,request,G__42754,ch42756,vec__42775,G__42755,ret42757,vec__42758,f,inst_42768,inst_42753,inst_42767,inst_42729,inst_42761,inst_42778,inst_42766,inst_42778__$1,state_val_42802,c__29750__auto__,map__42724,map__42724__$1,url,method,json_params,form_params,handler,error_handler){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null);
});
;})(response,val__29759__auto__,request,G__42754,ch42756,vec__42775,G__42755,ret42757,vec__42758,f,inst_42768,inst_42753,inst_42767,inst_42729,inst_42761,inst_42778,inst_42766,inst_42778__$1,state_val_42802,c__29750__auto__,map__42724,map__42724__$1,url,method,json_params,form_params,handler,error_handler))
})();
var inst_42780 = (new cljs.core.Delay(inst_42779,null));
var inst_42781 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"iamfoxy.ajax","/private/var/folders/nj/qg17thm14mxd3k23sgm4vvpm0000gn/T/form-init7952740670408012888.clj",31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_42780,null,956663259);
var inst_42782 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_42778__$1);
var inst_42783 = ((400) <= inst_42782);
var state_42801__$1 = (function (){var statearr_42837 = state_42801;
(statearr_42837[(16)] = inst_42781);

(statearr_42837[(9)] = inst_42778__$1);

return statearr_42837;
})();
if(cljs.core.truth_(inst_42783)){
var statearr_42838_42879 = state_42801__$1;
(statearr_42838_42879[(1)] = (21));

} else {
var statearr_42839_42880 = state_42801__$1;
(statearr_42839_42880[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42802 === (8))){
var inst_42740 = (state_42801[(7)]);
var state_42801__$1 = state_42801;
var statearr_42840_42881 = state_42801__$1;
(statearr_42840_42881[(2)] = inst_42740);

(statearr_42840_42881[(1)] = (10));


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
});})(c__29750__auto__,map__42724,map__42724__$1,url,method,json_params,form_params,handler,error_handler))
;
return ((function (switch__29638__auto__,c__29750__auto__,map__42724,map__42724__$1,url,method,json_params,form_params,handler,error_handler){
return (function() {
var iamfoxy$ajax$state_machine__29639__auto__ = null;
var iamfoxy$ajax$state_machine__29639__auto____0 = (function (){
var statearr_42844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42844[(0)] = iamfoxy$ajax$state_machine__29639__auto__);

(statearr_42844[(1)] = (1));

return statearr_42844;
});
var iamfoxy$ajax$state_machine__29639__auto____1 = (function (state_42801){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_42801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e42845){if((e42845 instanceof Object)){
var ex__29642__auto__ = e42845;
var statearr_42846_42882 = state_42801;
(statearr_42846_42882[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42883 = state_42801;
state_42801 = G__42883;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
iamfoxy$ajax$state_machine__29639__auto__ = function(state_42801){
switch(arguments.length){
case 0:
return iamfoxy$ajax$state_machine__29639__auto____0.call(this);
case 1:
return iamfoxy$ajax$state_machine__29639__auto____1.call(this,state_42801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
iamfoxy$ajax$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = iamfoxy$ajax$state_machine__29639__auto____0;
iamfoxy$ajax$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = iamfoxy$ajax$state_machine__29639__auto____1;
return iamfoxy$ajax$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,map__42724,map__42724__$1,url,method,json_params,form_params,handler,error_handler))
})();
var state__29752__auto__ = (function (){var statearr_42847 = f__29751__auto__.call(null);
(statearr_42847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_42847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,map__42724,map__42724__$1,url,method,json_params,form_params,handler,error_handler))
);

return c__29750__auto__;
}));

//# sourceMappingURL=ajax.js.map?rel=1489150139621