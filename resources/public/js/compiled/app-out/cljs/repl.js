// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35614){
var map__35639 = p__35614;
var map__35639__$1 = ((((!((map__35639 == null)))?((((map__35639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35639):map__35639);
var m = map__35639__$1;
var n = cljs.core.get.call(null,map__35639__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35639__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35641_35663 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35642_35664 = null;
var count__35643_35665 = (0);
var i__35644_35666 = (0);
while(true){
if((i__35644_35666 < count__35643_35665)){
var f_35667 = cljs.core._nth.call(null,chunk__35642_35664,i__35644_35666);
cljs.core.println.call(null,"  ",f_35667);

var G__35668 = seq__35641_35663;
var G__35669 = chunk__35642_35664;
var G__35670 = count__35643_35665;
var G__35671 = (i__35644_35666 + (1));
seq__35641_35663 = G__35668;
chunk__35642_35664 = G__35669;
count__35643_35665 = G__35670;
i__35644_35666 = G__35671;
continue;
} else {
var temp__4657__auto___35672 = cljs.core.seq.call(null,seq__35641_35663);
if(temp__4657__auto___35672){
var seq__35641_35673__$1 = temp__4657__auto___35672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35641_35673__$1)){
var c__26147__auto___35674 = cljs.core.chunk_first.call(null,seq__35641_35673__$1);
var G__35675 = cljs.core.chunk_rest.call(null,seq__35641_35673__$1);
var G__35676 = c__26147__auto___35674;
var G__35677 = cljs.core.count.call(null,c__26147__auto___35674);
var G__35678 = (0);
seq__35641_35663 = G__35675;
chunk__35642_35664 = G__35676;
count__35643_35665 = G__35677;
i__35644_35666 = G__35678;
continue;
} else {
var f_35679 = cljs.core.first.call(null,seq__35641_35673__$1);
cljs.core.println.call(null,"  ",f_35679);

var G__35680 = cljs.core.next.call(null,seq__35641_35673__$1);
var G__35681 = null;
var G__35682 = (0);
var G__35683 = (0);
seq__35641_35663 = G__35680;
chunk__35642_35664 = G__35681;
count__35643_35665 = G__35682;
i__35644_35666 = G__35683;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35684 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25333__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35684);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35684)))?cljs.core.second.call(null,arglists_35684):arglists_35684));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35645_35685 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35646_35686 = null;
var count__35647_35687 = (0);
var i__35648_35688 = (0);
while(true){
if((i__35648_35688 < count__35647_35687)){
var vec__35649_35689 = cljs.core._nth.call(null,chunk__35646_35686,i__35648_35688);
var name_35690 = cljs.core.nth.call(null,vec__35649_35689,(0),null);
var map__35652_35691 = cljs.core.nth.call(null,vec__35649_35689,(1),null);
var map__35652_35692__$1 = ((((!((map__35652_35691 == null)))?((((map__35652_35691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35652_35691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35652_35691):map__35652_35691);
var doc_35693 = cljs.core.get.call(null,map__35652_35692__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35694 = cljs.core.get.call(null,map__35652_35692__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35690);

cljs.core.println.call(null," ",arglists_35694);

if(cljs.core.truth_(doc_35693)){
cljs.core.println.call(null," ",doc_35693);
} else {
}

var G__35695 = seq__35645_35685;
var G__35696 = chunk__35646_35686;
var G__35697 = count__35647_35687;
var G__35698 = (i__35648_35688 + (1));
seq__35645_35685 = G__35695;
chunk__35646_35686 = G__35696;
count__35647_35687 = G__35697;
i__35648_35688 = G__35698;
continue;
} else {
var temp__4657__auto___35699 = cljs.core.seq.call(null,seq__35645_35685);
if(temp__4657__auto___35699){
var seq__35645_35700__$1 = temp__4657__auto___35699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35645_35700__$1)){
var c__26147__auto___35701 = cljs.core.chunk_first.call(null,seq__35645_35700__$1);
var G__35702 = cljs.core.chunk_rest.call(null,seq__35645_35700__$1);
var G__35703 = c__26147__auto___35701;
var G__35704 = cljs.core.count.call(null,c__26147__auto___35701);
var G__35705 = (0);
seq__35645_35685 = G__35702;
chunk__35646_35686 = G__35703;
count__35647_35687 = G__35704;
i__35648_35688 = G__35705;
continue;
} else {
var vec__35654_35706 = cljs.core.first.call(null,seq__35645_35700__$1);
var name_35707 = cljs.core.nth.call(null,vec__35654_35706,(0),null);
var map__35657_35708 = cljs.core.nth.call(null,vec__35654_35706,(1),null);
var map__35657_35709__$1 = ((((!((map__35657_35708 == null)))?((((map__35657_35708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35657_35708.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35657_35708):map__35657_35708);
var doc_35710 = cljs.core.get.call(null,map__35657_35709__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35711 = cljs.core.get.call(null,map__35657_35709__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35707);

cljs.core.println.call(null," ",arglists_35711);

if(cljs.core.truth_(doc_35710)){
cljs.core.println.call(null," ",doc_35710);
} else {
}

var G__35712 = cljs.core.next.call(null,seq__35645_35700__$1);
var G__35713 = null;
var G__35714 = (0);
var G__35715 = (0);
seq__35645_35685 = G__35712;
chunk__35646_35686 = G__35713;
count__35647_35687 = G__35714;
i__35648_35688 = G__35715;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35659 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35660 = null;
var count__35661 = (0);
var i__35662 = (0);
while(true){
if((i__35662 < count__35661)){
var role = cljs.core._nth.call(null,chunk__35660,i__35662);
var temp__4657__auto___35716__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35716__$1)){
var spec_35717 = temp__4657__auto___35716__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35717));
} else {
}

var G__35718 = seq__35659;
var G__35719 = chunk__35660;
var G__35720 = count__35661;
var G__35721 = (i__35662 + (1));
seq__35659 = G__35718;
chunk__35660 = G__35719;
count__35661 = G__35720;
i__35662 = G__35721;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35659);
if(temp__4657__auto____$1){
var seq__35659__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35659__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__35659__$1);
var G__35722 = cljs.core.chunk_rest.call(null,seq__35659__$1);
var G__35723 = c__26147__auto__;
var G__35724 = cljs.core.count.call(null,c__26147__auto__);
var G__35725 = (0);
seq__35659 = G__35722;
chunk__35660 = G__35723;
count__35661 = G__35724;
i__35662 = G__35725;
continue;
} else {
var role = cljs.core.first.call(null,seq__35659__$1);
var temp__4657__auto___35726__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35726__$2)){
var spec_35727 = temp__4657__auto___35726__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35727));
} else {
}

var G__35728 = cljs.core.next.call(null,seq__35659__$1);
var G__35729 = null;
var G__35730 = (0);
var G__35731 = (0);
seq__35659 = G__35728;
chunk__35660 = G__35729;
count__35661 = G__35730;
i__35662 = G__35731;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1489150132540