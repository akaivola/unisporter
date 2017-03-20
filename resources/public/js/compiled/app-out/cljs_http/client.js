// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__25321__auto__ = v;
if(cljs.core.truth_(and__25321__auto__)){
return (v > (0));
} else {
return and__25321__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__38656_SHARP_,p2__38655_SHARP_){
var vec__38660 = clojure.string.split.call(null,p2__38655_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__38660,(0),null);
var v = cljs.core.nth.call(null,vec__38660,(1),null);
return cljs.core.assoc.call(null,p1__38656_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__38663_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__38663_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__38664){
var vec__38668 = p__38664;
var k = cljs.core.nth.call(null,vec__38668,(0),null);
var v = cljs.core.nth.call(null,vec__38668,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__38671_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__38671_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__25321__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__25321__auto__){
var and__25321__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__25321__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__25321__auto____$1;
}
} else {
return and__25321__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__38672_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38672_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38679 = arguments.length;
var i__26442__auto___38680 = (0);
while(true){
if((i__26442__auto___38680 < len__26441__auto___38679)){
args__26448__auto__.push((arguments[i__26442__auto___38680]));

var G__38681 = (i__26442__auto___38680 + (1));
i__26442__auto___38680 = G__38681;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38675){
var vec__38676 = p__38675;
var default_headers = cljs.core.nth.call(null,vec__38676,(0),null);
return ((function (vec__38676,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__25333__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__38676,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq38673){
var G__38674 = cljs.core.first.call(null,seq38673);
var seq38673__$1 = cljs.core.next.call(null,seq38673);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__38674,seq38673__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38688 = arguments.length;
var i__26442__auto___38689 = (0);
while(true){
if((i__26442__auto___38689 < len__26441__auto___38688)){
args__26448__auto__.push((arguments[i__26442__auto___38689]));

var G__38690 = (i__26442__auto___38689 + (1));
i__26442__auto___38689 = G__38690;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38684){
var vec__38685 = p__38684;
var accept = cljs.core.nth.call(null,vec__38685,(0),null);
return ((function (vec__38685,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__25333__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__38685,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq38682){
var G__38683 = cljs.core.first.call(null,seq38682);
var seq38682__$1 = cljs.core.next.call(null,seq38682);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__38683,seq38682__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38697 = arguments.length;
var i__26442__auto___38698 = (0);
while(true){
if((i__26442__auto___38698 < len__26441__auto___38697)){
args__26448__auto__.push((arguments[i__26442__auto___38698]));

var G__38699 = (i__26442__auto___38698 + (1));
i__26442__auto___38698 = G__38699;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38693){
var vec__38694 = p__38693;
var content_type = cljs.core.nth.call(null,vec__38694,(0),null);
return ((function (vec__38694,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__25333__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__38694,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq38691){
var G__38692 = cljs.core.first.call(null,seq38691);
var seq38691__$1 = cljs.core.next.call(null,seq38691);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__38692,seq38691__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__38702 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__38702__$1 = ((((!((map__38702 == null)))?((((map__38702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38702):map__38702);
var encoding = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__38708 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__38708__$1 = ((((!((map__38708 == null)))?((((map__38708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38708):map__38708);
var decoding = cljs.core.get.call(null,map__38708__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__38708__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__38708,map__38708__$1,decoding,decoding_opts){
return (function (p1__38704_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__38704_SHARP_,decoding,decoding_opts);
});})(map__38708,map__38708__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__38708,map__38708__$1,decoding,decoding_opts,transit_decode){
return (function (p1__38705_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38705_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__38708,map__38708__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__38710_SHARP_){
return cljs_http.client.decode_body.call(null,p1__38710_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__38714){
var map__38715 = p__38714;
var map__38715__$1 = ((((!((map__38715 == null)))?((((map__38715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38715):map__38715);
var req = map__38715__$1;
var query_params = cljs.core.get.call(null,map__38715__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__38720){
var map__38721 = p__38720;
var map__38721__$1 = ((((!((map__38721 == null)))?((((map__38721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38721):map__38721);
var request = map__38721__$1;
var form_params = cljs.core.get.call(null,map__38721__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__38721__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__38721__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__25321__auto__ = form_params;
if(cljs.core.truth_(and__25321__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__25321__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__38733_38743 = cljs.core.seq.call(null,params);
var chunk__38734_38744 = null;
var count__38735_38745 = (0);
var i__38736_38746 = (0);
while(true){
if((i__38736_38746 < count__38735_38745)){
var vec__38737_38747 = cljs.core._nth.call(null,chunk__38734_38744,i__38736_38746);
var k_38748 = cljs.core.nth.call(null,vec__38737_38747,(0),null);
var v_38749 = cljs.core.nth.call(null,vec__38737_38747,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_38749)){
form_data.append(cljs.core.name.call(null,k_38748),cljs.core.first.call(null,v_38749),cljs.core.second.call(null,v_38749));
} else {
form_data.append(cljs.core.name.call(null,k_38748),v_38749);
}

var G__38750 = seq__38733_38743;
var G__38751 = chunk__38734_38744;
var G__38752 = count__38735_38745;
var G__38753 = (i__38736_38746 + (1));
seq__38733_38743 = G__38750;
chunk__38734_38744 = G__38751;
count__38735_38745 = G__38752;
i__38736_38746 = G__38753;
continue;
} else {
var temp__4657__auto___38754 = cljs.core.seq.call(null,seq__38733_38743);
if(temp__4657__auto___38754){
var seq__38733_38755__$1 = temp__4657__auto___38754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38733_38755__$1)){
var c__26147__auto___38756 = cljs.core.chunk_first.call(null,seq__38733_38755__$1);
var G__38757 = cljs.core.chunk_rest.call(null,seq__38733_38755__$1);
var G__38758 = c__26147__auto___38756;
var G__38759 = cljs.core.count.call(null,c__26147__auto___38756);
var G__38760 = (0);
seq__38733_38743 = G__38757;
chunk__38734_38744 = G__38758;
count__38735_38745 = G__38759;
i__38736_38746 = G__38760;
continue;
} else {
var vec__38740_38761 = cljs.core.first.call(null,seq__38733_38755__$1);
var k_38762 = cljs.core.nth.call(null,vec__38740_38761,(0),null);
var v_38763 = cljs.core.nth.call(null,vec__38740_38761,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_38763)){
form_data.append(cljs.core.name.call(null,k_38762),cljs.core.first.call(null,v_38763),cljs.core.second.call(null,v_38763));
} else {
form_data.append(cljs.core.name.call(null,k_38762),v_38763);
}

var G__38764 = cljs.core.next.call(null,seq__38733_38755__$1);
var G__38765 = null;
var G__38766 = (0);
var G__38767 = (0);
seq__38733_38743 = G__38764;
chunk__38734_38744 = G__38765;
count__38735_38745 = G__38766;
i__38736_38746 = G__38767;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__38771){
var map__38772 = p__38771;
var map__38772__$1 = ((((!((map__38772 == null)))?((((map__38772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38772):map__38772);
var request = map__38772__$1;
var multipart_params = cljs.core.get.call(null,map__38772__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__38772__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__25321__auto__ = multipart_params;
if(cljs.core.truth_(and__25321__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__25321__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__38774_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__38774_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__38779){
var map__38780 = p__38779;
var map__38780__$1 = ((((!((map__38780 == null)))?((((map__38780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38780):map__38780);
var req = map__38780__$1;
var query_params = cljs.core.get.call(null,map__38780__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__38780,map__38780__$1,req,query_params){
return (function (p1__38775_SHARP_){
return cljs.core.merge.call(null,p1__38775_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__38780,map__38780__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38788 = arguments.length;
var i__26442__auto___38789 = (0);
while(true){
if((i__26442__auto___38789 < len__26441__auto___38788)){
args__26448__auto__.push((arguments[i__26442__auto___38789]));

var G__38790 = (i__26442__auto___38789 + (1));
i__26442__auto___38789 = G__38790;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__38784){
var vec__38785 = p__38784;
var credentials = cljs.core.nth.call(null,vec__38785,(0),null);
return ((function (vec__38785,credentials){
return (function (req){
var credentials__$1 = (function (){var or__25333__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__38785,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq38782){
var G__38783 = cljs.core.first.call(null,seq38782);
var seq38782__$1 = cljs.core.next.call(null,seq38782);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__38783,seq38782__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38797 = arguments.length;
var i__26442__auto___38798 = (0);
while(true){
if((i__26442__auto___38798 < len__26441__auto___38797)){
args__26448__auto__.push((arguments[i__26442__auto___38798]));

var G__38799 = (i__26442__auto___38798 + (1));
i__26442__auto___38798 = G__38799;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38793){
var vec__38794 = p__38793;
var req = cljs.core.nth.call(null,vec__38794,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq38791){
var G__38792 = cljs.core.first.call(null,seq38791);
var seq38791__$1 = cljs.core.next.call(null,seq38791);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__38792,seq38791__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38806 = arguments.length;
var i__26442__auto___38807 = (0);
while(true){
if((i__26442__auto___38807 < len__26441__auto___38806)){
args__26448__auto__.push((arguments[i__26442__auto___38807]));

var G__38808 = (i__26442__auto___38807 + (1));
i__26442__auto___38807 = G__38808;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38802){
var vec__38803 = p__38802;
var req = cljs.core.nth.call(null,vec__38803,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq38800){
var G__38801 = cljs.core.first.call(null,seq38800);
var seq38800__$1 = cljs.core.next.call(null,seq38800);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__38801,seq38800__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38815 = arguments.length;
var i__26442__auto___38816 = (0);
while(true){
if((i__26442__auto___38816 < len__26441__auto___38815)){
args__26448__auto__.push((arguments[i__26442__auto___38816]));

var G__38817 = (i__26442__auto___38816 + (1));
i__26442__auto___38816 = G__38817;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38811){
var vec__38812 = p__38811;
var req = cljs.core.nth.call(null,vec__38812,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq38809){
var G__38810 = cljs.core.first.call(null,seq38809);
var seq38809__$1 = cljs.core.next.call(null,seq38809);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__38810,seq38809__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38824 = arguments.length;
var i__26442__auto___38825 = (0);
while(true){
if((i__26442__auto___38825 < len__26441__auto___38824)){
args__26448__auto__.push((arguments[i__26442__auto___38825]));

var G__38826 = (i__26442__auto___38825 + (1));
i__26442__auto___38825 = G__38826;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38820){
var vec__38821 = p__38820;
var req = cljs.core.nth.call(null,vec__38821,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq38818){
var G__38819 = cljs.core.first.call(null,seq38818);
var seq38818__$1 = cljs.core.next.call(null,seq38818);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__38819,seq38818__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38833 = arguments.length;
var i__26442__auto___38834 = (0);
while(true){
if((i__26442__auto___38834 < len__26441__auto___38833)){
args__26448__auto__.push((arguments[i__26442__auto___38834]));

var G__38835 = (i__26442__auto___38834 + (1));
i__26442__auto___38834 = G__38835;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38829){
var vec__38830 = p__38829;
var req = cljs.core.nth.call(null,vec__38830,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq38827){
var G__38828 = cljs.core.first.call(null,seq38827);
var seq38827__$1 = cljs.core.next.call(null,seq38827);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__38828,seq38827__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38842 = arguments.length;
var i__26442__auto___38843 = (0);
while(true){
if((i__26442__auto___38843 < len__26441__auto___38842)){
args__26448__auto__.push((arguments[i__26442__auto___38843]));

var G__38844 = (i__26442__auto___38843 + (1));
i__26442__auto___38843 = G__38844;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38838){
var vec__38839 = p__38838;
var req = cljs.core.nth.call(null,vec__38839,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq38836){
var G__38837 = cljs.core.first.call(null,seq38836);
var seq38836__$1 = cljs.core.next.call(null,seq38836);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__38837,seq38836__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38851 = arguments.length;
var i__26442__auto___38852 = (0);
while(true){
if((i__26442__auto___38852 < len__26441__auto___38851)){
args__26448__auto__.push((arguments[i__26442__auto___38852]));

var G__38853 = (i__26442__auto___38852 + (1));
i__26442__auto___38852 = G__38853;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38847){
var vec__38848 = p__38847;
var req = cljs.core.nth.call(null,vec__38848,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq38845){
var G__38846 = cljs.core.first.call(null,seq38845);
var seq38845__$1 = cljs.core.next.call(null,seq38845);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__38846,seq38845__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38860 = arguments.length;
var i__26442__auto___38861 = (0);
while(true){
if((i__26442__auto___38861 < len__26441__auto___38860)){
args__26448__auto__.push((arguments[i__26442__auto___38861]));

var G__38862 = (i__26442__auto___38861 + (1));
i__26442__auto___38861 = G__38862;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38856){
var vec__38857 = p__38856;
var req = cljs.core.nth.call(null,vec__38857,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq38854){
var G__38855 = cljs.core.first.call(null,seq38854);
var seq38854__$1 = cljs.core.next.call(null,seq38854);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__38855,seq38854__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__26448__auto__ = [];
var len__26441__auto___38869 = arguments.length;
var i__26442__auto___38870 = (0);
while(true){
if((i__26442__auto___38870 < len__26441__auto___38869)){
args__26448__auto__.push((arguments[i__26442__auto___38870]));

var G__38871 = (i__26442__auto___38870 + (1));
i__26442__auto___38870 = G__38871;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__38865){
var vec__38866 = p__38865;
var req = cljs.core.nth.call(null,vec__38866,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq38863){
var G__38864 = cljs.core.first.call(null,seq38863);
var seq38863__$1 = cljs.core.next.call(null,seq38863);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__38864,seq38863__$1);
});


//# sourceMappingURL=client.js.map?rel=1489150135329