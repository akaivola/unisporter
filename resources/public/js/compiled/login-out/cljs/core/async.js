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
var args43608 = [];
var len__26441__auto___43623 = arguments.length;
var i__26442__auto___43624 = (0);
while(true){
if((i__26442__auto___43624 < len__26441__auto___43623)){
args43608.push((arguments[i__26442__auto___43624]));

var G__43625 = (i__26442__auto___43624 + (1));
i__26442__auto___43624 = G__43625;
continue;
} else {
}
break;
}

var G__43610 = args43608.length;
switch (G__43610) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43608.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async43611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43611 = (function (f,blockable,meta43612){
this.f = f;
this.blockable = blockable;
this.meta43612 = meta43612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43613,meta43612__$1){
var self__ = this;
var _43613__$1 = this;
return (new cljs.core.async.t_cljs$core$async43611(self__.f,self__.blockable,meta43612__$1));
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43613){
var self__ = this;
var _43613__$1 = this;
return self__.meta43612;
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43612","meta43612",1651472095,null)], null);
});

cljs.core.async.t_cljs$core$async43611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43611";

cljs.core.async.t_cljs$core$async43611.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async43611");
});

cljs.core.async.__GT_t_cljs$core$async43611 = (function cljs$core$async$__GT_t_cljs$core$async43611(f__$1,blockable__$1,meta43612){
return (new cljs.core.async.t_cljs$core$async43611(f__$1,blockable__$1,meta43612));
});

}

return (new cljs.core.async.t_cljs$core$async43611(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args43645 = [];
var len__26441__auto___43648 = arguments.length;
var i__26442__auto___43649 = (0);
while(true){
if((i__26442__auto___43649 < len__26441__auto___43648)){
args43645.push((arguments[i__26442__auto___43649]));

var G__43650 = (i__26442__auto___43649 + (1));
i__26442__auto___43649 = G__43650;
continue;
} else {
}
break;
}

var G__43647 = args43645.length;
switch (G__43647) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43645.length)].join('')));

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
var args43661 = [];
var len__26441__auto___43665 = arguments.length;
var i__26442__auto___43666 = (0);
while(true){
if((i__26442__auto___43666 < len__26441__auto___43665)){
args43661.push((arguments[i__26442__auto___43666]));

var G__43667 = (i__26442__auto___43666 + (1));
i__26442__auto___43666 = G__43667;
continue;
} else {
}
break;
}

var G__43663 = args43661.length;
switch (G__43663) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43661.length)].join('')));

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
var args43677 = [];
var len__26441__auto___43695 = arguments.length;
var i__26442__auto___43696 = (0);
while(true){
if((i__26442__auto___43696 < len__26441__auto___43695)){
args43677.push((arguments[i__26442__auto___43696]));

var G__43697 = (i__26442__auto___43696 + (1));
i__26442__auto___43696 = G__43697;
continue;
} else {
}
break;
}

var G__43681 = args43677.length;
switch (G__43681) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43677.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_43708 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43708);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43708,ret){
return (function (){
return fn1.call(null,val_43708);
});})(val_43708,ret))
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
var args43717 = [];
var len__26441__auto___43722 = arguments.length;
var i__26442__auto___43723 = (0);
while(true){
if((i__26442__auto___43723 < len__26441__auto___43722)){
args43717.push((arguments[i__26442__auto___43723]));

var G__43724 = (i__26442__auto___43723 + (1));
i__26442__auto___43723 = G__43724;
continue;
} else {
}
break;
}

var G__43721 = args43717.length;
switch (G__43721) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43717.length)].join('')));

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
var n__26251__auto___43731 = n;
var x_43732 = (0);
while(true){
if((x_43732 < n__26251__auto___43731)){
(a[x_43732] = (0));

var G__43736 = (x_43732 + (1));
x_43732 = G__43736;
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

var G__43740 = (i + (1));
i = G__43740;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async43744 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43744 = (function (flag,meta43745){
this.flag = flag;
this.meta43745 = meta43745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43746,meta43745__$1){
var self__ = this;
var _43746__$1 = this;
return (new cljs.core.async.t_cljs$core$async43744(self__.flag,meta43745__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43746){
var self__ = this;
var _43746__$1 = this;
return self__.meta43745;
});})(flag))
;

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43744.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43745","meta43745",-420216931,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43744";

cljs.core.async.t_cljs$core$async43744.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async43744");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async43744 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43744(flag__$1,meta43745){
return (new cljs.core.async.t_cljs$core$async43744(flag__$1,meta43745));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43744(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async43756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43756 = (function (flag,cb,meta43757){
this.flag = flag;
this.cb = cb;
this.meta43757 = meta43757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43758,meta43757__$1){
var self__ = this;
var _43758__$1 = this;
return (new cljs.core.async.t_cljs$core$async43756(self__.flag,self__.cb,meta43757__$1));
});

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43758){
var self__ = this;
var _43758__$1 = this;
return self__.meta43757;
});

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43757","meta43757",-391568722,null)], null);
});

cljs.core.async.t_cljs$core$async43756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43756";

cljs.core.async.t_cljs$core$async43756.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async43756");
});

cljs.core.async.__GT_t_cljs$core$async43756 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43756(flag__$1,cb__$1,meta43757){
return (new cljs.core.async.t_cljs$core$async43756(flag__$1,cb__$1,meta43757));
});

}

