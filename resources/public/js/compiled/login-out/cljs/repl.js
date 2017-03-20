// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53730){
var map__53755 = p__53730;
var map__53755__$1 = ((((!((map__53755 == null)))?((((map__53755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53755):map__53755);
var m = map__53755__$1;
var n = cljs.core.get.call(null,map__53755__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__53757_53779 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53758_53780 = null;
var count__53759_53781 = (0);
var i__53760_53782 = (0);
while(true){
if((i__53760_53782 < count__53759_53781)){
var f_53783 = cljs.core._nth.call(null,chunk__53758_53780,i__53760_53782);
cljs.core.println.call(null,"  ",f_53783);

var G__53784 = seq__53757_53779;
var G__53785 = chunk__53758_53780;
var G__53786 = count__53759_53781;
var G__53787 = (i__53760_53782 + (1));
seq__53757_53779 = G__53784;
chunk__53758_53780 = G__53785;
count__53759_53781 = G__53786;
i__53760_53782 = G__53787;
continue;
} else {
var temp__4657__auto___53788 = cljs.core.seq.call(null,seq__53757_53779);
if(temp__4657__auto___53788){
var seq__53757_53789__$1 = temp__4657__auto___53788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53757_53789__$1)){
var c__26147__auto___53790 = cljs.core.chunk_first.call(null,seq__53757_53789__$1);
var G__53791 = cljs.core.chunk_rest.call(null,seq__53757_53789__$1);
var G__53792 = c__26147__auto___53790;
var G__53793 = cljs.core.count.call(null,c__26147__auto___53790);
var G__53794 = (0);
seq__53757_53779 = G__53791;
chunk__53758_53780 = G__53792;
count__53759_53781 = G__53793;
i__53760_53782 = G__53794;
continue;
} else {
var f_53795 = cljs.core.first.call(null,seq__53757_53789__$1);
cljs.core.println.call(null,"  ",f_53795);

var G__53796 = cljs.core.next.call(null,seq__53757_53789__$1);
var G__53797 = null;
var G__53798 = (0);
var G__53799 = (0);
seq__53757_53779 = G__53796;
chunk__53758_53780 = G__53797;
count__53759_53781 = G__53798;
i__53760_53782 = G__53799;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53800 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25333__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25333__auto__)){
return or__25333__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53800);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53800)))?cljs.core.second.call(null,arglists_53800):arglists_53800));
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
var seq__53761_53801 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53762_53802 = null;
var count__53763_53803 = (0);
var i__53764_53804 = (0);
while(true){
if((i__53764_53804 < count__53763_53803)){
var vec__53765_53805 = cljs.core._nth.call(null,chunk__53762_53802,i__53764_53804);
var name_53806 = cljs.core.nth.call(null,vec__53765_53805,(0),null);
var map__53768_53807 = cljs.core.nth.call(null,vec__53765_53805,(1),null);
var map__53768_53808__$1 = ((((!((map__53768_53807 == null)))?((((map__53768_53807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53768_53807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53768_53807):map__53768_53807);
var doc_53809 = cljs.core.get.call(null,map__53768_53808__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53810 = cljs.core.get.call(null,map__53768_53808__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53806);

cljs.core.println.call(null," ",arglists_53810);

if(cljs.core.truth_(doc_53809)){
cljs.core.println.call(null," ",doc_53809);
} else {
}

var G__53811 = seq__53761_53801;
var G__53812 = chunk__53762_53802;
var G__53813 = count__53763_53803;
var G__53814 = (i__53764_53804 + (1));
seq__53761_53801 = G__53811;
chunk__53762_53802 = G__53812;
count__53763_53803 = G__53813;
i__53764_53804 = G__53814;
continue;
} else {
var temp__4657__auto___53815 = cljs.core.seq.call(null,seq__53761_53801);
if(temp__4657__auto___53815){
var seq__53761_53816__$1 = temp__4657__auto___53815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53761_53816__$1)){
var c__26147__auto___53817 = cljs.core.chunk_first.call(null,seq__53761_53816__$1);
var G__53818 = cljs.core.chunk_rest.call(null,seq__53761_53816__$1);
var G__53819 = c__26147__auto___53817;
var G__53820 = cljs.core.count.call(null,c__26147__auto___53817);
var G__53821 = (0);
seq__53761_53801 = G__53818;
chunk__53762_53802 = G__53819;
count__53763_53803 = G__53820;
i__53764_53804 = G__53821;
continue;
} else {
var vec__53770_53822 = cljs.core.first.call(null,seq__53761_53816__$1);
var name_53823 = cljs.core.nth.call(null,vec__53770_53822,(0),null);
var map__53773_53824 = cljs.core.nth.call(null,vec__53770_53822,(1),null);
var map__53773_53825__$1 = ((((!((map__53773_53824 == null)))?((((map__53773_53824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53773_53824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53773_53824):map__53773_53824);
var doc_53826 = cljs.core.get.call(null,map__53773_53825__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53827 = cljs.core.get.call(null,map__53773_53825__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53823);

cljs.core.println.call(null," ",arglists_53827);

if(cljs.core.truth_(doc_53826)){
cljs.core.println.call(null," ",doc_53826);
} else {
}

var G__53828 = cljs.core.next.call(null,seq__53761_53816__$1);
var G__53829 = null;
var G__53830 = (0);
var G__53831 = (0);
seq__53761_53801 = G__53828;
chunk__53762_53802 = G__53829;
count__53763_53803 = G__53830;
i__53764_53804 = G__53831;
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

var seq__53775 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53776 = null;
var count__53777 = (0);
var i__53778 = (0);
while(true){
if((i__53778 < count__53777)){
var role = cljs.core._nth.call(null,chunk__53776,i__53778);
var temp__4657__auto___53832__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53832__$1)){
var spec_53833 = temp__4657__auto___53832__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53833));
} else {
}

var G__53834 = seq__53775;
var G__53835 = chunk__53776;
var G__53836 = count__53777;
var G__53837 = (i__53778 + (1));
seq__53775 = G__53834;
chunk__53776 = G__53835;
count__53777 = G__53836;
i__53778 = G__53837;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__53775);
if(temp__4657__auto____$1){
var seq__53775__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53775__$1)){
var c__26147__auto__ = cljs.core.chunk_first.call(null,seq__53775__$1);
var G__53838 = cljs.core.chunk_rest.call(null,seq__53775__$1);
var G__53839 = c__26147__auto__;
var G__53840 = cljs.core.count.call(null,c__26147__auto__);
var G__53841 = (0);
seq__53775 = G__53838;
chunk__53776 = G__53839;
count__53777 = G__53840;
i__53778 = G__53841;
continue;
} else {
var role = cljs.core.first.call(null,seq__53775__$1);
var temp__4657__auto___53842__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___53842__$2)){
var spec_53843 = temp__4657__auto___53842__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_53843));
} else {
}

var G__53844 = cljs.core.next.call(null,seq__53775__$1);
var G__53845 = null;
var G__53846 = (0);
var G__53847 = (0);
seq__53775 = G__53844;
chunk__53776 = G__53845;
count__53777 = G__53846;
i__53778 = G__53847;
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

//# sourceMappingURL=repl.js.map?rel=1489150144187