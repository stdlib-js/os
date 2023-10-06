"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=i(function(xr,f){
var Q=require("process"),Z=Q.arch;f.exports=Z
});var T=i(function(Ir,A){
var rr=d();A.exports=rr
});var P=i(function(Nr,M){
var _=require('@stdlib/assert/is-little-endian/dist'),D=require('@stdlib/assert/is-big-endian/dist'),o;_&&D?o="mixed-endian":_?o="little-endian":D?o="big-endian":o="unknown";M.exports=o
});var R=i(function(Lr,x){
var er=P();x.exports=er
});var N=i(function(Sr,I){
var ir=require("process"),tr=ir.platform;I.exports=tr
});var q=i(function(hr,L){
var ur=N();L.exports=ur
});var h=i(function(gr,S){
var t=require('@stdlib/process/env/dist'),sr=require('@stdlib/assert/is-windows/dist'),nr=q(),ar=require('@stdlib/process/getuid/dist');function or(){var r,e;return sr?(r=t.USERPROFILE||t.HOMEDRIVE+t.HOMEPATH||t.HOME,r||null):(r=t.HOME,r||(e=t.LOGNAME||t.USER||t.LNAME||t.USERNAME,nr==="darwin"?e?"/Users/"+e:null:ar()===0?"/root":e?"/home/"+e:null))}S.exports=or
});var c=i(function(Fr,F){
var g=require("os"),vr=require('@stdlib/assert/is-function/dist'),qr=h(),Er=vr(g.homedir)?g.homedir:qr;F.exports=Er
});var W=i(function(Ur,U){
var E=require("path").join,l=require('@stdlib/process/env/dist'),Rr=require('@stdlib/assert/is-windows/dist'),cr=q(),lr=require('@stdlib/assert/is-string/dist').isPrimitive,Or=c(),pr=require('@stdlib/string/format/dist');function mr(r){var e,v,a;if(arguments.length){if(!lr(r))throw new TypeError(pr('0mT3B',r));e=r}else e="";return Rr?(a=l.LOCALAPPDATA||l.APPDATA,a?E(a,e):null):(v=Or(),v===null?null:cr==="darwin"?E(v,"Library","Preferences",e):(a=l.XDG_CONFIG_HOME||E(v,".config"),E(a,e)))}U.exports=mr
});var w=i(function(Wr,H){
var fr=W();H.exports=fr
});var B=i(function(Hr,C){
var O=R(),p;O==="little-endian"||O==="big-endian"?p=O:p="unknown";C.exports=p
});var y=i(function(wr,V){
var dr=B();V.exports=dr
});var b=i(function(Cr,Y){
var Ar=require("os"),G;function Tr(){return Ar.cpus().length}G=Tr();Y.exports=G
});var k=i(function(Br,j){
var _r=b();j.exports=_r
});var z=i(function(Vr,X){
var $=require('@stdlib/assert/is-windows/dist'),n=require('@stdlib/process/env/dist'),m;$?m=/[^:]\\$/:m=/.\/$/;function Dr(){var r;return $?r=n.TEMP||n.TMP||(n.SystemRoot||n.windir||"")+"\\temp":r=n.TMPDIR||n.TMP||n.TEMP||"/tmp",m.test(r)&&(r=r.slice(0,-1)),r}X.exports=Dr
});var K=i(function(yr,J){
var Mr=z();J.exports=Mr
});var s=require('@stdlib/utils/define-read-only-property/dist'),u={};s(u,"ARCH",T());s(u,"BYTE_ORDER",R());s(u,"configdir",w());s(u,"FLOAT_WORD_ORDER",y());s(u,"homedir",c());s(u,"NUM_CPUS",k());s(u,"PLATFORM",q());s(u,"tmpdir",K());module.exports=u;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
