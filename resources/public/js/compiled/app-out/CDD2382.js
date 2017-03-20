goog.provide('figwheel.connect.proto_dev');
goog.require('cljs.core');
goog.require('iamfoxy.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38480__delegate = function (x){
if(cljs.core.truth_(iamfoxy.core.mount_root)){
return cljs.core.apply.call(null,iamfoxy.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'iamfoxy.core/mount-root' is missing");
}
};
var G__38480 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__38481__i = 0, G__38481__a = new Array(arguments.length -  0);
while (G__38481__i < G__38481__a.length) {G__38481__a[G__38481__i] = arguments[G__38481__i + 0]; ++G__38481__i;}
  x = new cljs.core.IndexedSeq(G__38481__a,0);
} 
return G__38480__delegate.call(this,x);};
G__38480.cljs$lang$maxFixedArity = 0;
G__38480.cljs$lang$applyTo = (function (arglist__38482){
var x = cljs.core.seq(arglist__38482);
return G__38480__delegate(x);
});
G__38480.cljs$core$IFn$_invoke$arity$variadic = G__38480__delegate;
return G__38480;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"proto-dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
