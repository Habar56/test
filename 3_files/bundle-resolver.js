(function(){var INSTALL_TTM_SCRIPTS_PARAMS={"account":"tinkoff-pwa","container":"edu","hash":"4a4d7f6f-0aa2-48a1-b78d-37bfad94dce1","storageUrl":"https://acdn.tinkoff.ru/twa/ttm"};(function(){var r="https://acdn.tinkoff.ru/twa/ttm/polyfills/polyfills-v1.js",o=!1,n=function(){(function(){var d=function(t,o){return function(){return t&&(o=t(t=0)),o}};var j=function(t,o){return function(){return o||t((o={exports:{}}).exports,o),o.exports}};var p,y,g,_,L,w,m,T=d(function(){p="ttm",y="_ttm",g={BUILD_ID:"buildId",LOGGER:"logger",BUNDLES:"bundles",RUNTIME_API:"$",RUN:"run"},_={INSTALLED:"ttm-installed"},L="_",w="ttmBuild",m={PUBLICATIONS:"publications",PROD_BUILDS:"builds",ENVIRONMENTS:"environments"}});var k,F,E,R=d(function(){T();k=function(t,o){var e,a,r,i;return(i=(a=(e=t.split(o)[1])===null||e===void 0?void 0:e.split("="))===null||a===void 0||(r=a[1])===null||r===void 0?void 0:r.split("&"))===null||i===void 0?void 0:i[0]},F=function(t){var o=k(t,w);if(!o)return null;var e=o.split(L);if(e.length!==3&&e.length!==4)return null;var a=e[0],r=e[1],i=e[2],n=e.length===4?e[3]:null;return{hash:a,container:i,env:n,account:r}},E=function(t){var o=t.account,e=t.container,a=t.hash,r=t.storageUrl,i="".concat(r,"/").concat(o,"/").concat(m.PROD_BUILDS,"/").concat(e,"/").concat(a),n="".concat(o,"/").concat(e,"/").concat(a),s=F(window.location.search);return s&&(s.env===null?i="".concat(r,"/").concat(s.account,"/").concat(m.PROD_BUILDS,"/").concat(s.container,"/").concat(s.hash):i="".concat(r,"/").concat(s.account,"/").concat(m.ENVIRONMENTS,"/").concat(s.env,"/").concat(s.container,"/").concat(s.hash),n="".concat(s.env?"".concat(s.env,":"):"").concat(s.account,"/").concat(s.container,"/").concat(s.hash)),{src:"".concat(i,"/ttm.js"),buildId:n}}});var P,D=d(function(){P=function(t,o){window.addEventListener("error",function(e){try{if(typeof e!="object"||!e)return;var a=e.error,r=e.filename,i=e.lineno,n=e.colno,s=e.message;(typeof r=="string"&&r&&r.includes(t)||a&&typeof a=="object"&&typeof a.stack=="string"&&a.stack.includes(t))&&o.error({message:s,lineno:i,colno:n},"unhandled-error")}catch(l){}}),window.addEventListener("unhandledrejection",function(e){try{if(!e||typeof e!="object"||!e.reason||typeof e.reason!="object")return;var a=e.reason.stack;typeof a=="string"&&a.includes(t)&&o.error(e.reason,"unhandled-rejection")}catch(r){}})}});var M,A,v=d(function(){M=function(t){try{return typeof window=="undefined"||!window.localStorage||typeof window.localStorage.getItem!="function"?null:window.localStorage.getItem(t)}catch(o){return null}},A=function(t){return new Promise(function(o,e){var a=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.src=t,r.crossOrigin="anonymous",a.appendChild(r),r.onload=function(){return o(r)},r.onerror=function(){return e(new Error("Error when loading ".concat(t," script")))}})}});function V(t,o){return o!=null&&typeof Symbol!="undefined"&&o[Symbol.hasInstance]?!!o[Symbol.hasInstance](t):t instanceof o}var h,B,x,C=d(function(){h=function(t){try{return JSON.stringify(t)}catch(o){return"Stringify error while log try"}},B=function(t){return V(t,Error)?{message:t.message,name:t.name,stack:t.stack}:t},x=function(t){return t&&typeof t=="object"&&"message"in t?t.message:null}});function Y(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}var N,O=d(function(){v();C();N=function t(o,e,a){"use strict";var r=this;Y(this,t),this.account=o,this.container=e,this.buildId=a,this.loggerUrl="https://www.tinkoff.ru/api/front/log/collect",this.loggerLocalStorageFlagName="_ttm_logger_",this.sendErrorProbability=1,this.sendDataProbability=.01,this.errorsLimit=20,this.errorsByTypes={},this.messageTypeColorMap={error:"red",info:"lightgray",data:"darkblue"},this.stdout=function(i,n,s){try{if(!M(r.loggerLocalStorageFlagName))return;console.log("%c%s","background-color: ".concat(r.messageTypeColorMap[i],"; color: white; padding: 2px 5px; border-radius: 5px; font-weight: 600; font-size: 12px;"),"TTM:".concat(i).concat(s?":".concat(s):""),n)}catch(l){}},this.sendLog=function(i,n,s){Math.random()>i||fetch(r.loggerUrl,{method:"POST",keepalive:!0,headers:{"Content-type":"application/json"},body:h({system:"ttm",appName:"ttm",component:"ttm",level:n,from:"browser",ttmInfo:{account:r.account,container:r.container,buildId:r.buildId,session:r.session},ttmData:s})}).catch(function(){return null})},this.error=function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"runtime-error";try{if(r.stdout("error",i,n),r.errorsByTypes[n]||(r.errorsByTypes[n]=0),r.errorsByTypes[n]+=1,r.errorsByTypes[n]===r.errorsLimit){var s={type:n,errorLimit:r.errorsLimit};r.stdout("data",s,"error-limit-exceeded"),r.sendLog(1,"info",{type:"error-limit-exceeded",data:h(s)})}if(r.errorsByTypes[n]>=r.errorsLimit)return;r.sendLog(r.sendErrorProbability,"error",{type:n,message:x(i),data:h(B(i))})}catch(l){}},this.data=function(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"data";try{r.stdout("data",i,n),r.sendLog(r.sendDataProbability,"info",{type:n,data:h(i)})}catch(s){}},this.info=function(i){r.stdout("info",i)},this.session="ttm-".concat(Date.now(),"-").concat(Math.round(Math.random()*1e5))}});var q=j(function(b){R();D();T();O();v();function U(t,o,e,a,r,i,n){try{var s=t[i](n),l=s.value}catch(c){e(c);return}s.done?o(l):Promise.resolve(l).then(a,r)}function z(t){return function(){var o=this,e=arguments;return new Promise(function(a,r){var i=t.apply(o,e);function n(l){U(i,a,r,n,s,"next",l)}function s(l){U(i,a,r,n,s,"throw",l)}n(void 0)})}}function G(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var J=b&&b.__generator||function(t,o){var e,a,r,i,n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(u){return l([c,u])}}function l(c){if(e)throw new TypeError("Generator is already executing.");for(;n;)try{if(e=1,a&&(r=c[0]&2?a.return:c[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,c[1])).done)return r;switch(a=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,a=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=o.call(t,n)}catch(u){c=[6,u],a=0}finally{e=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},$=function(){var t=z(function(){var o,e,a,r,i,n,s,l,c,u,S;return J(this,function(f){switch(f.label){case 0:o="",e="",a="",r="",i="";try{o=INSTALL_TTM_SCRIPTS_PARAMS.account,e=INSTALL_TTM_SCRIPTS_PARAMS.container,a=INSTALL_TTM_SCRIPTS_PARAMS.storageUrl,n=E(INSTALL_TTM_SCRIPTS_PARAMS),s=n.src,l=n.buildId,r=s,i=l}catch(I){}if(c=new N(o,e,i),c.data({},"ttm-started"),!o||!e||!i)return c.error({message:"Empty build data"},"installation-error"),[2];window[p]=window[p]||[],window[y]=(u={},G(u,g.BUILD_ID,i),G(u,g.LOGGER,c),u),P(a,c),f.label=1;case 1:return f.trys.push([1,3,,4]),[4,A(r)];case 2:f.sent();try{window[y][g.RUN](),window.dispatchEvent(new CustomEvent(_.INSTALLED)),c.data({},"ttm-installed")}catch(I){c.error(I,"installation-error")}return[3,4];case 3:return S=f.sent(),c.error(S,"loading-error"),[3,4];case 4:return[2]}})});return function(){return t.apply(this,arguments)}}();$()});q();})();};try{o=!window.Promise.prototype.finally||!window.URL||!window.URLSearchParams||!window.AbortController||!Object.fromEntries}catch(t){o=!0}o?(l=document.getElementsByTagName("head")[0],e=document.createElement("script"),e.type="text/javascript",e.src=r,e.crossOrigin="anonymous",e.onload=n,e.onerror=function(){return null},l.appendChild(e)):n();var l,e;})();})()