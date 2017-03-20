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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50338_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50338_SHARP_));
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
var seq__50355 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50356 = null;
var count__50357 = (0);
var i__50358 = (0);
while(true){
if((i__50358 < count__50357)){
var n = cljs.core._nth.call(null,chunk__50356,i__50358);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50362 = seq__50355;
var G__50363 = chunk__50356;
var G__50364 = count__50357;
var G__50365 = (i__50358 + (1));
seq__50355 = G__50362;
chunk__50356 = G__50363;
count__50357 = G__50364;
i__50358 = G__50365;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50355);
if(temp__4657__auto__){
var seq__50355__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50355__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__50355__$1);
var G__50367 = cljs.core.chunk_rest.call(null,seq__50355__$1);
var G__50368 = c__26147__auto__;
var G__50369 = cljs.core.count.call(null,c__26147__auto__);
var G__50370 = (0);
seq__50355 = G__50367;
chunk__50356 = G__50368;
count__50357 = G__50369;
i__50358 = G__50370;
continue;
} else {
var n = cljs.core.first.call(null,seq__50355__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__50372 = cljs.core.next.call(null,seq__50355__$1);
var G__50373 = null;
var G__50374 = (0);
var G__50375 = (0);
seq__50355 = G__50372;
chunk__50356 = G__50373;
count__50357 = G__50374;
i__50358 = G__50375;
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

var seq__50441_50456 = cljs.core.seq.call(null,deps);
var chunk__50442_50457 = null;
var count__50443_50458 = (0);
var i__50444_50459 = (0);
while(true){
if((i__50444_50459 < count__50443_50458)){
var dep_50460 = cljs.core._nth.call(null,chunk__50442_50457,i__50444_50459);
topo_sort_helper_STAR_.call(null,dep_50460,(depth + (1)),state);

var G__50461 = seq__50441_50456;
var G__50462 = chunk__50442_50457;
var G__50463 = count__50443_50458;
var G__50464 = (i__50444_50459 + (1));
seq__50441_50456 = G__50461;
chunk__50442_50457 = G__50462;
count__50443_50458 = G__50463;
i__50444_50459 = G__50464;
continue;
} else {
var temp__4657__auto___50466 = cljs.core.seq.call(null,seq__50441_50456);
if(temp__4657__auto___50466){
var seq__50441_50467__$1 = temp__4657__auto___50466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50441_50467__$1)){
var c__26147__auto___50468 = cljs.core.chunk_first.call(null,seq__50441_50467__$1);
var G__50469 = cljs.core.chunk_rest.call(null,seq__50441_50467__$1);
var G__50470 = c__26147__auto___50468;
var G__50471 = cljs.core.count.call(null,c__26147__auto___50468);
var G__50472 = (0);
seq__50441_50456 = G__50469;
chunk__50442_50457 = G__50470;
count__50443_50458 = G__50471;
i__50444_50459 = G__50472;
continue;
} else {
var dep_50473 = cljs.core.first.call(null,seq__50441_50467__$1);
topo_sort_helper_STAR_.call(null,dep_50473,(depth + (1)),state);

var G__50476 = cljs.core.next.call(null,seq__50441_50467__$1);
var G__50477 = null;
var G__50478 = (0);
var G__50479 = (0);
seq__50441_50456 = G__50476;
chunk__50442_50457 = G__50477;
count__50443_50458 = G__50478;
i__50444_50459 = G__50479;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50445){
var vec__50450 = p__50445;
var seq__50451 = cljs.core.seq.call(null,vec__50450);
var first__50452 = cljs.core.first.call(null,seq__50451);
var seq__50451__$1 = cljs.core.next.call(null,seq__50451);
var x = first__50452;
var xs = seq__50451__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50450,seq__50451,first__50452,seq__50451__$1,x,xs,get_deps__$1){
return (function (p1__50379_SHARP_){
return clojure.set.difference.call(null,p1__50379_SHARP_,x);
});})(vec__50450,seq__50451,first__50452,seq__50451__$1,x,xs,get_deps__$1))
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
var seq__50503 = cljs.core.seq.call(null,provides);
var chunk__50504 = null;
var count__50505 = (0);
var i__50506 = (0);
while(true){
if((i__50506 < count__50505)){
var prov = cljs.core._nth.call(null,chunk__50504,i__50506);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50508_50519 = cljs.core.seq.call(null,requires);
var chunk__50509_50520 = null;
var count__50510_50521 = (0);
var i__50511_50522 = (0);
while(true){
if((i__50511_50522 < count__50510_50521)){
var req_50523 = cljs.core._nth.call(null,chunk__50509_50520,i__50511_50522);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50523,prov);

var G__50525 = seq__50508_50519;
var G__50526 = chunk__50509_50520;
var G__50527 = count__50510_50521;
var G__50528 = (i__50511_50522 + (1));
seq__50508_50519 = G__50525;
chunk__50509_50520 = G__50526;
count__50510_50521 = G__50527;
i__50511_50522 = G__50528;
continue;
} else {
var temp__4657__auto___50529 = cljs.core.seq.call(null,seq__50508_50519);
if(temp__4657__auto___50529){
var seq__50508_50532__$1 = temp__4657__auto___50529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50508_50532__$1)){
var c__26147__auto___50534 = cljs.core.chunk_first.call(null,seq__50508_50532__$1);
var G__50535 = cljs.core.chunk_rest.call(null,seq__50508_50532__$1);
var G__50536 = c__26147__auto___50534;
var G__50537 = cljs.core.count.call(null,c__26147__auto___50534);
var G__50538 = (0);
seq__50508_50519 = G__50535;
chunk__50509_50520 = G__50536;
count__50510_50521 = G__50537;
i__50511_50522 = G__50538;
continue;
} else {
var req_50539 = cljs.core.first.call(null,seq__50508_50532__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50539,prov);

var G__50540 = cljs.core.next.call(null,seq__50508_50532__$1);
var G__50541 = null;
var G__50542 = (0);
var G__50543 = (0);
seq__50508_50519 = G__50540;
chunk__50509_50520 = G__50541;
count__50510_50521 = G__50542;
i__50511_50522 = G__50543;
continue;
}
} else {
}
}
break;
}

