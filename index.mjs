// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-big-endian@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/process-env@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-windows@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/process-getuid@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";function l(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var f="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function c(){throw new Error("setTimeout has not been defined")}function m(){throw new Error("clearTimeout has not been defined")}var d=c,p=m;function h(e){if(d===setTimeout)return setTimeout(e,0);if((d===c||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}"function"==typeof f.setTimeout&&(d=setTimeout),"function"==typeof f.clearTimeout&&(p=clearTimeout);var v,g=[],w=!1,b=-1;function j(){w&&v&&(w=!1,v.length?g=v.concat(g):b=-1,g.length&&y())}function y(){if(!w){var e=h(j);w=!0;for(var t=g.length;t;){for(v=g,g=[];++b<t;)v&&v[b].run();b=-1,t=g.length}v=null,w=!1,function(e){if(p===clearTimeout)return clearTimeout(e);if((p===m||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}(e)}}function E(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];g.push(new T(e,t)),1!==g.length||w||h(y)}function T(e,t){this.fun=e,this.array=t}T.prototype.run=function(){this.fun.apply(null,this.array)};var A="browser",O="browser",_={},M=[],L={},R={},D={};function P(){}var x=P,k=P,N=P,U=P,H=P,I=P,z=P;function S(e){throw new Error("process.binding is not supported")}function B(){return"/"}function C(e){throw new Error("process.chdir is not supported")}function F(){return 0}var V=f.performance||{},$=V.now||V.mozNow||V.msNow||V.oNow||V.webkitNow||function(){return(new Date).getTime()};function G(e){var t=.001*$.call(V),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]}var X=new Date;function W(){return(new Date-X)/1e3}var Y={nextTick:E,title:A,browser:true,env:_,argv:M,version:"",versions:L,on:x,addListener:k,once:N,off:U,removeListener:H,removeAllListeners:I,emit:z,binding:S,cwd:B,chdir:C,umask:F,hrtime:G,platform:O,release:R,config:D,uptime:W},q=l(Object.freeze({__proto__:null,addListener:k,argv:M,binding:S,browser:true,chdir:C,config:D,cwd:B,default:Y,emit:z,env:_,hrtime:G,nextTick:E,off:U,on:x,once:N,platform:O,release:R,removeAllListeners:I,removeListener:H,title:A,umask:F,uptime:W,version:"",versions:L})),J=q.arch,K=t&&r?"mixed-endian":t?"little-endian":r?"big-endian":"unknown";function Q(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}var Z=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,ee=function(e){return Z.exec(e).slice(1)};function te(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var n=r>=0?arguments[r]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(e=n+"/"+e,t="/"===n.charAt(0))}return(t?"/":"")+(e=Q(fe(e.split("/"),(function(e){return!!e})),!t).join("/"))||"."}function re(e){var t=ne(e),r="/"===me(e,-1);return(e=Q(fe(e.split("/"),(function(e){return!!e})),!t).join("/"))||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e}function ne(e){return"/"===e.charAt(0)}function ie(){return re(fe(Array.prototype.slice.call(arguments,0),(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))}function oe(e,t){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=te(e).substr(1),t=te(t).substr(1);for(var n=r(e.split("/")),i=r(t.split("/")),o=Math.min(n.length,i.length),s=o,u=0;u<o;u++)if(n[u]!==i[u]){s=u;break}var a=[];for(u=s;u<n.length;u++)a.push("..");return(a=a.concat(i.slice(s))).join("/")}function se(e){var t=ee(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."}function ue(e,t){var r=ee(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r}function ae(e){return ee(e)[3]}var le={extname:ae,basename:ue,dirname:se,sep:"/",delimiter:":",relative:oe,join:ie,isAbsolute:ne,normalize:re,resolve:te};function fe(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}var ce,me="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)},de=l(Object.freeze({__proto__:null,basename:ue,default:le,delimiter:":",dirname:se,extname:ae,isAbsolute:ne,join:ie,normalize:re,relative:oe,resolve:te,sep:"/"})),pe=q.platform;function he(){if(void 0===ce){var e=new ArrayBuffer(2),t=new Uint8Array(e),r=new Uint16Array(e);if(t[0]=1,t[1]=2,258===r[0])ce="BE";else{if(513!==r[0])throw new Error("unable to figure out endianess");ce="LE"}}return ce}function ve(){return void 0!==f.location?f.location.hostname:""}function ge(){return[]}function we(){return 0}function be(){return Number.MAX_VALUE}function je(){return Number.MAX_VALUE}function ye(){return[]}function Ee(){return"Browser"}function Te(){return void 0!==f.navigator?f.navigator.appVersion:""}function Ae(){return{}}function Oe(){return{}}function _e(){return"javascript"}function Me(){return"browser"}function Le(){return"/tmp"}var Re=Le;function De(){return"$HOME"}var Pe={homedir:De,EOL:"\n",arch:_e,platform:Me,tmpdir:Re,tmpDir:Le,networkInterfaces:Ae,getNetworkInterfaces:Oe,release:Te,type:Ee,cpus:ye,totalmem:je,freemem:be,uptime:we,loadavg:ge,hostname:ve,endianness:he};var xe=l(Object.freeze({__proto__:null,EOL:"\n",arch:_e,cpus:ye,default:Pe,endianness:he,freemem:be,getNetworkInterfaces:Oe,homedir:De,hostname:ve,loadavg:ge,networkInterfaces:Ae,platform:Me,release:Te,tmpDir:Le,tmpdir:Re,totalmem:je,type:Ee,uptime:we})),ke=s(xe.homedir)?xe.homedir:function(){var e,t;return i?(e=n.USERPROFILE||n.HOMEDRIVE+n.HOMEPATH||n.HOME)||null:(e=n.HOME)?e:(t=n.LOGNAME||n.USER||n.LNAME||n.USERNAME,"darwin"===pe?t?"/Users/"+t:null:0===u()?"/root":t?"/home/"+t:null)},Ne=de.join;function Ue(e){var t,r,s;if(arguments.length){if(!o(e))throw new TypeError(a("invalid argument. Must provide a string. Value: `%s`.",e));t=e}else t="";return i?(s=n.LOCALAPPDATA||n.APPDATA)?Ne(s,t):null:null===(r=ke())?null:"darwin"===pe?Ne(r,"Library","Preferences",t):(s=n.XDG_CONFIG_HOME||Ne(r,".config"),Ne(s,t))}var He="little-endian"===K||"big-endian"===K?K:"unknown";var Ie,ze=("undefined"==typeof navigator?{}:navigator).hardwareConcurrency||1;function Se(){var e;return e=i?n.TEMP||n.TMP||(n.SystemRoot||n.windir||"")+"\\temp":n.TMPDIR||n.TMP||n.TEMP||"/tmp",Ie.test(e)&&(e=e.slice(0,-1)),e}Ie=i?/[^:]\\$/:/.\/$/;var Be={};e(Be,"ARCH",J),e(Be,"BYTE_ORDER",K),e(Be,"configdir",Ue),e(Be,"FLOAT_WORD_ORDER",He),e(Be,"homedir",ke),e(Be,"NUM_CPUS",ze),e(Be,"PLATFORM",pe),e(Be,"tmpdir",Se);export{J as ARCH,K as BYTE_ORDER,He as FLOAT_WORD_ORDER,ze as NUM_CPUS,pe as PLATFORM,Ue as configdir,Be as default,ke as homedir,Se as tmpdir};
//# sourceMappingURL=index.mjs.map
