// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29795 = [];
var len__26441__auto___29801 = arguments.length;
var i__26442__auto___29802 = (0);
while(true){
if((i__26442__auto___29802 < len__26441__auto___29801)){
args29795.push((arguments[i__26442__auto___29802]));

var G__29803 = (i__26442__auto___29802 + (1));
i__26442__auto___29802 = G__29803;
continue;
} else {
}
break;
}

var G__29797 = args29795.length;
switch (G__29797) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29795.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29798 = (function (f,blockable,meta29799){
this.f = f;
this.blockable = blockable;
this.meta29799 = meta29799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29800,meta29799__$1){
var self__ = this;
var _29800__$1 = this;
return (new cljs.core.async.t_cljs$core$async29798(self__.f,self__.blockable,meta29799__$1));
});

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29800){
var self__ = this;
var _29800__$1 = this;
return self__.meta29799;
});

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29798.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29798.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29799","meta29799",-832385796,null)], null);
});

cljs.core.async.t_cljs$core$async29798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29798";

cljs.core.async.t_cljs$core$async29798.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async29798");
});

cljs.core.async.__GT_t_cljs$core$async29798 = (function cljs$core$async$__GT_t_cljs$core$async29798(f__$1,blockable__$1,meta29799){
return (new cljs.core.async.t_cljs$core$async29798(f__$1,blockable__$1,meta29799));
});

}

return (new cljs.core.async.t_cljs$core$async29798(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29807 = [];
var len__26441__auto___29810 = arguments.length;
var i__26442__auto___29811 = (0);
while(true){
if((i__26442__auto___29811 < len__26441__auto___29810)){
args29807.push((arguments[i__26442__auto___29811]));

var G__29812 = (i__26442__auto___29811 + (1));
i__26442__auto___29811 = G__29812;
continue;
} else {
}
break;
}

var G__29809 = args29807.length;
switch (G__29809) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29807.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29814 = [];
var len__26441__auto___29817 = arguments.length;
var i__26442__auto___29818 = (0);
while(true){
if((i__26442__auto___29818 < len__26441__auto___29817)){
args29814.push((arguments[i__26442__auto___29818]));

var G__29819 = (i__26442__auto___29818 + (1));
i__26442__auto___29818 = G__29819;
continue;
} else {
}
break;
}

var G__29816 = args29814.length;
switch (G__29816) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29814.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29821 = [];
var len__26441__auto___29824 = arguments.length;
var i__26442__auto___29825 = (0);
while(true){
if((i__26442__auto___29825 < len__26441__auto___29824)){
args29821.push((arguments[i__26442__auto___29825]));

var G__29826 = (i__26442__auto___29825 + (1));
i__26442__auto___29825 = G__29826;
continue;
} else {
}
break;
}

var G__29823 = args29821.length;
switch (G__29823) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29821.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29828 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29828);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29828,ret){
return (function (){
return fn1.call(null,val_29828);
});})(val_29828,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29829 = [];
var len__26441__auto___29832 = arguments.length;
var i__26442__auto___29833 = (0);
while(true){
if((i__26442__auto___29833 < len__26441__auto___29832)){
args29829.push((arguments[i__26442__auto___29833]));

var G__29834 = (i__26442__auto___29833 + (1));
i__26442__auto___29833 = G__29834;
continue;
} else {
}
break;
}

var G__29831 = args29829.length;
switch (G__29831) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29829.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26251__auto___29836 = n;
var x_29837 = (0);
while(true){
if((x_29837 < n__26251__auto___29836)){
(a[x_29837] = (0));

var G__29838 = (x_29837 + (1));
x_29837 = G__29838;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29839 = (i + (1));
i = G__29839;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29843 = (function (flag,meta29844){
this.flag = flag;
this.meta29844 = meta29844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29845,meta29844__$1){
var self__ = this;
var _29845__$1 = this;
return (new cljs.core.async.t_cljs$core$async29843(self__.flag,meta29844__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29845){
var self__ = this;
var _29845__$1 = this;
return self__.meta29844;
});})(flag))
;

cljs.core.async.t_cljs$core$async29843.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29843.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29843.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29844","meta29844",-417488360,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29843";

cljs.core.async.t_cljs$core$async29843.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async29843");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29843 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29843(flag__$1,meta29844){
return (new cljs.core.async.t_cljs$core$async29843(flag__$1,meta29844));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29843(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29849 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29849 = (function (flag,cb,meta29850){
this.flag = flag;
this.cb = cb;
this.meta29850 = meta29850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29851,meta29850__$1){
var self__ = this;
var _29851__$1 = this;
return (new cljs.core.async.t_cljs$core$async29849(self__.flag,self__.cb,meta29850__$1));
});

cljs.core.async.t_cljs$core$async29849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29851){
var self__ = this;
var _29851__$1 = this;
return self__.meta29850;
});

cljs.core.async.t_cljs$core$async29849.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29850","meta29850",351519749,null)], null);
});

cljs.core.async.t_cljs$core$async29849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29849";

cljs.core.async.t_cljs$core$async29849.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async29849");
});

cljs.core.async.__GT_t_cljs$core$async29849 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29849(flag__$1,cb__$1,meta29850){
return (new cljs.core.async.t_cljs$core$async29849(flag__$1,cb__$1,meta29850));
});

}

