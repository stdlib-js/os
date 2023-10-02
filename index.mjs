// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-big-endian@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/process-getuid@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.0-esm/index.mjs";function l(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var f="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function c(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}var d=c,p=m;function h(e){if(d===setTimeout)return setTimeout(e,0);if((d===c||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(r){try{return d.call(null,e,0)}catch(r){return d.call(this,e,0)}}}"function"==typeof f.setTimeout&&(d=setTimeout),"function"==typeof f.clearTimeout&&(p=clearTimeout);var v,g=[],w=!1,b=-1;function j(){w&&v&&(w=!1,v.length?g=v.concat(g):b=-1,g.length&&y())}function y(){if(!w){var e=h(j);w=!0;for(var r=g.length;r;){for(v=g,g=[];++b<r;)v&&v[b].run();b=-1,r=g.length}v=null,w=!1,function(e){if(p===clearTimeout)return clearTimeout(e);if((p===m||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{p(e)}catch(r){try{return p.call(null,e)}catch(r){return p.call(this,e)}}}(e)}}function E(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];g.push(new T(e,r)),1!==g.length||w||h(y)}function T(e,r){this.fun=e,this.array=r}T.prototype.run=function(){this.fun.apply(null,this.array)};var A={},O=[],_={},M={},L={};function R(){}var D=R,P=R,x=R,k=R,N=R,U=R,H=R;function I(e){throw new Error("process.binding is not supported")}function z(){return"/"}function F(e){throw new Error("process.chdir is not supported")}function S(){return 0}var B=f.performance||{},C=B.now||B.mozNow||B.msNow||B.oNow||B.webkitNow||function(){return(new Date).getTime()};function V(e){var r=.001*C.call(B),t=Math.floor(r),n=Math.floor(r%1*1e9);return e&&(t-=e[0],(n-=e[1])<0&&(t--,n+=1e9)),[t,n]}var $=new Date;function G(){return(new Date-$)/1e3}var X={nextTick:E,title:"browser",browser:true,env:A,argv:O,version:"",versions:_,on:D,addListener:P,once:x,off:k,removeListener:N,removeAllListeners:U,emit:H,binding:I,cwd:z,chdir:F,umask:S,hrtime:V,platform:"browser",release:M,config:L,uptime:G},W=l(Object.freeze({__proto__:null,addListener:P,argv:O,binding:I,browser:true,chdir:F,config:L,cwd:z,default:X,emit:H,env:A,hrtime:V,nextTick:E,off:k,on:D,once:x,platform:"browser",release:M,removeAllListeners:U,removeListener:N,title:"browser",umask:S,uptime:G,version:"",versions:_})),Y=W.arch,q=r&&t?"mixed-endian":r?"little-endian":t?"big-endian":"unknown";function J(e,r){for(var t=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),t++):t&&(e.splice(n,1),t--)}if(r)for(;t--;t)e.unshift("..");return e}var K=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,Q=function(e){return K.exec(e).slice(1)};function Z(){for(var e="",r=!1,t=arguments.length-1;t>=-1&&!r;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,r="/"===n.charAt(0))}return(r?"/":"")+(e=J(ae(e.split("/"),(function(e){return!!e})),!r).join("/"))||"."}function ee(e){var r=re(e),t="/"===fe(e,-1);return(e=J(ae(e.split("/"),(function(e){return!!e})),!r).join("/"))||r||(e="."),e&&t&&(e+="/"),(r?"/":"")+e}function re(e){return"/"===e.charAt(0)}function te(){var e=Array.prototype.slice.call(arguments,0);return ee(ae(e,(function(e,r){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function ne(e,r){function t(e){for(var r=0;r<e.length&&""===e[r];r++);for(var t=e.length-1;t>=0&&""===e[t];t--);return r>t?[]:e.slice(r,t-r+1)}e=Z(e).substr(1),r=Z(r).substr(1);for(var n=t(e.split("/")),i=t(r.split("/")),o=Math.min(n.length,i.length),s=o,u=0;u<o;u++)if(n[u]!==i[u]){s=u;break}var a=[];for(u=s;u<n.length;u++)a.push("..");return(a=a.concat(i.slice(s))).join("/")}function ie(e){var r=Q(e),t=r[0],n=r[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function oe(e,r){var t=Q(e)[2];return r&&t.substr(-1*r.length)===r&&(t=t.substr(0,t.length-r.length)),t}function se(e){return Q(e)[3]}var ue={extname:se,basename:oe,dirname:ie,sep:"/",delimiter:":",relative:ne,join:te,isAbsolute:re,normalize:ee,resolve:Z};function ae(e,r){if(e.filter)return e.filter(r);for(var t=[],n=0;n<e.length;n++)r(e[n],n,e)&&t.push(e[n]);return t}var le,fe="b"==="ab".substr(-1)?function(e,r,t){return e.substr(r,t)}:function(e,r,t){return r<0&&(r=e.length+r),e.substr(r,t)},ce=l(Object.freeze({__proto__:null,basename:oe,default:ue,delimiter:":",dirname:ie,extname:se,isAbsolute:re,join:te,normalize:ee,relative:ne,resolve:Z,sep:"/"})),me=W.platform;function de(){if(void 0===le){var e=new ArrayBuffer(2),r=new Uint8Array(e),t=new Uint16Array(e);if(r[0]=1,r[1]=2,258===t[0])le="BE";else{if(513!==t[0])throw new Error("unable to figure out endianess");le="LE"}}return le}function pe(){return void 0!==f.location?f.location.hostname:""}function he(){return[]}function ve(){return 0}function ge(){return Number.MAX_VALUE}function we(){return Number.MAX_VALUE}function be(){return[]}function je(){return"Browser"}function ye(){return void 0!==f.navigator?f.navigator.appVersion:""}function Ee(){return{}}function Te(){return{}}function Ae(){return"javascript"}function Oe(){return"browser"}function _e(){return"/tmp"}var Me=_e;function Le(){return"$HOME"}var Re={homedir:Le,EOL:"\n",arch:Ae,platform:Oe,tmpdir:Me,tmpDir:_e,networkInterfaces:Ee,getNetworkInterfaces:Te,release:ye,type:je,cpus:be,totalmem:we,freemem:ge,uptime:ve,loadavg:he,hostname:pe,endianness:de};var De=l(Object.freeze({__proto__:null,EOL:"\n",arch:Ae,cpus:be,default:Re,endianness:de,freemem:ge,getNetworkInterfaces:Te,homedir:Le,hostname:pe,loadavg:he,networkInterfaces:Ee,platform:Oe,release:ye,tmpDir:_e,tmpdir:Me,totalmem:we,type:je,uptime:ve})),Pe=s(De.homedir)?De.homedir:function(){var e,r;return i?(e=n.USERPROFILE||n.HOMEDRIVE+n.HOMEPATH||n.HOME)||null:(e=n.HOME)?e:(r=n.LOGNAME||n.USER||n.LNAME||n.USERNAME,"darwin"===me?r?"/Users/"+r:null:0===u()?"/root":r?"/home/"+r:null)},xe=ce.join;function ke(e){var r,t,s;if(arguments.length){if(!o(e))throw new TypeError(a("invalid argument. Must provide a string. Value: `%s`.",e));r=e}else r="";return i?(s=n.LOCALAPPDATA||n.APPDATA)?xe(s,r):null:null===(t=Pe())?null:"darwin"===me?xe(t,"Library","Preferences",r):(s=n.XDG_CONFIG_HOME||xe(t,".config"),xe(s,r))}var Ne="little-endian"===q||"big-endian"===q?q:"unknown";var Ue,He=("undefined"==typeof navigator?{}:navigator).hardwareConcurrency||1;function Ie(){var e;return e=i?n.TEMP||n.TMP||(n.SystemRoot||n.windir||"")+"\\temp":n.TMPDIR||n.TMP||n.TEMP||"/tmp",Ue.test(e)&&(e=e.slice(0,-1)),e}Ue=i?/[^:]\\$/:/.\/$/;var ze={};e(ze,"ARCH",Y),e(ze,"BYTE_ORDER",q),e(ze,"configdir",ke),e(ze,"FLOAT_WORD_ORDER",Ne),e(ze,"homedir",Pe),e(ze,"NUM_CPUS",He),e(ze,"PLATFORM",me),e(ze,"tmpdir",Ie);export{Y as ARCH,q as BYTE_ORDER,Ne as FLOAT_WORD_ORDER,He as NUM_CPUS,me as PLATFORM,ke as configdir,ze as default,Pe as homedir,Ie as tmpdir};
//# sourceMappingURL=index.mjs.map
