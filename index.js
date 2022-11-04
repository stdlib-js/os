// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}function n(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(o):i(o)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function c(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,d=String.prototype.replace,g=/e\+(\d)$/,v=/e-(\d)$/,h=/^(\d+)$/,m=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function _(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=d.call(t,w,"$1e"),t=d.call(t,b,"e"),t=d.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,g,"e+0$1"),t=d.call(t,v,"e-0$1"),e.alternate&&(t=d.call(t,h,"$1."),t=d.call(t,m,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===p.call(e.specifier)?p.call(t):s.call(t)}function A(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function E(e,r,t){var n=r-e.length;return n<0?e:e=t?e+A(n):A(n)+e}var j=String.fromCharCode,T=isNaN,O=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,i,a,u,l,s,p;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",l=1,s=0;s<e.length;s++)if(f(n=e[s]))u+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,T(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),u+=n.arg||"",l+=1}return u}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function U(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function M(e){return"string"==typeof e}function L(e){var r,t,n;if(!M(e))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=U(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return S.apply(null,t)}var R,V=Object.freeze({__proto__:null,default:L}),I=Object.prototype,N=I.toString,z=I.__defineGetter__,D=I.__defineSetter__,F=I.__lookupGetter__,$=I.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(F.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(e,r,t.get),a&&D&&D.call(e,r,t.set),e};var C=R;function B(e,r,t){C(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var G="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function H(){throw new Error("setTimeout has not been defined")}function X(){throw new Error("clearTimeout has not been defined")}var W=H,Z=X;function Y(e){if(W===setTimeout)return setTimeout(e,0);if((W===H||!W)&&setTimeout)return W=setTimeout,setTimeout(e,0);try{return W(e,0)}catch(r){try{return W.call(null,e,0)}catch(r){return W.call(this,e,0)}}}"function"==typeof G.setTimeout&&(W=setTimeout),"function"==typeof G.clearTimeout&&(Z=clearTimeout);var q,J=[],K=!1,Q=-1;function ee(){K&&q&&(K=!1,q.length?J=q.concat(J):Q=-1,J.length&&re())}function re(){if(!K){var e=Y(ee);K=!0;for(var r=J.length;r;){for(q=J,J=[];++Q<r;)q&&q[Q].run();Q=-1,r=J.length}q=null,K=!1,function(e){if(Z===clearTimeout)return clearTimeout(e);if((Z===X||!Z)&&clearTimeout)return Z=clearTimeout,clearTimeout(e);try{Z(e)}catch(r){try{return Z.call(null,e)}catch(r){return Z.call(this,e)}}}(e)}}function te(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];J.push(new ne(e,r)),1!==J.length||K||Y(re)}function ne(e,r){this.fun=e,this.array=r}ne.prototype.run=function(){this.fun.apply(null,this.array)};var ie="browser",oe="browser",ae={},ue=[],ce={},fe={},le={};function se(){}var pe=se,de=se,ge=se,ve=se,he=se,me=se,ye=se;function be(e){throw new Error("process.binding is not supported")}function we(){return"/"}function _e(e){throw new Error("process.chdir is not supported")}function Ae(){return 0}var Ee=G.performance||{},je=Ee.now||Ee.mozNow||Ee.msNow||Ee.oNow||Ee.webkitNow||function(){return(new Date).getTime()};function Te(e){var r=.001*je.call(Ee),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var Oe=new Date;function ke(){return(new Date-Oe)/1e3}var Se={nextTick:te,title:ie,browser:true,env:ae,argv:ue,version:"",versions:ce,on:pe,addListener:de,once:ge,off:ve,removeListener:he,removeAllListeners:me,emit:ye,binding:be,cwd:we,chdir:_e,umask:Ae,hrtime:Te,platform:oe,release:fe,config:le,uptime:ke},Pe=t(Object.freeze({__proto__:null,addListener:de,argv:ue,binding:be,browser:true,chdir:_e,config:le,cwd:we,default:Se,emit:ye,env:ae,hrtime:Te,nextTick:te,off:ve,on:pe,once:ge,platform:oe,release:fe,removeAllListeners:me,removeListener:he,title:ie,umask:Ae,uptime:ke,version:"",versions:ce})),xe=Pe.arch;var Ue="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Me(){return Ue&&"symbol"==typeof Symbol.toStringTag}var Le=Object.prototype.toString;var Re=Object.prototype.hasOwnProperty;var Ve="function"==typeof Symbol?Symbol:void 0,Ie="function"==typeof Ve?Ve.toStringTag:"";var Ne=Me()?function(e){var r,t,n,i,o;if(null==e)return Le.call(e);t=e[Ie],o=Ie,r=null!=(i=e)&&Re.call(i,o);try{e[Ie]=void 0}catch(r){return Le.call(e)}return n=Le.call(e),r?e[Ie]=t:delete e[Ie],n}:function(e){return Le.call(e)},ze="function"==typeof Uint8Array;var De="function"==typeof Uint8Array?Uint8Array:null;var Fe,$e="function"==typeof Uint8Array?Uint8Array:void 0;Fe=function(){var e,r,t;if("function"!=typeof De)return!1;try{r=new De(r=[1,3.14,-3.14,256,257]),t=r,e=(ze&&t instanceof Uint8Array||"[object Uint8Array]"===Ne(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?$e:function(){throw new Error("not implemented")};var Ce=Fe,Be="function"==typeof Uint16Array;var Ge="function"==typeof Uint16Array?Uint16Array:null;var He,Xe="function"==typeof Uint16Array?Uint16Array:void 0;He=function(){var e,r,t;if("function"!=typeof Ge)return!1;try{r=new Ge(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Be&&t instanceof Uint16Array||"[object Uint16Array]"===Ne(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Xe:function(){throw new Error("not implemented")};var We,Ze=He,Ye={uint16:Ze,uint8:Ce};(We=new Ye.uint16(1))[0]=4660;var qe,Je=52===new Ye.uint8(We.buffer)[0],Ke=t(Object.freeze({__proto__:null,default:Je})),Qe={uint16:Ze,uint8:Ce};qe=function(){var e;return(e=new Qe.uint16(1))[0]=4660,52===new Qe.uint8(e.buffer)[1]}();var er=qe,rr=t(Object.freeze({__proto__:null,default:er})),tr=Ke&&rr?"mixed-endian":Ke?"little-endian":rr?"big-endian":"unknown";function nr(e,r){for(var t=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var ir=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,or=function(e){return ir.exec(e).slice(1)};function ar(){for(var e="",r=!1,t=arguments.length-1;t>=-1&&!r;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,r="/"===n.charAt(0))}return(r?"/":"")+(e=nr(vr(e.split("/"),(function(e){return!!e})),!r).join("/"))||"."}function ur(e){var r=cr(e),t="/"===hr(e,-1);return(e=nr(vr(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&t&&(e+="/"),(r?"/":"")+e}function cr(e){return"/"===e.charAt(0)}function fr(){var e=Array.prototype.slice.call(arguments,0);return ur(vr(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function lr(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=ar(e).substr(1),r=ar(r).substr(1);for(var n=t(e.split("/")),i=t(r.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(i.slice(a))).join("/")}function sr(e){var r=or(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function pr(e,r){var t=or(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function dr(e){return or(e)[3]}var gr={extname:dr,basename:pr,dirname:sr,sep:"/",delimiter:":",relative:lr,join:fr,isAbsolute:cr,normalize:ur,resolve:ar};function vr(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var hr="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},mr=t(Object.freeze({__proto__:null,resolve:ar,normalize:ur,isAbsolute:cr,join:fr,relative:lr,sep:"/",delimiter:":",dirname:sr,basename:pr,extname:dr,default:gr})),yr=Pe.env,br=t(Object.freeze({__proto__:null,default:yr})),wr="win32"===Pe.platform,_r=t(Object.freeze({__proto__:null,default:wr})),Ar=Pe.platform;function Er(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function jr(e){return"string"==typeof e}var Tr=String.prototype.valueOf;var Or=Me();function kr(e){return"object"==typeof e&&(e instanceof String||(Or?function(e){try{return Tr.call(e),!0}catch(e){return!1}}(e):"[object String]"===Ne(e)))}function Sr(e){return jr(e)||kr(e)}Er(Sr,"isPrimitive",jr),Er(Sr,"isObject",kr);var Pr,xr=t(Object.freeze({__proto__:null,default:Sr,isPrimitive:jr,isObject:kr}));function Ur(){if(void 0===Pr){var e=new ArrayBuffer(2),r=new Uint8Array(e),t=new Uint16Array(e);if(r[0]=1,r[1]=2,258===t[0])Pr="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");Pr="LE"}}return Pr}function Mr(){return void 0!==G.location?G.location.hostname:""}function Lr(){return[]}function Rr(){return 0}function Vr(){return Number.MAX_VALUE}function Ir(){return Number.MAX_VALUE}function Nr(){return[]}function zr(){return"Browser"}function Dr(){return void 0!==G.navigator?G.navigator.appVersion:""}function Fr(){return{}}function $r(){return{}}function Cr(){return"javascript"}function Br(){return"browser"}function Gr(){return"/tmp"}var Hr=Gr;function Xr(){return"$HOME"}var Wr={homedir:Xr,EOL:"\n",arch:Cr,platform:Br,tmpdir:Hr,tmpDir:Gr,networkInterfaces:Fr,getNetworkInterfaces:$r,release:Dr,type:zr,cpus:Nr,totalmem:Ir,freemem:Vr,uptime:Rr,loadavg:Lr,hostname:Mr,endianness:Ur},Zr=t(Object.freeze({__proto__:null,endianness:Ur,hostname:Mr,loadavg:Lr,uptime:Rr,freemem:Vr,totalmem:Ir,cpus:Nr,type:zr,release:Dr,networkInterfaces:Fr,getNetworkInterfaces:$r,arch:Cr,platform:Br,tmpDir:Gr,tmpdir:Hr,EOL:"\n",homedir:Xr,default:Wr})),Yr=/./;function qr(e){return"boolean"==typeof e}var Jr=Boolean,Kr=Boolean.prototype.toString;var Qr=Me();function et(e){return"object"==typeof e&&(e instanceof Jr||(Qr?function(e){try{return Kr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Ne(e)))}function rt(e){return qr(e)||et(e)}function tt(){return new Function("return this;")()}Er(rt,"isPrimitive",qr),Er(rt,"isObject",et);var nt="object"==typeof self?self:null,it="object"==typeof window?window:null,ot="object"==typeof G?G:null,at="object"==typeof globalThis?globalThis:null;var ut=function(e){if(arguments.length){if(!qr(e))throw new TypeError(L("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return tt()}if(at)return at;if(nt)return nt;if(it)return it;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")}(),ct=ut.document&&ut.document.childNodes,ft=Int8Array;function lt(){return/^\s*function\s*([^(]*)/i}var st=/^\s*function\s*([^(]*)/i;Er(lt,"REGEXP",st);var pt=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ne(e)};function dt(e){return null!==e&&"object"==typeof e}function gt(e){var r,t,n,i;if(("Object"===(t=Ne(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=st.exec(n.toString()))return r[1]}return dt(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Er(dt,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(L("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pt(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(dt));var vt="function"==typeof Yr||"object"==typeof ft||"function"==typeof ct?function(e){return gt(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?gt(e).toLowerCase():r};function ht(e){return"function"===vt(e)}var mt=t(Object.freeze({__proto__:null,default:ht}));var yt=Pe.getuid,bt=ht(yt)?yt:function(){return null},wt=br,_t=_r,At=Ar,Et=t(Object.freeze({__proto__:null,default:bt}));var jt=function(){var e,r;return _t?(e=wt.USERPROFILE||wt.HOMEDRIVE+wt.HOMEPATH||wt.HOME)||null:(e=wt.HOME)?e:(r=wt.LOGNAME||wt.USER||wt.LNAME||wt.USERNAME,"darwin"===At?r?"/Users/"+r:null:0===Et()?"/root":r?"/home/"+r:null)},Tt=Zr,Ot=jt,kt=mt(Tt.homedir)?Tt.homedir:Ot,St=t(V),Pt=mr.join,xt=br,Ut=_r,Mt=Ar,Lt=xr.isPrimitive,Rt=kt,Vt=St;var It=function(e){var r,t,n;if(arguments.length){if(!Lt(e))throw new TypeError(Vt("invalid argument. Must provide a string. Value: `%s`.",e));r=e}else r="";return Ut?(n=xt.LOCALAPPDATA||xt.APPDATA)?Pt(n,r):null:null===(t=Rt())?null:"darwin"===Mt?Pt(t,"Library","Preferences",r):(n=xt.XDG_CONFIG_HOME||Pt(t,".config"),Pt(n,r))},Nt=It,zt="little-endian"===tr||"big-endian"===tr?tr:"unknown";var Dt,Ft=Zr.cpus().length,$t=_r,Ct=br;Dt=$t?/[^:]\\$/:/.\/$/;var Bt=function(){var e;return e=$t?Ct.TEMP||Ct.TMP||(Ct.SystemRoot||Ct.windir||"")+"\\temp":Ct.TMPDIR||Ct.TMP||Ct.TEMP||"/tmp",Dt.test(e)&&(e=e.slice(0,-1)),e},Gt={};return B(Gt,"ARCH",xe),B(Gt,"BYTE_ORDER",tr),B(Gt,"configdir",Nt),B(Gt,"FLOAT_WORD_ORDER",zt),B(Gt,"homedir",kt),B(Gt,"NUM_CPUS",Ft),B(Gt,"PLATFORM",Ar),B(Gt,"tmpdir",Bt),Gt}));
//# sourceMappingURL=index.js.map
