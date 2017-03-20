// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50306 = arguments.length;
var i__26442__auto___50307 = (0);
while(true){
if((i__26442__auto___50307 < len__26441__auto___50306)){
args__26448__auto__.push((arguments[i__26442__auto___50307]));

var G__50308 = (i__26442__auto___50307 + (1));
i__26442__auto___50307 = G__50308;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq50305){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50305));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50321 = arguments.length;
var i__26442__auto___50322 = (0);
while(true){
if((i__26442__auto___50322 < len__26441__auto___50321)){
args__26448__auto__.push((arguments[i__26442__auto___50322]));

var G__50323 = (i__26442__auto___50322 + (1));
i__26442__auto___50322 = G__50323;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq50317){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50317));
});

var g_QMARK__50326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_50327 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50326){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50326))
,null));
var mkg_50328 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50326,g_50327){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50326,g_50327))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__50326,g_50327,mkg_50328){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50326).call(null,x);
});})(g_QMARK__50326,g_50327,mkg_50328))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__50326,g_50327,mkg_50328){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_50328).call(null,gfn);
});})(g_QMARK__50326,g_50327,mkg_50328))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__50326,g_50327,mkg_50328){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_50327).call(null,generator);
});})(g_QMARK__50326,g_50327,mkg_50328))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__34326__auto___50422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__34326__auto___50422){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50427 = arguments.length;
var i__26442__auto___50432 = (0);
while(true){
if((i__26442__auto___50432 < len__26441__auto___50427)){
args__26448__auto__.push((arguments[i__26442__auto___50432]));

var G__50436 = (i__26442__auto___50432 + (1));
i__26442__auto___50432 = G__50436;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50422))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50422){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50422),args);
});})(g__34326__auto___50422))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__34326__auto___50422){
return (function (seq50335){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50335));
});})(g__34326__auto___50422))
;


var g__34326__auto___50449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__34326__auto___50449){
return (function cljs$spec$impl$gen$list(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50453 = arguments.length;
var i__26442__auto___50454 = (0);
while(true){
if((i__26442__auto___50454 < len__26441__auto___50453)){
args__26448__auto__.push((arguments[i__26442__auto___50454]));

var G__50455 = (i__26442__auto___50454 + (1));
i__26442__auto___50454 = G__50455;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50449))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50449){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50449),args);
});})(g__34326__auto___50449))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__34326__auto___50449){
return (function (seq50339){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50339));
});})(g__34326__auto___50449))
;


var g__34326__auto___50465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__34326__auto___50465){
return (function cljs$spec$impl$gen$map(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50474 = arguments.length;
var i__26442__auto___50475 = (0);
while(true){
if((i__26442__auto___50475 < len__26441__auto___50474)){
args__26448__auto__.push((arguments[i__26442__auto___50475]));

var G__50480 = (i__26442__auto___50475 + (1));
i__26442__auto___50475 = G__50480;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50465))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50465){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50465),args);
});})(g__34326__auto___50465))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__34326__auto___50465){
return (function (seq50344){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50344));
});})(g__34326__auto___50465))
;


var g__34326__auto___50483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__34326__auto___50483){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50484 = arguments.length;
var i__26442__auto___50485 = (0);
while(true){
if((i__26442__auto___50485 < len__26441__auto___50484)){
args__26448__auto__.push((arguments[i__26442__auto___50485]));

var G__50486 = (i__26442__auto___50485 + (1));
i__26442__auto___50485 = G__50486;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50483))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50483),args);
});})(g__34326__auto___50483))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__34326__auto___50483){
return (function (seq50345){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50345));
});})(g__34326__auto___50483))
;


var g__34326__auto___50487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__34326__auto___50487){
return (function cljs$spec$impl$gen$set(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50488 = arguments.length;
var i__26442__auto___50489 = (0);
while(true){
if((i__26442__auto___50489 < len__26441__auto___50488)){
args__26448__auto__.push((arguments[i__26442__auto___50489]));

var G__50490 = (i__26442__auto___50489 + (1));
i__26442__auto___50489 = G__50490;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50487))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50487),args);
});})(g__34326__auto___50487))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__34326__auto___50487){
return (function (seq50347){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50347));
});})(g__34326__auto___50487))
;


