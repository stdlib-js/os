// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).ns={})}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,d=String.prototype.replace,g=/e\+(\d)$/,v=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,m=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function _(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=d.call(t,w,"$1e"),t=d.call(t,b,"e"),t=d.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,g,"e+0$1"),t=d.call(t,v,"e-0$1"),e.alternate&&(t=d.call(t,h,"$1."),t=d.call(t,y,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):s.call(t)}function A(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+A(n):A(n)+e}var j=String.fromCharCode,O=isNaN,T=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,i,a,u,l,s,p;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(f(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function U(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(M(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function x(e){return"string"==typeof e}function R(e){var r,t,n;if(!x(e))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=U(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var L,V=Object.freeze({__proto__:null,default:R}),D=Object.prototype,I=D.toString,N=D.__defineGetter__,C=D.__defineSetter__,F=D.__lookupGetter__,z=D.__lookupSetter__;L=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(F.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=D,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var $=L;function B(e,r,t){$(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}function H(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var G="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function W(){throw new Error("setTimeout has not been defined")}function X(){throw new Error("clearTimeout has not been defined")}var Z=W,Y=X;function q(e){if(Z===setTimeout)return setTimeout(e,0);if((Z===W||!Z)&&setTimeout)return Z=setTimeout,setTimeout(e,0);try{return Z(e,0)}catch(r){try{return Z.call(null,e,0)}catch(r){return Z.call(this,e,0)}}}"function"==typeof G.setTimeout&&(Z=setTimeout),"function"==typeof G.clearTimeout&&(Y=clearTimeout);var J,K=[],Q=!1,ee=-1;function re(){Q&&J&&(Q=!1,J.length?K=J.concat(K):ee=-1,K.length&&te())}function te(){if(!Q){var e=q(re);Q=!0;for(var r=K.length;r;){for(J=K,K=[];++ee<r;)J&&J[ee].run();ee=-1,r=K.length}J=null,Q=!1,function(e){if(Y===clearTimeout)return clearTimeout(e);if((Y===X||!Y)&&clearTimeout)return Y=clearTimeout,clearTimeout(e);try{Y(e)}catch(r){try{return Y.call(null,e)}catch(r){return Y.call(this,e)}}}(e)}}function ne(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];K.push(new ie(e,r)),1!==K.length||Q||q(te)}function ie(e,r){this.fun=e,this.array=r}ie.prototype.run=function(){this.fun.apply(null,this.array)};var oe="browser",ae="browser",ue={},ce=[],fe={},le={},se={};function pe(){}var de=pe,ge=pe,ve=pe,he=pe,ye=pe,me=pe,be=pe;function we(e){throw new Error("process.binding is not supported")}function _e(){return"/"}function Ae(e){throw new Error("process.chdir is not supported")}function Ee(){return 0}var je=G.performance||{},Oe=je.now||je.mozNow||je.msNow||je.oNow||je.webkitNow||function(){return(new Date).getTime()};function Te(e){var r=.001*Oe.call(je),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var ke=new Date;function Se(){return(new Date-ke)/1e3}var Pe={nextTick:ne,title:oe,browser:true,env:ue,argv:ce,version:"",versions:fe,on:de,addListener:ge,once:ve,off:he,removeListener:ye,removeAllListeners:me,emit:be,binding:we,cwd:_e,chdir:Ae,umask:Ee,hrtime:Te,platform:ae,release:le,config:se,uptime:Se},Me=H(Object.freeze({__proto__:null,addListener:ge,argv:ce,binding:we,browser:true,chdir:Ae,config:se,cwd:_e,default:Pe,emit:be,env:ue,hrtime:Te,nextTick:ne,off:he,on:de,once:ve,platform:ae,release:le,removeAllListeners:me,removeListener:ye,title:oe,umask:Ee,uptime:Se,version:"",versions:fe})),Ue=Me.arch;var xe="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Re(){return xe&&"symbol"==typeof Symbol.toStringTag}var Le=Object.prototype.toString;var Ve=Object.prototype.hasOwnProperty;var De="function"==typeof Symbol?Symbol:void 0,Ie="function"==typeof De?De.toStringTag:"";var Ne=Re()?function(e){var r,t,n,i,o;if(null==e)return Le.call(e);t=e[Ie],o=Ie,r=null!=(i=e)&&Ve.call(i,o);try{e[Ie]=void 0}catch(r){return Le.call(e)}return n=Le.call(e),r?e[Ie]=t:delete e[Ie],n}:function(e){return Le.call(e)},Ce="function"==typeof Uint8Array;var Fe="function"==typeof Uint8Array?Uint8Array:null;var ze,$e="function"==typeof Uint8Array?Uint8Array:void 0;ze=function(){var e,r,t;if("function"!=typeof Fe)return!1;try{r=new Fe(r=[1,3.14,-3.14,256,257]),t=r,e=(Ce&&t instanceof Uint8Array||"[object Uint8Array]"===Ne(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?$e:function(){throw new Error("not implemented")};var Be=ze,He="function"==typeof Uint16Array;var Ge="function"==typeof Uint16Array?Uint16Array:null;var We,Xe="function"==typeof Uint16Array?Uint16Array:void 0;We=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge(r=[1,3.14,-3.14,65536,65537]),t=r,e=(He&&t instanceof Uint16Array||"[object Uint16Array]"===Ne(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Xe:function(){throw new Error("not implemented")};var Ze,Ye=We,qe={uint16:Ye,uint8:Be};(Ze=new qe.uint16(1))[0]=4660;var Je,Ke=52===new qe.uint8(Ze.buffer)[0],Qe=H(Object.freeze({__proto__:null,default:Ke})),er={uint16:Ye,uint8:Be};Je=function(){var e;return(e=new er.uint16(1))[0]=4660,52===new er.uint8(e.buffer)[1]}();var rr=Je,tr=H(Object.freeze({__proto__:null,default:rr})),nr=Qe&&tr?"mixed-endian":Qe?"little-endian":tr?"big-endian":"unknown";function ir(e,r){for(var t=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var or=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,ar=function(e){return or.exec(e).slice(1)};function ur(){for(var e="",r=!1,t=arguments.length-1;t>=-1&&!r;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,r="/"===n.charAt(0))}return(r?"/":"")+(e=ir(hr(e.split("/"),(function(e){return!!e})),!r).join("/"))||"."}function cr(e){var r=fr(e),t="/"===yr(e,-1);return(e=ir(hr(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&t&&(e+="/"),(r?"/":"")+e}function fr(e){return"/"===e.charAt(0)}function lr(){var e=Array.prototype.slice.call(arguments,0);return cr(hr(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function sr(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=ur(e).substr(1),r=ur(r).substr(1);for(var n=t(e.split("/")),i=t(r.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(i.slice(a))).join("/")}function pr(e){var r=ar(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function dr(e,r){var t=ar(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function gr(e){return ar(e)[3]}var vr={extname:gr,basename:dr,dirname:pr,sep:"/",delimiter:":",relative:sr,join:lr,isAbsolute:fr,normalize:cr,resolve:ur};function hr(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var yr="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},mr=H(Object.freeze({__proto__:null,resolve:ur,normalize:cr,isAbsolute:fr,join:lr,relative:sr,sep:"/",delimiter:":",dirname:pr,basename:dr,extname:gr,default:vr})),br=Pe.env,wr=H(Object.freeze({__proto__:null,default:br})),_r="win32"===Pe.platform,Ar=H(Object.freeze({__proto__:null,default:_r})),Er=Me.platform;function jr(e,r,t){$(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Or(e){return"string"==typeof e}var Tr=String.prototype.valueOf;var kr=Re();function Sr(e){return"object"==typeof e&&(e instanceof String||(kr?function(e){try{return Tr.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ne(e)))}function Pr(e){return Or(e)||Sr(e)}jr(Pr,"isPrimitive",Or),jr(Pr,"isObject",Sr);var Mr,Ur=H(Object.freeze({__proto__:null,default:Pr,isPrimitive:Or,isObject:Sr}));function xr(){if(void 0===Mr){var e=new ArrayBuffer(2),r=new Uint8Array(e),t=new Uint16Array(e);if(r[0]=1,r[1]=2,258===t[0])Mr="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");Mr="LE"}}return Mr}function Rr(){return void 0!==G.location?G.location.hostname:""}function Lr(){return[]}function Vr(){return 0}function Dr(){return Number.MAX_VALUE}function Ir(){return Number.MAX_VALUE}function Nr(){return[]}function Cr(){return"Browser"}function Fr(){return void 0!==G.navigator?G.navigator.appVersion:""}function zr(){return{}}function $r(){return{}}function Br(){return"javascript"}function Hr(){return"browser"}function Gr(){return"/tmp"}var Wr=Gr;function Xr(){return"$HOME"}var Zr={homedir:Xr,EOL:"\n",arch:Br,platform:Hr,tmpdir:Wr,tmpDir:Gr,networkInterfaces:zr,getNetworkInterfaces:$r,release:Fr,type:Cr,cpus:Nr,totalmem:Ir,freemem:Dr,uptime:Vr,loadavg:Lr,hostname:Rr,endianness:xr},Yr=H(Object.freeze({__proto__:null,endianness:xr,hostname:Rr,loadavg:Lr,uptime:Vr,freemem:Dr,totalmem:Ir,cpus:Nr,type:Cr,release:Fr,networkInterfaces:zr,getNetworkInterfaces:$r,arch:Br,platform:Hr,tmpDir:Gr,tmpdir:Wr,EOL:"\n",homedir:Xr,default:Zr})),qr=/./;function Jr(e){return"boolean"==typeof e}var Kr=Boolean,Qr=Boolean.prototype.toString;var et=Re();function rt(e){return"object"==typeof e&&(e instanceof Kr||(et?function(e){try{return Qr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Ne(e)))}function tt(e){return Jr(e)||rt(e)}function nt(){return new Function("return this;")()}jr(tt,"isPrimitive",Jr),jr(tt,"isObject",rt);var it="object"==typeof self?self:null,ot="object"==typeof window?window:null,at="object"==typeof globalThis?globalThis:null;var ut=function(e){if(arguments.length){if(!Jr(e))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return nt()}if(at)return at;if(it)return it;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")}(),ct=ut.document&&ut.document.childNodes,ft=Int8Array;function lt(){return/^\s*function\s*([^(]*)/i}var st=/^\s*function\s*([^(]*)/i;jr(lt,"REGEXP",st);var pt=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ne(e)};function dt(e){return null!==e&&"object"==typeof e}function gt(e){var r,t,n,i;if(("Object"===(t=Ne(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=st.exec(n.toString()))return r[1]}return dt(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}jr(dt,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pt(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(dt));var vt="function"==typeof qr||"object"==typeof ft||"function"==typeof ct?function(e){return gt(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?gt(e).toLowerCase():r};function ht(e){return"function"===vt(e)}var yt=H(Object.freeze({__proto__:null,default:ht}));var mt=Pe.getuid,bt=ht(mt)?mt:function(){return null},wt=wr,_t=Ar,At=Er,Et=H(Object.freeze({__proto__:null,default:bt}));var jt=function(){var e,r;return _t?(e=wt.USERPROFILE||wt.HOMEDRIVE+wt.HOMEPATH||wt.HOME)||null:(e=wt.HOME)?e:(r=wt.LOGNAME||wt.USER||wt.LNAME||wt.USERNAME,"darwin"===At?r?"/Users/"+r:null:0===Et()?"/root":r?"/home/"+r:null)},Ot=Yr,Tt=jt,kt=yt(Ot.homedir)?Ot.homedir:Tt,St=H(V),Pt=mr.join,Mt=wr,Ut=Ar,xt=Er,Rt=Ur.isPrimitive,Lt=kt,Vt=St;var Dt=function(e){var r,t,n;if(arguments.length){if(!Rt(e))throw new TypeError(Vt("invalid argument. Must provide a string. Value: `%s`.",e));r=e}else r="";return Ut?(n=Mt.LOCALAPPDATA||Mt.APPDATA)?Pt(n,r):null:null===(t=Lt())?null:"darwin"===xt?Pt(t,"Library","Preferences",r):(n=Mt.XDG_CONFIG_HOME||Pt(t,".config"),Pt(n,r))},It=Dt,Nt="little-endian"===nr||"big-endian"===nr?nr:"unknown";var Ct,Ft=("undefined"==typeof navigator?{}:navigator).hardwareConcurrency||1,zt=Ar,$t=wr;Ct=zt?/[^:]\\$/:/.\/$/;var Bt=function(){var e;return e=zt?$t.TEMP||$t.TMP||($t.SystemRoot||$t.windir||"")+"\\temp":$t.TMPDIR||$t.TMP||$t.TEMP||"/tmp",Ct.test(e)&&(e=e.slice(0,-1)),e},Ht={};B(Ht,"ARCH",Ue),B(Ht,"BYTE_ORDER",nr),B(Ht,"configdir",It),B(Ht,"FLOAT_WORD_ORDER",Nt),B(Ht,"homedir",kt),B(Ht,"NUM_CPUS",Ft),B(Ht,"PLATFORM",Er),B(Ht,"tmpdir",Bt),e.ARCH=Ue,e.BYTE_ORDER=nr,e.FLOAT_WORD_ORDER=Nt,e.NUM_CPUS=Ft,e.PLATFORM=Er,e.configdir=It,e.default=Ht,e.homedir=kt,e.tmpdir=Bt,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=browser.js.map
