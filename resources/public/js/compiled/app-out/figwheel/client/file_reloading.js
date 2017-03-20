// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25333__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25333__auto__){
return or__25333__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25333__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33247_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33247_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33252 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33253 = null;
var count__33254 = (0);
var i__33255 = (0);
while(true){
if((i__33255 < count__33254)){
var n = cljs.core._nth.call(null,chunk__33253,i__33255);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33256 = seq__33252;
var G__33257 = chunk__33253;
var G__33258 = count__33254;
var G__33259 = (i__33255 + (1));
seq__33252 = G__33256;
chunk__33253 = G__33257;
count__33254 = G__33258;
i__33255 = G__33259;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33252);
if(temp__4657__auto__){
var seq__33252__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33252__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__33252__$1);
var G__33260 = cljs.core.chunk_rest.call(null,seq__33252__$1);
var G__33261 = c__26147__auto__;
var G__33262 = cljs.core.count.call(null,c__26147__auto__);
var G__33263 = (0);
seq__33252 = G__33260;
chunk__33253 = G__33261;
count__33254 = G__33262;
i__33255 = G__33263;
continue;
} else {
var n = cljs.core.first.call(null,seq__33252__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33264 = cljs.core.next.call(null,seq__33252__$1);
var G__33265 = null;
var G__33266 = (0);
var G__33267 = (0);
seq__33252 = G__33264;
chunk__33253 = G__33265;
count__33254 = G__33266;
i__33255 = G__33267;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33318_33329 = cljs.core.seq.call(null,deps);
var chunk__33319_33330 = null;
var count__33320_33331 = (0);
var i__33321_33332 = (0);
while(true){
if((i__33321_33332 < count__33320_33331)){
var dep_33333 = cljs.core._nth.call(null,chunk__33319_33330,i__33321_33332);
topo_sort_helper_STAR_.call(null,dep_33333,(depth + (1)),state);

var G__33334 = seq__33318_33329;
var G__33335 = chunk__33319_33330;
var G__33336 = count__33320_33331;
var G__33337 = (i__33321_33332 + (1));
seq__33318_33329 = G__33334;
chunk__33319_33330 = G__33335;
count__33320_33331 = G__33336;
i__33321_33332 = G__33337;
continue;
} else {
var temp__4657__auto___33338 = cljs.core.seq.call(null,seq__33318_33329);
if(temp__4657__auto___33338){
var seq__33318_33339__$1 = temp__4657__auto___33338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33318_33339__$1)){
var c__26147__auto___33340 = cljs.core.chunk_first.call(null,seq__33318_33339__$1);
var G__33341 = cljs.core.chunk_rest.call(null,seq__33318_33339__$1);
var G__33342 = c__26147__auto___33340;
var G__33343 = cljs.core.count.call(null,c__26147__auto___33340);
var G__33344 = (0);
seq__33318_33329 = G__33341;
chunk__33319_33330 = G__33342;
count__33320_33331 = G__33343;
i__33321_33332 = G__33344;
continue;
} else {
var dep_33345 = cljs.core.first.call(null,seq__33318_33339__$1);
topo_sort_helper_STAR_.call(null,dep_33345,(depth + (1)),state);

var G__33346 = cljs.core.next.call(null,seq__33318_33339__$1);
var G__33347 = null;
var G__33348 = (0);
var G__33349 = (0);
seq__33318_33329 = G__33346;
chunk__33319_33330 = G__33347;
count__33320_33331 = G__33348;
i__33321_33332 = G__33349;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33322){
var vec__33326 = p__33322;
var seq__33327 = cljs.core.seq.call(null,vec__33326);
var first__33328 = cljs.core.first.call(null,seq__33327);
var seq__33327__$1 = cljs.core.next.call(null,seq__33327);
var x = first__33328;
var xs = seq__33327__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33326,seq__33327,first__33328,seq__33327__$1,x,xs,get_deps__$1){
return (function (p1__33268_SHARP_){
return clojure.set.difference.call(null,p1__33268_SHARP_,x);
});})(vec__33326,seq__33327,first__33328,seq__33327__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33362 = cljs.core.seq.call(null,provides);
var chunk__33363 = null;
var count__33364 = (0);
var i__33365 = (0);
while(true){
if((i__33365 < count__33364)){
var prov = cljs.core._nth.call(null,chunk__33363,i__33365);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33366_33374 = cljs.core.seq.call(null,requires);
var chunk__33367_33375 = null;
var count__33368_33376 = (0);
var i__33369_33377 = (0);
while(true){
if((i__33369_33377 < count__33368_33376)){
var req_33378 = cljs.core._nth.call(null,chunk__33367_33375,i__33369_33377);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33378,prov);

var G__33379 = seq__33366_33374;
var G__33380 = chunk__33367_33375;
var G__33381 = count__33368_33376;
var G__33382 = (i__33369_33377 + (1));
seq__33366_33374 = G__33379;
chunk__33367_33375 = G__33380;
count__33368_33376 = G__33381;
i__33369_33377 = G__33382;
continue;
} else {
var temp__4657__auto___33383 = cljs.core.seq.call(null,seq__33366_33374);
if(temp__4657__auto___33383){
var seq__33366_33384__$1 = temp__4657__auto___33383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33366_33384__$1)){
var c__26147__auto___33385 = cljs.core.chunk_first.call(null,seq__33366_33384__$1);
var G__33386 = cljs.core.chunk_rest.call(null,seq__33366_33384__$1);
var G__33387 = c__26147__auto___33385;
var G__33388 = cljs.core.count.call(null,c__26147__auto___33385);
var G__33389 = (0);
seq__33366_33374 = G__33386;
chunk__33367_33375 = G__33387;
count__33368_33376 = G__33388;
i__33369_33377 = G__33389;
continue;
} else {
var req_33390 = cljs.core.first.call(null,seq__33366_33384__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33390,prov);

var G__33391 = cljs.core.next.call(null,seq__33366_33384__$1);
var G__33392 = null;
var G__33393 = (0);
var G__33394 = (0);
seq__33366_33374 = G__33391;
chunk__33367_33375 = G__33392;
count__33368_33376 = G__33393;
i__33369_33377 = G__33394;
continue;
}
} else {
}
}
break;
}

var G__33395 = seq__33362;
var G__33396 = chunk__33363;
var G__33397 = count__33364;
var G__33398 = (i__33365 + (1));
seq__33362 = G__33395;
chunk__33363 = G__33396;
count__33364 = G__33397;
i__33365 = G__33398;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33362);
if(temp__4657__auto__){
var seq__33362__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33362__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__33362__$1);
var G__33399 = cljs.core.chunk_rest.call(null,seq__33362__$1);
var G__33400 = c__26147__auto__;
var G__33401 = cljs.core.count.call(null,c__26147__auto__);
var G__33402 = (0);
seq__33362 = G__33399;
chunk__33363 = G__33400;
count__33364 = G__33401;
i__33365 = G__33402;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33362__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33370_33403 = cljs.core.seq.call(null,requires);
var chunk__33371_33404 = null;
var count__33372_33405 = (0);
var i__33373_33406 = (0);
while(true){
if((i__33373_33406 < count__33372_33405)){
var req_33407 = cljs.core._nth.call(null,chunk__33371_33404,i__33373_33406);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33407,prov);

var G__33408 = seq__33370_33403;
var G__33409 = chunk__33371_33404;
var G__33410 = count__33372_33405;
var G__33411 = (i__33373_33406 + (1));
seq__33370_33403 = G__33408;
chunk__33371_33404 = G__33409;
count__33372_33405 = G__33410;
i__33373_33406 = G__33411;
continue;
} else {
var temp__4657__auto___33412__$1 = cljs.core.seq.call(null,seq__33370_33403);
if(temp__4657__auto___33412__$1){
var seq__33370_33413__$1 = temp__4657__auto___33412__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33370_33413__$1)){
var c__26147__auto___33414 = cljs.core.chunk_first.call(null,seq__33370_33413__$1);
var G__33415 = cljs.core.chunk_rest.call(null,seq__33370_33413__$1);
var G__33416 = c__26147__auto___33414;
var G__33417 = cljs.core.count.call(null,c__26147__auto___33414);
var G__33418 = (0);
seq__33370_33403 = G__33415;
chunk__33371_33404 = G__33416;
count__33372_33405 = G__33417;
i__33373_33406 = G__33418;
continue;
} else {
var req_33419 = cljs.core.first.call(null,seq__33370_33413__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33419,prov);

var G__33420 = cljs.core.next.call(null,seq__33370_33413__$1);
var G__33421 = null;
var G__33422 = (0);
var G__33423 = (0);
seq__33370_33403 = G__33420;
chunk__33371_33404 = G__33421;
count__33372_33405 = G__33422;
i__33373_33406 = G__33423;
continue;
}
} else {
}
}
break;
}