var g__34326__auto___50507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__34326__auto___50507){
return (function cljs$spec$impl$gen$vector(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50516 = arguments.length;
var i__26442__auto___50517 = (0);
while(true){
if((i__26442__auto___50517 < len__26441__auto___50516)){
args__26448__auto__.push((arguments[i__26442__auto___50517]));

var G__50518 = (i__26442__auto___50517 + (1));
i__26442__auto___50517 = G__50518;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50507))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50507){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50507),args);
});})(g__34326__auto___50507))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__34326__auto___50507){
return (function (seq50348){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50348));
});})(g__34326__auto___50507))
;


var g__34326__auto___50524 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__34326__auto___50524){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50530 = arguments.length;
var i__26442__auto___50531 = (0);
while(true){
if((i__26442__auto___50531 < len__26441__auto___50530)){
args__26448__auto__.push((arguments[i__26442__auto___50531]));

var G__50533 = (i__26442__auto___50531 + (1));
i__26442__auto___50531 = G__50533;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50524))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50524),args);
});})(g__34326__auto___50524))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__34326__auto___50524){
return (function (seq50350){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50350));
});})(g__34326__auto___50524))
;


var g__34326__auto___50548 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__34326__auto___50548){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50549 = arguments.length;
var i__26442__auto___50550 = (0);
while(true){
if((i__26442__auto___50550 < len__26441__auto___50549)){
args__26448__auto__.push((arguments[i__26442__auto___50550]));

var G__50555 = (i__26442__auto___50550 + (1));
i__26442__auto___50550 = G__50555;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50548))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50548){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50548),args);
});})(g__34326__auto___50548))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__34326__auto___50548){
return (function (seq50359){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50359));
});})(g__34326__auto___50548))
;


var g__34326__auto___50560 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__34326__auto___50560){
return (function cljs$spec$impl$gen$elements(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50566 = arguments.length;
var i__26442__auto___50567 = (0);
while(true){
if((i__26442__auto___50567 < len__26441__auto___50566)){
args__26448__auto__.push((arguments[i__26442__auto___50567]));

var G__50569 = (i__26442__auto___50567 + (1));
i__26442__auto___50567 = G__50569;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50560))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50560){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50560),args);
});})(g__34326__auto___50560))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__34326__auto___50560){
return (function (seq50360){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50360));
});})(g__34326__auto___50560))
;


var g__34326__auto___50579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__34326__auto___50579){
return (function cljs$spec$impl$gen$bind(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50588 = arguments.length;
var i__26442__auto___50589 = (0);
while(true){
if((i__26442__auto___50589 < len__26441__auto___50588)){
args__26448__auto__.push((arguments[i__26442__auto___50589]));

var G__50590 = (i__26442__auto___50589 + (1));
i__26442__auto___50589 = G__50590;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50579))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50579),args);
});})(g__34326__auto___50579))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__34326__auto___50579){
return (function (seq50361){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50361));
});})(g__34326__auto___50579))
;


var g__34326__auto___50602 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__34326__auto___50602){
return (function cljs$spec$impl$gen$choose(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50603 = arguments.length;
var i__26442__auto___50604 = (0);
while(true){
if((i__26442__auto___50604 < len__26441__auto___50603)){
args__26448__auto__.push((arguments[i__26442__auto___50604]));

var G__50611 = (i__26442__auto___50604 + (1));
i__26442__auto___50604 = G__50611;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50602))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50602){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50602),args);
});})(g__34326__auto___50602))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__34326__auto___50602){
return (function (seq50366){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50366));
});})(g__34326__auto___50602))
;


var g__34326__auto___50619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__34326__auto___50619){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50622 = arguments.length;
var i__26442__auto___50623 = (0);
while(true){
if((i__26442__auto___50623 < len__26441__auto___50622)){
args__26448__auto__.push((arguments[i__26442__auto___50623]));

var G__50629 = (i__26442__auto___50623 + (1));
i__26442__auto___50623 = G__50629;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50619))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50619),args);
});})(g__34326__auto___50619))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__34326__auto___50619){
return (function (seq50371){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50371));
});})(g__34326__auto___50619))
;