return (new cljs.core.async.t_cljs$core$async43756(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43770_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43770_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43771_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43771_SHARP_,port], null));
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
var G__43793 = (i + (1));
i = G__43793;
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
var len__26441__auto___43803 = arguments.length;
var i__26442__auto___43804 = (0);
while(true){
if((i__26442__auto___43804 < len__26441__auto___43803)){
args__26448__auto__.push((arguments[i__26442__auto___43804]));

var G__43806 = (i__26442__auto___43804 + (1));
i__26442__auto___43804 = G__43806;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((1) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26449__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43799){
var map__43801 = p__43799;
var map__43801__$1 = ((((!((map__43801 == null)))?((((map__43801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43801):map__43801);
var opts = map__43801__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43797){
var G__43798 = cljs.core.first.call(null,seq43797);
var seq43797__$1 = cljs.core.next.call(null,seq43797);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43798,seq43797__$1);
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
var args43815 = [];
var len__26441__auto___43899 = arguments.length;
var i__26442__auto___43900 = (0);
while(true){
if((i__26442__auto___43900 < len__26441__auto___43899)){
args43815.push((arguments[i__26442__auto___43900]));

var G__43901 = (i__26442__auto___43900 + (1));
i__26442__auto___43900 = G__43901;
continue;
} else {
}
break;
}

var G__43823 = args43815.length;
switch (G__43823) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43815.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29750__auto___43921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___43921){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___43921){
return (function (state_43853){
var state_val_43854 = (state_43853[(1)]);
if((state_val_43854 === (7))){
var inst_43846 = (state_43853[(2)]);
var state_43853__$1 = state_43853;
var statearr_43858_43933 = state_43853__$1;
(statearr_43858_43933[(2)] = inst_43846);

(statearr_43858_43933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (1))){
var state_43853__$1 = state_43853;
var statearr_43859_43947 = state_43853__$1;
(statearr_43859_43947[(2)] = null);

(statearr_43859_43947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (4))){
var inst_43829 = (state_43853[(7)]);
var inst_43829__$1 = (state_43853[(2)]);
var inst_43830 = (inst_43829__$1 == null);
var state_43853__$1 = (function (){var statearr_43860 = state_43853;
(statearr_43860[(7)] = inst_43829__$1);

return statearr_43860;
})();
if(cljs.core.truth_(inst_43830)){
var statearr_43861_43961 = state_43853__$1;
(statearr_43861_43961[(1)] = (5));

} else {
var statearr_43862_43962 = state_43853__$1;
(statearr_43862_43962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (13))){
var state_43853__$1 = state_43853;
var statearr_43863_43967 = state_43853__$1;
(statearr_43863_43967[(2)] = null);

(statearr_43863_43967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (6))){
var inst_43829 = (state_43853[(7)]);
var state_43853__$1 = state_43853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43853__$1,(11),to,inst_43829);
} else {
if((state_val_43854 === (3))){
var inst_43850 = (state_43853[(2)]);
var state_43853__$1 = state_43853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43853__$1,inst_43850);
} else {
if((state_val_43854 === (12))){
var state_43853__$1 = state_43853;
var statearr_43864_43986 = state_43853__$1;
(statearr_43864_43986[(2)] = null);

(statearr_43864_43986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (2))){
var state_43853__$1 = state_43853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43853__$1,(4),from);
} else {
if((state_val_43854 === (11))){
var inst_43839 = (state_43853[(2)]);
var state_43853__$1 = state_43853;
if(cljs.core.truth_(inst_43839)){
var statearr_43867_44003 = state_43853__$1;
(statearr_43867_44003[(1)] = (12));

} else {
var statearr_43868_44010 = state_43853__$1;
(statearr_43868_44010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (9))){
var state_43853__$1 = state_43853;
var statearr_43869_44011 = state_43853__$1;
(statearr_43869_44011[(2)] = null);

(statearr_43869_44011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (5))){
var state_43853__$1 = state_43853;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43870_44025 = state_43853__$1;
(statearr_43870_44025[(1)] = (8));

} else {
var statearr_43874_44027 = state_43853__$1;
(statearr_43874_44027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (14))){
var inst_43844 = (state_43853[(2)]);
var state_43853__$1 = state_43853;
var statearr_43875_44028 = state_43853__$1;
(statearr_43875_44028[(2)] = inst_43844);

(statearr_43875_44028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (10))){
var inst_43836 = (state_43853[(2)]);
var state_43853__$1 = state_43853;
var statearr_43879_44029 = state_43853__$1;
(statearr_43879_44029[(2)] = inst_43836);

(statearr_43879_44029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43854 === (8))){
var inst_43833 = cljs.core.async.close_BANG_.call(null,to);
var state_43853__$1 = state_43853;
var statearr_43880_44030 = state_43853__$1;
(statearr_43880_44030[(2)] = inst_43833);

(statearr_43880_44030[(1)] = (10));


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
});})(c__29750__auto___43921))
;
return ((function (switch__29638__auto__,c__29750__auto___43921){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_43886 = [null,null,null,null,null,null,null,null];
(statearr_43886[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_43886[(1)] = (1));

return statearr_43886;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_43853){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_43853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e43888){if((e43888 instanceof Object)){
var ex__29642__auto__ = e43888;
var statearr_43889_44035 = state_43853;
(statearr_43889_44035[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44048 = state_43853;
state_43853 = G__44048;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_43853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_43853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___43921))
})();
var state__29752__auto__ = (function (){var statearr_43893 = f__29751__auto__.call(null);
(statearr_43893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___43921);

return statearr_43893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___43921))
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
return (function (p__44288){
var vec__44289 = p__44288;
var v = cljs.core.nth.call(null,vec__44289,(0),null);
var p = cljs.core.nth.call(null,vec__44289,(1),null);
var job = vec__44289;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29750__auto___44588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___44588,res,vec__44289,v,p,job,jobs,results){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___44588,res,vec__44289,v,p,job,jobs,results){
return (function (state_44296){
var state_val_44297 = (state_44296[(1)]);
if((state_val_44297 === (1))){
var state_44296__$1 = state_44296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44296__$1,(2),res,v);
} else {
if((state_val_44297 === (2))){
var inst_44293 = (state_44296[(2)]);
var inst_44294 = cljs.core.async.close_BANG_.call(null,res);
var state_44296__$1 = (function (){var statearr_44303 = state_44296;
(statearr_44303[(7)] = inst_44293);

return statearr_44303;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44296__$1,inst_44294);
} else {
return null;
}
}
});})(c__29750__auto___44588,res,vec__44289,v,p,job,jobs,results))
;
return ((function (switch__29638__auto__,c__29750__auto___44588,res,vec__44289,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_44309 = [null,null,null,null,null,null,null,null];
(statearr_44309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_44309[(1)] = (1));

return statearr_44309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_44296){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_44296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e44310){if((e44310 instanceof Object)){
var ex__29642__auto__ = e44310;
var statearr_44311_44631 = state_44296;
(statearr_44311_44631[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44638 = state_44296;
state_44296 = G__44638;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_44296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_44296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___44588,res,vec__44289,v,p,job,jobs,results))
})();
var state__29752__auto__ = (function (){var statearr_44312 = f__29751__auto__.call(null);
(statearr_44312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___44588);

return statearr_44312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___44588,res,vec__44289,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44319){
var vec__44320 = p__44319;
var v = cljs.core.nth.call(null,vec__44320,(0),null);
var p = cljs.core.nth.call(null,vec__44320,(1),null);
var job = vec__44320;
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
var n__26251__auto___44656 = n;
var __44657 = (0);
while(true){
if((__44657 < n__26251__auto___44656)){
var G__44323_44662 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44323_44662) {
case "compute":
var c__29750__auto___44664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44657,c__29750__auto___44664,G__44323_44662,n__26251__auto___44656,jobs,results,process,async){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (__44657,c__29750__auto___44664,G__44323_44662,n__26251__auto___44656,jobs,results,process,async){
return (function (state_44342){
var state_val_44343 = (state_44342[(1)]);
if((state_val_44343 === (1))){
var state_44342__$1 = state_44342;
var statearr_44344_44671 = state_44342__$1;
(statearr_44344_44671[(2)] = null);

(statearr_44344_44671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44343 === (2))){
var state_44342__$1 = state_44342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44342__$1,(4),jobs);
} else {
if((state_val_44343 === (3))){
var inst_44340 = (state_44342[(2)]);
var state_44342__$1 = state_44342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44342__$1,inst_44340);
} else {
if((state_val_44343 === (4))){
var inst_44332 = (state_44342[(2)]);
var inst_44333 = process.call(null,inst_44332);
var state_44342__$1 = state_44342;
if(cljs.core.truth_(inst_44333)){
var statearr_44345_44678 = state_44342__$1;
(statearr_44345_44678[(1)] = (5));

} else {
var statearr_44346_44679 = state_44342__$1;
(statearr_44346_44679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44343 === (5))){
var state_44342__$1 = state_44342;
var statearr_44347_44680 = state_44342__$1;
(statearr_44347_44680[(2)] = null);

(statearr_44347_44680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44343 === (6))){
var state_44342__$1 = state_44342;
var statearr_44348_44681 = state_44342__$1;
(statearr_44348_44681[(2)] = null);

(statearr_44348_44681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44343 === (7))){
var inst_44338 = (state_44342[(2)]);
var state_44342__$1 = state_44342;
var statearr_44349_44682 = state_44342__$1;
(statearr_44349_44682[(2)] = inst_44338);

(statearr_44349_44682[(1)] = (3));


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
});})(__44657,c__29750__auto___44664,G__44323_44662,n__26251__auto___44656,jobs,results,process,async))
;
return ((function (__44657,switch__29638__auto__,c__29750__auto___44664,G__44323_44662,n__26251__auto___44656,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_44356 = [null,null,null,null,null,null,null];
(statearr_44356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_44356[(1)] = (1));

return statearr_44356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_44342){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_44342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e44358){if((e44358 instanceof Object)){
var ex__29642__auto__ = e44358;
var statearr_44359_44685 = state_44342;
(statearr_44359_44685[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44687 = state_44342;
state_44342 = G__44687;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_44342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_44342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(__44657,switch__29638__auto__,c__29750__auto___44664,G__44323_44662,n__26251__auto___44656,jobs,results,process,async))
})();
var state__29752__auto__ = (function (){var statearr_44363 = f__29751__auto__.call(null);
(statearr_44363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___44664);

return statearr_44363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(__44657,c__29750__auto___44664,G__44323_44662,n__26251__auto___44656,jobs,results,process,async))
);


break;
case "async":
var c__29750__auto___44688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44657,c__29750__auto___44688,G__44323_44662,n__26251__auto___44656,jobs,results,process,async){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (__44657,c__29750__auto___44688,G__44323_44662,n__26251__auto___44656,jobs,results,process,async){
return (function (state_44376){
var state_val_44377 = (state_44376[(1)]);
if((state_val_44377 === (1))){
var state_44376__$1 = state_44376;
var statearr_44384_44695 = state_44376__$1;
(statearr_44384_44695[(2)] = null);

(statearr_44384_44695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (2))){
var state_44376__$1 = state_44376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44376__$1,(4),jobs);
} else {
if((state_val_44377 === (3))){
var inst_44374 = (state_44376[(2)]);
var state_44376__$1 = state_44376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44376__$1,inst_44374);
} else {
if((state_val_44377 === (4))){
var inst_44366 = (state_44376[(2)]);
var inst_44367 = async.call(null,inst_44366);
var state_44376__$1 = state_44376;
if(cljs.core.truth_(inst_44367)){
var statearr_44388_44702 = state_44376__$1;
(statearr_44388_44702[(1)] = (5));

} else {
var statearr_44395_44703 = state_44376__$1;
(statearr_44395_44703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (5))){
var state_44376__$1 = state_44376;
var statearr_44396_44704 = state_44376__$1;
(statearr_44396_44704[(2)] = null);

(statearr_44396_44704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (6))){
var state_44376__$1 = state_44376;
var statearr_44397_44705 = state_44376__$1;
(statearr_44397_44705[(2)] = null);

(statearr_44397_44705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44377 === (7))){
var inst_44372 = (state_44376[(2)]);
var state_44376__$1 = state_44376;
var statearr_44398_44706 = state_44376__$1;
(statearr_44398_44706[(2)] = inst_44372);

(statearr_44398_44706[(1)] = (3));


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
});})(__44657,c__29750__auto___44688,G__44323_44662,n__26251__auto___44656,jobs,results,process,async))
;
return ((function (__44657,switch__29638__auto__,c__29750__auto___44688,G__44323_44662,n__26251__auto___44656,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_44402 = [null,null,null,null,null,null,null];
(statearr_44402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_44402[(1)] = (1));

return statearr_44402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_44376){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_44376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e44405){if((e44405 instanceof Object)){
var ex__29642__auto__ = e44405;
var statearr_44406_44707 = state_44376;
(statearr_44406_44707[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44708 = state_44376;
state_44376 = G__44708;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_44376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_44376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(__44657,switch__29638__auto__,c__29750__auto___44688,G__44323_44662,n__26251__auto___44656,jobs,results,process,async))
})();
var state__29752__auto__ = (function (){var statearr_44408 = f__29751__auto__.call(null);
(statearr_44408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___44688);

return statearr_44408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(__44657,c__29750__auto___44688,G__44323_44662,n__26251__auto___44656,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__44712 = (__44657 + (1));
__44657 = G__44712;
continue;
} else {
}
break;
}

var c__29750__auto___44713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___44713,jobs,results,process,async){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___44713,jobs,results,process,async){
return (function (state_44431){
var state_val_44432 = (state_44431[(1)]);
if((state_val_44432 === (1))){
var state_44431__$1 = state_44431;
var statearr_44433_44715 = state_44431__$1;
(statearr_44433_44715[(2)] = null);

(statearr_44433_44715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (2))){
var state_44431__$1 = state_44431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44431__$1,(4),from);
} else {
if((state_val_44432 === (3))){
var inst_44429 = (state_44431[(2)]);
var state_44431__$1 = state_44431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44431__$1,inst_44429);
} else {
if((state_val_44432 === (4))){
var inst_44412 = (state_44431[(7)]);
var inst_44412__$1 = (state_44431[(2)]);
var inst_44413 = (inst_44412__$1 == null);
var state_44431__$1 = (function (){var statearr_44438 = state_44431;
(statearr_44438[(7)] = inst_44412__$1);

return statearr_44438;
})();
if(cljs.core.truth_(inst_44413)){
var statearr_44439_44718 = state_44431__$1;
(statearr_44439_44718[(1)] = (5));

} else {
var statearr_44440_44719 = state_44431__$1;
(statearr_44440_44719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (5))){
var inst_44415 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44431__$1 = state_44431;
var statearr_44441_44720 = state_44431__$1;
(statearr_44441_44720[(2)] = inst_44415);

(statearr_44441_44720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (6))){
var inst_44417 = (state_44431[(8)]);
var inst_44412 = (state_44431[(7)]);
var inst_44417__$1 = cljs.core.async.chan.call(null,(1));
var inst_44418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44419 = [inst_44412,inst_44417__$1];
var inst_44420 = (new cljs.core.PersistentVector(null,2,(5),inst_44418,inst_44419,null));
var state_44431__$1 = (function (){var statearr_44442 = state_44431;
(statearr_44442[(8)] = inst_44417__$1);

return statearr_44442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44431__$1,(8),jobs,inst_44420);
} else {
if((state_val_44432 === (7))){
var inst_44427 = (state_44431[(2)]);
var state_44431__$1 = state_44431;
var statearr_44446_44724 = state_44431__$1;
(statearr_44446_44724[(2)] = inst_44427);

(statearr_44446_44724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44432 === (8))){
var inst_44417 = (state_44431[(8)]);
var inst_44422 = (state_44431[(2)]);
var state_44431__$1 = (function (){var statearr_44447 = state_44431;
(statearr_44447[(9)] = inst_44422);

return statearr_44447;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44431__$1,(9),results,inst_44417);
} else {
if((state_val_44432 === (9))){
var inst_44424 = (state_44431[(2)]);
var state_44431__$1 = (function (){var statearr_44448 = state_44431;
(statearr_44448[(10)] = inst_44424);

return statearr_44448;
})();
var statearr_44449_44725 = state_44431__$1;
(statearr_44449_44725[(2)] = null);

(statearr_44449_44725[(1)] = (2));


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
});})(c__29750__auto___44713,jobs,results,process,async))
;
return ((function (switch__29638__auto__,c__29750__auto___44713,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0 = (function (){
var statearr_44456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_44456[(1)] = (1));

return statearr_44456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_44431){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_44431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e44457){if((e44457 instanceof Object)){
var ex__29642__auto__ = e44457;
var statearr_44461_44730 = state_44431;
(statearr_44461_44730[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44734 = state_44431;
state_44431 = G__44734;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_44431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_44431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___44713,jobs,results,process,async))
})();
var state__29752__auto__ = (function (){var statearr_44462 = f__29751__auto__.call(null);
(statearr_44462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___44713);

return statearr_44462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___44713,jobs,results,process,async))
);


var c__29750__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto__,jobs,results,process,async){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto__,jobs,results,process,async){
return (function (state_44507){
var state_val_44508 = (state_44507[(1)]);
if((state_val_44508 === (7))){
var inst_44503 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44512_44741 = state_44507__$1;
(statearr_44512_44741[(2)] = inst_44503);

(statearr_44512_44741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (20))){
var state_44507__$1 = state_44507;
var statearr_44513_44745 = state_44507__$1;
(statearr_44513_44745[(2)] = null);

(statearr_44513_44745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (1))){
var state_44507__$1 = state_44507;
var statearr_44517_44749 = state_44507__$1;
(statearr_44517_44749[(2)] = null);

(statearr_44517_44749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (4))){
var inst_44468 = (state_44507[(7)]);
var inst_44468__$1 = (state_44507[(2)]);
var inst_44469 = (inst_44468__$1 == null);
var state_44507__$1 = (function (){var statearr_44518 = state_44507;
(statearr_44518[(7)] = inst_44468__$1);

return statearr_44518;
})();
if(cljs.core.truth_(inst_44469)){
var statearr_44519_44752 = state_44507__$1;
(statearr_44519_44752[(1)] = (5));

} else {
var statearr_44520_44754 = state_44507__$1;
(statearr_44520_44754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (15))){
var inst_44481 = (state_44507[(8)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44507__$1,(18),to,inst_44481);
} else {
if((state_val_44508 === (21))){
var inst_44498 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44524_44755 = state_44507__$1;
(statearr_44524_44755[(2)] = inst_44498);

(statearr_44524_44755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (13))){
var inst_44500 = (state_44507[(2)]);
var state_44507__$1 = (function (){var statearr_44525 = state_44507;
(statearr_44525[(9)] = inst_44500);

return statearr_44525;
})();
var statearr_44526_44760 = state_44507__$1;
(statearr_44526_44760[(2)] = null);

(statearr_44526_44760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (6))){
var inst_44468 = (state_44507[(7)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44507__$1,(11),inst_44468);
} else {
if((state_val_44508 === (17))){
var inst_44493 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
if(cljs.core.truth_(inst_44493)){
var statearr_44530_44766 = state_44507__$1;
(statearr_44530_44766[(1)] = (19));

} else {
var statearr_44531_44767 = state_44507__$1;
(statearr_44531_44767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (3))){
var inst_44505 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44507__$1,inst_44505);
} else {
if((state_val_44508 === (12))){
var inst_44478 = (state_44507[(10)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44507__$1,(14),inst_44478);
} else {
if((state_val_44508 === (2))){
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44507__$1,(4),results);
} else {
if((state_val_44508 === (19))){
var state_44507__$1 = state_44507;
var statearr_44536_44772 = state_44507__$1;
(statearr_44536_44772[(2)] = null);

(statearr_44536_44772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (11))){
var inst_44478 = (state_44507[(2)]);
var state_44507__$1 = (function (){var statearr_44540 = state_44507;
(statearr_44540[(10)] = inst_44478);

return statearr_44540;
})();
var statearr_44541_44773 = state_44507__$1;
(statearr_44541_44773[(2)] = null);

(statearr_44541_44773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (9))){
var state_44507__$1 = state_44507;
var statearr_44542_44774 = state_44507__$1;
(statearr_44542_44774[(2)] = null);

(statearr_44542_44774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (5))){
var state_44507__$1 = state_44507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44546_44775 = state_44507__$1;
(statearr_44546_44775[(1)] = (8));

} else {
var statearr_44547_44776 = state_44507__$1;
(statearr_44547_44776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (14))){
var inst_44481 = (state_44507[(8)]);
var inst_44487 = (state_44507[(11)]);
var inst_44481__$1 = (state_44507[(2)]);
var inst_44486 = (inst_44481__$1 == null);
var inst_44487__$1 = cljs.core.not.call(null,inst_44486);
var state_44507__$1 = (function (){var statearr_44548 = state_44507;
(statearr_44548[(8)] = inst_44481__$1);

(statearr_44548[(11)] = inst_44487__$1);

return statearr_44548;
})();
if(inst_44487__$1){
var statearr_44549_44778 = state_44507__$1;
(statearr_44549_44778[(1)] = (15));

} else {
var statearr_44550_44779 = state_44507__$1;
(statearr_44550_44779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (16))){
var inst_44487 = (state_44507[(11)]);
var state_44507__$1 = state_44507;
var statearr_44551_44780 = state_44507__$1;
(statearr_44551_44780[(2)] = inst_44487);

(statearr_44551_44780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (10))){
var inst_44475 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44552_44781 = state_44507__$1;
(statearr_44552_44781[(2)] = inst_44475);

(statearr_44552_44781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (18))){
var inst_44490 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44553_44782 = state_44507__$1;
(statearr_44553_44782[(2)] = inst_44490);

(statearr_44553_44782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (8))){
var inst_44472 = cljs.core.async.close_BANG_.call(null,to);
var state_44507__$1 = state_44507;
var statearr_44554_44783 = state_44507__$1;
(statearr_44554_44783[(2)] = inst_44472);

(statearr_44554_44783[(1)] = (10));


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
var statearr_44566 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__);

(statearr_44566[(1)] = (1));

return statearr_44566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1 = (function (state_44507){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_44507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e44568){if((e44568 instanceof Object)){
var ex__29642__auto__ = e44568;
var statearr_44569_44784 = state_44507;
(statearr_44569_44784[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44785 = state_44507;
state_44507 = G__44785;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__ = function(state_44507){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1.call(this,state_44507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,jobs,results,process,async))
})();
var state__29752__auto__ = (function (){var statearr_44574 = f__29751__auto__.call(null);
(statearr_44574[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_44574;
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
var args44786 = [];
var len__26441__auto___44794 = arguments.length;
var i__26442__auto___44798 = (0);
while(true){
if((i__26442__auto___44798 < len__26441__auto___44794)){
args44786.push((arguments[i__26442__auto___44798]));

var G__44799 = (i__26442__auto___44798 + (1));
i__26442__auto___44798 = G__44799;
continue;
} else {
}
break;
}

var G__44791 = args44786.length;
switch (G__44791) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44786.length)].join('')));

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
var args44811 = [];
var len__26441__auto___44816 = arguments.length;
var i__26442__auto___44817 = (0);
while(true){
if((i__26442__auto___44817 < len__26441__auto___44816)){
args44811.push((arguments[i__26442__auto___44817]));

var G__44818 = (i__26442__auto___44817 + (1));
i__26442__auto___44817 = G__44818;
continue;
} else {
}
break;
}

var G__44815 = args44811.length;
switch (G__44815) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44811.length)].join('')));

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
var args44820 = [];
var len__26441__auto___44887 = arguments.length;
var i__26442__auto___44894 = (0);
while(true){
if((i__26442__auto___44894 < len__26441__auto___44887)){
args44820.push((arguments[i__26442__auto___44894]));

var G__44895 = (i__26442__auto___44894 + (1));
i__26442__auto___44894 = G__44895;
continue;
} else {
}
break;
}

var G__44826 = args44820.length;
switch (G__44826) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44820.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29750__auto___44897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___44897,tc,fc){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___44897,tc,fc){
return (function (state_44853){
var state_val_44854 = (state_44853[(1)]);
if((state_val_44854 === (7))){
var inst_44849 = (state_44853[(2)]);
var state_44853__$1 = state_44853;
var statearr_44855_44899 = state_44853__$1;
(statearr_44855_44899[(2)] = inst_44849);

(statearr_44855_44899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (1))){
var state_44853__$1 = state_44853;
var statearr_44856_44900 = state_44853__$1;
(statearr_44856_44900[(2)] = null);

(statearr_44856_44900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (4))){
var inst_44830 = (state_44853[(7)]);
var inst_44830__$1 = (state_44853[(2)]);
var inst_44831 = (inst_44830__$1 == null);
var state_44853__$1 = (function (){var statearr_44857 = state_44853;
(statearr_44857[(7)] = inst_44830__$1);

return statearr_44857;
})();
if(cljs.core.truth_(inst_44831)){
var statearr_44858_44903 = state_44853__$1;
(statearr_44858_44903[(1)] = (5));

} else {
var statearr_44859_44904 = state_44853__$1;
(statearr_44859_44904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (13))){
var state_44853__$1 = state_44853;
var statearr_44860_44905 = state_44853__$1;
(statearr_44860_44905[(2)] = null);

(statearr_44860_44905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (6))){
var inst_44830 = (state_44853[(7)]);
var inst_44836 = p.call(null,inst_44830);
var state_44853__$1 = state_44853;
if(cljs.core.truth_(inst_44836)){
var statearr_44861_44906 = state_44853__$1;
(statearr_44861_44906[(1)] = (9));

} else {
var statearr_44862_44907 = state_44853__$1;
(statearr_44862_44907[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (3))){
var inst_44851 = (state_44853[(2)]);
var state_44853__$1 = state_44853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44853__$1,inst_44851);
} else {
if((state_val_44854 === (12))){
var state_44853__$1 = state_44853;
var statearr_44863_44908 = state_44853__$1;
(statearr_44863_44908[(2)] = null);

(statearr_44863_44908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (2))){
var state_44853__$1 = state_44853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44853__$1,(4),ch);
} else {
if((state_val_44854 === (11))){
var inst_44830 = (state_44853[(7)]);
var inst_44840 = (state_44853[(2)]);
var state_44853__$1 = state_44853;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44853__$1,(8),inst_44840,inst_44830);
} else {
if((state_val_44854 === (9))){
var state_44853__$1 = state_44853;
var statearr_44864_44909 = state_44853__$1;
(statearr_44864_44909[(2)] = tc);

(statearr_44864_44909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (5))){
var inst_44833 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44834 = cljs.core.async.close_BANG_.call(null,fc);
var state_44853__$1 = (function (){var statearr_44865 = state_44853;
(statearr_44865[(8)] = inst_44833);

return statearr_44865;
})();
var statearr_44866_44910 = state_44853__$1;
(statearr_44866_44910[(2)] = inst_44834);

(statearr_44866_44910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (14))){
var inst_44847 = (state_44853[(2)]);
var state_44853__$1 = state_44853;
var statearr_44867_44911 = state_44853__$1;
(statearr_44867_44911[(2)] = inst_44847);

(statearr_44867_44911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (10))){
var state_44853__$1 = state_44853;
var statearr_44868_44913 = state_44853__$1;
(statearr_44868_44913[(2)] = fc);

(statearr_44868_44913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44854 === (8))){
var inst_44842 = (state_44853[(2)]);
var state_44853__$1 = state_44853;
if(cljs.core.truth_(inst_44842)){
var statearr_44872_44915 = state_44853__$1;
(statearr_44872_44915[(1)] = (12));

} else {
var statearr_44873_44916 = state_44853__$1;
(statearr_44873_44916[(1)] = (13));

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
});})(c__29750__auto___44897,tc,fc))
;
return ((function (switch__29638__auto__,c__29750__auto___44897,tc,fc){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_44877 = [null,null,null,null,null,null,null,null,null];
(statearr_44877[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_44877[(1)] = (1));

return statearr_44877;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_44853){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_44853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e44878){if((e44878 instanceof Object)){
var ex__29642__auto__ = e44878;
var statearr_44879_44919 = state_44853;
(statearr_44879_44919[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44920 = state_44853;
state_44853 = G__44920;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_44853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_44853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___44897,tc,fc))
})();
var state__29752__auto__ = (function (){var statearr_44886 = f__29751__auto__.call(null);
(statearr_44886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___44897);

return statearr_44886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___44897,tc,fc))
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
return (function (state_44997){
var state_val_44998 = (state_44997[(1)]);
if((state_val_44998 === (7))){
var inst_44993 = (state_44997[(2)]);
var state_44997__$1 = state_44997;
var statearr_44999_45028 = state_44997__$1;
(statearr_44999_45028[(2)] = inst_44993);

(statearr_44999_45028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (1))){
var inst_44976 = init;
var state_44997__$1 = (function (){var statearr_45000 = state_44997;
(statearr_45000[(7)] = inst_44976);

return statearr_45000;
})();
var statearr_45001_45029 = state_44997__$1;
(statearr_45001_45029[(2)] = null);

(statearr_45001_45029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (4))){
var inst_44979 = (state_44997[(8)]);
var inst_44979__$1 = (state_44997[(2)]);
var inst_44980 = (inst_44979__$1 == null);
var state_44997__$1 = (function (){var statearr_45004 = state_44997;
(statearr_45004[(8)] = inst_44979__$1);

return statearr_45004;
})();
if(cljs.core.truth_(inst_44980)){
var statearr_45005_45030 = state_44997__$1;
(statearr_45005_45030[(1)] = (5));

} else {
var statearr_45006_45031 = state_44997__$1;
(statearr_45006_45031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (6))){
var inst_44976 = (state_44997[(7)]);
var inst_44983 = (state_44997[(9)]);
var inst_44979 = (state_44997[(8)]);
var inst_44983__$1 = f.call(null,inst_44976,inst_44979);
var inst_44984 = cljs.core.reduced_QMARK_.call(null,inst_44983__$1);
var state_44997__$1 = (function (){var statearr_45007 = state_44997;
(statearr_45007[(9)] = inst_44983__$1);

return statearr_45007;
})();
if(inst_44984){
var statearr_45008_45033 = state_44997__$1;
(statearr_45008_45033[(1)] = (8));

} else {
var statearr_45009_45034 = state_44997__$1;
(statearr_45009_45034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (3))){
var inst_44995 = (state_44997[(2)]);
var state_44997__$1 = state_44997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44997__$1,inst_44995);
} else {
if((state_val_44998 === (2))){
var state_44997__$1 = state_44997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44997__$1,(4),ch);
} else {
if((state_val_44998 === (9))){
var inst_44983 = (state_44997[(9)]);
var inst_44976 = inst_44983;
var state_44997__$1 = (function (){var statearr_45010 = state_44997;
(statearr_45010[(7)] = inst_44976);

return statearr_45010;
})();
var statearr_45011_45039 = state_44997__$1;
(statearr_45011_45039[(2)] = null);

(statearr_45011_45039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (5))){
var inst_44976 = (state_44997[(7)]);
var state_44997__$1 = state_44997;
var statearr_45012_45040 = state_44997__$1;
(statearr_45012_45040[(2)] = inst_44976);

(statearr_45012_45040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (10))){
var inst_44990 = (state_44997[(2)]);
var state_44997__$1 = state_44997;
var statearr_45013_45041 = state_44997__$1;
(statearr_45013_45041[(2)] = inst_44990);

(statearr_45013_45041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44998 === (8))){
var inst_44983 = (state_44997[(9)]);
var inst_44986 = cljs.core.deref.call(null,inst_44983);
var state_44997__$1 = state_44997;
var statearr_45014_45044 = state_44997__$1;
(statearr_45014_45044[(2)] = inst_44986);

(statearr_45014_45044[(1)] = (10));


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
var statearr_45020 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45020[(0)] = cljs$core$async$reduce_$_state_machine__29639__auto__);

(statearr_45020[(1)] = (1));

return statearr_45020;
});
var cljs$core$async$reduce_$_state_machine__29639__auto____1 = (function (state_44997){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_44997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e45021){if((e45021 instanceof Object)){
var ex__29642__auto__ = e45021;
var statearr_45022_45047 = state_44997;
(statearr_45022_45047[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45048 = state_44997;
state_44997 = G__45048;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29639__auto__ = function(state_44997){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29639__auto____1.call(this,state_44997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29639__auto____0;
cljs$core$async$reduce_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29639__auto____1;
return cljs$core$async$reduce_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_45026 = f__29751__auto__.call(null);
(statearr_45026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_45026;
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
return (function (state_45070){
var state_val_45071 = (state_45070[(1)]);
if((state_val_45071 === (1))){
var inst_45065 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45070__$1 = state_45070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45070__$1,(2),inst_45065);
} else {
if((state_val_45071 === (2))){
var inst_45067 = (state_45070[(2)]);
var inst_45068 = f__$1.call(null,inst_45067);
var state_45070__$1 = state_45070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45070__$1,inst_45068);
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
var statearr_45075 = [null,null,null,null,null,null,null];
(statearr_45075[(0)] = cljs$core$async$transduce_$_state_machine__29639__auto__);

(statearr_45075[(1)] = (1));

return statearr_45075;
});
var cljs$core$async$transduce_$_state_machine__29639__auto____1 = (function (state_45070){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_45070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e45076){if((e45076 instanceof Object)){
var ex__29642__auto__ = e45076;
var statearr_45077_45079 = state_45070;
(statearr_45077_45079[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45080 = state_45070;
state_45070 = G__45080;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29639__auto__ = function(state_45070){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29639__auto____1.call(this,state_45070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29639__auto____0;
cljs$core$async$transduce_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29639__auto____1;
return cljs$core$async$transduce_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__,f__$1))
})();
var state__29752__auto__ = (function (){var statearr_45078 = f__29751__auto__.call(null);
(statearr_45078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_45078;
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
var args45086 = [];
var len__26441__auto___45142 = arguments.length;
var i__26442__auto___45143 = (0);
while(true){
if((i__26442__auto___45143 < len__26441__auto___45142)){
args45086.push((arguments[i__26442__auto___45143]));

var G__45144 = (i__26442__auto___45143 + (1));
i__26442__auto___45143 = G__45144;
continue;
} else {
}
break;
}

var G__45089 = args45086.length;
switch (G__45089) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45086.length)].join('')));

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
return (function (state_45114){
var state_val_45115 = (state_45114[(1)]);
if((state_val_45115 === (7))){
var inst_45096 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
var statearr_45116_45147 = state_45114__$1;
(statearr_45116_45147[(2)] = inst_45096);

(statearr_45116_45147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (1))){
var inst_45090 = cljs.core.seq.call(null,coll);
var inst_45091 = inst_45090;
var state_45114__$1 = (function (){var statearr_45117 = state_45114;
(statearr_45117[(7)] = inst_45091);

return statearr_45117;
})();
var statearr_45118_45150 = state_45114__$1;
(statearr_45118_45150[(2)] = null);

(statearr_45118_45150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (4))){
var inst_45091 = (state_45114[(7)]);
var inst_45094 = cljs.core.first.call(null,inst_45091);
var state_45114__$1 = state_45114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45114__$1,(7),ch,inst_45094);
} else {
if((state_val_45115 === (13))){
var inst_45108 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
var statearr_45119_45151 = state_45114__$1;
(statearr_45119_45151[(2)] = inst_45108);

(statearr_45119_45151[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (6))){
var inst_45099 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
if(cljs.core.truth_(inst_45099)){
var statearr_45123_45152 = state_45114__$1;
(statearr_45123_45152[(1)] = (8));

} else {
var statearr_45124_45153 = state_45114__$1;
(statearr_45124_45153[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (3))){
var inst_45112 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45114__$1,inst_45112);
} else {
if((state_val_45115 === (12))){
var state_45114__$1 = state_45114;
var statearr_45125_45156 = state_45114__$1;
(statearr_45125_45156[(2)] = null);

(statearr_45125_45156[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (2))){
var inst_45091 = (state_45114[(7)]);
var state_45114__$1 = state_45114;
if(cljs.core.truth_(inst_45091)){
var statearr_45126_45157 = state_45114__$1;
(statearr_45126_45157[(1)] = (4));

} else {
var statearr_45127_45158 = state_45114__$1;
(statearr_45127_45158[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (11))){
var inst_45105 = cljs.core.async.close_BANG_.call(null,ch);
var state_45114__$1 = state_45114;
var statearr_45128_45159 = state_45114__$1;
(statearr_45128_45159[(2)] = inst_45105);

(statearr_45128_45159[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (9))){
var state_45114__$1 = state_45114;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45129_45160 = state_45114__$1;
(statearr_45129_45160[(1)] = (11));

} else {
var statearr_45130_45161 = state_45114__$1;
(statearr_45130_45161[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (5))){
var inst_45091 = (state_45114[(7)]);
var state_45114__$1 = state_45114;
var statearr_45131_45162 = state_45114__$1;
(statearr_45131_45162[(2)] = inst_45091);

(statearr_45131_45162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (10))){
var inst_45110 = (state_45114[(2)]);
var state_45114__$1 = state_45114;
var statearr_45132_45163 = state_45114__$1;
(statearr_45132_45163[(2)] = inst_45110);

(statearr_45132_45163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45115 === (8))){
var inst_45091 = (state_45114[(7)]);
var inst_45101 = cljs.core.next.call(null,inst_45091);
var inst_45091__$1 = inst_45101;
var state_45114__$1 = (function (){var statearr_45133 = state_45114;
(statearr_45133[(7)] = inst_45091__$1);

return statearr_45133;
})();
var statearr_45134_45166 = state_45114__$1;
(statearr_45134_45166[(2)] = null);

(statearr_45134_45166[(1)] = (2));


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
var statearr_45138 = [null,null,null,null,null,null,null,null];
(statearr_45138[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_45138[(1)] = (1));

return statearr_45138;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_45114){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_45114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e45139){if((e45139 instanceof Object)){
var ex__29642__auto__ = e45139;
var statearr_45140_45169 = state_45114;
(statearr_45140_45169[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45170 = state_45114;
state_45114 = G__45170;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_45114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_45114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_45141 = f__29751__auto__.call(null);
(statearr_45141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_45141;
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
if(typeof cljs.core.async.t_cljs$core$async45421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45421 = (function (ch,cs,meta45422){
this.ch = ch;
this.cs = cs;
this.meta45422 = meta45422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45423,meta45422__$1){
var self__ = this;
var _45423__$1 = this;
return (new cljs.core.async.t_cljs$core$async45421(self__.ch,self__.cs,meta45422__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45423){
var self__ = this;
var _45423__$1 = this;
return self__.meta45422;
});})(cs))
;

cljs.core.async.t_cljs$core$async45421.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45421.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45421.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45421.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45421.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45421.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45422","meta45422",-177867562,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45421";

cljs.core.async.t_cljs$core$async45421.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async45421");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45421 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45421(ch__$1,cs__$1,meta45422){
return (new cljs.core.async.t_cljs$core$async45421(ch__$1,cs__$1,meta45422));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45421(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29750__auto___45692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___45692,cs,m,dchan,dctr,done){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___45692,cs,m,dchan,dctr,done){
return (function (state_45568){
var state_val_45569 = (state_45568[(1)]);
if((state_val_45569 === (7))){
var inst_45564 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45570_45695 = state_45568__$1;
(statearr_45570_45695[(2)] = inst_45564);

(statearr_45570_45695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (20))){
var inst_45467 = (state_45568[(7)]);
var inst_45479 = cljs.core.first.call(null,inst_45467);
var inst_45480 = cljs.core.nth.call(null,inst_45479,(0),null);
var inst_45481 = cljs.core.nth.call(null,inst_45479,(1),null);
var state_45568__$1 = (function (){var statearr_45572 = state_45568;
(statearr_45572[(8)] = inst_45480);

return statearr_45572;
})();
if(cljs.core.truth_(inst_45481)){
var statearr_45574_45701 = state_45568__$1;
(statearr_45574_45701[(1)] = (22));

} else {
var statearr_45575_45702 = state_45568__$1;
(statearr_45575_45702[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (27))){
var inst_45516 = (state_45568[(9)]);
var inst_45509 = (state_45568[(10)]);
var inst_45436 = (state_45568[(11)]);
var inst_45511 = (state_45568[(12)]);
var inst_45516__$1 = cljs.core._nth.call(null,inst_45509,inst_45511);
var inst_45517 = cljs.core.async.put_BANG_.call(null,inst_45516__$1,inst_45436,done);
var state_45568__$1 = (function (){var statearr_45576 = state_45568;
(statearr_45576[(9)] = inst_45516__$1);

return statearr_45576;
})();
if(cljs.core.truth_(inst_45517)){
var statearr_45577_45706 = state_45568__$1;
(statearr_45577_45706[(1)] = (30));

} else {
var statearr_45582_45708 = state_45568__$1;
(statearr_45582_45708[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (1))){
var state_45568__$1 = state_45568;
var statearr_45583_45709 = state_45568__$1;
(statearr_45583_45709[(2)] = null);

(statearr_45583_45709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (24))){
var inst_45467 = (state_45568[(7)]);
var inst_45486 = (state_45568[(2)]);
var inst_45487 = cljs.core.next.call(null,inst_45467);
var inst_45445 = inst_45487;
var inst_45446 = null;
var inst_45447 = (0);
var inst_45448 = (0);
var state_45568__$1 = (function (){var statearr_45584 = state_45568;
(statearr_45584[(13)] = inst_45445);

(statearr_45584[(14)] = inst_45448);

(statearr_45584[(15)] = inst_45486);

(statearr_45584[(16)] = inst_45447);

(statearr_45584[(17)] = inst_45446);

return statearr_45584;
})();
var statearr_45585_45711 = state_45568__$1;
(statearr_45585_45711[(2)] = null);

(statearr_45585_45711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (39))){
var state_45568__$1 = state_45568;
var statearr_45589_45712 = state_45568__$1;
(statearr_45589_45712[(2)] = null);

(statearr_45589_45712[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (4))){
var inst_45436 = (state_45568[(11)]);
var inst_45436__$1 = (state_45568[(2)]);
var inst_45437 = (inst_45436__$1 == null);
var state_45568__$1 = (function (){var statearr_45590 = state_45568;
(statearr_45590[(11)] = inst_45436__$1);

return statearr_45590;
})();
if(cljs.core.truth_(inst_45437)){
var statearr_45591_45713 = state_45568__$1;
(statearr_45591_45713[(1)] = (5));

} else {
var statearr_45592_45715 = state_45568__$1;
(statearr_45592_45715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (15))){
var inst_45445 = (state_45568[(13)]);
var inst_45448 = (state_45568[(14)]);
var inst_45447 = (state_45568[(16)]);
var inst_45446 = (state_45568[(17)]);
var inst_45463 = (state_45568[(2)]);
var inst_45464 = (inst_45448 + (1));
var tmp45586 = inst_45445;
var tmp45587 = inst_45447;
var tmp45588 = inst_45446;
var inst_45445__$1 = tmp45586;
var inst_45446__$1 = tmp45588;
var inst_45447__$1 = tmp45587;
var inst_45448__$1 = inst_45464;
var state_45568__$1 = (function (){var statearr_45593 = state_45568;
(statearr_45593[(13)] = inst_45445__$1);

(statearr_45593[(14)] = inst_45448__$1);

(statearr_45593[(16)] = inst_45447__$1);

(statearr_45593[(18)] = inst_45463);

(statearr_45593[(17)] = inst_45446__$1);

return statearr_45593;
})();
var statearr_45598_45721 = state_45568__$1;
(statearr_45598_45721[(2)] = null);

(statearr_45598_45721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (21))){
var inst_45490 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45602_45724 = state_45568__$1;
(statearr_45602_45724[(2)] = inst_45490);

(statearr_45602_45724[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (31))){
var inst_45516 = (state_45568[(9)]);
var inst_45520 = done.call(null,null);
var inst_45521 = cljs.core.async.untap_STAR_.call(null,m,inst_45516);
var state_45568__$1 = (function (){var statearr_45603 = state_45568;
(statearr_45603[(19)] = inst_45520);

return statearr_45603;
})();
var statearr_45604_45725 = state_45568__$1;
(statearr_45604_45725[(2)] = inst_45521);

(statearr_45604_45725[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (32))){
var inst_45510 = (state_45568[(20)]);
var inst_45508 = (state_45568[(21)]);
var inst_45509 = (state_45568[(10)]);
var inst_45511 = (state_45568[(12)]);
var inst_45523 = (state_45568[(2)]);
var inst_45524 = (inst_45511 + (1));
var tmp45599 = inst_45510;
var tmp45600 = inst_45508;
var tmp45601 = inst_45509;
var inst_45508__$1 = tmp45600;
var inst_45509__$1 = tmp45601;
var inst_45510__$1 = tmp45599;
var inst_45511__$1 = inst_45524;
var state_45568__$1 = (function (){var statearr_45605 = state_45568;
(statearr_45605[(20)] = inst_45510__$1);

(statearr_45605[(21)] = inst_45508__$1);

(statearr_45605[(22)] = inst_45523);

(statearr_45605[(10)] = inst_45509__$1);

(statearr_45605[(12)] = inst_45511__$1);

return statearr_45605;
})();
var statearr_45606_45728 = state_45568__$1;
(statearr_45606_45728[(2)] = null);

(statearr_45606_45728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (40))){
var inst_45536 = (state_45568[(23)]);
var inst_45540 = done.call(null,null);
var inst_45541 = cljs.core.async.untap_STAR_.call(null,m,inst_45536);
var state_45568__$1 = (function (){var statearr_45607 = state_45568;
(statearr_45607[(24)] = inst_45540);

return statearr_45607;
})();
var statearr_45608_45729 = state_45568__$1;
(statearr_45608_45729[(2)] = inst_45541);

(statearr_45608_45729[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (33))){
var inst_45527 = (state_45568[(25)]);
var inst_45529 = cljs.core.chunked_seq_QMARK_.call(null,inst_45527);
var state_45568__$1 = state_45568;
if(inst_45529){
var statearr_45609_45739 = state_45568__$1;
(statearr_45609_45739[(1)] = (36));

} else {
var statearr_45610_45743 = state_45568__$1;
(statearr_45610_45743[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (13))){
var inst_45457 = (state_45568[(26)]);
var inst_45460 = cljs.core.async.close_BANG_.call(null,inst_45457);
var state_45568__$1 = state_45568;
var statearr_45611_45744 = state_45568__$1;
(statearr_45611_45744[(2)] = inst_45460);

(statearr_45611_45744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (22))){
var inst_45480 = (state_45568[(8)]);
var inst_45483 = cljs.core.async.close_BANG_.call(null,inst_45480);
var state_45568__$1 = state_45568;
var statearr_45612_45745 = state_45568__$1;
(statearr_45612_45745[(2)] = inst_45483);

(statearr_45612_45745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (36))){
var inst_45527 = (state_45568[(25)]);
var inst_45531 = cljs.core.chunk_first.call(null,inst_45527);
var inst_45532 = cljs.core.chunk_rest.call(null,inst_45527);
var inst_45533 = cljs.core.count.call(null,inst_45531);
var inst_45508 = inst_45532;
var inst_45509 = inst_45531;
var inst_45510 = inst_45533;
var inst_45511 = (0);
var state_45568__$1 = (function (){var statearr_45613 = state_45568;
(statearr_45613[(20)] = inst_45510);

(statearr_45613[(21)] = inst_45508);

(statearr_45613[(10)] = inst_45509);

(statearr_45613[(12)] = inst_45511);

return statearr_45613;
})();
var statearr_45614_45746 = state_45568__$1;
(statearr_45614_45746[(2)] = null);

(statearr_45614_45746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (41))){
var inst_45527 = (state_45568[(25)]);
var inst_45543 = (state_45568[(2)]);
var inst_45544 = cljs.core.next.call(null,inst_45527);
var inst_45508 = inst_45544;
var inst_45509 = null;
var inst_45510 = (0);
var inst_45511 = (0);
var state_45568__$1 = (function (){var statearr_45615 = state_45568;
(statearr_45615[(27)] = inst_45543);

(statearr_45615[(20)] = inst_45510);

(statearr_45615[(21)] = inst_45508);

(statearr_45615[(10)] = inst_45509);

(statearr_45615[(12)] = inst_45511);

return statearr_45615;
})();
var statearr_45617_45747 = state_45568__$1;
(statearr_45617_45747[(2)] = null);

(statearr_45617_45747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (43))){
var state_45568__$1 = state_45568;
var statearr_45619_45748 = state_45568__$1;
(statearr_45619_45748[(2)] = null);

(statearr_45619_45748[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (29))){
var inst_45552 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45620_45750 = state_45568__$1;
(statearr_45620_45750[(2)] = inst_45552);

(statearr_45620_45750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (44))){
var inst_45561 = (state_45568[(2)]);
var state_45568__$1 = (function (){var statearr_45621 = state_45568;
(statearr_45621[(28)] = inst_45561);

return statearr_45621;
})();
var statearr_45623_45751 = state_45568__$1;
(statearr_45623_45751[(2)] = null);

(statearr_45623_45751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (6))){
var inst_45500 = (state_45568[(29)]);
var inst_45499 = cljs.core.deref.call(null,cs);
var inst_45500__$1 = cljs.core.keys.call(null,inst_45499);
var inst_45501 = cljs.core.count.call(null,inst_45500__$1);
var inst_45502 = cljs.core.reset_BANG_.call(null,dctr,inst_45501);
var inst_45507 = cljs.core.seq.call(null,inst_45500__$1);
var inst_45508 = inst_45507;
var inst_45509 = null;
var inst_45510 = (0);
var inst_45511 = (0);
var state_45568__$1 = (function (){var statearr_45624 = state_45568;
(statearr_45624[(29)] = inst_45500__$1);

(statearr_45624[(20)] = inst_45510);

(statearr_45624[(21)] = inst_45508);

(statearr_45624[(30)] = inst_45502);

(statearr_45624[(10)] = inst_45509);

(statearr_45624[(12)] = inst_45511);

return statearr_45624;
})();
var statearr_45625_45752 = state_45568__$1;
(statearr_45625_45752[(2)] = null);

(statearr_45625_45752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (28))){
var inst_45527 = (state_45568[(25)]);
var inst_45508 = (state_45568[(21)]);
var inst_45527__$1 = cljs.core.seq.call(null,inst_45508);
var state_45568__$1 = (function (){var statearr_45630 = state_45568;
(statearr_45630[(25)] = inst_45527__$1);

return statearr_45630;
})();
if(inst_45527__$1){
var statearr_45631_45753 = state_45568__$1;
(statearr_45631_45753[(1)] = (33));

} else {
var statearr_45632_45754 = state_45568__$1;
(statearr_45632_45754[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (25))){
var inst_45510 = (state_45568[(20)]);
var inst_45511 = (state_45568[(12)]);
var inst_45513 = (inst_45511 < inst_45510);
var inst_45514 = inst_45513;
var state_45568__$1 = state_45568;
if(cljs.core.truth_(inst_45514)){
var statearr_45633_45755 = state_45568__$1;
(statearr_45633_45755[(1)] = (27));

} else {
var statearr_45634_45760 = state_45568__$1;
(statearr_45634_45760[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (34))){
var state_45568__$1 = state_45568;
var statearr_45639_45761 = state_45568__$1;
(statearr_45639_45761[(2)] = null);

(statearr_45639_45761[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (17))){
var state_45568__$1 = state_45568;
var statearr_45640_45762 = state_45568__$1;
(statearr_45640_45762[(2)] = null);

(statearr_45640_45762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (3))){
var inst_45566 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45568__$1,inst_45566);
} else {
if((state_val_45569 === (12))){
var inst_45495 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45641_45767 = state_45568__$1;
(statearr_45641_45767[(2)] = inst_45495);

(statearr_45641_45767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (2))){
var state_45568__$1 = state_45568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45568__$1,(4),ch);
} else {
if((state_val_45569 === (23))){
var state_45568__$1 = state_45568;
var statearr_45644_45768 = state_45568__$1;
(statearr_45644_45768[(2)] = null);

(statearr_45644_45768[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (35))){
var inst_45550 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45645_45769 = state_45568__$1;
(statearr_45645_45769[(2)] = inst_45550);

(statearr_45645_45769[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (19))){
var inst_45467 = (state_45568[(7)]);
var inst_45471 = cljs.core.chunk_first.call(null,inst_45467);
var inst_45472 = cljs.core.chunk_rest.call(null,inst_45467);
var inst_45473 = cljs.core.count.call(null,inst_45471);
var inst_45445 = inst_45472;
var inst_45446 = inst_45471;
var inst_45447 = inst_45473;
var inst_45448 = (0);
var state_45568__$1 = (function (){var statearr_45647 = state_45568;
(statearr_45647[(13)] = inst_45445);

(statearr_45647[(14)] = inst_45448);

(statearr_45647[(16)] = inst_45447);

(statearr_45647[(17)] = inst_45446);

return statearr_45647;
})();
var statearr_45648_45776 = state_45568__$1;
(statearr_45648_45776[(2)] = null);

(statearr_45648_45776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (11))){
var inst_45467 = (state_45568[(7)]);
var inst_45445 = (state_45568[(13)]);
var inst_45467__$1 = cljs.core.seq.call(null,inst_45445);
var state_45568__$1 = (function (){var statearr_45649 = state_45568;
(statearr_45649[(7)] = inst_45467__$1);

return statearr_45649;
})();
if(inst_45467__$1){
var statearr_45650_45782 = state_45568__$1;
(statearr_45650_45782[(1)] = (16));

} else {
var statearr_45651_45783 = state_45568__$1;
(statearr_45651_45783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (9))){
var inst_45497 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45656_45787 = state_45568__$1;
(statearr_45656_45787[(2)] = inst_45497);

(statearr_45656_45787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (5))){
var inst_45443 = cljs.core.deref.call(null,cs);
var inst_45444 = cljs.core.seq.call(null,inst_45443);
var inst_45445 = inst_45444;
var inst_45446 = null;
var inst_45447 = (0);
var inst_45448 = (0);
var state_45568__$1 = (function (){var statearr_45657 = state_45568;
(statearr_45657[(13)] = inst_45445);

(statearr_45657[(14)] = inst_45448);

(statearr_45657[(16)] = inst_45447);

(statearr_45657[(17)] = inst_45446);

return statearr_45657;
})();
var statearr_45658_45792 = state_45568__$1;
(statearr_45658_45792[(2)] = null);

(statearr_45658_45792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (14))){
var state_45568__$1 = state_45568;
var statearr_45660_45794 = state_45568__$1;
(statearr_45660_45794[(2)] = null);

(statearr_45660_45794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (45))){
var inst_45558 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45661_45795 = state_45568__$1;
(statearr_45661_45795[(2)] = inst_45558);

(statearr_45661_45795[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (26))){
var inst_45500 = (state_45568[(29)]);
var inst_45554 = (state_45568[(2)]);
var inst_45555 = cljs.core.seq.call(null,inst_45500);
var state_45568__$1 = (function (){var statearr_45663 = state_45568;
(statearr_45663[(31)] = inst_45554);

return statearr_45663;
})();
if(inst_45555){
var statearr_45664_45800 = state_45568__$1;
(statearr_45664_45800[(1)] = (42));

} else {
var statearr_45665_45801 = state_45568__$1;
(statearr_45665_45801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (16))){
var inst_45467 = (state_45568[(7)]);
var inst_45469 = cljs.core.chunked_seq_QMARK_.call(null,inst_45467);
var state_45568__$1 = state_45568;
if(inst_45469){
var statearr_45666_45802 = state_45568__$1;
(statearr_45666_45802[(1)] = (19));

} else {
var statearr_45667_45803 = state_45568__$1;
(statearr_45667_45803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (38))){
var inst_45547 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45668_45804 = state_45568__$1;
(statearr_45668_45804[(2)] = inst_45547);

(statearr_45668_45804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (30))){
var state_45568__$1 = state_45568;
var statearr_45670_45805 = state_45568__$1;
(statearr_45670_45805[(2)] = null);

(statearr_45670_45805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (10))){
var inst_45448 = (state_45568[(14)]);
var inst_45446 = (state_45568[(17)]);
var inst_45456 = cljs.core._nth.call(null,inst_45446,inst_45448);
var inst_45457 = cljs.core.nth.call(null,inst_45456,(0),null);
var inst_45458 = cljs.core.nth.call(null,inst_45456,(1),null);
var state_45568__$1 = (function (){var statearr_45671 = state_45568;
(statearr_45671[(26)] = inst_45457);

return statearr_45671;
})();
if(cljs.core.truth_(inst_45458)){
var statearr_45672_45806 = state_45568__$1;
(statearr_45672_45806[(1)] = (13));

} else {
var statearr_45673_45807 = state_45568__$1;
(statearr_45673_45807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (18))){
var inst_45493 = (state_45568[(2)]);
var state_45568__$1 = state_45568;
var statearr_45675_45808 = state_45568__$1;
(statearr_45675_45808[(2)] = inst_45493);

(statearr_45675_45808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (42))){
var state_45568__$1 = state_45568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45568__$1,(45),dchan);
} else {
if((state_val_45569 === (37))){
var inst_45527 = (state_45568[(25)]);
var inst_45536 = (state_45568[(23)]);
var inst_45436 = (state_45568[(11)]);
var inst_45536__$1 = cljs.core.first.call(null,inst_45527);
var inst_45537 = cljs.core.async.put_BANG_.call(null,inst_45536__$1,inst_45436,done);
var state_45568__$1 = (function (){var statearr_45676 = state_45568;
(statearr_45676[(23)] = inst_45536__$1);

return statearr_45676;
})();
if(cljs.core.truth_(inst_45537)){
var statearr_45677_45815 = state_45568__$1;
(statearr_45677_45815[(1)] = (39));

} else {
var statearr_45678_45816 = state_45568__$1;
(statearr_45678_45816[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45569 === (8))){
var inst_45448 = (state_45568[(14)]);
var inst_45447 = (state_45568[(16)]);
var inst_45450 = (inst_45448 < inst_45447);
var inst_45451 = inst_45450;
var state_45568__$1 = state_45568;
if(cljs.core.truth_(inst_45451)){
var statearr_45679_45817 = state_45568__$1;
(statearr_45679_45817[(1)] = (10));

} else {
var statearr_45680_45818 = state_45568__$1;
(statearr_45680_45818[(1)] = (11));

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
});})(c__29750__auto___45692,cs,m,dchan,dctr,done))
;
return ((function (switch__29638__auto__,c__29750__auto___45692,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29639__auto__ = null;
var cljs$core$async$mult_$_state_machine__29639__auto____0 = (function (){
var statearr_45687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45687[(0)] = cljs$core$async$mult_$_state_machine__29639__auto__);

(statearr_45687[(1)] = (1));

return statearr_45687;
});
var cljs$core$async$mult_$_state_machine__29639__auto____1 = (function (state_45568){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_45568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e45688){if((e45688 instanceof Object)){
var ex__29642__auto__ = e45688;
var statearr_45689_45825 = state_45568;
(statearr_45689_45825[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45826 = state_45568;
state_45568 = G__45826;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29639__auto__ = function(state_45568){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29639__auto____1.call(this,state_45568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29639__auto____0;
cljs$core$async$mult_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29639__auto____1;
return cljs$core$async$mult_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___45692,cs,m,dchan,dctr,done))
})();
var state__29752__auto__ = (function (){var statearr_45691 = f__29751__auto__.call(null);
(statearr_45691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___45692);

return statearr_45691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___45692,cs,m,dchan,dctr,done))
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
var args45827 = [];
var len__26441__auto___45830 = arguments.length;
var i__26442__auto___45831 = (0);
while(true){
if((i__26442__auto___45831 < len__26441__auto___45830)){
args45827.push((arguments[i__26442__auto___45831]));

var G__45832 = (i__26442__auto___45831 + (1));
i__26442__auto___45831 = G__45832;
continue;
} else {
}
break;
}

var G__45829 = args45827.length;
switch (G__45829) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45827.length)].join('')));

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
var len__26441__auto___45872 = arguments.length;
var i__26442__auto___45873 = (0);
while(true){
if((i__26442__auto___45873 < len__26441__auto___45872)){
args__26448__auto__.push((arguments[i__26442__auto___45873]));

var G__45877 = (i__26442__auto___45873 + (1));
i__26442__auto___45873 = G__45877;
continue;
} else {
}
break;
}

var argseq__26449__auto__ = ((((3) < args__26448__auto__.length))?(new cljs.core.IndexedSeq(args__26448__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26449__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45860){
var map__45861 = p__45860;
var map__45861__$1 = ((((!((map__45861 == null)))?((((map__45861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45861):map__45861);
var opts = map__45861__$1;
var statearr_45865_45882 = state;
(statearr_45865_45882[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45861,map__45861__$1,opts){
return (function (val){
var statearr_45866_45883 = state;
(statearr_45866_45883[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45861,map__45861__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45868_45886 = state;
(statearr_45868_45886[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45856){
var G__45857 = cljs.core.first.call(null,seq45856);
var seq45856__$1 = cljs.core.next.call(null,seq45856);
var G__45858 = cljs.core.first.call(null,seq45856__$1);
var seq45856__$2 = cljs.core.next.call(null,seq45856__$1);
var G__45859 = cljs.core.first.call(null,seq45856__$2);
var seq45856__$3 = cljs.core.next.call(null,seq45856__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45857,G__45858,G__45859,seq45856__$3);
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
if(typeof cljs.core.async.t_cljs$core$async46069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46069 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta46070){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta46070 = meta46070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46071,meta46070__$1){
var self__ = this;
var _46071__$1 = this;
return (new cljs.core.async.t_cljs$core$async46069(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta46070__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_46071){
var self__ = this;
var _46071__$1 = this;
return self__.meta46070;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46069.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async46069.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta46070","meta46070",-850424744,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async46069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46069";

cljs.core.async.t_cljs$core$async46069.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async46069");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async46069 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async46069(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46070){
return (new cljs.core.async.t_cljs$core$async46069(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta46070));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async46069(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29750__auto___46302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___46302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___46302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46192){
var state_val_46193 = (state_46192[(1)]);
if((state_val_46193 === (7))){
var inst_46092 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
var statearr_46194_46307 = state_46192__$1;
(statearr_46194_46307[(2)] = inst_46092);

(statearr_46194_46307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (20))){
var inst_46104 = (state_46192[(7)]);
var state_46192__$1 = state_46192;
var statearr_46195_46310 = state_46192__$1;
(statearr_46195_46310[(2)] = inst_46104);

(statearr_46195_46310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (27))){
var state_46192__$1 = state_46192;
var statearr_46196_46314 = state_46192__$1;
(statearr_46196_46314[(2)] = null);

(statearr_46196_46314[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (1))){
var inst_46078 = (state_46192[(8)]);
var inst_46078__$1 = calc_state.call(null);
var inst_46080 = (inst_46078__$1 == null);
var inst_46081 = cljs.core.not.call(null,inst_46080);
var state_46192__$1 = (function (){var statearr_46197 = state_46192;
(statearr_46197[(8)] = inst_46078__$1);

return statearr_46197;
})();
if(inst_46081){
var statearr_46198_46320 = state_46192__$1;
(statearr_46198_46320[(1)] = (2));

} else {
var statearr_46199_46321 = state_46192__$1;
(statearr_46199_46321[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (24))){
var inst_46130 = (state_46192[(9)]);
var inst_46154 = (state_46192[(10)]);
var inst_46139 = (state_46192[(11)]);
var inst_46154__$1 = inst_46130.call(null,inst_46139);
var state_46192__$1 = (function (){var statearr_46203 = state_46192;
(statearr_46203[(10)] = inst_46154__$1);

return statearr_46203;
})();
if(cljs.core.truth_(inst_46154__$1)){
var statearr_46204_46326 = state_46192__$1;
(statearr_46204_46326[(1)] = (29));

} else {
var statearr_46205_46328 = state_46192__$1;
(statearr_46205_46328[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (4))){
var inst_46095 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
if(cljs.core.truth_(inst_46095)){
var statearr_46208_46329 = state_46192__$1;
(statearr_46208_46329[(1)] = (8));

} else {
var statearr_46210_46330 = state_46192__$1;
(statearr_46210_46330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (15))){
var inst_46124 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
if(cljs.core.truth_(inst_46124)){
var statearr_46212_46331 = state_46192__$1;
(statearr_46212_46331[(1)] = (19));

} else {
var statearr_46213_46332 = state_46192__$1;
(statearr_46213_46332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (21))){
var inst_46129 = (state_46192[(12)]);
var inst_46129__$1 = (state_46192[(2)]);
var inst_46130 = cljs.core.get.call(null,inst_46129__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46131 = cljs.core.get.call(null,inst_46129__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46132 = cljs.core.get.call(null,inst_46129__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46192__$1 = (function (){var statearr_46215 = state_46192;
(statearr_46215[(13)] = inst_46131);

(statearr_46215[(9)] = inst_46130);

(statearr_46215[(12)] = inst_46129__$1);

return statearr_46215;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46192__$1,(22),inst_46132);
} else {
if((state_val_46193 === (31))){
var inst_46162 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
if(cljs.core.truth_(inst_46162)){
var statearr_46216_46341 = state_46192__$1;
(statearr_46216_46341[(1)] = (32));

} else {
var statearr_46217_46342 = state_46192__$1;
(statearr_46217_46342[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (32))){
var inst_46138 = (state_46192[(14)]);
var state_46192__$1 = state_46192;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46192__$1,(35),out,inst_46138);
} else {
if((state_val_46193 === (33))){
var inst_46129 = (state_46192[(12)]);
var inst_46104 = inst_46129;
var state_46192__$1 = (function (){var statearr_46218 = state_46192;
(statearr_46218[(7)] = inst_46104);

return statearr_46218;
})();
var statearr_46219_46343 = state_46192__$1;
(statearr_46219_46343[(2)] = null);

(statearr_46219_46343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (13))){
var inst_46104 = (state_46192[(7)]);
var inst_46111 = inst_46104.cljs$lang$protocol_mask$partition0$;
var inst_46112 = (inst_46111 & (64));
var inst_46115 = inst_46104.cljs$core$ISeq$;
var inst_46116 = (cljs.core.PROTOCOL_SENTINEL === inst_46115);
var inst_46117 = (inst_46112) || (inst_46116);
var state_46192__$1 = state_46192;
if(cljs.core.truth_(inst_46117)){
var statearr_46224_46347 = state_46192__$1;
(statearr_46224_46347[(1)] = (16));

} else {
var statearr_46225_46348 = state_46192__$1;
(statearr_46225_46348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (22))){
var inst_46139 = (state_46192[(11)]);
var inst_46138 = (state_46192[(14)]);
var inst_46137 = (state_46192[(2)]);
var inst_46138__$1 = cljs.core.nth.call(null,inst_46137,(0),null);
var inst_46139__$1 = cljs.core.nth.call(null,inst_46137,(1),null);
var inst_46140 = (inst_46138__$1 == null);
var inst_46141 = cljs.core._EQ_.call(null,inst_46139__$1,change);
var inst_46142 = (inst_46140) || (inst_46141);
var state_46192__$1 = (function (){var statearr_46226 = state_46192;
(statearr_46226[(11)] = inst_46139__$1);

(statearr_46226[(14)] = inst_46138__$1);

return statearr_46226;
})();
if(cljs.core.truth_(inst_46142)){
var statearr_46228_46349 = state_46192__$1;
(statearr_46228_46349[(1)] = (23));

} else {
var statearr_46229_46350 = state_46192__$1;
(statearr_46229_46350[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (36))){
var inst_46129 = (state_46192[(12)]);
var inst_46104 = inst_46129;
var state_46192__$1 = (function (){var statearr_46232 = state_46192;
(statearr_46232[(7)] = inst_46104);

return statearr_46232;
})();
var statearr_46233_46354 = state_46192__$1;
(statearr_46233_46354[(2)] = null);

(statearr_46233_46354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (29))){
var inst_46154 = (state_46192[(10)]);
var state_46192__$1 = state_46192;
var statearr_46234_46356 = state_46192__$1;
(statearr_46234_46356[(2)] = inst_46154);

(statearr_46234_46356[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (6))){
var state_46192__$1 = state_46192;
var statearr_46235_46358 = state_46192__$1;
(statearr_46235_46358[(2)] = false);

(statearr_46235_46358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (28))){
var inst_46149 = (state_46192[(2)]);
var inst_46151 = calc_state.call(null);
var inst_46104 = inst_46151;
var state_46192__$1 = (function (){var statearr_46236 = state_46192;
(statearr_46236[(7)] = inst_46104);

(statearr_46236[(15)] = inst_46149);

return statearr_46236;
})();
var statearr_46237_46361 = state_46192__$1;
(statearr_46237_46361[(2)] = null);

(statearr_46237_46361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (25))){
var inst_46180 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
var statearr_46239_46364 = state_46192__$1;
(statearr_46239_46364[(2)] = inst_46180);

(statearr_46239_46364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (34))){
var inst_46174 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
var statearr_46240_46366 = state_46192__$1;
(statearr_46240_46366[(2)] = inst_46174);

(statearr_46240_46366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (17))){
var state_46192__$1 = state_46192;
var statearr_46241_46367 = state_46192__$1;
(statearr_46241_46367[(2)] = false);

(statearr_46241_46367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (3))){
var state_46192__$1 = state_46192;
var statearr_46243_46368 = state_46192__$1;
(statearr_46243_46368[(2)] = false);

(statearr_46243_46368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (12))){
var inst_46190 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46192__$1,inst_46190);
} else {
if((state_val_46193 === (2))){
var inst_46078 = (state_46192[(8)]);
var inst_46084 = inst_46078.cljs$lang$protocol_mask$partition0$;
var inst_46085 = (inst_46084 & (64));
var inst_46086 = inst_46078.cljs$core$ISeq$;
var inst_46087 = (cljs.core.PROTOCOL_SENTINEL === inst_46086);
var inst_46088 = (inst_46085) || (inst_46087);
var state_46192__$1 = state_46192;
if(cljs.core.truth_(inst_46088)){
var statearr_46244_46375 = state_46192__$1;
(statearr_46244_46375[(1)] = (5));

} else {
var statearr_46245_46376 = state_46192__$1;
(statearr_46245_46376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (23))){
var inst_46138 = (state_46192[(14)]);
var inst_46144 = (inst_46138 == null);
var state_46192__$1 = state_46192;
if(cljs.core.truth_(inst_46144)){
var statearr_46246_46377 = state_46192__$1;
(statearr_46246_46377[(1)] = (26));

} else {
var statearr_46247_46378 = state_46192__$1;
(statearr_46247_46378[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (35))){
var inst_46165 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
if(cljs.core.truth_(inst_46165)){
var statearr_46249_46381 = state_46192__$1;
(statearr_46249_46381[(1)] = (36));

} else {
var statearr_46250_46382 = state_46192__$1;
(statearr_46250_46382[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (19))){
var inst_46104 = (state_46192[(7)]);
var inst_46126 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46104);
var state_46192__$1 = state_46192;
var statearr_46251_46385 = state_46192__$1;
(statearr_46251_46385[(2)] = inst_46126);

(statearr_46251_46385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (11))){
var inst_46104 = (state_46192[(7)]);
var inst_46108 = (inst_46104 == null);
var inst_46109 = cljs.core.not.call(null,inst_46108);
var state_46192__$1 = state_46192;
if(inst_46109){
var statearr_46252_46390 = state_46192__$1;
(statearr_46252_46390[(1)] = (13));

} else {
var statearr_46253_46391 = state_46192__$1;
(statearr_46253_46391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (9))){
var inst_46078 = (state_46192[(8)]);
var state_46192__$1 = state_46192;
var statearr_46254_46392 = state_46192__$1;
(statearr_46254_46392[(2)] = inst_46078);

(statearr_46254_46392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (5))){
var state_46192__$1 = state_46192;
var statearr_46255_46393 = state_46192__$1;
(statearr_46255_46393[(2)] = true);

(statearr_46255_46393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (14))){
var state_46192__$1 = state_46192;
var statearr_46256_46394 = state_46192__$1;
(statearr_46256_46394[(2)] = false);

(statearr_46256_46394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (26))){
var inst_46139 = (state_46192[(11)]);
var inst_46146 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46139);
var state_46192__$1 = state_46192;
var statearr_46257_46396 = state_46192__$1;
(statearr_46257_46396[(2)] = inst_46146);

(statearr_46257_46396[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (16))){
var state_46192__$1 = state_46192;
var statearr_46258_46397 = state_46192__$1;
(statearr_46258_46397[(2)] = true);

(statearr_46258_46397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (38))){
var inst_46170 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
var statearr_46259_46398 = state_46192__$1;
(statearr_46259_46398[(2)] = inst_46170);

(statearr_46259_46398[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (30))){
var inst_46131 = (state_46192[(13)]);
var inst_46130 = (state_46192[(9)]);
var inst_46139 = (state_46192[(11)]);
var inst_46157 = cljs.core.empty_QMARK_.call(null,inst_46130);
var inst_46158 = inst_46131.call(null,inst_46139);
var inst_46159 = cljs.core.not.call(null,inst_46158);
var inst_46160 = (inst_46157) && (inst_46159);
var state_46192__$1 = state_46192;
var statearr_46260_46403 = state_46192__$1;
(statearr_46260_46403[(2)] = inst_46160);

(statearr_46260_46403[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (10))){
var inst_46078 = (state_46192[(8)]);
var inst_46100 = (state_46192[(2)]);
var inst_46101 = cljs.core.get.call(null,inst_46100,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46102 = cljs.core.get.call(null,inst_46100,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46103 = cljs.core.get.call(null,inst_46100,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46104 = inst_46078;
var state_46192__$1 = (function (){var statearr_46261 = state_46192;
(statearr_46261[(7)] = inst_46104);

(statearr_46261[(16)] = inst_46103);

(statearr_46261[(17)] = inst_46102);

(statearr_46261[(18)] = inst_46101);

return statearr_46261;
})();
var statearr_46262_46408 = state_46192__$1;
(statearr_46262_46408[(2)] = null);

(statearr_46262_46408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (18))){
var inst_46121 = (state_46192[(2)]);
var state_46192__$1 = state_46192;
var statearr_46263_46409 = state_46192__$1;
(statearr_46263_46409[(2)] = inst_46121);

(statearr_46263_46409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (37))){
var state_46192__$1 = state_46192;
var statearr_46264_46416 = state_46192__$1;
(statearr_46264_46416[(2)] = null);

(statearr_46264_46416[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46193 === (8))){
var inst_46078 = (state_46192[(8)]);
var inst_46097 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46078);
var state_46192__$1 = state_46192;
var statearr_46267_46417 = state_46192__$1;
(statearr_46267_46417[(2)] = inst_46097);

(statearr_46267_46417[(1)] = (10));


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
});})(c__29750__auto___46302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29638__auto__,c__29750__auto___46302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29639__auto__ = null;
var cljs$core$async$mix_$_state_machine__29639__auto____0 = (function (){
var statearr_46273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46273[(0)] = cljs$core$async$mix_$_state_machine__29639__auto__);

(statearr_46273[(1)] = (1));

return statearr_46273;
});
var cljs$core$async$mix_$_state_machine__29639__auto____1 = (function (state_46192){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_46192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e46274){if((e46274 instanceof Object)){
var ex__29642__auto__ = e46274;
var statearr_46275_46418 = state_46192;
(statearr_46275_46418[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46419 = state_46192;
state_46192 = G__46419;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29639__auto__ = function(state_46192){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29639__auto____1.call(this,state_46192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29639__auto____0;
cljs$core$async$mix_$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29639__auto____1;
return cljs$core$async$mix_$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___46302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29752__auto__ = (function (){var statearr_46276 = f__29751__auto__.call(null);
(statearr_46276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___46302);

return statearr_46276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___46302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args46429 = [];
var len__26441__auto___46433 = arguments.length;
var i__26442__auto___46434 = (0);
while(true){
if((i__26442__auto___46434 < len__26441__auto___46433)){
args46429.push((arguments[i__26442__auto___46434]));

var G__46435 = (i__26442__auto___46434 + (1));
i__26442__auto___46434 = G__46435;
continue;
} else {
}
break;
}

var G__46431 = args46429.length;
switch (G__46431) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46429.length)].join('')));

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
var args46438 = [];
var len__26441__auto___46588 = arguments.length;
var i__26442__auto___46589 = (0);
while(true){
if((i__26442__auto___46589 < len__26441__auto___46588)){
args46438.push((arguments[i__26442__auto___46589]));

var G__46590 = (i__26442__auto___46589 + (1));
i__26442__auto___46589 = G__46590;
continue;
} else {
}
break;
}

var G__46440 = args46438.length;
switch (G__46440) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46438.length)].join('')));

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
return (function (p1__46437_SHARP_){
if(cljs.core.truth_(p1__46437_SHARP_.call(null,topic))){
return p1__46437_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46437_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25333__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46441 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46442){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46442 = meta46442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46443,meta46442__$1){
var self__ = this;
var _46443__$1 = this;
return (new cljs.core.async.t_cljs$core$async46441(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46442__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46443){
var self__ = this;
var _46443__$1 = this;
return self__.meta46442;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46441.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46441.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46442","meta46442",29478882,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46441";

cljs.core.async.t_cljs$core$async46441.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async46441");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46441 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46441(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46442){
return (new cljs.core.async.t_cljs$core$async46441(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46442));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46441(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29750__auto___46600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___46600,mults,ensure_mult,p){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___46600,mults,ensure_mult,p){
return (function (state_46515){
var state_val_46516 = (state_46515[(1)]);
if((state_val_46516 === (7))){
var inst_46511 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
var statearr_46517_46601 = state_46515__$1;
(statearr_46517_46601[(2)] = inst_46511);

(statearr_46517_46601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (20))){
var state_46515__$1 = state_46515;
var statearr_46518_46602 = state_46515__$1;
(statearr_46518_46602[(2)] = null);

(statearr_46518_46602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (1))){
var state_46515__$1 = state_46515;
var statearr_46519_46603 = state_46515__$1;
(statearr_46519_46603[(2)] = null);

(statearr_46519_46603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (24))){
var inst_46494 = (state_46515[(7)]);
var inst_46503 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46494);
var state_46515__$1 = state_46515;
var statearr_46520_46604 = state_46515__$1;
(statearr_46520_46604[(2)] = inst_46503);

(statearr_46520_46604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (4))){
var inst_46446 = (state_46515[(8)]);
var inst_46446__$1 = (state_46515[(2)]);
var inst_46447 = (inst_46446__$1 == null);
var state_46515__$1 = (function (){var statearr_46521 = state_46515;
(statearr_46521[(8)] = inst_46446__$1);

return statearr_46521;
})();
if(cljs.core.truth_(inst_46447)){
var statearr_46522_46606 = state_46515__$1;
(statearr_46522_46606[(1)] = (5));

} else {
var statearr_46523_46607 = state_46515__$1;
(statearr_46523_46607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (15))){
var inst_46488 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
var statearr_46531_46611 = state_46515__$1;
(statearr_46531_46611[(2)] = inst_46488);

(statearr_46531_46611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (21))){
var inst_46508 = (state_46515[(2)]);
var state_46515__$1 = (function (){var statearr_46535 = state_46515;
(statearr_46535[(9)] = inst_46508);

return statearr_46535;
})();
var statearr_46536_46615 = state_46515__$1;
(statearr_46536_46615[(2)] = null);

(statearr_46536_46615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (13))){
var inst_46470 = (state_46515[(10)]);
var inst_46472 = cljs.core.chunked_seq_QMARK_.call(null,inst_46470);
var state_46515__$1 = state_46515;
if(inst_46472){
var statearr_46537_46618 = state_46515__$1;
(statearr_46537_46618[(1)] = (16));

} else {
var statearr_46544_46619 = state_46515__$1;
(statearr_46544_46619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (22))){
var inst_46500 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
if(cljs.core.truth_(inst_46500)){
var statearr_46548_46620 = state_46515__$1;
(statearr_46548_46620[(1)] = (23));

} else {
var statearr_46549_46627 = state_46515__$1;
(statearr_46549_46627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (6))){
var inst_46494 = (state_46515[(7)]);
var inst_46446 = (state_46515[(8)]);
var inst_46496 = (state_46515[(11)]);
var inst_46494__$1 = topic_fn.call(null,inst_46446);
var inst_46495 = cljs.core.deref.call(null,mults);
var inst_46496__$1 = cljs.core.get.call(null,inst_46495,inst_46494__$1);
var state_46515__$1 = (function (){var statearr_46550 = state_46515;
(statearr_46550[(7)] = inst_46494__$1);

(statearr_46550[(11)] = inst_46496__$1);

return statearr_46550;
})();
if(cljs.core.truth_(inst_46496__$1)){
var statearr_46551_46628 = state_46515__$1;
(statearr_46551_46628[(1)] = (19));

} else {
var statearr_46552_46629 = state_46515__$1;
(statearr_46552_46629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (25))){
var inst_46505 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
var statearr_46553_46630 = state_46515__$1;
(statearr_46553_46630[(2)] = inst_46505);

(statearr_46553_46630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (17))){
var inst_46470 = (state_46515[(10)]);
var inst_46479 = cljs.core.first.call(null,inst_46470);
var inst_46480 = cljs.core.async.muxch_STAR_.call(null,inst_46479);
var inst_46481 = cljs.core.async.close_BANG_.call(null,inst_46480);
var inst_46482 = cljs.core.next.call(null,inst_46470);
var inst_46456 = inst_46482;
var inst_46457 = null;
var inst_46458 = (0);
var inst_46459 = (0);
var state_46515__$1 = (function (){var statearr_46554 = state_46515;
(statearr_46554[(12)] = inst_46456);

(statearr_46554[(13)] = inst_46458);

(statearr_46554[(14)] = inst_46459);

(statearr_46554[(15)] = inst_46457);

(statearr_46554[(16)] = inst_46481);

return statearr_46554;
})();
var statearr_46555_46633 = state_46515__$1;
(statearr_46555_46633[(2)] = null);

(statearr_46555_46633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (3))){
var inst_46513 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46515__$1,inst_46513);
} else {
if((state_val_46516 === (12))){
var inst_46490 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
var statearr_46556_46634 = state_46515__$1;
(statearr_46556_46634[(2)] = inst_46490);

(statearr_46556_46634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (2))){
var state_46515__$1 = state_46515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46515__$1,(4),ch);
} else {
if((state_val_46516 === (23))){
var state_46515__$1 = state_46515;
var statearr_46557_46635 = state_46515__$1;
(statearr_46557_46635[(2)] = null);

(statearr_46557_46635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (19))){
var inst_46446 = (state_46515[(8)]);
var inst_46496 = (state_46515[(11)]);
var inst_46498 = cljs.core.async.muxch_STAR_.call(null,inst_46496);
var state_46515__$1 = state_46515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46515__$1,(22),inst_46498,inst_46446);
} else {
if((state_val_46516 === (11))){
var inst_46456 = (state_46515[(12)]);
var inst_46470 = (state_46515[(10)]);
var inst_46470__$1 = cljs.core.seq.call(null,inst_46456);
var state_46515__$1 = (function (){var statearr_46558 = state_46515;
(statearr_46558[(10)] = inst_46470__$1);

return statearr_46558;
})();
if(inst_46470__$1){
var statearr_46559_46636 = state_46515__$1;
(statearr_46559_46636[(1)] = (13));

} else {
var statearr_46560_46637 = state_46515__$1;
(statearr_46560_46637[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (9))){
var inst_46492 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
var statearr_46561_46638 = state_46515__$1;
(statearr_46561_46638[(2)] = inst_46492);

(statearr_46561_46638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (5))){
var inst_46453 = cljs.core.deref.call(null,mults);
var inst_46454 = cljs.core.vals.call(null,inst_46453);
var inst_46455 = cljs.core.seq.call(null,inst_46454);
var inst_46456 = inst_46455;
var inst_46457 = null;
var inst_46458 = (0);
var inst_46459 = (0);
var state_46515__$1 = (function (){var statearr_46562 = state_46515;
(statearr_46562[(12)] = inst_46456);

(statearr_46562[(13)] = inst_46458);

(statearr_46562[(14)] = inst_46459);

(statearr_46562[(15)] = inst_46457);

return statearr_46562;
})();
var statearr_46563_46641 = state_46515__$1;
(statearr_46563_46641[(2)] = null);

(statearr_46563_46641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (14))){
var state_46515__$1 = state_46515;
var statearr_46567_46643 = state_46515__$1;
(statearr_46567_46643[(2)] = null);

(statearr_46567_46643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (16))){
var inst_46470 = (state_46515[(10)]);
var inst_46474 = cljs.core.chunk_first.call(null,inst_46470);
var inst_46475 = cljs.core.chunk_rest.call(null,inst_46470);
var inst_46476 = cljs.core.count.call(null,inst_46474);
var inst_46456 = inst_46475;
var inst_46457 = inst_46474;
var inst_46458 = inst_46476;
var inst_46459 = (0);
var state_46515__$1 = (function (){var statearr_46571 = state_46515;
(statearr_46571[(12)] = inst_46456);

(statearr_46571[(13)] = inst_46458);

(statearr_46571[(14)] = inst_46459);

(statearr_46571[(15)] = inst_46457);

return statearr_46571;
})();
var statearr_46572_46644 = state_46515__$1;
(statearr_46572_46644[(2)] = null);

(statearr_46572_46644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (10))){
var inst_46456 = (state_46515[(12)]);
var inst_46458 = (state_46515[(13)]);
var inst_46459 = (state_46515[(14)]);
var inst_46457 = (state_46515[(15)]);
var inst_46464 = cljs.core._nth.call(null,inst_46457,inst_46459);
var inst_46465 = cljs.core.async.muxch_STAR_.call(null,inst_46464);
var inst_46466 = cljs.core.async.close_BANG_.call(null,inst_46465);
var inst_46467 = (inst_46459 + (1));
var tmp46564 = inst_46456;
var tmp46565 = inst_46458;
var tmp46566 = inst_46457;
var inst_46456__$1 = tmp46564;
var inst_46457__$1 = tmp46566;
var inst_46458__$1 = tmp46565;
var inst_46459__$1 = inst_46467;
var state_46515__$1 = (function (){var statearr_46576 = state_46515;
(statearr_46576[(12)] = inst_46456__$1);

(statearr_46576[(13)] = inst_46458__$1);

(statearr_46576[(14)] = inst_46459__$1);

(statearr_46576[(15)] = inst_46457__$1);

(statearr_46576[(17)] = inst_46466);

return statearr_46576;
})();
var statearr_46577_46652 = state_46515__$1;
(statearr_46577_46652[(2)] = null);

(statearr_46577_46652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (18))){
var inst_46485 = (state_46515[(2)]);
var state_46515__$1 = state_46515;
var statearr_46578_46653 = state_46515__$1;
(statearr_46578_46653[(2)] = inst_46485);

(statearr_46578_46653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46516 === (8))){
var inst_46458 = (state_46515[(13)]);
var inst_46459 = (state_46515[(14)]);
var inst_46461 = (inst_46459 < inst_46458);
var inst_46462 = inst_46461;
var state_46515__$1 = state_46515;
if(cljs.core.truth_(inst_46462)){
var statearr_46579_46657 = state_46515__$1;
(statearr_46579_46657[(1)] = (10));

} else {
var statearr_46580_46658 = state_46515__$1;
(statearr_46580_46658[(1)] = (11));

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
});})(c__29750__auto___46600,mults,ensure_mult,p))
;
return ((function (switch__29638__auto__,c__29750__auto___46600,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_46584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46584[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_46584[(1)] = (1));

return statearr_46584;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_46515){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_46515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e46585){if((e46585 instanceof Object)){
var ex__29642__auto__ = e46585;
var statearr_46586_46663 = state_46515;
(statearr_46586_46663[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46664 = state_46515;
state_46515 = G__46664;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_46515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_46515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___46600,mults,ensure_mult,p))
})();
var state__29752__auto__ = (function (){var statearr_46587 = f__29751__auto__.call(null);
(statearr_46587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___46600);

return statearr_46587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___46600,mults,ensure_mult,p))
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
var args46665 = [];
var len__26441__auto___46668 = arguments.length;
var i__26442__auto___46669 = (0);
while(true){
if((i__26442__auto___46669 < len__26441__auto___46668)){
args46665.push((arguments[i__26442__auto___46669]));

var G__46670 = (i__26442__auto___46669 + (1));
i__26442__auto___46669 = G__46670;
continue;
} else {
}
break;
}

var G__46667 = args46665.length;
switch (G__46667) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46665.length)].join('')));

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
var args46672 = [];
var len__26441__auto___46678 = arguments.length;
var i__26442__auto___46679 = (0);
while(true){
if((i__26442__auto___46679 < len__26441__auto___46678)){
args46672.push((arguments[i__26442__auto___46679]));

var G__46680 = (i__26442__auto___46679 + (1));
i__26442__auto___46679 = G__46680;
continue;
} else {
}
break;
}

var G__46677 = args46672.length;
switch (G__46677) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46672.length)].join('')));

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
var args46685 = [];
var len__26441__auto___46775 = arguments.length;
var i__26442__auto___46776 = (0);
while(true){
if((i__26442__auto___46776 < len__26441__auto___46775)){
args46685.push((arguments[i__26442__auto___46776]));

var G__46777 = (i__26442__auto___46776 + (1));
i__26442__auto___46776 = G__46777;
continue;
} else {
}
break;
}

var G__46687 = args46685.length;
switch (G__46687) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46685.length)].join('')));

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
var c__29750__auto___46787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___46787,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___46787,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46733){
var state_val_46734 = (state_46733[(1)]);
if((state_val_46734 === (7))){
var state_46733__$1 = state_46733;
var statearr_46735_46797 = state_46733__$1;
(statearr_46735_46797[(2)] = null);

(statearr_46735_46797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (1))){
var state_46733__$1 = state_46733;
var statearr_46736_46799 = state_46733__$1;
(statearr_46736_46799[(2)] = null);

(statearr_46736_46799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (4))){
var inst_46697 = (state_46733[(7)]);
var inst_46699 = (inst_46697 < cnt);
var state_46733__$1 = state_46733;
if(cljs.core.truth_(inst_46699)){
var statearr_46737_46801 = state_46733__$1;
(statearr_46737_46801[(1)] = (6));

} else {
var statearr_46738_46802 = state_46733__$1;
(statearr_46738_46802[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (15))){
var inst_46729 = (state_46733[(2)]);
var state_46733__$1 = state_46733;
var statearr_46739_46803 = state_46733__$1;
(statearr_46739_46803[(2)] = inst_46729);

(statearr_46739_46803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (13))){
var inst_46722 = cljs.core.async.close_BANG_.call(null,out);
var state_46733__$1 = state_46733;
var statearr_46740_46807 = state_46733__$1;
(statearr_46740_46807[(2)] = inst_46722);

(statearr_46740_46807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (6))){
var state_46733__$1 = state_46733;
var statearr_46741_46813 = state_46733__$1;
(statearr_46741_46813[(2)] = null);

(statearr_46741_46813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (3))){
var inst_46731 = (state_46733[(2)]);
var state_46733__$1 = state_46733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46733__$1,inst_46731);
} else {
if((state_val_46734 === (12))){
var inst_46719 = (state_46733[(8)]);
var inst_46719__$1 = (state_46733[(2)]);
var inst_46720 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46719__$1);
var state_46733__$1 = (function (){var statearr_46745 = state_46733;
(statearr_46745[(8)] = inst_46719__$1);

return statearr_46745;
})();
if(cljs.core.truth_(inst_46720)){
var statearr_46746_46823 = state_46733__$1;
(statearr_46746_46823[(1)] = (13));

} else {
var statearr_46747_46826 = state_46733__$1;
(statearr_46747_46826[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (2))){
var inst_46696 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46697 = (0);
var state_46733__$1 = (function (){var statearr_46748 = state_46733;
(statearr_46748[(9)] = inst_46696);

(statearr_46748[(7)] = inst_46697);

return statearr_46748;
})();
var statearr_46749_46827 = state_46733__$1;
(statearr_46749_46827[(2)] = null);

(statearr_46749_46827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (11))){
var inst_46697 = (state_46733[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46733,(10),Object,null,(9));
var inst_46706 = chs__$1.call(null,inst_46697);
var inst_46707 = done.call(null,inst_46697);
var inst_46708 = cljs.core.async.take_BANG_.call(null,inst_46706,inst_46707);
var state_46733__$1 = state_46733;
var statearr_46750_46834 = state_46733__$1;
(statearr_46750_46834[(2)] = inst_46708);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46733__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (9))){
var inst_46697 = (state_46733[(7)]);
var inst_46710 = (state_46733[(2)]);
var inst_46711 = (inst_46697 + (1));
var inst_46697__$1 = inst_46711;
var state_46733__$1 = (function (){var statearr_46751 = state_46733;
(statearr_46751[(7)] = inst_46697__$1);

(statearr_46751[(10)] = inst_46710);

return statearr_46751;
})();
var statearr_46752_46835 = state_46733__$1;
(statearr_46752_46835[(2)] = null);

(statearr_46752_46835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (5))){
var inst_46717 = (state_46733[(2)]);
var state_46733__$1 = (function (){var statearr_46753 = state_46733;
(statearr_46753[(11)] = inst_46717);

return statearr_46753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46733__$1,(12),dchan);
} else {
if((state_val_46734 === (14))){
var inst_46719 = (state_46733[(8)]);
var inst_46724 = cljs.core.apply.call(null,f,inst_46719);
var state_46733__$1 = state_46733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46733__$1,(16),out,inst_46724);
} else {
if((state_val_46734 === (16))){
var inst_46726 = (state_46733[(2)]);
var state_46733__$1 = (function (){var statearr_46754 = state_46733;
(statearr_46754[(12)] = inst_46726);

return statearr_46754;
})();
var statearr_46755_46851 = state_46733__$1;
(statearr_46755_46851[(2)] = null);

(statearr_46755_46851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (10))){
var inst_46701 = (state_46733[(2)]);
var inst_46702 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46733__$1 = (function (){var statearr_46756 = state_46733;
(statearr_46756[(13)] = inst_46701);

return statearr_46756;
})();
var statearr_46757_46852 = state_46733__$1;
(statearr_46757_46852[(2)] = inst_46702);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46733__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46734 === (8))){
var inst_46715 = (state_46733[(2)]);
var state_46733__$1 = state_46733;
var statearr_46759_46853 = state_46733__$1;
(statearr_46759_46853[(2)] = inst_46715);

(statearr_46759_46853[(1)] = (5));


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
});})(c__29750__auto___46787,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29638__auto__,c__29750__auto___46787,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_46768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46768[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_46768[(1)] = (1));

return statearr_46768;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_46733){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_46733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e46769){if((e46769 instanceof Object)){
var ex__29642__auto__ = e46769;
var statearr_46770_46854 = state_46733;
(statearr_46770_46854[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46855 = state_46733;
state_46733 = G__46855;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_46733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_46733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___46787,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29752__auto__ = (function (){var statearr_46771 = f__29751__auto__.call(null);
(statearr_46771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___46787);

return statearr_46771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___46787,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args46857 = [];
var len__26441__auto___46926 = arguments.length;
var i__26442__auto___46927 = (0);
while(true){
if((i__26442__auto___46927 < len__26441__auto___46926)){
args46857.push((arguments[i__26442__auto___46927]));

var G__46928 = (i__26442__auto___46927 + (1));
i__26442__auto___46927 = G__46928;
continue;
} else {
}
break;
}

var G__46859 = args46857.length;
switch (G__46859) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46857.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___46937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___46937,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___46937,out){
return (function (state_46897){
var state_val_46898 = (state_46897[(1)]);
if((state_val_46898 === (7))){
var inst_46877 = (state_46897[(7)]);
var inst_46873 = (state_46897[(8)]);
var inst_46873__$1 = (state_46897[(2)]);
var inst_46877__$1 = cljs.core.nth.call(null,inst_46873__$1,(0),null);
var inst_46878 = cljs.core.nth.call(null,inst_46873__$1,(1),null);
var inst_46879 = (inst_46877__$1 == null);
var state_46897__$1 = (function (){var statearr_46899 = state_46897;
(statearr_46899[(9)] = inst_46878);

(statearr_46899[(7)] = inst_46877__$1);

(statearr_46899[(8)] = inst_46873__$1);

return statearr_46899;
})();
if(cljs.core.truth_(inst_46879)){
var statearr_46900_46945 = state_46897__$1;
(statearr_46900_46945[(1)] = (8));

} else {
var statearr_46901_46946 = state_46897__$1;
(statearr_46901_46946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46898 === (1))){
var inst_46863 = cljs.core.vec.call(null,chs);
var inst_46864 = inst_46863;
var state_46897__$1 = (function (){var statearr_46902 = state_46897;
(statearr_46902[(10)] = inst_46864);

return statearr_46902;
})();
var statearr_46903_46947 = state_46897__$1;
(statearr_46903_46947[(2)] = null);

(statearr_46903_46947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46898 === (4))){
var inst_46864 = (state_46897[(10)]);
var state_46897__$1 = state_46897;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46897__$1,(7),inst_46864);
} else {
if((state_val_46898 === (6))){
var inst_46893 = (state_46897[(2)]);
var state_46897__$1 = state_46897;
var statearr_46904_46948 = state_46897__$1;
(statearr_46904_46948[(2)] = inst_46893);

(statearr_46904_46948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46898 === (3))){
var inst_46895 = (state_46897[(2)]);
var state_46897__$1 = state_46897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46897__$1,inst_46895);
} else {
if((state_val_46898 === (2))){
var inst_46864 = (state_46897[(10)]);
var inst_46866 = cljs.core.count.call(null,inst_46864);
var inst_46867 = (inst_46866 > (0));
var state_46897__$1 = state_46897;
if(cljs.core.truth_(inst_46867)){
var statearr_46906_46949 = state_46897__$1;
(statearr_46906_46949[(1)] = (4));

} else {
var statearr_46907_46950 = state_46897__$1;
(statearr_46907_46950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46898 === (11))){
var inst_46864 = (state_46897[(10)]);
var inst_46886 = (state_46897[(2)]);
var tmp46905 = inst_46864;
var inst_46864__$1 = tmp46905;
var state_46897__$1 = (function (){var statearr_46908 = state_46897;
(statearr_46908[(10)] = inst_46864__$1);

(statearr_46908[(11)] = inst_46886);

return statearr_46908;
})();
var statearr_46909_46951 = state_46897__$1;
(statearr_46909_46951[(2)] = null);

(statearr_46909_46951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46898 === (9))){
var inst_46877 = (state_46897[(7)]);
var state_46897__$1 = state_46897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46897__$1,(11),out,inst_46877);
} else {
if((state_val_46898 === (5))){
var inst_46891 = cljs.core.async.close_BANG_.call(null,out);
var state_46897__$1 = state_46897;
var statearr_46910_46955 = state_46897__$1;
(statearr_46910_46955[(2)] = inst_46891);

(statearr_46910_46955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46898 === (10))){
var inst_46889 = (state_46897[(2)]);
var state_46897__$1 = state_46897;
var statearr_46911_46961 = state_46897__$1;
(statearr_46911_46961[(2)] = inst_46889);

(statearr_46911_46961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46898 === (8))){
var inst_46864 = (state_46897[(10)]);
var inst_46878 = (state_46897[(9)]);
var inst_46877 = (state_46897[(7)]);
var inst_46873 = (state_46897[(8)]);
var inst_46881 = (function (){var cs = inst_46864;
var vec__46869 = inst_46873;
var v = inst_46877;
var c = inst_46878;
return ((function (cs,vec__46869,v,c,inst_46864,inst_46878,inst_46877,inst_46873,state_val_46898,c__29750__auto___46937,out){
return (function (p1__46856_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46856_SHARP_);
});
;})(cs,vec__46869,v,c,inst_46864,inst_46878,inst_46877,inst_46873,state_val_46898,c__29750__auto___46937,out))
})();
var inst_46882 = cljs.core.filterv.call(null,inst_46881,inst_46864);
var inst_46864__$1 = inst_46882;
var state_46897__$1 = (function (){var statearr_46912 = state_46897;
(statearr_46912[(10)] = inst_46864__$1);

return statearr_46912;
})();
var statearr_46913_46962 = state_46897__$1;
(statearr_46913_46962[(2)] = null);

(statearr_46913_46962[(1)] = (2));


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
});})(c__29750__auto___46937,out))
;
return ((function (switch__29638__auto__,c__29750__auto___46937,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_46917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46917[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_46917[(1)] = (1));

return statearr_46917;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_46897){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_46897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e46918){if((e46918 instanceof Object)){
var ex__29642__auto__ = e46918;
var statearr_46919_46963 = state_46897;
(statearr_46919_46963[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46964 = state_46897;
state_46897 = G__46964;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_46897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_46897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___46937,out))
})();
var state__29752__auto__ = (function (){var statearr_46922 = f__29751__auto__.call(null);
(statearr_46922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___46937);

return statearr_46922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___46937,out))
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
var args46965 = [];
var len__26441__auto___47043 = arguments.length;
var i__26442__auto___47044 = (0);
while(true){
if((i__26442__auto___47044 < len__26441__auto___47043)){
args46965.push((arguments[i__26442__auto___47044]));

var G__47045 = (i__26442__auto___47044 + (1));
i__26442__auto___47044 = G__47045;
continue;
} else {
}
break;
}

var G__46979 = args46965.length;
switch (G__46979) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46965.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___47049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___47049,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___47049,out){
return (function (state_47003){
var state_val_47004 = (state_47003[(1)]);
if((state_val_47004 === (7))){
var inst_46985 = (state_47003[(7)]);
var inst_46985__$1 = (state_47003[(2)]);
var inst_46986 = (inst_46985__$1 == null);
var inst_46987 = cljs.core.not.call(null,inst_46986);
var state_47003__$1 = (function (){var statearr_47005 = state_47003;
(statearr_47005[(7)] = inst_46985__$1);

return statearr_47005;
})();
if(inst_46987){
var statearr_47006_47053 = state_47003__$1;
(statearr_47006_47053[(1)] = (8));

} else {
var statearr_47007_47054 = state_47003__$1;
(statearr_47007_47054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (1))){
var inst_46980 = (0);
var state_47003__$1 = (function (){var statearr_47008 = state_47003;
(statearr_47008[(8)] = inst_46980);

return statearr_47008;
})();
var statearr_47021_47055 = state_47003__$1;
(statearr_47021_47055[(2)] = null);

(statearr_47021_47055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (4))){
var state_47003__$1 = state_47003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47003__$1,(7),ch);
} else {
if((state_val_47004 === (6))){
var inst_46998 = (state_47003[(2)]);
var state_47003__$1 = state_47003;
var statearr_47024_47061 = state_47003__$1;
(statearr_47024_47061[(2)] = inst_46998);

(statearr_47024_47061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (3))){
var inst_47000 = (state_47003[(2)]);
var inst_47001 = cljs.core.async.close_BANG_.call(null,out);
var state_47003__$1 = (function (){var statearr_47025 = state_47003;
(statearr_47025[(9)] = inst_47000);

return statearr_47025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47003__$1,inst_47001);
} else {
if((state_val_47004 === (2))){
var inst_46980 = (state_47003[(8)]);
var inst_46982 = (inst_46980 < n);
var state_47003__$1 = state_47003;
if(cljs.core.truth_(inst_46982)){
var statearr_47026_47063 = state_47003__$1;
(statearr_47026_47063[(1)] = (4));

} else {
var statearr_47027_47064 = state_47003__$1;
(statearr_47027_47064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (11))){
var inst_46980 = (state_47003[(8)]);
var inst_46990 = (state_47003[(2)]);
var inst_46991 = (inst_46980 + (1));
var inst_46980__$1 = inst_46991;
var state_47003__$1 = (function (){var statearr_47028 = state_47003;
(statearr_47028[(10)] = inst_46990);

(statearr_47028[(8)] = inst_46980__$1);

return statearr_47028;
})();
var statearr_47029_47066 = state_47003__$1;
(statearr_47029_47066[(2)] = null);

(statearr_47029_47066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (9))){
var state_47003__$1 = state_47003;
var statearr_47030_47070 = state_47003__$1;
(statearr_47030_47070[(2)] = null);

(statearr_47030_47070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (5))){
var state_47003__$1 = state_47003;
var statearr_47031_47085 = state_47003__$1;
(statearr_47031_47085[(2)] = null);

(statearr_47031_47085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (10))){
var inst_46995 = (state_47003[(2)]);
var state_47003__$1 = state_47003;
var statearr_47032_47086 = state_47003__$1;
(statearr_47032_47086[(2)] = inst_46995);

(statearr_47032_47086[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (8))){
var inst_46985 = (state_47003[(7)]);
var state_47003__$1 = state_47003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47003__$1,(11),out,inst_46985);
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
});})(c__29750__auto___47049,out))
;
return ((function (switch__29638__auto__,c__29750__auto___47049,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_47039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47039[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_47039[(1)] = (1));

return statearr_47039;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_47003){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_47003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e47040){if((e47040 instanceof Object)){
var ex__29642__auto__ = e47040;
var statearr_47041_47087 = state_47003;
(statearr_47041_47087[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47101 = state_47003;
state_47003 = G__47101;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_47003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_47003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___47049,out))
})();
var state__29752__auto__ = (function (){var statearr_47042 = f__29751__auto__.call(null);
(statearr_47042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___47049);

return statearr_47042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___47049,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47120 = (function (f,ch,meta47121){
this.f = f;
this.ch = ch;
this.meta47121 = meta47121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47122,meta47121__$1){
var self__ = this;
var _47122__$1 = this;
return (new cljs.core.async.t_cljs$core$async47120(self__.f,self__.ch,meta47121__$1));
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47122){
var self__ = this;
var _47122__$1 = this;
return self__.meta47121;
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async47143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47143 = (function (f,ch,meta47121,_,fn1,meta47144){
this.f = f;
this.ch = ch;
this.meta47121 = meta47121;
this._ = _;
this.fn1 = fn1;
this.meta47144 = meta47144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47145,meta47144__$1){
var self__ = this;
var _47145__$1 = this;
return (new cljs.core.async.t_cljs$core$async47143(self__.f,self__.ch,self__.meta47121,self__._,self__.fn1,meta47144__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async47143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47145){
var self__ = this;
var _47145__$1 = this;
return self__.meta47144;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47143.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47143.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47143.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async47143.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__47105_SHARP_){
return f1.call(null,(((p1__47105_SHARP_ == null))?null:self__.f.call(null,p1__47105_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async47143.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47121","meta47121",1875214580,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47120","cljs.core.async/t_cljs$core$async47120",382335823,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47144","meta47144",-1272165388,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async47143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47143";

cljs.core.async.t_cljs$core$async47143.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async47143");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async47143 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47143(f__$1,ch__$1,meta47121__$1,___$2,fn1__$1,meta47144){
return (new cljs.core.async.t_cljs$core$async47143(f__$1,ch__$1,meta47121__$1,___$2,fn1__$1,meta47144));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async47143(self__.f,self__.ch,self__.meta47121,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async47120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47121","meta47121",1875214580,null)], null);
});

cljs.core.async.t_cljs$core$async47120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47120";

cljs.core.async.t_cljs$core$async47120.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async47120");
});

cljs.core.async.__GT_t_cljs$core$async47120 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47120(f__$1,ch__$1,meta47121){
return (new cljs.core.async.t_cljs$core$async47120(f__$1,ch__$1,meta47121));
});

}

return (new cljs.core.async.t_cljs$core$async47120(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async47171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47171 = (function (f,ch,meta47172){
this.f = f;
this.ch = ch;
this.meta47172 = meta47172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47173,meta47172__$1){
var self__ = this;
var _47173__$1 = this;
return (new cljs.core.async.t_cljs$core$async47171(self__.f,self__.ch,meta47172__$1));
});

cljs.core.async.t_cljs$core$async47171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47173){
var self__ = this;
var _47173__$1 = this;
return self__.meta47172;
});

cljs.core.async.t_cljs$core$async47171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async47171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47172","meta47172",811389588,null)], null);
});

cljs.core.async.t_cljs$core$async47171.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47171";

cljs.core.async.t_cljs$core$async47171.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async47171");
});

cljs.core.async.__GT_t_cljs$core$async47171 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47171(f__$1,ch__$1,meta47172){
return (new cljs.core.async.t_cljs$core$async47171(f__$1,ch__$1,meta47172));
});

}

return (new cljs.core.async.t_cljs$core$async47171(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async47212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47212 = (function (p,ch,meta47213){
this.p = p;
this.ch = ch;
this.meta47213 = meta47213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47214,meta47213__$1){
var self__ = this;
var _47214__$1 = this;
return (new cljs.core.async.t_cljs$core$async47212(self__.p,self__.ch,meta47213__$1));
});

cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47214){
var self__ = this;
var _47214__$1 = this;
return self__.meta47213;
});

cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47212.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async47212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47213","meta47213",-755078262,null)], null);
});

cljs.core.async.t_cljs$core$async47212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47212";

cljs.core.async.t_cljs$core$async47212.cljs$lang$ctorPrWriter = (function (this__25939__auto__,writer__25940__auto__,opt__25941__auto__){
return cljs.core._write.call(null,writer__25940__auto__,"cljs.core.async/t_cljs$core$async47212");
});

cljs.core.async.__GT_t_cljs$core$async47212 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47212(p__$1,ch__$1,meta47213){
return (new cljs.core.async.t_cljs$core$async47212(p__$1,ch__$1,meta47213));
});

}

return (new cljs.core.async.t_cljs$core$async47212(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args47251 = [];
var len__26441__auto___47322 = arguments.length;
var i__26442__auto___47323 = (0);
while(true){
if((i__26442__auto___47323 < len__26441__auto___47322)){
args47251.push((arguments[i__26442__auto___47323]));

var G__47324 = (i__26442__auto___47323 + (1));
i__26442__auto___47323 = G__47324;
continue;
} else {
}
break;
}

var G__47260 = args47251.length;
switch (G__47260) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47251.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___47326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___47326,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___47326,out){
return (function (state_47285){
var state_val_47286 = (state_47285[(1)]);
if((state_val_47286 === (7))){
var inst_47281 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47287_47327 = state_47285__$1;
(statearr_47287_47327[(2)] = inst_47281);

(statearr_47287_47327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (1))){
var state_47285__$1 = state_47285;
var statearr_47294_47332 = state_47285__$1;
(statearr_47294_47332[(2)] = null);

(statearr_47294_47332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (4))){
var inst_47263 = (state_47285[(7)]);
var inst_47263__$1 = (state_47285[(2)]);
var inst_47264 = (inst_47263__$1 == null);
var state_47285__$1 = (function (){var statearr_47299 = state_47285;
(statearr_47299[(7)] = inst_47263__$1);

return statearr_47299;
})();
if(cljs.core.truth_(inst_47264)){
var statearr_47300_47343 = state_47285__$1;
(statearr_47300_47343[(1)] = (5));

} else {
var statearr_47301_47345 = state_47285__$1;
(statearr_47301_47345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (6))){
var inst_47263 = (state_47285[(7)]);
var inst_47272 = p.call(null,inst_47263);
var state_47285__$1 = state_47285;
if(cljs.core.truth_(inst_47272)){
var statearr_47302_47357 = state_47285__$1;
(statearr_47302_47357[(1)] = (8));

} else {
var statearr_47303_47362 = state_47285__$1;
(statearr_47303_47362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (3))){
var inst_47283 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47285__$1,inst_47283);
} else {
if((state_val_47286 === (2))){
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47285__$1,(4),ch);
} else {
if((state_val_47286 === (11))){
var inst_47275 = (state_47285[(2)]);
var state_47285__$1 = state_47285;
var statearr_47304_47370 = state_47285__$1;
(statearr_47304_47370[(2)] = inst_47275);

(statearr_47304_47370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (9))){
var state_47285__$1 = state_47285;
var statearr_47305_47371 = state_47285__$1;
(statearr_47305_47371[(2)] = null);

(statearr_47305_47371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (5))){
var inst_47270 = cljs.core.async.close_BANG_.call(null,out);
var state_47285__$1 = state_47285;
var statearr_47306_47372 = state_47285__$1;
(statearr_47306_47372[(2)] = inst_47270);

(statearr_47306_47372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (10))){
var inst_47278 = (state_47285[(2)]);
var state_47285__$1 = (function (){var statearr_47307 = state_47285;
(statearr_47307[(8)] = inst_47278);

return statearr_47307;
})();
var statearr_47314_47373 = state_47285__$1;
(statearr_47314_47373[(2)] = null);

(statearr_47314_47373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47286 === (8))){
var inst_47263 = (state_47285[(7)]);
var state_47285__$1 = state_47285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47285__$1,(11),out,inst_47263);
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
});})(c__29750__auto___47326,out))
;
return ((function (switch__29638__auto__,c__29750__auto___47326,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_47318 = [null,null,null,null,null,null,null,null,null];
(statearr_47318[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_47318[(1)] = (1));

return statearr_47318;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_47285){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_47285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e47319){if((e47319 instanceof Object)){
var ex__29642__auto__ = e47319;
var statearr_47320_47374 = state_47285;
(statearr_47320_47374[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47375 = state_47285;
state_47285 = G__47375;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_47285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_47285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___47326,out))
})();
var state__29752__auto__ = (function (){var statearr_47321 = f__29751__auto__.call(null);
(statearr_47321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___47326);

return statearr_47321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___47326,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args47382 = [];
var len__26441__auto___47391 = arguments.length;
var i__26442__auto___47392 = (0);
while(true){
if((i__26442__auto___47392 < len__26441__auto___47391)){
args47382.push((arguments[i__26442__auto___47392]));

var G__47393 = (i__26442__auto___47392 + (1));
i__26442__auto___47392 = G__47393;
continue;
} else {
}
break;
}

var G__47387 = args47382.length;
switch (G__47387) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47382.length)].join('')));

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
return (function (state_47589){
var state_val_47590 = (state_47589[(1)]);
if((state_val_47590 === (7))){
var inst_47585 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
var statearr_47591_47655 = state_47589__$1;
(statearr_47591_47655[(2)] = inst_47585);

(statearr_47591_47655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (20))){
var inst_47555 = (state_47589[(7)]);
var inst_47566 = (state_47589[(2)]);
var inst_47567 = cljs.core.next.call(null,inst_47555);
var inst_47539 = inst_47567;
var inst_47540 = null;
var inst_47541 = (0);
var inst_47542 = (0);
var state_47589__$1 = (function (){var statearr_47592 = state_47589;
(statearr_47592[(8)] = inst_47542);

(statearr_47592[(9)] = inst_47540);

(statearr_47592[(10)] = inst_47539);

(statearr_47592[(11)] = inst_47541);

(statearr_47592[(12)] = inst_47566);

return statearr_47592;
})();
var statearr_47593_47668 = state_47589__$1;
(statearr_47593_47668[(2)] = null);

(statearr_47593_47668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (1))){
var state_47589__$1 = state_47589;
var statearr_47594_47669 = state_47589__$1;
(statearr_47594_47669[(2)] = null);

(statearr_47594_47669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (4))){
var inst_47528 = (state_47589[(13)]);
var inst_47528__$1 = (state_47589[(2)]);
var inst_47529 = (inst_47528__$1 == null);
var state_47589__$1 = (function (){var statearr_47595 = state_47589;
(statearr_47595[(13)] = inst_47528__$1);

return statearr_47595;
})();
if(cljs.core.truth_(inst_47529)){
var statearr_47596_47670 = state_47589__$1;
(statearr_47596_47670[(1)] = (5));

} else {
var statearr_47600_47671 = state_47589__$1;
(statearr_47600_47671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (15))){
var state_47589__$1 = state_47589;
var statearr_47605_47672 = state_47589__$1;
(statearr_47605_47672[(2)] = null);

(statearr_47605_47672[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (21))){
var state_47589__$1 = state_47589;
var statearr_47606_47673 = state_47589__$1;
(statearr_47606_47673[(2)] = null);

(statearr_47606_47673[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (13))){
var inst_47542 = (state_47589[(8)]);
var inst_47540 = (state_47589[(9)]);
var inst_47539 = (state_47589[(10)]);
var inst_47541 = (state_47589[(11)]);
var inst_47549 = (state_47589[(2)]);
var inst_47552 = (inst_47542 + (1));
var tmp47602 = inst_47540;
var tmp47603 = inst_47539;
var tmp47604 = inst_47541;
var inst_47539__$1 = tmp47603;
var inst_47540__$1 = tmp47602;
var inst_47541__$1 = tmp47604;
var inst_47542__$1 = inst_47552;
var state_47589__$1 = (function (){var statearr_47610 = state_47589;
(statearr_47610[(8)] = inst_47542__$1);

(statearr_47610[(9)] = inst_47540__$1);

(statearr_47610[(10)] = inst_47539__$1);

(statearr_47610[(14)] = inst_47549);

(statearr_47610[(11)] = inst_47541__$1);

return statearr_47610;
})();
var statearr_47612_47674 = state_47589__$1;
(statearr_47612_47674[(2)] = null);

(statearr_47612_47674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (22))){
var state_47589__$1 = state_47589;
var statearr_47613_47675 = state_47589__$1;
(statearr_47613_47675[(2)] = null);

(statearr_47613_47675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (6))){
var inst_47528 = (state_47589[(13)]);
var inst_47537 = f.call(null,inst_47528);
var inst_47538 = cljs.core.seq.call(null,inst_47537);
var inst_47539 = inst_47538;
var inst_47540 = null;
var inst_47541 = (0);
var inst_47542 = (0);
var state_47589__$1 = (function (){var statearr_47614 = state_47589;
(statearr_47614[(8)] = inst_47542);

(statearr_47614[(9)] = inst_47540);

(statearr_47614[(10)] = inst_47539);

(statearr_47614[(11)] = inst_47541);

return statearr_47614;
})();
var statearr_47615_47676 = state_47589__$1;
(statearr_47615_47676[(2)] = null);

(statearr_47615_47676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (17))){
var inst_47555 = (state_47589[(7)]);
var inst_47559 = cljs.core.chunk_first.call(null,inst_47555);
var inst_47560 = cljs.core.chunk_rest.call(null,inst_47555);
var inst_47561 = cljs.core.count.call(null,inst_47559);
var inst_47539 = inst_47560;
var inst_47540 = inst_47559;
var inst_47541 = inst_47561;
var inst_47542 = (0);
var state_47589__$1 = (function (){var statearr_47616 = state_47589;
(statearr_47616[(8)] = inst_47542);

(statearr_47616[(9)] = inst_47540);

(statearr_47616[(10)] = inst_47539);

(statearr_47616[(11)] = inst_47541);

return statearr_47616;
})();
var statearr_47617_47677 = state_47589__$1;
(statearr_47617_47677[(2)] = null);

(statearr_47617_47677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (3))){
var inst_47587 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47589__$1,inst_47587);
} else {
if((state_val_47590 === (12))){
var inst_47575 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
var statearr_47618_47682 = state_47589__$1;
(statearr_47618_47682[(2)] = inst_47575);

(statearr_47618_47682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (2))){
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47589__$1,(4),in$);
} else {
if((state_val_47590 === (23))){
var inst_47583 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
var statearr_47619_47683 = state_47589__$1;
(statearr_47619_47683[(2)] = inst_47583);

(statearr_47619_47683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (19))){
var inst_47570 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
var statearr_47620_47684 = state_47589__$1;
(statearr_47620_47684[(2)] = inst_47570);

(statearr_47620_47684[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (11))){
var inst_47555 = (state_47589[(7)]);
var inst_47539 = (state_47589[(10)]);
var inst_47555__$1 = cljs.core.seq.call(null,inst_47539);
var state_47589__$1 = (function (){var statearr_47621 = state_47589;
(statearr_47621[(7)] = inst_47555__$1);

return statearr_47621;
})();
if(inst_47555__$1){
var statearr_47622_47692 = state_47589__$1;
(statearr_47622_47692[(1)] = (14));

} else {
var statearr_47623_47693 = state_47589__$1;
(statearr_47623_47693[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (9))){
var inst_47577 = (state_47589[(2)]);
var inst_47578 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_47589__$1 = (function (){var statearr_47624 = state_47589;
(statearr_47624[(15)] = inst_47577);

return statearr_47624;
})();
if(cljs.core.truth_(inst_47578)){
var statearr_47625_47697 = state_47589__$1;
(statearr_47625_47697[(1)] = (21));

} else {
var statearr_47626_47698 = state_47589__$1;
(statearr_47626_47698[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (5))){
var inst_47531 = cljs.core.async.close_BANG_.call(null,out);
var state_47589__$1 = state_47589;
var statearr_47627_47702 = state_47589__$1;
(statearr_47627_47702[(2)] = inst_47531);

(statearr_47627_47702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (14))){
var inst_47555 = (state_47589[(7)]);
var inst_47557 = cljs.core.chunked_seq_QMARK_.call(null,inst_47555);
var state_47589__$1 = state_47589;
if(inst_47557){
var statearr_47631_47706 = state_47589__$1;
(statearr_47631_47706[(1)] = (17));

} else {
var statearr_47632_47707 = state_47589__$1;
(statearr_47632_47707[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (16))){
var inst_47573 = (state_47589[(2)]);
var state_47589__$1 = state_47589;
var statearr_47633_47708 = state_47589__$1;
(statearr_47633_47708[(2)] = inst_47573);

(statearr_47633_47708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47590 === (10))){
var inst_47542 = (state_47589[(8)]);
var inst_47540 = (state_47589[(9)]);
var inst_47547 = cljs.core._nth.call(null,inst_47540,inst_47542);
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47589__$1,(13),out,inst_47547);
} else {
if((state_val_47590 === (18))){
var inst_47555 = (state_47589[(7)]);
var inst_47564 = cljs.core.first.call(null,inst_47555);
var state_47589__$1 = state_47589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47589__$1,(20),out,inst_47564);
} else {
if((state_val_47590 === (8))){
var inst_47542 = (state_47589[(8)]);
var inst_47541 = (state_47589[(11)]);
var inst_47544 = (inst_47542 < inst_47541);
var inst_47545 = inst_47544;
var state_47589__$1 = state_47589;
if(cljs.core.truth_(inst_47545)){
var statearr_47634_47709 = state_47589__$1;
(statearr_47634_47709[(1)] = (10));

} else {
var statearr_47635_47710 = state_47589__$1;
(statearr_47635_47710[(1)] = (11));

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
var statearr_47651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47651[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__);

(statearr_47651[(1)] = (1));

return statearr_47651;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____1 = (function (state_47589){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_47589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e47652){if((e47652 instanceof Object)){
var ex__29642__auto__ = e47652;
var statearr_47653_47713 = state_47589;
(statearr_47653_47713[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47717 = state_47589;
state_47589 = G__47717;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__ = function(state_47589){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____1.call(this,state_47589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29639__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto__))
})();
var state__29752__auto__ = (function (){var statearr_47654 = f__29751__auto__.call(null);
(statearr_47654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto__);

return statearr_47654;
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
var args47721 = [];
var len__26441__auto___47738 = arguments.length;
var i__26442__auto___47739 = (0);
while(true){
if((i__26442__auto___47739 < len__26441__auto___47738)){
args47721.push((arguments[i__26442__auto___47739]));

var G__47740 = (i__26442__auto___47739 + (1));
i__26442__auto___47739 = G__47740;
continue;
} else {
}
break;
}

var G__47726 = args47721.length;
switch (G__47726) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47721.length)].join('')));

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
var args47752 = [];
var len__26441__auto___47757 = arguments.length;
var i__26442__auto___47758 = (0);
while(true){
if((i__26442__auto___47758 < len__26441__auto___47757)){
args47752.push((arguments[i__26442__auto___47758]));

var G__47759 = (i__26442__auto___47758 + (1));
i__26442__auto___47758 = G__47759;
continue;
} else {
}
break;
}

var G__47756 = args47752.length;
switch (G__47756) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47752.length)].join('')));

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
var args47761 = [];
var len__26441__auto___47825 = arguments.length;
var i__26442__auto___47826 = (0);
while(true){
if((i__26442__auto___47826 < len__26441__auto___47825)){
args47761.push((arguments[i__26442__auto___47826]));

var G__47831 = (i__26442__auto___47826 + (1));
i__26442__auto___47826 = G__47831;
continue;
} else {
}
break;
}

var G__47763 = args47761.length;
switch (G__47763) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47761.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___47836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___47836,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___47836,out){
return (function (state_47787){
var state_val_47788 = (state_47787[(1)]);
if((state_val_47788 === (7))){
var inst_47782 = (state_47787[(2)]);
var state_47787__$1 = state_47787;
var statearr_47789_47837 = state_47787__$1;
(statearr_47789_47837[(2)] = inst_47782);

(statearr_47789_47837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47788 === (1))){
var inst_47764 = null;
var state_47787__$1 = (function (){var statearr_47790 = state_47787;
(statearr_47790[(7)] = inst_47764);

return statearr_47790;
})();
var statearr_47791_47838 = state_47787__$1;
(statearr_47791_47838[(2)] = null);

(statearr_47791_47838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47788 === (4))){
var inst_47767 = (state_47787[(8)]);
var inst_47767__$1 = (state_47787[(2)]);
var inst_47768 = (inst_47767__$1 == null);
var inst_47769 = cljs.core.not.call(null,inst_47768);
var state_47787__$1 = (function (){var statearr_47792 = state_47787;
(statearr_47792[(8)] = inst_47767__$1);

return statearr_47792;
})();
if(inst_47769){
var statearr_47793_47839 = state_47787__$1;
(statearr_47793_47839[(1)] = (5));

} else {
var statearr_47794_47840 = state_47787__$1;
(statearr_47794_47840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47788 === (6))){
var state_47787__$1 = state_47787;
var statearr_47795_47841 = state_47787__$1;
(statearr_47795_47841[(2)] = null);

(statearr_47795_47841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47788 === (3))){
var inst_47784 = (state_47787[(2)]);
var inst_47785 = cljs.core.async.close_BANG_.call(null,out);
var state_47787__$1 = (function (){var statearr_47799 = state_47787;
(statearr_47799[(9)] = inst_47784);

return statearr_47799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47787__$1,inst_47785);
} else {
if((state_val_47788 === (2))){
var state_47787__$1 = state_47787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47787__$1,(4),ch);
} else {
if((state_val_47788 === (11))){
var inst_47767 = (state_47787[(8)]);
var inst_47776 = (state_47787[(2)]);
var inst_47764 = inst_47767;
var state_47787__$1 = (function (){var statearr_47800 = state_47787;
(statearr_47800[(10)] = inst_47776);

(statearr_47800[(7)] = inst_47764);

return statearr_47800;
})();
var statearr_47801_47844 = state_47787__$1;
(statearr_47801_47844[(2)] = null);

(statearr_47801_47844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47788 === (9))){
var inst_47767 = (state_47787[(8)]);
var state_47787__$1 = state_47787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47787__$1,(11),out,inst_47767);
} else {
if((state_val_47788 === (5))){
var inst_47767 = (state_47787[(8)]);
var inst_47764 = (state_47787[(7)]);
var inst_47771 = cljs.core._EQ_.call(null,inst_47767,inst_47764);
var state_47787__$1 = state_47787;
if(inst_47771){
var statearr_47803_47849 = state_47787__$1;
(statearr_47803_47849[(1)] = (8));

} else {
var statearr_47807_47850 = state_47787__$1;
(statearr_47807_47850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47788 === (10))){
var inst_47779 = (state_47787[(2)]);
var state_47787__$1 = state_47787;
var statearr_47808_47854 = state_47787__$1;
(statearr_47808_47854[(2)] = inst_47779);

(statearr_47808_47854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47788 === (8))){
var inst_47764 = (state_47787[(7)]);
var tmp47802 = inst_47764;
var inst_47764__$1 = tmp47802;
var state_47787__$1 = (function (){var statearr_47809 = state_47787;
(statearr_47809[(7)] = inst_47764__$1);

return statearr_47809;
})();
var statearr_47810_47855 = state_47787__$1;
(statearr_47810_47855[(2)] = null);

(statearr_47810_47855[(1)] = (2));


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
});})(c__29750__auto___47836,out))
;
return ((function (switch__29638__auto__,c__29750__auto___47836,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_47816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47816[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_47816[(1)] = (1));

return statearr_47816;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_47787){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_47787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e47818){if((e47818 instanceof Object)){
var ex__29642__auto__ = e47818;
var statearr_47819_47866 = state_47787;
(statearr_47819_47866[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47868 = state_47787;
state_47787 = G__47868;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_47787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_47787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___47836,out))
})();
var state__29752__auto__ = (function (){var statearr_47824 = f__29751__auto__.call(null);
(statearr_47824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___47836);

return statearr_47824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___47836,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args47870 = [];
var len__26441__auto___47946 = arguments.length;
var i__26442__auto___47947 = (0);
while(true){
if((i__26442__auto___47947 < len__26441__auto___47946)){
args47870.push((arguments[i__26442__auto___47947]));

var G__47948 = (i__26442__auto___47947 + (1));
i__26442__auto___47947 = G__47948;
continue;
} else {
}
break;
}

var G__47872 = args47870.length;
switch (G__47872) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47870.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___47951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___47951,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___47951,out){
return (function (state_47910){
var state_val_47911 = (state_47910[(1)]);
if((state_val_47911 === (7))){
var inst_47906 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47912_47955 = state_47910__$1;
(statearr_47912_47955[(2)] = inst_47906);

(statearr_47912_47955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (1))){
var inst_47873 = (new Array(n));
var inst_47874 = inst_47873;
var inst_47875 = (0);
var state_47910__$1 = (function (){var statearr_47913 = state_47910;
(statearr_47913[(7)] = inst_47875);

(statearr_47913[(8)] = inst_47874);

return statearr_47913;
})();
var statearr_47914_47957 = state_47910__$1;
(statearr_47914_47957[(2)] = null);

(statearr_47914_47957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (4))){
var inst_47878 = (state_47910[(9)]);
var inst_47878__$1 = (state_47910[(2)]);
var inst_47879 = (inst_47878__$1 == null);
var inst_47880 = cljs.core.not.call(null,inst_47879);
var state_47910__$1 = (function (){var statearr_47916 = state_47910;
(statearr_47916[(9)] = inst_47878__$1);

return statearr_47916;
})();
if(inst_47880){
var statearr_47917_47958 = state_47910__$1;
(statearr_47917_47958[(1)] = (5));

} else {
var statearr_47918_47959 = state_47910__$1;
(statearr_47918_47959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (15))){
var inst_47900 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47919_47964 = state_47910__$1;
(statearr_47919_47964[(2)] = inst_47900);

(statearr_47919_47964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (13))){
var state_47910__$1 = state_47910;
var statearr_47920_47965 = state_47910__$1;
(statearr_47920_47965[(2)] = null);

(statearr_47920_47965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (6))){
var inst_47875 = (state_47910[(7)]);
var inst_47896 = (inst_47875 > (0));
var state_47910__$1 = state_47910;
if(cljs.core.truth_(inst_47896)){
var statearr_47921_47966 = state_47910__$1;
(statearr_47921_47966[(1)] = (12));

} else {
var statearr_47922_47967 = state_47910__$1;
(statearr_47922_47967[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (3))){
var inst_47908 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47910__$1,inst_47908);
} else {
if((state_val_47911 === (12))){
var inst_47874 = (state_47910[(8)]);
var inst_47898 = cljs.core.vec.call(null,inst_47874);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47910__$1,(15),out,inst_47898);
} else {
if((state_val_47911 === (2))){
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47910__$1,(4),ch);
} else {
if((state_val_47911 === (11))){
var inst_47890 = (state_47910[(2)]);
var inst_47891 = (new Array(n));
var inst_47874 = inst_47891;
var inst_47875 = (0);
var state_47910__$1 = (function (){var statearr_47923 = state_47910;
(statearr_47923[(10)] = inst_47890);

(statearr_47923[(7)] = inst_47875);

(statearr_47923[(8)] = inst_47874);

return statearr_47923;
})();
var statearr_47924_47974 = state_47910__$1;
(statearr_47924_47974[(2)] = null);

(statearr_47924_47974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (9))){
var inst_47874 = (state_47910[(8)]);
var inst_47888 = cljs.core.vec.call(null,inst_47874);
var state_47910__$1 = state_47910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47910__$1,(11),out,inst_47888);
} else {
if((state_val_47911 === (5))){
var inst_47878 = (state_47910[(9)]);
var inst_47875 = (state_47910[(7)]);
var inst_47883 = (state_47910[(11)]);
var inst_47874 = (state_47910[(8)]);
var inst_47882 = (inst_47874[inst_47875] = inst_47878);
var inst_47883__$1 = (inst_47875 + (1));
var inst_47884 = (inst_47883__$1 < n);
var state_47910__$1 = (function (){var statearr_47925 = state_47910;
(statearr_47925[(11)] = inst_47883__$1);

(statearr_47925[(12)] = inst_47882);

return statearr_47925;
})();
if(cljs.core.truth_(inst_47884)){
var statearr_47926_47985 = state_47910__$1;
(statearr_47926_47985[(1)] = (8));

} else {
var statearr_47927_47986 = state_47910__$1;
(statearr_47927_47986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (14))){
var inst_47903 = (state_47910[(2)]);
var inst_47904 = cljs.core.async.close_BANG_.call(null,out);
var state_47910__$1 = (function (){var statearr_47929 = state_47910;
(statearr_47929[(13)] = inst_47903);

return statearr_47929;
})();
var statearr_47930_47987 = state_47910__$1;
(statearr_47930_47987[(2)] = inst_47904);

(statearr_47930_47987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (10))){
var inst_47894 = (state_47910[(2)]);
var state_47910__$1 = state_47910;
var statearr_47931_47988 = state_47910__$1;
(statearr_47931_47988[(2)] = inst_47894);

(statearr_47931_47988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47911 === (8))){
var inst_47883 = (state_47910[(11)]);
var inst_47874 = (state_47910[(8)]);
var tmp47928 = inst_47874;
var inst_47874__$1 = tmp47928;
var inst_47875 = inst_47883;
var state_47910__$1 = (function (){var statearr_47932 = state_47910;
(statearr_47932[(7)] = inst_47875);

(statearr_47932[(8)] = inst_47874__$1);

return statearr_47932;
})();
var statearr_47933_47990 = state_47910__$1;
(statearr_47933_47990[(2)] = null);

(statearr_47933_47990[(1)] = (2));


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
});})(c__29750__auto___47951,out))
;
return ((function (switch__29638__auto__,c__29750__auto___47951,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_47941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47941[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_47941[(1)] = (1));

return statearr_47941;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_47910){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_47910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e47942){if((e47942 instanceof Object)){
var ex__29642__auto__ = e47942;
var statearr_47944_47996 = state_47910;
(statearr_47944_47996[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47997 = state_47910;
state_47910 = G__47997;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_47910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_47910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___47951,out))
})();
var state__29752__auto__ = (function (){var statearr_47945 = f__29751__auto__.call(null);
(statearr_47945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___47951);

return statearr_47945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___47951,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47998 = [];
var len__26441__auto___48130 = arguments.length;
var i__26442__auto___48131 = (0);
while(true){
if((i__26442__auto___48131 < len__26441__auto___48130)){
args47998.push((arguments[i__26442__auto___48131]));

var G__48132 = (i__26442__auto___48131 + (1));
i__26442__auto___48131 = G__48132;
continue;
} else {
}
break;
}

var G__48034 = args47998.length;
switch (G__48034) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47998.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29750__auto___48139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29750__auto___48139,out){
return (function (){
var f__29751__auto__ = (function (){var switch__29638__auto__ = ((function (c__29750__auto___48139,out){
return (function (state_48087){
var state_val_48088 = (state_48087[(1)]);
if((state_val_48088 === (7))){
var inst_48083 = (state_48087[(2)]);
var state_48087__$1 = state_48087;
var statearr_48089_48146 = state_48087__$1;
(statearr_48089_48146[(2)] = inst_48083);

(statearr_48089_48146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (1))){
var inst_48041 = [];
var inst_48042 = inst_48041;
var inst_48043 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48087__$1 = (function (){var statearr_48090 = state_48087;
(statearr_48090[(7)] = inst_48042);

(statearr_48090[(8)] = inst_48043);

return statearr_48090;
})();
var statearr_48091_48147 = state_48087__$1;
(statearr_48091_48147[(2)] = null);

(statearr_48091_48147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (4))){
var inst_48046 = (state_48087[(9)]);
var inst_48046__$1 = (state_48087[(2)]);
var inst_48047 = (inst_48046__$1 == null);
var inst_48048 = cljs.core.not.call(null,inst_48047);
var state_48087__$1 = (function (){var statearr_48092 = state_48087;
(statearr_48092[(9)] = inst_48046__$1);

return statearr_48092;
})();
if(inst_48048){
var statearr_48093_48148 = state_48087__$1;
(statearr_48093_48148[(1)] = (5));

} else {
var statearr_48094_48149 = state_48087__$1;
(statearr_48094_48149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (15))){
var inst_48077 = (state_48087[(2)]);
var state_48087__$1 = state_48087;
var statearr_48095_48150 = state_48087__$1;
(statearr_48095_48150[(2)] = inst_48077);

(statearr_48095_48150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (13))){
var state_48087__$1 = state_48087;
var statearr_48096_48157 = state_48087__$1;
(statearr_48096_48157[(2)] = null);

(statearr_48096_48157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (6))){
var inst_48042 = (state_48087[(7)]);
var inst_48072 = inst_48042.length;
var inst_48073 = (inst_48072 > (0));
var state_48087__$1 = state_48087;
if(cljs.core.truth_(inst_48073)){
var statearr_48097_48158 = state_48087__$1;
(statearr_48097_48158[(1)] = (12));

} else {
var statearr_48098_48159 = state_48087__$1;
(statearr_48098_48159[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (3))){
var inst_48085 = (state_48087[(2)]);
var state_48087__$1 = state_48087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48087__$1,inst_48085);
} else {
if((state_val_48088 === (12))){
var inst_48042 = (state_48087[(7)]);
var inst_48075 = cljs.core.vec.call(null,inst_48042);
var state_48087__$1 = state_48087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48087__$1,(15),out,inst_48075);
} else {
if((state_val_48088 === (2))){
var state_48087__$1 = state_48087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48087__$1,(4),ch);
} else {
if((state_val_48088 === (11))){
var inst_48051 = (state_48087[(10)]);
var inst_48046 = (state_48087[(9)]);
var inst_48065 = (state_48087[(2)]);
var inst_48066 = [];
var inst_48067 = inst_48066.push(inst_48046);
var inst_48042 = inst_48066;
var inst_48043 = inst_48051;
var state_48087__$1 = (function (){var statearr_48099 = state_48087;
(statearr_48099[(7)] = inst_48042);

(statearr_48099[(11)] = inst_48067);

(statearr_48099[(8)] = inst_48043);

(statearr_48099[(12)] = inst_48065);

return statearr_48099;
})();
var statearr_48100_48160 = state_48087__$1;
(statearr_48100_48160[(2)] = null);

(statearr_48100_48160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (9))){
var inst_48042 = (state_48087[(7)]);
var inst_48063 = cljs.core.vec.call(null,inst_48042);
var state_48087__$1 = state_48087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48087__$1,(11),out,inst_48063);
} else {
if((state_val_48088 === (5))){
var inst_48051 = (state_48087[(10)]);
var inst_48043 = (state_48087[(8)]);
var inst_48046 = (state_48087[(9)]);
var inst_48051__$1 = f.call(null,inst_48046);
var inst_48055 = cljs.core._EQ_.call(null,inst_48051__$1,inst_48043);
var inst_48056 = cljs.core.keyword_identical_QMARK_.call(null,inst_48043,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_48057 = (inst_48055) || (inst_48056);
var state_48087__$1 = (function (){var statearr_48105 = state_48087;
(statearr_48105[(10)] = inst_48051__$1);

return statearr_48105;
})();
if(cljs.core.truth_(inst_48057)){
var statearr_48106_48161 = state_48087__$1;
(statearr_48106_48161[(1)] = (8));

} else {
var statearr_48110_48162 = state_48087__$1;
(statearr_48110_48162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (14))){
var inst_48080 = (state_48087[(2)]);
var inst_48081 = cljs.core.async.close_BANG_.call(null,out);
var state_48087__$1 = (function (){var statearr_48113 = state_48087;
(statearr_48113[(13)] = inst_48080);

return statearr_48113;
})();
var statearr_48114_48163 = state_48087__$1;
(statearr_48114_48163[(2)] = inst_48081);

(statearr_48114_48163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (10))){
var inst_48070 = (state_48087[(2)]);
var state_48087__$1 = state_48087;
var statearr_48117_48164 = state_48087__$1;
(statearr_48117_48164[(2)] = inst_48070);

(statearr_48117_48164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48088 === (8))){
var inst_48051 = (state_48087[(10)]);
var inst_48042 = (state_48087[(7)]);
var inst_48046 = (state_48087[(9)]);
var inst_48060 = inst_48042.push(inst_48046);
var tmp48112 = inst_48042;
var inst_48042__$1 = tmp48112;
var inst_48043 = inst_48051;
var state_48087__$1 = (function (){var statearr_48119 = state_48087;
(statearr_48119[(7)] = inst_48042__$1);

(statearr_48119[(8)] = inst_48043);

(statearr_48119[(14)] = inst_48060);

return statearr_48119;
})();
var statearr_48121_48165 = state_48087__$1;
(statearr_48121_48165[(2)] = null);

(statearr_48121_48165[(1)] = (2));


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
});})(c__29750__auto___48139,out))
;
return ((function (switch__29638__auto__,c__29750__auto___48139,out){
return (function() {
var cljs$core$async$state_machine__29639__auto__ = null;
var cljs$core$async$state_machine__29639__auto____0 = (function (){
var statearr_48126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48126[(0)] = cljs$core$async$state_machine__29639__auto__);

(statearr_48126[(1)] = (1));

return statearr_48126;
});
var cljs$core$async$state_machine__29639__auto____1 = (function (state_48087){
while(true){
var ret_value__29640__auto__ = (function (){try{while(true){
var result__29641__auto__ = switch__29638__auto__.call(null,state_48087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29641__auto__;
}
break;
}
}catch (e48127){if((e48127 instanceof Object)){
var ex__29642__auto__ = e48127;
var statearr_48128_48166 = state_48087;
(statearr_48128_48166[(5)] = ex__29642__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48167 = state_48087;
state_48087 = G__48167;
continue;
} else {
return ret_value__29640__auto__;
}
break;
}
});
cljs$core$async$state_machine__29639__auto__ = function(state_48087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29639__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29639__auto____1.call(this,state_48087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29639__auto____0;
cljs$core$async$state_machine__29639__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29639__auto____1;
return cljs$core$async$state_machine__29639__auto__;
})()
;})(switch__29638__auto__,c__29750__auto___48139,out))
})();
var state__29752__auto__ = (function (){var statearr_48129 = f__29751__auto__.call(null);
(statearr_48129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29750__auto___48139);

return statearr_48129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29752__auto__);
});})(c__29750__auto___48139,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1489150141953