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
return cljs.core.reduce.call(null,(function (p1__48739_SHARP_,p2__48738_SHARP_){
var vec__48747 = clojure.string.split.call(null,p2__48738_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__48747,(0),null);
var v = cljs.core.nth.call(null,vec__48747,(1),null);
return cljs.core.assoc.call(null,p1__48739_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__48763_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__48763_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__48767){
var vec__48772 = p__48767;
var k = cljs.core.nth.call(null,vec__48772,(0),null);
var v = cljs.core.nth.call(null,vec__48772,(1),null);
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
return (function (p1__48790_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__48790_SHARP_)].join('');
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
return cljs.core.async.map.call(null,(function (p1__48810_SHARP_){
return cljs_http.client.decode_body.call(null,p1__48810_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__26448__auto__ = [];
var len__26441__auto___48825 = arguments.length;
var i__26442__auto___48826 = (0);
while(true){
if((i__26442__auto___48826 < len__26441__auto___48825)){
args__26448__auto__.push((arguments[i__26442__auto___48826]));

var G__48828 = (i__26442__auto___48826 + (1));
i__26442__auto___48826 = G__48828;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__48818){
var vec__48819 = p__48818;
var default_headers = cljs.core.nth.call(null,vec__48819,(0),null);
return ((function (vec__48819,default_headers){
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
;})(vec__48819,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq48816){
var G__48817 = cljs.core.first.call(null,seq48816);
var seq48816__$1 = cljs.core.next.call(null,seq48816);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__48817,seq48816__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__26448__auto__ = [];
var len__26441__auto___48844 = arguments.length;
var i__26442__auto___48845 = (0);
while(true){
if((i__26442__auto___48845 < len__26441__auto___48844)){
args__26448__auto__.push((arguments[i__26442__auto___48845]));

var G__48846 = (i__26442__auto___48845 + (1));
i__26442__auto___48845 = G__48846;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__48837){
var vec__48838 = p__48837;
var accept = cljs.core.nth.call(null,vec__48838,(0),null);
return ((function (vec__48838,accept){
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
;})(vec__48838,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq48832){
var G__48833 = cljs.core.first.call(null,seq48832);
var seq48832__$1 = cljs.core.next.call(null,seq48832);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__48833,seq48832__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__26448__auto__ = [];
var len__26441__auto___48856 = arguments.length;
var i__26442__auto___48858 = (0);
while(true){
if((i__26442__auto___48858 < len__26441__auto___48856)){
args__26448__auto__.push((arguments[i__26442__auto___48858]));

var G__48859 = (i__26442__auto___48858 + (1));
i__26442__auto___48858 = G__48859;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__48852){
var vec__48853 = p__48852;
var content_type = cljs.core.nth.call(null,vec__48853,(0),null);
return ((function (vec__48853,content_type){
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
;})(vec__48853,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq48850){
var G__48851 = cljs.core.first.call(null,seq48850);
var seq48850__$1 = cljs.core.next.call(null,seq48850);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__48851,seq48850__$1);
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
var map__48870 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__48870__$1 = ((((!((map__48870 == null)))?((((map__48870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48870.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48870):map__48870);
var encoding = cljs.core.get.call(null,map__48870__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__48870__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__48899 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__48899__$1 = ((((!((map__48899 == null)))?((((map__48899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48899):map__48899);
var decoding = cljs.core.get.call(null,map__48899__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__48899__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__48899,map__48899__$1,decoding,decoding_opts){
return (function (p1__48886_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__48886_SHARP_,decoding,decoding_opts);
});})(map__48899,map__48899__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__48899,map__48899__$1,decoding,decoding_opts,transit_decode){
return (function (p1__48887_SHARP_){
return cljs_http.client.decode_body.call(null,p1__48887_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__48899,map__48899__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__48905_SHARP_){
return cljs_http.client.decode_body.call(null,p1__48905_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__48912){
var map__48913 = p__48912;
var map__48913__$1 = ((((!((map__48913 == null)))?((((map__48913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48913.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48913):map__48913);
var req = map__48913__$1;
var query_params = cljs.core.get.call(null,map__48913__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__48926){
var map__48927 = p__48926;
var map__48927__$1 = ((((!((map__48927 == null)))?((((map__48927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48927):map__48927);
var request = map__48927__$1;
var form_params = cljs.core.get.call(null,map__48927__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__48927__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__48927__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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
var seq__48953_48967 = cljs.core.seq.call(null,params);
var chunk__48954_48968 = null;
var count__48955_48969 = (0);
var i__48956_48970 = (0);
while(true){
if((i__48956_48970 < count__48955_48969)){
var vec__48957_48973 = cljs.core._nth.call(null,chunk__48954_48968,i__48956_48970);
var k_48974 = cljs.core.nth.call(null,vec__48957_48973,(0),null);
var v_48975 = cljs.core.nth.call(null,vec__48957_48973,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_48975)){
form_data.append(cljs.core.name.call(null,k_48974),cljs.core.first.call(null,v_48975),cljs.core.second.call(null,v_48975));
} else {
form_data.append(cljs.core.name.call(null,k_48974),v_48975);
}

var G__48984 = seq__48953_48967;
var G__48985 = chunk__48954_48968;
var G__48986 = count__48955_48969;
var G__48987 = (i__48956_48970 + (1));
seq__48953_48967 = G__48984;
chunk__48954_48968 = G__48985;
count__48955_48969 = G__48986;
i__48956_48970 = G__48987;
continue;
} else {
var temp__4657__auto___48988 = cljs.core.seq.call(null,seq__48953_48967);
if(temp__4657__auto___48988){
var seq__48953_48991__$1 = temp__4657__auto___48988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48953_48991__$1)){
var c__26147__auto___48992 = cljs.core.chunk_first.call(null,seq__48953_48991__$1);
var G__48993 = cljs.core.chunk_rest.call(null,seq__48953_48991__$1);
var G__48994 = c__26147__auto___48992;
var G__48995 = cljs.core.count.call(null,c__26147__auto___48992);
var G__48996 = (0);
seq__48953_48967 = G__48993;
chunk__48954_48968 = G__48994;
count__48955_48969 = G__48995;
i__48956_48970 = G__48996;
continue;
} else {
var vec__48962_48997 = cljs.core.first.call(null,seq__48953_48991__$1);
var k_48998 = cljs.core.nth.call(null,vec__48962_48997,(0),null);
var v_48999 = cljs.core.nth.call(null,vec__48962_48997,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_48999)){
form_data.append(cljs.core.name.call(null,k_48998),cljs.core.first.call(null,v_48999),cljs.core.second.call(null,v_48999));
} else {
form_data.append(cljs.core.name.call(null,k_48998),v_48999);
}

var G__49002 = cljs.core.next.call(null,seq__48953_48991__$1);
var G__49003 = null;
var G__49004 = (0);
var G__49005 = (0);
seq__48953_48967 = G__49002;
chunk__48954_48968 = G__49003;
count__48955_48969 = G__49004;
i__48956_48970 = G__49005;
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
return (function (p__49011){
var map__49012 = p__49011;
var map__49012__$1 = ((((!((map__49012 == null)))?((((map__49012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49012):map__49012);
var request = map__49012__$1;
var multipart_params = cljs.core.get.call(null,map__49012__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__49012__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
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
return (function (p1__49028_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__49028_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__49037){
var map__49038 = p__49037;
var map__49038__$1 = ((((!((map__49038 == null)))?((((map__49038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49038):map__49038);
var req = map__49038__$1;
var query_params = cljs.core.get.call(null,map__49038__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__49038,map__49038__$1,req,query_params){
return (function (p1__49032_SHARP_){
return cljs.core.merge.call(null,p1__49032_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__49038,map__49038__$1,req,query_params))
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
var len__26441__auto___49062 = arguments.length;
var i__26442__auto___49063 = (0);
while(true){
if((i__26442__auto___49063 < len__26441__auto___49062)){
args__26448__auto__.push((arguments[i__26442__auto___49063]));

var G__49064 = (i__26442__auto___49063 + (1));
i__26442__auto___49063 = G__49064;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__49056){
var vec__49057 = p__49056;
var credentials = cljs.core.nth.call(null,vec__49057,(0),null);
return ((function (vec__49057,credentials){
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
;})(vec__49057,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq49052){
var G__49053 = cljs.core.first.call(null,seq49052);
var seq49052__$1 = cljs.core.next.call(null,seq49052);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__49053,seq49052__$1);
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
var len__26441__auto___49101 = arguments.length;
var i__26442__auto___49102 = (0);
while(true){
if((i__26442__auto___49102 < len__26441__auto___49101)){
args__26448__auto__.push((arguments[i__26442__auto___49102]));

var G__49105 = (i__26442__auto___49102 + (1));
i__26442__auto___49102 = G__49105;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49091){
var vec__49093 = p__49091;
var req = cljs.core.nth.call(null,vec__49093,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq49085){
var G__49086 = cljs.core.first.call(null,seq49085);
var seq49085__$1 = cljs.core.next.call(null,seq49085);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__49086,seq49085__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__26448__auto__ = [];
var len__26441__auto___49132 = arguments.length;
var i__26442__auto___49133 = (0);
while(true){
if((i__26442__auto___49133 < len__26441__auto___49132)){
args__26448__auto__.push((arguments[i__26442__auto___49133]));

var G__49134 = (i__26442__auto___49133 + (1));
i__26442__auto___49133 = G__49134;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49122){
var vec__49123 = p__49122;
var req = cljs.core.nth.call(null,vec__49123,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq49119){
var G__49120 = cljs.core.first.call(null,seq49119);
var seq49119__$1 = cljs.core.next.call(null,seq49119);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__49120,seq49119__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__26448__auto__ = [];
var len__26441__auto___49159 = arguments.length;
var i__26442__auto___49160 = (0);
while(true){
if((i__26442__auto___49160 < len__26441__auto___49159)){
args__26448__auto__.push((arguments[i__26442__auto___49160]));

var G__49162 = (i__26442__auto___49160 + (1));
i__26442__auto___49160 = G__49162;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49152){
var vec__49153 = p__49152;
var req = cljs.core.nth.call(null,vec__49153,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq49147){
var G__49148 = cljs.core.first.call(null,seq49147);
var seq49147__$1 = cljs.core.next.call(null,seq49147);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__49148,seq49147__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__26448__auto__ = [];
var len__26441__auto___49190 = arguments.length;
var i__26442__auto___49191 = (0);
while(true){
if((i__26442__auto___49191 < len__26441__auto___49190)){
args__26448__auto__.push((arguments[i__26442__auto___49191]));

var G__49196 = (i__26442__auto___49191 + (1));
i__26442__auto___49191 = G__49196;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49182){
var vec__49183 = p__49182;
var req = cljs.core.nth.call(null,vec__49183,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq49174){
var G__49175 = cljs.core.first.call(null,seq49174);
var seq49174__$1 = cljs.core.next.call(null,seq49174);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__49175,seq49174__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__26448__auto__ = [];
var len__26441__auto___49214 = arguments.length;
var i__26442__auto___49215 = (0);
while(true){
if((i__26442__auto___49215 < len__26441__auto___49214)){
args__26448__auto__.push((arguments[i__26442__auto___49215]));

var G__49216 = (i__26442__auto___49215 + (1));
i__26442__auto___49215 = G__49216;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49209){
var vec__49210 = p__49209;
var req = cljs.core.nth.call(null,vec__49210,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq49204){
var G__49205 = cljs.core.first.call(null,seq49204);
var seq49204__$1 = cljs.core.next.call(null,seq49204);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__49205,seq49204__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__26448__auto__ = [];
var len__26441__auto___49238 = arguments.length;
var i__26442__auto___49239 = (0);
while(true){
if((i__26442__auto___49239 < len__26441__auto___49238)){
args__26448__auto__.push((arguments[i__26442__auto___49239]));

var G__49240 = (i__26442__auto___49239 + (1));
i__26442__auto___49239 = G__49240;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49234){
var vec__49235 = p__49234;
var req = cljs.core.nth.call(null,vec__49235,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq49227){
var G__49228 = cljs.core.first.call(null,seq49227);
var seq49227__$1 = cljs.core.next.call(null,seq49227);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__49228,seq49227__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__26448__auto__ = [];
var len__26441__auto___49247 = arguments.length;
var i__26442__auto___49248 = (0);
while(true){
if((i__26442__auto___49248 < len__26441__auto___49247)){
args__26448__auto__.push((arguments[i__26442__auto___49248]));

var G__49249 = (i__26442__auto___49248 + (1));
i__26442__auto___49248 = G__49249;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49243){
var vec__49244 = p__49243;
var req = cljs.core.nth.call(null,vec__49244,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq49241){
var G__49242 = cljs.core.first.call(null,seq49241);
var seq49241__$1 = cljs.core.next.call(null,seq49241);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__49242,seq49241__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__26448__auto__ = [];
var len__26441__auto___49259 = arguments.length;
var i__26442__auto___49260 = (0);
while(true){
if((i__26442__auto___49260 < len__26441__auto___49259)){
args__26448__auto__.push((arguments[i__26442__auto___49260]));

var G__49261 = (i__26442__auto___49260 + (1));
i__26442__auto___49260 = G__49261;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49254){
var vec__49255 = p__49254;
var req = cljs.core.nth.call(null,vec__49255,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq49251){
var G__49252 = cljs.core.first.call(null,seq49251);
var seq49251__$1 = cljs.core.next.call(null,seq49251);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__49252,seq49251__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__26448__auto__ = [];
var len__26441__auto___49273 = arguments.length;
var i__26442__auto___49274 = (0);
while(true){
if((i__26442__auto___49274 < len__26441__auto___49273)){
args__26448__auto__.push((arguments[i__26442__auto___49274]));

var G__49275 = (i__26442__auto___49274 + (1));
i__26442__auto___49274 = G__49275;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__49269){
var vec__49270 = p__49269;
var req = cljs.core.nth.call(null,vec__49270,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq49267){
var G__49268 = cljs.core.first.call(null,seq49267);
var seq49267__$1 = cljs.core.next.call(null,seq49267);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__49268,seq49267__$1);
});


//# sourceMappingURL=client.js.map?rel=1489150142355