var g__34326__auto___50637 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__34326__auto___50637){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50639 = arguments.length;
var i__26442__auto___50641 = (0);
while(true){
if((i__26442__auto___50641 < len__26441__auto___50639)){
args__26448__auto__.push((arguments[i__26442__auto___50641]));

var G__50643 = (i__26442__auto___50641 + (1));
i__26442__auto___50641 = G__50643;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50637))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50637){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50637),args);
});})(g__34326__auto___50637))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__34326__auto___50637){
return (function (seq50376){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50376));
});})(g__34326__auto___50637))
;


var g__34326__auto___50646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__34326__auto___50646){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50657 = arguments.length;
var i__26442__auto___50658 = (0);
while(true){
if((i__26442__auto___50658 < len__26441__auto___50657)){
args__26448__auto__.push((arguments[i__26442__auto___50658]));

var G__50660 = (i__26442__auto___50658 + (1));
i__26442__auto___50658 = G__50660;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50646))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50646){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50646),args);
});})(g__34326__auto___50646))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__34326__auto___50646){
return (function (seq50378){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50378));
});})(g__34326__auto___50646))
;


var g__34326__auto___50661 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__34326__auto___50661){
return (function cljs$spec$impl$gen$sample(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50662 = arguments.length;
var i__26442__auto___50663 = (0);
while(true){
if((i__26442__auto___50663 < len__26441__auto___50662)){
args__26448__auto__.push((arguments[i__26442__auto___50663]));

var G__50664 = (i__26442__auto___50663 + (1));
i__26442__auto___50663 = G__50664;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50661))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50661){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50661),args);
});})(g__34326__auto___50661))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__34326__auto___50661){
return (function (seq50384){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50384));
});})(g__34326__auto___50661))
;


var g__34326__auto___50668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__34326__auto___50668){
return (function cljs$spec$impl$gen$return(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50669 = arguments.length;
var i__26442__auto___50670 = (0);
while(true){
if((i__26442__auto___50670 < len__26441__auto___50669)){
args__26448__auto__.push((arguments[i__26442__auto___50670]));

var G__50671 = (i__26442__auto___50670 + (1));
i__26442__auto___50670 = G__50671;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50668))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50668),args);
});})(g__34326__auto___50668))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__34326__auto___50668){
return (function (seq50393){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50393));
});})(g__34326__auto___50668))
;


var g__34326__auto___50677 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__34326__auto___50677){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50678 = arguments.length;
var i__26442__auto___50679 = (0);
while(true){
if((i__26442__auto___50679 < len__26441__auto___50678)){
args__26448__auto__.push((arguments[i__26442__auto___50679]));

var G__50680 = (i__26442__auto___50679 + (1));
i__26442__auto___50679 = G__50680;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50677))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50677){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50677),args);
});})(g__34326__auto___50677))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__34326__auto___50677){
return (function (seq50401){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50401));
});})(g__34326__auto___50677))
;


var g__34326__auto___50681 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__34326__auto___50681){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50682 = arguments.length;
var i__26442__auto___50683 = (0);
while(true){
if((i__26442__auto___50683 < len__26441__auto___50682)){
args__26448__auto__.push((arguments[i__26442__auto___50683]));

var G__50684 = (i__26442__auto___50683 + (1));
i__26442__auto___50683 = G__50684;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34326__auto___50681))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34326__auto___50681){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__34326__auto___50681),args);
});})(g__34326__auto___50681))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__34326__auto___50681){
return (function (seq50410){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50410));
});})(g__34326__auto___50681))
;

var g__34339__auto___50830 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__34339__auto___50830){
return (function cljs$spec$impl$gen$any(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50833 = arguments.length;
var i__26442__auto___50835 = (0);
while(true){
if((i__26442__auto___50835 < len__26441__auto___50833)){
args__26448__auto__.push((arguments[i__26442__auto___50835]));

var G__50836 = (i__26442__auto___50835 + (1));
i__26442__auto___50835 = G__50836;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___50830))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___50830){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___50830);
});})(g__34339__auto___50830))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__34339__auto___50830){
return (function (seq50714){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50714));
});})(g__34339__auto___50830))
;


