goog.provide('figwheel.connect.login_dev');
goog.require('cljs.core');
goog.require('iamfoxy.login.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__55041__delegate = function (x){
if(cljs.core.truth_(iamfoxy.login.core.mount_password_reset_root)){
return cljs.core.apply.call(null,iamfoxy.login.core.mount_password_reset_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'iamfoxy.login.core/mount-password-reset-root' is missing");
}
};
var G__55041 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__55042__i = 0, G__55042__a = new Array(arguments.length -  0);
while (G__55042__i < G__55042__a.length) {G__55042__a[G__55042__i] = arguments[G__55042__i + 0]; ++G__55042__i;}
  x = new cljs.core.IndexedSeq(G__55042__a,0);
} 
return G__55041__delegate.call(this,x);};
G__55041.cljs$lang$maxFixedArity = 0;
G__55041.cljs$lang$applyTo = (function (arglist__55043){
var x = cljs.core.seq(arglist__55043);
return G__55041__delegate(x);
});
G__55041.cljs$core$IFn$_invoke$arity$variadic = G__55041__delegate;
return G__55041;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"login-dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