return (new cljs.core.async.t_cljs$core$async29849(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29852_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29852_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29853_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29853_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25333__auto__ = wport;
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29854 = (i + (1));
i = G__29854;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25333__auto__ = ret;
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25321__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25321__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25321__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26448__auto__ = [];
var len__26441__auto___29860 = arguments.length;
var i__26442__auto___29861 = (0);
while(true){
if((i__26442__auto___29861 < len__26441__auto___29860)){
args__26448__auto__.push((arguments[i__26442__auto___29861]));

var G__29862 = (i__26442__auto___29861 + (1));
i__26442__auto___29861 = G__29862;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29857){
var map__29858 = p__29857;
var map__29858__$1 = ((((!((map__29858 == null)))?((((map__29858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29858.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29858):map__29858);
var opts = map__29858__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29855){
var G__29856 = cljs.core.first.call(null,seq29855);
var seq29855__$1 = cljs.core.next.call(null,seq29855);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29856,seq29855__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29863 = [];
var len__26441__auto___29913 = arguments.length;
var i__26442__auto___29914 = (0);
while(true){
if((i__26442__auto___29914 < len__26441__auto___29913)){
args29863.push((arguments[i__26442__auto___29914]));

var G__29915 = (i__26442__auto___29914 + (1));
i__26442__auto___29914 = G__29915;
continue;
} else {
}
break;
}

var G__29865 = args29863.length;
switch (G__29865) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29863.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29750__auto___29917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___29917){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___29917){
return (function (state_29889){
var state_val_29890 = (state_29889[(1)]);
if((state_val_29890 === (7))){
var inst_29885 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29891_29918 = state_29889__$1;
(statearr_29891_29918[(2)] = inst_29885);

(statearr_29891_29918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (1))){
var state_29889__$1 = state_29889;
var statearr_29892_29919 = state_29889__$1;
(statearr_29892_29919[(2)] = null);

(statearr_29892_29919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (4))){
var inst_29868 = (state_29889[(7)]);
var inst_29868__$1 = (state_29889[(2)]);
var inst_29869 = (inst_29868__$1 == null);
var state_29889__$1 = (function (){var statearr_29893 = state_29889;
(statearr_29893[(7)] = inst_29868__$1);

return statearr_29893;
})();
if(cljs.core.truth_(inst_29869)){
var statearr_29894_29920 = state_29889__$1;
(statearr_29894_29920[(1)] = (5));

} else {
var statearr_29895_29921 = state_29889__$1;
(statearr_29895_29921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (13))){
var state_29889__$1 = state_29889;
var statearr_29896_29922 = state_29889__$1;
(statearr_29896_29922[(2)] = null);

(statearr_29896_29922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (6))){
var inst_29868 = (state_29889[(7)]);
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29889__$1,(11),to,inst_29868);
} else {
if((state_val_29890 === (3))){
var inst_29887 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29889__$1,inst_29887);
} else {
if((state_val_29890 === (12))){
var state_29889__$1 = state_29889;
var statearr_29897_29923 = state_29889__$1;
(statearr_29897_29923[(2)] = null);

(statearr_29897_29923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (2))){
var state_29889__$1 = state_29889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29889__$1,(4),from);
} else {
if((state_val_29890 === (11))){
var inst_29878 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
if(cljs.core.truth_(inst_29878)){
var statearr_29898_29924 = state_29889__$1;
(statearr_29898_29924[(1)] = (12));

} else {
var statearr_29899_29925 = state_29889__$1;
(statearr_29899_29925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (9))){
var state_29889__$1 = state_29889;
var statearr_29900_29926 = state_29889__$1;
(statearr_29900_29926[(2)] = null);

(statearr_29900_29926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (5))){
var state_29889__$1 = state_29889;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29901_29927 = state_29889__$1;
(statearr_29901_29927[(1)] = (8));

} else {
var statearr_29902_29928 = state_29889__$1;
(statearr_29902_29928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (14))){
var inst_29883 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29903_29929 = state_29889__$1;
(statearr_29903_29929[(2)] = inst_29883);

(statearr_29903_29929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (10))){
var inst_29875 = (state_29889[(2)]);
var state_29889__$1 = state_29889;
var statearr_29904_29930 = state_29889__$1;
(statearr_29904_29930[(2)] = inst_29875);

(statearr_29904_29930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29890 === (8))){
var inst_29872 = cljs.core.async.close_BANG_.call(null,to);
var state_29889__$1 = state_29889;
var statearr_29905_29931 = state_29889__$1;
(statearr_29905_29931[(2)] = inst_29872);

(statearr_29905_29931[(1)] = (10));


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
});})(c__29750__auto___29917))
;
return ((function (switch__29638__auto__,c__29750__auto___29917){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_29909 = [null,null,null,null,null,null,null,null];
(statearr_29909[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_29909[(1)] = (1));

return statearr_29909;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_29889){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_29889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e29910){if((e29910 instanceof Object)){
var ex__29642__auto__ = e29910;
var statearr_29911_29932 = state_29889;
(statearr_29911_29932[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29933 = state_29889;
state_29889 = G__29933;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_29889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_29889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___29917))
})();
var state__29752__auto__ = (function (){var statearr_29912 = f__29751__auto__.call(null);
(statearr_29912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___29917);

return statearr_29912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___29917))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30121){
var vec__30122 = p__30121;
var v = cljs.core.nth.call(null,vec__30122,(0),null);
var p = cljs.core.nth.call(null,vec__30122,(1),null);
var job = vec__30122;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29750__auto___30308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___30308,res,vec__30122,v,p,job,jobs,results){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___30308,res,vec__30122,v,p,job,jobs,results){
return (function (state_30129){
var state_val_30130 = (state_30129[(1)]);
if((state_val_30130 === (1))){
var state_30129__$1 = state_30129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30129__$1,(2),res,v);
} else {
if((state_val_30130 === (2))){
var inst_30126 = (state_30129[(2)]);
var inst_30127 = cljs.core.async.close_BANG_.call(null,res);
var state_30129__$1 = (function (){var statearr_30131 = state_30129;
(statearr_30131[(7)] = inst_30126);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30129__$1,inst_30127);
} else {
return null;
}
}
});})(c__29750__auto___30308,res,vec__30122,v,p,job,jobs,results))
;
return ((function (switch__29638__auto__,c__29750__auto___30308,res,vec__30122,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_30135 = [null,null,null,null,null,null,null,null];
(statearr_30135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_30135[(1)] = (1));

return statearr_30135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_30129){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30136){if((e30136 instanceof Object)){
var ex__29642__auto__ = e30136;
var statearr_30137_30309 = state_30129;
(statearr_30137_30309[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30310 = state_30129;
state_30129 = G__30310;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_30129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_30129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___30308,res,vec__30122,v,p,job,jobs,results))
})();
var state__29752__auto__ = (function (){var statearr_30138 = f__29751__auto__.call(null);
(statearr_30138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___30308);

return statearr_30138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___30308,res,vec__30122,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30139){
var vec__30140 = p__30139;
var v = cljs.core.nth.call(null,vec__30140,(0),null);
var p = cljs.core.nth.call(null,vec__30140,(1),null);
var job = vec__30140;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26251__auto___30311 = n;
var __30312 = (0);
while(true){
if((__30312 < n__26251__auto___30311)){
var G__30143_30313 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30143_30313) {
case "compute":
var c__29750__auto___30315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30312,c__29750__auto___30315,G__30143_30313,n__26251__auto___30311,jobs,results,process,async){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (__30312,c__29750__auto___30315,G__30143_30313,n__26251__auto___30311,jobs,results,process,async){
return (function (state_30156){
var state_val_30157 = (state_30156[(1)]);
if((state_val_30157 === (1))){
var state_30156__$1 = state_30156;
var statearr_30158_30316 = state_30156__$1;
(statearr_30158_30316[(2)] = null);

(statearr_30158_30316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (2))){
var state_30156__$1 = state_30156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30156__$1,(4),jobs);
} else {
if((state_val_30157 === (3))){
var inst_30154 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30156__$1,inst_30154);
} else {
if((state_val_30157 === (4))){
var inst_30146 = (state_30156[(2)]);
var inst_30147 = process.call(null,inst_30146);
var state_30156__$1 = state_30156;
if(cljs.core.truth_(inst_30147)){
var statearr_30159_30317 = state_30156__$1;
(statearr_30159_30317[(1)] = (5));

} else {
var statearr_30160_30318 = state_30156__$1;
(statearr_30160_30318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (5))){
var state_30156__$1 = state_30156;
var statearr_30161_30319 = state_30156__$1;
(statearr_30161_30319[(2)] = null);

(statearr_30161_30319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (6))){
var state_30156__$1 = state_30156;
var statearr_30162_30320 = state_30156__$1;
(statearr_30162_30320[(2)] = null);

(statearr_30162_30320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30157 === (7))){
var inst_30152 = (state_30156[(2)]);
var state_30156__$1 = state_30156;
var statearr_30163_30321 = state_30156__$1;
(statearr_30163_30321[(2)] = inst_30152);

(statearr_30163_30321[(1)] = (3));


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
});})(__30312,c__29750__auto___30315,G__30143_30313,n__26251__auto___30311,jobs,results,process,async))
;
return ((function (__30312,switch__29638__auto__,c__29750__auto___30315,G__30143_30313,n__26251__auto___30311,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_30167 = [null,null,null,null,null,null,null];
(statearr_30167[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_30167[(1)] = (1));

return statearr_30167;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_30156){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30168){if((e30168 instanceof Object)){
var ex__29642__auto__ = e30168;
var statearr_30169_30322 = state_30156;
(statearr_30169_30322[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30323 = state_30156;
state_30156 = G__30323;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_30156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_30156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(__30312,switch__29638__auto__,c__29750__auto___30315,G__30143_30313,n__26251__auto___30311,jobs,results,process,async))
})();
var state__29752__auto__ = (function (){var statearr_30170 = f__29751__auto__.call(null);
(statearr_30170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___30315);

return statearr_30170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(__30312,c__29750__auto___30315,G__30143_30313,n__26251__auto___30311,jobs,results,process,async))
);


break;
case "async":
var c__29750__auto___30324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30312,c__29750__auto___30324,G__30143_30313,n__26251__auto___30311,jobs,results,process,async){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (__30312,c__29750__auto___30324,G__30143_30313,n__26251__auto___30311,jobs,results,process,async){
return (function (state_30183){
var state_val_30184 = (state_30183[(1)]);
if((state_val_30184 === (1))){
var state_30183__$1 = state_30183;
var statearr_30185_30325 = state_30183__$1;
(statearr_30185_30325[(2)] = null);

(statearr_30185_30325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (2))){
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30183__$1,(4),jobs);
} else {
if((state_val_30184 === (3))){
var inst_30181 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30183__$1,inst_30181);
} else {
if((state_val_30184 === (4))){
var inst_30173 = (state_30183[(2)]);
var inst_30174 = async.call(null,inst_30173);
var state_30183__$1 = state_30183;
if(cljs.core.truth_(inst_30174)){
var statearr_30186_30326 = state_30183__$1;
(statearr_30186_30326[(1)] = (5));

} else {
var statearr_30187_30327 = state_30183__$1;
(statearr_30187_30327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (5))){
var state_30183__$1 = state_30183;
var statearr_30188_30328 = state_30183__$1;
(statearr_30188_30328[(2)] = null);

(statearr_30188_30328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (6))){
var state_30183__$1 = state_30183;
var statearr_30189_30329 = state_30183__$1;
(statearr_30189_30329[(2)] = null);

(statearr_30189_30329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30184 === (7))){
var inst_30179 = (state_30183[(2)]);
var state_30183__$1 = state_30183;
var statearr_30190_30330 = state_30183__$1;
(statearr_30190_30330[(2)] = inst_30179);

(statearr_30190_30330[(1)] = (3));


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
});})(__30312,c__29750__auto___30324,G__30143_30313,n__26251__auto___30311,jobs,results,process,async))
;
return ((function (__30312,switch__29638__auto__,c__29750__auto___30324,G__30143_30313,n__26251__auto___30311,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_30194 = [null,null,null,null,null,null,null];
(statearr_30194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_30194[(1)] = (1));

return statearr_30194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_30183){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30195){if((e30195 instanceof Object)){
var ex__29642__auto__ = e30195;
var statearr_30196_30331 = state_30183;
(statearr_30196_30331[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30332 = state_30183;
state_30183 = G__30332;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_30183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_30183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(__30312,switch__29638__auto__,c__29750__auto___30324,G__30143_30313,n__26251__auto___30311,jobs,results,process,async))
})();
var state__29752__auto__ = (function (){var statearr_30197 = f__29751__auto__.call(null);
(statearr_30197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___30324);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(__30312,c__29750__auto___30324,G__30143_30313,n__26251__auto___30311,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30333 = (__30312 + (1));
__30312 = G__30333;
continue;
} else {
}
break;
}

var c__29750__auto___30334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___30334,jobs,results,process,async){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___30334,jobs,results,process,async){
return (function (state_30219){
var state_val_30220 = (state_30219[(1)]);
if((state_val_30220 === (1))){
var state_30219__$1 = state_30219;
var statearr_30221_30335 = state_30219__$1;
(statearr_30221_30335[(2)] = null);

(statearr_30221_30335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (2))){
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30219__$1,(4),from);
} else {
if((state_val_30220 === (3))){
var inst_30217 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30219__$1,inst_30217);
} else {
if((state_val_30220 === (4))){
var inst_30200 = (state_30219[(7)]);
var inst_30200__$1 = (state_30219[(2)]);
var inst_30201 = (inst_30200__$1 == null);
var state_30219__$1 = (function (){var statearr_30222 = state_30219;
(statearr_30222[(7)] = inst_30200__$1);

return statearr_30222;
})();
if(cljs.core.truth_(inst_30201)){
var statearr_30223_30336 = state_30219__$1;
(statearr_30223_30336[(1)] = (5));

} else {
var statearr_30224_30337 = state_30219__$1;
(statearr_30224_30337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (5))){
var inst_30203 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30219__$1 = state_30219;
var statearr_30225_30338 = state_30219__$1;
(statearr_30225_30338[(2)] = inst_30203);

(statearr_30225_30338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (6))){
var inst_30200 = (state_30219[(7)]);
var inst_30205 = (state_30219[(8)]);
var inst_30205__$1 = cljs.core.async.chan.call(null,(1));
var inst_30206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30207 = [inst_30200,inst_30205__$1];
var inst_30208 = (new cljs.core.PersistentVector(null,2,(5),inst_30206,inst_30207,null));
var state_30219__$1 = (function (){var statearr_30226 = state_30219;
(statearr_30226[(8)] = inst_30205__$1);

return statearr_30226;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30219__$1,(8),jobs,inst_30208);
} else {
if((state_val_30220 === (7))){
var inst_30215 = (state_30219[(2)]);
var state_30219__$1 = state_30219;
var statearr_30227_30339 = state_30219__$1;
(statearr_30227_30339[(2)] = inst_30215);

(statearr_30227_30339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30220 === (8))){
var inst_30205 = (state_30219[(8)]);
var inst_30210 = (state_30219[(2)]);
var state_30219__$1 = (function (){var statearr_30228 = state_30219;
(statearr_30228[(9)] = inst_30210);

return statearr_30228;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30219__$1,(9),results,inst_30205);
} else {
if((state_val_30220 === (9))){
var inst_30212 = (state_30219[(2)]);
var state_30219__$1 = (function (){var statearr_30229 = state_30219;
(statearr_30229[(10)] = inst_30212);

return statearr_30229;
})();
var statearr_30230_30340 = state_30219__$1;
(statearr_30230_30340[(2)] = null);

(statearr_30230_30340[(1)] = (2));


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
});})(c__29750__auto___30334,jobs,results,process,async))
;
return ((function (switch__29638__auto__,c__29750__auto___30334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_30234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30234[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_30234[(1)] = (1));

return statearr_30234;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_30219){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30235){if((e30235 instanceof Object)){
var ex__29642__auto__ = e30235;
var statearr_30236_30341 = state_30219;
(statearr_30236_30341[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30342 = state_30219;
state_30219 = G__30342;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_30219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_30219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___30334,jobs,results,process,async))
})();
var state__29752__auto__ = (function (){var statearr_30237 = f__29751__auto__.call(null);
(statearr_30237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___30334);

return statearr_30237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___30334,jobs,results,process,async))
);


var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,jobs,results,process,async){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,jobs,results,process,async){
return (function (state_30275){
var state_val_30276 = (state_30275[(1)]);
if((state_val_30276 === (7))){
var inst_30271 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
var statearr_30277_30343 = state_30275__$1;
(statearr_30277_30343[(2)] = inst_30271);

(statearr_30277_30343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (20))){
var state_30275__$1 = state_30275;
var statearr_30278_30344 = state_30275__$1;
(statearr_30278_30344[(2)] = null);

(statearr_30278_30344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (1))){
var state_30275__$1 = state_30275;
var statearr_30279_30345 = state_30275__$1;
(statearr_30279_30345[(2)] = null);

(statearr_30279_30345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (4))){
var inst_30240 = (state_30275[(7)]);
var inst_30240__$1 = (state_30275[(2)]);
var inst_30241 = (inst_30240__$1 == null);
var state_30275__$1 = (function (){var statearr_30280 = state_30275;
(statearr_30280[(7)] = inst_30240__$1);

return statearr_30280;
})();
if(cljs.core.truth_(inst_30241)){
var statearr_30281_30346 = state_30275__$1;
(statearr_30281_30346[(1)] = (5));

} else {
var statearr_30282_30347 = state_30275__$1;
(statearr_30282_30347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (15))){
var inst_30253 = (state_30275[(8)]);
var state_30275__$1 = state_30275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30275__$1,(18),to,inst_30253);
} else {
if((state_val_30276 === (21))){
var inst_30266 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
var statearr_30283_30348 = state_30275__$1;
(statearr_30283_30348[(2)] = inst_30266);

(statearr_30283_30348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (13))){
var inst_30268 = (state_30275[(2)]);
var state_30275__$1 = (function (){var statearr_30284 = state_30275;
(statearr_30284[(9)] = inst_30268);

return statearr_30284;
})();
var statearr_30285_30349 = state_30275__$1;
(statearr_30285_30349[(2)] = null);

(statearr_30285_30349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (6))){
var inst_30240 = (state_30275[(7)]);
var state_30275__$1 = state_30275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30275__$1,(11),inst_30240);
} else {
if((state_val_30276 === (17))){
var inst_30261 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
if(cljs.core.truth_(inst_30261)){
var statearr_30286_30350 = state_30275__$1;
(statearr_30286_30350[(1)] = (19));

} else {
var statearr_30287_30351 = state_30275__$1;
(statearr_30287_30351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (3))){
var inst_30273 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30275__$1,inst_30273);
} else {
if((state_val_30276 === (12))){
var inst_30250 = (state_30275[(10)]);
var state_30275__$1 = state_30275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30275__$1,(14),inst_30250);
} else {
if((state_val_30276 === (2))){
var state_30275__$1 = state_30275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30275__$1,(4),results);
} else {
if((state_val_30276 === (19))){
var state_30275__$1 = state_30275;
var statearr_30288_30352 = state_30275__$1;
(statearr_30288_30352[(2)] = null);

(statearr_30288_30352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (11))){
var inst_30250 = (state_30275[(2)]);
var state_30275__$1 = (function (){var statearr_30289 = state_30275;
(statearr_30289[(10)] = inst_30250);

return statearr_30289;
})();
var statearr_30290_30353 = state_30275__$1;
(statearr_30290_30353[(2)] = null);

(statearr_30290_30353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (9))){
var state_30275__$1 = state_30275;
var statearr_30291_30354 = state_30275__$1;
(statearr_30291_30354[(2)] = null);

(statearr_30291_30354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (5))){
var state_30275__$1 = state_30275;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30292_30355 = state_30275__$1;
(statearr_30292_30355[(1)] = (8));

} else {
var statearr_30293_30356 = state_30275__$1;
(statearr_30293_30356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (14))){
var inst_30253 = (state_30275[(8)]);
var inst_30255 = (state_30275[(11)]);
var inst_30253__$1 = (state_30275[(2)]);
var inst_30254 = (inst_30253__$1 == null);
var inst_30255__$1 = cljs.core.not.call(null,inst_30254);
var state_30275__$1 = (function (){var statearr_30294 = state_30275;
(statearr_30294[(8)] = inst_30253__$1);

(statearr_30294[(11)] = inst_30255__$1);

return statearr_30294;
})();
if(inst_30255__$1){
var statearr_30295_30357 = state_30275__$1;
(statearr_30295_30357[(1)] = (15));

} else {
var statearr_30296_30358 = state_30275__$1;
(statearr_30296_30358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (16))){
var inst_30255 = (state_30275[(11)]);
var state_30275__$1 = state_30275;
var statearr_30297_30359 = state_30275__$1;
(statearr_30297_30359[(2)] = inst_30255);

(statearr_30297_30359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (10))){
var inst_30247 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
var statearr_30298_30360 = state_30275__$1;
(statearr_30298_30360[(2)] = inst_30247);

(statearr_30298_30360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (18))){
var inst_30258 = (state_30275[(2)]);
var state_30275__$1 = state_30275;
var statearr_30299_30361 = state_30275__$1;
(statearr_30299_30361[(2)] = inst_30258);

(statearr_30299_30361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30276 === (8))){
var inst_30244 = cljs.core.async.close_BANG_.call(null,to);
var state_30275__$1 = state_30275;
var statearr_30300_30362 = state_30275__$1;
(statearr_30300_30362[(2)] = inst_30244);

(statearr_30300_30362[(1)] = (10));


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
});})(c__29750__auto__,jobs,results,process,async))
;
return ((function (switch__29638__auto__,c__29750__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_30275){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object)){
var ex__29642__auto__ = e30305;
var statearr_30306_30363 = state_30275;
(statearr_30306_30363[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30364 = state_30275;
state_30275 = G__30364;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_30275){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_30275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,jobs,results,process,async))
})();
var state__29752__auto__ = (function (){var statearr_30307 = f__29751__auto__.call(null);
(statearr_30307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_30307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,jobs,results,process,async))
);

return c__29750__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30365 = [];
var len__26441__auto___30368 = arguments.length;
var i__26442__auto___30369 = (0);
while(true){
if((i__26442__auto___30369 < len__26441__auto___30368)){
args30365.push((arguments[i__26442__auto___30369]));

var G__30370 = (i__26442__auto___30369 + (1));
i__26442__auto___30369 = G__30370;
continue;
} else {
}
break;
}

var G__30367 = args30365.length;
switch (G__30367) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30365.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30372 = [];
var len__26441__auto___30375 = arguments.length;
var i__26442__auto___30376 = (0);
while(true){
if((i__26442__auto___30376 < len__26441__auto___30375)){
args30372.push((arguments[i__26442__auto___30376]));

var G__30377 = (i__26442__auto___30376 + (1));
i__26442__auto___30376 = G__30377;
continue;
} else {
}
break;
}

var G__30374 = args30372.length;
switch (G__30374) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30372.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30379 = [];
var len__26441__auto___30432 = arguments.length;
var i__26442__auto___30433 = (0);
while(true){
if((i__26442__auto___30433 < len__26441__auto___30432)){
args30379.push((arguments[i__26442__auto___30433]));

var G__30434 = (i__26442__auto___30433 + (1));
i__26442__auto___30433 = G__30434;
continue;
} else {
}
break;
}

var G__30381 = args30379.length;
switch (G__30381) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30379.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29750__auto___30436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___30436,tc,fc){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___30436,tc,fc){
return (function (state_30407){
var state_val_30408 = (state_30407[(1)]);
if((state_val_30408 === (7))){
var inst_30403 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30409_30437 = state_30407__$1;
(statearr_30409_30437[(2)] = inst_30403);

(statearr_30409_30437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (1))){
var state_30407__$1 = state_30407;
var statearr_30410_30438 = state_30407__$1;
(statearr_30410_30438[(2)] = null);

(statearr_30410_30438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (4))){
var inst_30384 = (state_30407[(7)]);
var inst_30384__$1 = (state_30407[(2)]);
var inst_30385 = (inst_30384__$1 == null);
var state_30407__$1 = (function (){var statearr_30411 = state_30407;
(statearr_30411[(7)] = inst_30384__$1);

return statearr_30411;
})();
if(cljs.core.truth_(inst_30385)){
var statearr_30412_30439 = state_30407__$1;
(statearr_30412_30439[(1)] = (5));

} else {
var statearr_30413_30440 = state_30407__$1;
(statearr_30413_30440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (13))){
var state_30407__$1 = state_30407;
var statearr_30414_30441 = state_30407__$1;
(statearr_30414_30441[(2)] = null);

(statearr_30414_30441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (6))){
var inst_30384 = (state_30407[(7)]);
var inst_30390 = p.call(null,inst_30384);
var state_30407__$1 = state_30407;
if(cljs.core.truth_(inst_30390)){
var statearr_30415_30442 = state_30407__$1;
(statearr_30415_30442[(1)] = (9));

} else {
var statearr_30416_30443 = state_30407__$1;
(statearr_30416_30443[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (3))){
var inst_30405 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30407__$1,inst_30405);
} else {
if((state_val_30408 === (12))){
var state_30407__$1 = state_30407;
var statearr_30417_30444 = state_30407__$1;
(statearr_30417_30444[(2)] = null);

(statearr_30417_30444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (2))){
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30407__$1,(4),ch);
} else {
if((state_val_30408 === (11))){
var inst_30384 = (state_30407[(7)]);
var inst_30394 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30407__$1,(8),inst_30394,inst_30384);
} else {
if((state_val_30408 === (9))){
var state_30407__$1 = state_30407;
var statearr_30418_30445 = state_30407__$1;
(statearr_30418_30445[(2)] = tc);

(statearr_30418_30445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (5))){
var inst_30387 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30388 = cljs.core.async.close_BANG_.call(null,fc);
var state_30407__$1 = (function (){var statearr_30419 = state_30407;
(statearr_30419[(8)] = inst_30387);

return statearr_30419;
})();
var statearr_30420_30446 = state_30407__$1;
(statearr_30420_30446[(2)] = inst_30388);

(statearr_30420_30446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (14))){
var inst_30401 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30421_30447 = state_30407__$1;
(statearr_30421_30447[(2)] = inst_30401);

(statearr_30421_30447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (10))){
var state_30407__$1 = state_30407;
var statearr_30422_30448 = state_30407__$1;
(statearr_30422_30448[(2)] = fc);

(statearr_30422_30448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (8))){
var inst_30396 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
if(cljs.core.truth_(inst_30396)){
var statearr_30423_30449 = state_30407__$1;
(statearr_30423_30449[(1)] = (12));

} else {
var statearr_30424_30450 = state_30407__$1;
(statearr_30424_30450[(1)] = (13));

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
});})(c__29750__auto___30436,tc,fc))
;
return ((function (switch__29638__auto__,c__29750__auto___30436,tc,fc){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_30428 = [null,null,null,null,null,null,null,null,null];
(statearr_30428[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_30428[(1)] = (1));

return statearr_30428;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_30407){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30429){if((e30429 instanceof Object)){
var ex__29642__auto__ = e30429;
var statearr_30430_30451 = state_30407;
(statearr_30430_30451[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30452 = state_30407;
state_30407 = G__30452;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_30407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_30407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___30436,tc,fc))
})();
var state__29752__auto__ = (function (){var statearr_30431 = f__29751__auto__.call(null);
(statearr_30431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___30436);

return statearr_30431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___30436,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__){
return (function (state_30516){
var state_val_30517 = (state_30516[(1)]);
if((state_val_30517 === (7))){
var inst_30512 = (state_30516[(2)]);
var state_30516__$1 = state_30516;
var statearr_30518_30539 = state_30516__$1;
(statearr_30518_30539[(2)] = inst_30512);

(statearr_30518_30539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30517 === (1))){
var inst_30496 = init;
var state_30516__$1 = (function (){var statearr_30519 = state_30516;
(statearr_30519[(7)] = inst_30496);

return statearr_30519;
})();
var statearr_30520_30540 = state_30516__$1;
(statearr_30520_30540[(2)] = null);

(statearr_30520_30540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30517 === (4))){
var inst_30499 = (state_30516[(8)]);
var inst_30499__$1 = (state_30516[(2)]);
var inst_30500 = (inst_30499__$1 == null);
var state_30516__$1 = (function (){var statearr_30521 = state_30516;
(statearr_30521[(8)] = inst_30499__$1);

return statearr_30521;
})();
if(cljs.core.truth_(inst_30500)){
var statearr_30522_30541 = state_30516__$1;
(statearr_30522_30541[(1)] = (5));

} else {
var statearr_30523_30542 = state_30516__$1;
(statearr_30523_30542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30517 === (6))){
var inst_30499 = (state_30516[(8)]);
var inst_30503 = (state_30516[(9)]);
var inst_30496 = (state_30516[(7)]);
var inst_30503__$1 = f.call(null,inst_30496,inst_30499);
var inst_30504 = cljs.core.reduced_QMARK_.call(null,inst_30503__$1);
var state_30516__$1 = (function (){var statearr_30524 = state_30516;
(statearr_30524[(9)] = inst_30503__$1);

return statearr_30524;
})();
if(inst_30504){
var statearr_30525_30543 = state_30516__$1;
(statearr_30525_30543[(1)] = (8));

} else {
var statearr_30526_30544 = state_30516__$1;
(statearr_30526_30544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30517 === (3))){
var inst_30514 = (state_30516[(2)]);
var state_30516__$1 = state_30516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30516__$1,inst_30514);
} else {
if((state_val_30517 === (2))){
var state_30516__$1 = state_30516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30516__$1,(4),ch);
} else {
if((state_val_30517 === (9))){
var inst_30503 = (state_30516[(9)]);
var inst_30496 = inst_30503;
var state_30516__$1 = (function (){var statearr_30527 = state_30516;
(statearr_30527[(7)] = inst_30496);

return statearr_30527;
})();
var statearr_30528_30545 = state_30516__$1;
(statearr_30528_30545[(2)] = null);

(statearr_30528_30545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30517 === (5))){
var inst_30496 = (state_30516[(7)]);
var state_30516__$1 = state_30516;
var statearr_30529_30546 = state_30516__$1;
(statearr_30529_30546[(2)] = inst_30496);

(statearr_30529_30546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30517 === (10))){
var inst_30510 = (state_30516[(2)]);
var state_30516__$1 = state_30516;
var statearr_30530_30547 = state_30516__$1;
(statearr_30530_30547[(2)] = inst_30510);

(statearr_30530_30547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30517 === (8))){
var inst_30503 = (state_30516[(9)]);
var inst_30506 = cljs.core.deref.call(null,inst_30503);
var state_30516__$1 = state_30516;
var statearr_30531_30548 = state_30516__$1;
(statearr_30531_30548[(2)] = inst_30506);

(statearr_30531_30548[(1)] = (10));


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
});})(c__29750__auto__))
;
return ((function (switch__29638__auto__,c__29750__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29639__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29639__auto____0 = (function (){
var statearr_30535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30535[(0)] = cljs$core$async$reduce_$_state_machine__29639__auto__);

(statearr_30535[(1)] = (1));

return statearr_30535;
});
var cljs$core$async$reduce_$_state_machine__29639__auto____1 = (function (state_30516){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30536){if((e30536 instanceof Object)){
var ex__29642__auto__ = e30536;
var statearr_30537_30549 = state_30516;
(statearr_30537_30549[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30550 = state_30516;
state_30516 = G__30550;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29639__auto__ = function(state_30516){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29639__auto____1.call(this,state_30516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29639__auto____0;
cljs$core$async$reduce_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29639__auto____1;
return cljs$core$async$reduce_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_30538 = f__29751__auto__.call(null);
(statearr_30538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_30538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__))
);

return c__29750__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,f__$1){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,f__$1){
return (function (state_30570){
var state_val_30571 = (state_30570[(1)]);
if((state_val_30571 === (1))){
var inst_30565 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30570__$1 = state_30570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30570__$1,(2),inst_30565);
} else {
if((state_val_30571 === (2))){
var inst_30567 = (state_30570[(2)]);
var inst_30568 = f__$1.call(null,inst_30567);
var state_30570__$1 = state_30570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30570__$1,inst_30568);
} else {
return null;
}
}
});})(c__29750__auto__,f__$1))
;
return ((function (switch__29638__auto__,c__29750__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29639__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29639__auto____0 = (function (){
var statearr_30575 = [null,null,null,null,null,null,null];
(statearr_30575[(0)] = cljs$core$async$transduce_$_state_machine__29639__auto__);

(statearr_30575[(1)] = (1));

return statearr_30575;
});
var cljs$core$async$transduce_$_state_machine__29639__auto____1 = (function (state_30570){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30576){if((e30576 instanceof Object)){
var ex__29642__auto__ = e30576;
var statearr_30577_30579 = state_30570;
(statearr_30577_30579[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30580 = state_30570;
state_30570 = G__30580;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29639__auto__ = function(state_30570){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29639__auto____1.call(this,state_30570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29639__auto____0;
cljs$core$async$transduce_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29639__auto____1;
return cljs$core$async$transduce_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,f__$1))
})();
var state__29752__auto__ = (function (){var statearr_30578 = f__29751__auto__.call(null);
(statearr_30578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_30578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__,f__$1))
);

return c__29750__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30581 = [];
var len__26441__auto___30633 = arguments.length;
var i__26442__auto___30634 = (0);
while(true){
if((i__26442__auto___30634 < len__26441__auto___30633)){
args30581.push((arguments[i__26442__auto___30634]));

var G__30635 = (i__26442__auto___30634 + (1));
i__26442__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var G__30583 = args30581.length;
switch (G__30583) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30581.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__){
return (function (state_30608){
var state_val_30609 = (state_30608[(1)]);
if((state_val_30609 === (7))){
var inst_30590 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30610_30637 = state_30608__$1;
(statearr_30610_30637[(2)] = inst_30590);

(statearr_30610_30637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (1))){
var inst_30584 = cljs.core.seq.call(null,coll);
var inst_30585 = inst_30584;
var state_30608__$1 = (function (){var statearr_30611 = state_30608;
(statearr_30611[(7)] = inst_30585);

return statearr_30611;
})();
var statearr_30612_30638 = state_30608__$1;
(statearr_30612_30638[(2)] = null);

(statearr_30612_30638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (4))){
var inst_30585 = (state_30608[(7)]);
var inst_30588 = cljs.core.first.call(null,inst_30585);
var state_30608__$1 = state_30608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30608__$1,(7),ch,inst_30588);
} else {
if((state_val_30609 === (13))){
var inst_30602 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30613_30639 = state_30608__$1;
(statearr_30613_30639[(2)] = inst_30602);

(statearr_30613_30639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (6))){
var inst_30593 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30593)){
var statearr_30614_30640 = state_30608__$1;
(statearr_30614_30640[(1)] = (8));

} else {
var statearr_30615_30641 = state_30608__$1;
(statearr_30615_30641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (3))){
var inst_30606 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30608__$1,inst_30606);
} else {
if((state_val_30609 === (12))){
var state_30608__$1 = state_30608;
var statearr_30616_30642 = state_30608__$1;
(statearr_30616_30642[(2)] = null);

(statearr_30616_30642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (2))){
var inst_30585 = (state_30608[(7)]);
var state_30608__$1 = state_30608;
if(cljs.core.truth_(inst_30585)){
var statearr_30617_30643 = state_30608__$1;
(statearr_30617_30643[(1)] = (4));

} else {
var statearr_30618_30644 = state_30608__$1;
(statearr_30618_30644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (11))){
var inst_30599 = cljs.core.async.close_BANG_.call(null,ch);
var state_30608__$1 = state_30608;
var statearr_30619_30645 = state_30608__$1;
(statearr_30619_30645[(2)] = inst_30599);

(statearr_30619_30645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (9))){
var state_30608__$1 = state_30608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30620_30646 = state_30608__$1;
(statearr_30620_30646[(1)] = (11));

} else {
var statearr_30621_30647 = state_30608__$1;
(statearr_30621_30647[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (5))){
var inst_30585 = (state_30608[(7)]);
var state_30608__$1 = state_30608;
var statearr_30622_30648 = state_30608__$1;
(statearr_30622_30648[(2)] = inst_30585);

(statearr_30622_30648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (10))){
var inst_30604 = (state_30608[(2)]);
var state_30608__$1 = state_30608;
var statearr_30623_30649 = state_30608__$1;
(statearr_30623_30649[(2)] = inst_30604);

(statearr_30623_30649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30609 === (8))){
var inst_30585 = (state_30608[(7)]);
var inst_30595 = cljs.core.next.call(null,inst_30585);
var inst_30585__$1 = inst_30595;
var state_30608__$1 = (function (){var statearr_30624 = state_30608;
(statearr_30624[(7)] = inst_30585__$1);

return statearr_30624;
})();
var statearr_30625_30650 = state_30608__$1;
(statearr_30625_30650[(2)] = null);

(statearr_30625_30650[(1)] = (2));


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
});})(c__29750__auto__))
;
return ((function (switch__29638__auto__,c__29750__auto__){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_30629 = [null,null,null,null,null,null,null,null];
(statearr_30629[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_30629[(1)] = (1));

return statearr_30629;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_30608){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_30608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e30630){if((e30630 instanceof Object)){
var ex__29642__auto__ = e30630;
var statearr_30631_30651 = state_30608;
(statearr_30631_30651[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30652 = state_30608;
state_30608 = G__30652;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_30608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_30608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_30632 = f__29751__auto__.call(null);
(statearr_30632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_30632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__))
);

return c__29750__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25996__auto__ = (((_ == null))?null:_);
var m__25997__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,_);
} else {
var m__25997__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25996__auto__ = (((m == null))?null:m);
var m__25997__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25997__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25996__auto__ = (((m == null))?null:m);
var m__25997__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,m,ch);
} else {
var m__25997__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25996__auto__ = (((m == null))?null:m);
var m__25997__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,m);
} else {
var m__25997__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30878 = (function (ch,cs,meta30879){
this.ch = ch;
this.cs = cs;
this.meta30879 = meta30879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30880,meta30879__$1){
var self__ = this;
var _30880__$1 = this;
return (new cljs.core.async.t_cljs$core$async30878(self__.ch,self__.cs,meta30879__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30880){
var self__ = this;
var _30880__$1 = this;
return self__.meta30879;
});})(cs))
;

cljs.core.async.t_cljs$core$async30878.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30878.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30878.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30878.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30878.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30878.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30879","meta30879",680305171,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30878";

cljs.core.async.t_cljs$core$async30878.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async30878");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30878 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30878(ch__$1,cs__$1,meta30879){
return (new cljs.core.async.t_cljs$core$async30878(ch__$1,cs__$1,meta30879));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30878(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29750__auto___31103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___31103,cs,m,dchan,dctr,done){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___31103,cs,m,dchan,dctr,done){
return (function (state_31015){
var state_val_31016 = (state_31015[(1)]);
if((state_val_31016 === (7))){
var inst_31011 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31017_31104 = state_31015__$1;
(statearr_31017_31104[(2)] = inst_31011);

(statearr_31017_31104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (20))){
var inst_30914 = (state_31015[(7)]);
var inst_30926 = cljs.core.first.call(null,inst_30914);
var inst_30927 = cljs.core.nth.call(null,inst_30926,(0),null);
var inst_30928 = cljs.core.nth.call(null,inst_30926,(1),null);
var state_31015__$1 = (function (){var statearr_31018 = state_31015;
(statearr_31018[(8)] = inst_30927);

return statearr_31018;
})();
if(cljs.core.truth_(inst_30928)){
var statearr_31019_31105 = state_31015__$1;
(statearr_31019_31105[(1)] = (22));

} else {
var statearr_31020_31106 = state_31015__$1;
(statearr_31020_31106[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (27))){
var inst_30963 = (state_31015[(9)]);
var inst_30883 = (state_31015[(10)]);
var inst_30956 = (state_31015[(11)]);
var inst_30958 = (state_31015[(12)]);
var inst_30963__$1 = cljs.core._nth.call(null,inst_30956,inst_30958);
var inst_30964 = cljs.core.async.put_BANG_.call(null,inst_30963__$1,inst_30883,done);
var state_31015__$1 = (function (){var statearr_31021 = state_31015;
(statearr_31021[(9)] = inst_30963__$1);

return statearr_31021;
})();
if(cljs.core.truth_(inst_30964)){
var statearr_31022_31107 = state_31015__$1;
(statearr_31022_31107[(1)] = (30));

} else {
var statearr_31023_31108 = state_31015__$1;
(statearr_31023_31108[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (1))){
var state_31015__$1 = state_31015;
var statearr_31024_31109 = state_31015__$1;
(statearr_31024_31109[(2)] = null);

(statearr_31024_31109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (24))){
var inst_30914 = (state_31015[(7)]);
var inst_30933 = (state_31015[(2)]);
var inst_30934 = cljs.core.next.call(null,inst_30914);
var inst_30892 = inst_30934;
var inst_30893 = null;
var inst_30894 = (0);
var inst_30895 = (0);
var state_31015__$1 = (function (){var statearr_31025 = state_31015;
(statearr_31025[(13)] = inst_30895);

(statearr_31025[(14)] = inst_30933);

(statearr_31025[(15)] = inst_30892);

(statearr_31025[(16)] = inst_30893);

(statearr_31025[(17)] = inst_30894);

return statearr_31025;
})();
var statearr_31026_31110 = state_31015__$1;
(statearr_31026_31110[(2)] = null);

(statearr_31026_31110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (39))){
var state_31015__$1 = state_31015;
var statearr_31030_31111 = state_31015__$1;
(statearr_31030_31111[(2)] = null);

(statearr_31030_31111[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (4))){
var inst_30883 = (state_31015[(10)]);
var inst_30883__$1 = (state_31015[(2)]);
var inst_30884 = (inst_30883__$1 == null);
var state_31015__$1 = (function (){var statearr_31031 = state_31015;
(statearr_31031[(10)] = inst_30883__$1);

return statearr_31031;
})();
if(cljs.core.truth_(inst_30884)){
var statearr_31032_31112 = state_31015__$1;
(statearr_31032_31112[(1)] = (5));

} else {
var statearr_31033_31113 = state_31015__$1;
(statearr_31033_31113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (15))){
var inst_30895 = (state_31015[(13)]);
var inst_30892 = (state_31015[(15)]);
var inst_30893 = (state_31015[(16)]);
var inst_30894 = (state_31015[(17)]);
var inst_30910 = (state_31015[(2)]);
var inst_30911 = (inst_30895 + (1));
var tmp31027 = inst_30892;
var tmp31028 = inst_30893;
var tmp31029 = inst_30894;
var inst_30892__$1 = tmp31027;
var inst_30893__$1 = tmp31028;
var inst_30894__$1 = tmp31029;
var inst_30895__$1 = inst_30911;
var state_31015__$1 = (function (){var statearr_31034 = state_31015;
(statearr_31034[(18)] = inst_30910);

(statearr_31034[(13)] = inst_30895__$1);

(statearr_31034[(15)] = inst_30892__$1);

(statearr_31034[(16)] = inst_30893__$1);

(statearr_31034[(17)] = inst_30894__$1);

return statearr_31034;
})();
var statearr_31035_31114 = state_31015__$1;
(statearr_31035_31114[(2)] = null);

(statearr_31035_31114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (21))){
var inst_30937 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31039_31115 = state_31015__$1;
(statearr_31039_31115[(2)] = inst_30937);

(statearr_31039_31115[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (31))){
var inst_30963 = (state_31015[(9)]);
var inst_30967 = done.call(null,null);
var inst_30968 = cljs.core.async.untap_STAR_.call(null,m,inst_30963);
var state_31015__$1 = (function (){var statearr_31040 = state_31015;
(statearr_31040[(19)] = inst_30967);

return statearr_31040;
})();
var statearr_31041_31116 = state_31015__$1;
(statearr_31041_31116[(2)] = inst_30968);

(statearr_31041_31116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (32))){
var inst_30957 = (state_31015[(20)]);
var inst_30956 = (state_31015[(11)]);
var inst_30955 = (state_31015[(21)]);
var inst_30958 = (state_31015[(12)]);
var inst_30970 = (state_31015[(2)]);
var inst_30971 = (inst_30958 + (1));
var tmp31036 = inst_30957;
var tmp31037 = inst_30956;
var tmp31038 = inst_30955;
var inst_30955__$1 = tmp31038;
var inst_30956__$1 = tmp31037;
var inst_30957__$1 = tmp31036;
var inst_30958__$1 = inst_30971;
var state_31015__$1 = (function (){var statearr_31042 = state_31015;
(statearr_31042[(20)] = inst_30957__$1);

(statearr_31042[(11)] = inst_30956__$1);

(statearr_31042[(21)] = inst_30955__$1);

(statearr_31042[(22)] = inst_30970);

(statearr_31042[(12)] = inst_30958__$1);

return statearr_31042;
})();
var statearr_31043_31117 = state_31015__$1;
(statearr_31043_31117[(2)] = null);

(statearr_31043_31117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (40))){
var inst_30983 = (state_31015[(23)]);
var inst_30987 = done.call(null,null);
var inst_30988 = cljs.core.async.untap_STAR_.call(null,m,inst_30983);
var state_31015__$1 = (function (){var statearr_31044 = state_31015;
(statearr_31044[(24)] = inst_30987);

return statearr_31044;
})();
var statearr_31045_31118 = state_31015__$1;
(statearr_31045_31118[(2)] = inst_30988);

(statearr_31045_31118[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (33))){
var inst_30974 = (state_31015[(25)]);
var inst_30976 = cljs.core.chunked_seq_QMARK_.call(null,inst_30974);
var state_31015__$1 = state_31015;
if(inst_30976){
var statearr_31046_31119 = state_31015__$1;
(statearr_31046_31119[(1)] = (36));

} else {
var statearr_31047_31120 = state_31015__$1;
(statearr_31047_31120[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (13))){
var inst_30904 = (state_31015[(26)]);
var inst_30907 = cljs.core.async.close_BANG_.call(null,inst_30904);
var state_31015__$1 = state_31015;
var statearr_31048_31121 = state_31015__$1;
(statearr_31048_31121[(2)] = inst_30907);

(statearr_31048_31121[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (22))){
var inst_30927 = (state_31015[(8)]);
var inst_30930 = cljs.core.async.close_BANG_.call(null,inst_30927);
var state_31015__$1 = state_31015;
var statearr_31049_31122 = state_31015__$1;
(statearr_31049_31122[(2)] = inst_30930);

(statearr_31049_31122[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (36))){
var inst_30974 = (state_31015[(25)]);
var inst_30978 = cljs.core.chunk_first.call(null,inst_30974);
var inst_30979 = cljs.core.chunk_rest.call(null,inst_30974);
var inst_30980 = cljs.core.count.call(null,inst_30978);
var inst_30955 = inst_30979;
var inst_30956 = inst_30978;
var inst_30957 = inst_30980;
var inst_30958 = (0);
var state_31015__$1 = (function (){var statearr_31050 = state_31015;
(statearr_31050[(20)] = inst_30957);

(statearr_31050[(11)] = inst_30956);

(statearr_31050[(21)] = inst_30955);

(statearr_31050[(12)] = inst_30958);

return statearr_31050;
})();
var statearr_31051_31123 = state_31015__$1;
(statearr_31051_31123[(2)] = null);

(statearr_31051_31123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (41))){
var inst_30974 = (state_31015[(25)]);
var inst_30990 = (state_31015[(2)]);
var inst_30991 = cljs.core.next.call(null,inst_30974);
var inst_30955 = inst_30991;
var inst_30956 = null;
var inst_30957 = (0);
var inst_30958 = (0);
var state_31015__$1 = (function (){var statearr_31052 = state_31015;
(statearr_31052[(27)] = inst_30990);

(statearr_31052[(20)] = inst_30957);

(statearr_31052[(11)] = inst_30956);

(statearr_31052[(21)] = inst_30955);

(statearr_31052[(12)] = inst_30958);

return statearr_31052;
})();
var statearr_31053_31124 = state_31015__$1;
(statearr_31053_31124[(2)] = null);

(statearr_31053_31124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (43))){
var state_31015__$1 = state_31015;
var statearr_31054_31125 = state_31015__$1;
(statearr_31054_31125[(2)] = null);

(statearr_31054_31125[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (29))){
var inst_30999 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31055_31126 = state_31015__$1;
(statearr_31055_31126[(2)] = inst_30999);

(statearr_31055_31126[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (44))){
var inst_31008 = (state_31015[(2)]);
var state_31015__$1 = (function (){var statearr_31056 = state_31015;
(statearr_31056[(28)] = inst_31008);

return statearr_31056;
})();
var statearr_31057_31127 = state_31015__$1;
(statearr_31057_31127[(2)] = null);

(statearr_31057_31127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (6))){
var inst_30947 = (state_31015[(29)]);
var inst_30946 = cljs.core.deref.call(null,cs);
var inst_30947__$1 = cljs.core.keys.call(null,inst_30946);
var inst_30948 = cljs.core.count.call(null,inst_30947__$1);
var inst_30949 = cljs.core.reset_BANG_.call(null,dctr,inst_30948);
var inst_30954 = cljs.core.seq.call(null,inst_30947__$1);
var inst_30955 = inst_30954;
var inst_30956 = null;
var inst_30957 = (0);
var inst_30958 = (0);
var state_31015__$1 = (function (){var statearr_31058 = state_31015;
(statearr_31058[(20)] = inst_30957);

(statearr_31058[(11)] = inst_30956);

(statearr_31058[(29)] = inst_30947__$1);

(statearr_31058[(21)] = inst_30955);

(statearr_31058[(12)] = inst_30958);

(statearr_31058[(30)] = inst_30949);

return statearr_31058;
})();
var statearr_31059_31128 = state_31015__$1;
(statearr_31059_31128[(2)] = null);

(statearr_31059_31128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (28))){
var inst_30955 = (state_31015[(21)]);
var inst_30974 = (state_31015[(25)]);
var inst_30974__$1 = cljs.core.seq.call(null,inst_30955);
var state_31015__$1 = (function (){var statearr_31060 = state_31015;
(statearr_31060[(25)] = inst_30974__$1);

return statearr_31060;
})();
if(inst_30974__$1){
var statearr_31061_31129 = state_31015__$1;
(statearr_31061_31129[(1)] = (33));

} else {
var statearr_31062_31130 = state_31015__$1;
(statearr_31062_31130[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (25))){
var inst_30957 = (state_31015[(20)]);
var inst_30958 = (state_31015[(12)]);
var inst_30960 = (inst_30958 < inst_30957);
var inst_30961 = inst_30960;
var state_31015__$1 = state_31015;
if(cljs.core.truth_(inst_30961)){
var statearr_31063_31131 = state_31015__$1;
(statearr_31063_31131[(1)] = (27));

} else {
var statearr_31064_31132 = state_31015__$1;
(statearr_31064_31132[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (34))){
var state_31015__$1 = state_31015;
var statearr_31065_31133 = state_31015__$1;
(statearr_31065_31133[(2)] = null);

(statearr_31065_31133[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (17))){
var state_31015__$1 = state_31015;
var statearr_31066_31134 = state_31015__$1;
(statearr_31066_31134[(2)] = null);

(statearr_31066_31134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (3))){
var inst_31013 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31015__$1,inst_31013);
} else {
if((state_val_31016 === (12))){
var inst_30942 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31067_31135 = state_31015__$1;
(statearr_31067_31135[(2)] = inst_30942);

(statearr_31067_31135[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (2))){
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31015__$1,(4),ch);
} else {
if((state_val_31016 === (23))){
var state_31015__$1 = state_31015;
var statearr_31068_31136 = state_31015__$1;
(statearr_31068_31136[(2)] = null);

(statearr_31068_31136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (35))){
var inst_30997 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31069_31137 = state_31015__$1;
(statearr_31069_31137[(2)] = inst_30997);

(statearr_31069_31137[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (19))){
var inst_30914 = (state_31015[(7)]);
var inst_30918 = cljs.core.chunk_first.call(null,inst_30914);
var inst_30919 = cljs.core.chunk_rest.call(null,inst_30914);
var inst_30920 = cljs.core.count.call(null,inst_30918);
var inst_30892 = inst_30919;
var inst_30893 = inst_30918;
var inst_30894 = inst_30920;
var inst_30895 = (0);
var state_31015__$1 = (function (){var statearr_31070 = state_31015;
(statearr_31070[(13)] = inst_30895);

(statearr_31070[(15)] = inst_30892);

(statearr_31070[(16)] = inst_30893);

(statearr_31070[(17)] = inst_30894);

return statearr_31070;
})();
var statearr_31071_31138 = state_31015__$1;
(statearr_31071_31138[(2)] = null);

(statearr_31071_31138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (11))){
var inst_30914 = (state_31015[(7)]);
var inst_30892 = (state_31015[(15)]);
var inst_30914__$1 = cljs.core.seq.call(null,inst_30892);
var state_31015__$1 = (function (){var statearr_31072 = state_31015;
(statearr_31072[(7)] = inst_30914__$1);

return statearr_31072;
})();
if(inst_30914__$1){
var statearr_31073_31139 = state_31015__$1;
(statearr_31073_31139[(1)] = (16));

} else {
var statearr_31074_31140 = state_31015__$1;
(statearr_31074_31140[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (9))){
var inst_30944 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31075_31141 = state_31015__$1;
(statearr_31075_31141[(2)] = inst_30944);

(statearr_31075_31141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (5))){
var inst_30890 = cljs.core.deref.call(null,cs);
var inst_30891 = cljs.core.seq.call(null,inst_30890);
var inst_30892 = inst_30891;
var inst_30893 = null;
var inst_30894 = (0);
var inst_30895 = (0);
var state_31015__$1 = (function (){var statearr_31076 = state_31015;
(statearr_31076[(13)] = inst_30895);

(statearr_31076[(15)] = inst_30892);

(statearr_31076[(16)] = inst_30893);

(statearr_31076[(17)] = inst_30894);

return statearr_31076;
})();
var statearr_31077_31142 = state_31015__$1;
(statearr_31077_31142[(2)] = null);

(statearr_31077_31142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (14))){
var state_31015__$1 = state_31015;
var statearr_31078_31143 = state_31015__$1;
(statearr_31078_31143[(2)] = null);

(statearr_31078_31143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (45))){
var inst_31005 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31079_31144 = state_31015__$1;
(statearr_31079_31144[(2)] = inst_31005);

(statearr_31079_31144[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (26))){
var inst_30947 = (state_31015[(29)]);
var inst_31001 = (state_31015[(2)]);
var inst_31002 = cljs.core.seq.call(null,inst_30947);
var state_31015__$1 = (function (){var statearr_31080 = state_31015;
(statearr_31080[(31)] = inst_31001);

return statearr_31080;
})();
if(inst_31002){
var statearr_31081_31145 = state_31015__$1;
(statearr_31081_31145[(1)] = (42));

} else {
var statearr_31082_31146 = state_31015__$1;
(statearr_31082_31146[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (16))){
var inst_30914 = (state_31015[(7)]);
var inst_30916 = cljs.core.chunked_seq_QMARK_.call(null,inst_30914);
var state_31015__$1 = state_31015;
if(inst_30916){
var statearr_31083_31147 = state_31015__$1;
(statearr_31083_31147[(1)] = (19));

} else {
var statearr_31084_31148 = state_31015__$1;
(statearr_31084_31148[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (38))){
var inst_30994 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31085_31149 = state_31015__$1;
(statearr_31085_31149[(2)] = inst_30994);

(statearr_31085_31149[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (30))){
var state_31015__$1 = state_31015;
var statearr_31086_31150 = state_31015__$1;
(statearr_31086_31150[(2)] = null);

(statearr_31086_31150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (10))){
var inst_30895 = (state_31015[(13)]);
var inst_30893 = (state_31015[(16)]);
var inst_30903 = cljs.core._nth.call(null,inst_30893,inst_30895);
var inst_30904 = cljs.core.nth.call(null,inst_30903,(0),null);
var inst_30905 = cljs.core.nth.call(null,inst_30903,(1),null);
var state_31015__$1 = (function (){var statearr_31087 = state_31015;
(statearr_31087[(26)] = inst_30904);

return statearr_31087;
})();
if(cljs.core.truth_(inst_30905)){
var statearr_31088_31151 = state_31015__$1;
(statearr_31088_31151[(1)] = (13));

} else {
var statearr_31089_31152 = state_31015__$1;
(statearr_31089_31152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (18))){
var inst_30940 = (state_31015[(2)]);
var state_31015__$1 = state_31015;
var statearr_31090_31153 = state_31015__$1;
(statearr_31090_31153[(2)] = inst_30940);

(statearr_31090_31153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (42))){
var state_31015__$1 = state_31015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31015__$1,(45),dchan);
} else {
if((state_val_31016 === (37))){
var inst_30883 = (state_31015[(10)]);
var inst_30983 = (state_31015[(23)]);
var inst_30974 = (state_31015[(25)]);
var inst_30983__$1 = cljs.core.first.call(null,inst_30974);
var inst_30984 = cljs.core.async.put_BANG_.call(null,inst_30983__$1,inst_30883,done);
var state_31015__$1 = (function (){var statearr_31091 = state_31015;
(statearr_31091[(23)] = inst_30983__$1);

return statearr_31091;
})();
if(cljs.core.truth_(inst_30984)){
var statearr_31092_31154 = state_31015__$1;
(statearr_31092_31154[(1)] = (39));

} else {
var statearr_31093_31155 = state_31015__$1;
(statearr_31093_31155[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31016 === (8))){
var inst_30895 = (state_31015[(13)]);
var inst_30894 = (state_31015[(17)]);
var inst_30897 = (inst_30895 < inst_30894);
var inst_30898 = inst_30897;
var state_31015__$1 = state_31015;
if(cljs.core.truth_(inst_30898)){
var statearr_31094_31156 = state_31015__$1;
(statearr_31094_31156[(1)] = (10));

} else {
var statearr_31095_31157 = state_31015__$1;
(statearr_31095_31157[(1)] = (11));

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
});})(c__29750__auto___31103,cs,m,dchan,dctr,done))
;
return ((function (switch__29638__auto__,c__29750__auto___31103,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29639__auto__ = null;
var cljs$core$async$mult_$_state_machine__29639__auto____0 = (function (){
var statearr_31099 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31099[(0)] = cljs$core$async$mult_$_state_machine__29639__auto__);

(statearr_31099[(1)] = (1));

return statearr_31099;
});
var cljs$core$async$mult_$_state_machine__29639__auto____1 = (function (state_31015){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_31015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e31100){if((e31100 instanceof Object)){
var ex__29642__auto__ = e31100;
var statearr_31101_31158 = state_31015;
(statearr_31101_31158[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31159 = state_31015;
state_31015 = G__31159;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29639__auto__ = function(state_31015){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29639__auto____1.call(this,state_31015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29639__auto____0;
cljs$core$async$mult_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29639__auto____1;
return cljs$core$async$mult_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___31103,cs,m,dchan,dctr,done))
})();
var state__29752__auto__ = (function (){var statearr_31102 = f__29751__auto__.call(null);
(statearr_31102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___31103);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___31103,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31160 = [];
var len__26441__auto___31163 = arguments.length;
var i__26442__auto___31164 = (0);
while(true){
if((i__26442__auto___31164 < len__26441__auto___31163)){
args31160.push((arguments[i__26442__auto___31164]));

var G__31165 = (i__26442__auto___31164 + (1));
i__26442__auto___31164 = G__31165;
continue;
} else {
}
break;
}

var G__31162 = args31160.length;
switch (G__31162) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31160.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25996__auto__ = (((m == null))?null:m);
var m__25997__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,m,ch);
} else {
var m__25997__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25996__auto__ = (((m == null))?null:m);
var m__25997__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,m,ch);
} else {
var m__25997__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25996__auto__ = (((m == null))?null:m);
var m__25997__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,m);
} else {
var m__25997__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25996__auto__ = (((m == null))?null:m);
var m__25997__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,m,state_map);
} else {
var m__25997__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25996__auto__ = (((m == null))?null:m);
var m__25997__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,m,mode);
} else {
var m__25997__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26448__auto__ = [];
var len__26441__auto___31177 = arguments.length;
var i__26442__auto___31178 = (0);
while(true){
if((i__26442__auto___31178 < len__26441__auto___31177)){
args__26448__auto__.push((arguments[i__26442__auto___31178]));

var G__31179 = (i__26442__auto___31178 + (1));
i__26442__auto___31178 = G__31179;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((3) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26449__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31171){
var map__31172 = p__31171;
var map__31172__$1 = ((((!((map__31172 == null)))?((((map__31172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31172.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31172):map__31172);
var opts = map__31172__$1;
var statearr_31174_31180 = state;
(statearr_31174_31180[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31172,map__31172__$1,opts){
return (function (val){
var statearr_31175_31181 = state;
(statearr_31175_31181[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31172,map__31172__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31176_31182 = state;
(statearr_31176_31182[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31167){
var G__31168 = cljs.core.first.call(null,seq31167);
var seq31167__$1 = cljs.core.next.call(null,seq31167);
var G__31169 = cljs.core.first.call(null,seq31167__$1);
var seq31167__$2 = cljs.core.next.call(null,seq31167__$1);
var G__31170 = cljs.core.first.call(null,seq31167__$2);
var seq31167__$3 = cljs.core.next.call(null,seq31167__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31168,G__31169,G__31170,seq31167__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31350 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31351){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31351 = meta31351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31352,meta31351__$1){
var self__ = this;
var _31352__$1 = this;
return (new cljs.core.async.t_cljs$core$async31350(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31351__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31352){
var self__ = this;
var _31352__$1 = this;
return self__.meta31351;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31351","meta31351",1133819615,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31350";

cljs.core.async.t_cljs$core$async31350.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async31350");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31350 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31350(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31351){
return (new cljs.core.async.t_cljs$core$async31350(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31351));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31350(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29750__auto___31517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___31517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___31517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31454){
var state_val_31455 = (state_31454[(1)]);
if((state_val_31455 === (7))){
var inst_31369 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
var statearr_31456_31518 = state_31454__$1;
(statearr_31456_31518[(2)] = inst_31369);

(statearr_31456_31518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (20))){
var inst_31381 = (state_31454[(7)]);
var state_31454__$1 = state_31454;
var statearr_31457_31519 = state_31454__$1;
(statearr_31457_31519[(2)] = inst_31381);

(statearr_31457_31519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (27))){
var state_31454__$1 = state_31454;
var statearr_31458_31520 = state_31454__$1;
(statearr_31458_31520[(2)] = null);

(statearr_31458_31520[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (1))){
var inst_31356 = (state_31454[(8)]);
var inst_31356__$1 = calc_state.call(null);
var inst_31358 = (inst_31356__$1 == null);
var inst_31359 = cljs.core.not.call(null,inst_31358);
var state_31454__$1 = (function (){var statearr_31459 = state_31454;
(statearr_31459[(8)] = inst_31356__$1);

return statearr_31459;
})();
if(inst_31359){
var statearr_31460_31521 = state_31454__$1;
(statearr_31460_31521[(1)] = (2));

} else {
var statearr_31461_31522 = state_31454__$1;
(statearr_31461_31522[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (24))){
var inst_31414 = (state_31454[(9)]);
var inst_31405 = (state_31454[(10)]);
var inst_31428 = (state_31454[(11)]);
var inst_31428__$1 = inst_31405.call(null,inst_31414);
var state_31454__$1 = (function (){var statearr_31462 = state_31454;
(statearr_31462[(11)] = inst_31428__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31428__$1)){
var statearr_31463_31523 = state_31454__$1;
(statearr_31463_31523[(1)] = (29));

} else {
var statearr_31464_31524 = state_31454__$1;
(statearr_31464_31524[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (4))){
var inst_31372 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
if(cljs.core.truth_(inst_31372)){
var statearr_31465_31525 = state_31454__$1;
(statearr_31465_31525[(1)] = (8));

} else {
var statearr_31466_31526 = state_31454__$1;
(statearr_31466_31526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (15))){
var inst_31399 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
if(cljs.core.truth_(inst_31399)){
var statearr_31467_31527 = state_31454__$1;
(statearr_31467_31527[(1)] = (19));

} else {
var statearr_31468_31528 = state_31454__$1;
(statearr_31468_31528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (21))){
var inst_31404 = (state_31454[(12)]);
var inst_31404__$1 = (state_31454[(2)]);
var inst_31405 = cljs.core.get.call(null,inst_31404__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31406 = cljs.core.get.call(null,inst_31404__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31407 = cljs.core.get.call(null,inst_31404__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31454__$1 = (function (){var statearr_31469 = state_31454;
(statearr_31469[(13)] = inst_31406);

(statearr_31469[(12)] = inst_31404__$1);

(statearr_31469[(10)] = inst_31405);

return statearr_31469;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31454__$1,(22),inst_31407);
} else {
if((state_val_31455 === (31))){
var inst_31436 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
if(cljs.core.truth_(inst_31436)){
var statearr_31470_31529 = state_31454__$1;
(statearr_31470_31529[(1)] = (32));

} else {
var statearr_31471_31530 = state_31454__$1;
(statearr_31471_31530[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (32))){
var inst_31413 = (state_31454[(14)]);
var state_31454__$1 = state_31454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31454__$1,(35),out,inst_31413);
} else {
if((state_val_31455 === (33))){
var inst_31404 = (state_31454[(12)]);
var inst_31381 = inst_31404;
var state_31454__$1 = (function (){var statearr_31472 = state_31454;
(statearr_31472[(7)] = inst_31381);

return statearr_31472;
})();
var statearr_31473_31531 = state_31454__$1;
(statearr_31473_31531[(2)] = null);

(statearr_31473_31531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (13))){
var inst_31381 = (state_31454[(7)]);
var inst_31388 = inst_31381.cljs$lang$protocol_mask$partition0$;
var inst_31389 = (inst_31388 & (64));
var inst_31390 = inst_31381.cljs$core$ISeq$;
var inst_31391 = (cljs.core.PROTOCOL_SENTINEL === inst_31390);
var inst_31392 = (inst_31389) || (inst_31391);
var state_31454__$1 = state_31454;
if(cljs.core.truth_(inst_31392)){
var statearr_31474_31532 = state_31454__$1;
(statearr_31474_31532[(1)] = (16));

} else {
var statearr_31475_31533 = state_31454__$1;
(statearr_31475_31533[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (22))){
var inst_31414 = (state_31454[(9)]);
var inst_31413 = (state_31454[(14)]);
var inst_31412 = (state_31454[(2)]);
var inst_31413__$1 = cljs.core.nth.call(null,inst_31412,(0),null);
var inst_31414__$1 = cljs.core.nth.call(null,inst_31412,(1),null);
var inst_31415 = (inst_31413__$1 == null);
var inst_31416 = cljs.core._EQ_.call(null,inst_31414__$1,change);
var inst_31417 = (inst_31415) || (inst_31416);
var state_31454__$1 = (function (){var statearr_31476 = state_31454;
(statearr_31476[(9)] = inst_31414__$1);

(statearr_31476[(14)] = inst_31413__$1);

return statearr_31476;
})();
if(cljs.core.truth_(inst_31417)){
var statearr_31477_31534 = state_31454__$1;
(statearr_31477_31534[(1)] = (23));

} else {
var statearr_31478_31535 = state_31454__$1;
(statearr_31478_31535[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (36))){
var inst_31404 = (state_31454[(12)]);
var inst_31381 = inst_31404;
var state_31454__$1 = (function (){var statearr_31479 = state_31454;
(statearr_31479[(7)] = inst_31381);

return statearr_31479;
})();
var statearr_31480_31536 = state_31454__$1;
(statearr_31480_31536[(2)] = null);

(statearr_31480_31536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (29))){
var inst_31428 = (state_31454[(11)]);
var state_31454__$1 = state_31454;
var statearr_31481_31537 = state_31454__$1;
(statearr_31481_31537[(2)] = inst_31428);

(statearr_31481_31537[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (6))){
var state_31454__$1 = state_31454;
var statearr_31482_31538 = state_31454__$1;
(statearr_31482_31538[(2)] = false);

(statearr_31482_31538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (28))){
var inst_31424 = (state_31454[(2)]);
var inst_31425 = calc_state.call(null);
var inst_31381 = inst_31425;
var state_31454__$1 = (function (){var statearr_31483 = state_31454;
(statearr_31483[(7)] = inst_31381);

(statearr_31483[(15)] = inst_31424);

return statearr_31483;
})();
var statearr_31484_31539 = state_31454__$1;
(statearr_31484_31539[(2)] = null);

(statearr_31484_31539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (25))){
var inst_31450 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
var statearr_31485_31540 = state_31454__$1;
(statearr_31485_31540[(2)] = inst_31450);

(statearr_31485_31540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (34))){
var inst_31448 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
var statearr_31486_31541 = state_31454__$1;
(statearr_31486_31541[(2)] = inst_31448);

(statearr_31486_31541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (17))){
var state_31454__$1 = state_31454;
var statearr_31487_31542 = state_31454__$1;
(statearr_31487_31542[(2)] = false);

(statearr_31487_31542[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (3))){
var state_31454__$1 = state_31454;
var statearr_31488_31543 = state_31454__$1;
(statearr_31488_31543[(2)] = false);

(statearr_31488_31543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (12))){
var inst_31452 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31454__$1,inst_31452);
} else {
if((state_val_31455 === (2))){
var inst_31356 = (state_31454[(8)]);
var inst_31361 = inst_31356.cljs$lang$protocol_mask$partition0$;
var inst_31362 = (inst_31361 & (64));
var inst_31363 = inst_31356.cljs$core$ISeq$;
var inst_31364 = (cljs.core.PROTOCOL_SENTINEL === inst_31363);
var inst_31365 = (inst_31362) || (inst_31364);
var state_31454__$1 = state_31454;
if(cljs.core.truth_(inst_31365)){
var statearr_31489_31544 = state_31454__$1;
(statearr_31489_31544[(1)] = (5));

} else {
var statearr_31490_31545 = state_31454__$1;
(statearr_31490_31545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (23))){
var inst_31413 = (state_31454[(14)]);
var inst_31419 = (inst_31413 == null);
var state_31454__$1 = state_31454;
if(cljs.core.truth_(inst_31419)){
var statearr_31491_31546 = state_31454__$1;
(statearr_31491_31546[(1)] = (26));

} else {
var statearr_31492_31547 = state_31454__$1;
(statearr_31492_31547[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (35))){
var inst_31439 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
if(cljs.core.truth_(inst_31439)){
var statearr_31493_31548 = state_31454__$1;
(statearr_31493_31548[(1)] = (36));

} else {
var statearr_31494_31549 = state_31454__$1;
(statearr_31494_31549[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (19))){
var inst_31381 = (state_31454[(7)]);
var inst_31401 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31381);
var state_31454__$1 = state_31454;
var statearr_31495_31550 = state_31454__$1;
(statearr_31495_31550[(2)] = inst_31401);

(statearr_31495_31550[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (11))){
var inst_31381 = (state_31454[(7)]);
var inst_31385 = (inst_31381 == null);
var inst_31386 = cljs.core.not.call(null,inst_31385);
var state_31454__$1 = state_31454;
if(inst_31386){
var statearr_31496_31551 = state_31454__$1;
(statearr_31496_31551[(1)] = (13));

} else {
var statearr_31497_31552 = state_31454__$1;
(statearr_31497_31552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (9))){
var inst_31356 = (state_31454[(8)]);
var state_31454__$1 = state_31454;
var statearr_31498_31553 = state_31454__$1;
(statearr_31498_31553[(2)] = inst_31356);

(statearr_31498_31553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (5))){
var state_31454__$1 = state_31454;
var statearr_31499_31554 = state_31454__$1;
(statearr_31499_31554[(2)] = true);

(statearr_31499_31554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (14))){
var state_31454__$1 = state_31454;
var statearr_31500_31555 = state_31454__$1;
(statearr_31500_31555[(2)] = false);

(statearr_31500_31555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (26))){
var inst_31414 = (state_31454[(9)]);
var inst_31421 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31414);
var state_31454__$1 = state_31454;
var statearr_31501_31556 = state_31454__$1;
(statearr_31501_31556[(2)] = inst_31421);

(statearr_31501_31556[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (16))){
var state_31454__$1 = state_31454;
var statearr_31502_31557 = state_31454__$1;
(statearr_31502_31557[(2)] = true);

(statearr_31502_31557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (38))){
var inst_31444 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
var statearr_31503_31558 = state_31454__$1;
(statearr_31503_31558[(2)] = inst_31444);

(statearr_31503_31558[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (30))){
var inst_31414 = (state_31454[(9)]);
var inst_31406 = (state_31454[(13)]);
var inst_31405 = (state_31454[(10)]);
var inst_31431 = cljs.core.empty_QMARK_.call(null,inst_31405);
var inst_31432 = inst_31406.call(null,inst_31414);
var inst_31433 = cljs.core.not.call(null,inst_31432);
var inst_31434 = (inst_31431) && (inst_31433);
var state_31454__$1 = state_31454;
var statearr_31504_31559 = state_31454__$1;
(statearr_31504_31559[(2)] = inst_31434);

(statearr_31504_31559[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (10))){
var inst_31356 = (state_31454[(8)]);
var inst_31377 = (state_31454[(2)]);
var inst_31378 = cljs.core.get.call(null,inst_31377,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31379 = cljs.core.get.call(null,inst_31377,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31380 = cljs.core.get.call(null,inst_31377,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31381 = inst_31356;
var state_31454__$1 = (function (){var statearr_31505 = state_31454;
(statearr_31505[(16)] = inst_31380);

(statearr_31505[(7)] = inst_31381);

(statearr_31505[(17)] = inst_31378);

(statearr_31505[(18)] = inst_31379);

return statearr_31505;
})();
var statearr_31506_31560 = state_31454__$1;
(statearr_31506_31560[(2)] = null);

(statearr_31506_31560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (18))){
var inst_31396 = (state_31454[(2)]);
var state_31454__$1 = state_31454;
var statearr_31507_31561 = state_31454__$1;
(statearr_31507_31561[(2)] = inst_31396);

(statearr_31507_31561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (37))){
var state_31454__$1 = state_31454;
var statearr_31508_31562 = state_31454__$1;
(statearr_31508_31562[(2)] = null);

(statearr_31508_31562[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31455 === (8))){
var inst_31356 = (state_31454[(8)]);
var inst_31374 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31356);
var state_31454__$1 = state_31454;
var statearr_31509_31563 = state_31454__$1;
(statearr_31509_31563[(2)] = inst_31374);

(statearr_31509_31563[(1)] = (10));


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
});})(c__29750__auto___31517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29638__auto__,c__29750__auto___31517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29639__auto__ = null;
var cljs$core$async$mix_$_state_machine__29639__auto____0 = (function (){
var statearr_31513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31513[(0)] = cljs$core$async$mix_$_state_machine__29639__auto__);

(statearr_31513[(1)] = (1));

return statearr_31513;
});
var cljs$core$async$mix_$_state_machine__29639__auto____1 = (function (state_31454){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_31454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e31514){if((e31514 instanceof Object)){
var ex__29642__auto__ = e31514;
var statearr_31515_31564 = state_31454;
(statearr_31515_31564[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31565 = state_31454;
state_31454 = G__31565;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29639__auto__ = function(state_31454){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29639__auto____1.call(this,state_31454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29639__auto____0;
cljs$core$async$mix_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29639__auto____1;
return cljs$core$async$mix_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___31517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29752__auto__ = (function (){var statearr_31516 = f__29751__auto__.call(null);
(statearr_31516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___31517);

return statearr_31516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___31517,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25996__auto__ = (((p == null))?null:p);
var m__25997__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25997__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25996__auto__ = (((p == null))?null:p);
var m__25997__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,p,v,ch);
} else {
var m__25997__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31566 = [];
var len__26441__auto___31569 = arguments.length;
var i__26442__auto___31570 = (0);
while(true){
if((i__26442__auto___31570 < len__26441__auto___31569)){
args31566.push((arguments[i__26442__auto___31570]));

var G__31571 = (i__26442__auto___31570 + (1));
i__26442__auto___31570 = G__31571;
continue;
} else {
}
break;
}

var G__31568 = args31566.length;
switch (G__31568) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31566.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25996__auto__ = (((p == null))?null:p);
var m__25997__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,p);
} else {
var m__25997__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25996__auto__ = (((p == null))?null:p);
var m__25997__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25996__auto__)]);
if(!((m__25997__auto__ == null))){
return m__25997__auto__.call(null,p,v);
} else {
var m__25997__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25997__auto____$1 == null))){
return m__25997__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31574 = [];
var len__26441__auto___31699 = arguments.length;
var i__26442__auto___31700 = (0);
while(true){
if((i__26442__auto___31700 < len__26441__auto___31699)){
args31574.push((arguments[i__26442__auto___31700]));

var G__31701 = (i__26442__auto___31700 + (1));
i__26442__auto___31700 = G__31701;
continue;
} else {
}
break;
}

var G__31576 = args31574.length;
switch (G__31576) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31574.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25333__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25333__auto__,mults){
return (function (p1__31573_SHARP_){
if(cljs.core.truth_(p1__31573_SHARP_.call(null,topic))){
return p1__31573_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31573_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25333__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31577 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31578){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31578 = meta31578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31579,meta31578__$1){
var self__ = this;
var _31579__$1 = this;
return (new cljs.core.async.t_cljs$core$async31577(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31578__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31579){
var self__ = this;
var _31579__$1 = this;
return self__.meta31578;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31577.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31577.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31578","meta31578",978635925,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31577";

cljs.core.async.t_cljs$core$async31577.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async31577");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31577 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31577(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31578){
return (new cljs.core.async.t_cljs$core$async31577(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31578));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31577(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29750__auto___31703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___31703,mults,ensure_mult,p){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___31703,mults,ensure_mult,p){
return (function (state_31651){
var state_val_31652 = (state_31651[(1)]);
if((state_val_31652 === (7))){
var inst_31647 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31653_31704 = state_31651__$1;
(statearr_31653_31704[(2)] = inst_31647);

(statearr_31653_31704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (20))){
var state_31651__$1 = state_31651;
var statearr_31654_31705 = state_31651__$1;
(statearr_31654_31705[(2)] = null);

(statearr_31654_31705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (1))){
var state_31651__$1 = state_31651;
var statearr_31655_31706 = state_31651__$1;
(statearr_31655_31706[(2)] = null);

(statearr_31655_31706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (24))){
var inst_31630 = (state_31651[(7)]);
var inst_31639 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31630);
var state_31651__$1 = state_31651;
var statearr_31656_31707 = state_31651__$1;
(statearr_31656_31707[(2)] = inst_31639);

(statearr_31656_31707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (4))){
var inst_31582 = (state_31651[(8)]);
var inst_31582__$1 = (state_31651[(2)]);
var inst_31583 = (inst_31582__$1 == null);
var state_31651__$1 = (function (){var statearr_31657 = state_31651;
(statearr_31657[(8)] = inst_31582__$1);

return statearr_31657;
})();
if(cljs.core.truth_(inst_31583)){
var statearr_31658_31708 = state_31651__$1;
(statearr_31658_31708[(1)] = (5));

} else {
var statearr_31659_31709 = state_31651__$1;
(statearr_31659_31709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (15))){
var inst_31624 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31660_31710 = state_31651__$1;
(statearr_31660_31710[(2)] = inst_31624);

(statearr_31660_31710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (21))){
var inst_31644 = (state_31651[(2)]);
var state_31651__$1 = (function (){var statearr_31661 = state_31651;
(statearr_31661[(9)] = inst_31644);

return statearr_31661;
})();
var statearr_31662_31711 = state_31651__$1;
(statearr_31662_31711[(2)] = null);

(statearr_31662_31711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (13))){
var inst_31606 = (state_31651[(10)]);
var inst_31608 = cljs.core.chunked_seq_QMARK_.call(null,inst_31606);
var state_31651__$1 = state_31651;
if(inst_31608){
var statearr_31663_31712 = state_31651__$1;
(statearr_31663_31712[(1)] = (16));

} else {
var statearr_31664_31713 = state_31651__$1;
(statearr_31664_31713[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (22))){
var inst_31636 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
if(cljs.core.truth_(inst_31636)){
var statearr_31665_31714 = state_31651__$1;
(statearr_31665_31714[(1)] = (23));

} else {
var statearr_31666_31715 = state_31651__$1;
(statearr_31666_31715[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (6))){
var inst_31632 = (state_31651[(11)]);
var inst_31582 = (state_31651[(8)]);
var inst_31630 = (state_31651[(7)]);
var inst_31630__$1 = topic_fn.call(null,inst_31582);
var inst_31631 = cljs.core.deref.call(null,mults);
var inst_31632__$1 = cljs.core.get.call(null,inst_31631,inst_31630__$1);
var state_31651__$1 = (function (){var statearr_31667 = state_31651;
(statearr_31667[(11)] = inst_31632__$1);

(statearr_31667[(7)] = inst_31630__$1);

return statearr_31667;
})();
if(cljs.core.truth_(inst_31632__$1)){
var statearr_31668_31716 = state_31651__$1;
(statearr_31668_31716[(1)] = (19));

} else {
var statearr_31669_31717 = state_31651__$1;
(statearr_31669_31717[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (25))){
var inst_31641 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31670_31718 = state_31651__$1;
(statearr_31670_31718[(2)] = inst_31641);

(statearr_31670_31718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (17))){
var inst_31606 = (state_31651[(10)]);
var inst_31615 = cljs.core.first.call(null,inst_31606);
var inst_31616 = cljs.core.async.muxch_STAR_.call(null,inst_31615);
var inst_31617 = cljs.core.async.close_BANG_.call(null,inst_31616);
var inst_31618 = cljs.core.next.call(null,inst_31606);
var inst_31592 = inst_31618;
var inst_31593 = null;
var inst_31594 = (0);
var inst_31595 = (0);
var state_31651__$1 = (function (){var statearr_31671 = state_31651;
(statearr_31671[(12)] = inst_31595);

(statearr_31671[(13)] = inst_31594);

(statearr_31671[(14)] = inst_31593);

(statearr_31671[(15)] = inst_31617);

(statearr_31671[(16)] = inst_31592);

return statearr_31671;
})();
var statearr_31672_31719 = state_31651__$1;
(statearr_31672_31719[(2)] = null);

(statearr_31672_31719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (3))){
var inst_31649 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31651__$1,inst_31649);
} else {
if((state_val_31652 === (12))){
var inst_31626 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31673_31720 = state_31651__$1;
(statearr_31673_31720[(2)] = inst_31626);

(statearr_31673_31720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (2))){
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31651__$1,(4),ch);
} else {
if((state_val_31652 === (23))){
var state_31651__$1 = state_31651;
var statearr_31674_31721 = state_31651__$1;
(statearr_31674_31721[(2)] = null);

(statearr_31674_31721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (19))){
var inst_31632 = (state_31651[(11)]);
var inst_31582 = (state_31651[(8)]);
var inst_31634 = cljs.core.async.muxch_STAR_.call(null,inst_31632);
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31651__$1,(22),inst_31634,inst_31582);
} else {
if((state_val_31652 === (11))){
var inst_31606 = (state_31651[(10)]);
var inst_31592 = (state_31651[(16)]);
var inst_31606__$1 = cljs.core.seq.call(null,inst_31592);
var state_31651__$1 = (function (){var statearr_31675 = state_31651;
(statearr_31675[(10)] = inst_31606__$1);

return statearr_31675;
})();
if(inst_31606__$1){
var statearr_31676_31722 = state_31651__$1;
(statearr_31676_31722[(1)] = (13));

} else {
var statearr_31677_31723 = state_31651__$1;
(statearr_31677_31723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (9))){
var inst_31628 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31678_31724 = state_31651__$1;
(statearr_31678_31724[(2)] = inst_31628);

(statearr_31678_31724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (5))){
var inst_31589 = cljs.core.deref.call(null,mults);
var inst_31590 = cljs.core.vals.call(null,inst_31589);
var inst_31591 = cljs.core.seq.call(null,inst_31590);
var inst_31592 = inst_31591;
var inst_31593 = null;
var inst_31594 = (0);
var inst_31595 = (0);
var state_31651__$1 = (function (){var statearr_31679 = state_31651;
(statearr_31679[(12)] = inst_31595);

(statearr_31679[(13)] = inst_31594);

(statearr_31679[(14)] = inst_31593);

(statearr_31679[(16)] = inst_31592);

return statearr_31679;
})();
var statearr_31680_31725 = state_31651__$1;
(statearr_31680_31725[(2)] = null);

(statearr_31680_31725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (14))){
var state_31651__$1 = state_31651;
var statearr_31684_31726 = state_31651__$1;
(statearr_31684_31726[(2)] = null);

(statearr_31684_31726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (16))){
var inst_31606 = (state_31651[(10)]);
var inst_31610 = cljs.core.chunk_first.call(null,inst_31606);
var inst_31611 = cljs.core.chunk_rest.call(null,inst_31606);
var inst_31612 = cljs.core.count.call(null,inst_31610);
var inst_31592 = inst_31611;
var inst_31593 = inst_31610;
var inst_31594 = inst_31612;
var inst_31595 = (0);
var state_31651__$1 = (function (){var statearr_31685 = state_31651;
(statearr_31685[(12)] = inst_31595);

(statearr_31685[(13)] = inst_31594);

(statearr_31685[(14)] = inst_31593);

(statearr_31685[(16)] = inst_31592);

return statearr_31685;
})();
var statearr_31686_31727 = state_31651__$1;
(statearr_31686_31727[(2)] = null);

(statearr_31686_31727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (10))){
var inst_31595 = (state_31651[(12)]);
var inst_31594 = (state_31651[(13)]);
var inst_31593 = (state_31651[(14)]);
var inst_31592 = (state_31651[(16)]);
var inst_31600 = cljs.core._nth.call(null,inst_31593,inst_31595);
var inst_31601 = cljs.core.async.muxch_STAR_.call(null,inst_31600);
var inst_31602 = cljs.core.async.close_BANG_.call(null,inst_31601);
var inst_31603 = (inst_31595 + (1));
var tmp31681 = inst_31594;
var tmp31682 = inst_31593;
var tmp31683 = inst_31592;
var inst_31592__$1 = tmp31683;
var inst_31593__$1 = tmp31682;
var inst_31594__$1 = tmp31681;
var inst_31595__$1 = inst_31603;
var state_31651__$1 = (function (){var statearr_31687 = state_31651;
(statearr_31687[(12)] = inst_31595__$1);

(statearr_31687[(13)] = inst_31594__$1);

(statearr_31687[(14)] = inst_31593__$1);

(statearr_31687[(17)] = inst_31602);

(statearr_31687[(16)] = inst_31592__$1);

return statearr_31687;
})();
var statearr_31688_31728 = state_31651__$1;
(statearr_31688_31728[(2)] = null);

(statearr_31688_31728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (18))){
var inst_31621 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31689_31729 = state_31651__$1;
(statearr_31689_31729[(2)] = inst_31621);

(statearr_31689_31729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (8))){
var inst_31595 = (state_31651[(12)]);
var inst_31594 = (state_31651[(13)]);
var inst_31597 = (inst_31595 < inst_31594);
var inst_31598 = inst_31597;
var state_31651__$1 = state_31651;
if(cljs.core.truth_(inst_31598)){
var statearr_31690_31730 = state_31651__$1;
(statearr_31690_31730[(1)] = (10));

} else {
var statearr_31691_31731 = state_31651__$1;
(statearr_31691_31731[(1)] = (11));

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
});})(c__29750__auto___31703,mults,ensure_mult,p))
;
return ((function (switch__29638__auto__,c__29750__auto___31703,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_31695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31695[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_31695[(1)] = (1));

return statearr_31695;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_31651){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_31651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e31696){if((e31696 instanceof Object)){
var ex__29642__auto__ = e31696;
var statearr_31697_31732 = state_31651;
(statearr_31697_31732[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31733 = state_31651;
state_31651 = G__31733;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_31651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_31651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___31703,mults,ensure_mult,p))
})();
var state__29752__auto__ = (function (){var statearr_31698 = f__29751__auto__.call(null);
(statearr_31698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___31703);

return statearr_31698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___31703,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31734 = [];
var len__26441__auto___31737 = arguments.length;
var i__26442__auto___31738 = (0);
while(true){
if((i__26442__auto___31738 < len__26441__auto___31737)){
args31734.push((arguments[i__26442__auto___31738]));

var G__31739 = (i__26442__auto___31738 + (1));
i__26442__auto___31738 = G__31739;
continue;
} else {
}
break;
}

var G__31736 = args31734.length;
switch (G__31736) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31734.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31741 = [];
var len__26441__auto___31744 = arguments.length;
var i__26442__auto___31745 = (0);
while(true){
if((i__26442__auto___31745 < len__26441__auto___31744)){
args31741.push((arguments[i__26442__auto___31745]));

var G__31746 = (i__26442__auto___31745 + (1));
i__26442__auto___31745 = G__31746;
continue;
} else {
}
break;
}

var G__31743 = args31741.length;
switch (G__31743) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31741.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31748 = [];
var len__26441__auto___31819 = arguments.length;
var i__26442__auto___31820 = (0);
while(true){
if((i__26442__auto___31820 < len__26441__auto___31819)){
args31748.push((arguments[i__26442__auto___31820]));

var G__31821 = (i__26442__auto___31820 + (1));
i__26442__auto___31820 = G__31821;
continue;
} else {
}
break;
}

var G__31750 = args31748.length;
switch (G__31750) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31748.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29750__auto___31823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___31823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___31823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31789){
var state_val_31790 = (state_31789[(1)]);
if((state_val_31790 === (7))){
var state_31789__$1 = state_31789;
var statearr_31791_31824 = state_31789__$1;
(statearr_31791_31824[(2)] = null);

(statearr_31791_31824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (1))){
var state_31789__$1 = state_31789;
var statearr_31792_31825 = state_31789__$1;
(statearr_31792_31825[(2)] = null);

(statearr_31792_31825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (4))){
var inst_31753 = (state_31789[(7)]);
var inst_31755 = (inst_31753 < cnt);
var state_31789__$1 = state_31789;
if(cljs.core.truth_(inst_31755)){
var statearr_31793_31826 = state_31789__$1;
(statearr_31793_31826[(1)] = (6));

} else {
var statearr_31794_31827 = state_31789__$1;
(statearr_31794_31827[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (15))){
var inst_31785 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
var statearr_31795_31828 = state_31789__$1;
(statearr_31795_31828[(2)] = inst_31785);

(statearr_31795_31828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (13))){
var inst_31778 = cljs.core.async.close_BANG_.call(null,out);
var state_31789__$1 = state_31789;
var statearr_31796_31829 = state_31789__$1;
(statearr_31796_31829[(2)] = inst_31778);

(statearr_31796_31829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (6))){
var state_31789__$1 = state_31789;
var statearr_31797_31830 = state_31789__$1;
(statearr_31797_31830[(2)] = null);

(statearr_31797_31830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (3))){
var inst_31787 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31789__$1,inst_31787);
} else {
if((state_val_31790 === (12))){
var inst_31775 = (state_31789[(8)]);
var inst_31775__$1 = (state_31789[(2)]);
var inst_31776 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31775__$1);
var state_31789__$1 = (function (){var statearr_31798 = state_31789;
(statearr_31798[(8)] = inst_31775__$1);

return statearr_31798;
})();
if(cljs.core.truth_(inst_31776)){
var statearr_31799_31831 = state_31789__$1;
(statearr_31799_31831[(1)] = (13));

} else {
var statearr_31800_31832 = state_31789__$1;
(statearr_31800_31832[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (2))){
var inst_31752 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31753 = (0);
var state_31789__$1 = (function (){var statearr_31801 = state_31789;
(statearr_31801[(9)] = inst_31752);

(statearr_31801[(7)] = inst_31753);

return statearr_31801;
})();
var statearr_31802_31833 = state_31789__$1;
(statearr_31802_31833[(2)] = null);

(statearr_31802_31833[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (11))){
var inst_31753 = (state_31789[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31789,(10),Object,null,(9));
var inst_31762 = chs__$1.call(null,inst_31753);
var inst_31763 = done.call(null,inst_31753);
var inst_31764 = cljs.core.async.take_BANG_.call(null,inst_31762,inst_31763);
var state_31789__$1 = state_31789;
var statearr_31803_31834 = state_31789__$1;
(statearr_31803_31834[(2)] = inst_31764);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31789__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (9))){
var inst_31753 = (state_31789[(7)]);
var inst_31766 = (state_31789[(2)]);
var inst_31767 = (inst_31753 + (1));
var inst_31753__$1 = inst_31767;
var state_31789__$1 = (function (){var statearr_31804 = state_31789;
(statearr_31804[(10)] = inst_31766);

(statearr_31804[(7)] = inst_31753__$1);

return statearr_31804;
})();
var statearr_31805_31835 = state_31789__$1;
(statearr_31805_31835[(2)] = null);

(statearr_31805_31835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (5))){
var inst_31773 = (state_31789[(2)]);
var state_31789__$1 = (function (){var statearr_31806 = state_31789;
(statearr_31806[(11)] = inst_31773);

return statearr_31806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31789__$1,(12),dchan);
} else {
if((state_val_31790 === (14))){
var inst_31775 = (state_31789[(8)]);
var inst_31780 = cljs.core.apply.call(null,f,inst_31775);
var state_31789__$1 = state_31789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31789__$1,(16),out,inst_31780);
} else {
if((state_val_31790 === (16))){
var inst_31782 = (state_31789[(2)]);
var state_31789__$1 = (function (){var statearr_31807 = state_31789;
(statearr_31807[(12)] = inst_31782);

return statearr_31807;
})();
var statearr_31808_31836 = state_31789__$1;
(statearr_31808_31836[(2)] = null);

(statearr_31808_31836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (10))){
var inst_31757 = (state_31789[(2)]);
var inst_31758 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31789__$1 = (function (){var statearr_31809 = state_31789;
(statearr_31809[(13)] = inst_31757);

return statearr_31809;
})();
var statearr_31810_31837 = state_31789__$1;
(statearr_31810_31837[(2)] = inst_31758);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31789__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31790 === (8))){
var inst_31771 = (state_31789[(2)]);
var state_31789__$1 = state_31789;
var statearr_31811_31838 = state_31789__$1;
(statearr_31811_31838[(2)] = inst_31771);

(statearr_31811_31838[(1)] = (5));


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
});})(c__29750__auto___31823,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29638__auto__,c__29750__auto___31823,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_31815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31815[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_31815[(1)] = (1));

return statearr_31815;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_31789){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_31789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e31816){if((e31816 instanceof Object)){
var ex__29642__auto__ = e31816;
var statearr_31817_31839 = state_31789;
(statearr_31817_31839[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31840 = state_31789;
state_31789 = G__31840;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_31789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_31789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___31823,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29752__auto__ = (function (){var statearr_31818 = f__29751__auto__.call(null);
(statearr_31818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___31823);

return statearr_31818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___31823,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31842 = [];
var len__26441__auto___31900 = arguments.length;
var i__26442__auto___31901 = (0);
while(true){
if((i__26442__auto___31901 < len__26441__auto___31900)){
args31842.push((arguments[i__26442__auto___31901]));

var G__31902 = (i__26442__auto___31901 + (1));
i__26442__auto___31901 = G__31902;
continue;
} else {
}
break;
}

var G__31844 = args31842.length;
switch (G__31844) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31842.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___31904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___31904,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___31904,out){
return (function (state_31876){
var state_val_31877 = (state_31876[(1)]);
if((state_val_31877 === (7))){
var inst_31856 = (state_31876[(7)]);
var inst_31855 = (state_31876[(8)]);
var inst_31855__$1 = (state_31876[(2)]);
var inst_31856__$1 = cljs.core.nth.call(null,inst_31855__$1,(0),null);
var inst_31857 = cljs.core.nth.call(null,inst_31855__$1,(1),null);
var inst_31858 = (inst_31856__$1 == null);
var state_31876__$1 = (function (){var statearr_31878 = state_31876;
(statearr_31878[(7)] = inst_31856__$1);

(statearr_31878[(8)] = inst_31855__$1);

(statearr_31878[(9)] = inst_31857);

return statearr_31878;
})();
if(cljs.core.truth_(inst_31858)){
var statearr_31879_31905 = state_31876__$1;
(statearr_31879_31905[(1)] = (8));

} else {
var statearr_31880_31906 = state_31876__$1;
(statearr_31880_31906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (1))){
var inst_31845 = cljs.core.vec.call(null,chs);
var inst_31846 = inst_31845;
var state_31876__$1 = (function (){var statearr_31881 = state_31876;
(statearr_31881[(10)] = inst_31846);

return statearr_31881;
})();
var statearr_31882_31907 = state_31876__$1;
(statearr_31882_31907[(2)] = null);

(statearr_31882_31907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (4))){
var inst_31846 = (state_31876[(10)]);
var state_31876__$1 = state_31876;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31876__$1,(7),inst_31846);
} else {
if((state_val_31877 === (6))){
var inst_31872 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31883_31908 = state_31876__$1;
(statearr_31883_31908[(2)] = inst_31872);

(statearr_31883_31908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (3))){
var inst_31874 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31876__$1,inst_31874);
} else {
if((state_val_31877 === (2))){
var inst_31846 = (state_31876[(10)]);
var inst_31848 = cljs.core.count.call(null,inst_31846);
var inst_31849 = (inst_31848 > (0));
var state_31876__$1 = state_31876;
if(cljs.core.truth_(inst_31849)){
var statearr_31885_31909 = state_31876__$1;
(statearr_31885_31909[(1)] = (4));

} else {
var statearr_31886_31910 = state_31876__$1;
(statearr_31886_31910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (11))){
var inst_31846 = (state_31876[(10)]);
var inst_31865 = (state_31876[(2)]);
var tmp31884 = inst_31846;
var inst_31846__$1 = tmp31884;
var state_31876__$1 = (function (){var statearr_31887 = state_31876;
(statearr_31887[(10)] = inst_31846__$1);

(statearr_31887[(11)] = inst_31865);

return statearr_31887;
})();
var statearr_31888_31911 = state_31876__$1;
(statearr_31888_31911[(2)] = null);

(statearr_31888_31911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (9))){
var inst_31856 = (state_31876[(7)]);
var state_31876__$1 = state_31876;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31876__$1,(11),out,inst_31856);
} else {
if((state_val_31877 === (5))){
var inst_31870 = cljs.core.async.close_BANG_.call(null,out);
var state_31876__$1 = state_31876;
var statearr_31889_31912 = state_31876__$1;
(statearr_31889_31912[(2)] = inst_31870);

(statearr_31889_31912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (10))){
var inst_31868 = (state_31876[(2)]);
var state_31876__$1 = state_31876;
var statearr_31890_31913 = state_31876__$1;
(statearr_31890_31913[(2)] = inst_31868);

(statearr_31890_31913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31877 === (8))){
var inst_31856 = (state_31876[(7)]);
var inst_31855 = (state_31876[(8)]);
var inst_31857 = (state_31876[(9)]);
var inst_31846 = (state_31876[(10)]);
var inst_31860 = (function (){var cs = inst_31846;
var vec__31851 = inst_31855;
var v = inst_31856;
var c = inst_31857;
return ((function (cs,vec__31851,v,c,inst_31856,inst_31855,inst_31857,inst_31846,state_val_31877,c__29750__auto___31904,out){
return (function (p1__31841_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31841_SHARP_);
});
;})(cs,vec__31851,v,c,inst_31856,inst_31855,inst_31857,inst_31846,state_val_31877,c__29750__auto___31904,out))
})();
var inst_31861 = cljs.core.filterv.call(null,inst_31860,inst_31846);
var inst_31846__$1 = inst_31861;
var state_31876__$1 = (function (){var statearr_31891 = state_31876;
(statearr_31891[(10)] = inst_31846__$1);

return statearr_31891;
})();
var statearr_31892_31914 = state_31876__$1;
(statearr_31892_31914[(2)] = null);

(statearr_31892_31914[(1)] = (2));


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
});})(c__29750__auto___31904,out))
;
return ((function (switch__29638__auto__,c__29750__auto___31904,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_31896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31896[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_31896[(1)] = (1));

return statearr_31896;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_31876){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_31876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e31897){if((e31897 instanceof Object)){
var ex__29642__auto__ = e31897;
var statearr_31898_31915 = state_31876;
(statearr_31898_31915[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31916 = state_31876;
state_31876 = G__31916;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_31876){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_31876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___31904,out))
})();
var state__29752__auto__ = (function (){var statearr_31899 = f__29751__auto__.call(null);
(statearr_31899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___31904);

return statearr_31899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___31904,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31917 = [];
var len__26441__auto___31966 = arguments.length;
var i__26442__auto___31967 = (0);
while(true){
if((i__26442__auto___31967 < len__26441__auto___31966)){
args31917.push((arguments[i__26442__auto___31967]));

var G__31968 = (i__26442__auto___31967 + (1));
i__26442__auto___31967 = G__31968;
continue;
} else {
}
break;
}

var G__31919 = args31917.length;
switch (G__31919) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31917.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___31970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___31970,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___31970,out){
return (function (state_31943){
var state_val_31944 = (state_31943[(1)]);
if((state_val_31944 === (7))){
var inst_31925 = (state_31943[(7)]);
var inst_31925__$1 = (state_31943[(2)]);
var inst_31926 = (inst_31925__$1 == null);
var inst_31927 = cljs.core.not.call(null,inst_31926);
var state_31943__$1 = (function (){var statearr_31945 = state_31943;
(statearr_31945[(7)] = inst_31925__$1);

return statearr_31945;
})();
if(inst_31927){
var statearr_31946_31971 = state_31943__$1;
(statearr_31946_31971[(1)] = (8));

} else {
var statearr_31947_31972 = state_31943__$1;
(statearr_31947_31972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (1))){
var inst_31920 = (0);
var state_31943__$1 = (function (){var statearr_31948 = state_31943;
(statearr_31948[(8)] = inst_31920);

return statearr_31948;
})();
var statearr_31949_31973 = state_31943__$1;
(statearr_31949_31973[(2)] = null);

(statearr_31949_31973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (4))){
var state_31943__$1 = state_31943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31943__$1,(7),ch);
} else {
if((state_val_31944 === (6))){
var inst_31938 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31950_31974 = state_31943__$1;
(statearr_31950_31974[(2)] = inst_31938);

(statearr_31950_31974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (3))){
var inst_31940 = (state_31943[(2)]);
var inst_31941 = cljs.core.async.close_BANG_.call(null,out);
var state_31943__$1 = (function (){var statearr_31951 = state_31943;
(statearr_31951[(9)] = inst_31940);

return statearr_31951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31943__$1,inst_31941);
} else {
if((state_val_31944 === (2))){
var inst_31920 = (state_31943[(8)]);
var inst_31922 = (inst_31920 < n);
var state_31943__$1 = state_31943;
if(cljs.core.truth_(inst_31922)){
var statearr_31952_31975 = state_31943__$1;
(statearr_31952_31975[(1)] = (4));

} else {
var statearr_31953_31976 = state_31943__$1;
(statearr_31953_31976[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (11))){
var inst_31920 = (state_31943[(8)]);
var inst_31930 = (state_31943[(2)]);
var inst_31931 = (inst_31920 + (1));
var inst_31920__$1 = inst_31931;
var state_31943__$1 = (function (){var statearr_31954 = state_31943;
(statearr_31954[(10)] = inst_31930);

(statearr_31954[(8)] = inst_31920__$1);

return statearr_31954;
})();
var statearr_31955_31977 = state_31943__$1;
(statearr_31955_31977[(2)] = null);

(statearr_31955_31977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (9))){
var state_31943__$1 = state_31943;
var statearr_31956_31978 = state_31943__$1;
(statearr_31956_31978[(2)] = null);

(statearr_31956_31978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (5))){
var state_31943__$1 = state_31943;
var statearr_31957_31979 = state_31943__$1;
(statearr_31957_31979[(2)] = null);

(statearr_31957_31979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (10))){
var inst_31935 = (state_31943[(2)]);
var state_31943__$1 = state_31943;
var statearr_31958_31980 = state_31943__$1;
(statearr_31958_31980[(2)] = inst_31935);

(statearr_31958_31980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31944 === (8))){
var inst_31925 = (state_31943[(7)]);
var state_31943__$1 = state_31943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31943__$1,(11),out,inst_31925);
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
});})(c__29750__auto___31970,out))
;
return ((function (switch__29638__auto__,c__29750__auto___31970,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_31962 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31962[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_31962[(1)] = (1));

return statearr_31962;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_31943){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_31943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e31963){if((e31963 instanceof Object)){
var ex__29642__auto__ = e31963;
var statearr_31964_31981 = state_31943;
(statearr_31964_31981[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31982 = state_31943;
state_31943 = G__31982;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_31943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_31943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___31970,out))
})();
var state__29752__auto__ = (function (){var statearr_31965 = f__29751__auto__.call(null);
(statearr_31965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___31970);

return statearr_31965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___31970,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31990 = (function (f,ch,meta31991){
this.f = f;
this.ch = ch;
this.meta31991 = meta31991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31992,meta31991__$1){
var self__ = this;
var _31992__$1 = this;
return (new cljs.core.async.t_cljs$core$async31990(self__.f,self__.ch,meta31991__$1));
});

cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31992){
var self__ = this;
var _31992__$1 = this;
return self__.meta31991;
});

cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async31993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31993 = (function (f,ch,meta31991,_,fn1,meta31994){
this.f = f;
this.ch = ch;
this.meta31991 = meta31991;
this._ = _;
this.fn1 = fn1;
this.meta31994 = meta31994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_31995,meta31994__$1){
var self__ = this;
var _31995__$1 = this;
return (new cljs.core.async.t_cljs$core$async31993(self__.f,self__.ch,self__.meta31991,self__._,self__.fn1,meta31994__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_31995){
var self__ = this;
var _31995__$1 = this;
return self__.meta31994;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async31993.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31983_SHARP_){
return f1.call(null,(((p1__31983_SHARP_ == null))?null:self__.f.call(null,p1__31983_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async31993.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31991","meta31991",889251314,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31990","cljs.core.async/t_cljs$core$async31990",-1015912836,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31994","meta31994",1551699676,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async31993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31993";

cljs.core.async.t_cljs$core$async31993.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async31993");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async31993 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31993(f__$1,ch__$1,meta31991__$1,___$2,fn1__$1,meta31994){
return (new cljs.core.async.t_cljs$core$async31993(f__$1,ch__$1,meta31991__$1,___$2,fn1__$1,meta31994));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async31993(self__.f,self__.ch,self__.meta31991,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25321__auto__ = ret;
if(cljs.core.truth_(and__25321__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25321__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31990.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async31990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31991","meta31991",889251314,null)], null);
});

cljs.core.async.t_cljs$core$async31990.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31990";

cljs.core.async.t_cljs$core$async31990.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async31990");
});

cljs.core.async.__GT_t_cljs$core$async31990 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31990(f__$1,ch__$1,meta31991){
return (new cljs.core.async.t_cljs$core$async31990(f__$1,ch__$1,meta31991));
});

}

return (new cljs.core.async.t_cljs$core$async31990(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async31999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31999 = (function (f,ch,meta32000){
this.f = f;
this.ch = ch;
this.meta32000 = meta32000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32001,meta32000__$1){
var self__ = this;
var _32001__$1 = this;
return (new cljs.core.async.t_cljs$core$async31999(self__.f,self__.ch,meta32000__$1));
});

cljs.core.async.t_cljs$core$async31999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32001){
var self__ = this;
var _32001__$1 = this;
return self__.meta32000;
});

cljs.core.async.t_cljs$core$async31999.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async31999.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async31999.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async31999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32000","meta32000",-289921649,null)], null);
});

cljs.core.async.t_cljs$core$async31999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31999";

cljs.core.async.t_cljs$core$async31999.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async31999");
});

cljs.core.async.__GT_t_cljs$core$async31999 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31999(f__$1,ch__$1,meta32000){
return (new cljs.core.async.t_cljs$core$async31999(f__$1,ch__$1,meta32000));
});

}

return (new cljs.core.async.t_cljs$core$async31999(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32005 = (function (p,ch,meta32006){
this.p = p;
this.ch = ch;
this.meta32006 = meta32006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32007,meta32006__$1){
var self__ = this;
var _32007__$1 = this;
return (new cljs.core.async.t_cljs$core$async32005(self__.p,self__.ch,meta32006__$1));
});

cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32007){
var self__ = this;
var _32007__$1 = this;
return self__.meta32006;
});

cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32006","meta32006",-1417772178,null)], null);
});

cljs.core.async.t_cljs$core$async32005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32005";

cljs.core.async.t_cljs$core$async32005.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async32005");
});

cljs.core.async.__GT_t_cljs$core$async32005 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32005(p__$1,ch__$1,meta32006){
return (new cljs.core.async.t_cljs$core$async32005(p__$1,ch__$1,meta32006));
});

}

return (new cljs.core.async.t_cljs$core$async32005(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32008 = [];
var len__26441__auto___32052 = arguments.length;
var i__26442__auto___32053 = (0);
while(true){
if((i__26442__auto___32053 < len__26441__auto___32052)){
args32008.push((arguments[i__26442__auto___32053]));

var G__32054 = (i__26442__auto___32053 + (1));
i__26442__auto___32053 = G__32054;
continue;
} else {
}
break;
}

var G__32010 = args32008.length;
switch (G__32010) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32008.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___32056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___32056,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___32056,out){
return (function (state_32031){
var state_val_32032 = (state_32031[(1)]);
if((state_val_32032 === (7))){
var inst_32027 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32033_32057 = state_32031__$1;
(statearr_32033_32057[(2)] = inst_32027);

(statearr_32033_32057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (1))){
var state_32031__$1 = state_32031;
var statearr_32034_32058 = state_32031__$1;
(statearr_32034_32058[(2)] = null);

(statearr_32034_32058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (4))){
var inst_32013 = (state_32031[(7)]);
var inst_32013__$1 = (state_32031[(2)]);
var inst_32014 = (inst_32013__$1 == null);
var state_32031__$1 = (function (){var statearr_32035 = state_32031;
(statearr_32035[(7)] = inst_32013__$1);

return statearr_32035;
})();
if(cljs.core.truth_(inst_32014)){
var statearr_32036_32059 = state_32031__$1;
(statearr_32036_32059[(1)] = (5));

} else {
var statearr_32037_32060 = state_32031__$1;
(statearr_32037_32060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (6))){
var inst_32013 = (state_32031[(7)]);
var inst_32018 = p.call(null,inst_32013);
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_32018)){
var statearr_32038_32061 = state_32031__$1;
(statearr_32038_32061[(1)] = (8));

} else {
var statearr_32039_32062 = state_32031__$1;
(statearr_32039_32062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (3))){
var inst_32029 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32031__$1,inst_32029);
} else {
if((state_val_32032 === (2))){
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(4),ch);
} else {
if((state_val_32032 === (11))){
var inst_32021 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32040_32063 = state_32031__$1;
(statearr_32040_32063[(2)] = inst_32021);

(statearr_32040_32063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (9))){
var state_32031__$1 = state_32031;
var statearr_32041_32064 = state_32031__$1;
(statearr_32041_32064[(2)] = null);

(statearr_32041_32064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (5))){
var inst_32016 = cljs.core.async.close_BANG_.call(null,out);
var state_32031__$1 = state_32031;
var statearr_32042_32065 = state_32031__$1;
(statearr_32042_32065[(2)] = inst_32016);

(statearr_32042_32065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (10))){
var inst_32024 = (state_32031[(2)]);
var state_32031__$1 = (function (){var statearr_32043 = state_32031;
(statearr_32043[(8)] = inst_32024);

return statearr_32043;
})();
var statearr_32044_32066 = state_32031__$1;
(statearr_32044_32066[(2)] = null);

(statearr_32044_32066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (8))){
var inst_32013 = (state_32031[(7)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32031__$1,(11),out,inst_32013);
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
});})(c__29750__auto___32056,out))
;
return ((function (switch__29638__auto__,c__29750__auto___32056,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_32048 = [null,null,null,null,null,null,null,null,null];
(statearr_32048[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_32048[(1)] = (1));

return statearr_32048;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_32031){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_32031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e32049){if((e32049 instanceof Object)){
var ex__29642__auto__ = e32049;
var statearr_32050_32067 = state_32031;
(statearr_32050_32067[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32068 = state_32031;
state_32031 = G__32068;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_32031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_32031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___32056,out))
})();
var state__29752__auto__ = (function (){var statearr_32051 = f__29751__auto__.call(null);
(statearr_32051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___32056);

return statearr_32051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___32056,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32069 = [];
var len__26441__auto___32072 = arguments.length;
var i__26442__auto___32073 = (0);
while(true){
if((i__26442__auto___32073 < len__26441__auto___32072)){
args32069.push((arguments[i__26442__auto___32073]));

var G__32074 = (i__26442__auto___32073 + (1));
i__26442__auto___32073 = G__32074;
continue;
} else {
}
break;
}

var G__32071 = args32069.length;
switch (G__32071) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32069.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__){
return (function (state_32241){
var state_val_32242 = (state_32241[(1)]);
if((state_val_32242 === (7))){
var inst_32237 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32243_32284 = state_32241__$1;
(statearr_32243_32284[(2)] = inst_32237);

(statearr_32243_32284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (20))){
var inst_32207 = (state_32241[(7)]);
var inst_32218 = (state_32241[(2)]);
var inst_32219 = cljs.core.next.call(null,inst_32207);
var inst_32193 = inst_32219;
var inst_32194 = null;
var inst_32195 = (0);
var inst_32196 = (0);
var state_32241__$1 = (function (){var statearr_32244 = state_32241;
(statearr_32244[(8)] = inst_32195);

(statearr_32244[(9)] = inst_32218);

(statearr_32244[(10)] = inst_32193);

(statearr_32244[(11)] = inst_32196);

(statearr_32244[(12)] = inst_32194);

return statearr_32244;
})();
var statearr_32245_32285 = state_32241__$1;
(statearr_32245_32285[(2)] = null);

(statearr_32245_32285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (1))){
var state_32241__$1 = state_32241;
var statearr_32246_32286 = state_32241__$1;
(statearr_32246_32286[(2)] = null);

(statearr_32246_32286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (4))){
var inst_32182 = (state_32241[(13)]);
var inst_32182__$1 = (state_32241[(2)]);
var inst_32183 = (inst_32182__$1 == null);
var state_32241__$1 = (function (){var statearr_32247 = state_32241;
(statearr_32247[(13)] = inst_32182__$1);

return statearr_32247;
})();
if(cljs.core.truth_(inst_32183)){
var statearr_32248_32287 = state_32241__$1;
(statearr_32248_32287[(1)] = (5));

} else {
var statearr_32249_32288 = state_32241__$1;
(statearr_32249_32288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (15))){
var state_32241__$1 = state_32241;
var statearr_32253_32289 = state_32241__$1;
(statearr_32253_32289[(2)] = null);

(statearr_32253_32289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (21))){
var state_32241__$1 = state_32241;
var statearr_32254_32290 = state_32241__$1;
(statearr_32254_32290[(2)] = null);

(statearr_32254_32290[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (13))){
var inst_32195 = (state_32241[(8)]);
var inst_32193 = (state_32241[(10)]);
var inst_32196 = (state_32241[(11)]);
var inst_32194 = (state_32241[(12)]);
var inst_32203 = (state_32241[(2)]);
var inst_32204 = (inst_32196 + (1));
var tmp32250 = inst_32195;
var tmp32251 = inst_32193;
var tmp32252 = inst_32194;
var inst_32193__$1 = tmp32251;
var inst_32194__$1 = tmp32252;
var inst_32195__$1 = tmp32250;
var inst_32196__$1 = inst_32204;
var state_32241__$1 = (function (){var statearr_32255 = state_32241;
(statearr_32255[(8)] = inst_32195__$1);

(statearr_32255[(10)] = inst_32193__$1);

(statearr_32255[(11)] = inst_32196__$1);

(statearr_32255[(12)] = inst_32194__$1);

(statearr_32255[(14)] = inst_32203);

return statearr_32255;
})();
var statearr_32256_32291 = state_32241__$1;
(statearr_32256_32291[(2)] = null);

(statearr_32256_32291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (22))){
var state_32241__$1 = state_32241;
var statearr_32257_32292 = state_32241__$1;
(statearr_32257_32292[(2)] = null);

(statearr_32257_32292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (6))){
var inst_32182 = (state_32241[(13)]);
var inst_32191 = f.call(null,inst_32182);
var inst_32192 = cljs.core.seq.call(null,inst_32191);
var inst_32193 = inst_32192;
var inst_32194 = null;
var inst_32195 = (0);
var inst_32196 = (0);
var state_32241__$1 = (function (){var statearr_32258 = state_32241;
(statearr_32258[(8)] = inst_32195);

(statearr_32258[(10)] = inst_32193);

(statearr_32258[(11)] = inst_32196);

(statearr_32258[(12)] = inst_32194);

return statearr_32258;
})();
var statearr_32259_32293 = state_32241__$1;
(statearr_32259_32293[(2)] = null);

(statearr_32259_32293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (17))){
var inst_32207 = (state_32241[(7)]);
var inst_32211 = cljs.core.chunk_first.call(null,inst_32207);
var inst_32212 = cljs.core.chunk_rest.call(null,inst_32207);
var inst_32213 = cljs.core.count.call(null,inst_32211);
var inst_32193 = inst_32212;
var inst_32194 = inst_32211;
var inst_32195 = inst_32213;
var inst_32196 = (0);
var state_32241__$1 = (function (){var statearr_32260 = state_32241;
(statearr_32260[(8)] = inst_32195);

(statearr_32260[(10)] = inst_32193);

(statearr_32260[(11)] = inst_32196);

(statearr_32260[(12)] = inst_32194);

return statearr_32260;
})();
var statearr_32261_32294 = state_32241__$1;
(statearr_32261_32294[(2)] = null);

(statearr_32261_32294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (3))){
var inst_32239 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32241__$1,inst_32239);
} else {
if((state_val_32242 === (12))){
var inst_32227 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32262_32295 = state_32241__$1;
(statearr_32262_32295[(2)] = inst_32227);

(statearr_32262_32295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (2))){
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32241__$1,(4),in$);
} else {
if((state_val_32242 === (23))){
var inst_32235 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32263_32296 = state_32241__$1;
(statearr_32263_32296[(2)] = inst_32235);

(statearr_32263_32296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (19))){
var inst_32222 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32264_32297 = state_32241__$1;
(statearr_32264_32297[(2)] = inst_32222);

(statearr_32264_32297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (11))){
var inst_32207 = (state_32241[(7)]);
var inst_32193 = (state_32241[(10)]);
var inst_32207__$1 = cljs.core.seq.call(null,inst_32193);
var state_32241__$1 = (function (){var statearr_32265 = state_32241;
(statearr_32265[(7)] = inst_32207__$1);

return statearr_32265;
})();
if(inst_32207__$1){
var statearr_32266_32298 = state_32241__$1;
(statearr_32266_32298[(1)] = (14));

} else {
var statearr_32267_32299 = state_32241__$1;
(statearr_32267_32299[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (9))){
var inst_32229 = (state_32241[(2)]);
var inst_32230 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32241__$1 = (function (){var statearr_32268 = state_32241;
(statearr_32268[(15)] = inst_32229);

return statearr_32268;
})();
if(cljs.core.truth_(inst_32230)){
var statearr_32269_32300 = state_32241__$1;
(statearr_32269_32300[(1)] = (21));

} else {
var statearr_32270_32301 = state_32241__$1;
(statearr_32270_32301[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (5))){
var inst_32185 = cljs.core.async.close_BANG_.call(null,out);
var state_32241__$1 = state_32241;
var statearr_32271_32302 = state_32241__$1;
(statearr_32271_32302[(2)] = inst_32185);

(statearr_32271_32302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (14))){
var inst_32207 = (state_32241[(7)]);
var inst_32209 = cljs.core.chunked_seq_QMARK_.call(null,inst_32207);
var state_32241__$1 = state_32241;
if(inst_32209){
var statearr_32272_32303 = state_32241__$1;
(statearr_32272_32303[(1)] = (17));

} else {
var statearr_32273_32304 = state_32241__$1;
(statearr_32273_32304[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (16))){
var inst_32225 = (state_32241[(2)]);
var state_32241__$1 = state_32241;
var statearr_32274_32305 = state_32241__$1;
(statearr_32274_32305[(2)] = inst_32225);

(statearr_32274_32305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32242 === (10))){
var inst_32196 = (state_32241[(11)]);
var inst_32194 = (state_32241[(12)]);
var inst_32201 = cljs.core._nth.call(null,inst_32194,inst_32196);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32241__$1,(13),out,inst_32201);
} else {
if((state_val_32242 === (18))){
var inst_32207 = (state_32241[(7)]);
var inst_32216 = cljs.core.first.call(null,inst_32207);
var state_32241__$1 = state_32241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32241__$1,(20),out,inst_32216);
} else {
if((state_val_32242 === (8))){
var inst_32195 = (state_32241[(8)]);
var inst_32196 = (state_32241[(11)]);
var inst_32198 = (inst_32196 < inst_32195);
var inst_32199 = inst_32198;
var state_32241__$1 = state_32241;
if(cljs.core.truth_(inst_32199)){
var statearr_32275_32306 = state_32241__$1;
(statearr_32275_32306[(1)] = (10));

} else {
var statearr_32276_32307 = state_32241__$1;
(statearr_32276_32307[(1)] = (11));

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
});})(c__29750__auto__))
;
return ((function (switch__29638__auto__,c__29750__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_32280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32280[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__);

(statearr_32280[(1)] = (1));

return statearr_32280;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____1 = (function (state_32241){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_32241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e32281){if((e32281 instanceof Object)){
var ex__29642__auto__ = e32281;
var statearr_32282_32308 = state_32241;
(statearr_32282_32308[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32309 = state_32241;
state_32241 = G__32309;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__ = function(state_32241){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____1.call(this,state_32241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_32283 = f__29751__auto__.call(null);
(statearr_32283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_32283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto__))
);

return c__29750__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32310 = [];
var len__26441__auto___32313 = arguments.length;
var i__26442__auto___32314 = (0);
while(true){
if((i__26442__auto___32314 < len__26441__auto___32313)){
args32310.push((arguments[i__26442__auto___32314]));

var G__32315 = (i__26442__auto___32314 + (1));
i__26442__auto___32314 = G__32315;
continue;
} else {
}
break;
}

var G__32312 = args32310.length;
switch (G__32312) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32310.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32317 = [];
var len__26441__auto___32320 = arguments.length;
var i__26442__auto___32321 = (0);
while(true){
if((i__26442__auto___32321 < len__26441__auto___32320)){
args32317.push((arguments[i__26442__auto___32321]));

var G__32322 = (i__26442__auto___32321 + (1));
i__26442__auto___32321 = G__32322;
continue;
} else {
}
break;
}

var G__32319 = args32317.length;
switch (G__32319) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32317.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32324 = [];
var len__26441__auto___32375 = arguments.length;
var i__26442__auto___32376 = (0);
while(true){
if((i__26442__auto___32376 < len__26441__auto___32375)){
args32324.push((arguments[i__26442__auto___32376]));

var G__32377 = (i__26442__auto___32376 + (1));
i__26442__auto___32376 = G__32377;
continue;
} else {
}
break;
}

var G__32326 = args32324.length;
switch (G__32326) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32324.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___32379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___32379,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___32379,out){
return (function (state_32350){
var state_val_32351 = (state_32350[(1)]);
if((state_val_32351 === (7))){
var inst_32345 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32352_32380 = state_32350__$1;
(statearr_32352_32380[(2)] = inst_32345);

(statearr_32352_32380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (1))){
var inst_32327 = null;
var state_32350__$1 = (function (){var statearr_32353 = state_32350;
(statearr_32353[(7)] = inst_32327);

return statearr_32353;
})();
var statearr_32354_32381 = state_32350__$1;
(statearr_32354_32381[(2)] = null);

(statearr_32354_32381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (4))){
var inst_32330 = (state_32350[(8)]);
var inst_32330__$1 = (state_32350[(2)]);
var inst_32331 = (inst_32330__$1 == null);
var inst_32332 = cljs.core.not.call(null,inst_32331);
var state_32350__$1 = (function (){var statearr_32355 = state_32350;
(statearr_32355[(8)] = inst_32330__$1);

return statearr_32355;
})();
if(inst_32332){
var statearr_32356_32382 = state_32350__$1;
(statearr_32356_32382[(1)] = (5));

} else {
var statearr_32357_32383 = state_32350__$1;
(statearr_32357_32383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (6))){
var state_32350__$1 = state_32350;
var statearr_32358_32384 = state_32350__$1;
(statearr_32358_32384[(2)] = null);

(statearr_32358_32384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (3))){
var inst_32347 = (state_32350[(2)]);
var inst_32348 = cljs.core.async.close_BANG_.call(null,out);
var state_32350__$1 = (function (){var statearr_32359 = state_32350;
(statearr_32359[(9)] = inst_32347);

return statearr_32359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32350__$1,inst_32348);
} else {
if((state_val_32351 === (2))){
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32350__$1,(4),ch);
} else {
if((state_val_32351 === (11))){
var inst_32330 = (state_32350[(8)]);
var inst_32339 = (state_32350[(2)]);
var inst_32327 = inst_32330;
var state_32350__$1 = (function (){var statearr_32360 = state_32350;
(statearr_32360[(7)] = inst_32327);

(statearr_32360[(10)] = inst_32339);

return statearr_32360;
})();
var statearr_32361_32385 = state_32350__$1;
(statearr_32361_32385[(2)] = null);

(statearr_32361_32385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (9))){
var inst_32330 = (state_32350[(8)]);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32350__$1,(11),out,inst_32330);
} else {
if((state_val_32351 === (5))){
var inst_32327 = (state_32350[(7)]);
var inst_32330 = (state_32350[(8)]);
var inst_32334 = cljs.core._EQ_.call(null,inst_32330,inst_32327);
var state_32350__$1 = state_32350;
if(inst_32334){
var statearr_32363_32386 = state_32350__$1;
(statearr_32363_32386[(1)] = (8));

} else {
var statearr_32364_32387 = state_32350__$1;
(statearr_32364_32387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (10))){
var inst_32342 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32365_32388 = state_32350__$1;
(statearr_32365_32388[(2)] = inst_32342);

(statearr_32365_32388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (8))){
var inst_32327 = (state_32350[(7)]);
var tmp32362 = inst_32327;
var inst_32327__$1 = tmp32362;
var state_32350__$1 = (function (){var statearr_32366 = state_32350;
(statearr_32366[(7)] = inst_32327__$1);

return statearr_32366;
})();
var statearr_32367_32389 = state_32350__$1;
(statearr_32367_32389[(2)] = null);

(statearr_32367_32389[(1)] = (2));


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
});})(c__29750__auto___32379,out))
;
return ((function (switch__29638__auto__,c__29750__auto___32379,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_32371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32371[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_32371[(1)] = (1));

return statearr_32371;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_32350){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_32350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e32372){if((e32372 instanceof Object)){
var ex__29642__auto__ = e32372;
var statearr_32373_32390 = state_32350;
(statearr_32373_32390[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32391 = state_32350;
state_32350 = G__32391;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_32350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_32350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___32379,out))
})();
var state__29752__auto__ = (function (){var statearr_32374 = f__29751__auto__.call(null);
(statearr_32374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___32379);

return statearr_32374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___32379,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32392 = [];
var len__26441__auto___32462 = arguments.length;
var i__26442__auto___32463 = (0);
while(true){
if((i__26442__auto___32463 < len__26441__auto___32462)){
args32392.push((arguments[i__26442__auto___32463]));

var G__32464 = (i__26442__auto___32463 + (1));
i__26442__auto___32463 = G__32464;
continue;
} else {
}
break;
}

var G__32394 = args32392.length;
switch (G__32394) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32392.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___32466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___32466,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___32466,out){
return (function (state_32432){
var state_val_32433 = (state_32432[(1)]);
if((state_val_32433 === (7))){
var inst_32428 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32434_32467 = state_32432__$1;
(statearr_32434_32467[(2)] = inst_32428);

(statearr_32434_32467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (1))){
var inst_32395 = (new Array(n));
var inst_32396 = inst_32395;
var inst_32397 = (0);
var state_32432__$1 = (function (){var statearr_32435 = state_32432;
(statearr_32435[(7)] = inst_32397);

(statearr_32435[(8)] = inst_32396);

return statearr_32435;
})();
var statearr_32436_32468 = state_32432__$1;
(statearr_32436_32468[(2)] = null);

(statearr_32436_32468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (4))){
var inst_32400 = (state_32432[(9)]);
var inst_32400__$1 = (state_32432[(2)]);
var inst_32401 = (inst_32400__$1 == null);
var inst_32402 = cljs.core.not.call(null,inst_32401);
var state_32432__$1 = (function (){var statearr_32437 = state_32432;
(statearr_32437[(9)] = inst_32400__$1);

return statearr_32437;
})();
if(inst_32402){
var statearr_32438_32469 = state_32432__$1;
(statearr_32438_32469[(1)] = (5));

} else {
var statearr_32439_32470 = state_32432__$1;
(statearr_32439_32470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (15))){
var inst_32422 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32440_32471 = state_32432__$1;
(statearr_32440_32471[(2)] = inst_32422);

(statearr_32440_32471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (13))){
var state_32432__$1 = state_32432;
var statearr_32441_32472 = state_32432__$1;
(statearr_32441_32472[(2)] = null);

(statearr_32441_32472[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (6))){
var inst_32397 = (state_32432[(7)]);
var inst_32418 = (inst_32397 > (0));
var state_32432__$1 = state_32432;
if(cljs.core.truth_(inst_32418)){
var statearr_32442_32473 = state_32432__$1;
(statearr_32442_32473[(1)] = (12));

} else {
var statearr_32443_32474 = state_32432__$1;
(statearr_32443_32474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (3))){
var inst_32430 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32432__$1,inst_32430);
} else {
if((state_val_32433 === (12))){
var inst_32396 = (state_32432[(8)]);
var inst_32420 = cljs.core.vec.call(null,inst_32396);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32432__$1,(15),out,inst_32420);
} else {
if((state_val_32433 === (2))){
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32432__$1,(4),ch);
} else {
if((state_val_32433 === (11))){
var inst_32412 = (state_32432[(2)]);
var inst_32413 = (new Array(n));
var inst_32396 = inst_32413;
var inst_32397 = (0);
var state_32432__$1 = (function (){var statearr_32444 = state_32432;
(statearr_32444[(7)] = inst_32397);

(statearr_32444[(10)] = inst_32412);

(statearr_32444[(8)] = inst_32396);

return statearr_32444;
})();
var statearr_32445_32475 = state_32432__$1;
(statearr_32445_32475[(2)] = null);

(statearr_32445_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (9))){
var inst_32396 = (state_32432[(8)]);
var inst_32410 = cljs.core.vec.call(null,inst_32396);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32432__$1,(11),out,inst_32410);
} else {
if((state_val_32433 === (5))){
var inst_32400 = (state_32432[(9)]);
var inst_32397 = (state_32432[(7)]);
var inst_32405 = (state_32432[(11)]);
var inst_32396 = (state_32432[(8)]);
var inst_32404 = (inst_32396[inst_32397] = inst_32400);
var inst_32405__$1 = (inst_32397 + (1));
var inst_32406 = (inst_32405__$1 < n);
var state_32432__$1 = (function (){var statearr_32446 = state_32432;
(statearr_32446[(12)] = inst_32404);

(statearr_32446[(11)] = inst_32405__$1);

return statearr_32446;
})();
if(cljs.core.truth_(inst_32406)){
var statearr_32447_32476 = state_32432__$1;
(statearr_32447_32476[(1)] = (8));

} else {
var statearr_32448_32477 = state_32432__$1;
(statearr_32448_32477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (14))){
var inst_32425 = (state_32432[(2)]);
var inst_32426 = cljs.core.async.close_BANG_.call(null,out);
var state_32432__$1 = (function (){var statearr_32450 = state_32432;
(statearr_32450[(13)] = inst_32425);

return statearr_32450;
})();
var statearr_32451_32478 = state_32432__$1;
(statearr_32451_32478[(2)] = inst_32426);

(statearr_32451_32478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (10))){
var inst_32416 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32452_32479 = state_32432__$1;
(statearr_32452_32479[(2)] = inst_32416);

(statearr_32452_32479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (8))){
var inst_32405 = (state_32432[(11)]);
var inst_32396 = (state_32432[(8)]);
var tmp32449 = inst_32396;
var inst_32396__$1 = tmp32449;
var inst_32397 = inst_32405;
var state_32432__$1 = (function (){var statearr_32453 = state_32432;
(statearr_32453[(7)] = inst_32397);

(statearr_32453[(8)] = inst_32396__$1);

return statearr_32453;
})();
var statearr_32454_32480 = state_32432__$1;
(statearr_32454_32480[(2)] = null);

(statearr_32454_32480[(1)] = (2));


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
});})(c__29750__auto___32466,out))
;
return ((function (switch__29638__auto__,c__29750__auto___32466,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_32458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32458[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_32458[(1)] = (1));

return statearr_32458;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_32432){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_32432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e32459){if((e32459 instanceof Object)){
var ex__29642__auto__ = e32459;
var statearr_32460_32481 = state_32432;
(statearr_32460_32481[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32482 = state_32432;
state_32432 = G__32482;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_32432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_32432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___32466,out))
})();
var state__29752__auto__ = (function (){var statearr_32461 = f__29751__auto__.call(null);
(statearr_32461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___32466);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___32466,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32483 = [];
var len__26441__auto___32557 = arguments.length;
var i__26442__auto___32558 = (0);
while(true){
if((i__26442__auto___32558 < len__26441__auto___32557)){
args32483.push((arguments[i__26442__auto___32558]));

var G__32559 = (i__26442__auto___32558 + (1));
i__26442__auto___32558 = G__32559;
continue;
} else {
}
break;
}

var G__32485 = args32483.length;
switch (G__32485) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32483.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___32561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___32561,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___32561,out){
return (function (state_32527){
var state_val_32528 = (state_32527[(1)]);
if((state_val_32528 === (7))){
var inst_32523 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32529_32562 = state_32527__$1;
(statearr_32529_32562[(2)] = inst_32523);

(statearr_32529_32562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (1))){
var inst_32486 = [];
var inst_32487 = inst_32486;
var inst_32488 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32527__$1 = (function (){var statearr_32530 = state_32527;
(statearr_32530[(7)] = inst_32488);

(statearr_32530[(8)] = inst_32487);

return statearr_32530;
})();
var statearr_32531_32563 = state_32527__$1;
(statearr_32531_32563[(2)] = null);

(statearr_32531_32563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (4))){
var inst_32491 = (state_32527[(9)]);
var inst_32491__$1 = (state_32527[(2)]);
var inst_32492 = (inst_32491__$1 == null);
var inst_32493 = cljs.core.not.call(null,inst_32492);
var state_32527__$1 = (function (){var statearr_32532 = state_32527;
(statearr_32532[(9)] = inst_32491__$1);

return statearr_32532;
})();
if(inst_32493){
var statearr_32533_32564 = state_32527__$1;
(statearr_32533_32564[(1)] = (5));

} else {
var statearr_32534_32565 = state_32527__$1;
(statearr_32534_32565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (15))){
var inst_32517 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32535_32566 = state_32527__$1;
(statearr_32535_32566[(2)] = inst_32517);

(statearr_32535_32566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (13))){
var state_32527__$1 = state_32527;
var statearr_32536_32567 = state_32527__$1;
(statearr_32536_32567[(2)] = null);

(statearr_32536_32567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (6))){
var inst_32487 = (state_32527[(8)]);
var inst_32512 = inst_32487.length;
var inst_32513 = (inst_32512 > (0));
var state_32527__$1 = state_32527;
if(cljs.core.truth_(inst_32513)){
var statearr_32537_32568 = state_32527__$1;
(statearr_32537_32568[(1)] = (12));

} else {
var statearr_32538_32569 = state_32527__$1;
(statearr_32538_32569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (3))){
var inst_32525 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32527__$1,inst_32525);
} else {
if((state_val_32528 === (12))){
var inst_32487 = (state_32527[(8)]);
var inst_32515 = cljs.core.vec.call(null,inst_32487);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32527__$1,(15),out,inst_32515);
} else {
if((state_val_32528 === (2))){
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32527__$1,(4),ch);
} else {
if((state_val_32528 === (11))){
var inst_32495 = (state_32527[(10)]);
var inst_32491 = (state_32527[(9)]);
var inst_32505 = (state_32527[(2)]);
var inst_32506 = [];
var inst_32507 = inst_32506.push(inst_32491);
var inst_32487 = inst_32506;
var inst_32488 = inst_32495;
var state_32527__$1 = (function (){var statearr_32539 = state_32527;
(statearr_32539[(7)] = inst_32488);

(statearr_32539[(8)] = inst_32487);

(statearr_32539[(11)] = inst_32507);

(statearr_32539[(12)] = inst_32505);

return statearr_32539;
})();
var statearr_32540_32570 = state_32527__$1;
(statearr_32540_32570[(2)] = null);

(statearr_32540_32570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (9))){
var inst_32487 = (state_32527[(8)]);
var inst_32503 = cljs.core.vec.call(null,inst_32487);
var state_32527__$1 = state_32527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32527__$1,(11),out,inst_32503);
} else {
if((state_val_32528 === (5))){
var inst_32488 = (state_32527[(7)]);
var inst_32495 = (state_32527[(10)]);
var inst_32491 = (state_32527[(9)]);
var inst_32495__$1 = f.call(null,inst_32491);
var inst_32496 = cljs.core._EQ_.call(null,inst_32495__$1,inst_32488);
var inst_32497 = cljs.core.keyword_identical_QMARK_.call(null,inst_32488,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32498 = (inst_32496) || (inst_32497);
var state_32527__$1 = (function (){var statearr_32541 = state_32527;
(statearr_32541[(10)] = inst_32495__$1);

return statearr_32541;
})();
if(cljs.core.truth_(inst_32498)){
var statearr_32542_32571 = state_32527__$1;
(statearr_32542_32571[(1)] = (8));

} else {
var statearr_32543_32572 = state_32527__$1;
(statearr_32543_32572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (14))){
var inst_32520 = (state_32527[(2)]);
var inst_32521 = cljs.core.async.close_BANG_.call(null,out);
var state_32527__$1 = (function (){var statearr_32545 = state_32527;
(statearr_32545[(13)] = inst_32520);

return statearr_32545;
})();
var statearr_32546_32573 = state_32527__$1;
(statearr_32546_32573[(2)] = inst_32521);

(statearr_32546_32573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (10))){
var inst_32510 = (state_32527[(2)]);
var state_32527__$1 = state_32527;
var statearr_32547_32574 = state_32527__$1;
(statearr_32547_32574[(2)] = inst_32510);

(statearr_32547_32574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32528 === (8))){
var inst_32487 = (state_32527[(8)]);
var inst_32495 = (state_32527[(10)]);
var inst_32491 = (state_32527[(9)]);
var inst_32500 = inst_32487.push(inst_32491);
var tmp32544 = inst_32487;
var inst_32487__$1 = tmp32544;
var inst_32488 = inst_32495;
var state_32527__$1 = (function (){var statearr_32548 = state_32527;
(statearr_32548[(7)] = inst_32488);

(statearr_32548[(8)] = inst_32487__$1);

(statearr_32548[(14)] = inst_32500);

return statearr_32548;
})();
var statearr_32549_32575 = state_32527__$1;
(statearr_32549_32575[(2)] = null);

(statearr_32549_32575[(1)] = (2));


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
});})(c__29750__auto___32561,out))
;
return ((function (switch__29638__auto__,c__29750__auto___32561,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_32553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32553[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_32553[(1)] = (1));

return statearr_32553;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_32527){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_32527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e32554){if((e32554 instanceof Object)){
var ex__29642__auto__ = e32554;
var statearr_32555_32576 = state_32527;
(statearr_32555_32576[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32577 = state_32527;
state_32527 = G__32577;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_32527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_32527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___32561,out))
})();
var state__29752__auto__ = (function (){var statearr_32556 = f__29751__auto__.call(null);
(statearr_32556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___32561);

return statearr_32556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___32561,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489150129623