var g__34339__auto___50839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__34339__auto___50839){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50840 = arguments.length;
var i__26442__auto___50841 = (0);
while(true){
if((i__26442__auto___50841 < len__26441__auto___50840)){
args__26448__auto__.push((arguments[i__26442__auto___50841]));

var G__50842 = (i__26442__auto___50841 + (1));
i__26442__auto___50841 = G__50842;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___50839))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___50839){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___50839);
});})(g__34339__auto___50839))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__34339__auto___50839){
return (function (seq50723){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50723));
});})(g__34339__auto___50839))
;


var g__34339__auto___50843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__34339__auto___50843){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50844 = arguments.length;
var i__26442__auto___50845 = (0);
while(true){
if((i__26442__auto___50845 < len__26441__auto___50844)){
args__26448__auto__.push((arguments[i__26442__auto___50845]));

var G__50861 = (i__26442__auto___50845 + (1));
i__26442__auto___50845 = G__50861;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___50843))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___50843){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___50843);
});})(g__34339__auto___50843))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__34339__auto___50843){
return (function (seq50731){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50731));
});})(g__34339__auto___50843))
;


var g__34339__auto___50885 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__34339__auto___50885){
return (function cljs$spec$impl$gen$char(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50896 = arguments.length;
var i__26442__auto___50897 = (0);
while(true){
if((i__26442__auto___50897 < len__26441__auto___50896)){
args__26448__auto__.push((arguments[i__26442__auto___50897]));

var G__50901 = (i__26442__auto___50897 + (1));
i__26442__auto___50897 = G__50901;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___50885))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___50885){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___50885);
});})(g__34339__auto___50885))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__34339__auto___50885){
return (function (seq50736){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50736));
});})(g__34339__auto___50885))
;


var g__34339__auto___50931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__34339__auto___50931){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50949 = arguments.length;
var i__26442__auto___50951 = (0);
while(true){
if((i__26442__auto___50951 < len__26441__auto___50949)){
args__26448__auto__.push((arguments[i__26442__auto___50951]));

var G__50956 = (i__26442__auto___50951 + (1));
i__26442__auto___50951 = G__50956;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___50931))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___50931){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___50931);
});})(g__34339__auto___50931))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__34339__auto___50931){
return (function (seq50742){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50742));
});})(g__34339__auto___50931))
;


var g__34339__auto___50969 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__34339__auto___50969){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50972 = arguments.length;
var i__26442__auto___50973 = (0);
while(true){
if((i__26442__auto___50973 < len__26441__auto___50972)){
args__26448__auto__.push((arguments[i__26442__auto___50973]));

var G__50974 = (i__26442__auto___50973 + (1));
i__26442__auto___50973 = G__50974;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___50969))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___50969){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___50969);
});})(g__34339__auto___50969))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__34339__auto___50969){
return (function (seq50747){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50747));
});})(g__34339__auto___50969))
;


var g__34339__auto___50978 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__34339__auto___50978){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50982 = arguments.length;
var i__26442__auto___50983 = (0);
while(true){
if((i__26442__auto___50983 < len__26441__auto___50982)){
args__26448__auto__.push((arguments[i__26442__auto___50983]));

var G__50984 = (i__26442__auto___50983 + (1));
i__26442__auto___50983 = G__50984;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___50978))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___50978){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___50978);
});})(g__34339__auto___50978))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__34339__auto___50978){
return (function (seq50751){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50751));
});})(g__34339__auto___50978))
;


var g__34339__auto___50989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__34339__auto___50989){
return (function cljs$spec$impl$gen$double(var_args){
var args__26448__auto__ = [];
var len__26441__auto___50992 = arguments.length;
var i__26442__auto___50993 = (0);
while(true){
if((i__26442__auto___50993 < len__26441__auto___50992)){
args__26448__auto__.push((arguments[i__26442__auto___50993]));

var G__50995 = (i__26442__auto___50993 + (1));
i__26442__auto___50993 = G__50995;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___50989))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___50989){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___50989);
});})(g__34339__auto___50989))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__34339__auto___50989){
return (function (seq50756){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50756));
});})(g__34339__auto___50989))
;