var G__50544 = seq__50503;
var G__50545 = chunk__50504;
var G__50546 = count__50505;
var G__50547 = (i__50506 + (1));
seq__50503 = G__50544;
chunk__50504 = G__50545;
count__50505 = G__50546;
i__50506 = G__50547;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__50503);
if(temp__4657__auto__){
var seq__50503__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50503__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__50503__$1);
var G__50551 = cljs.core.chunk_rest.call(null,seq__50503__$1);
var G__50552 = c__26147__auto__;
var G__50553 = cljs.core.count.call(null,c__26147__auto__);
var G__50554 = (0);
seq__50503 = G__50551;
chunk__50504 = G__50552;
count__50505 = G__50553;
i__50506 = G__50554;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50503__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50512_50556 = cljs.core.seq.call(null,requires);
var chunk__50513_50557 = null;
var count__50514_50558 = (0);
var i__50515_50559 = (0);
while(true){
if((i__50515_50559 < count__50514_50558)){
var req_50561 = cljs.core._nth.call(null,chunk__50513_50557,i__50515_50559);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50561,prov);

var G__50562 = seq__50512_50556;
var G__50563 = chunk__50513_50557;
var G__50564 = count__50514_50558;
var G__50565 = (i__50515_50559 + (1));
seq__50512_50556 = G__50562;
chunk__50513_50557 = G__50563;
count__50514_50558 = G__50564;
i__50515_50559 = G__50565;
continue;
} else {
var temp__4657__auto___50568__$1 = cljs.core.seq.call(null,seq__50512_50556);
if(temp__4657__auto___50568__$1){
var seq__50512_50570__$1 = temp__4657__auto___50568__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50512_50570__$1)){
var c__26147__auto___50571 = cljs.core.chunk_first.call(null,seq__50512_50570__$1);
var G__50572 = cljs.core.chunk_rest.call(null,seq__50512_50570__$1);
var G__50573 = c__26147__auto___50571;
var G__50574 = cljs.core.count.call(null,c__26147__auto___50571);
var G__50575 = (0);
seq__50512_50556 = G__50572;
chunk__50513_50557 = G__50573;
count__50514_50558 = G__50574;
i__50515_50559 = G__50575;
continue;
} else {
var req_50577 = cljs.core.first.call(null,seq__50512_50570__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50577,prov);

var G__50580 = cljs.core.next.call(null,seq__50512_50570__$1);
var G__50581 = null;
var G__50582 = (0);
var G__50583 = (0);
seq__50512_50556 = G__50580;
chunk__50513_50557 = G__50581;
count__50514_50558 = G__50582;
i__50515_50559 = G__50583;
continue;
}
} else {
}
}
break;
}