var G__33424 = cljs.core.next.call(null,seq__33362__$1);
var G__33425 = null;
var G__33426 = (0);
var G__33427 = (0);
seq__33362 = G__33424;
chunk__33363 = G__33425;
count__33364 = G__33426;
i__33365 = G__33427;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33432_33436 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33433_33437 = null;
var count__33434_33438 = (0);
var i__33435_33439 = (0);
while(true){
if((i__33435_33439 < count__33434_33438)){
var ns_33440 = cljs.core._nth.call(null,chunk__33433_33437,i__33435_33439);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33440);

var G__33441 = seq__33432_33436;
var G__33442 = chunk__33433_33437;
var G__33443 = count__33434_33438;
var G__33444 = (i__33435_33439 + (1));
seq__33432_33436 = G__33441;
chunk__33433_33437 = G__33442;
count__33434_33438 = G__33443;
i__33435_33439 = G__33444;
continue;
} else {
var temp__4657__auto___33445 = cljs.core.seq.call(null,seq__33432_33436);
if(temp__4657__auto___33445){
var seq__33432_33446__$1 = temp__4657__auto___33445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33432_33446__$1)){
var c__26147__auto___33447 = cljs.core.chunk_first.call(null,seq__33432_33446__$1);
var G__33448 = cljs.core.chunk_rest.call(null,seq__33432_33446__$1);
var G__33449 = c__26147__auto___33447;
var G__33450 = cljs.core.count.call(null,c__26147__auto___33447);
var G__33451 = (0);
seq__33432_33436 = G__33448;
chunk__33433_33437 = G__33449;
count__33434_33438 = G__33450;
i__33435_33439 = G__33451;
continue;
} else {
var ns_33452 = cljs.core.first.call(null,seq__33432_33446__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33452);

var G__33453 = cljs.core.next.call(null,seq__33432_33446__$1);
var G__33454 = null;
var G__33455 = (0);
var G__33456 = (0);
seq__33432_33436 = G__33453;
chunk__33433_33437 = G__33454;
count__33434_33438 = G__33455;
i__33435_33439 = G__33456;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25333__auto__ = goog.require__;
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33457__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33458__i = 0, G__33458__a = new Array(arguments.length -  0);
while (G__33458__i < G__33458__a.length) {G__33458__a[G__33458__i] = arguments[G__33458__i + 0]; ++G__33458__i;}
  args = new cljs.core.IndexedSeq(G__33458__a,0);
} 
return G__33457__delegate.call(this,args);};
G__33457.cljs$lang$maxFixedArity = 0;
G__33457.cljs$lang$applyTo = (function (arglist__33459){
var args = cljs.core.seq(arglist__33459);
return G__33457__delegate(args);
});
G__33457.cljs$core$IFn$_invoke$arity$variadic = G__33457__delegate;
return G__33457;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33461 = cljs.core._EQ_;
var expr__33462 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33461.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33462))){
var path_parts = ((function (pred__33461,expr__33462){
return (function (p1__33460_SHARP_){
return clojure.string.split.call(null,p1__33460_SHARP_,/[\/\\]/);
});})(pred__33461,expr__33462))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__33461,expr__33462){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33464){if((e33464 instanceof Error)){
var e = e33464;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33464;

}
}})());
});
;})(path_parts,sep,root,pred__33461,expr__33462))
} else {
if(cljs.core.truth_(pred__33461.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33462))){
return ((function (pred__33461,expr__33462){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__33461,expr__33462){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__33461,expr__33462))
);

return deferred.addErrback(((function (deferred,pred__33461,expr__33462){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__33461,expr__33462))
);
});
;})(pred__33461,expr__33462))
} else {
return ((function (pred__33461,expr__33462){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33461,expr__33462))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33465,callback){
var map__33468 = p__33465;
var map__33468__$1 = ((((!((map__33468 == null)))?((((map__33468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33468):map__33468);
var file_msg = map__33468__$1;
var request_url = cljs.core.get.call(null,map__33468__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33468,map__33468__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33468,map__33468__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__){
return (function (state_33492){
var state_val_33493 = (state_33492[(1)]);
if((state_val_33493 === (7))){
var inst_33488 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33494_33514 = state_33492__$1;
(statearr_33494_33514[(2)] = inst_33488);

(statearr_33494_33514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (1))){
var state_33492__$1 = state_33492;
var statearr_33495_33515 = state_33492__$1;
(statearr_33495_33515[(2)] = null);

(statearr_33495_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (4))){
var inst_33472 = (state_33492[(7)]);
var inst_33472__$1 = (state_33492[(2)]);
var state_33492__$1 = (function (){var statearr_33496 = state_33492;
(statearr_33496[(7)] = inst_33472__$1);

return statearr_33496;
})();
if(cljs.core.truth_(inst_33472__$1)){
var statearr_33497_33516 = state_33492__$1;
(statearr_33497_33516[(1)] = (5));

} else {
var statearr_33498_33517 = state_33492__$1;
(statearr_33498_33517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (6))){
var state_33492__$1 = state_33492;
var statearr_33499_33518 = state_33492__$1;
(statearr_33499_33518[(2)] = null);

(statearr_33499_33518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (3))){
var inst_33490 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33492__$1,inst_33490);
} else {
if((state_val_33493 === (2))){
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33492__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33493 === (11))){
var inst_33484 = (state_33492[(2)]);
var state_33492__$1 = (function (){var statearr_33500 = state_33492;
(statearr_33500[(8)] = inst_33484);

return statearr_33500;
})();
var statearr_33501_33519 = state_33492__$1;
(statearr_33501_33519[(2)] = null);

(statearr_33501_33519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (9))){
var inst_33476 = (state_33492[(9)]);
var inst_33478 = (state_33492[(10)]);
var inst_33480 = inst_33478.call(null,inst_33476);
var state_33492__$1 = state_33492;
var statearr_33502_33520 = state_33492__$1;
(statearr_33502_33520[(2)] = inst_33480);

(statearr_33502_33520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (5))){
var inst_33472 = (state_33492[(7)]);
var inst_33474 = figwheel.client.file_reloading.blocking_load.call(null,inst_33472);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33492__$1,(8),inst_33474);
} else {
if((state_val_33493 === (10))){
var inst_33476 = (state_33492[(9)]);
var inst_33482 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33476);
var state_33492__$1 = state_33492;
var statearr_33503_33521 = state_33492__$1;
(statearr_33503_33521[(2)] = inst_33482);

(statearr_33503_33521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (8))){
var inst_33472 = (state_33492[(7)]);
var inst_33478 = (state_33492[(10)]);
var inst_33476 = (state_33492[(2)]);
var inst_33477 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33478__$1 = cljs.core.get.call(null,inst_33477,inst_33472);
var state_33492__$1 = (function (){var statearr_33504 = state_33492;
(statearr_33504[(9)] = inst_33476);

(statearr_33504[(10)] = inst_33478__$1);

return statearr_33504;
})();
if(cljs.core.truth_(inst_33478__$1)){
var statearr_33505_33522 = state_33492__$1;
(statearr_33505_33522[(1)] = (9));

} else {
var statearr_33506_33523 = state_33492__$1;
(statearr_33506_33523[(1)] = (10));

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
});})(c__29750__auto__))
;
return ((function (switch__29638__auto__,c__29750__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29639__auto__ = null;
var figwheel$client$file_reloading$state_machine__29639__auto____0 = (function (){
var statearr_33510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33510[(0)] = figwheel$client$file_reloading$state_machine__29639__auto__);

(statearr_33510[(1)] = (1));

return statearr_33510;
});
var figwheel$client$file_reloading$state_machine__29639__auto____1 = (function (state_33492){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_33492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e33511){if((e33511 instanceof Object)){
var ex__29642__auto__ = e33511;
var statearr_33512_33524 = state_33492;
(statearr_33512_33524[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33525 = state_33492;
state_33492 = G__33525;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29639__auto__ = function(state_33492){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29639__auto____1.call(this,state_33492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29639__auto____0;
figwheel$client$file_reloading$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29639__auto____1;
return figwheel$client$file_reloading$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_33513 = f__29751__auto__.call(null);
(statearr_33513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_33513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__))
);

return c__29750__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33526,callback){
var map__33529 = p__33526;
var map__33529__$1 = ((((!((map__33529 == null)))?((((map__33529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33529):map__33529);
var file_msg = map__33529__$1;
var namespace = cljs.core.get.call(null,map__33529__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33529,map__33529__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33529,map__33529__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33531){
var map__33534 = p__33531;
var map__33534__$1 = ((((!((map__33534 == null)))?((((map__33534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33534):map__33534);
var file_msg = map__33534__$1;
var namespace = cljs.core.get.call(null,map__33534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25321__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25321__auto__){
var or__25333__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
var or__25333__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25333__auto____$1)){
return or__25333__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25321__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33536,callback){
var map__33539 = p__33536;
var map__33539__$1 = ((((!((map__33539 == null)))?((((map__33539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33539):map__33539);
var file_msg = map__33539__$1;
var request_url = cljs.core.get.call(null,map__33539__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29750__auto___33643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___33643,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___33643,out){
return (function (state_33625){
var state_val_33626 = (state_33625[(1)]);
if((state_val_33626 === (1))){
var inst_33599 = cljs.core.seq.call(null,files);
var inst_33600 = cljs.core.first.call(null,inst_33599);
var inst_33601 = cljs.core.next.call(null,inst_33599);
var inst_33602 = files;
var state_33625__$1 = (function (){var statearr_33627 = state_33625;
(statearr_33627[(7)] = inst_33601);

(statearr_33627[(8)] = inst_33600);

(statearr_33627[(9)] = inst_33602);

return statearr_33627;
})();
var statearr_33628_33644 = state_33625__$1;
(statearr_33628_33644[(2)] = null);

(statearr_33628_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (2))){
var inst_33608 = (state_33625[(10)]);
var inst_33602 = (state_33625[(9)]);
var inst_33607 = cljs.core.seq.call(null,inst_33602);
var inst_33608__$1 = cljs.core.first.call(null,inst_33607);
var inst_33609 = cljs.core.next.call(null,inst_33607);
var inst_33610 = (inst_33608__$1 == null);
var inst_33611 = cljs.core.not.call(null,inst_33610);
var state_33625__$1 = (function (){var statearr_33629 = state_33625;
(statearr_33629[(11)] = inst_33609);

(statearr_33629[(10)] = inst_33608__$1);

return statearr_33629;
})();
if(inst_33611){
var statearr_33630_33645 = state_33625__$1;
(statearr_33630_33645[(1)] = (4));

} else {
var statearr_33631_33646 = state_33625__$1;
(statearr_33631_33646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (3))){
var inst_33623 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33625__$1,inst_33623);
} else {
if((state_val_33626 === (4))){
var inst_33608 = (state_33625[(10)]);
var inst_33613 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33608);
var state_33625__$1 = state_33625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33625__$1,(7),inst_33613);
} else {
if((state_val_33626 === (5))){
var inst_33619 = cljs.core.async.close_BANG_.call(null,out);
var state_33625__$1 = state_33625;
var statearr_33632_33647 = state_33625__$1;
(statearr_33632_33647[(2)] = inst_33619);

(statearr_33632_33647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (6))){
var inst_33621 = (state_33625[(2)]);
var state_33625__$1 = state_33625;
var statearr_33633_33648 = state_33625__$1;
(statearr_33633_33648[(2)] = inst_33621);

(statearr_33633_33648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33626 === (7))){
var inst_33609 = (state_33625[(11)]);
var inst_33615 = (state_33625[(2)]);
var inst_33616 = cljs.core.async.put_BANG_.call(null,out,inst_33615);
var inst_33602 = inst_33609;
var state_33625__$1 = (function (){var statearr_33634 = state_33625;
(statearr_33634[(12)] = inst_33616);

(statearr_33634[(9)] = inst_33602);

return statearr_33634;
})();
var statearr_33635_33649 = state_33625__$1;
(statearr_33635_33649[(2)] = null);

(statearr_33635_33649[(1)] = (2));


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
});})(c__29750__auto___33643,out))
;
return ((function (switch__29638__auto__,c__29750__auto___33643,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____0 = (function (){
var statearr_33639 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33639[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__);

(statearr_33639[(1)] = (1));

return statearr_33639;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____1 = (function (state_33625){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_33625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e33640){if((e33640 instanceof Object)){
var ex__29642__auto__ = e33640;
var statearr_33641_33650 = state_33625;
(statearr_33641_33650[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33651 = state_33625;
state_33625 = G__33651;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__ = function(state_33625){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____1.call(this,state_33625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___33643,out))
})();
var state__29752__auto__ = (function (){var statearr_33642 = f__29751__auto__.call(null);
(statearr_33642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___33643);

return statearr_33642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___33643,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33652,opts){
var map__33656 = p__33652;
var map__33656__$1 = ((((!((map__33656 == null)))?((((map__33656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33656):map__33656);
var eval_body = cljs.core.get.call(null,map__33656__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33656__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25321__auto__ = eval_body;
if(cljs.core.truth_(and__25321__auto__)){
return typeof eval_body === 'string';
} else {
return and__25321__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33658){var e = e33658;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33659_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33659_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33668){
var vec__33669 = p__33668;
var k = cljs.core.nth.call(null,vec__33669,(0),null);
var v = cljs.core.nth.call(null,vec__33669,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33672){
var vec__33673 = p__33672;
var k = cljs.core.nth.call(null,vec__33673,(0),null);
var v = cljs.core.nth.call(null,vec__33673,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33679,p__33680){
var map__33928 = p__33679;
var map__33928__$1 = ((((!((map__33928 == null)))?((((map__33928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33928.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33928):map__33928);
var opts = map__33928__$1;
var before_jsload = cljs.core.get.call(null,map__33928__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33928__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33928__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33929 = p__33680;
var map__33929__$1 = ((((!((map__33929 == null)))?((((map__33929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33929):map__33929);
var msg = map__33929__$1;
var files = cljs.core.get.call(null,map__33929__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33929__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33929__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34083){
var state_val_34084 = (state_34083[(1)]);
if((state_val_34084 === (7))){
var inst_33944 = (state_34083[(7)]);
var inst_33943 = (state_34083[(8)]);
var inst_33946 = (state_34083[(9)]);
var inst_33945 = (state_34083[(10)]);
var inst_33951 = cljs.core._nth.call(null,inst_33944,inst_33946);
var inst_33952 = figwheel.client.file_reloading.eval_body.call(null,inst_33951,opts);
var inst_33953 = (inst_33946 + (1));
var tmp34085 = inst_33944;
var tmp34086 = inst_33943;
var tmp34087 = inst_33945;
var inst_33943__$1 = tmp34086;
var inst_33944__$1 = tmp34085;
var inst_33945__$1 = tmp34087;
var inst_33946__$1 = inst_33953;
var state_34083__$1 = (function (){var statearr_34088 = state_34083;
(statearr_34088[(7)] = inst_33944__$1);

(statearr_34088[(11)] = inst_33952);

(statearr_34088[(8)] = inst_33943__$1);

(statearr_34088[(9)] = inst_33946__$1);

(statearr_34088[(10)] = inst_33945__$1);

return statearr_34088;
})();
var statearr_34089_34175 = state_34083__$1;
(statearr_34089_34175[(2)] = null);

(statearr_34089_34175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (20))){
var inst_33986 = (state_34083[(12)]);
var inst_33994 = figwheel.client.file_reloading.sort_files.call(null,inst_33986);
var state_34083__$1 = state_34083;
var statearr_34090_34176 = state_34083__$1;
(statearr_34090_34176[(2)] = inst_33994);

(statearr_34090_34176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (27))){
var state_34083__$1 = state_34083;
var statearr_34091_34177 = state_34083__$1;
(statearr_34091_34177[(2)] = null);

(statearr_34091_34177[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (1))){
var inst_33935 = (state_34083[(13)]);
var inst_33932 = before_jsload.call(null,files);
var inst_33933 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33934 = (function (){return ((function (inst_33935,inst_33932,inst_33933,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33676_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33676_SHARP_);
});
;})(inst_33935,inst_33932,inst_33933,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33935__$1 = cljs.core.filter.call(null,inst_33934,files);
var inst_33936 = cljs.core.not_empty.call(null,inst_33935__$1);
var state_34083__$1 = (function (){var statearr_34092 = state_34083;
(statearr_34092[(14)] = inst_33932);

(statearr_34092[(13)] = inst_33935__$1);

(statearr_34092[(15)] = inst_33933);

return statearr_34092;
})();
if(cljs.core.truth_(inst_33936)){
var statearr_34093_34178 = state_34083__$1;
(statearr_34093_34178[(1)] = (2));

} else {
var statearr_34094_34179 = state_34083__$1;
(statearr_34094_34179[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (24))){
var state_34083__$1 = state_34083;
var statearr_34095_34180 = state_34083__$1;
(statearr_34095_34180[(2)] = null);

(statearr_34095_34180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (39))){
var inst_34036 = (state_34083[(16)]);
var state_34083__$1 = state_34083;
var statearr_34096_34181 = state_34083__$1;
(statearr_34096_34181[(2)] = inst_34036);

(statearr_34096_34181[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (46))){
var inst_34078 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34097_34182 = state_34083__$1;
(statearr_34097_34182[(2)] = inst_34078);

(statearr_34097_34182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (4))){
var inst_33980 = (state_34083[(2)]);
var inst_33981 = cljs.core.List.EMPTY;
var inst_33982 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33981);
var inst_33983 = (function (){return ((function (inst_33980,inst_33981,inst_33982,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33677_SHARP_){
var and__25321__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33677_SHARP_);
if(cljs.core.truth_(and__25321__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33677_SHARP_));
} else {
return and__25321__auto__;
}
});
;})(inst_33980,inst_33981,inst_33982,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33984 = cljs.core.filter.call(null,inst_33983,files);
var inst_33985 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33986 = cljs.core.concat.call(null,inst_33984,inst_33985);
var state_34083__$1 = (function (){var statearr_34098 = state_34083;
(statearr_34098[(17)] = inst_33980);

(statearr_34098[(18)] = inst_33982);

(statearr_34098[(12)] = inst_33986);

return statearr_34098;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34099_34183 = state_34083__$1;
(statearr_34099_34183[(1)] = (16));

} else {
var statearr_34100_34184 = state_34083__$1;
(statearr_34100_34184[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (15))){
var inst_33970 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34101_34185 = state_34083__$1;
(statearr_34101_34185[(2)] = inst_33970);

(statearr_34101_34185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (21))){
var inst_33996 = (state_34083[(19)]);
var inst_33996__$1 = (state_34083[(2)]);
var inst_33997 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33996__$1);
var state_34083__$1 = (function (){var statearr_34102 = state_34083;
(statearr_34102[(19)] = inst_33996__$1);

return statearr_34102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34083__$1,(22),inst_33997);
} else {
if((state_val_34084 === (31))){
var inst_34081 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34083__$1,inst_34081);
} else {
if((state_val_34084 === (32))){
var inst_34036 = (state_34083[(16)]);
var inst_34041 = inst_34036.cljs$lang$protocol_mask$partition0$;
var inst_34042 = (inst_34041 & (64));
var inst_34043 = inst_34036.cljs$core$ISeq$;
var inst_34044 = (cljs.core.PROTOCOL_SENTINEL === inst_34043);
var inst_34045 = (inst_34042) || (inst_34044);
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_34045)){
var statearr_34103_34186 = state_34083__$1;
(statearr_34103_34186[(1)] = (35));

} else {
var statearr_34104_34187 = state_34083__$1;
(statearr_34104_34187[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (40))){
var inst_34058 = (state_34083[(20)]);
var inst_34057 = (state_34083[(2)]);
var inst_34058__$1 = cljs.core.get.call(null,inst_34057,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34059 = cljs.core.get.call(null,inst_34057,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34060 = cljs.core.not_empty.call(null,inst_34058__$1);
var state_34083__$1 = (function (){var statearr_34105 = state_34083;
(statearr_34105[(21)] = inst_34059);

(statearr_34105[(20)] = inst_34058__$1);

return statearr_34105;
})();
if(cljs.core.truth_(inst_34060)){
var statearr_34106_34188 = state_34083__$1;
(statearr_34106_34188[(1)] = (41));

} else {
var statearr_34107_34189 = state_34083__$1;
(statearr_34107_34189[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (33))){
var state_34083__$1 = state_34083;
var statearr_34108_34190 = state_34083__$1;
(statearr_34108_34190[(2)] = false);

(statearr_34108_34190[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (13))){
var inst_33956 = (state_34083[(22)]);
var inst_33960 = cljs.core.chunk_first.call(null,inst_33956);
var inst_33961 = cljs.core.chunk_rest.call(null,inst_33956);
var inst_33962 = cljs.core.count.call(null,inst_33960);
var inst_33943 = inst_33961;
var inst_33944 = inst_33960;
var inst_33945 = inst_33962;
var inst_33946 = (0);
var state_34083__$1 = (function (){var statearr_34109 = state_34083;
(statearr_34109[(7)] = inst_33944);

(statearr_34109[(8)] = inst_33943);

(statearr_34109[(9)] = inst_33946);

(statearr_34109[(10)] = inst_33945);

return statearr_34109;
})();
var statearr_34110_34191 = state_34083__$1;
(statearr_34110_34191[(2)] = null);

(statearr_34110_34191[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (22))){
var inst_34000 = (state_34083[(23)]);
var inst_34004 = (state_34083[(24)]);
var inst_33999 = (state_34083[(25)]);
var inst_33996 = (state_34083[(19)]);
var inst_33999__$1 = (state_34083[(2)]);
var inst_34000__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33999__$1);
var inst_34001 = (function (){var all_files = inst_33996;
var res_SINGLEQUOTE_ = inst_33999__$1;
var res = inst_34000__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34000,inst_34004,inst_33999,inst_33996,inst_33999__$1,inst_34000__$1,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33678_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33678_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34000,inst_34004,inst_33999,inst_33996,inst_33999__$1,inst_34000__$1,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34002 = cljs.core.filter.call(null,inst_34001,inst_33999__$1);
var inst_34003 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34004__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34003);
var inst_34005 = cljs.core.not_empty.call(null,inst_34004__$1);
var state_34083__$1 = (function (){var statearr_34111 = state_34083;
(statearr_34111[(23)] = inst_34000__$1);

(statearr_34111[(24)] = inst_34004__$1);

(statearr_34111[(25)] = inst_33999__$1);

(statearr_34111[(26)] = inst_34002);

return statearr_34111;
})();
if(cljs.core.truth_(inst_34005)){
var statearr_34112_34192 = state_34083__$1;
(statearr_34112_34192[(1)] = (23));

} else {
var statearr_34113_34193 = state_34083__$1;
(statearr_34113_34193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (36))){
var state_34083__$1 = state_34083;
var statearr_34114_34194 = state_34083__$1;
(statearr_34114_34194[(2)] = false);

(statearr_34114_34194[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (41))){
var inst_34058 = (state_34083[(20)]);
var inst_34062 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34063 = cljs.core.map.call(null,inst_34062,inst_34058);
var inst_34064 = cljs.core.pr_str.call(null,inst_34063);
var inst_34065 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34064)].join('');
var inst_34066 = figwheel.client.utils.log.call(null,inst_34065);
var state_34083__$1 = state_34083;
var statearr_34115_34195 = state_34083__$1;
(statearr_34115_34195[(2)] = inst_34066);

(statearr_34115_34195[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (43))){
var inst_34059 = (state_34083[(21)]);
var inst_34069 = (state_34083[(2)]);
var inst_34070 = cljs.core.not_empty.call(null,inst_34059);
var state_34083__$1 = (function (){var statearr_34116 = state_34083;
(statearr_34116[(27)] = inst_34069);

return statearr_34116;
})();
if(cljs.core.truth_(inst_34070)){
var statearr_34117_34196 = state_34083__$1;
(statearr_34117_34196[(1)] = (44));

} else {
var statearr_34118_34197 = state_34083__$1;
(statearr_34118_34197[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (29))){
var inst_34000 = (state_34083[(23)]);
var inst_34004 = (state_34083[(24)]);
var inst_33999 = (state_34083[(25)]);
var inst_33996 = (state_34083[(19)]);
var inst_34036 = (state_34083[(16)]);
var inst_34002 = (state_34083[(26)]);
var inst_34032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34035 = (function (){var all_files = inst_33996;
var res_SINGLEQUOTE_ = inst_33999;
var res = inst_34000;
var files_not_loaded = inst_34002;
var dependencies_that_loaded = inst_34004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34000,inst_34004,inst_33999,inst_33996,inst_34036,inst_34002,inst_34032,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34034){
var map__34119 = p__34034;
var map__34119__$1 = ((((!((map__34119 == null)))?((((map__34119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34119):map__34119);
var namespace = cljs.core.get.call(null,map__34119__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34000,inst_34004,inst_33999,inst_33996,inst_34036,inst_34002,inst_34032,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34036__$1 = cljs.core.group_by.call(null,inst_34035,inst_34002);
var inst_34038 = (inst_34036__$1 == null);
var inst_34039 = cljs.core.not.call(null,inst_34038);
var state_34083__$1 = (function (){var statearr_34121 = state_34083;
(statearr_34121[(28)] = inst_34032);

(statearr_34121[(16)] = inst_34036__$1);

return statearr_34121;
})();
if(inst_34039){
var statearr_34122_34198 = state_34083__$1;
(statearr_34122_34198[(1)] = (32));

} else {
var statearr_34123_34199 = state_34083__$1;
(statearr_34123_34199[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (44))){
var inst_34059 = (state_34083[(21)]);
var inst_34072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34059);
var inst_34073 = cljs.core.pr_str.call(null,inst_34072);
var inst_34074 = [cljs.core.str("not required: "),cljs.core.str(inst_34073)].join('');
var inst_34075 = figwheel.client.utils.log.call(null,inst_34074);
var state_34083__$1 = state_34083;
var statearr_34124_34200 = state_34083__$1;
(statearr_34124_34200[(2)] = inst_34075);

(statearr_34124_34200[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (6))){
var inst_33977 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34125_34201 = state_34083__$1;
(statearr_34125_34201[(2)] = inst_33977);

(statearr_34125_34201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (28))){
var inst_34002 = (state_34083[(26)]);
var inst_34029 = (state_34083[(2)]);
var inst_34030 = cljs.core.not_empty.call(null,inst_34002);
var state_34083__$1 = (function (){var statearr_34126 = state_34083;
(statearr_34126[(29)] = inst_34029);

return statearr_34126;
})();
if(cljs.core.truth_(inst_34030)){
var statearr_34127_34202 = state_34083__$1;
(statearr_34127_34202[(1)] = (29));

} else {
var statearr_34128_34203 = state_34083__$1;
(statearr_34128_34203[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (25))){
var inst_34000 = (state_34083[(23)]);
var inst_34016 = (state_34083[(2)]);
var inst_34017 = cljs.core.not_empty.call(null,inst_34000);
var state_34083__$1 = (function (){var statearr_34129 = state_34083;
(statearr_34129[(30)] = inst_34016);

return statearr_34129;
})();
if(cljs.core.truth_(inst_34017)){
var statearr_34130_34204 = state_34083__$1;
(statearr_34130_34204[(1)] = (26));

} else {
var statearr_34131_34205 = state_34083__$1;
(statearr_34131_34205[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (34))){
var inst_34052 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_34052)){
var statearr_34132_34206 = state_34083__$1;
(statearr_34132_34206[(1)] = (38));

} else {
var statearr_34133_34207 = state_34083__$1;
(statearr_34133_34207[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (17))){
var state_34083__$1 = state_34083;
var statearr_34134_34208 = state_34083__$1;
(statearr_34134_34208[(2)] = recompile_dependents);

(statearr_34134_34208[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (3))){
var state_34083__$1 = state_34083;
var statearr_34135_34209 = state_34083__$1;
(statearr_34135_34209[(2)] = null);

(statearr_34135_34209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (12))){
var inst_33973 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34136_34210 = state_34083__$1;
(statearr_34136_34210[(2)] = inst_33973);

(statearr_34136_34210[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (2))){
var inst_33935 = (state_34083[(13)]);
var inst_33942 = cljs.core.seq.call(null,inst_33935);
var inst_33943 = inst_33942;
var inst_33944 = null;
var inst_33945 = (0);
var inst_33946 = (0);
var state_34083__$1 = (function (){var statearr_34137 = state_34083;
(statearr_34137[(7)] = inst_33944);

(statearr_34137[(8)] = inst_33943);

(statearr_34137[(9)] = inst_33946);

(statearr_34137[(10)] = inst_33945);

return statearr_34137;
})();
var statearr_34138_34211 = state_34083__$1;
(statearr_34138_34211[(2)] = null);

(statearr_34138_34211[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (23))){
var inst_34000 = (state_34083[(23)]);
var inst_34004 = (state_34083[(24)]);
var inst_33999 = (state_34083[(25)]);
var inst_33996 = (state_34083[(19)]);
var inst_34002 = (state_34083[(26)]);
var inst_34007 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34009 = (function (){var all_files = inst_33996;
var res_SINGLEQUOTE_ = inst_33999;
var res = inst_34000;
var files_not_loaded = inst_34002;
var dependencies_that_loaded = inst_34004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34000,inst_34004,inst_33999,inst_33996,inst_34002,inst_34007,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34008){
var map__34139 = p__34008;
var map__34139__$1 = ((((!((map__34139 == null)))?((((map__34139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34139):map__34139);
var request_url = cljs.core.get.call(null,map__34139__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34000,inst_34004,inst_33999,inst_33996,inst_34002,inst_34007,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34010 = cljs.core.reverse.call(null,inst_34004);
var inst_34011 = cljs.core.map.call(null,inst_34009,inst_34010);
var inst_34012 = cljs.core.pr_str.call(null,inst_34011);
var inst_34013 = figwheel.client.utils.log.call(null,inst_34012);
var state_34083__$1 = (function (){var statearr_34141 = state_34083;
(statearr_34141[(31)] = inst_34007);

return statearr_34141;
})();
var statearr_34142_34212 = state_34083__$1;
(statearr_34142_34212[(2)] = inst_34013);

(statearr_34142_34212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (35))){
var state_34083__$1 = state_34083;
var statearr_34143_34213 = state_34083__$1;
(statearr_34143_34213[(2)] = true);

(statearr_34143_34213[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (19))){
var inst_33986 = (state_34083[(12)]);
var inst_33992 = figwheel.client.file_reloading.expand_files.call(null,inst_33986);
var state_34083__$1 = state_34083;
var statearr_34144_34214 = state_34083__$1;
(statearr_34144_34214[(2)] = inst_33992);

(statearr_34144_34214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (11))){
var state_34083__$1 = state_34083;
var statearr_34145_34215 = state_34083__$1;
(statearr_34145_34215[(2)] = null);

(statearr_34145_34215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (9))){
var inst_33975 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34146_34216 = state_34083__$1;
(statearr_34146_34216[(2)] = inst_33975);

(statearr_34146_34216[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (5))){
var inst_33946 = (state_34083[(9)]);
var inst_33945 = (state_34083[(10)]);
var inst_33948 = (inst_33946 < inst_33945);
var inst_33949 = inst_33948;
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_33949)){
var statearr_34147_34217 = state_34083__$1;
(statearr_34147_34217[(1)] = (7));

} else {
var statearr_34148_34218 = state_34083__$1;
(statearr_34148_34218[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (14))){
var inst_33956 = (state_34083[(22)]);
var inst_33965 = cljs.core.first.call(null,inst_33956);
var inst_33966 = figwheel.client.file_reloading.eval_body.call(null,inst_33965,opts);
var inst_33967 = cljs.core.next.call(null,inst_33956);
var inst_33943 = inst_33967;
var inst_33944 = null;
var inst_33945 = (0);
var inst_33946 = (0);
var state_34083__$1 = (function (){var statearr_34149 = state_34083;
(statearr_34149[(7)] = inst_33944);

(statearr_34149[(8)] = inst_33943);

(statearr_34149[(9)] = inst_33946);

(statearr_34149[(10)] = inst_33945);

(statearr_34149[(32)] = inst_33966);

return statearr_34149;
})();
var statearr_34150_34219 = state_34083__$1;
(statearr_34150_34219[(2)] = null);

(statearr_34150_34219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (45))){
var state_34083__$1 = state_34083;
var statearr_34151_34220 = state_34083__$1;
(statearr_34151_34220[(2)] = null);

(statearr_34151_34220[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (26))){
var inst_34000 = (state_34083[(23)]);
var inst_34004 = (state_34083[(24)]);
var inst_33999 = (state_34083[(25)]);
var inst_33996 = (state_34083[(19)]);
var inst_34002 = (state_34083[(26)]);
var inst_34019 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34021 = (function (){var all_files = inst_33996;
var res_SINGLEQUOTE_ = inst_33999;
var res = inst_34000;
var files_not_loaded = inst_34002;
var dependencies_that_loaded = inst_34004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34000,inst_34004,inst_33999,inst_33996,inst_34002,inst_34019,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34020){
var map__34152 = p__34020;
var map__34152__$1 = ((((!((map__34152 == null)))?((((map__34152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34152):map__34152);
var namespace = cljs.core.get.call(null,map__34152__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34152__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34000,inst_34004,inst_33999,inst_33996,inst_34002,inst_34019,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34022 = cljs.core.map.call(null,inst_34021,inst_34000);
var inst_34023 = cljs.core.pr_str.call(null,inst_34022);
var inst_34024 = figwheel.client.utils.log.call(null,inst_34023);
var inst_34025 = (function (){var all_files = inst_33996;
var res_SINGLEQUOTE_ = inst_33999;
var res = inst_34000;
var files_not_loaded = inst_34002;
var dependencies_that_loaded = inst_34004;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34000,inst_34004,inst_33999,inst_33996,inst_34002,inst_34019,inst_34021,inst_34022,inst_34023,inst_34024,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34000,inst_34004,inst_33999,inst_33996,inst_34002,inst_34019,inst_34021,inst_34022,inst_34023,inst_34024,state_val_34084,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34026 = setTimeout(inst_34025,(10));
var state_34083__$1 = (function (){var statearr_34154 = state_34083;
(statearr_34154[(33)] = inst_34024);

(statearr_34154[(34)] = inst_34019);

return statearr_34154;
})();
var statearr_34155_34221 = state_34083__$1;
(statearr_34155_34221[(2)] = inst_34026);

(statearr_34155_34221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (16))){
var state_34083__$1 = state_34083;
var statearr_34156_34222 = state_34083__$1;
(statearr_34156_34222[(2)] = reload_dependents);

(statearr_34156_34222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (38))){
var inst_34036 = (state_34083[(16)]);
var inst_34054 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34036);
var state_34083__$1 = state_34083;
var statearr_34157_34223 = state_34083__$1;
(statearr_34157_34223[(2)] = inst_34054);

(statearr_34157_34223[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (30))){
var state_34083__$1 = state_34083;
var statearr_34158_34224 = state_34083__$1;
(statearr_34158_34224[(2)] = null);

(statearr_34158_34224[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (10))){
var inst_33956 = (state_34083[(22)]);
var inst_33958 = cljs.core.chunked_seq_QMARK_.call(null,inst_33956);
var state_34083__$1 = state_34083;
if(inst_33958){
var statearr_34159_34225 = state_34083__$1;
(statearr_34159_34225[(1)] = (13));

} else {
var statearr_34160_34226 = state_34083__$1;
(statearr_34160_34226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (18))){
var inst_33990 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
if(cljs.core.truth_(inst_33990)){
var statearr_34161_34227 = state_34083__$1;
(statearr_34161_34227[(1)] = (19));

} else {
var statearr_34162_34228 = state_34083__$1;
(statearr_34162_34228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (42))){
var state_34083__$1 = state_34083;
var statearr_34163_34229 = state_34083__$1;
(statearr_34163_34229[(2)] = null);

(statearr_34163_34229[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (37))){
var inst_34049 = (state_34083[(2)]);
var state_34083__$1 = state_34083;
var statearr_34164_34230 = state_34083__$1;
(statearr_34164_34230[(2)] = inst_34049);

(statearr_34164_34230[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34084 === (8))){
var inst_33956 = (state_34083[(22)]);
var inst_33943 = (state_34083[(8)]);
var inst_33956__$1 = cljs.core.seq.call(null,inst_33943);
var state_34083__$1 = (function (){var statearr_34165 = state_34083;
(statearr_34165[(22)] = inst_33956__$1);

return statearr_34165;
})();
if(inst_33956__$1){
var statearr_34166_34231 = state_34083__$1;
(statearr_34166_34231[(1)] = (10));

} else {
var statearr_34167_34232 = state_34083__$1;
(statearr_34167_34232[(1)] = (11));

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
});})(c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29638__auto__,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____0 = (function (){
var statearr_34171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34171[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__);

(statearr_34171[(1)] = (1));

return statearr_34171;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____1 = (function (state_34083){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_34083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e34172){if((e34172 instanceof Object)){
var ex__29642__auto__ = e34172;
var statearr_34173_34233 = state_34083;
(statearr_34173_34233[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34234 = state_34083;
state_34083 = G__34234;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__ = function(state_34083){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____1.call(this,state_34083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29752__auto__ = (function (){var statearr_34174 = f__29751__auto__.call(null);
(statearr_34174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_34174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,map__33928,map__33928__$1,opts,before_jsload,on_jsload,reload_dependents,map__33929,map__33929__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29750__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34237,link){
var map__34240 = p__34237;
var map__34240__$1 = ((((!((map__34240 == null)))?((((map__34240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34240):map__34240);
var file = cljs.core.get.call(null,map__34240__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34240,map__34240__$1,file){
return (function (p1__34235_SHARP_,p2__34236_SHARP_){
if(cljs.core._EQ_.call(null,p1__34235_SHARP_,p2__34236_SHARP_)){
return p1__34235_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34240,map__34240__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34246){
var map__34247 = p__34246;
var map__34247__$1 = ((((!((map__34247 == null)))?((((map__34247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34247.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34247):map__34247);
var match_length = cljs.core.get.call(null,map__34247__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34247__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34242_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34242_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args34249 = [];
var len__26441__auto___34252 = arguments.length;
var i__26442__auto___34253 = (0);
while(true){
if((i__26442__auto___34253 < len__26441__auto___34252)){
args34249.push((arguments[i__26442__auto___34253]));

var G__34254 = (i__26442__auto___34253 + (1));
i__26442__auto___34253 = G__34254;
continue;
} else {
}
break;
}

var G__34251 = args34249.length;
switch (G__34251) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34249.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34256_SHARP_,p2__34257_SHARP_){
return cljs.core.assoc.call(null,p1__34256_SHARP_,cljs.core.get.call(null,p2__34257_SHARP_,key),p2__34257_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34258){
var map__34261 = p__34258;
var map__34261__$1 = ((((!((map__34261 == null)))?((((map__34261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34261):map__34261);
var f_data = map__34261__$1;
var file = cljs.core.get.call(null,map__34261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34263,p__34264){
var map__34273 = p__34263;
var map__34273__$1 = ((((!((map__34273 == null)))?((((map__34273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34273):map__34273);
var opts = map__34273__$1;
var on_cssload = cljs.core.get.call(null,map__34273__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34274 = p__34264;
var map__34274__$1 = ((((!((map__34274 == null)))?((((map__34274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34274):map__34274);
var files_msg = map__34274__$1;
var files = cljs.core.get.call(null,map__34274__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34277_34281 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34278_34282 = null;
var count__34279_34283 = (0);
var i__34280_34284 = (0);
while(true){
if((i__34280_34284 < count__34279_34283)){
var f_34285 = cljs.core._nth.call(null,chunk__34278_34282,i__34280_34284);
figwheel.client.file_reloading.reload_css_file.call(null,f_34285);

var G__34286 = seq__34277_34281;
var G__34287 = chunk__34278_34282;
var G__34288 = count__34279_34283;
var G__34289 = (i__34280_34284 + (1));
seq__34277_34281 = G__34286;
chunk__34278_34282 = G__34287;
count__34279_34283 = G__34288;
i__34280_34284 = G__34289;
continue;
} else {
var temp__4657__auto___34290 = cljs.core.seq.call(null,seq__34277_34281);
if(temp__4657__auto___34290){
var seq__34277_34291__$1 = temp__4657__auto___34290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34277_34291__$1)){
var c__26147__auto___34292 = cljs.core.chunk_first.call(null,seq__34277_34291__$1);
var G__34293 = cljs.core.chunk_rest.call(null,seq__34277_34291__$1);
var G__34294 = c__26147__auto___34292;
var G__34295 = cljs.core.count.call(null,c__26147__auto___34292);
var G__34296 = (0);
seq__34277_34281 = G__34293;
chunk__34278_34282 = G__34294;
count__34279_34283 = G__34295;
i__34280_34284 = G__34296;
continue;
} else {
var f_34297 = cljs.core.first.call(null,seq__34277_34291__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34297);

var G__34298 = cljs.core.next.call(null,seq__34277_34291__$1);
var G__34299 = null;
var G__34300 = (0);
var G__34301 = (0);
seq__34277_34281 = G__34298;
chunk__34278_34282 = G__34299;
count__34279_34283 = G__34300;
i__34280_34284 = G__34301;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34273,map__34273__$1,opts,on_cssload,map__34274,map__34274__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34273,map__34273__$1,opts,on_cssload,map__34274,map__34274__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489150130963