var g__34339__auto___51001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__34339__auto___51001){
return (function cljs$spec$impl$gen$int(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51002 = arguments.length;
var i__26442__auto___51003 = (0);
while(true){
if((i__26442__auto___51003 < len__26441__auto___51002)){
args__26448__auto__.push((arguments[i__26442__auto___51003]));

var G__51004 = (i__26442__auto___51003 + (1));
i__26442__auto___51003 = G__51004;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51001))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51001){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51001);
});})(g__34339__auto___51001))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__34339__auto___51001){
return (function (seq50762){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50762));
});})(g__34339__auto___51001))
;


var g__34339__auto___51007 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__34339__auto___51007){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51008 = arguments.length;
var i__26442__auto___51009 = (0);
while(true){
if((i__26442__auto___51009 < len__26441__auto___51008)){
args__26448__auto__.push((arguments[i__26442__auto___51009]));

var G__51010 = (i__26442__auto___51009 + (1));
i__26442__auto___51009 = G__51010;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51007))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51007){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51007);
});})(g__34339__auto___51007))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__34339__auto___51007){
return (function (seq50767){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50767));
});})(g__34339__auto___51007))
;


var g__34339__auto___51013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__34339__auto___51013){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51016 = arguments.length;
var i__26442__auto___51018 = (0);
while(true){
if((i__26442__auto___51018 < len__26441__auto___51016)){
args__26448__auto__.push((arguments[i__26442__auto___51018]));

var G__51022 = (i__26442__auto___51018 + (1));
i__26442__auto___51018 = G__51022;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51013))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51013){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51013);
});})(g__34339__auto___51013))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__34339__auto___51013){
return (function (seq50771){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50771));
});})(g__34339__auto___51013))
;


var g__34339__auto___51033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__34339__auto___51033){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51035 = arguments.length;
var i__26442__auto___51036 = (0);
while(true){
if((i__26442__auto___51036 < len__26441__auto___51035)){
args__26448__auto__.push((arguments[i__26442__auto___51036]));

var G__51038 = (i__26442__auto___51036 + (1));
i__26442__auto___51036 = G__51038;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51033))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51033){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51033);
});})(g__34339__auto___51033))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__34339__auto___51033){
return (function (seq50777){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50777));
});})(g__34339__auto___51033))
;


var g__34339__auto___51039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__34339__auto___51039){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51040 = arguments.length;
var i__26442__auto___51041 = (0);
while(true){
if((i__26442__auto___51041 < len__26441__auto___51040)){
args__26448__auto__.push((arguments[i__26442__auto___51041]));

var G__51042 = (i__26442__auto___51041 + (1));
i__26442__auto___51041 = G__51042;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51039))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51039){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51039);
});})(g__34339__auto___51039))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__34339__auto___51039){
return (function (seq50784){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50784));
});})(g__34339__auto___51039))
;


var g__34339__auto___51059 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__34339__auto___51059){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51068 = arguments.length;
var i__26442__auto___51070 = (0);
while(true){
if((i__26442__auto___51070 < len__26441__auto___51068)){
args__26448__auto__.push((arguments[i__26442__auto___51070]));

var G__51076 = (i__26442__auto___51070 + (1));
i__26442__auto___51070 = G__51076;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51059))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51059){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51059);
});})(g__34339__auto___51059))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__34339__auto___51059){
return (function (seq50788){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50788));
});})(g__34339__auto___51059))
;


var g__34339__auto___51112 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__34339__auto___51112){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51185 = arguments.length;
var i__26442__auto___51191 = (0);
while(true){
if((i__26442__auto___51191 < len__26441__auto___51185)){
args__26448__auto__.push((arguments[i__26442__auto___51191]));

var G__51215 = (i__26442__auto___51191 + (1));
i__26442__auto___51191 = G__51215;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51112))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51112){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51112);
});})(g__34339__auto___51112))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__34339__auto___51112){
return (function (seq50791){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50791));
});})(g__34339__auto___51112))
;