var G__50584 = cljs.core.next.call(null,seq__50503__$1);
var G__50585 = null;
var G__50586 = (0);
var G__50587 = (0);
seq__50503 = G__50584;
chunk__50504 = G__50585;
count__50505 = G__50586;
i__50506 = G__50587;
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
var seq__50597_50606 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50598_50607 = null;
var count__50599_50608 = (0);
var i__50600_50609 = (0);
while(true){
if((i__50600_50609 < count__50599_50608)){
var ns_50613 = cljs.core._nth.call(null,chunk__50598_50607,i__50600_50609);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50613);

var G__50615 = seq__50597_50606;
var G__50616 = chunk__50598_50607;
var G__50617 = count__50599_50608;
var G__50618 = (i__50600_50609 + (1));
seq__50597_50606 = G__50615;
chunk__50598_50607 = G__50616;
count__50599_50608 = G__50617;
i__50600_50609 = G__50618;
continue;
} else {
var temp__4657__auto___50620 = cljs.core.seq.call(null,seq__50597_50606);
if(temp__4657__auto___50620){
var seq__50597_50621__$1 = temp__4657__auto___50620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50597_50621__$1)){
var c__26147__auto___50624 = cljs.core.chunk_first.call(null,seq__50597_50621__$1);
var G__50625 = cljs.core.chunk_rest.call(null,seq__50597_50621__$1);
var G__50626 = c__26147__auto___50624;
var G__50627 = cljs.core.count.call(null,c__26147__auto___50624);
var G__50628 = (0);
seq__50597_50606 = G__50625;
chunk__50598_50607 = G__50626;
count__50599_50608 = G__50627;
i__50600_50609 = G__50628;
continue;
} else {
var ns_50631 = cljs.core.first.call(null,seq__50597_50621__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50631);

var G__50633 = cljs.core.next.call(null,seq__50597_50621__$1);
var G__50634 = null;
var G__50635 = (0);
var G__50636 = (0);
seq__50597_50606 = G__50633;
chunk__50598_50607 = G__50634;
count__50599_50608 = G__50635;
i__50600_50609 = G__50636;
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
var G__50638__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50638 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50640__i = 0, G__50640__a = new Array(arguments.length -  0);
while (G__50640__i < G__50640__a.length) {G__50640__a[G__50640__i] = arguments[G__50640__i + 0]; ++G__50640__i;}
  args = new cljs.core.IndexedSeq(G__50640__a,0);
} 
return G__50638__delegate.call(this,args);};
G__50638.cljs$lang$maxFixedArity = 0;
G__50638.cljs$lang$applyTo = (function (arglist__50642){
var args = cljs.core.seq(arglist__50642);
return G__50638__delegate(args);
});
G__50638.cljs$core$IFn$_invoke$arity$variadic = G__50638__delegate;
return G__50638;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50653 = cljs.core._EQ_;
var expr__50654 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50653.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50654))){
var path_parts = ((function (pred__50653,expr__50654){
return (function (p1__50647_SHARP_){
return clojure.string.split.call(null,p1__50647_SHARP_,/[\/\\]/);
});})(pred__50653,expr__50654))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__50653,expr__50654){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50659){if((e50659 instanceof Error)){
var e = e50659;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50659;

}
}})());
});
;})(path_parts,sep,root,pred__50653,expr__50654))
} else {
if(cljs.core.truth_(pred__50653.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50654))){
return ((function (pred__50653,expr__50654){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__50653,expr__50654){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__50653,expr__50654))
);

return deferred.addErrback(((function (deferred,pred__50653,expr__50654){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__50653,expr__50654))
);
});
;})(pred__50653,expr__50654))
} else {
return ((function (pred__50653,expr__50654){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50653,expr__50654))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50672,callback){
var map__50675 = p__50672;
var map__50675__$1 = ((((!((map__50675 == null)))?((((map__50675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50675):map__50675);
var file_msg = map__50675__$1;
var request_url = cljs.core.get.call(null,map__50675__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__50675,map__50675__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50675,map__50675__$1,file_msg,request_url))
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
return (function (state_50707){
var state_val_50708 = (state_50707[(1)]);
if((state_val_50708 === (7))){
var inst_50703 = (state_50707[(2)]);
var state_50707__$1 = state_50707;
var statearr_50709_50735 = state_50707__$1;
(statearr_50709_50735[(2)] = inst_50703);

(statearr_50709_50735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (1))){
var state_50707__$1 = state_50707;
var statearr_50710_50738 = state_50707__$1;
(statearr_50710_50738[(2)] = null);

(statearr_50710_50738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (4))){
var inst_50687 = (state_50707[(7)]);
var inst_50687__$1 = (state_50707[(2)]);
var state_50707__$1 = (function (){var statearr_50711 = state_50707;
(statearr_50711[(7)] = inst_50687__$1);

return statearr_50711;
})();
if(cljs.core.truth_(inst_50687__$1)){
var statearr_50712_50743 = state_50707__$1;
(statearr_50712_50743[(1)] = (5));

} else {
var statearr_50713_50744 = state_50707__$1;
(statearr_50713_50744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (6))){
var state_50707__$1 = state_50707;
var statearr_50715_50745 = state_50707__$1;
(statearr_50715_50745[(2)] = null);

(statearr_50715_50745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (3))){
var inst_50705 = (state_50707[(2)]);
var state_50707__$1 = state_50707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50707__$1,inst_50705);
} else {
if((state_val_50708 === (2))){
var state_50707__$1 = state_50707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50707__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50708 === (11))){
var inst_50699 = (state_50707[(2)]);
var state_50707__$1 = (function (){var statearr_50716 = state_50707;
(statearr_50716[(8)] = inst_50699);

return statearr_50716;
})();
var statearr_50717_50754 = state_50707__$1;
(statearr_50717_50754[(2)] = null);

(statearr_50717_50754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (9))){
var inst_50691 = (state_50707[(9)]);
var inst_50693 = (state_50707[(10)]);
var inst_50695 = inst_50693.call(null,inst_50691);
var state_50707__$1 = state_50707;
var statearr_50718_50755 = state_50707__$1;
(statearr_50718_50755[(2)] = inst_50695);

(statearr_50718_50755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (5))){
var inst_50687 = (state_50707[(7)]);
var inst_50689 = figwheel.client.file_reloading.blocking_load.call(null,inst_50687);
var state_50707__$1 = state_50707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50707__$1,(8),inst_50689);
} else {
if((state_val_50708 === (10))){
var inst_50691 = (state_50707[(9)]);
var inst_50697 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50691);
var state_50707__$1 = state_50707;
var statearr_50719_50757 = state_50707__$1;
(statearr_50719_50757[(2)] = inst_50697);

(statearr_50719_50757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50708 === (8))){
var inst_50687 = (state_50707[(7)]);
var inst_50693 = (state_50707[(10)]);
var inst_50691 = (state_50707[(2)]);
var inst_50692 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50693__$1 = cljs.core.get.call(null,inst_50692,inst_50687);
var state_50707__$1 = (function (){var statearr_50720 = state_50707;
(statearr_50720[(9)] = inst_50691);

(statearr_50720[(10)] = inst_50693__$1);

return statearr_50720;
})();
if(cljs.core.truth_(inst_50693__$1)){
var statearr_50721_50768 = state_50707__$1;
(statearr_50721_50768[(1)] = (9));

} else {
var statearr_50722_50769 = state_50707__$1;
(statearr_50722_50769[(1)] = (10));

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
var statearr_50727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50727[(0)] = figwheel$client$file_reloading$state_machine__29639__auto__);

(statearr_50727[(1)] = (1));

return statearr_50727;
});
var figwheel$client$file_reloading$state_machine__29639__auto____1 = (function (state_50707){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_50707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e50728){if((e50728 instanceof Object)){
var ex__29642__auto__ = e50728;
var statearr_50729_50776 = state_50707;
(statearr_50729_50776[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50778 = state_50707;
state_50707 = G__50778;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29639__auto__ = function(state_50707){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29639__auto____1.call(this,state_50707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29639__auto____0;
figwheel$client$file_reloading$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29639__auto____1;
return figwheel$client$file_reloading$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_50730 = f__29751__auto__.call(null);
(statearr_50730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_50730;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50785,callback){
var map__50789 = p__50785;
var map__50789__$1 = ((((!((map__50789 == null)))?((((map__50789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50789.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50789):map__50789);
var file_msg = map__50789__$1;
var namespace = cljs.core.get.call(null,map__50789__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50789,map__50789__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50789,map__50789__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50813){
var map__50821 = p__50813;
var map__50821__$1 = ((((!((map__50821 == null)))?((((map__50821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50821):map__50821);
var file_msg = map__50821__$1;
var namespace = cljs.core.get.call(null,map__50821__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50831,callback){
var map__50837 = p__50831;
var map__50837__$1 = ((((!((map__50837 == null)))?((((map__50837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50837):map__50837);
var file_msg = map__50837__$1;
var request_url = cljs.core.get.call(null,map__50837__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50837__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29750__auto___50971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___50971,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___50971,out){
return (function (state_50945){
var state_val_50946 = (state_50945[(1)]);
if((state_val_50946 === (1))){
var inst_50917 = cljs.core.seq.call(null,files);
var inst_50918 = cljs.core.first.call(null,inst_50917);
var inst_50919 = cljs.core.next.call(null,inst_50917);
var inst_50920 = files;
var state_50945__$1 = (function (){var statearr_50947 = state_50945;
(statearr_50947[(7)] = inst_50920);

(statearr_50947[(8)] = inst_50919);

(statearr_50947[(9)] = inst_50918);

return statearr_50947;
})();
var statearr_50948_50979 = state_50945__$1;
(statearr_50948_50979[(2)] = null);

(statearr_50948_50979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50946 === (2))){
var inst_50920 = (state_50945[(7)]);
var inst_50926 = (state_50945[(10)]);
var inst_50925 = cljs.core.seq.call(null,inst_50920);
var inst_50926__$1 = cljs.core.first.call(null,inst_50925);
var inst_50927 = cljs.core.next.call(null,inst_50925);
var inst_50928 = (inst_50926__$1 == null);
var inst_50929 = cljs.core.not.call(null,inst_50928);
var state_50945__$1 = (function (){var statearr_50950 = state_50945;
(statearr_50950[(11)] = inst_50927);

(statearr_50950[(10)] = inst_50926__$1);

return statearr_50950;
})();
if(inst_50929){
var statearr_50953_50986 = state_50945__$1;
(statearr_50953_50986[(1)] = (4));

} else {
var statearr_50954_50988 = state_50945__$1;
(statearr_50954_50988[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50946 === (3))){
var inst_50943 = (state_50945[(2)]);
var state_50945__$1 = state_50945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50945__$1,inst_50943);
} else {
if((state_val_50946 === (4))){
var inst_50926 = (state_50945[(10)]);
var inst_50932 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50926);
var state_50945__$1 = state_50945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50945__$1,(7),inst_50932);
} else {
if((state_val_50946 === (5))){
var inst_50938 = cljs.core.async.close_BANG_.call(null,out);
var state_50945__$1 = state_50945;
var statearr_50957_50994 = state_50945__$1;
(statearr_50957_50994[(2)] = inst_50938);

(statearr_50957_50994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50946 === (6))){
var inst_50940 = (state_50945[(2)]);
var state_50945__$1 = state_50945;
var statearr_50959_50998 = state_50945__$1;
(statearr_50959_50998[(2)] = inst_50940);

(statearr_50959_50998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50946 === (7))){
var inst_50927 = (state_50945[(11)]);
var inst_50934 = (state_50945[(2)]);
var inst_50935 = cljs.core.async.put_BANG_.call(null,out,inst_50934);
var inst_50920 = inst_50927;
var state_50945__$1 = (function (){var statearr_50960 = state_50945;
(statearr_50960[(7)] = inst_50920);

(statearr_50960[(12)] = inst_50935);

return statearr_50960;
})();
var statearr_50961_51005 = state_50945__$1;
(statearr_50961_51005[(2)] = null);

(statearr_50961_51005[(1)] = (2));


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
});})(c__29750__auto___50971,out))
;
return ((function (switch__29638__auto__,c__29750__auto___50971,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____0 = (function (){
var statearr_50966 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50966[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__);

(statearr_50966[(1)] = (1));

return statearr_50966;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____1 = (function (state_50945){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_50945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e50967){if((e50967 instanceof Object)){
var ex__29642__auto__ = e50967;
var statearr_50968_51011 = state_50945;
(statearr_50968_51011[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51012 = state_50945;
state_50945 = G__51012;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__ = function(state_50945){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____1.call(this,state_50945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___50971,out))
})();
var state__29752__auto__ = (function (){var statearr_50970 = f__29751__auto__.call(null);
(statearr_50970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___50971);

return statearr_50970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___50971,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51023,opts){
var map__51027 = p__51023;
var map__51027__$1 = ((((!((map__51027 == null)))?((((map__51027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51027):map__51027);
var eval_body = cljs.core.get.call(null,map__51027__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51027__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e51029){var e = e51029;
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
return (function (p1__51037_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51037_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__51051){
var vec__51052 = p__51051;
var k = cljs.core.nth.call(null,vec__51052,(0),null);
var v = cljs.core.nth.call(null,vec__51052,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51055){
var vec__51056 = p__51055;
var k = cljs.core.nth.call(null,vec__51056,(0),null);
var v = cljs.core.nth.call(null,vec__51056,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51071,p__51072){
var map__51467 = p__51071;
var map__51467__$1 = ((((!((map__51467 == null)))?((((map__51467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51467):map__51467);
var opts = map__51467__$1;
var before_jsload = cljs.core.get.call(null,map__51467__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__51467__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__51467__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__51468 = p__51072;
var map__51468__$1 = ((((!((map__51468 == null)))?((((map__51468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51468):map__51468);
var msg = map__51468__$1;
var files = cljs.core.get.call(null,map__51468__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__51468__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__51468__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_51633){
var state_val_51635 = (state_51633[(1)]);
if((state_val_51635 === (7))){
var inst_51484 = (state_51633[(7)]);
var inst_51483 = (state_51633[(8)]);
var inst_51486 = (state_51633[(9)]);
var inst_51485 = (state_51633[(10)]);
var inst_51494 = cljs.core._nth.call(null,inst_51484,inst_51486);
var inst_51495 = figwheel.client.file_reloading.eval_body.call(null,inst_51494,opts);
var inst_51496 = (inst_51486 + (1));
var tmp51637 = inst_51484;
var tmp51638 = inst_51483;
var tmp51639 = inst_51485;
var inst_51483__$1 = tmp51638;
var inst_51484__$1 = tmp51637;
var inst_51485__$1 = tmp51639;
var inst_51486__$1 = inst_51496;
var state_51633__$1 = (function (){var statearr_51643 = state_51633;
(statearr_51643[(7)] = inst_51484__$1);

(statearr_51643[(8)] = inst_51483__$1);

(statearr_51643[(9)] = inst_51486__$1);

(statearr_51643[(11)] = inst_51495);

(statearr_51643[(10)] = inst_51485__$1);

return statearr_51643;
})();
var statearr_51646_51839 = state_51633__$1;
(statearr_51646_51839[(2)] = null);

(statearr_51646_51839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (20))){
var inst_51532 = (state_51633[(12)]);
var inst_51541 = figwheel.client.file_reloading.sort_files.call(null,inst_51532);
var state_51633__$1 = state_51633;
var statearr_51647_51842 = state_51633__$1;
(statearr_51647_51842[(2)] = inst_51541);

(statearr_51647_51842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (27))){
var state_51633__$1 = state_51633;
var statearr_51648_51844 = state_51633__$1;
(statearr_51648_51844[(2)] = null);

(statearr_51648_51844[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (1))){
var inst_51475 = (state_51633[(13)]);
var inst_51472 = before_jsload.call(null,files);
var inst_51473 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_51474 = (function (){return ((function (inst_51475,inst_51472,inst_51473,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51062_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51062_SHARP_);
});
;})(inst_51475,inst_51472,inst_51473,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51475__$1 = cljs.core.filter.call(null,inst_51474,files);
var inst_51476 = cljs.core.not_empty.call(null,inst_51475__$1);
var state_51633__$1 = (function (){var statearr_51649 = state_51633;
(statearr_51649[(14)] = inst_51473);

(statearr_51649[(13)] = inst_51475__$1);

(statearr_51649[(15)] = inst_51472);

return statearr_51649;
})();
if(cljs.core.truth_(inst_51476)){
var statearr_51650_51846 = state_51633__$1;
(statearr_51650_51846[(1)] = (2));

} else {
var statearr_51651_51847 = state_51633__$1;
(statearr_51651_51847[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (24))){
var state_51633__$1 = state_51633;
var statearr_51652_51848 = state_51633__$1;
(statearr_51652_51848[(2)] = null);

(statearr_51652_51848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (39))){
var inst_51584 = (state_51633[(16)]);
var state_51633__$1 = state_51633;
var statearr_51653_51854 = state_51633__$1;
(statearr_51653_51854[(2)] = inst_51584);

(statearr_51653_51854[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (46))){
var inst_51626 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
var statearr_51654_51863 = state_51633__$1;
(statearr_51654_51863[(2)] = inst_51626);

(statearr_51654_51863[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (4))){
var inst_51526 = (state_51633[(2)]);
var inst_51527 = cljs.core.List.EMPTY;
var inst_51528 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_51527);
var inst_51529 = (function (){return ((function (inst_51526,inst_51527,inst_51528,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51066_SHARP_){
var and__25321__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51066_SHARP_);
if(cljs.core.truth_(and__25321__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51066_SHARP_));
} else {
return and__25321__auto__;
}
});
;})(inst_51526,inst_51527,inst_51528,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51530 = cljs.core.filter.call(null,inst_51529,files);
var inst_51531 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_51532 = cljs.core.concat.call(null,inst_51530,inst_51531);
var state_51633__$1 = (function (){var statearr_51656 = state_51633;
(statearr_51656[(12)] = inst_51532);

(statearr_51656[(17)] = inst_51528);

(statearr_51656[(18)] = inst_51526);

return statearr_51656;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_51657_51879 = state_51633__$1;
(statearr_51657_51879[(1)] = (16));

} else {
var statearr_51658_51880 = state_51633__$1;
(statearr_51658_51880[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (15))){
var inst_51516 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
var statearr_51659_51886 = state_51633__$1;
(statearr_51659_51886[(2)] = inst_51516);

(statearr_51659_51886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (21))){
var inst_51543 = (state_51633[(19)]);
var inst_51543__$1 = (state_51633[(2)]);
var inst_51544 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_51543__$1);
var state_51633__$1 = (function (){var statearr_51660 = state_51633;
(statearr_51660[(19)] = inst_51543__$1);

return statearr_51660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51633__$1,(22),inst_51544);
} else {
if((state_val_51635 === (31))){
var inst_51629 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51633__$1,inst_51629);
} else {
if((state_val_51635 === (32))){
var inst_51584 = (state_51633[(16)]);
var inst_51589 = inst_51584.cljs$lang$protocol_mask$partition0$;
var inst_51590 = (inst_51589 & (64));
var inst_51591 = inst_51584.cljs$core$ISeq$;
var inst_51592 = (cljs.core.PROTOCOL_SENTINEL === inst_51591);
var inst_51593 = (inst_51590) || (inst_51592);
var state_51633__$1 = state_51633;
if(cljs.core.truth_(inst_51593)){
var statearr_51661_51898 = state_51633__$1;
(statearr_51661_51898[(1)] = (35));

} else {
var statearr_51663_51901 = state_51633__$1;
(statearr_51663_51901[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (40))){
var inst_51606 = (state_51633[(20)]);
var inst_51605 = (state_51633[(2)]);
var inst_51606__$1 = cljs.core.get.call(null,inst_51605,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_51607 = cljs.core.get.call(null,inst_51605,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_51608 = cljs.core.not_empty.call(null,inst_51606__$1);
var state_51633__$1 = (function (){var statearr_51670 = state_51633;
(statearr_51670[(21)] = inst_51607);

(statearr_51670[(20)] = inst_51606__$1);

return statearr_51670;
})();
if(cljs.core.truth_(inst_51608)){
var statearr_51677_51902 = state_51633__$1;
(statearr_51677_51902[(1)] = (41));

} else {
var statearr_51679_51903 = state_51633__$1;
(statearr_51679_51903[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (33))){
var state_51633__$1 = state_51633;
var statearr_51686_51904 = state_51633__$1;
(statearr_51686_51904[(2)] = false);

(statearr_51686_51904[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (13))){
var inst_51499 = (state_51633[(22)]);
var inst_51504 = cljs.core.chunk_first.call(null,inst_51499);
var inst_51506 = cljs.core.chunk_rest.call(null,inst_51499);
var inst_51507 = cljs.core.count.call(null,inst_51504);
var inst_51483 = inst_51506;
var inst_51484 = inst_51504;
var inst_51485 = inst_51507;
var inst_51486 = (0);
var state_51633__$1 = (function (){var statearr_51687 = state_51633;
(statearr_51687[(7)] = inst_51484);

(statearr_51687[(8)] = inst_51483);

(statearr_51687[(9)] = inst_51486);

(statearr_51687[(10)] = inst_51485);

return statearr_51687;
})();
var statearr_51688_51905 = state_51633__$1;
(statearr_51688_51905[(2)] = null);

(statearr_51688_51905[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (22))){
var inst_51547 = (state_51633[(23)]);
var inst_51546 = (state_51633[(24)]);
var inst_51543 = (state_51633[(19)]);
var inst_51551 = (state_51633[(25)]);
var inst_51546__$1 = (state_51633[(2)]);
var inst_51547__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_51546__$1);
var inst_51548 = (function (){var all_files = inst_51543;
var res_SINGLEQUOTE_ = inst_51546__$1;
var res = inst_51547__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_51547,inst_51546,inst_51543,inst_51551,inst_51546__$1,inst_51547__$1,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51067_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51067_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_51547,inst_51546,inst_51543,inst_51551,inst_51546__$1,inst_51547__$1,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51549 = cljs.core.filter.call(null,inst_51548,inst_51546__$1);
var inst_51550 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_51551__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_51550);
var inst_51552 = cljs.core.not_empty.call(null,inst_51551__$1);
var state_51633__$1 = (function (){var statearr_51691 = state_51633;
(statearr_51691[(23)] = inst_51547__$1);

(statearr_51691[(24)] = inst_51546__$1);

(statearr_51691[(26)] = inst_51549);

(statearr_51691[(25)] = inst_51551__$1);

return statearr_51691;
})();
if(cljs.core.truth_(inst_51552)){
var statearr_51693_51917 = state_51633__$1;
(statearr_51693_51917[(1)] = (23));

} else {
var statearr_51694_51918 = state_51633__$1;
(statearr_51694_51918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (36))){
var state_51633__$1 = state_51633;
var statearr_51697_51919 = state_51633__$1;
(statearr_51697_51919[(2)] = false);

(statearr_51697_51919[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (41))){
var inst_51606 = (state_51633[(20)]);
var inst_51610 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_51611 = cljs.core.map.call(null,inst_51610,inst_51606);
var inst_51612 = cljs.core.pr_str.call(null,inst_51611);
var inst_51613 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_51612)].join('');
var inst_51614 = figwheel.client.utils.log.call(null,inst_51613);
var state_51633__$1 = state_51633;
var statearr_51701_51926 = state_51633__$1;
(statearr_51701_51926[(2)] = inst_51614);

(statearr_51701_51926[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (43))){
var inst_51607 = (state_51633[(21)]);
var inst_51617 = (state_51633[(2)]);
var inst_51618 = cljs.core.not_empty.call(null,inst_51607);
var state_51633__$1 = (function (){var statearr_51704 = state_51633;
(statearr_51704[(27)] = inst_51617);

return statearr_51704;
})();
if(cljs.core.truth_(inst_51618)){
var statearr_51705_51930 = state_51633__$1;
(statearr_51705_51930[(1)] = (44));

} else {
var statearr_51706_51931 = state_51633__$1;
(statearr_51706_51931[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (29))){
var inst_51547 = (state_51633[(23)]);
var inst_51546 = (state_51633[(24)]);
var inst_51549 = (state_51633[(26)]);
var inst_51543 = (state_51633[(19)]);
var inst_51551 = (state_51633[(25)]);
var inst_51584 = (state_51633[(16)]);
var inst_51580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_51583 = (function (){var all_files = inst_51543;
var res_SINGLEQUOTE_ = inst_51546;
var res = inst_51547;
var files_not_loaded = inst_51549;
var dependencies_that_loaded = inst_51551;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51547,inst_51546,inst_51549,inst_51543,inst_51551,inst_51584,inst_51580,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51582){
var map__51710 = p__51582;
var map__51710__$1 = ((((!((map__51710 == null)))?((((map__51710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51710):map__51710);
var namespace = cljs.core.get.call(null,map__51710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51547,inst_51546,inst_51549,inst_51543,inst_51551,inst_51584,inst_51580,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51584__$1 = cljs.core.group_by.call(null,inst_51583,inst_51549);
var inst_51586 = (inst_51584__$1 == null);
var inst_51587 = cljs.core.not.call(null,inst_51586);
var state_51633__$1 = (function (){var statearr_51728 = state_51633;
(statearr_51728[(28)] = inst_51580);

(statearr_51728[(16)] = inst_51584__$1);

return statearr_51728;
})();
if(inst_51587){
var statearr_51729_51944 = state_51633__$1;
(statearr_51729_51944[(1)] = (32));

} else {
var statearr_51730_51946 = state_51633__$1;
(statearr_51730_51946[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (44))){
var inst_51607 = (state_51633[(21)]);
var inst_51620 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51607);
var inst_51621 = cljs.core.pr_str.call(null,inst_51620);
var inst_51622 = [cljs.core.str("not required: "),cljs.core.str(inst_51621)].join('');
var inst_51623 = figwheel.client.utils.log.call(null,inst_51622);
var state_51633__$1 = state_51633;
var statearr_51732_51947 = state_51633__$1;
(statearr_51732_51947[(2)] = inst_51623);

(statearr_51732_51947[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (6))){
var inst_51523 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
var statearr_51736_51948 = state_51633__$1;
(statearr_51736_51948[(2)] = inst_51523);

(statearr_51736_51948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (28))){
var inst_51549 = (state_51633[(26)]);
var inst_51576 = (state_51633[(2)]);
var inst_51577 = cljs.core.not_empty.call(null,inst_51549);
var state_51633__$1 = (function (){var statearr_51738 = state_51633;
(statearr_51738[(29)] = inst_51576);

return statearr_51738;
})();
if(cljs.core.truth_(inst_51577)){
var statearr_51739_51950 = state_51633__$1;
(statearr_51739_51950[(1)] = (29));

} else {
var statearr_51741_51951 = state_51633__$1;
(statearr_51741_51951[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (25))){
var inst_51547 = (state_51633[(23)]);
var inst_51563 = (state_51633[(2)]);
var inst_51564 = cljs.core.not_empty.call(null,inst_51547);
var state_51633__$1 = (function (){var statearr_51744 = state_51633;
(statearr_51744[(30)] = inst_51563);

return statearr_51744;
})();
if(cljs.core.truth_(inst_51564)){
var statearr_51745_51954 = state_51633__$1;
(statearr_51745_51954[(1)] = (26));

} else {
var statearr_51746_51955 = state_51633__$1;
(statearr_51746_51955[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (34))){
var inst_51600 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
if(cljs.core.truth_(inst_51600)){
var statearr_51749_51958 = state_51633__$1;
(statearr_51749_51958[(1)] = (38));

} else {
var statearr_51750_51959 = state_51633__$1;
(statearr_51750_51959[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (17))){
var state_51633__$1 = state_51633;
var statearr_51753_51964 = state_51633__$1;
(statearr_51753_51964[(2)] = recompile_dependents);

(statearr_51753_51964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (3))){
var state_51633__$1 = state_51633;
var statearr_51754_51967 = state_51633__$1;
(statearr_51754_51967[(2)] = null);

(statearr_51754_51967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (12))){
var inst_51519 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
var statearr_51756_51968 = state_51633__$1;
(statearr_51756_51968[(2)] = inst_51519);

(statearr_51756_51968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (2))){
var inst_51475 = (state_51633[(13)]);
var inst_51482 = cljs.core.seq.call(null,inst_51475);
var inst_51483 = inst_51482;
var inst_51484 = null;
var inst_51485 = (0);
var inst_51486 = (0);
var state_51633__$1 = (function (){var statearr_51757 = state_51633;
(statearr_51757[(7)] = inst_51484);

(statearr_51757[(8)] = inst_51483);

(statearr_51757[(9)] = inst_51486);

(statearr_51757[(10)] = inst_51485);

return statearr_51757;
})();
var statearr_51758_51971 = state_51633__$1;
(statearr_51758_51971[(2)] = null);

(statearr_51758_51971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (23))){
var inst_51547 = (state_51633[(23)]);
var inst_51546 = (state_51633[(24)]);
var inst_51549 = (state_51633[(26)]);
var inst_51543 = (state_51633[(19)]);
var inst_51551 = (state_51633[(25)]);
var inst_51554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_51556 = (function (){var all_files = inst_51543;
var res_SINGLEQUOTE_ = inst_51546;
var res = inst_51547;
var files_not_loaded = inst_51549;
var dependencies_that_loaded = inst_51551;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51547,inst_51546,inst_51549,inst_51543,inst_51551,inst_51554,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51555){
var map__51761 = p__51555;
var map__51761__$1 = ((((!((map__51761 == null)))?((((map__51761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51761):map__51761);
var request_url = cljs.core.get.call(null,map__51761__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51547,inst_51546,inst_51549,inst_51543,inst_51551,inst_51554,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51557 = cljs.core.reverse.call(null,inst_51551);
var inst_51558 = cljs.core.map.call(null,inst_51556,inst_51557);
var inst_51559 = cljs.core.pr_str.call(null,inst_51558);
var inst_51560 = figwheel.client.utils.log.call(null,inst_51559);
var state_51633__$1 = (function (){var statearr_51763 = state_51633;
(statearr_51763[(31)] = inst_51554);

return statearr_51763;
})();
var statearr_51766_51985 = state_51633__$1;
(statearr_51766_51985[(2)] = inst_51560);

(statearr_51766_51985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (35))){
var state_51633__$1 = state_51633;
var statearr_51768_51989 = state_51633__$1;
(statearr_51768_51989[(2)] = true);

(statearr_51768_51989[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (19))){
var inst_51532 = (state_51633[(12)]);
var inst_51539 = figwheel.client.file_reloading.expand_files.call(null,inst_51532);
var state_51633__$1 = state_51633;
var statearr_51769_51996 = state_51633__$1;
(statearr_51769_51996[(2)] = inst_51539);

(statearr_51769_51996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (11))){
var state_51633__$1 = state_51633;
var statearr_51771_52003 = state_51633__$1;
(statearr_51771_52003[(2)] = null);

(statearr_51771_52003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (9))){
var inst_51521 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
var statearr_51772_52009 = state_51633__$1;
(statearr_51772_52009[(2)] = inst_51521);

(statearr_51772_52009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (5))){
var inst_51486 = (state_51633[(9)]);
var inst_51485 = (state_51633[(10)]);
var inst_51489 = (inst_51486 < inst_51485);
var inst_51490 = inst_51489;
var state_51633__$1 = state_51633;
if(cljs.core.truth_(inst_51490)){
var statearr_51773_52012 = state_51633__$1;
(statearr_51773_52012[(1)] = (7));

} else {
var statearr_51775_52015 = state_51633__$1;
(statearr_51775_52015[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (14))){
var inst_51499 = (state_51633[(22)]);
var inst_51511 = cljs.core.first.call(null,inst_51499);
var inst_51512 = figwheel.client.file_reloading.eval_body.call(null,inst_51511,opts);
var inst_51513 = cljs.core.next.call(null,inst_51499);
var inst_51483 = inst_51513;
var inst_51484 = null;
var inst_51485 = (0);
var inst_51486 = (0);
var state_51633__$1 = (function (){var statearr_51776 = state_51633;
(statearr_51776[(7)] = inst_51484);

(statearr_51776[(32)] = inst_51512);

(statearr_51776[(8)] = inst_51483);

(statearr_51776[(9)] = inst_51486);

(statearr_51776[(10)] = inst_51485);

return statearr_51776;
})();
var statearr_51777_52016 = state_51633__$1;
(statearr_51777_52016[(2)] = null);

(statearr_51777_52016[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (45))){
var state_51633__$1 = state_51633;
var statearr_51778_52017 = state_51633__$1;
(statearr_51778_52017[(2)] = null);

(statearr_51778_52017[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (26))){
var inst_51547 = (state_51633[(23)]);
var inst_51546 = (state_51633[(24)]);
var inst_51549 = (state_51633[(26)]);
var inst_51543 = (state_51633[(19)]);
var inst_51551 = (state_51633[(25)]);
var inst_51566 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_51568 = (function (){var all_files = inst_51543;
var res_SINGLEQUOTE_ = inst_51546;
var res = inst_51547;
var files_not_loaded = inst_51549;
var dependencies_that_loaded = inst_51551;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51547,inst_51546,inst_51549,inst_51543,inst_51551,inst_51566,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51567){
var map__51779 = p__51567;
var map__51779__$1 = ((((!((map__51779 == null)))?((((map__51779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51779):map__51779);
var namespace = cljs.core.get.call(null,map__51779__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__51779__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51547,inst_51546,inst_51549,inst_51543,inst_51551,inst_51566,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51569 = cljs.core.map.call(null,inst_51568,inst_51547);
var inst_51570 = cljs.core.pr_str.call(null,inst_51569);
var inst_51571 = figwheel.client.utils.log.call(null,inst_51570);
var inst_51572 = (function (){var all_files = inst_51543;
var res_SINGLEQUOTE_ = inst_51546;
var res = inst_51547;
var files_not_loaded = inst_51549;
var dependencies_that_loaded = inst_51551;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51547,inst_51546,inst_51549,inst_51543,inst_51551,inst_51566,inst_51568,inst_51569,inst_51570,inst_51571,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51547,inst_51546,inst_51549,inst_51543,inst_51551,inst_51566,inst_51568,inst_51569,inst_51570,inst_51571,state_val_51635,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51573 = setTimeout(inst_51572,(10));
var state_51633__$1 = (function (){var statearr_51782 = state_51633;
(statearr_51782[(33)] = inst_51566);

(statearr_51782[(34)] = inst_51571);

return statearr_51782;
})();
var statearr_51783_52089 = state_51633__$1;
(statearr_51783_52089[(2)] = inst_51573);

(statearr_51783_52089[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (16))){
var state_51633__$1 = state_51633;
var statearr_51785_52091 = state_51633__$1;
(statearr_51785_52091[(2)] = reload_dependents);

(statearr_51785_52091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (38))){
var inst_51584 = (state_51633[(16)]);
var inst_51602 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51584);
var state_51633__$1 = state_51633;
var statearr_51787_52093 = state_51633__$1;
(statearr_51787_52093[(2)] = inst_51602);

(statearr_51787_52093[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (30))){
var state_51633__$1 = state_51633;
var statearr_51788_52094 = state_51633__$1;
(statearr_51788_52094[(2)] = null);

(statearr_51788_52094[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (10))){
var inst_51499 = (state_51633[(22)]);
var inst_51501 = cljs.core.chunked_seq_QMARK_.call(null,inst_51499);
var state_51633__$1 = state_51633;
if(inst_51501){
var statearr_51789_52095 = state_51633__$1;
(statearr_51789_52095[(1)] = (13));

} else {
var statearr_51790_52096 = state_51633__$1;
(statearr_51790_52096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (18))){
var inst_51537 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
if(cljs.core.truth_(inst_51537)){
var statearr_51792_52097 = state_51633__$1;
(statearr_51792_52097[(1)] = (19));

} else {
var statearr_51793_52098 = state_51633__$1;
(statearr_51793_52098[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (42))){
var state_51633__$1 = state_51633;
var statearr_51794_52099 = state_51633__$1;
(statearr_51794_52099[(2)] = null);

(statearr_51794_52099[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (37))){
var inst_51597 = (state_51633[(2)]);
var state_51633__$1 = state_51633;
var statearr_51795_52100 = state_51633__$1;
(statearr_51795_52100[(2)] = inst_51597);

(statearr_51795_52100[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51635 === (8))){
var inst_51499 = (state_51633[(22)]);
var inst_51483 = (state_51633[(8)]);
var inst_51499__$1 = cljs.core.seq.call(null,inst_51483);
var state_51633__$1 = (function (){var statearr_51796 = state_51633;
(statearr_51796[(22)] = inst_51499__$1);

return statearr_51796;
})();
if(inst_51499__$1){
var statearr_51798_52103 = state_51633__$1;
(statearr_51798_52103[(1)] = (10));

} else {
var statearr_51799_52109 = state_51633__$1;
(statearr_51799_52109[(1)] = (11));

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
});})(c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29638__auto__,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____0 = (function (){
var statearr_51803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51803[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__);

(statearr_51803[(1)] = (1));

return statearr_51803;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____1 = (function (state_51633){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_51633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e51804){if((e51804 instanceof Object)){
var ex__29642__auto__ = e51804;
var statearr_51805_52132 = state_51633;
(statearr_51805_52132[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52140 = state_51633;
state_51633 = G__52140;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__ = function(state_51633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____1.call(this,state_51633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29752__auto__ = (function (){var statearr_51806 = f__29751__auto__.call(null);
(statearr_51806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_51806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,map__51467,map__51467__$1,opts,before_jsload,on_jsload,reload_dependents,map__51468,map__51468__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29750__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52196,link){
var map__52220 = p__52196;
var map__52220__$1 = ((((!((map__52220 == null)))?((((map__52220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52220):map__52220);
var file = cljs.core.get.call(null,map__52220__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52220,map__52220__$1,file){
return (function (p1__52185_SHARP_,p2__52187_SHARP_){
if(cljs.core._EQ_.call(null,p1__52185_SHARP_,p2__52187_SHARP_)){
return p1__52185_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52220,map__52220__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52271){
var map__52272 = p__52271;
var map__52272__$1 = ((((!((map__52272 == null)))?((((map__52272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52272):map__52272);
var match_length = cljs.core.get.call(null,map__52272__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52272__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52266_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52266_SHARP_);
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
var args52294 = [];
var len__26441__auto___52300 = arguments.length;
var i__26442__auto___52301 = (0);
while(true){
if((i__26442__auto___52301 < len__26441__auto___52300)){
args52294.push((arguments[i__26442__auto___52301]));

var G__52302 = (i__26442__auto___52301 + (1));
i__26442__auto___52301 = G__52302;
continue;
} else {
}
break;
}

var G__52299 = args52294.length;
switch (G__52299) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52294.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52322_SHARP_,p2__52323_SHARP_){
return cljs.core.assoc.call(null,p1__52322_SHARP_,cljs.core.get.call(null,p2__52323_SHARP_,key),p2__52323_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52333){
var map__52338 = p__52333;
var map__52338__$1 = ((((!((map__52338 == null)))?((((map__52338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52338):map__52338);
var f_data = map__52338__$1;
var file = cljs.core.get.call(null,map__52338__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52346,p__52347){
var map__52359 = p__52346;
var map__52359__$1 = ((((!((map__52359 == null)))?((((map__52359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52359):map__52359);
var opts = map__52359__$1;
var on_cssload = cljs.core.get.call(null,map__52359__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52360 = p__52347;
var map__52360__$1 = ((((!((map__52360 == null)))?((((map__52360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52360):map__52360);
var files_msg = map__52360__$1;
var files = cljs.core.get.call(null,map__52360__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52367_52396 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52368_52397 = null;
var count__52369_52398 = (0);
var i__52370_52399 = (0);
while(true){
if((i__52370_52399 < count__52369_52398)){
var f_52407 = cljs.core._nth.call(null,chunk__52368_52397,i__52370_52399);
figwheel.client.file_reloading.reload_css_file.call(null,f_52407);

var G__52409 = seq__52367_52396;
var G__52410 = chunk__52368_52397;
var G__52411 = count__52369_52398;
var G__52412 = (i__52370_52399 + (1));
seq__52367_52396 = G__52409;
chunk__52368_52397 = G__52410;
count__52369_52398 = G__52411;
i__52370_52399 = G__52412;
continue;
} else {
var temp__4657__auto___52418 = cljs.core.seq.call(null,seq__52367_52396);
if(temp__4657__auto___52418){
var seq__52367_52419__$1 = temp__4657__auto___52418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52367_52419__$1)){
var c__26147__auto___52425 = cljs.core.chunk_first.call(null,seq__52367_52419__$1);
var G__52426 = cljs.core.chunk_rest.call(null,seq__52367_52419__$1);
var G__52427 = c__26147__auto___52425;
var G__52428 = cljs.core.count.call(null,c__26147__auto___52425);
var G__52429 = (0);
seq__52367_52396 = G__52426;
chunk__52368_52397 = G__52427;
count__52369_52398 = G__52428;
i__52370_52399 = G__52429;
continue;
} else {
var f_52432 = cljs.core.first.call(null,seq__52367_52419__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52432);

var G__52436 = cljs.core.next.call(null,seq__52367_52419__$1);
var G__52437 = null;
var G__52438 = (0);
var G__52439 = (0);
seq__52367_52396 = G__52436;
chunk__52368_52397 = G__52437;
count__52369_52398 = G__52438;
i__52370_52399 = G__52439;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52359,map__52359__$1,opts,on_cssload,map__52360,map__52360__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52359,map__52359__$1,opts,on_cssload,map__52360,map__52360__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1489150143233