var g__34339__auto___51248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__34339__auto___51248){
return (function cljs$spec$impl$gen$string(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51260 = arguments.length;
var i__26442__auto___51261 = (0);
while(true){
if((i__26442__auto___51261 < len__26441__auto___51260)){
args__26448__auto__.push((arguments[i__26442__auto___51261]));

var G__51263 = (i__26442__auto___51261 + (1));
i__26442__auto___51261 = G__51263;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51248))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51248){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51248);
});})(g__34339__auto___51248))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__34339__auto___51248){
return (function (seq50807){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50807));
});})(g__34339__auto___51248))
;


var g__34339__auto___51281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__34339__auto___51281){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51291 = arguments.length;
var i__26442__auto___51292 = (0);
while(true){
if((i__26442__auto___51292 < len__26441__auto___51291)){
args__26448__auto__.push((arguments[i__26442__auto___51292]));

var G__51300 = (i__26442__auto___51292 + (1));
i__26442__auto___51292 = G__51300;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51281))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51281){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51281);
});})(g__34339__auto___51281))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__34339__auto___51281){
return (function (seq50812){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50812));
});})(g__34339__auto___51281))
;


var g__34339__auto___51316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__34339__auto___51316){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51325 = arguments.length;
var i__26442__auto___51327 = (0);
while(true){
if((i__26442__auto___51327 < len__26441__auto___51325)){
args__26448__auto__.push((arguments[i__26442__auto___51327]));

var G__51333 = (i__26442__auto___51327 + (1));
i__26442__auto___51327 = G__51333;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51316))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51316){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51316);
});})(g__34339__auto___51316))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__34339__auto___51316){
return (function (seq50820){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50820));
});})(g__34339__auto___51316))
;


var g__34339__auto___51347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__34339__auto___51347){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51357 = arguments.length;
var i__26442__auto___51358 = (0);
while(true){
if((i__26442__auto___51358 < len__26441__auto___51357)){
args__26448__auto__.push((arguments[i__26442__auto___51358]));

var G__51365 = (i__26442__auto___51358 + (1));
i__26442__auto___51358 = G__51365;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51347))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51347){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51347);
});})(g__34339__auto___51347))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__34339__auto___51347){
return (function (seq50827){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50827));
});})(g__34339__auto___51347))
;


var g__34339__auto___51382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__34339__auto___51382){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51387 = arguments.length;
var i__26442__auto___51388 = (0);
while(true){
if((i__26442__auto___51388 < len__26441__auto___51387)){
args__26448__auto__.push((arguments[i__26442__auto___51388]));

var G__51389 = (i__26442__auto___51388 + (1));
i__26442__auto___51388 = G__51389;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51382))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51382){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51382);
});})(g__34339__auto___51382))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__34339__auto___51382){
return (function (seq50828){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50828));
});})(g__34339__auto___51382))
;


var g__34339__auto___51400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__34339__auto___51400){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51407 = arguments.length;
var i__26442__auto___51417 = (0);
while(true){
if((i__26442__auto___51417 < len__26441__auto___51407)){
args__26448__auto__.push((arguments[i__26442__auto___51417]));

var G__51421 = (i__26442__auto___51417 + (1));
i__26442__auto___51417 = G__51421;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});})(g__34339__auto___51400))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__34339__auto___51400){
return (function (args){
return cljs.core.deref.call(null,g__34339__auto___51400);
});})(g__34339__auto___51400))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__34339__auto___51400){
return (function (seq50829){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50829));
});})(g__34339__auto___51400))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__26448__auto__ = [];
var len__26441__auto___51441 = arguments.length;
var i__26442__auto___51444 = (0);
while(true){
if((i__26442__auto___51444 < len__26441__auto___51441)){
args__26448__auto__.push((arguments[i__26442__auto___51444]));

var G__51448 = (i__26442__auto___51444 + (1));
i__26442__auto___51444 = G__51448;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((0) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26449__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__51427_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__51427_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq51428){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51428));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__51471_SHARP_){
return (new Date(p1__51471_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1489150143022