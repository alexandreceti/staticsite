/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analytics__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analytics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__analytics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wp_emoji_release_min__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wp_emoji_release_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wp_emoji_release_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jquery_1_12_4__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jquery_1_12_4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__jquery_1_12_4__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jquery_1_4_1_migrate_min__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jquery_1_4_1_migrate_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__jquery_1_4_1_migrate_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scripts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scripts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tagdiv_theme_min__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tagdiv_theme_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__tagdiv_theme_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_reply_min__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comment_reply_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__comment_reply_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wp_embed_min__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wp_embed_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__wp_embed_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jquery_form_min__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jquery_form_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__jquery_form_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__main__);












/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function(){var $c=function(a){this.w=a||[]};$c.prototype.set=function(a){this.w[a]=!0};$c.prototype.encode=function(){for(var a=[],b=0;b<this.w.length;b++)this.w[b]&&(a[Math.floor(b/6)]^=1<<b%6);for(b=0;b<a.length;b++)a[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b]||0);return a.join("")+"~"};var vd=new $c;function J(a){vd.set(a)}var Td=function(a){a=Dd(a);a=new $c(a);for(var b=vd.w.slice(),c=0;c<a.w.length;c++)b[c]=b[c]||a.w[c];return(new $c(b)).encode()},Dd=function(a){a=a.get(Gd);ka(a)||(a=[]);return a};var ea=function(a){return"function"==typeof a},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},qa=function(a){return void 0!=a&&-1<(a.constructor+"").indexOf("String")},D=function(a,b){return 0==a.indexOf(b)},sa=function(a){return a?a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},ra=function(){for(var a=O.navigator.userAgent+(M.cookie?M.cookie:"")+(M.referrer?M.referrer:""),b=a.length,c=O.history.length;0<c;)a+=c--^b++;return[hd()^La(a)&2147483647,Math.round((new Date).getTime()/
1E3)].join(".")},ta=function(a){var b=M.createElement("img");b.width=1;b.height=1;b.src=a;return b},ua=function(){},K=function(a){if(encodeURIComponent instanceof Function)return encodeURIComponent(a);J(28);return a},L=function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){J(27)}},f=/^[\w\-:/.?=&%!]+$/,wa=function(a,b,c){a&&(c?(c="",b&&f.test(b)&&(c=' id="'+b+'"'),f.test(a)&&M.write("<script"+c+' src="'+a+'">\x3c/script>')):(c=M.createElement("script"),
c.type="text/javascript",c.async=!0,c.src=a,b&&(c.id=b),a=M.getElementsByTagName("script")[0],a.parentNode.insertBefore(c,a)))},be=function(a,b){return E(M.location[b?"href":"search"],a)},E=function(a,b){return(a=a.match("(?:&|#|\\?)"+K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==a.length?a[1]:""},xa=function(){var a=""+M.location.hostname;return 0==a.indexOf("www.")?a.substring(4):a},de=function(a,b){var c=a.indexOf(b);if(5==c||6==c)if(a=a.charAt(c+b.length),"/"==a||"?"==a||
""==a||":"==a)return!0;return!1},ya=function(a,b){var c=M.referrer;if(/^(https?|android-app):\/\//i.test(c)){if(a)return c;a="//"+M.location.hostname;if(!de(c,a))return b&&(b=a.replace(/\./g,"-")+".cdn.ampproject.org",de(c,b))?void 0:c}},za=function(a,b){if(1==b.length&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c={},d=Math.min(a.length+1,b.length),e=0;e<d;e++)if("object"===typeof b[e]){for(var g in b[e])b[e].hasOwnProperty(g)&&(c[g]=b[e][g]);break}else e<a.length&&(c[a[e]]=b[e]);return c};var ee=function(){this.keys=[];this.values={};this.m={}};ee.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[":"+a]=b:this.values[":"+a]=b};ee.prototype.get=function(a){return this.m.hasOwnProperty(":"+a)?this.m[":"+a]:this.values[":"+a]};ee.prototype.map=function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b],d=this.get(c);d&&a(c,d)}};var O=window,M=document,va=function(a,b){return setTimeout(a,b)};var F=window,Ea=document,G=function(a){var b=F._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===F["ga-disable-"+a])return!0;try{var c=F.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}a=[];b=Ea.cookie.split(";");c=/^\s*AMP_TOKEN=\s*(.*?)\s*$/;for(var d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push(e[1])}for(b=0;b<a.length;b++)if("$OPT_OUT"==decodeURIComponent(a[b]))return!0;return!1};var Ca=function(a){var b=[],c=M.cookie.split(";");a=new RegExp("^\\s*"+a+"=\\s*(.*?)\\s*$");for(var d=0;d<c.length;d++){var e=c[d].match(a);e&&b.push(e[1])}return b},zc=function(a,b,c,d,e,g){e=G(e)?!1:eb.test(M.location.hostname)||"/"==c&&vc.test(d)?!1:!0;if(!e)return!1;b&&1200<b.length&&(b=b.substring(0,1200));c=a+"="+b+"; path="+c+"; ";g&&(c+="expires="+(new Date((new Date).getTime()+g)).toGMTString()+"; ");d&&"none"!==d&&(c+="domain="+d+";");d=M.cookie;M.cookie=c;if(!(d=d!=M.cookie))a:{a=Ca(a);
for(d=0;d<a.length;d++)if(b==a[d]){d=!0;break a}d=!1}return d},Cc=function(a){return encodeURIComponent?encodeURIComponent(a).replace(/\(/g,"%28").replace(/\)/g,"%29"):a},vc=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var oc,Id=/^.*Version\/?(\d+)[^\d].*$/i,ne=function(){if(void 0!==O.__ga4__)return O.__ga4__;if(void 0===oc){var a=O.navigator.userAgent;if(a){var b=a;try{b=decodeURIComponent(a)}catch(c){}if(a=!(0<=b.indexOf("Chrome"))&&!(0<=b.indexOf("CriOS"))&&(0<=b.indexOf("Safari/")||0<=b.indexOf("Safari,")))b=Id.exec(b),a=11<=(b?Number(b[1]):-1);oc=a}else oc=!1}return oc};var Fa,Ga,fb,Ab,ja=/^https?:\/\/[^/]*cdn\.ampproject\.org\//,Ub=[],ic=function(){Z.D([ua])},tc=function(a,b){var c=Ca("AMP_TOKEN");if(1<c.length)return J(55),!1;c=decodeURIComponent(c[0]||"");if("$OPT_OUT"==c||"$ERROR"==c||G(b))return J(62),!1;if(!ja.test(M.referrer)&&"$NOT_FOUND"==c)return J(68),!1;if(void 0!==Ab)return J(56),va(function(){a(Ab)},0),!0;if(Fa)return Ub.push(a),!0;if("$RETRIEVING"==c)return J(57),va(function(){tc(a,b)},1E4),!0;Fa=!0;c&&"$"!=c[0]||(xc("$RETRIEVING",3E4),setTimeout(Mc,
3E4),c="");return Pc(c,b)?(Ub.push(a),!0):!1},Pc=function(a,b,c){if(!window.JSON)return J(58),!1;var d=O.XMLHttpRequest;if(!d)return J(59),!1;var e=new d;if(!("withCredentials"in e))return J(60),!1;e.open("POST",(c||"https://ampcid.google.com/v1/publisher:getClientId")+"?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",!0);e.withCredentials=!0;e.setRequestHeader("Content-Type","text/plain");e.onload=function(){Fa=!1;if(4==e.readyState){try{200!=e.status&&(J(61),Qc("","$ERROR",3E4));var d=JSON.parse(e.responseText);
d.optOut?(J(63),Qc("","$OPT_OUT",31536E6)):d.clientId?Qc(d.clientId,d.securityToken,31536E6):!c&&d.alternateUrl?(Ga&&clearTimeout(Ga),Fa=!0,Pc(a,b,d.alternateUrl)):(J(64),Qc("","$NOT_FOUND",36E5))}catch(ca){J(65),Qc("","$ERROR",3E4)}e=null}};d={originScope:"AMP_ECID_GOOGLE"};a&&(d.securityToken=a);e.send(JSON.stringify(d));Ga=va(function(){J(66);Qc("","$ERROR",3E4)},1E4);return!0},Mc=function(){Fa=!1},xc=function(a,b){if(void 0===fb){fb="";for(var c=id(),d=0;d<c.length;d++){var e=c[d];if(zc("AMP_TOKEN",
encodeURIComponent(a),"/",e,"",b)){fb=e;return}}}zc("AMP_TOKEN",encodeURIComponent(a),"/",fb,"",b)},Qc=function(a,b,c){Ga&&clearTimeout(Ga);b&&xc(b,c);Ab=a;b=Ub;Ub=[];for(c=0;c<b.length;c++)b[c](a)};var oe=function(){return(Ba||"https:"==M.location.protocol?"https:":"http:")+"//www.google-analytics.com"},Da=function(a){this.name="len";this.message=a+"-8192"},ba=function(a,b,c){c=c||ua;if(2036>=b.length)wc(a,b,c);else if(8192>=b.length)x(a,b,c)||wd(a,b,c)||wc(a,b,c);else throw ge("len",b.length),new Da(b.length);},pe=function(a,b,c,d){d=d||ua;wd(a+"?"+b,"",d,c)},wc=function(a,b,c){var d=ta(a+"?"+b);d.onload=d.onerror=function(){d.onload=null;d.onerror=null;c()}},wd=function(a,b,c,d){var e=O.XMLHttpRequest;
if(!e)return!1;var g=new e;if(!("withCredentials"in g))return!1;a=a.replace(/^http:/,"https:");g.open("POST",a,!0);g.withCredentials=!0;g.setRequestHeader("Content-Type","text/plain");g.onreadystatechange=function(){if(4==g.readyState){if(d)try{var a=g.responseText;if(1>a.length)ge("xhr","ver","0"),c();else if("1"!=a.charAt(0))ge("xhr","ver",String(a.length)),c();else if(3<d.count++)ge("xhr","tmr",""+d.count),c();else if(1==a.length)c();else{var b=a.charAt(1);if("d"==b)pe("https://stats.g.doubleclick.net/j/collect",
d.U,d,c);else if("g"==b){var e="https://www.google.%/ads/ga-audiences".replace("%","com");wc(e,d.google,c);var w=a.substring(2);if(w)if(/^[a-z.]{1,6}$/.test(w)){var ha="https://www.google.%/ads/ga-audiences".replace("%",w);wc(ha,d.google,ua)}else ge("tld","bcc",w)}else ge("xhr","brc",b),c()}}catch(ue){ge("xhr","rsp"),c()}else c();g=null}};g.send(b);return!0},x=function(a,b,c){return O.navigator.sendBeacon?O.navigator.sendBeacon(a,b)?(c(),!0):!1:!1},ge=function(a,b,c){1<=100*Math.random()||G("?")||
(a=["t=error","_e="+a,"_v=j68","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+K(c.substring(0,100))),a.push("aip=1"),a.push("z="+hd()),wc("https://www.google-analytics.com/u/d",a.join("&"),ua))};var h=function(a){var b=O.gaData=O.gaData||{};return b[a]=b[a]||{}};var Ha=function(){this.M=[]};Ha.prototype.add=function(a){this.M.push(a)};Ha.prototype.D=function(a){try{for(var b=0;b<this.M.length;b++){var c=a.get(this.M[b]);c&&ea(c)&&c.call(O,a)}}catch(d){}b=a.get(Ia);b!=ua&&ea(b)&&(a.set(Ia,ua,!0),setTimeout(b,10))};function Ja(a){if(100!=a.get(Ka)&&La(P(a,Q))%1E4>=100*R(a,Ka))throw"abort";}function Ma(a){if(G(P(a,Na)))throw"abort";}function Oa(){var a=M.location.protocol;if("http:"!=a&&"https:"!=a)throw"abort";}
function Pa(a){try{O.navigator.sendBeacon?J(42):O.XMLHttpRequest&&"withCredentials"in new O.XMLHttpRequest&&J(40)}catch(c){}a.set(ld,Td(a),!0);a.set(Ac,R(a,Ac)+1);var b=[];Qa.map(function(c,d){d.F&&(c=a.get(c),void 0!=c&&c!=d.defaultValue&&("boolean"==typeof c&&(c*=1),b.push(d.F+"="+K(""+c))))});b.push("z="+Bd());a.set(Ra,b.join("&"),!0)}
function Sa(a){var b=P(a,gd)||oe()+"/collect",c=a.get(qe),d=P(a,fa);!d&&a.get(Vd)&&(d="beacon");if(c)pe(b,P(a,Ra),c,a.get(Ia));else if(d){c=d;d=P(a,Ra);var e=a.get(Ia);e=e||ua;"image"==c?wc(b,d,e):"xhr"==c&&wd(b,d,e)||"beacon"==c&&x(b,d,e)||ba(b,d,e)}else ba(b,P(a,Ra),a.get(Ia));b=a.get(Na);b=h(b);c=b.hitcount;b.hitcount=c?c+1:1;b=a.get(Na);delete h(b).pending_experiments;a.set(Ia,ua,!0)}
function Hc(a){(O.gaData=O.gaData||{}).expId&&a.set(Nc,(O.gaData=O.gaData||{}).expId);(O.gaData=O.gaData||{}).expVar&&a.set(Oc,(O.gaData=O.gaData||{}).expVar);var b=a.get(Na);if(b=h(b).pending_experiments){var c=[];for(d in b)b.hasOwnProperty(d)&&b[d]&&c.push(encodeURIComponent(d)+"."+encodeURIComponent(b[d]));var d=c.join("!")}else d=void 0;d&&a.set(m,d,!0)}function cd(){if(O.navigator&&"preview"==O.navigator.loadPurpose)throw"abort";}
function yd(a){var b=O.gaDevIds;ka(b)&&0!=b.length&&a.set("&did",b.join(","),!0)}function vb(a){if(!a.get(Na))throw"abort";};var hd=function(){return Math.round(2147483647*Math.random())},Bd=function(){try{var a=new Uint32Array(1);O.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return hd()}};function Ta(a){var b=R(a,Ua);500<=b&&J(15);var c=P(a,Va);if("transaction"!=c&&"item"!=c){c=R(a,Wa);var d=(new Date).getTime(),e=R(a,Xa);0==e&&a.set(Xa,d);e=Math.round(2*(d-e)/1E3);0<e&&(c=Math.min(c+e,20),a.set(Xa,d));if(0>=c)throw"abort";a.set(Wa,--c)}a.set(Ua,++b)};var Ya=function(){this.data=new ee},Qa=new ee,Za=[];Ya.prototype.get=function(a){var b=$a(a),c=this.data.get(a);b&&void 0==c&&(c=ea(b.defaultValue)?b.defaultValue():b.defaultValue);return b&&b.Z?b.Z(this,a,c):c};var P=function(a,b){a=a.get(b);return void 0==a?"":""+a},R=function(a,b){a=a.get(b);return void 0==a||""===a?0:1*a};Ya.prototype.set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a.hasOwnProperty(d)&&ab(this,d,a[d],c);else ab(this,a,b,c)};
var ab=function(a,b,c,d){if(void 0!=c)switch(b){case Na:wb.test(c)}var e=$a(b);e&&e.o?e.o(a,b,c,d):a.data.set(b,c,d)},bb=function(a,b,c,d,e){this.name=a;this.F=b;this.Z=d;this.o=e;this.defaultValue=c},$a=function(a){var b=Qa.get(a);if(!b)for(var c=0;c<Za.length;c++){var d=Za[c],e=d[0].exec(a);if(e){b=d[1](e);Qa.set(b.name,b);break}}return b},yc=function(a){var b;Qa.map(function(c,d){d.F==a&&(b=d)});return b&&b.name},S=function(a,b,c,d,e){a=new bb(a,b,c,d,e);Qa.set(a.name,a);return a.name},cb=function(a,
b){Za.push([new RegExp("^"+a+"$"),b])},T=function(a,b,c){return S(a,b,c,void 0,db)},db=function(){};var gb=qa(window.GoogleAnalyticsObject)&&sa(window.GoogleAnalyticsObject)||"ga",jd=/^(?:utma\.)?\d+\.\d+$/,kd=/^amp-[\w.-]{22,64}$/,Ba=!1,hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var jb=S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");S("dataSource","ds");var Vd=S("useBeacon",void 0,!1),fa=S("transport");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var Ac=S("_s","_s");
S("screenName","cd");var kb=S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");var nb=S("language","ul"),ob=S("encoding","de");S("title","dt",function(){return M.title||void 0});cb("contentGroup([0-9]+)",function(a){return new bb(a[0],"cg"+a[1])});var pb=S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");
S("campaignMedium","cm");S("campaignKeyword","ck");S("campaignContent","cc");var ub=S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");
S("appName","an");S("appVersion","av","");S("appId","aid","");S("appInstallerId","aiid","");S("exDescription","exd");S("exFatal","exf");var Nc=S("expId","xid"),Oc=S("expVar","xvar"),m=S("exp","exp"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void 0,0),Xa=S("_ti",void 0,0),Wa=S("_to",void 0,20);cb("dimension([0-9]+)",function(a){return new bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",function(a){return new bb(a[0],"cm"+a[1])});S("linkerParam",void 0,void 0,Bc,db);
var ld=S("usage","_u"),Gd=S("_um");S("forceSSL",void 0,void 0,function(){return Ba},function(a,b,c){J(34);Ba=!!c});var ed=S("_j1","jid"),ia=S("_j2","gjid");cb("\\&(.*)",function(a){var b=new bb(a[0],a[1]),c=yc(a[0].substring(1));c&&(b.Z=function(a){return a.get(c)},b.o=function(a,b,g,ca){a.set(c,g,ca)},b.F=void 0);return b});
var Qb=T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=S("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),oa=S("customTask"),V=T("name"),Q=T("clientId","cid"),n=T("clientIdTime"),xd=T("storedClientId"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void 0,"_ga"),W=T("cookieDomain"),Yb=T("cookiePath",
void 0,"/"),Zb=T("cookieExpires",void 0,63072E3),Hd=T("cookieUpdate",void 0,!0),$b=T("legacyCookieDomain"),Wc=T("legacyHistoryImport",void 0,!0),ac=T("storage",void 0,"cookie"),bc=T("allowLinker",void 0,!1),cc=T("allowAnchor",void 0,!0),Ka=T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void 0,1),ec=T("alwaysSendReferrer",void 0,!1),I=T("_gid","_gid"),la=T("_gcn"),Kd=T("useAmpClientId"),ce=T("_gclid"),fe=T("_gt"),he=T("_ge",void 0,7776E6),ie=T("_gclsrc"),je=T("storeGac",void 0,!0),gd=S("transportUrl"),
Md=S("_r","_r"),qe=S("_dp"),Ud=S("allowAdFeatures",void 0,!0);function X(a,b,c,d){b[a]=function(){try{return d&&J(d),c.apply(this,arguments)}catch(e){throw ge("exc",a,e&&e.name),e;}}};var Od=function(){this.V=100;this.$=this.fa=!1;this.oa="detourexp";this.groups=1},Ed=function(a){var b=new Od,c;if(b.fa&&b.$)return 0;b.$=!0;if(a){if(b.oa&&void 0!==a.get(b.oa))return R(a,b.oa);if(0==a.get(dc))return 0}if(0==b.V)return 0;void 0===c&&(c=Bd());return 0==c%b.V?Math.floor(c/b.V)%b.groups+1:0};function fc(){var a,b;if((b=(b=O.navigator)?b.plugins:null)&&b.length)for(var c=0;c<b.length&&!a;c++){var d=b[c];-1<d.name.indexOf("Shockwave Flash")&&(a=d.description)}if(!a)try{var e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a="WIN 6,0,21,0",e.AllowScriptAccess="always",a=e.GetVariable("$version")}catch(g){}if(!a)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a=e.GetVariable("$version")}catch(g){}a&&
(e=a.match(/[\d]+/g))&&3<=e.length&&(a=e[0]+"."+e[1]+" r"+e[2]);return a||void 0};var aa=function(a){var b=Math.min(R(a,dc),100);return La(P(a,Q))%100>=b?!1:!0},gc=function(a){var b={};if(Ec(b)||Fc(b)){var c=b[Eb];void 0==c||Infinity==c||isNaN(c)||(0<c?(Y(b,Gb),Y(b,Jb),Y(b,Ib),Y(b,Fb),Y(b,Hb),Y(b,Kb),Y(b,Lb),va(function(){a(b)},10)):L(O,"load",function(){gc(a)},!1))}},Ec=function(a){var b=O.performance||O.webkitPerformance;b=b&&b.timing;if(!b)return!1;var c=b.navigationStart;if(0==c)return!1;a[Eb]=b.loadEventStart-c;a[Gb]=b.domainLookupEnd-b.domainLookupStart;a[Jb]=b.connectEnd-
b.connectStart;a[Ib]=b.responseStart-b.requestStart;a[Fb]=b.responseEnd-b.responseStart;a[Hb]=b.fetchStart-c;a[Kb]=b.domInteractive-c;a[Lb]=b.domContentLoadedEventStart-c;return!0},Fc=function(a){if(O.top!=O)return!1;var b=O.external,c=b&&b.onloadT;b&&!b.isValidLoadTime&&(c=void 0);2147483648<c&&(c=void 0);0<c&&b.setPageReadyTime();if(void 0==c)return!1;a[Eb]=c;return!0},Y=function(a,b){var c=a[b];if(isNaN(c)||Infinity==c||0>c)a[b]=void 0},Fd=function(a){return function(b){if("pageview"==b.get(Va)&&
!a.I){a.I=!0;var c=aa(b),d=0<E(b.get(kb),"gclid").length;(c||d)&&gc(function(b){c&&a.send("timing",b);d&&a.send("adtiming",b)})}}};var hc=!1,mc=function(a){if("cookie"==P(a,ac)){if(a.get(Hd)||P(a,xd)!=P(a,Q)){var b=1E3*R(a,Zb);ma(a,Q,U,b)}ma(a,I,la,864E5);if(a.get(je)){var c=a.get(ce);if(c){var d=Math.min(R(a,he),1E3*R(a,Zb));d=Math.min(d,1E3*R(a,fe)+d-(new Date).getTime());a.data.set(he,d);b={};var e=a.get(fe),g=a.get(ie),ca=kc(P(a,Yb)),l=lc(P(a,W)),k=P(a,Na);g&&"aw.ds"!=g?b&&(b.ua=!0):(c=["1",e,Cc(c)].join("."),0<d&&(b&&(b.ta=!0),zc("_gac_"+Cc(k),c,ca,l,k,d)));le(b)}}else J(75);if(a="none"===lc(P(a,W)))a=M.location.hostname,
a=eb.test(a)||vc.test(a);a&&J(30)}},ma=function(a,b,c,d){var e=nd(a,b);if(e){c=P(a,c);var g=kc(P(a,Yb)),ca=lc(P(a,W)),l=P(a,Na);if("auto"!=ca)zc(c,e,g,ca,l,d)&&(hc=!0);else{J(32);for(var k=id(),w=0;w<k.length;w++)if(ca=k[w],a.data.set(W,ca),e=nd(a,b),zc(c,e,g,ca,l,d)){hc=!0;return}a.data.set(W,"auto")}}},nc=function(a){if("cookie"==P(a,ac)&&!hc&&(mc(a),!hc))throw"abort";},Yc=function(a){if(a.get(Wc)){var b=P(a,W),c=P(a,$b)||xa(),d=Xc("__utma",c,b);d&&(J(19),a.set(Tc,(new Date).getTime(),!0),a.set(Rc,
d.R),(b=Xc("__utmz",c,b))&&d.hash==b.hash&&a.set(Sc,b.R))}},nd=function(a,b){b=Cc(P(a,b));var c=lc(P(a,W)).split(".").length;a=jc(P(a,Yb));1<a&&(c+="-"+a);return b?["GA1",c,b].join("."):""},Xd=function(a,b){return na(b,P(a,W),P(a,Yb))},na=function(a,b,c){if(!a||1>a.length)J(12);else{for(var d=[],e=0;e<a.length;e++){var g=a[e];var ca=g.split(".");var l=ca.shift();("GA1"==l||"1"==l)&&1<ca.length?(g=ca.shift().split("-"),1==g.length&&(g[1]="1"),g[0]*=1,g[1]*=1,ca={H:g,s:ca.join(".")}):ca=kd.test(g)?
{H:[0,0],s:g}:void 0;ca&&d.push(ca)}if(1==d.length)return J(13),d[0].s;if(0==d.length)J(12);else{J(14);d=Gc(d,lc(b).split(".").length,0);if(1==d.length)return d[0].s;d=Gc(d,jc(c),1);1<d.length&&J(41);return d[0]&&d[0].s}}},Gc=function(a,b,c){for(var d=[],e=[],g,ca=0;ca<a.length;ca++){var l=a[ca];l.H[c]==b?d.push(l):void 0==g||l.H[c]<g?(e=[l],g=l.H[c]):l.H[c]==g&&e.push(l)}return 0<d.length?d:e},lc=function(a){return 0==a.indexOf(".")?a.substr(1):a},id=function(){var a=[],b=xa().split(".");if(4==b.length){var c=
b[b.length-1];if(parseInt(c,10)==c)return["none"]}for(c=b.length-2;0<=c;c--)a.push(b.slice(c).join("."));a.push("none");return a},kc=function(a){if(!a)return"/";1<a.length&&a.lastIndexOf("/")==a.length-1&&(a=a.substr(0,a.length-1));0!=a.indexOf("/")&&(a="/"+a);return a},jc=function(a){a=kc(a);return"/"==a?1:a.split("/").length},le=function(a){a.ta&&J(77);a.na&&J(74);a.pa&&J(73);a.ua&&J(69)};function Xc(a,b,c){"none"==b&&(b="");var d=[],e=Ca(a);a="__utma"==a?6:2;for(var g=0;g<e.length;g++){var ca=(""+e[g]).split(".");ca.length>=a&&d.push({hash:ca[0],R:e[g],O:ca})}if(0!=d.length)return 1==d.length?d[0]:Zc(b,d)||Zc(c,d)||Zc(null,d)||d[0]}function Zc(a,b){if(null==a)var c=a=1;else c=La(a),a=La(D(a,".")?a.substring(1):"."+a);for(var d=0;d<b.length;d++)if(b[d].hash==c||b[d].hash==a)return b[d]};var od=new RegExp(/^https?:\/\/([^\/:]+)/),pd=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,me=/(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;function Bc(a){var b=a.get(Q),c=a.get(I)||"";b="_ga=2."+K(pa(c+b,0)+"."+c+"-"+b);if((c=a.get(ce))&&a.get(je)){var d=R(a,fe);1E3*d+R(a,he)<=(new Date).getTime()?(J(76),a=""):(J(44),a="&_gac=1."+K([pa(c,0),d,c].join(".")))}else a="";return b+a}
function Ic(a,b){var c=new Date,d=O.navigator,e=d.plugins||[];a=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b<e.length;++b)a.push(e[b].description);return La(a.join("."))}function pa(a,b){var c=new Date,d=O.navigator,e=c.getHours()+Math.floor((c.getMinutes()+b)/60);return La([a,d.userAgent,d.language||"",c.getTimezoneOffset(),c.getYear(),c.getDate()+Math.floor(e/24),(24+e)%24,(60+c.getMinutes()+b)%60].join("."))}
var Dc=function(a){J(48);this.target=a;this.T=!1};Dc.prototype.ca=function(a,b){if(a.tagName){if("a"==a.tagName.toLowerCase()){a.href&&(a.href=qd(this,a.href,b));return}if("form"==a.tagName.toLowerCase())return rd(this,a)}if("string"==typeof a)return qd(this,a,b)};
var qd=function(a,b,c){var d=pd.exec(b);d&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));(d=me.exec(b))&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a.target.get("linkerParam");var e=b.indexOf("?");d=b.indexOf("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b.substring(0,d)+c+a+b.substring(d));b=b.replace(/&+_ga=/,"&_ga=");return b=b.replace(/&+_gac=/,"&_gac=")},rd=function(a,b){if(b&&b.action)if("get"==b.method.toLowerCase()){a=a.target.get("linkerParam").split("&");for(var c=0;c<a.length;c++){var d=
a[c].split("="),e=d[1];d=d[0];for(var g=b.childNodes||[],ca=!1,l=0;l<g.length;l++)if(g[l].name==d){g[l].setAttribute("value",e);ca=!0;break}ca||(g=M.createElement("input"),g.setAttribute("type","hidden"),g.setAttribute("name",d),g.setAttribute("value",e),b.appendChild(g))}}else"post"==b.method.toLowerCase()&&(b.action=qd(a,b.action))};
Dc.prototype.S=function(a,b,c){function d(c){try{c=c||O.event;a:{var d=c.target||c.srcElement;for(c=100;d&&0<c;){if(d.href&&d.nodeName.match(/^a(?:rea)?$/i)){var g=d;break a}d=d.parentNode;c--}g={}}("http:"==g.protocol||"https:"==g.protocol)&&sd(a,g.hostname||"")&&g.href&&(g.href=qd(e,g.href,b))}catch(k){J(26)}}var e=this;this.T||(this.T=!0,L(M,"mousedown",d,!1),L(M,"keyup",d,!1));c&&L(M,"submit",function(b){b=b||O.event;if((b=b.target||b.srcElement)&&b.action){var c=b.action.match(od);c&&sd(a,c[1])&&
rd(e,b)}})};function sd(a,b){if(b==M.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}function ke(a,b){return b!=Ic(a,0)&&b!=Ic(a,-1)&&b!=Ic(a,-2)&&b!=pa(a,0)&&b!=pa(a,-1)&&b!=pa(a,-2)};var p=/^(GTM|OPT)-[A-Z0-9]+$/,q=/;_gaexp=[^;]*/g,r=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,Aa=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,t=function(a){function b(a,b){b&&(c+="&"+a+"="+K(b))}var c="https://www.google-analytics.com/gtm/js?id="+K(a.id);"dataLayer"!=a.B&&b("l",a.B);b("t",a.target);b("cid",a.clientId);b("cidt",a.ka);b("gac",a.la);b("aip",a.ia);a.sync&&b("m","sync");b("cycle",a.G);a.qa&&b("gclid",a.qa);Aa.test(M.referrer)&&b("cb",String(hd()));return c};var Jd=function(a,b,c){this.aa=b;(b=c)||(b=(b=P(a,V))&&"t0"!=b?Wd.test(b)?"_gat_"+Cc(P(a,Na)):"_gat_"+Cc(b):"_gat");this.Y=b;this.ra=null},Rd=function(a,b){var c=b.get(Wb);b.set(Wb,function(b){Pd(a,b,ed);Pd(a,b,ia);var d=c(b);Qd(a,b);return d});var d=b.get(Xb);b.set(Xb,function(b){var c=d(b);if(se(b)){if(ne()!==H(a,b)){J(80);var e={U:re(a,b,1),google:re(a,b,2),count:0};pe("https://stats.g.doubleclick.net/j/collect",e.U,e)}else ta(re(a,b,0));b.set(ed,"",!0)}return c})},Pd=function(a,b,c){!1===b.get(Ud)||
b.get(c)||("1"==Ca(a.Y)[0]?b.set(c,"",!0):b.set(c,""+hd(),!0))},Qd=function(a,b){se(b)&&zc(a.Y,"1",b.get(Yb),b.get(W),b.get(Na),6E4)},se=function(a){return!!a.get(ed)&&a.get(Ud)},re=function(a,b,c){var d=new ee,e=function(a){$a(a).F&&d.set($a(a).F,b.get(a))};e(hb);e(ib);e(Na);e(Q);e(ed);if(0==c||1==c)e(Ad),e(ia),e(I);d.set($a(ld).F,Td(b));var g="";d.map(function(a,b){g+=K(a)+"=";g+=K(""+b)+"&"});g+="z="+hd();0==c?g=a.aa+g:1==c?g="t=dc&aip=1&_r=3&"+g:2==c&&(g="t=sr&aip=1&_r=4&slf_rd=1&"+g);return g},
H=function(a,b){null===a.ra&&(a.ra=1===Ed(b),a.ra&&J(33));return a.ra},Wd=/^gtm\d+$/;var fd=function(a,b){a=a.b;if(!a.get("dcLoaded")){var c=new $c(Dd(a));c.set(29);a.set(Gd,c.w);b=b||{};var d;b[U]&&(d=Cc(b[U]));b=new Jd(a,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",d);Rd(b,a);a.set("dcLoaded",!0)}};var Sd=function(a){if(!a.get("dcLoaded")&&"cookie"==a.get(ac)){var b=new Jd(a);Pd(b,a,ed);Pd(b,a,ia);Qd(b,a);if(se(a)){var c=ne()!==H(b,a);a.set(Md,1,!0);c?(J(79),a.set(gd,oe()+"/j/collect",!0),a.set(qe,{U:re(b,a,1),google:re(b,a,2),count:0},!0)):a.set(gd,oe()+"/r/collect",!0)}}};var Lc=function(){var a=O.gaGlobal=O.gaGlobal||{};return a.hid=a.hid||hd()};var ad,bd=function(a,b,c){if(!ad){var d=M.location.hash;var e=O.name,g=/^#?gaso=([^&]*)/;if(e=(d=(d=d&&d.match(g)||e&&e.match(g))?d[1]:Ca("GASO")[0]||"")&&d.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))zc("GASO",""+d,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=e[1],wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(a?"prefix="+a+"&":"")+hd(),"_gasojs");ad=!0}};var wb=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,pc=function(a){function b(a,b){d.b.data.set(a,b)}function c(a,c){b(a,c);d.filters.add(a)}var d=this;this.b=new Ya;this.filters=new Ha;b(V,a[V]);b(Na,sa(a[Na]));b(U,a[U]);b(W,a[W]||xa());b(Yb,a[Yb]);b(Zb,a[Zb]);b(Hd,a[Hd]);b($b,a[$b]);b(Wc,a[Wc]);b(bc,a[bc]);b(cc,a[cc]);b(Ka,a[Ka]);b(dc,a[dc]);b(ec,a[ec]);b(ac,a[ac]);b(Ad,a[Ad]);b(n,a[n]);b(Kd,a[Kd]);b(je,a[je]);b(hb,1);b(ib,"j68");c(Qb,Ma);c(oa,ua);c(dd,cd);c(Rb,Oa);c(md,vb);c(Sb,nc);c(Uc,Yc);c(Tb,Ja);c(Vb,Ta);
c(Vc,Hc);c(zd,yd);c(Ld,Sd);c(Wb,Pa);c(Xb,Sa);c(Cd,Fd(this));Kc(this.b);Jc(this.b,a[Q]);this.b.set(jb,Lc());bd(this.b.get(Na),this.b.get(W),this.b.get(Yb))},Jc=function(a,b){var c=P(a,U);a.data.set(la,"_ga"==c?"_gid":c+"_gid");if("cookie"==P(a,ac)){hc=!1;c=Ca(P(a,U));c=Xd(a,c);if(!c){c=P(a,W);var d=P(a,$b)||xa();c=Xc("__utma",d,c);void 0!=c?(J(10),c=c.O[1]+"."+c.O[2]):c=void 0}c&&(hc=!0);if(d=c&&!a.get(Hd))if(d=c.split("."),2!=d.length)d=!1;else if(d=Number(d[1])){var e=R(a,Zb);d=d+e<(new Date).getTime()/
1E3}else d=!1;d&&(c=void 0);c&&(a.data.set(xd,c),a.data.set(Q,c),c=Ca(P(a,la)),(c=Xd(a,c))&&a.data.set(I,c));if(a.get(je)&&(c=a.get(ce),d=a.get(ie),!c||d&&"aw.ds"!=d)){c={};if(M){d=[];e=M.cookie.split(";");for(var g=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,ca=0;ca<e.length;ca++){var l=e[ca].match(g);l&&d.push({ja:l[1],value:l[2]})}e={};if(d&&d.length)for(g=0;g<d.length;g++)(ca=d[g].value.split("."),"1"!=ca[0]||3!=ca.length)?c&&(c.na=!0):ca[1]&&(e[d[g].ja]?c&&(c.pa=!0):e[d[g].ja]=[],e[d[g].ja].push({timestamp:ca[1],
qa:ca[2]}));d=e}else d={};d=d[P(a,Na)];le(c);d&&0!=d.length&&(c=d[0],a.data.set(fe,c.timestamp),a.data.set(ce,c.qa))}}if(a.get(Hd))a:if(d=be("_ga",a.get(cc)))if(a.get(bc))if(c=d.indexOf("."),-1==c)J(22);else{e=d.substring(0,c);g=d.substring(c+1);c=g.indexOf(".");d=g.substring(0,c);g=g.substring(c+1);if("1"==e){if(c=g,ke(c,d)){J(23);break a}}else if("2"==e){c=g.indexOf("-");e="";0<c?(e=g.substring(0,c),c=g.substring(c+1)):c=g.substring(1);if(ke(e+c,d)){J(53);break a}e&&(J(2),a.data.set(I,e))}else{J(22);
break a}J(11);a.data.set(Q,c);if(c=be("_gac",a.get(cc)))c=c.split("."),"1"!=c[0]||4!=c.length?J(72):ke(c[3],c[1])?J(71):(a.data.set(ce,c[3]),a.data.set(fe,c[2]),J(70))}else J(21);b&&(J(9),a.data.set(Q,K(b)));a.get(Q)||((b=(b=O.gaGlobal&&O.gaGlobal.vid)&&-1!=b.search(jd)?b:void 0)?(J(17),a.data.set(Q,b)):(J(8),a.data.set(Q,ra())));a.get(I)||(J(3),a.data.set(I,ra()));mc(a)},Kc=function(a){var b=O.navigator,c=O.screen,d=M.location;a.set(lb,ya(a.get(ec),a.get(Kd)));if(d){var e=d.pathname||"";"/"!=e.charAt(0)&&
(J(31),e="/"+e);a.set(kb,d.protocol+"//"+d.hostname+e+d.search)}c&&a.set(qb,c.width+"x"+c.height);c&&a.set(pb,c.colorDepth+"-bit");c=M.documentElement;var g=(e=M.body)&&e.clientWidth&&e.clientHeight,ca=[];c&&c.clientWidth&&c.clientHeight&&("CSS1Compat"===M.compatMode||!g)?ca=[c.clientWidth,c.clientHeight]:g&&(ca=[e.clientWidth,e.clientHeight]);c=0>=ca[0]||0>=ca[1]?"":ca.join("x");a.set(rb,c);a.set(tb,fc());a.set(ob,M.characterSet||M.charset);a.set(sb,b&&"function"===typeof b.javaEnabled&&b.javaEnabled()||
!1);a.set(nb,(b&&(b.language||b.browserLanguage)||"").toLowerCase());a.data.set(ce,be("gclid",!0));a.data.set(ie,be("gclsrc",!0));a.data.set(fe,Math.round((new Date).getTime()/1E3));if(d&&a.get(cc)&&(b=M.location.hash)){b=b.split(/[?&#]+/);d=[];for(c=0;c<b.length;++c)(D(b[c],"utm_id")||D(b[c],"utm_campaign")||D(b[c],"utm_source")||D(b[c],"utm_medium")||D(b[c],"utm_term")||D(b[c],"utm_content")||D(b[c],"gclid")||D(b[c],"dclid")||D(b[c],"gclsrc"))&&d.push(b[c]);0<d.length&&(b="#"+d.join("&"),a.set(kb,
a.get(kb)+b))}};pc.prototype.get=function(a){return this.b.get(a)};pc.prototype.set=function(a,b){this.b.set(a,b)};var qc={pageview:[mb],event:[ub,xb,yb,zb],social:[Bb,Cb,Db],timing:[Mb,Nb,Pb,Ob]};pc.prototype.send=function(a){if(!(1>arguments.length)){if("string"===typeof arguments[0]){var b=arguments[0];var c=[].slice.call(arguments,1)}else b=arguments[0]&&arguments[0][Va],c=arguments;b&&(c=za(qc[b]||[],c),c[Va]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={})}};
pc.prototype.ma=function(a,b){var c=this;u(a,c,b)||(v(a,function(){u(a,c,b)}),y(String(c.get(V)),a,void 0,b,!0))};var rc=function(a){if("prerender"==M.visibilityState)return!1;a();return!0},z=function(a){if(!rc(a)){J(16);var b=!1,c=function(){if(!b&&rc(a)){b=!0;var d=c,e=M;e.removeEventListener?e.removeEventListener("visibilitychange",d,!1):e.detachEvent&&e.detachEvent("onvisibilitychange",d)}};L(M,"visibilitychange",c)}};var td=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,sc=function(a){if(ea(a[0]))this.u=a[0];else{var b=td.exec(a[0]);null!=b&&4==b.length&&(this.c=b[1]||"t0",this.K=b[2]||"",this.C=b[3],this.a=[].slice.call(a,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(qa(this.a[1])?this.X=this.a[1]:this.W=this.a[1])));b=a[1];a=a[2];if(!this.C)throw"abort";if(this.i&&(!qa(b)||""==b))throw"abort";
if(this.g&&(!qa(b)||""==b||!ea(a)))throw"abort";if(ud(this.c)||ud(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort";}};function ud(a){return 0<=a.indexOf(".")||0<=a.indexOf(":")};var Yd,Zd,$d,A;Yd=new ee;$d=new ee;A=new ee;Zd={ec:45,ecommerce:46,linkid:47};
var u=function(a,b,c){b==N||b.get(V);var d=Yd.get(a);if(!ea(d))return!1;b.plugins_=b.plugins_||new ee;if(b.plugins_.get(a))return!0;b.plugins_.set(a,new d(b,c||{}));return!0},y=function(a,b,c,d,e){if(!ea(Yd.get(b))&&!$d.get(b)){Zd.hasOwnProperty(b)&&J(Zd[b]);if(p.test(b)){J(52);a=N.j(a);if(!a)return!0;c=d||{};d={id:b,B:c.dataLayer||"dataLayer",ia:!!a.get("anonymizeIp"),sync:e,G:!1};a.get("&gtm")==b&&(d.G=!0);var g=String(a.get("name"));"t0"!=g&&(d.target=g);G(String(a.get("trackingId")))||(d.clientId=
String(a.get(Q)),d.ka=Number(a.get(n)),c=c.palindrome?r:q,c=(c=M.cookie.replace(/^|(; +)/g,";").match(c))?c.sort().join("").substring(1):void 0,d.la=c,d.qa=E(a.b.get(kb)||"","gclid"));a=d.B;c=(new Date).getTime();O[a]=O[a]||[];c={"gtm.start":c};e||(c.event="gtm.js");O[a].push(c);c=t(d)}!c&&Zd.hasOwnProperty(b)?(J(39),c=b+".js"):J(43);c&&(c&&0<=c.indexOf("/")||(c=(Ba||"https:"==M.location.protocol?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+c),d=ae(c),a=d.protocol,c=M.location.protocol,
("https:"==a||a==c||("http:"!=a?0:"http:"==c))&&B(d)&&(wa(d.url,void 0,e),$d.set(b,!0)))}},v=function(a,b){var c=A.get(a)||[];c.push(b);A.set(a,c)},C=function(a,b){Yd.set(a,b);b=A.get(a)||[];for(var c=0;c<b.length;c++)b[c]();A.set(a,[])},B=function(a){var b=ae(M.location.href);if(D(a.url,"https://www.google-analytics.com/gtm/js?id="))return!0;if(a.query||0<=a.url.indexOf("?")||0<=a.path.indexOf("://"))return!1;if(a.host==b.host&&a.port==b.port)return!0;b="http:"==a.protocol?80:443;return"www.google-analytics.com"==
a.host&&(a.port||b)==b&&D(a.path,"/plugins/")?!0:!1},ae=function(a){function b(a){var b=(a.hostname||"").split(":")[0].toLowerCase(),c=(a.protocol||"").toLowerCase();c=1*a.port||("http:"==c?80:"https:"==c?443:"");a=a.pathname||"";D(a,"/")||(a="/"+a);return[b,""+c,a]}var c=M.createElement("a");c.href=M.location.href;var d=(c.protocol||"").toLowerCase(),e=b(c),g=c.search||"",ca=d+"//"+e[0]+(e[1]?":"+e[1]:"");D(a,"//")?a=d+a:D(a,"/")?a=ca+a:!a||D(a,"?")?a=ca+e[2]+(a||g):0>a.split("/")[0].indexOf(":")&&
(a=ca+e[2].substring(0,e[2].lastIndexOf("/"))+"/"+a);c.href=a;d=b(c);return{protocol:(c.protocol||"").toLowerCase(),host:d[0],port:d[1],path:d[2],query:c.search||"",url:a||""}};var Z={ga:function(){Z.f=[]}};Z.ga();Z.D=function(a){var b=Z.J.apply(Z,arguments);b=Z.f.concat(b);for(Z.f=[];0<b.length&&!Z.v(b[0])&&!(b.shift(),0<Z.f.length););Z.f=Z.f.concat(b)};Z.J=function(a){for(var b=[],c=0;c<arguments.length;c++)try{var d=new sc(arguments[c]);d.g?C(d.a[0],d.a[1]):(d.i&&(d.ha=y(d.c,d.a[0],d.X,d.W)),b.push(d))}catch(e){}return b};
Z.v=function(a){try{if(a.u)a.u.call(O,N.j("t0"));else{var b=a.c==gb?N:N.j(a.c);if(a.A){if("t0"==a.c&&(b=N.create.apply(N,a.a),null===b))return!0}else if(a.ba)N.remove(a.c);else if(b)if(a.i){if(a.ha&&(a.ha=y(a.c,a.a[0],a.X,a.W)),!u(a.a[0],b,a.W))return!0}else if(a.K){var c=a.C,d=a.a,e=b.plugins_.get(a.K);e[c].apply(e,d)}else b[a.C].apply(b,a.a)}}catch(g){}};var N=function(a){J(1);Z.D.apply(Z,[arguments])};N.h={};N.P=[];N.L=0;N.answer=42;var uc=[Na,W,V];
N.create=function(a){var b=za(uc,[].slice.call(arguments));b[V]||(b[V]="t0");var c=""+b[V];if(N.h[c])return N.h[c];a:{if(b[Kd]){J(67);if(b[ac]&&"cookie"!=b[ac]){var d=!1;break a}if(void 0!==Ab)b[Q]||(b[Q]=Ab);else{b:{d=String(b[W]||xa());var e=String(b[Yb]||"/"),g=Ca(String(b[U]||"_ga"));d=na(g,d,e);if(!d||jd.test(d))d=!0;else if(d=Ca("AMP_TOKEN"),0==d.length)d=!0;else{if(1==d.length&&(d=decodeURIComponent(d[0]),"$RETRIEVING"==d||"$OPT_OUT"==d||"$ERROR"==d||"$NOT_FOUND"==d)){d=!0;break b}d=!1}}if(d&&
tc(ic,String(b[Na]))){d=!0;break a}}}d=!1}if(d)return null;b=new pc(b);N.h[c]=b;N.P.push(b);return b};N.remove=function(a){for(var b=0;b<N.P.length;b++)if(N.P[b].get(V)==a){N.P.splice(b,1);N.h[a]=null;break}};N.j=function(a){return N.h[a]};N.getAll=function(){return N.P.slice(0)};
N.N=function(){"ga"!=gb&&J(49);var a=O[gb];if(!a||42!=a.answer){N.L=a&&a.l;N.loaded=!0;var b=O[gb]=N;X("create",b,b.create);X("remove",b,b.remove);X("getByName",b,b.j,5);X("getAll",b,b.getAll,6);b=pc.prototype;X("get",b,b.get,7);X("set",b,b.set,4);X("send",b,b.send);X("requireSync",b,b.ma);b=Ya.prototype;X("get",b,b.get);X("set",b,b.set);if("https:"!=M.location.protocol&&!Ba){a:{b=M.getElementsByTagName("script");for(var c=0;c<b.length&&100>c;c++){var d=b[c].src;if(d&&0==d.indexOf("https://www.google-analytics.com/analytics")){b=
!0;break a}}b=!1}b&&(Ba=!0)}(O.gaplugins=O.gaplugins||{}).Linker=Dc;b=Dc.prototype;C("linker",Dc);X("decorate",b,b.ca,20);X("autoLink",b,b.S,25);C("displayfeatures",fd);C("adfeatures",fd);a=a&&a.q;ka(a)?Z.D.apply(N,a):J(50)}};N.da=function(){for(var a=N.getAll(),b=0;b<a.length;b++)a[b].get(V)};var da=N.N,Nd=O[gb];Nd&&Nd.r?da():z(da);z(function(){Z.D(["provide","render",ua])});function La(a){var b=1,c;if(a)for(b=0,c=a.length-1;0<=c;c--){var d=a.charCodeAt(c);b=(b<<6&268435455)+d+(d<<14);d=b&266338304;b=0!=d?b^d>>21:b}return b};})(window);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var twemoji=function(){"use strict";function a(a,b){return document.createTextNode(b?a.replace(s,""):a)}function b(a){return a.replace(u,h)}function c(a,b){return"".concat(b.base,b.size,"/",a,b.ext)}function d(a,b){for(var c,e,f=a.childNodes,g=f.length;g--;)c=f[g],e=c.nodeType,3===e?b.push(c):1!==e||"ownerSVGElement"in c||v.test(c.nodeName.toLowerCase())||d(c,b);return b}function e(a){return o(a.indexOf(t)<0?a.replace(s,""):a)}function f(b,c){for(var f,g,h,i,j,k,l,m,n,o,p,q,s,t=d(b,[]),u=t.length;u--;){for(h=!1,i=document.createDocumentFragment(),j=t[u],k=j.nodeValue,m=0;l=r.exec(k);){if(n=l.index,n!==m&&i.appendChild(a(k.slice(m,n),!0)),p=l[0],q=e(p),m=n+p.length,s=c.callback(q,c)){o=new Image,o.onerror=c.onerror,o.setAttribute("draggable","false"),f=c.attributes(p,q);for(g in f)f.hasOwnProperty(g)&&0!==g.indexOf("on")&&!o.hasAttribute(g)&&o.setAttribute(g,f[g]);o.className=c.className,o.alt=p,o.src=s,h=!0,i.appendChild(o)}o||i.appendChild(a(p,!1)),o=null}h&&(m<k.length&&i.appendChild(a(k.slice(m),!0)),j.parentNode.replaceChild(i,j))}return b}function g(a,c){return m(a,function(a){var d,f,g=a,h=e(a),i=c.callback(h,c);if(i){g="<img ".concat('class="',c.className,'" ','draggable="false" ','alt="',a,'"',' src="',i,'"'),d=c.attributes(a,h);for(f in d)d.hasOwnProperty(f)&&0!==f.indexOf("on")&&g.indexOf(" "+f+"=")===-1&&(g=g.concat(" ",f,'="',b(d[f]),'"'));g=g.concat("/>")}return g})}function h(a){return q[a]}function i(){return null}function j(a){return"number"==typeof a?a+"x"+a:a}function k(a){var b="string"==typeof a?parseInt(a,16):a;return b<65536?w(b):(b-=65536,w(55296+(b>>10),56320+(1023&b)))}function l(a,b){return b&&"function"!=typeof b||(b={callback:b}),("string"==typeof a?g:f)(a,{callback:b.callback||c,attributes:"function"==typeof b.attributes?b.attributes:i,base:"string"==typeof b.base?b.base:p.base,ext:b.ext||p.ext,size:b.folder||j(b.size||p.size),className:b.className||p.className,onerror:b.onerror||p.onerror})}function m(a,b){return String(a).replace(r,b)}function n(a){r.lastIndex=0;var b=r.test(a);return r.lastIndex=0,b}function o(a,b){for(var c=[],d=0,e=0,f=0;f<a.length;)d=a.charCodeAt(f++),e?(c.push((65536+(e-55296<<10)+(d-56320)).toString(16)),e=0):55296<=d&&d<=56319?e=d:c.push(d.toString(16));return c.join(b||"-")}var p={base:"https://twemoji.maxcdn.com/2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:k,toCodePoint:o},onerror:function(){this.parentNode&&this.parentNode.replaceChild(a(this.alt,!1),this)},parse:l,replace:m,test:n},q={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},r=/\ud83d[\udc68-\udc69](?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)(?:\ufe0f|\ud83c[\udffb-\udfff])\u200d[\u2640\u2642]\ufe0f|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|(?:\u002a)\ufe0f?\u20e3|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca-\udfcc]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd74\udd75\udd7a\udd90\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddd1-\udddd]|[\u261d\u26f7\u26f9\u270a-\u270d])(?:\ud83c[\udffb-\udfff]|)|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\u0023\u20e3|\u0030\u20e3|\u0031\u20e3|\u0032\u20e3|\u0033\u20e3|\u0034\u20e3|\u0035\u20e3|\u0036\u20e3|\u0037\u20e3|\u0038\u20e3|\u0039\u20e3|\ud800\udc00|\ud83c[\udc04\udccf\udd70\udd71\udd7e\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude02\ude1a\ude2f\ude32-\ude3a\ude50\ude51\udf00-\udf21\udf24-\udf84\udf86-\udf93\udf96\udf97\udf99-\udf9b\udf9e-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcd-\udff0\udff3-\udff5\udff7-\udfff]|\ud83d[\udc00-\udc41\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfd\udcff-\udd3d\udd49-\udd4e\udd50-\udd67\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda4\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\udecb\udecd-\uded2\udee0-\udee5\udee9\udeeb\udeec\udef0\udef3-\udef8]|\ud83e[\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd40-\udd45\udd47-\udd4c\udd50-\udd6b\udd80-\udd97\uddc0\uddd0\uddde-\udde6]|[\u00a9\u00ae\u203c\u2049\u2122\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26ce\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2705\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2728\u2733\u2734\u2744\u2747\u274c\u274e\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27a1\u27b0\u27bf\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299\ue50a]|(?:\u2639)(?:\ufe0f|(?!\ufe0e))/g,s=/\uFE0F/g,t=String.fromCharCode(8205),u=/[&<>'"]/g,v=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,w=String.fromCharCode;return p}();!function(a,b){function c(){function c(){return!j.implementation.hasFeature||j.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}function d(){if(!k){if("undefined"==typeof a.twemoji){if(l>600)return;return a.clearTimeout(h),h=a.setTimeout(d,50),void l++}g=a.twemoji,k=!0,i&&new i(function(a){for(var b,c,d,g,h=a.length;h--;){if(b=a[h].addedNodes,c=a[h].removedNodes,d=b.length,1===d&&1===c.length&&3===b[0].nodeType&&"IMG"===c[0].nodeName&&b[0].data===c[0].alt&&"load-failed"===c[0].getAttribute("data-error"))return;for(;d--;){if(g=b[d],3===g.nodeType){if(!g.parentNode)continue;if(m)for(;g.nextSibling&&3===g.nextSibling.nodeType;)g.nodeValue=g.nodeValue+g.nextSibling.nodeValue,g.parentNode.removeChild(g.nextSibling);g=g.parentNode}!g||1!==g.nodeType||g.className&&"string"==typeof g.className&&g.className.indexOf("wp-exclude-emoji")!==-1||e(g.textContent)&&f(g)}}}).observe(j.body,{childList:!0,subtree:!0}),f(j.body)}}function e(a){var b=/[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/,c=/[\uDC00-\uDFFF]/;return!!a&&(c.test(a)||b.test(a))}function f(a,d){var e;return!b.supports.everything&&g&&a&&("string"==typeof a||a.childNodes&&a.childNodes.length)?(d=d||{},e={base:c()?b.svgUrl:b.baseUrl,ext:c()?b.svgExt:b.ext,className:d.className||"emoji",callback:function(a,c){switch(a){case"a9":case"ae":case"2122":case"2194":case"2660":case"2663":case"2665":case"2666":return!1}return!(b.supports.everythingExceptFlag&&!/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(a)&&!/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(a))&&"".concat(c.base,a,c.ext)},onerror:function(){g.parentNode&&(this.setAttribute("data-error","load-failed"),g.parentNode.replaceChild(j.createTextNode(g.alt),g))}},"object"==typeof d.imgAttr&&(e.attributes=function(){return d.imgAttr}),g.parse(a,e)):a}var g,h,i=a.MutationObserver||a.WebKitMutationObserver||a.MozMutationObserver,j=a.document,k=!1,l=0,m=a.navigator.userAgent.indexOf("Trident/7.0")>0;return b&&(b.DOMReady?d():b.readyCallback=d),{parse:f,test:e}}a.wp=a.wp||{},a.wp.emoji=new c}(window,window._wpemojiSettings);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * jQuery Migrate - v1.4.1 - 2016-05-19
 * Copyright jQuery Foundation and other contributors
 */
(function( jQuery, window, undefined ) {
    // See http://bugs.jquery.com/ticket/13335
    // "use strict";
    
    
    jQuery.migrateVersion = "1.4.1";
    
    
    var warnedAbout = {};
    
    // List of warnings already given; public read only
    jQuery.migrateWarnings = [];
    
    // Set to true to prevent console output; migrateWarnings still maintained
    // jQuery.migrateMute = false;
    
    // Show a message on the console so devs know we're active
    if ( window.console && window.console.log ) {
        window.console.log( "JQMIGRATE: Migrate is installed" +
            ( jQuery.migrateMute ? "" : " with logging active" ) +
            ", version " + jQuery.migrateVersion );
    }
    
    // Set to false to disable traces that appear with warnings
    if ( jQuery.migrateTrace === undefined ) {
        jQuery.migrateTrace = true;
    }
    
    // Forget any warnings we've already given; public
    jQuery.migrateReset = function() {
        warnedAbout = {};
        jQuery.migrateWarnings.length = 0;
    };
    
    function migrateWarn( msg) {
        var console = window.console;
        if ( !warnedAbout[ msg ] ) {
            warnedAbout[ msg ] = true;
            jQuery.migrateWarnings.push( msg );
            if ( console && console.warn && !jQuery.migrateMute ) {
                console.warn( "JQMIGRATE: " + msg );
                if ( jQuery.migrateTrace && console.trace ) {
                    console.trace();
                }
            }
        }
    }
    
    function migrateWarnProp( obj, prop, value, msg ) {
        if ( Object.defineProperty ) {
            // On ES5 browsers (non-oldIE), warn if the code tries to get prop;
            // allow property to be overwritten in case some other plugin wants it
            try {
                Object.defineProperty( obj, prop, {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        migrateWarn( msg );
                        return value;
                    },
                    set: function( newValue ) {
                        migrateWarn( msg );
                        value = newValue;
                    }
                });
                return;
            } catch( err ) {
                // IE8 is a dope about Object.defineProperty, can't warn there
            }
        }
    
        // Non-ES5 (or broken) browser; just set the property
        jQuery._definePropertyBroken = true;
        obj[ prop ] = value;
    }
    
    if ( document.compatMode === "BackCompat" ) {
        // jQuery has never supported or tested Quirks Mode
        migrateWarn( "jQuery is not compatible with Quirks Mode" );
    }
    
    
    var attrFn = jQuery( "<input/>", { size: 1 } ).attr("size") && jQuery.attrFn,
        oldAttr = jQuery.attr,
        valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||
            function() { return null; },
        valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||
            function() { return undefined; },
        rnoType = /^(?:input|button)$/i,
        rnoAttrNodeType = /^[238]$/,
        rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ruseDefault = /^(?:checked|selected)$/i;
    
    // jQuery.attrFn
    migrateWarnProp( jQuery, "attrFn", attrFn || {}, "jQuery.attrFn is deprecated" );
    
    jQuery.attr = function( elem, name, value, pass ) {
        var lowerName = name.toLowerCase(),
            nType = elem && elem.nodeType;
    
        if ( pass ) {
            // Since pass is used internally, we only warn for new jQuery
            // versions where there isn't a pass arg in the formal params
            if ( oldAttr.length < 4 ) {
                migrateWarn("jQuery.fn.attr( props, pass ) is deprecated");
            }
            if ( elem && !rnoAttrNodeType.test( nType ) &&
                (attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {
                return jQuery( elem )[ name ]( value );
            }
        }
    
        // Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking
        // for disconnected elements we don't warn on $( "<button>", { type: "button" } ).
        if ( name === "type" && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {
            migrateWarn("Can't change the 'type' of an input or button in IE 6/7/8");
        }
    
        // Restore boolHook for boolean property/attribute synchronization
        if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {
            jQuery.attrHooks[ lowerName ] = {
                get: function( elem, name ) {
                    // Align boolean attributes with corresponding properties
                    // Fall back to attribute presence where some booleans are not supported
                    var attrNode,
                        property = jQuery.prop( elem, name );
                    return property === true || typeof property !== "boolean" &&
                        ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
    
                        name.toLowerCase() :
                        undefined;
                },
                set: function( elem, value, name ) {
                    var propName;
                    if ( value === false ) {
                        // Remove boolean attributes when set to false
                        jQuery.removeAttr( elem, name );
                    } else {
                        // value is true since we know at this point it's type boolean and not false
                        // Set boolean attributes to the same name and set the DOM property
                        propName = jQuery.propFix[ name ] || name;
                        if ( propName in elem ) {
                            // Only set the IDL specifically if it already exists on the element
                            elem[ propName ] = true;
                        }
    
                        elem.setAttribute( name, name.toLowerCase() );
                    }
                    return name;
                }
            };
    
            // Warn only for attributes that can remain distinct from their properties post-1.9
            if ( ruseDefault.test( lowerName ) ) {
                migrateWarn( "jQuery.fn.attr('" + lowerName + "') might use property instead of attribute" );
            }
        }
    
        return oldAttr.call( jQuery, elem, name, value );
    };
    
    // attrHooks: value
    jQuery.attrHooks.value = {
        get: function( elem, name ) {
            var nodeName = ( elem.nodeName || "" ).toLowerCase();
            if ( nodeName === "button" ) {
                return valueAttrGet.apply( this, arguments );
            }
            if ( nodeName !== "input" && nodeName !== "option" ) {
                migrateWarn("jQuery.fn.attr('value') no longer gets properties");
            }
            return name in elem ?
                elem.value :
                null;
        },
        set: function( elem, value ) {
            var nodeName = ( elem.nodeName || "" ).toLowerCase();
            if ( nodeName === "button" ) {
                return valueAttrSet.apply( this, arguments );
            }
            if ( nodeName !== "input" && nodeName !== "option" ) {
                migrateWarn("jQuery.fn.attr('value', val) no longer sets properties");
            }
            // Does not return so that setAttribute is also used
            elem.value = value;
        }
    };
    
    
    var matched, browser,
        oldInit = jQuery.fn.init,
        oldFind = jQuery.find,
        oldParseJSON = jQuery.parseJSON,
        rspaceAngle = /^\s*</,
        rattrHashTest = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        rattrHashGlob = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
        // Note: XSS check is done below after string is trimmed
        rquickExpr = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    
    // $(html) "looks like html" rule change
    jQuery.fn.init = function( selector, context, rootjQuery ) {
        var match, ret;
    
        if ( selector && typeof selector === "string" ) {
            if ( !jQuery.isPlainObject( context ) &&
                    (match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {
    
                // This is an HTML string according to the "old" rules; is it still?
                if ( !rspaceAngle.test( selector ) ) {
                    migrateWarn("$(html) HTML strings must start with '<' character");
                }
                if ( match[ 3 ] ) {
                    migrateWarn("$(html) HTML text after last tag is ignored");
                }
    
                // Consistently reject any HTML-like string starting with a hash (gh-9521)
                // Note that this may break jQuery 1.6.x code that otherwise would work.
                if ( match[ 0 ].charAt( 0 ) === "#" ) {
                    migrateWarn("HTML string cannot start with a '#' character");
                    jQuery.error("JQMIGRATE: Invalid selector string (XSS)");
                }
    
                // Now process using loose rules; let pre-1.8 play too
                // Is this a jQuery context? parseHTML expects a DOM element (#178)
                if ( context && context.context && context.context.nodeType ) {
                    context = context.context;
                }
    
                if ( jQuery.parseHTML ) {
                    return oldInit.call( this,
                            jQuery.parseHTML( match[ 2 ], context && context.ownerDocument ||
                                context || document, true ), context, rootjQuery );
                }
            }
        }
    
        ret = oldInit.apply( this, arguments );
    
        // Fill in selector and context properties so .live() works
        if ( selector && selector.selector !== undefined ) {
            // A jQuery object, copy its properties
            ret.selector = selector.selector;
            ret.context = selector.context;
    
        } else {
            ret.selector = typeof selector === "string" ? selector : "";
            if ( selector ) {
                ret.context = selector.nodeType? selector : context || document;
            }
        }
    
        return ret;
    };
    jQuery.fn.init.prototype = jQuery.fn;
    
    jQuery.find = function( selector ) {
        var args = Array.prototype.slice.call( arguments );
    
        // Support: PhantomJS 1.x
        // String#match fails to match when used with a //g RegExp, only on some strings
        if ( typeof selector === "string" && rattrHashTest.test( selector ) ) {
    
            // The nonstandard and undocumented unquoted-hash was removed in jQuery 1.12.0
            // First see if qS thinks it's a valid selector, if so avoid a false positive
            try {
                document.querySelector( selector );
            } catch ( err1 ) {
    
                // Didn't *look* valid to qSA, warn and try quoting what we think is the value
                selector = selector.replace( rattrHashGlob, function( _, attr, op, value ) {
                    return "[" + attr + op + "\"" + value + "\"]";
                } );
    
                // If the regexp *may* have created an invalid selector, don't update it
                // Note that there may be false alarms if selector uses jQuery extensions
                try {
                    document.querySelector( selector );
                    migrateWarn( "Attribute selector with '#' must be quoted: " + args[ 0 ] );
                    args[ 0 ] = selector;
                } catch ( err2 ) {
                    migrateWarn( "Attribute selector with '#' was not fixed: " + args[ 0 ] );
                }
            }
        }
    
        return oldFind.apply( this, args );
    };
    
    // Copy properties attached to original jQuery.find method (e.g. .attr, .isXML)
    var findProp;
    for ( findProp in oldFind ) {
        if ( Object.prototype.hasOwnProperty.call( oldFind, findProp ) ) {
            jQuery.find[ findProp ] = oldFind[ findProp ];
        }
    }
    
    // Let $.parseJSON(falsy_value) return null
    jQuery.parseJSON = function( json ) {
        if ( !json ) {
            migrateWarn("jQuery.parseJSON requires a valid JSON string");
            return null;
        }
        return oldParseJSON.apply( this, arguments );
    };
    
    jQuery.uaMatch = function( ua ) {
        ua = ua.toLowerCase();
    
        var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
            /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
            /(msie) ([\w.]+)/.exec( ua ) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
            [];
    
        return {
            browser: match[ 1 ] || "",
            version: match[ 2 ] || "0"
        };
    };
    
    // Don't clobber any existing jQuery.browser in case it's different
    if ( !jQuery.browser ) {
        matched = jQuery.uaMatch( navigator.userAgent );
        browser = {};
    
        if ( matched.browser ) {
            browser[ matched.browser ] = true;
            browser.version = matched.version;
        }
    
        // Chrome is Webkit, but Webkit is also Safari.
        if ( browser.chrome ) {
            browser.webkit = true;
        } else if ( browser.webkit ) {
            browser.safari = true;
        }
    
        jQuery.browser = browser;
    }
    
    // Warn if the code tries to get jQuery.browser
    migrateWarnProp( jQuery, "browser", jQuery.browser, "jQuery.browser is deprecated" );
    
    // jQuery.boxModel deprecated in 1.3, jQuery.support.boxModel deprecated in 1.7
    jQuery.boxModel = jQuery.support.boxModel = (document.compatMode === "CSS1Compat");
    migrateWarnProp( jQuery, "boxModel", jQuery.boxModel, "jQuery.boxModel is deprecated" );
    migrateWarnProp( jQuery.support, "boxModel", jQuery.support.boxModel, "jQuery.support.boxModel is deprecated" );
    
    jQuery.sub = function() {
        function jQuerySub( selector, context ) {
            return new jQuerySub.fn.init( selector, context );
        }
        jQuery.extend( true, jQuerySub, this );
        jQuerySub.superclass = this;
        jQuerySub.fn = jQuerySub.prototype = this();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.sub = this.sub;
        jQuerySub.fn.init = function init( selector, context ) {
            var instance = jQuery.fn.init.call( this, selector, context, rootjQuerySub );
            return instance instanceof jQuerySub ?
                instance :
                jQuerySub( instance );
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        migrateWarn( "jQuery.sub() is deprecated" );
        return jQuerySub;
    };
    
    // The number of elements contained in the matched element set
    jQuery.fn.size = function() {
        migrateWarn( "jQuery.fn.size() is deprecated; use the .length property" );
        return this.length;
    };
    
    
    var internalSwapCall = false;
    
    // If this version of jQuery has .swap(), don't false-alarm on internal uses
    if ( jQuery.swap ) {
        jQuery.each( [ "height", "width", "reliableMarginRight" ], function( _, name ) {
            var oldHook = jQuery.cssHooks[ name ] && jQuery.cssHooks[ name ].get;
    
            if ( oldHook ) {
                jQuery.cssHooks[ name ].get = function() {
                    var ret;
    
                    internalSwapCall = true;
                    ret = oldHook.apply( this, arguments );
                    internalSwapCall = false;
                    return ret;
                };
            }
        });
    }
    
    jQuery.swap = function( elem, options, callback, args ) {
        var ret, name,
            old = {};
    
        if ( !internalSwapCall ) {
            migrateWarn( "jQuery.swap() is undocumented and deprecated" );
        }
    
        // Remember the old values, and insert the new ones
        for ( name in options ) {
            old[ name ] = elem.style[ name ];
            elem.style[ name ] = options[ name ];
        }
    
        ret = callback.apply( elem, args || [] );
    
        // Revert the old values
        for ( name in options ) {
            elem.style[ name ] = old[ name ];
        }
    
        return ret;
    };
    
    
    // Ensure that $.ajax gets the new parseJSON defined in core.js
    jQuery.ajaxSetup({
        converters: {
            "text json": jQuery.parseJSON
        }
    });
    
    
    var oldFnData = jQuery.fn.data;
    
    jQuery.fn.data = function( name ) {
        var ret, evt,
            elem = this[0];
    
        // Handles 1.7 which has this behavior and 1.8 which doesn't
        if ( elem && name === "events" && arguments.length === 1 ) {
            ret = jQuery.data( elem, name );
            evt = jQuery._data( elem, name );
            if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {
                migrateWarn("Use of jQuery.fn.data('events') is deprecated");
                return evt;
            }
        }
        return oldFnData.apply( this, arguments );
    };
    
    
    var rscriptType = /\/(java|ecma)script/i;
    
    // Since jQuery.clean is used internally on older versions, we only shim if it's missing
    if ( !jQuery.clean ) {
        jQuery.clean = function( elems, context, fragment, scripts ) {
            // Set context per 1.8 logic
            context = context || document;
            context = !context.nodeType && context[0] || context;
            context = context.ownerDocument || context;
    
            migrateWarn("jQuery.clean() is deprecated");
    
            var i, elem, handleScript, jsTags,
                ret = [];
    
            jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );
    
            // Complex logic lifted directly from jQuery 1.8
            if ( fragment ) {
                // Special handling of each script element
                handleScript = function( elem ) {
                    // Check if we consider it executable
                    if ( !elem.type || rscriptType.test( elem.type ) ) {
                        // Detach the script and store it in the scripts array (if provided) or the fragment
                        // Return truthy to indicate that it has been handled
                        return scripts ?
                            scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :
                            fragment.appendChild( elem );
                    }
                };
    
                for ( i = 0; (elem = ret[i]) != null; i++ ) {
                    // Check if we're done after handling an executable script
                    if ( !( jQuery.nodeName( elem, "script" ) && handleScript( elem ) ) ) {
                        // Append to fragment and handle embedded scripts
                        fragment.appendChild( elem );
                        if ( typeof elem.getElementsByTagName !== "undefined" ) {
                            // handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration
                            jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName("script") ), handleScript );
    
                            // Splice the scripts into ret after their former ancestor and advance our index beyond them
                            ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
                            i += jsTags.length;
                        }
                    }
                }
            }
    
            return ret;
        };
    }
    
    var eventAdd = jQuery.event.add,
        eventRemove = jQuery.event.remove,
        eventTrigger = jQuery.event.trigger,
        oldToggle = jQuery.fn.toggle,
        oldLive = jQuery.fn.live,
        oldDie = jQuery.fn.die,
        oldLoad = jQuery.fn.load,
        ajaxEvents = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        rajaxEvent = new RegExp( "\\b(?:" + ajaxEvents + ")\\b" ),
        rhoverHack = /(?:^|\s)hover(\.\S+|)\b/,
        hoverHack = function( events ) {
            if ( typeof( events ) !== "string" || jQuery.event.special.hover ) {
                return events;
            }
            if ( rhoverHack.test( events ) ) {
                migrateWarn("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'");
            }
            return events && events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
        };
    
    // Event props removed in 1.9, put them back if needed; no practical way to warn them
    if ( jQuery.event.props && jQuery.event.props[ 0 ] !== "attrChange" ) {
        jQuery.event.props.unshift( "attrChange", "attrName", "relatedNode", "srcElement" );
    }
    
    // Undocumented jQuery.event.handle was "deprecated" in jQuery 1.7
    if ( jQuery.event.dispatch ) {
        migrateWarnProp( jQuery.event, "handle", jQuery.event.dispatch, "jQuery.event.handle is undocumented and deprecated" );
    }
    
    // Support for 'hover' pseudo-event and ajax event warnings
    jQuery.event.add = function( elem, types, handler, data, selector ){
        if ( elem !== document && rajaxEvent.test( types ) ) {
            migrateWarn( "AJAX events should be attached to document: " + types );
        }
        eventAdd.call( this, elem, hoverHack( types || "" ), handler, data, selector );
    };
    jQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){
        eventRemove.call( this, elem, hoverHack( types ) || "", handler, selector, mappedTypes );
    };
    
    jQuery.each( [ "load", "unload", "error" ], function( _, name ) {
    
        jQuery.fn[ name ] = function() {
            var args = Array.prototype.slice.call( arguments, 0 );
    
            // If this is an ajax load() the first arg should be the string URL;
            // technically this could also be the "Anything" arg of the event .load()
            // which just goes to show why this dumb signature has been deprecated!
            // jQuery custom builds that exclude the Ajax module justifiably die here.
            if ( name === "load" && typeof args[ 0 ] === "string" ) {
                return oldLoad.apply( this, args );
            }
    
            migrateWarn( "jQuery.fn." + name + "() is deprecated" );
    
            args.splice( 0, 0, name );
            if ( arguments.length ) {
                return this.bind.apply( this, args );
            }
    
            // Use .triggerHandler here because:
            // - load and unload events don't need to bubble, only applied to window or image
            // - error event should not bubble to window, although it does pre-1.7
            // See http://bugs.jquery.com/ticket/11820
            this.triggerHandler.apply( this, args );
            return this;
        };
    
    });
    
    jQuery.fn.toggle = function( fn, fn2 ) {
    
        // Don't mess with animation or css toggles
        if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
            return oldToggle.apply( this, arguments );
        }
        migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");
    
        // Save reference to arguments for access in closure
        var args = arguments,
            guid = fn.guid || jQuery.guid++,
            i = 0,
            toggler = function( event ) {
                // Figure out which function to execute
                var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
                jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
    
                // Make sure that clicks stop
                event.preventDefault();
    
                // and execute the function
                return args[ lastToggle ].apply( this, arguments ) || false;
            };
    
        // link all the functions, so any of them can unbind this click handler
        toggler.guid = guid;
        while ( i < args.length ) {
            args[ i++ ].guid = guid;
        }
    
        return this.click( toggler );
    };
    
    jQuery.fn.live = function( types, data, fn ) {
        migrateWarn("jQuery.fn.live() is deprecated");
        if ( oldLive ) {
            return oldLive.apply( this, arguments );
        }
        jQuery( this.context ).on( types, this.selector, data, fn );
        return this;
    };
    
    jQuery.fn.die = function( types, fn ) {
        migrateWarn("jQuery.fn.die() is deprecated");
        if ( oldDie ) {
            return oldDie.apply( this, arguments );
        }
        jQuery( this.context ).off( types, this.selector || "**", fn );
        return this;
    };
    
    // Turn global events into document-triggered events
    jQuery.event.trigger = function( event, data, elem, onlyHandlers  ){
        if ( !elem && !rajaxEvent.test( event ) ) {
            migrateWarn( "Global events are undocumented and deprecated" );
        }
        return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );
    };
    jQuery.each( ajaxEvents.split("|"),
        function( _, name ) {
            jQuery.event.special[ name ] = {
                setup: function() {
                    var elem = this;
    
                    // The document needs no shimming; must be !== for oldIE
                    if ( elem !== document ) {
                        jQuery.event.add( document, name + "." + jQuery.guid, function() {
                            jQuery.event.trigger( name, Array.prototype.slice.call( arguments, 1 ), elem, true );
                        });
                        jQuery._data( this, name, jQuery.guid++ );
                    }
                    return false;
                },
                teardown: function() {
                    if ( this !== document ) {
                        jQuery.event.remove( document, name + "." + jQuery._data( this, name ) );
                    }
                    return false;
                }
            };
        }
    );
    
    jQuery.event.special.ready = {
        setup: function() {
            if ( this === document ) {
                migrateWarn( "'ready' event is deprecated" );
            }
        }
    };
    
    var oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack,
        oldFnFind = jQuery.fn.find;
    
    jQuery.fn.andSelf = function() {
        migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return oldSelf.apply( this, arguments );
    };
    
    jQuery.fn.find = function( selector ) {
        var ret = oldFnFind.apply( this, arguments );
        ret.context = this.context;
        ret.selector = this.selector ? this.selector + " " + selector : selector;
        return ret;
    };
    
    
    // jQuery 1.6 did not support Callbacks, do not warn there
    if ( jQuery.Callbacks ) {
    
        var oldDeferred = jQuery.Deferred,
            tuples = [
                // action, add listener, callbacks, .then handlers, final state
                [ "resolve", "done", jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"), "resolved" ],
                [ "reject", "fail", jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"), "rejected" ],
                [ "notify", "progress", jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory") ]
            ];
    
        jQuery.Deferred = function( func ) {
            var deferred = oldDeferred(),
                promise = deferred.promise();
    
            deferred.pipe = promise.pipe = function( /* fnDone, fnFail, fnProgress */ ) {
                var fns = arguments;
    
                migrateWarn( "deferred.pipe() is deprecated" );
    
                return jQuery.Deferred(function( newDefer ) {
                    jQuery.each( tuples, function( i, tuple ) {
                        var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
                        // deferred.done(function() { bind to newDefer or newDefer.resolve })
                        // deferred.fail(function() { bind to newDefer or newDefer.reject })
                        // deferred.progress(function() { bind to newDefer or newDefer.notify })
                        deferred[ tuple[1] ](function() {
                            var returned = fn && fn.apply( this, arguments );
                            if ( returned && jQuery.isFunction( returned.promise ) ) {
                                returned.promise()
                                    .done( newDefer.resolve )
                                    .fail( newDefer.reject )
                                    .progress( newDefer.notify );
                            } else {
                                newDefer[ tuple[ 0 ] + "With" ](
                                    this === promise ? newDefer.promise() : this,
                                    fn ? [ returned ] : arguments
                                );
                            }
                        });
                    });
                    fns = null;
                }).promise();
    
            };
    
            deferred.isResolved = function() {
                migrateWarn( "deferred.isResolved is deprecated" );
                return deferred.state() === "resolved";
            };
    
            deferred.isRejected = function() {
                migrateWarn( "deferred.isRejected is deprecated" );
                return deferred.state() === "rejected";
            };
    
            if ( func ) {
                func.call( deferred, deferred );
            }
    
            return deferred;
        };
    
    }
    
    })( jQuery, window );"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./assets/js/jquery-1.12.4\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function($) {
    'use strict';
    if (typeof _wpcf7 === 'undefined' || _wpcf7 === null) {
        return;
    }
    _wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, _wpcf7);
    $.fn.wpcf7InitForm = function() {
        this.ajaxForm({
            beforeSubmit: function(arr, $form, options) {
                $form.wpcf7ClearResponseOutput();
                $form.find('[aria-invalid]').attr('aria-invalid', 'false');
                $form.find('.ajax-loader').addClass('is-active');
                return true;
            },
            beforeSerialize: function($form, options) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val('');
                });
                return true;
            },
            data: {
                '_wpcf7_is_ajax_call': 1
            },
            dataType: 'json',
            success: $.wpcf7AjaxSuccess,
            error: function(xhr, status, error, $form) {
                var e = $('<div class="ajax-error"></div>').text(error.message);
                $form.after(e);
            }
        });
        if (_wpcf7.cached) {
            this.wpcf7OnloadRefill();
        }
        this.wpcf7ToggleSubmit();
        this.find('.wpcf7-submit').wpcf7AjaxLoader();
        this.find('.wpcf7-acceptance').click(function() {
            $(this).closest('form').wpcf7ToggleSubmit();
        });
        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
        this.find('[placeholder]').wpcf7Placeholder();
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        this.find('.wpcf7-character-count').wpcf7CharacterCount();
        this.find('.wpcf7-validates-as-url').change(function() {
            $(this).wpcf7NormalizeUrl();
        });
        this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
    };
    $.wpcf7AjaxSuccess = function(data, status, xhr, $form) {
        if (!$.isPlainObject(data) || $.isEmptyObject(data)) {
            return;
        }
        _wpcf7.inputs = $form.serializeArray();
        var $responseOutput = $form.find('div.wpcf7-response-output');
        $form.wpcf7ClearResponseOutput();
        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');
        if (data.captcha) {
            $form.wpcf7RefillCaptcha(data.captcha);
        }
        if (data.quiz) {
            $form.wpcf7RefillQuiz(data.quiz);
        }
        if (data.invalids) {
            $.each(data.invalids, function(i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            });
            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');
            $(data.into).wpcf7TriggerEvent('invalid');
        } else if (1 == data.spam) {
            $form.find('[name="g-recaptcha-response"]').each(function() {
                if ('' == $(this).val()) {
                    var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
                    $recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
                }
            });
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');
            $(data.into).wpcf7TriggerEvent('spam');
        } else if (1 == data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');
            if (data.onSentOk) {
                $.each(data.onSentOk, function(i, n) {
                    eval(n)
                });
            }
            $(data.into).wpcf7TriggerEvent('mailsent');
        } else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');
            $(data.into).wpcf7TriggerEvent('mailfailed');
        }
        if (data.onSubmit) {
            $.each(data.onSubmit, function(i, n) {
                eval(n)
            });
        }
        $(data.into).wpcf7TriggerEvent('submit');
        if (1 == data.mailSent) {
            $form.resetForm();
        }
        $form.find('[placeholder].placeheld').each(function(i, n) {
            $(n).val($(n).attr('placeholder'));
        });
        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role', 'alert');
        $.wpcf7UpdateScreenReaderResponse($form, data);
    };
    $.fn.wpcf7TriggerEvent = function(name) {
        return this.each(function() {
            var elmId = this.id;
            var inputs = _wpcf7.inputs;
            var event = new CustomEvent('wpcf7' + name, {
                bubbles: true,
                detail: {
                    id: elmId,
                    inputs: inputs
                }
            });
            this.dispatchEvent(event);
            $(this).trigger('wpcf7:' + name);
            $(this).trigger(name + '.wpcf7');
        });
    };
    $.fn.wpcf7ExclusiveCheckbox = function() {
        return this.find('input:checkbox').click(function() {
            var name = $(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
    };
    $.fn.wpcf7Placeholder = function() {
        if (_wpcf7.supportHtml5.placeholder) {
            return this;
        }
        return this.each(function() {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
            $(this).focus(function() {
                if ($(this).hasClass('placeheld')) {
                    $(this).val('').removeClass('placeheld');
                }
            });
            $(this).blur(function() {
                if ('' === $(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            });
        });
    };
    $.fn.wpcf7AjaxLoader = function() {
        return this.each(function() {
            $(this).after('<span class="ajax-loader"></span>');
        });
    };
    $.fn.wpcf7ToggleSubmit = function() {
        return this.each(function() {
            var form = $(this);
            if (this.tagName.toLowerCase() != 'form') {
                form = $(this).find('form').first();
            }
            if (form.hasClass('wpcf7-acceptance-as-validation')) {
                return;
            }
            var submit = form.find('input:submit');
            if (!submit.length) {
                return;
            }
            var acceptances = form.find('input:checkbox.wpcf7-acceptance');
            if (!acceptances.length) {
                return;
            }
            submit.removeAttr('disabled');
            acceptances.each(function(i, n) {
                n = $(n);
                if (n.hasClass('wpcf7-invert') && n.is(':checked') || !n.hasClass('wpcf7-invert') && !n.is(':checked')) {
                    submit.attr('disabled', 'disabled');
                }
            });
        });
    };
    $.fn.wpcf7ToggleCheckboxFreetext = function() {
        return this.each(function() {
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            } else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }
            $wrap.find(':checkbox, :radio').change(function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext = $(':input.wpcf7-free-text', $wrap);
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
    };
    $.fn.wpcf7CharacterCount = function() {
        return this.each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function($target) {
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $count.closest('form').find(':input[name="' + name + '"]').each(function() {
                updateCount($(this));
                $(this).keyup(function() {
                    updateCount($(this));
                });
            });
        });
    };
    $.fn.wpcf7NormalizeUrl = function() {
        return this.each(function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    $.fn.wpcf7NotValidTip = function(message) {
        return this.each(function() {
            var $into = $(this);
            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
            if ($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function() {
                    $(this).wpcf7FadeOut();
                });
                $(':input', $into).focus(function() {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                });
            }
        });
    };
    $.fn.wpcf7FadeOut = function() {
        return this.each(function() {
            $(this).animate({
                opacity: 0
            }, 'fast', function() {
                $(this).css({
                    'z-index': -100
                });
            });
        });
    };
    $.fn.wpcf7OnloadRefill = function() {
        return this.each(function() {
            var url = $(this).attr('action');
            if (0 < url.indexOf('#')) {
                url = url.substr(0, url.indexOf('#'));
            }
            var id = $(this).find('input[name="_wpcf7"]').val();
            var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
            $.getJSON(url, {
                _wpcf7_is_ajax_call: 1,
                _wpcf7: id,
                _wpcf7_request_ver: $.now()
            }, function(data) {
                if (data && data.captcha) {
                    $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
                }
                if (data && data.quiz) {
                    $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
                }
            });
        });
    };
    $.fn.wpcf7RefillCaptcha = function(captcha) {
        return this.each(function() {
            var form = $(this);
            $.each(captcha, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        });
    };
    $.fn.wpcf7RefillQuiz = function(quiz) {
        return this.each(function() {
            var form = $(this);
            $.each(quiz, function(i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        });
    };
    $.fn.wpcf7ClearResponseOutput = function() {
        return this.each(function() {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('.ajax-loader').removeClass('is-active');
        });
    };
    $.fn.wpcf7Recaptcha = function() {
        return this.each(function() {
            var events = 'wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
            $(this).closest('div.wpcf7').on(events, function(e) {
                if (recaptchaWidgets && grecaptcha) {
                    $.each(recaptchaWidgets, function(index, value) {
                        grecaptcha.reset(value);
                    });
                }
            });
        });
    };
    $.wpcf7UpdateScreenReaderResponse = function($form, data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');
        if (data.message) {
            var $response = $form.siblings('.screen-reader-response').first();
            $response.append(data.message);
            if (data.invalids) {
                var $invalids = $('<ul></ul>');
                $.each(data.invalids, function(i, n) {
                    if (n.idref) {
                        var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                    } else {
                        var $li = $('<li></li>').append(n.message);
                    }
                    $invalids.append($li);
                });
                $response.append($invalids);
            }
            $response.attr('role', 'alert').focus();
        }
    };
    $.wpcf7SupportHtml5 = function() {
        var features = {};
        var input = document.createElement('input');
        features.placeholder = 'placeholder' in input;
        var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
        $.each(inputTypes, function(index, value) {
            input.setAttribute('type', value);
            features[value] = input.type !== 'text';
        });
        return features;
    };
    $(function() {
        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    });
})(jQuery);
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./assets/js/jquery-1.12.4\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:1>(b/=e/2)?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return 1>(b/=e/2)?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){a=1.70158;var f=0,l=d;if(0==b)return c;if(1==(b/=e))return c+d;f||(f=.3*e);l<Math.abs(d)?(l=d,a=f/4):a=f/(2*Math.PI)*Math.asin(d/l);return-(l*Math.pow(2,10*--b)*Math.sin(2*(b*e-a)*Math.PI/f))+c},easeOutElastic:function(a,b,c,d,e){a=1.70158;var f=0,l=d;if(0==b)return c;if(1==(b/=e))return c+d;f||(f=.3*e);l<Math.abs(d)?(l=d,a=f/4):a=f/(2*Math.PI)*Math.asin(d/l);return l*Math.pow(2,-10*b)*Math.sin(2*(b*e-a)*Math.PI/f)+d+c},easeInOutElastic:function(a,b,c,d,e){a=1.70158;var f=0,l=d;if(0==b)return c;if(2==(b/=e/2))return c+d;f||(f=.3*e*1.5);l<Math.abs(d)?(l=d,a=f/4):a=f/(2*Math.PI)*Math.asin(d/l);return 1>b?-.5*l*Math.pow(2,10*--b)*Math.sin(2*(b*e-a)*Math.PI/f)+c:.5*l*Math.pow(2,-10*--b)*Math.sin(2*(b*e-a)*Math.PI/f)+d+c},easeInBack:function(a,b,c,d,e,f){void 0==f&&(f=1.70158);return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){void 0==f&&(f=1.70158);return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){void 0==f&&(f=1.70158);return 1>(b/=e/2)?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});(function(a){a.fn.supersubs=function(b){var c=a.extend({},a.fn.supersubs.defaults,b);return this.each(function(){var b=a(this),e=a.meta?a.extend({},c,b.data()):c,f=b.find("ul").show(),l=a('<li id="menu-fontsize">&#8212;</li>').css({padding:0,position:"absolute",top:"-999em",width:"auto"}).appendTo(b)[0].clientWidth;a("#menu-fontsize").remove();f.each(function(b){b=a(this);var c=b.children(),d=c.children("a"),f=c.css("white-space","nowrap").css("float");b.add(c).add(d).css({"float":"none",width:"auto"});d=b[0].clientWidth/l;d+=e.extraWidth;d>e.maxWidth?d=e.maxWidth:d<e.minWidth&&(d=e.minWidth);b.css("width",d+"em");c.css({"float":f,width:"100%","white-space":"normal"}).each(function(){var b=a(this).children("ul"),c=void 0!==b.css("left")?"left":"right";b.css(c,"100%")})}).hide()})};a.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}})(jQuery);(function(a){var b=0,c=0,d=0,e=0,f="ontouchstart"in window||0<navigator.msMaxTouchPoints,l="onorientationchange"in window,g=!1,t=!1,y=!1,S=!1,x=!1,C="pointer",O="pointer",Y=[],V=[],oa=[],X=[],E=[],ba=[],F=[],r=[],z=[],ca=[],ja=[],n={showScrollbar:function(b,c){b.scrollbarHide&&a("."+c).css({opacity:b.scrollbarOpacity,filter:"alpha(opacity:"+100*b.scrollbarOpacity+")"})},hideScrollbar:function(a,b,c,d,e,f,g,l,t,y){if(a.scrollbar&&a.scrollbarHide)for(var h=c;h<c+25;h++)b[b.length]=n.hideScrollbarIntervalTimer(10*h,d[c],(c+24-h)/24,e,f,g,l,t,y,a)},hideScrollbarInterval:function(b,c,h,d,f,k,g,l,t){e=-1*b/z[l]*(f-k-g-d);n.setSliderOffset("."+h,e);a("."+h).css({opacity:t.scrollbarOpacity*c,filter:"alpha(opacity:"+t.scrollbarOpacity*c*100+")"})},slowScrollHorizontalInterval:function(b,c,h,d,f,k,g,l,t,y,H,M,P,v,B,q,C,p,G){if(G.infiniteSlider){if(h<=-1*z[q]||h<=-1*ca[q]){var m=a(b).width();if(h<=-1*ca[q]){var A=-1*H[0];a(c).each(function(b){n.setSliderOffset(a(c)[b],A+C);b<M.length&&(M[b]=-1*A);A+=B[b]});h+=-1*M[0];r[q]=-1*M[0]+C;z[q]=r[q]+m-k;F[q]=0}for(;h<=-1*z[q];){var u=0,L=n.getSliderOffset(a(c[0]),"x");a(c).each(function(a){n.getSliderOffset(this,"x")<L&&(L=n.getSliderOffset(this,"x"),u=a)});P=r[q]+m;n.setSliderOffset(a(c)[u],P);r[q]=-1*M[1]+C;z[q]=r[q]+m-k;M.splice(0,1);M.splice(M.length,0,-1*P+C);F[q]++}}if(h>=-1*r[q]||0<=h){m=a(b).width();if(0<h)for(A=-1*H[0],a(c).each(function(b){n.setSliderOffset(a(c)[b],A+C);b<M.length&&(M[b]=-1*A);A+=B[b]}),h-=-1*M[0],r[q]=-1*M[0]+C,z[q]=r[q]+m-k,F[q]=v;0<-1*M[0]-m+C;){var D=0,Q=n.getSliderOffset(a(c[0]),"x");a(c).each(function(a){n.getSliderOffset(this,"x")>Q&&(Q=n.getSliderOffset(this,"x"),D=a)});P=r[q]-B[D];n.setSliderOffset(a(c)[D],P);M.splice(0,0,-1*P+C);M.splice(M.length-1,1);r[q]=-1*M[0]+C;z[q]=r[q]+m-k;F[q]--;E[q]++}for(;h>-1*r[q];)D=0,Q=n.getSliderOffset(a(c[0]),"x"),a(c).each(function(a){n.getSliderOffset(this,"x")>Q&&(Q=n.getSliderOffset(this,"x"),D=a)}),P=r[q]-B[D],n.setSliderOffset(a(c)[D],P),M.splice(0,0,-1*P+C),M.splice(M.length-1,1),r[q]=-1*M[0]+C,z[q]=r[q]+m-k,F[q]--}}H=!1;k=n.calcActiveOffset(G,h,M,k,F[q],v,y,q);P=(k+F[q]+v)%v;G.infiniteSlider?P!=ba[q]&&(H=!0):k!=E[q]&&(H=!0);if(H&&(v=new n.args("change",G,b,a(b).children(":eq("+P+")"),P,p),a(b).parent().data("args",v),""!=G.onSlideChange))G.onSlideChange(v);E[q]=k;ba[q]=P;h=Math.floor(h);if(q!=a(b).parent().data("args").data.sliderNumber)return!0;n.setSliderOffset(b,h);G.scrollbar&&(e=Math.floor((-1*h-r[q]+C)/(z[q]-r[q]+C)*(g-l-f)),b=f-t,h>=-1*r[q]+C?(b=f-t- -1*e,n.setSliderOffset(a("."+d),0)):(h<=-1*z[q]+1&&(b=g-l-t-e),n.setSliderOffset(a("."+d),e)),a("."+d).css({width:b+"px"}))},slowScrollHorizontal:function(b,c,h,d,e,f,g,l,t,y,C,M,P,v,B,q,x,p,G,J,R){var m=n.getSliderOffset(b,"x");f=[];var k=0,A=25/1024*l;frictionCoefficient=R.frictionCoefficient;elasticFrictionCoefficient=R.elasticFrictionCoefficient;snapFrictionCoefficient=R.snapFrictionCoefficient;e>R.snapVelocityThreshold&&R.snapToChildren&&!G?k=1:e<-1*R.snapVelocityThreshold&&R.snapToChildren&&!G&&(k=-1);e<-1*A?e=-1*A:e>A&&(e=A);a(b)[0]!==a(p)[0]&&(k*=-1,e*=-2);p=F[B];if(R.infiniteSlider)var u=r[B],L=z[B];G=[];A=[];for(var D=0;D<P.length;D++)G[D]=P[D],D<c.length&&(A[D]=n.getSliderOffset(a(c[D]),"x"));for(;1<e||-1>e;){e*=frictionCoefficient;m+=e;(m>-1*r[B]||m<-1*z[B])&&!R.infiniteSlider&&(e*=elasticFrictionCoefficient,m+=e);if(R.infiniteSlider){if(m<=-1*L){L=a(b).width();var H=0,Q=A[0];for(D=0;D<A.length;D++)A[D]<Q&&(Q=A[D],H=D);D=u+L;A[H]=D;u=-1*G[1]+J;L=u+L-l;G.splice(0,1);G.splice(G.length,0,-1*D+J);p++}if(m>=-1*u){L=a(b).width();H=0;Q=A[0];for(D=0;D<A.length;D++)A[D]>Q&&(Q=A[D],H=D);D=u-v[H];A[H]=D;G.splice(0,0,-1*D+J);G.splice(G.length-1,1);u=-1*G[0]+J;L=u+L-l;p--}}f[f.length]=m}A=!1;e=n.calcActiveOffset(R,m,G,l,p,x,E[B],B);u=(e+p+x)%x;R.snapToChildren&&(R.infiniteSlider?u!=ba[B]&&(A=!0):e!=E[B]&&(A=!0),0>k&&!A?(e++,e>=P.length&&!R.infiniteSlider&&(e=P.length-1)):0<k&&!A&&(e--,0>e&&!R.infiniteSlider&&(e=0)));if(R.snapToChildren||(m>-1*r[B]||m<-1*z[B])&&!R.infiniteSlider){(m>-1*r[B]||m<-1*z[B])&&!R.infiniteSlider?f.splice(0,f.length):(f.splice(.1*f.length,f.length),m=0<f.length?f[f.length-1]:m);for(;m<G[e]-.5||m>G[e]+.5;)m=(m-G[e])*snapFrictionCoefficient+G[e],f[f.length]=m;f[f.length]=G[e]}k=1;0!=f.length%2&&(k=0);for(m=0;m<h.length;m++)clearTimeout(h[m]);p=(e+p+x)%x;u=0;for(m=k;m<f.length;m+=2)if(m==k||1<Math.abs(f[m]-u)||m>=f.length-2)u=f[m],h[h.length]=n.slowScrollHorizontalIntervalTimer(10*m,b,c,f[m],d,g,l,t,y,C,e,M,P,q,x,v,B,J,p,R);u=(e+F[B]+x)%x;""!=R.onSlideComplete&&1<f.length&&(h[h.length]=n.onSlideCompleteTimer(10*(m+1),R,b,a(b).children(":eq("+u+")"),p,B));h[h.length]=n.updateBackfaceVisibilityTimer(10*(m+1),c,B,x,R);X[B]=h;n.hideScrollbar(R,h,m,f,d,g,l,y,C,B)},onSlideComplete:function(b,c,h,d,e){h=new n.args("complete",b,a(c),h,d,d);a(c).parent().data("args",h);if(""!=b.onSlideComplete)b.onSlideComplete(h)},getSliderOffset:function(b,c){c="x"==c?4:5;if(!g||t||y)var h=parseInt(a(b).css("left"),10);else{h=["-webkit-transform","-moz-transform","transform"];for(var d,e=0;e<h.length;e++)if(void 0!=a(b).css(h[e])&&0<a(b).css(h[e]).length){d=a(b).css(h[e]).split(",");break}h=void 0==d[c]?0:parseInt(d[c],10)}return h},setSliderOffset:function(b,c){c=parseInt(c,10);!g||t||y?a(b).css({left:c+"px"}):a(b).css({msTransform:"matrix(1,0,0,1,"+c+",0)",webkitTransform:"matrix(1,0,0,1,"+c+",0)",MozTransform:"matrix(1,0,0,1,"+c+",0)",transform:"matrix(1,0,0,1,"+c+",0)"})},setBrowserInfo:function(){null!=navigator.userAgent.match("WebKit")?(C="-webkit-grab",O="-webkit-grabbing"):null!=navigator.userAgent.match("Gecko")?(x=!0,C="move",O="-moz-grabbing"):null!=navigator.userAgent.match("MSIE 7")?S=t=!0:null!=navigator.userAgent.match("MSIE 8")?S=y=!0:null!=navigator.userAgent.match("MSIE 9")&&(S=!0)},has3DTransform:function(){var b=!1,c=a("<div />").css({msTransform:"matrix(1,1,1,1,1,1)",webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});""==c.attr("style")?b=!1:x&&21<=parseInt(navigator.userAgent.split("/")[3],10)?b=!1:void 0!=c.attr("style")&&(b=!0);return b},getSlideNumber:function(a,b,c){return(a-F[b]+c)%c},calcActiveOffset:function(a,b,c,d,e,f,g,l){e=!1;a=[];var h;b>c[0]&&(h=0);b<c[c.length-1]&&(h=f-1);for(f=0;f<c.length;f++)c[f]<=b&&c[f]>b-d&&(e||c[f]==b||(a[a.length]=c[f-1]),a[a.length]=c[f],e=!0);0==a.length&&(a[0]=c[c.length-1]);for(f=e=0;f<a.length;f++)g=Math.abs(b-a[f]),g<d&&(e=a[f],d=g);for(f=0;f<c.length;f++)e==c[f]&&(h=f);return h},changeSlide:function(b,c,h,d,e,f,g,l,t,y,C,r,x,v,B,q,z,p){n.autoSlidePause(v);for(var m=0;m<d.length;m++)clearTimeout(d[m]);var k=Math.ceil(p.autoSlideTransTimer/10)+1,A=n.getSliderOffset(c,"x"),u=r[b];u-=A;var L=b-(E[v]+F[v]+q)%q;if(p.infiniteSlider){b=(b-F[v]+2*q)%q;m=!1;0==b&&2==q&&(b=q,r[b]=r[b-1]-a(h).eq(0).outerWidth(!0),m=!0);u=r[b];u-=A;var D=[r[b]-a(c).width(),r[b]+a(c).width()];m&&r.splice(r.length-1,1);for(m=0;m<D.length;m++)Math.abs(D[m]-A)<Math.abs(u)&&(u=D[m]-A)}0>u&&-1==L?u+=a(c).width():0<u&&1==L&&(u-=a(c).width());L=[];n.showScrollbar(p,e);for(m=0;m<=k;m++)D=m,D/=k,D--,D=A+u*(Math.pow(D,5)+1),L[L.length]=D;k=(b+F[v]+q)%q;for(m=A=0;m<L.length;m++){if(0==m||1<Math.abs(L[m]-A)||m>=L.length-2)A=L[m],d[m]=n.slowScrollHorizontalIntervalTimer(10*(m+1),c,h,L[m],e,f,g,l,t,y,b,C,r,B,q,x,v,z,k,p);0==m&&""!=p.onSlideStart&&(u=(E[v]+F[v]+q)%q,p.onSlideStart(new n.args("start",p,c,a(c).children(":eq("+u+")"),u,b)))}A=!1;p.infiniteSlider?k!=ba[v]&&(A=!0):b!=E[v]&&(A=!0);A&&""!=p.onSlideComplete&&(d[d.length]=n.onSlideCompleteTimer(10*(m+1),p,c,a(c).children(":eq("+k+")"),k,v));X[v]=d;n.hideScrollbar(p,d,m,L,e,f,g,t,y,v);n.autoSlide(c,h,d,e,f,g,l,t,y,C,r,x,v,B,q,z,p)},changeOffset:function(b,c,h,d,e,f,g,l,t,y,C,x,P,v,B,q,O,p){n.autoSlidePause(v);for(var m=0;m<d.length;m++)clearTimeout(d[m]);p.infiniteSlider||(b=b>-1*r[v]+O?-1*r[v]+O:b,b=b<-1*z[v]?-1*z[v]:b);var k=Math.ceil(p.autoSlideTransTimer/10)+1,A=n.getSliderOffset(c,"x");m=(n.calcActiveOffset(p,b,x,g,F,q,E[v],v)+F[v]+q)%q;var u=x.slice();if(p.snapToChildren&&!p.infiniteSlider)b=x[m];else if(p.infiniteSlider&&p.snapToChildren){for(;b>=u[0];)u.splice(0,0,u[q-1]+a(c).width()),u.splice(q,1);for(;b<=u[q-1];)u.splice(q,0,u[0]-a(c).width()),u.splice(0,1);m=n.calcActiveOffset(p,b,u,g,F,q,E[v],v);b=u[m]}var L=b-A;b=[];n.showScrollbar(p,e);for(u=0;u<=k;u++){var D=u;D/=k;D--;D=A+L*(Math.pow(D,5)+1);b[b.length]=D}k=(m+F[v]+q)%q;for(u=A=0;u<b.length;u++){if(0==u||1<Math.abs(b[u]-A)||u>=b.length-2)A=b[u],d[u]=n.slowScrollHorizontalIntervalTimer(10*(u+1),c,h,b[u],e,f,g,l,t,y,m,C,x,B,q,P,v,O,k,p);0==u&&""!=p.onSlideStart&&(k=(E[v]+F[v]+q)%q,p.onSlideStart(new n.args("start",p,c,a(c).children(":eq("+k+")"),k,m)))}A=!1;p.infiniteSlider?k!=ba[v]&&(A=!0):m!=E[v]&&(A=!0);A&&""!=p.onSlideComplete&&(d[d.length]=n.onSlideCompleteTimer(10*(u+1),p,c,a(c).children(":eq("+k+")"),k,v));X[v]=d;n.hideScrollbar(p,d,u,b,e,f,g,t,y,v);n.autoSlide(c,h,d,e,f,g,l,t,y,C,x,P,v,B,q,O,p)},autoSlide:function(a,b,c,d,e,f,g,l,t,y,r,C,x,v,B,q,z){if(!V[x].autoSlide)return!1;n.autoSlidePause(x);Y[x]=setTimeout(function(){!z.infiniteSlider&&E[x]>r.length-1&&(E[x]-=B);n.changeSlide(E[x]+F[x]+1,a,b,c,d,e,f,g,l,t,y,r,C,x,v,B,q,z);n.autoSlide(a,b,c,d,e,f,g,l,t,y,r,C,x,v,B,q,z)},z.autoSlideTimer+z.autoSlideTransTimer)},autoSlidePause:function(a){clearTimeout(Y[a])},isUnselectable:function(b,c){return""!=c.unselectableSelector&&1==a(b).closest(c.unselectableSelector).length?!0:!1},slowScrollHorizontalIntervalTimer:function(a,b,c,d,e,f,g,l,t,y,r,x,C,v,B,q,z,p,O,E){return setTimeout(function(){n.slowScrollHorizontalInterval(b,c,d,e,f,g,l,t,y,r,x,C,v,B,q,z,p,O,E)},a)},onSlideCompleteTimer:function(a,b,c,d,e,f){return setTimeout(function(){n.onSlideComplete(b,c,d,e,f)},a)},hideScrollbarIntervalTimer:function(a,b,c,d,e,f,g,l,t,y){return setTimeout(function(){n.hideScrollbarInterval(b,c,d,e,f,g,l,t,y)},a)},updateBackfaceVisibilityTimer:function(a,b,c,d,e){return setTimeout(function(){n.updateBackfaceVisibility(b,c,d,e)},a)},updateBackfaceVisibility:function(b,c,d,e){c=(E[c]+F[c]+d)%d;for(var h=[],f=0;f<2*e.hardwareAccelBuffer;f++){var m=n.mod(c+f-e.hardwareAccelBuffer,d);if("visible"==a(b).eq(m).css("-webkit-backface-visibility")){h[h.length]=m;var g=n.mod(m+2*e.hardwareAccelBuffer,d),l=n.mod(m-2*e.hardwareAccelBuffer,d);a(b).eq(m).css("-webkit-backface-visibility","hidden");-1==h.indexOf(l)&&a(b).eq(l).css("-webkit-backface-visibility","");-1==h.indexOf(g)&&a(b).eq(g).css("-webkit-backface-visibility","")}}},mod:function(a,b){var c=a%b;return 0>c?c+b:c},args:function(b,c,d,e,f,g){this.prevSlideNumber=void 0==a(d).parent().data("args")?void 0:a(d).parent().data("args").prevSlideNumber;this.prevSlideObject=void 0==a(d).parent().data("args")?void 0:a(d).parent().data("args").prevSlideObject;this.targetSlideNumber=g+1;this.targetSlideObject=a(d).children(":eq("+g+")");this.slideChanged=!1;"load"==b?this.targetSlideObject=this.targetSlideNumber=void 0:"start"==b?this.targetSlideObject=this.targetSlideNumber=void 0:"change"==b?(this.slideChanged=!0,this.prevSlideNumber=void 0==a(d).parent().data("args")?c.startAtSlide:a(d).parent().data("args").currentSlideNumber,this.prevSlideObject=a(d).children(":eq("+this.prevSlideNumber+")")):"complete"==b&&(this.slideChanged=a(d).parent().data("args").slideChanged);this.settings=c;this.data=a(d).parent().data("iosslider");this.sliderObject=d;this.sliderContainerObject=a(d).parent();this.currentSlideObject=e;this.currentSlideNumber=f+1;this.currentSliderOffset=-1*n.getSliderOffset(d,"x")},preventDrag:function(a){a.preventDefault()},preventClick:function(a){a.stopImmediatePropagation();return!1},enableClick:function(){return!0}};n.setBrowserInfo();var da={init:function(u,L){g=n.has3DTransform();var h=a.extend(!0,{elasticPullResistance:.6,frictionCoefficient:.92,elasticFrictionCoefficient:.6,snapFrictionCoefficient:.92,snapToChildren:!1,snapSlideCenter:!1,startAtSlide:1,scrollbar:!1,scrollbarDrag:!1,scrollbarHide:!0,scrollbarPaging:!1,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:.9,desktopClickDrag:!1,keyboardControls:!1,tabToAdvance:!1,responsiveSlideContainer:!0,responsiveSlides:!0,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:!1,autoSlideTimer:5E3,autoSlideTransTimer:750,autoSlideHoverPause:!0,infiniteSlider:!1,snapVelocityThreshold:5,slideStartVelocityThreshold:0,horizontalSlideLockThreshold:5,verticalSlideLockThreshold:3,hardwareAccelBuffer:5,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",onSliderLoaded:"",onSliderUpdate:"",onSliderResize:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},u);void 0==L&&(L=this);return a(L).each(function(m){function g(){n.autoSlidePause(k);xa=a(K).find("a");Ca=a(K).find("[onclick]");ra=a(K).find("*");a(G).css("width","");a(G).css("height","");a(K).css("width","");I=a(K).children().not("script").get();na=[];T=[];h.responsiveSlides&&a(I).css("width","100%");z[k]=0;w=[];q=a(G).parent().width();J=a(G).outerWidth(!0);h.responsiveSlideContainer&&(J=a(G).outerWidth(!0)>q?q:a(G).width());a(G).css({position:h.stageCSS.position,top:h.stageCSS.top,left:h.stageCSS.left,overflow:h.stageCSS.overflow,zIndex:h.stageCSS.zIndex,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",msTouchAction:"pan-y",width:J});a(h.unselectableSelector).css({cursor:"default"});for(var b=0;b<I.length;b++){na[b]=a(I[b]).width();T[b]=a(I[b]).outerWidth(!0);var c=T[b];h.responsiveSlides&&(T[b]>J?(c=J+-1*(T[b]-na[b]),na[b]=c,T[b]=J):c=na[b],a(I[b]).css({width:c}));a(I[b]).css({overflow:"hidden",position:"absolute"});w[b]=-1*z[k];z[k]=z[k]+c+(T[b]-na[b])}h.snapSlideCenter&&(p=.5*(J-T[0]),h.responsiveSlides&&T[0]>J&&(p=0));ca[k]=2*z[k];for(b=0;b<I.length;b++)n.setSliderOffset(a(I[b]),-1*w[b]+z[k]+p),w[b]-=z[k];if(!h.infiniteSlider&&!h.snapSlideCenter){for(b=0;b<w.length&&!(w[b]<=-1*(2*z[k]-J));b++)Da=b;w.splice(Da+1,w.length);w[w.length]=-1*(2*z[k]-J)}for(b=0;b<w.length;b++)Z[b]=w[b];va&&(V[k].startAtSlide=V[k].startAtSlide>w.length?w.length:V[k].startAtSlide,h.infiniteSlider?(V[k].startAtSlide=(V[k].startAtSlide-1+N)%N,E[k]=V[k].startAtSlide):(V[k].startAtSlide=0>V[k].startAtSlide-1?w.length-1:V[k].startAtSlide,E[k]=V[k].startAtSlide-1),ba[k]=E[k]);r[k]=z[k]+p;a(K).css({position:"relative",cursor:C,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:z[k]+"px"});fa=z[k];z[k]=2*z[k]-J+2*p;(ha=fa+p<J||0==J?!0:!1)&&a(K).css({cursor:"default"});Y=a(G).parent().outerHeight(!0);R=a(G).height();h.responsiveSlideContainer&&(R=R>Y?Y:R);a(G).css({height:R});n.setSliderOffset(K,w[E[k]]);if(h.infiniteSlider&&!ha){b=n.getSliderOffset(a(K),"x");for(c=(F[k]+N)%N*-1;0>c;){var d=0,e=n.getSliderOffset(a(I[0]),"x");a(I).each(function(a){n.getSliderOffset(this,"x")<e&&(e=n.getSliderOffset(this,"x"),d=a)});var f=r[k]+fa;n.setSliderOffset(a(I)[d],f);r[k]=-1*w[1]+p;z[k]=r[k]+fa-J;w.splice(0,1);w.splice(w.length,0,-1*f+p);c++}for(;0<-1*w[0]-fa+p&&h.snapSlideCenter&&va;){var m=0,g=n.getSliderOffset(a(I[0]),"x");a(I).each(function(a){n.getSliderOffset(this,"x")>g&&(g=n.getSliderOffset(this,"x"),m=a)});f=r[k]-T[m];n.setSliderOffset(a(I)[m],f);w.splice(0,0,-1*f+p);w.splice(w.length-1,1);r[k]=-1*w[0]+p;z[k]=r[k]+fa-J;F[k]--;E[k]++}for(;b<=-1*z[k];)d=0,e=n.getSliderOffset(a(I[0]),"x"),a(I).each(function(a){n.getSliderOffset(this,"x")<e&&(e=n.getSliderOffset(this,"x"),d=a)}),f=r[k]+fa,n.setSliderOffset(a(I)[d],f),r[k]=-1*w[1]+p,z[k]=r[k]+fa-J,w.splice(0,1),w.splice(w.length,0,-1*f+p),F[k]++,E[k]--}n.setSliderOffset(K,w[E[k]]);n.updateBackfaceVisibility(I,k,N,h);h.desktopClickDrag||a(K).css({cursor:"default"});h.scrollbar&&(a("."+Q).css({margin:h.scrollbarMargin,overflow:"hidden",display:"none"}),a("."+Q+" ."+H).css({border:h.scrollbarBorder}),U=parseInt(a("."+Q).css("marginLeft"))+parseInt(a("."+Q).css("marginRight")),W=parseInt(a("."+Q+" ."+H).css("borderLeftWidth"),10)+parseInt(a("."+Q+" ."+H).css("borderRightWidth"),10),v=""!=h.scrollbarContainer?a(h.scrollbarContainer).width():J,B=J/fa*(v-U),h.scrollbarHide||(wa=h.scrollbarOpacity),a("."+Q).css({position:"absolute",left:0,width:v-U+"px",margin:h.scrollbarMargin}),"top"==h.scrollbarLocation?a("."+Q).css("top","0"):a("."+Q).css("bottom","0"),a("."+Q+" ."+H).css({borderRadius:h.scrollbarBorderRadius,background:h.scrollbarBackground,height:h.scrollbarHeight,width:B-W+"px",minWidth:h.scrollbarHeight,border:h.scrollbarBorder,webkitPerspective:1E3,webkitBackfaceVisibility:"hidden",position:"relative",opacity:wa,filter:"alpha(opacity:"+100*wa+")",boxShadow:h.scrollbarShadow}),n.setSliderOffset(a("."+Q+" ."+H),Math.floor((-1*w[E[k]]-r[k]+p)/(z[k]-r[k]+p)*(v-U-B))),a("."+Q).css({display:"block"}),M=a("."+Q+" ."+H),P=a("."+Q));h.scrollbarDrag&&!ha&&a("."+Q+" ."+H).css({cursor:C});h.infiniteSlider&&(aa=(z[k]+J)/3);""!=h.navSlideSelector&&a(h.navSlideSelector).each(function(b){a(this).css({cursor:"pointer"});a(this).unbind(ea).bind(ea,function(c){"touchstart"==c.type?a(this).unbind("click.iosSliderEvent"):a(this).unbind("touchstart.iosSliderEvent");ea=c.type+".iosSliderEvent";n.changeSlide(b,K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h)})});""!=h.navPrevSelector&&(a(h.navPrevSelector).css({cursor:"pointer"}),a(h.navPrevSelector).unbind(ea).bind(ea,function(b){"touchstart"==b.type?a(this).unbind("click.iosSliderEvent"):a(this).unbind("touchstart.iosSliderEvent");ea=b.type+".iosSliderEvent";b=(E[k]+F[k]+N)%N;(0<b||h.infiniteSlider)&&n.changeSlide(b-1,K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h)}));""!=h.navNextSelector&&(a(h.navNextSelector).css({cursor:"pointer"}),a(h.navNextSelector).unbind(ea).bind(ea,function(b){"touchstart"==b.type?a(this).unbind("click.iosSliderEvent"):a(this).unbind("touchstart.iosSliderEvent");ea=b.type+".iosSliderEvent";b=(E[k]+F[k]+N)%N;(b<w.length-1||h.infiniteSlider)&&n.changeSlide(b+1,K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h)}));h.autoSlide&&!ha&&""!=h.autoSlideToggleSelector&&(a(h.autoSlideToggleSelector).css({cursor:"pointer"}),a(h.autoSlideToggleSelector).unbind(ea).bind(ea,function(b){"touchstart"==b.type?a(this).unbind("click.iosSliderEvent"):a(this).unbind("touchstart.iosSliderEvent");ea=b.type+".iosSliderEvent";pa?(n.autoSlide(K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h),pa=!1,a(h.autoSlideToggleSelector).removeClass("on")):(n.autoSlidePause(k),pa=!0,a(h.autoSlideToggleSelector).addClass("on"))}));n.autoSlide(K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h);a(G).bind("mouseleave.iosSliderEvent",function(){if(pa)return!0;n.autoSlide(K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h)});a(G).bind("touchend.iosSliderEvent",function(){if(pa)return!0;n.autoSlide(K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h)});h.autoSlideHoverPause&&a(G).bind("mouseenter.iosSliderEvent",function(){n.autoSlidePause(k)});a(G).data("iosslider",{obj:Ea,settings:h,scrollerNode:K,slideNodes:I,numberOfSlides:N,centeredSlideOffset:p,sliderNumber:k,originalOffsets:Z,childrenOffsets:w,sliderMax:z[k],scrollbarClass:H,scrollbarWidth:B,scrollbarStageWidth:v,stageWidth:J,scrollMargin:U,scrollBorder:W,infiniteSliderOffset:F[k],infiniteSliderWidth:aa,slideNodeOuterWidths:T,shortContent:ha});va=!1;return!0}b++;var k=b,u=[];V[k]=a.extend({},h);r[k]=0;z[k]=0;var L=[0,0],x=[0,0],Q="scrollbarBlock"+b,H="scrollbar"+b,M,P,v,B,q,Y,p=0,G=a(this),J,R,U,W,Ba,va=!0;m=-1;var w,Z=[],wa=0,ka=0,Fa=0,K=a(this).children(":first-child"),I,na,T,N=a(K).children().not("script").length,ia=!1,Da=0,ya=!1,sa=void 0,aa;F[k]=0;var ha=!1,pa=!1;oa[k]=!1;var la,ta=!1,qa=!1,ea="touchstart.iosSliderEvent click.iosSliderEvent",fa,xa,Ca,ra;ja[k]=!1;X[k]=[];h.scrollbarDrag&&(h.scrollbar=!0,h.scrollbarHide=!1);var Ea=a(this);if(void 0!=Ea.data("iosslider"))return!0;14.2<=parseInt(a().jquery.split(".").join(""),10)?a(this).delegate("img","dragstart.iosSliderEvent",function(a){a.preventDefault()}):a(this).find("img").bind("dragstart.iosSliderEvent",function(a){a.preventDefault()});h.infiniteSlider&&(h.scrollbar=!1);h.infiniteSlider&&1==N&&(h.infiniteSlider=!1);h.scrollbar&&(""!=h.scrollbarContainer?a(h.scrollbarContainer).append("<div class = '"+Q+"'><div class = '"+H+"'></div></div>"):a(K).parent().append("<div class = '"+Q+"'><div class = '"+H+"'></div></div>"));if(!g())return!0;a(this).find("a").bind("mousedown",n.preventDrag);a(this).find("[onclick]").bind("click",n.preventDrag).each(function(){a(this).data("onclick",this.onclick)});m=n.calcActiveOffset(h,n.getSliderOffset(a(K),"x"),w,J,F[k],N,void 0,k);m=(m+F[k]+N)%N;m=new n.args("load",h,K,a(K).children(":eq("+m+")"),m,m);a(G).data("args",m);if(""!=h.onSliderLoaded)h.onSliderLoaded(m);h.scrollbarPaging&&h.scrollbar&&!ha&&(a(P).css("cursor","pointer"),a(P).bind("click.iosSliderEvent",function(b){this==b.target&&(b.pageX>a(M).offset().left?da.nextPage(G):da.prevPage(G))}));if(V[k].responsiveSlides||V[k].responsiveSlideContainer)m=l?"orientationchange":"resize",a(window).bind(m+".iosSliderEvent-"+k,function(){if(!g())return!0;var b=a(G).data("args");if(""!=h.onSliderResize)h.onSliderResize(b)});!h.keyboardControls&&!h.tabToAdvance||ha||a(document).bind("keydown.iosSliderEvent",function(a){t||y||(a=a.originalEvent);if("INPUT"==a.target.nodeName||ja[k])return!0;if(37==a.keyCode&&h.keyboardControls)a.preventDefault(),a=(E[k]+F[k]+N)%N,(0<a||h.infiniteSlider)&&n.changeSlide(a-1,K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h);else if(39==a.keyCode&&h.keyboardControls||9==a.keyCode&&h.tabToAdvance)a.preventDefault(),a=(E[k]+F[k]+N)%N,(a<w.length-1||h.infiniteSlider)&&n.changeSlide(a+1,K,I,u,H,B,J,v,U,W,Z,w,T,k,aa,N,p,h)});if(f||h.desktopClickDrag){var ma=!1,za=!1;m=a(K);var ua=a(K),Aa=!1;h.scrollbarDrag&&(m=m.add(M),ua=ua.add(P));a(m).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent",function(b){a(window).one("scroll.iosSliderEvent",function(a){ma=!1});if(ma)return!0;ma=!0;za=!1;"touchstart"==b.type?a(ua).unbind("mousedown.iosSliderEvent"):a(ua).unbind("touchstart.iosSliderEvent");if(ja[k]||ha||(Aa=n.isUnselectable(b.target,h)))return ia=ma=!1,!0;la=a(this)[0]===a(M)[0]?M:K;t||y||(b=b.originalEvent);n.autoSlidePause(k);ra.unbind(".disableClick");if("touchstart"==b.type)eventX=b.touches[0].pageX,eventY=b.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(y)try{document.selection.empty()}catch(Ha){}else document.selection.empty();eventX=b.pageX;eventY=b.pageY;ya=!0;sa=K;a(this).css({cursor:O})}L=[0,0];x=[0,0];c=0;ia=!1;for(b=0;b<u.length;b++)clearTimeout(u[b]);b=n.getSliderOffset(K,"x");b>-1*r[k]+p+fa?(b=-1*r[k]+p+fa,n.setSliderOffset(a("."+H),b),a("."+H).css({width:B-W+"px"})):b<-1*z[k]&&(b=-1*z[k],n.setSliderOffset(a("."+H),v-U-B),a("."+H).css({width:B-W+"px"}));b=a(this)[0]===a(M)[0]?r[k]:0;ka=-1*(n.getSliderOffset(this,"x")-eventX-b);n.getSliderOffset(this,"y");L[1]=eventX;x[1]=eventY;qa=!1});a(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent",function(b){t||y||(b=b.originalEvent);if(ja[k]||ha||Aa||!ma)return!0;var f=0;if("touchmove"==b.type)eventX=b.touches[0].pageX,eventY=b.touches[0].pageY;else{if(window.getSelection)window.getSelection().empty||window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges();else if(document.selection)if(y)try{document.selection.empty()}catch(Ia){}else document.selection.empty();eventX=b.pageX;eventY=b.pageY;if(!ya||!S&&("undefined"!=typeof b.webkitMovementX||"undefined"!=typeof b.webkitMovementY)&&0===b.webkitMovementY&&0===b.webkitMovementX)return!0}L[0]=L[1];L[1]=eventX;c=(L[1]-L[0])/2;x[0]=x[1];x[1]=eventY;d=(x[1]-x[0])/2;if(!ia){var m=(E[k]+F[k]+N)%N;m=new n.args("start",h,K,a(K).children(":eq("+m+")"),m,void 0);a(G).data("args",m);if(""!=h.onSlideStart)h.onSlideStart(m)}(d>h.verticalSlideLockThreshold||d<-1*h.verticalSlideLockThreshold)&&"touchmove"==b.type&&!ia&&(ta=!0);(c>h.horizontalSlideLockThreshold||c<-1*h.horizontalSlideLockThreshold)&&"touchmove"==b.type&&b.preventDefault();if(c>h.slideStartVelocityThreshold||c<-1*h.slideStartVelocityThreshold)ia=!0;if(ia&&!ta){m=n.getSliderOffset(K,"x");var g=a(la)[0]===a(M)[0]?r[k]:p,l=a(la)[0]===a(M)[0]?(r[k]-z[k]-p)/(v-U-B):1,A=a(la)[0]===a(M)[0]?h.scrollbarElasticPullResistance:h.elasticPullResistance,u=h.snapSlideCenter&&a(la)[0]===a(M)[0]?0:p,D=h.snapSlideCenter&&a(la)[0]===a(M)[0]?p:0;"touchmove"==b.type&&(Fa!=b.touches.length&&(ka=-1*m+eventX),Fa=b.touches.length);if(h.infiniteSlider){if(m<=-1*z[k]){var q=a(K).width();if(m<=-1*ca[k]){var C=-1*Z[0];a(I).each(function(b){n.setSliderOffset(a(I)[b],C+p);b<w.length&&(w[b]=-1*C);C+=T[b]});ka-=-1*w[0];r[k]=-1*w[0]+p;z[k]=r[k]+q-J;F[k]=0}else{var O=0,Q=n.getSliderOffset(a(I[0]),"x");a(I).each(function(a){n.getSliderOffset(this,"x")<Q&&(Q=n.getSliderOffset(this,"x"),O=a)});A=r[k]+q;n.setSliderOffset(a(I)[O],A);r[k]=-1*w[1]+p;z[k]=r[k]+q-J;w.splice(0,1);w.splice(w.length,0,-1*A+p);F[k]++}}if(m>=-1*r[k]||0<=m)if(q=a(K).width(),0<=m)for(C=-1*Z[0],a(I).each(function(b){n.setSliderOffset(a(I)[b],C+p);b<w.length&&(w[b]=-1*C);C+=T[b]}),ka+=-1*w[0],r[k]=-1*w[0]+p,z[k]=r[k]+q-J,F[k]=N;0<-1*w[0]-q+p;){var P=0,Y=n.getSliderOffset(a(I[0]),"x");a(I).each(function(a){n.getSliderOffset(this,"x")>Y&&(Y=n.getSliderOffset(this,"x"),P=a)});A=r[k]-T[P];n.setSliderOffset(a(I)[P],A);w.splice(0,0,-1*A+p);w.splice(w.length-1,1);r[k]=-1*w[0]+p;z[k]=r[k]+q-J;F[k]--;E[k]++}else P=0,Y=n.getSliderOffset(a(I[0]),"x"),a(I).each(function(a){n.getSliderOffset(this,"x")>Y&&(Y=n.getSliderOffset(this,"x"),P=a)}),A=r[k]-T[P],n.setSliderOffset(a(I)[P],A),w.splice(0,0,-1*A+p),w.splice(w.length-1,1),r[k]=-1*w[0]+p,z[k]=r[k]+q-J,F[k]--}else q=a(K).width(),m>-1*r[k]+p&&(f=(r[k]+-1*(ka-g-eventX+u)*l-g)*A*-1/l),m<-1*z[k]&&(f=(z[k]+D+-1*(ka-g-eventX)*l-g)*A*-1/l);n.setSliderOffset(K,-1*(ka-g-eventX-f)*l-g+D);h.scrollbar&&(n.showScrollbar(h,H),e=Math.floor((ka-eventX-f-r[k]+u)/(z[k]-r[k]+p)*(v-U-B)*l),m=B,0>=e?(m=B-W- -1*e,n.setSliderOffset(a("."+H),0),a("."+H).css({width:m+"px"})):e>=v-U-W-B?(m=v-U-W-e,n.setSliderOffset(a("."+H),e),a("."+H).css({width:m+"px"})):n.setSliderOffset(a("."+H),e));"touchmove"==b.type&&(Ba=b.touches[0].pageX);b=!1;f=n.calcActiveOffset(h,-1*(ka-eventX-f),w,J,F[k],N,void 0,k);m=(f+F[k]+N)%N;h.infiniteSlider?m!=ba[k]&&(b=!0):f!=E[k]&&(b=!0);if(b){E[k]=f;ba[k]=m;qa=!0;m=new n.args("change",h,K,a(K).children(":eq("+m+")"),m,m);a(G).data("args",m);if(""!=h.onSlideChange)h.onSlideChange(m);n.updateBackfaceVisibility(I,k,N,h)}}});var Ga=a(window);if(y||t)Ga=a(document);a(m).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent",function(a){a=a.originalEvent;if(za)return!1;za=!0;if(ja[k]||ha||Aa)return!0;if(0!=a.touches.length)for(var b=0;b<a.touches.length;b++)a.touches[b].pageX==Ba&&n.slowScrollHorizontal(K,I,u,H,c,d,B,J,v,U,W,Z,w,T,k,aa,N,la,qa,p,h);else n.slowScrollHorizontal(K,I,u,H,c,d,B,J,v,U,W,Z,w,T,k,aa,N,la,qa,p,h);ma=ta=!1;return!0});a(Ga).bind("mouseup.iosSliderEvent-"+k,function(b){ia?xa.unbind("click.disableClick").bind("click.disableClick",n.preventClick):xa.unbind("click.disableClick").bind("click.disableClick",n.enableClick);Ca.each(function(){this.onclick=function(b){if(ia)return!1;a(this).data("onclick")&&a(this).data("onclick").call(this,b||window.event)};this.onclick=a(this).data("onclick")});1.8<=parseFloat(a().jquery)?ra.each(function(){var b=a._data(this,"events");if(void 0!=b&&void 0!=b.click&&"iosSliderEvent"!=b.click[0].namespace){if(!ia)return!1;a(this).one("click.disableClick",n.preventClick);b=a._data(this,"events").click;var c=b.pop();b.splice(0,0,c)}}):1.6<=parseFloat(a().jquery)&&ra.each(function(){var b=a(this).data("events");if(void 0!=b&&void 0!=b.click&&"iosSliderEvent"!=b.click[0].namespace){if(!ia)return!1;a(this).one("click.disableClick",n.preventClick);b=a(this).data("events").click;var c=b.pop();b.splice(0,0,c)}});if(!oa[k]){if(ha)return!0;h.desktopClickDrag&&a(K).css({cursor:C});h.scrollbarDrag&&a(M).css({cursor:C});ya=!1;if(void 0==sa)return!0;n.slowScrollHorizontal(sa,I,u,H,c,d,B,J,v,U,W,Z,w,T,k,aa,N,la,qa,p,h);sa=void 0}ma=ta=!1})}})},destroy:function(b,c){void 0==c&&(c=this);return a(c).each(function(){var c=a(this),d=c.data("iosslider");if(void 0==d)return!1;void 0==b&&(b=!0);n.autoSlidePause(d.sliderNumber);oa[d.sliderNumber]=!0;a(window).unbind(".iosSliderEvent-"+d.sliderNumber);a(document).unbind(".iosSliderEvent-"+d.sliderNumber);a(document).unbind("keydown.iosSliderEvent");a(this).unbind(".iosSliderEvent");a(this).children(":first-child").unbind(".iosSliderEvent");a(this).children(":first-child").children().unbind(".iosSliderEvent");a(d.settings.scrollbarBlockNode).unbind(".iosSliderEvent");b&&(a(this).attr("style",""),a(this).children(":first-child").attr("style",""),a(this).children(":first-child").children().attr("style",""),a(d.settings.navSlideSelector).attr("style",""),a(d.settings.navPrevSelector).attr("style",""),a(d.settings.navNextSelector).attr("style",""),a(d.settings.autoSlideToggleSelector).attr("style",""),a(d.settings.unselectableSelector).attr("style",""));d.settings.scrollbar&&a(".scrollbarBlock"+d.sliderNumber).remove();d=X[d.sliderNumber];for(var e=0;e<d.length;e++)clearTimeout(d[e]);c.removeData("iosslider");c.removeData("args")})},update:function(b){void 0==b&&(b=this);return a(b).each(function(){var b=a(this),c=b.data("iosslider");if(void 0==c)return!1;c.settings.startAtSlide=b.data("args").currentSlideNumber;da.destroy(!1,this);1!=c.numberOfSlides&&c.settings.infiniteSlider&&(c.settings.startAtSlide=(E[c.sliderNumber]+1+F[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides);da.init(c.settings,this);b=new n.args("update",c.settings,c.scrollerNode,a(c.scrollerNode).children(":eq("+(c.settings.startAtSlide-1)+")"),c.settings.startAtSlide-1,c.settings.startAtSlide-1);a(c.stageNode).data("args",b);if(""!=c.settings.onSliderUpdate)c.settings.onSliderUpdate(b)})},addSlide:function(b,c){return this.each(function(){var d=a(this),e=d.data("iosslider");if(void 0==e)return!1;0==a(e.scrollerNode).children().length?(a(e.scrollerNode).append(b),d.data("args").currentSlideNumber=1):e.settings.infiniteSlider?(1==c?a(e.scrollerNode).children(":eq(0)").before(b):a(e.scrollerNode).children(":eq("+(c-2)+")").after(b),-1>F[e.sliderNumber]&&E[e.sliderNumber]--,d.data("args").currentSlideNumber>=c&&E[e.sliderNumber]++):(c<=e.numberOfSlides?a(e.scrollerNode).children(":eq("+(c-1)+")").before(b):a(e.scrollerNode).children(":eq("+(c-2)+")").after(b),d.data("args").currentSlideNumber>=c&&d.data("args").currentSlideNumber++);d.data("iosslider").numberOfSlides++;da.update(this)})},removeSlide:function(b){return this.each(function(){var c=a(this),d=c.data("iosslider");if(void 0==d)return!1;a(d.scrollerNode).children(":eq("+(b-1)+")").remove();E[d.sliderNumber]>b-1&&E[d.sliderNumber]--;c.data("iosslider").numberOfSlides--;da.update(this)})},goToSlide:function(b,c,d){void 0==d&&(d=this);return a(d).each(function(){var d=a(this).data("iosslider");if(void 0==d||d.shortContent)return!1;b=b>d.childrenOffsets.length?d.childrenOffsets.length-1:b-1;void 0!=c&&(d.settings.autoSlideTransTimer=c);n.changeSlide(b,a(d.scrollerNode),a(d.slideNodes),X[d.sliderNumber],d.scrollbarClass,d.scrollbarWidth,d.stageWidth,d.scrollbarStageWidth,d.scrollMargin,d.scrollBorder,d.originalOffsets,d.childrenOffsets,d.slideNodeOuterWidths,d.sliderNumber,d.infiniteSliderWidth,d.numberOfSlides,d.centeredSlideOffset,d.settings)})},prevSlide:function(b){return this.each(function(){var c=a(this).data("iosslider");if(void 0==c||c.shortContent)return!1;var d=(E[c.sliderNumber]+F[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides;void 0!=b&&(c.settings.autoSlideTransTimer=b);(0<d||c.settings.infiniteSlider)&&n.changeSlide(d-1,a(c.scrollerNode),a(c.slideNodes),X[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);E[c.sliderNumber]=d})},nextSlide:function(b){return this.each(function(){var c=a(this).data("iosslider");if(void 0==c||c.shortContent)return!1;var d=(E[c.sliderNumber]+F[c.sliderNumber]+c.numberOfSlides)%c.numberOfSlides;void 0!=b&&(c.settings.autoSlideTransTimer=b);(d<c.childrenOffsets.length-1||c.settings.infiniteSlider)&&n.changeSlide(d+1,a(c.scrollerNode),a(c.slideNodes),X[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings);E[c.sliderNumber]=d})},prevPage:function(b,c){void 0==c&&(c=this);return a(c).each(function(){var c=a(this).data("iosslider");if(void 0==c)return!1;var d=n.getSliderOffset(c.scrollerNode,"x")+c.stageWidth;void 0!=b&&(c.settings.autoSlideTransTimer=b);n.changeOffset(d,a(c.scrollerNode),a(c.slideNodes),X[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings)})},nextPage:function(b,c){void 0==c&&(c=this);return a(c).each(function(){var c=a(this).data("iosslider");if(void 0==c)return!1;var d=n.getSliderOffset(c.scrollerNode,"x")-c.stageWidth;void 0!=b&&(c.settings.autoSlideTransTimer=b);n.changeOffset(d,a(c.scrollerNode),a(c.slideNodes),X[c.sliderNumber],c.scrollbarClass,c.scrollbarWidth,c.stageWidth,c.scrollbarStageWidth,c.scrollMargin,c.scrollBorder,c.originalOffsets,c.childrenOffsets,c.slideNodeOuterWidths,c.sliderNumber,c.infiniteSliderWidth,c.numberOfSlides,c.centeredSlideOffset,c.settings)})},lock:function(){return this.each(function(){var b=a(this).data("iosslider");if(void 0==b||b.shortContent)return!1;a(b.scrollerNode).css({cursor:"default"});ja[b.sliderNumber]=!0})},unlock:function(){return this.each(function(){var b=a(this).data("iosslider");if(void 0==b||b.shortContent)return!1;a(b.scrollerNode).css({cursor:C});ja[b.sliderNumber]=!1})},getData:function(){return this.each(function(){var b=a(this).data("iosslider");return void 0==b||b.shortContent?!1:b})},autoSlidePause:function(){return this.each(function(){var b=a(this).data("iosslider");if(void 0==b||b.shortContent)return!1;V[b.sliderNumber].autoSlide=!1;n.autoSlidePause(b.sliderNumber);return b})},autoSlidePlay:function(){return this.each(function(){var b=a(this).data("iosslider");if(void 0==b||b.shortContent)return!1;V[b.sliderNumber].autoSlide=!0;n.autoSlide(a(b.scrollerNode),a(b.slideNodes),X[b.sliderNumber],b.scrollbarClass,b.scrollbarWidth,b.stageWidth,b.scrollbarStageWidth,b.scrollMargin,b.scrollBorder,b.originalOffsets,b.childrenOffsets,b.slideNodeOuterWidths,b.sliderNumber,b.infiniteSliderWidth,b.numberOfSlides,b.centeredSlideOffset,b.settings);return b})}};a.fn.iosSlider=function(b){if(da[b])return da[b].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof b&&b)a.error("invalid method call!");else return da.init.apply(this,arguments)}})(jQuery);(function(a){var b,c,d,e,f,l,g,t=function(){},y=!!window.jQuery,S=a(window),x=function(a,c){b.ev.on("mfp"+a+".mfp",c)},C=function(b,c,d,e){var h=document.createElement("div");return h.className="mfp-"+b,d&&(h.innerHTML=d),e?c&&c.appendChild(h):(h=a(h),c&&h.appendTo(c)),h},O=function(c,d){b.ev.triggerHandler("mfp"+c,d);b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},Y=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},V=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},oa=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isIE7=-1!==c.indexOf("MSIE 7.");b.isIE8=-1!==c.indexOf("MSIE 8.");b.isLowIE=b.isIE7||b.isIE8;b.isAndroid=/android/gi.test(c);b.isIOS=/iphone|ipad|ipod/gi.test(c);b.supportsTransition=oa();b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);e=a(document);b.popupsCache={}},open:function(c){d||(d=a(document.body));var f;if(!1===c.isObj){b.items=c.items.toArray();b.index=0;var h,g=c.items;for(f=0;g.length>f;f++)if(h=g[f],h.parsed&&(h=h.el[0]),h===c.el[0]){b.index=f;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return b.updateItemHTML(),void 0;b.types=[];l="";b.ev=c.mainEl&&c.mainEl.length?c.mainEl.eq(0):e;c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={};b.st=a.extend(!0,{},a.magnificPopup.defaults,c);b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos;b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1);b.bgOverlay||(b.bgOverlay=C("bg").on("click.mfp",function(){b.close()}),b.wrap=C("wrap").attr("tabindex",-1).on("click.mfp",function(a){b._checkIfClose(a.target)&&b.close()}),b.container=C("container",b.wrap));b.contentContainer=C("content");b.st.preloader&&(b.preloader=C("preloader",b.container,b.st.tLoading));h=a.magnificPopup.modules;for(f=0;h.length>f;f++)g=h[f],g=g.charAt(0).toUpperCase()+g.slice(1),b["init"+g].call(b);O("BeforeOpen");b.st.showCloseBtn&&(b.st.closeBtnInside?(x("MarkupParse",function(a,b,c,d){c.close_replaceWith=Y(d.type)}),l+=" mfp-close-btn-in"):b.wrap.append(Y()));b.st.alignTop&&(l+=" mfp-align-top");b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:S.scrollTop(),position:"absolute"});(!1===b.st.fixedBgPos||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:e.height(),position:"absolute"});b.st.enableEscapeKey&&e.on("keyup.mfp",function(a){27===a.keyCode&&b.close()});S.on("resize.mfp",function(){b.updateSize()});b.st.closeOnContentClick||(l+=" mfp-auto-cursor");l&&b.wrap.addClass(l);f=b.wH=S.height();h={};b.fixedContentPos&&b._hasScrollBar(f)&&(g=b._getScrollbarSize())&&(h.marginRight=g);b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):h.overflow="hidden");g=b.st.mainClass;return b.isIE7&&(g+=" mfp-ie7"),g&&b._addClassToMFP(g),b.updateItemHTML(),O("BuildControls"),a("html").css(h),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||d),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP("mfp-ready"),b._setFocus()):b.bgOverlay.addClass("mfp-ready");e.on("focusin.mfp",b._onFocusIn)},16),b.isOpen=!0,b.updateSize(f),O("Open"),c},close:function(){b.isOpen&&(O("BeforeClose"),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP("mfp-removing"),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){O("Close");var c="mfp-removing mfp-ready ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos)c={marginRight:""},b.isIE7?a("body, html").css("overflow",""):c.overflow="",a("html").css(c);e.off("keyup.mfp focusin.mfp");b.ev.off(".mfp");b.wrap.attr("class","mfp-wrap").removeAttr("style");b.bgOverlay.attr("class","mfp-bg");b.container.attr("class","mfp-container");!b.st.showCloseBtn||b.st.closeBtnInside&&!0!==b.currTemplate[b.currItem.type]||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach();b._lastFocusedEl&&a(b._lastFocusedEl).focus();b.currItem=null;b.content=null;b.currTemplate=null;b.prevHeight=0;O("AfterClose")},updateSize:function(a){b.isIOS?(a=document.documentElement.clientWidth/window.innerWidth*window.innerHeight,b.wrap.css("height",a),b.wH=a):b.wH=a||S.height();b.fixedContentPos||b.wrap.css("height",b.wH);O("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach();b.content&&b.content.detach();c.parsed||(c=b.parseEl(b.index));var d=c.type;if(O("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var e=b.st[d]?b.st[d].markup:!1;O("FirstMarkupParse",e);b.currTemplate[d]=e?a(e):!0}f&&f!==c.type&&b.container.removeClass("mfp-"+f+"-holder");e=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(e,d);c.preloaded=!0;O("Change",c);f=c.type;b.container.prepend(b.contentContainer);O("AfterChange")},appendContent:function(a,c){(b.content=a)?b.st.showCloseBtn&&b.st.closeBtnInside&&!0===b.currTemplate[c]?b.content.find(".mfp-close").length||b.content.append(Y()):b.content=a:b.content="";O("BeforeAppend");b.container.addClass("mfp-"+c+"-holder");b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,h=0;f.length>h;h++)if(e.el.hasClass("mfp-"+f[h])){d=f[h];break}e.src=e.el.attr("data-mfp-src");e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,O("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this;b._openClick(d,a,c)};c||(c={});c.mainEl=a;c.items?(c.isObj=!0,a.off("click.magnificPopup").on("click.magnificPopup",d)):(c.isObj=!1,c.delegate?a.off("click.magnificPopup").on("click.magnificPopup",c.delegate,d):(c.items=a,a.off("click.magnificPopup").on("click.magnificPopup",d)))},_openClick:function(c,d,e){if((void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick)||2!==c.which&&!c.ctrlKey&&!c.metaKey){var f=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(b))return!0}else if(f>S.width())return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation());e.el=a(c.mfpEl);e.delegate&&(e.items=d.find(e.delegate));b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c);d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};O("UpdateStatus",e);a=e.status;d=e.text;b.preloader.html(d);b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()});b.container.addClass("mfp-s-"+a);c=a}},_checkIfClose:function(c){if(!a(c).hasClass("mfp-prevent-close")){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e||!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a);b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a);b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?e.height():document.body.scrollHeight)>(a||S.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c));O("MarkupParse",[b,c,d]);a.each(c,function(a,c){if(void 0===c||!1===c)return!0;if(e=a.split("_"),1<e.length){var d=b.find(".mfp-"+e[0]);if(0<d.length){var f=e[1];"replaceWith"===f?d[0]!==c[0]&&d.replaceWith(c):"img"===f?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(".mfp-"+a).html(c)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.id="mfp-sbm";a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";document.body.appendChild(a);b.scrollbarSize=a.offsetWidth-a.clientWidth;document.body.removeChild(a)}return b.scrollbarSize}};a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return V(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options);a.extend(this.proto,c.proto);this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}};a.fn.magnificPopup=function(c){V();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=y?d.data("magnificPopup"):d[0].magnificPopup,h=parseInt(arguments[1],10)||0;f.items?e=f.items[h]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(h));b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),y?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var X,E,ba,F=function(){ba&&(E.after(ba.addClass(X)).detach(),ba=null)};a.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push("inline");x("Close.inline",function(){F()})},getInline:function(c,d){if(F(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var h=f[0].parentNode;h&&h.tagName&&(E||(X=e.hiddenClass,E=C(X),X="mfp-"+X),ba=f.after(E).detach().removeClass(X));b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var r,z=function(){r&&d.removeClass(r);b.req&&b.req.abort()};a.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push("ajax");r=b.st.ajax.cursor;x("Close.ajax",z);x("BeforeChange.ajax",z)},getAjax:function(c){r&&d.addClass(r);b.updateStatus("loading");var e=a.extend({url:c.src,success:function(e,f,g){e={data:e,xhr:g};O("ParseAjax",e);b.appendContent(a(e.data),"ajax");c.finished=!0;r&&d.removeClass(r);b._setFocus();setTimeout(function(){b.wrap.addClass("mfp-ready")},16);b.updateStatus("ready");O("AjaxContentAdded")},error:function(){r&&d.removeClass(r);c.finished=c.loadError=!0;b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(e),""}}});var ca,ja=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var a=b.st.image;b.types.push("image");x("Open.image",function(){"image"===b.currItem.type&&a.cursor&&d.addClass(a.cursor)});x("Close.image",function(){a.cursor&&d.removeClass(a.cursor);S.off("resize.mfp")});x("Resize.image",b.resizeImage);b.isLowIE&&x("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10));a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,ca&&clearInterval(ca),a.isCheckingImgSize=!1,O("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){ca&&clearInterval(ca);ca=setInterval(function(){return 0<d.naturalWidth?(b._onImageHasSize(a),void 0):(200<c&&clearInterval(ca),c++,3===c?e(10):40===c?e(50):100===c&&e(500),void 0)},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,O("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,l=d.find(".mfp-img");if(l.length){var m=document.createElement("img");m.className="mfp-img";c.img=a(m).on("load.mfploader",f).on("error.mfploader",g);m.src=c.src;l.is("img")&&(c.img=c.img.clone());m=c.img[0];0<m.naturalWidth?c.hasSize=!0:m.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:ja(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(ca&&clearInterval(ca),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var n;a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom;if(c.enabled&&b.supportsTransition){var d,e,f=c.duration,g=function(a){a=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");var b={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"};return b["-webkit-transition"]=b["-moz-transition"]=b["-o-transition"]=b.transition="all "+c.duration/1E3+"s "+c.easing,a.css(b),a},l=function(){b.content.css("visibility","visible")};x("BuildControls.zoom",function(){if(b._allowZoom()){if(clearTimeout(d),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return l(),void 0;e=g(a);e.css(b._getOffset());b.wrap.append(e);d=setTimeout(function(){e.css(b._getOffset(!0));d=setTimeout(function(){l();setTimeout(function(){e.remove();a=e=null;O("ZoomAnimationEnded")},16)},f)},16)}});x("BeforeClose.zoom",function(){if(b._allowZoom()){if(clearTimeout(d),b.st.removalDelay=f,!a){if(a=b._getItemToZoom(),!a)return;e=g(a)}e.css(b._getOffset(!0));b.wrap.append(e);b.content.css("visibility","hidden");setTimeout(function(){e.css(b._getOffset())},16)}});x("Close.zoom",function(){b._allowZoom()&&(l(),e&&e.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);c=d.offset();var e=parseInt(d.css("padding-top"),10),f=parseInt(d.css("padding-bottom"),10);c.top-=a(window).scrollTop()-e;d={width:d.width(),height:(y?d.innerHeight():d[0].offsetHeight)-f-e};return(void 0===n&&(n=void 0!==document.createElement("p").style.MozTransform),n)?d["-moz-transform"]=d.transform="translate("+c.left+"px,"+c.top+"px)":(d.left=c.left,d.top=c.top),d}}});var da=function(a){if(b.currTemplate.iframe){var c=b.currTemplate.iframe.find("iframe");c.length&&(a||(c[0].src="//about:blank"),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push("iframe");x("BeforeChange",function(a,b,c){b!==c&&("iframe"===b?da():"iframe"===c&&da(!0))});x("Close.iframe",function(){da()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return-1<e.indexOf(this.index)?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var u=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},L=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,d=!!a.fn.mfpFastClick;return b.direction=!0,c&&c.enabled?(l+=" mfp-gallery",x("Open.mfp-gallery",function(){c.navigateByImgClick&&b.wrap.on("click.mfp-gallery",".mfp-img",function(){return 1<b.items.length?(b.next(),!1):void 0});e.on("keydown.mfp-gallery",function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),x("UpdateStatus.mfp-gallery",function(a,c){c.text&&(c.text=L(c.text,b.currItem.index,b.items.length))}),x("MarkupParse.mfp-gallery",function(a,d,e,f){a=b.items.length;e.counter=1<a?L(c.tCounter,f.index,a):""}),x("BuildControls.mfp-gallery",function(){if(1<b.items.length&&c.arrows&&!b.arrowLeft){var e=c.arrowMarkup,f=b.arrowLeft=a(e.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close");e=b.arrowRight=a(e.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");var g=d?"mfpFastClick":"click";f[g](function(){b.prev()});e[g](function(){b.next()});b.isIE7&&(C("b",f[0],!1,!0),C("a",f[0],!1,!0),C("b",e[0],!1,!0),C("a",e[0],!1,!0));b.container.append(f.add(e))}}),x("Change.mfp-gallery",function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout);b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages();b._preloadTimeout=null},16)}),x("Close.mfp-gallery",function(){e.off(".mfp-gallery");b.wrap.off("click.mfp-gallery");b.arrowLeft&&d&&b.arrowLeft.add(b.arrowRight).destroyMfpFastClick();b.arrowRight=b.arrowLeft=null}),void 0):!1},next:function(){b.direction=!0;b.index=u(b.index+1);b.updateItemHTML()},prev:function(){b.direction=!1;b.index=u(b.index-1);b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index;b.index=a;b.updateItemHTML()},preloadNearbyImages:function(){var a=b.st.gallery.preload;var c=Math.min(a[0],b.items.length),d=Math.min(a[1],b.items.length);for(a=1;(b.direction?d:c)>=a;a++)b._preloadItem(b.index+a);for(a=1;(b.direction?c:d)>=a;a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=u(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c));O("LazyLoad",d);"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0;d.loadError=!0;O("LazyLoadError",d)}).attr("src",d.src));d.preloaded=!0}}}});a.magnificPopup.registerModule("retina",{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(1<window.devicePixelRatio){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c;1<c&&(x("ImageHasSize.retina",function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),x("ElementParse.retina",function(b,d){d.src=a.replaceSrc(d,c)}))}}}});(function(){var b="ontouchstart"in window,c=function(){S.off("touchmove"+d+" touchend"+d)},d=".mfpFastClick";a.fn.mfpFastClick=function(e){return a(this).each(function(){var f,g=a(this);if(b){var l,h,k,t,m,n;g.on("touchstart"+d,function(a){t=!1;n=1;m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0];h=m.clientX;k=m.clientY;S.on("touchmove"+d,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches;n=m.length;m=m[0];(10<Math.abs(m.clientX-h)||10<Math.abs(m.clientY-k))&&(t=!0,c())}).on("touchend"+d,function(a){c();t||1<n||(f=!0,a.preventDefault(),clearTimeout(l),l=setTimeout(function(){f=!1},1E3),e())})})}g.on("click"+d,function(){f||e()})})};a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+d+" click"+d);b&&S.off("touchmove"+d+" touchend"+d)}})();V()})(window.jQuery||window.Zepto);(function(a,b,c){function d(a){var b={},d=/^jQuery\d+$/;c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)});return b}function e(a,b){var d=c(this);if(this.value==d.attr("placeholder")&&d.hasClass("placeholder"))if(d.data("placeholder-password")){d=d.hide().next().show().attr("id",d.removeAttr("id").data("placeholder-id"));if(!0===a)return d[0].value=b;d.focus()}else this.value="",d.removeClass("placeholder"),this==l()&&this.select()}function f(){var a=c(this),b=this.id;if(""==this.value){if("password"==this.type){if(!a.data("placeholder-textinput")){try{var f=a.clone().attr({type:"text"})}catch(V){f=c("<input>").attr(c.extend(d(this),{type:"text"}))}f.removeAttr("name").data({"placeholder-password":a,"placeholder-id":b}).bind("focus.placeholder",e);a.data({"placeholder-textinput":f,"placeholder-id":b}).before(f)}a=a.removeAttr("id").hide().prev().attr("id",b).show()}a.addClass("placeholder");a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")}function l(){try{return b.activeElement}catch(C){}}var g="placeholder"in b.createElement("input"),t="placeholder"in b.createElement("textarea"),y=c.fn,S=c.valHooks,x=c.propHooks;g&&t?(y=y.placeholder=function(){return this},y.input=y.textarea=!0):(y=y.placeholder=function(){this.filter((g?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":e,"blur.placeholder":f}).data("placeholder-enabled",!0).trigger("blur.placeholder");return this},y.input=g,y.textarea=t,y={get:function(a){var b=c(a),d=b.data("placeholder-password");return d?d[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var d=c(a),g=d.data("placeholder-password");if(g)return g[0].value=b;if(!d.data("placeholder-enabled"))return a.value=b;""==b?(a.value=b,a!=l()&&f.call(a)):d.hasClass("placeholder")?e.call(a,!0,b)||(a.value=b):a.value=b;return d}},g||(S.input=y,x.value=y),t||(S.textarea=y,x.value=y),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(e);setTimeout(function(){a.each(f)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b,c){var d=(new Date).getTime(),e=Math.max(0,16-(d-a)),g=window.setTimeout(function(){b(d+e)},e);a=d+e;return g});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})})();var tdDetect={};(function(){tdDetect={isIe8:!1,isIe9:!1,isIe10:!1,isIe11:!1,isIe:!1,isSafari:!1,isChrome:!1,isIpad:!1,isTouchDevice:!1,hasHistory:!1,isPhoneScreen:!1,isIos:!1,isAndroid:!1,isOsx:!1,isFirefox:!1,isWinOs:!1,isMobileDevice:!1,htmlJqueryObj:null,runIsPhoneScreen:function(){(768>jQuery(window).width()||768>jQuery(window).height())&&!1===tdDetect.isIpad?tdDetect.isPhoneScreen=!0:tdDetect.isPhoneScreen=!1},set:function(a,b){tdDetect[a]=b}};tdDetect.htmlJqueryObj=jQuery("html");-1!==navigator.appVersion.indexOf("Win")&&tdDetect.set("isWinOs",!0);"ontouchstart"in window&&!tdDetect.isWinOs&&tdDetect.set("isTouchDevice",!0);tdDetect.htmlJqueryObj.is(".ie8")&&(tdDetect.set("isIe8",!0),tdDetect.set("isIe",!0));tdDetect.htmlJqueryObj.is(".ie9")&&(tdDetect.set("isIe9",!0),tdDetect.set("isIe",!0));-1<navigator.userAgent.indexOf("MSIE 10.0")&&(tdDetect.set("isIe10",!0),tdDetect.set("isIe",!0));navigator.userAgent.match(/Trident.*rv:11\./)&&tdDetect.set("isIe11",!0);window.history&&window.history.pushState&&tdDetect.set("hasHistory",!0);-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&tdDetect.set("isSafari",!0);/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())&&tdDetect.set("isChrome",!0);null!==navigator.userAgent.match(/iPad/i)&&tdDetect.set("isIpad",!0);/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&tdDetect.set("isIos",!0);/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&tdDetect.set("isMobileDevice",!0);tdDetect.runIsPhoneScreen();-1<navigator.userAgent.toLowerCase().indexOf("android")&&tdDetect.set("isAndroid",!0);-1!==navigator.userAgent.indexOf("Mac OS X")&&tdDetect.set("isOsx",!0);-1!==navigator.userAgent.indexOf("Firefox")&&tdDetect.set("isFirefox",!0)})();var tdViewport={};(function(){tdViewport={INTERVAL_INITIAL_INDEX:-1,_currentIntervalIndex:tdViewport.INTERVAL_INITIAL_INDEX,_intervalList:[],init:function(){if("undefined"!==typeof window.td_viewport_interval_list&&Array===window.td_viewport_interval_list.constructor){for(var a=0;a<window.td_viewport_interval_list.length;a++){var b=new tdViewport.item,c=window.td_viewport_interval_list[a];if(!c.hasOwnProperty("limitBottom")||!c.hasOwnProperty("sidebarWidth"))break;b.limitBottom=c.limitBottom;b.sidebarWidth=c.sidebarWidth;tdViewport._items.push(b)}tdViewport.detectChanges()}},getCurrentIntervalIndex:function(){return tdViewport._currentIntervalIndex},setIntervalList:function(a){tdViewport._intervalList=a},getIntervalList:function(){return tdViewport._intervalList},getCurrentIntervalItem:function(){return tdViewport.INTERVAL_INITIAL_INDEX===tdViewport._currentIntervalIndex||0===tdViewport._currentIntervalIndex?null:tdViewport._items[tdViewport._currentIntervalIndex-1]},_items:[],item:function(){this.sidebarWidth=this.limitBottom=void 0},detectChanges:function(){var a=!1,b=0;var c=!0===tdDetect.isSafari?this._safariWiewPortWidth.getRealWidth():Math.max(document.documentElement.clientWidth,window.innerWidth||0);for(var d=0;d<tdViewport._items.length;d++){if(c<=tdViewport._items[d].limitBottom){b!==tdViewport._currentIntervalIndex&&(tdViewport._currentIntervalIndex=b,a=!0,tdViewport.log("changing viewport "+tdViewport._currentIntervalIndex+" ~ "+c));break}b++}!1===a&&b!==tdViewport._currentIntervalIndex&&(tdViewport._currentIntervalIndex=b,a=!0,tdViewport.log("changing viewport "+tdViewport._currentIntervalIndex+" ~ "+c));return a},_safariWiewPortWidth:{divAdded:!1,divJqueryObject:"",getRealWidth:function(){!1===this.divAdded&&(this.divJqueryObject=jQuery("<div>").css({height:"1px",position:"absolute",top:"-1px",left:"0",right:"0",visibility:"hidden","z-index":"-1"}),this.divJqueryObject.appendTo("body"),this.divAdded=!0);return this.divJqueryObject.width()}},log:function(a){}};tdViewport.init()})();var tdMenu={};(function(){tdMenu={_itemsWithSubmenu:null,_mainMenu:null,_outsideClickArea:null,_outsideClickExcludedAreas:"#td-header-menu .sf-menu, #td-header-menu .sf-menu *, .menu-top-container, .menu-top-container *",_openMenuClass:"sfHover",_openMenuBodyClass:"td-open-menu",init:function(){var a=jQuery("#td-header-menu .sf-menu"),b=jQuery("#td-header-menu .sf-menu, .top-header-menu"),c=b.find(".menu-item-has-children > a, .td-mega-menu > a");c.append('<i class="td-icon-menu-down"></i>');a.supersubs({minWidth:10,maxWidth:20,extraWidth:1});c.addClass("sf-with-ul");b.addClass("sf-js-enabled");c.parent().find("ul").first().css("display","none");tdMenu._mainMenu=a;tdMenu._itemsWithSubmenu=c;tdMenu._outsideClickArea=jQuery(window).not(tdMenu._outsideClickExcludedAreas);tdMenu._setHover(c,a)},_getSubmenuPosition:function(a){var b=jQuery(window).width();a=a.children("ul").first();if(0<a.length){var c=a.offset().left+a.width();c>b&&(a.parent().parent().hasClass("sf-menu")?a.css("left","-"+(c-b)+"px"):a.addClass("reversed").css("left","-"+(a.width()+0)+"px"))}},_getMouseAngleDirection:function(a,b,c,d){return Math.atan2(c-a,d-b)/Math.PI*180},_setHover:function(a,b){if(tdDetect.isTouchDevice)jQuery(document).on("touchstart","body",function(b){var c=a.parent(),d=jQuery("body");d.hasClass(tdMenu._openMenuBodyClass)&&!c.is(b.target)&&0===c.has(b.target).length&&(c.removeClass(tdMenu._openMenuClass),c.children("ul").hide(),d.removeClass(tdMenu._openMenuBodyClass))}),a.on("touchstart",function(b){b.preventDefault();b.stopPropagation();var c=jQuery(this);b=c.parent();var d=jQuery("body");b.hasClass(tdMenu._openMenuClass)?null!==c.attr("href")&&"#"!==c.attr("href")?window.location.href=c.attr("href"):((b.parent().hasClass("sf-menu")||b.parent().hasClass("top-header-menu"))&&d.removeClass(tdMenu._openMenuBodyClass),b.removeClass(tdMenu._openMenuClass),b.find("ul").hide(),b.find("li").removeClass(tdMenu._openMenuClass)):(b.parent().hasClass("sf-menu")||b.parent().hasClass("top-header-menu")?(a.parent().removeClass(tdMenu._openMenuClass),a.parent().children("ul").hide()):(c=b.siblings(),c.removeClass(tdMenu._openMenuClass),c.find("ul").hide(),c.find("li").removeClass(tdMenu._openMenuClass)),b.addClass(tdMenu._openMenuClass),b.children("ul").show(),tdMenu._getSubmenuPosition(b),d.addClass(tdMenu._openMenuBodyClass))});else{var c={},d,e=!0;b.on("mouseleave",function(){a.parent().removeClass(tdMenu._openMenuClass);a.parent().children("ul").hide();c={}});b.find(".menu-item").hover(function(){var b=jQuery(this),l="",g,t;if(b.hasClass("menu-item-has-children")||b.hasClass("td-mega-menu"))if(b.parent().hasClass("sf-menu"))if(jQuery.isEmptyObject(c))b.addClass(tdMenu._openMenuClass),b.children("ul").show(),c=b;else{if(b[0]!==c[0]){var y=t=g=0;var S=null;!0===e&&(e=!1,d=setTimeout(function(){a.parent().removeClass(tdMenu._openMenuClass);a.parent().children("ul").hide();b.addClass(tdMenu._openMenuClass);b.children("ul").show();c=b},400));b.on("mousemove",function(f){5<=g?(g=0,S=tdMenu._getMouseAngleDirection(t,y,f.pageX,f.pageY),t=f.pageX,y=f.pageY):(g++,0===t&&0===y&&(t=f.pageX,y=f.pageY));null!==S&&(85<S||-85>S)&&(a.parent().removeClass(tdMenu._openMenuClass),a.parent().children("ul").hide(),b.addClass(tdMenu._openMenuClass),b.children("ul").show(),b.off("mousemove"),clearTimeout(d),e=!0,c=b)})}}else l=b.siblings(),l.removeClass(tdMenu._openMenuClass),l.find("ul").hide(),l.find("li").removeClass(tdMenu._openMenuClass),b.addClass(tdMenu._openMenuClass),b.children("ul").show(),tdMenu._getSubmenuPosition(b);else b.parent().hasClass("sf-menu")||b.parent().hasClass("top-header-menu")?jQuery.isEmptyObject(c)||(y=t=g=0,S=null,!0===e&&(e=!1,d=setTimeout(function(){a.parent().removeClass(tdMenu._openMenuClass);a.parent().children("ul").hide();c={}},400)),b.on("mousemove",function(f){5<=g?(g=0,S=tdMenu._getMouseAngleDirection(t,y,f.pageX,f.pageY),t=f.pageX,y=f.pageY):(g++,0===t&&0===y&&(t=f.pageX,y=f.pageY));null!==S&&(85<S||-85>S)&&(a.parent().removeClass(tdMenu._openMenuClass),a.parent().children("ul").hide(),b.off("mousemove"),clearTimeout(d),e=!0,c={})})):(c=b.parent(),l=b.siblings(),l.removeClass(tdMenu._openMenuClass),l.find("ul").hide(),l.find("li").removeClass(tdMenu._openMenuClass))},function(){var a=jQuery(this);!1===e&&(clearTimeout(d),e=!0);a.off("mousemove")})}},unsetHover:function(){null!==tdMenu._itemsWithSubmenu&&tdMenu._itemsWithSubmenu.off();null!==tdMenu._outsideClickArea&&tdMenu._outsideClickArea.off()}}})();jQuery().ready(function(){tdMenu.init()});var tdUtil={};(function(){tdUtil={email_pattern:/^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,stopBubble:function(a){a&&a.stopPropagation?a.stopPropagation():window.event.cancelBubble=!0},isEmail:function(a){return tdUtil.email_pattern.test(a)},imageMoveClassToFigure:function(a){jQuery("figure ."+a).each(function(){jQuery(this).parents("figure:first").addClass(a);jQuery(this).removeClass(a)})},getBackendVar:function(a){return"undefined"===typeof window[a]?"":window[a]},isUndefined:function(a){return void 0===a},scrollToElement:function(a,b){tdIsScrollingAnimation=!0;jQuery("html, body").stop();var c=a.offset().top>jQuery(document).height()-jQuery(window).height()?jQuery(document).height()-jQuery(window).height():a.offset().top;jQuery("html, body").animate({scrollTop:c},{duration:b,easing:"easeInOutQuart",complete:function(){tdIsScrollingAnimation=!1}})},scrollIntoView:function(a){tdIsScrollingAnimation=!0;if(!0!==tdDetect.isMobileDevice){jQuery("html, body").stop();a=a.find("img").offset().top;a-=150;var b=Math.abs(jQuery(window).scrollTop()-a)/5;jQuery("html, body").animate({scrollTop:a},{duration:1100+b,easing:"easeInOutQuart",complete:function(){tdIsScrollingAnimation=!1}})}},scrollToPosition:function(a,b){tdIsScrollingAnimation=!0;jQuery("html, body").stop();jQuery("html, body").animate({scrollTop:a},{duration:b,easing:"easeInOutQuart",complete:function(){tdIsScrollingAnimation=!1}})},tdMoveY:function(a,b){var c="translate3d(0px,"+b+"px, 0px)";a.style["-webkit-transform"]=c;a.style["-moz-transform"]=c;a.style["-ms-transform"]=c;a.style["-o-transform"]=c;a.style.transform=c},isValidUrl:function(a){return/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(a)?!0:!1},round:function(a,b,c){b=Math.pow(10,b|0);a*=b;var d=0<a|-(0>a);var e=a%1===.5*d;var f=Math.floor(a);if(e)switch(c){case"PHP_ROUND_HALF_DOWN":a=f+(0>d);break;case"PHP_ROUND_HALF_EVEN":a=f+f%2*d;break;case"PHP_ROUND_HALF_ODD":a=f+!(f%2);break;default:a=f+(0<d)}return(e?a:Math.round(a))/b}}})();var tdAffix={};(function(){tdAffix={allow_scroll:!0,menu_selector:"",menu_wrap_selector:"",tds_snap_menu:"",tds_snap_menu_logo:"",is_menu_affix_height_computed:!1,is_menu_affix_height_on_mobile_computed:!1,menu_affix_height:0,menu_affix_height_on_mobile:0,main_menu_height:0,top_offset:0,menu_offset:0,is_requestAnimationFrame_running:!1,is_menu_affix:!1,is_top_menu:!1,menu_offset_max_hit:!1,menu_offset_min_hit:!0,scroll_window_scrollTop_last:0,init:function(a){tdAffix.menu_selector=a.menu_selector;tdAffix.menu_wrap_selector=a.menu_wrap_selector;tdAffix.tds_snap_menu=a.tds_snap_menu;tdAffix.tds_snap_menu_logo=a.tds_snap_menu_logo;tdAffix.menu_affix_height=a.menu_affix_height;tdAffix.menu_affix_height_on_mobile=a.menu_affix_height_on_mobile;tdAffix.tds_snap_menu&&(tdDetect.isFirefox&&(tdAffix.compute_wrapper(),tdAffix.compute_top()),jQuery().ready(function(){tdAffix.compute_wrapper();tdAffix.compute_top()}),jQuery(window).load(function(){tdAffix.compute_wrapper();tdAffix.compute_top();setTimeout(function(){tdAffix.compute_top()},1E3)}))},_get_menu_affix_height:function(){if(!0===tdDetect.isPhoneScreen)return!tdAffix.is_menu_affix_height_on_mobile_computed&&tdAffix.is_menu_affix&&(tdAffix.is_menu_affix_height_on_mobile_computed=!0,tdAffix.menu_affix_height_on_mobile=jQuery(tdAffix.menu_selector).height()),tdAffix.menu_affix_height_on_mobile;!tdAffix.is_menu_affix_height_computed&&tdAffix.is_menu_affix&&(tdAffix.is_menu_affix_height_computed=!0,tdAffix.menu_affix_height=jQuery(tdAffix.menu_selector).height(),"smart_snap_always"===tdAffix.tds_snap_menu&&(tdAffix.top_offset=tdAffix.menu_affix_height));return tdAffix.menu_affix_height},td_events_scroll:function(a){if(tdAffix.allow_scroll&&tdAffix.tds_snap_menu){var b="";if("snap"!==tdAffix.tds_snap_menu&&("smart_snap_mobile"!==tdAffix.tds_snap_menu||!0===tdDetect.isPhoneScreen)){var c=0;a!==tdAffix.scroll_window_scrollTop_last&&(b=a>tdAffix.scroll_window_scrollTop_last?"down":"up",c=Math.abs(a-tdAffix.scroll_window_scrollTop_last));tdAffix.scroll_window_scrollTop_last=a}""!==tdAffix.tds_snap_menu&&""!==tdAffix.tds_snap_menu_logo&&jQuery(".td-main-menu-logo").addClass("td-logo-sticky");if(a>tdAffix.top_offset+(tdAffix.main_menu_height/2-tdAffix._get_menu_affix_height()/2)||!0===tdAffix.is_menu_affix&&"smart_snap_always"===tdAffix.tds_snap_menu&&a>tdAffix.top_offset-tdAffix._get_menu_affix_height()||!0===tdAffix.is_top_menu){var d=jQuery(tdAffix.menu_selector);tdAffix._affix_on(d);"snap"===tdAffix.tds_snap_menu||"smart_snap_mobile"===tdAffix.tds_snap_menu&&!1===tdDetect.isPhoneScreen||(!1===tdAffix.menu_offset_max_hit&&"down"===b||!1===tdAffix.menu_offset_min_hit&&"up"===b)&&window.requestAnimationFrame(function(){var e=0;0<a&&("down"===b?(e=tdAffix.menu_offset-c,e<-tdAffix._get_menu_affix_height()&&(e=-tdAffix._get_menu_affix_height())):"up"===b&&(e=tdAffix.menu_offset+c,0<e&&(e=0)));tdUtil.tdMoveY(d[0],e);tdAffix.menu_offset_min_hit=0===e?!0:!1;e===-tdAffix._get_menu_affix_height()?(tdAffix.menu_offset_max_hit=!0,(!0===tdDetect.isIos||tdDetect.isSafari)&&d.hide(),""!==tdAffix.tds_snap_menu_logo&&jQuery(".td-main-menu-logo").addClass("td-logo-sticky")):(tdAffix.menu_offset_max_hit=!1,(!0===tdDetect.isIos||tdDetect.isSafari)&&d.show());tdAffix.menu_offset=e},d[0])}else tdAffix._affix_off(jQuery(tdAffix.menu_selector))}},compute_top:function(){tdAffix.top_offset=jQuery(tdAffix.menu_wrap_selector).offset().top;"smart_snap_always"===tdAffix.tds_snap_menu&&(tdAffix.top_offset+=tdAffix.menu_affix_height);tdAffix.is_top_menu=1===tdAffix.top_offset?!0:!1;tdAffix.td_events_scroll(jQuery(window).scrollTop())},compute_wrapper:function(){jQuery(tdAffix.menu_selector).hasClass("td-affix")?(jQuery(tdAffix.menu_selector).removeClass("td-affix"),tdAffix.main_menu_height=jQuery(tdAffix.menu_selector).height(),jQuery(tdAffix.menu_selector).addClass("td-affix")):tdAffix.main_menu_height=jQuery(tdAffix.menu_selector).height();jQuery(tdAffix.menu_wrap_selector).css("height",tdAffix.main_menu_height)},_affix_on:function(a){!1===tdAffix.is_menu_affix?("smart_snap_always"===tdAffix.tds_snap_menu&&!0!==tdDetect.isPhoneScreen&&a.css("visibility","hidden"),tdAffix.menu_offset=-tdAffix.top_offset,a.addClass("td-affix"),jQuery("body").addClass("body-td-affix"),tdAffix.is_menu_affix=!0):!0!==tdDetect.isPhoneScreen&&a.css("visibility","")},_affix_off:function(a){!0===tdAffix.is_menu_affix&&(jQuery(tdAffix.menu_selector).removeClass("td-affix"),""===tdAffix.tds_snap_menu_logo&&jQuery(".td-main-menu-logo").removeClass("td-logo-sticky"),jQuery("body").removeClass("body-td-affix"),tdAffix.is_menu_affix=!1,tdUtil.tdMoveY(a[0],0),(!0===tdDetect.isIos||tdDetect.isSafari)&&a.show())}}})();"use strict";jQuery().ready(function(){td_retina();td_mobile_menu_toogle();td_resize_videos();jQuery("input, textarea").placeholder();td_more_articles_box.init();td_smart_lists_magnific_popup();td_smart_list_dropdown();if("undefined"!==typeof tdsDateFormat){var a=Math.floor((new Date).getTime()/1E3);a=td_date_i18n(tdsDateFormat,a);jQuery(".td_data_time").text(a)}setMenuMinHeight();td_comments_form_validation();td_scroll_to_class()});function td_smart_list_dropdown(){jQuery(".td-smart-list-dropdown").on("change",function(){window.location=this.value})}var td_more_articles_box={is_box_visible:!1,cookie:"",distance_from_top:400,init:function(){td_more_articles_box.cookie=td_read_site_cookie("td-cookie-more-articles");!isNaN(parseInt(tds_more_articles_on_post_pages_distance_from_top))&&isFinite(tds_more_articles_on_post_pages_distance_from_top)&&0<parseInt(tds_more_articles_on_post_pages_distance_from_top)?td_more_articles_box.distance_from_top=parseInt(tds_more_articles_on_post_pages_distance_from_top):td_more_articles_box.distance_from_top=400;jQuery(".td-close-more-articles-box").click(function(){jQuery(".td-more-articles-box").removeClass("td-front-end-display-block");jQuery(".td-more-articles-box").hide();!isNaN(parseInt(tds_more_articles_on_post_time_to_wait))&&isFinite(tds_more_articles_on_post_time_to_wait)&&td_set_cookies_life(["td-cookie-more-articles","hide-more-articles-box",864E5*parseInt(tds_more_articles_on_post_time_to_wait)])})},td_events_scroll:function(a){tdIsScrollingAnimation||"show"!=tdUtil.getBackendVar("tds_more_articles_on_post_enable")||"hide-more-articles-box"==td_more_articles_box.cookie||(a>td_more_articles_box.distance_from_top?!1===td_more_articles_box.is_box_visible&&(jQuery(".td-more-articles-box").addClass("td-front-end-display-block"),td_more_articles_box.is_box_visible=!0):!0===td_more_articles_box.is_box_visible&&(jQuery(".td-more-articles-box").removeClass("td-front-end-display-block"),td_more_articles_box.is_box_visible=!1))}},td_resize_timer_id;jQuery(window).resize(function(){clearTimeout(td_resize_timer_id);td_resize_timer_id=setTimeout(function(){td_done_resizing()},200)});function td_done_resizing(){td_resize_videos()}function td_resize_videos(){jQuery(document).find('iframe[src*="youtube.com"]').each(function(){var a=jQuery(this).parent().parent().parent(),b=jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo"),c=a.hasClass("vc_video-aspect-ratio-43");a=a.hasClass("vc_video-aspect-ratio-235");b||c||a||(b=jQuery(this),b.attr("width","100%"),c=b.width(),b.css("height",.5625*c,"important"))});jQuery(document).find('iframe[src*="vimeo.com"]').each(function(){var a=jQuery(this).parent().parent().parent(),b=jQuery(this).parent().hasClass("td_wrapper_playlist_player_vimeo"),c=a.hasClass("vc_video-aspect-ratio-43");a=a.hasClass("vc_video-aspect-ratio-235");b||c||a||(b=jQuery(this),b.attr("width","100%"),c=b.width(),b.css("height",.5625*c,"important"))});jQuery(document).find('iframe[src*="dailymotion.com"]').each(function(){var a=jQuery(this).parent().parent().parent(),b=a.hasClass("vc_video-aspect-ratio-43");a=a.hasClass("vc_video-aspect-ratio-235");b||a||(b=jQuery(this),b.attr("width","100%"),a=b.width(),b.css("height",.6*a,"important"))})}function td_mobile_menu(){}function td_mobile_menu_toogle(){jQuery("#td-top-mobile-toggle a, .td-mobile-close a").click(function(){jQuery("body").hasClass("td-menu-mob-open-menu")?jQuery("body").removeClass("td-menu-mob-open-menu"):jQuery("body").addClass("td-menu-mob-open-menu")});jQuery(document).find("#td-mobile-nav .menu-item-has-children").each(function(a){a="td_mobile_elem_with_submenu_"+a;jQuery(this).addClass(a);jQuery(this).children("a").addClass("td-link-element-after");jQuery(this).click(function(a){var b=jQuery(a.target);!b.length||!b.hasClass("td-element-after")&&!b.hasClass("td-link-element-after")||"#"!==b.attr("href")&&void 0!==b.attr("href")||(a.preventDefault(),a.stopPropagation(),jQuery(this).toggleClass("td-sub-menu-open"))})})}function td_retina(){1<window.devicePixelRatio&&(jQuery(".td-retina").each(function(a){a=jQuery(this).attr("src").replace(".png","@2x.png");a=a.replace(".jpg","@2x.jpg");jQuery(this).attr("src",a)}),jQuery(".td-retina-data").each(function(a){jQuery(this).attr("src",jQuery(this).data("retina"));jQuery(this).addClass("td-retina-version")}))}tdDetect.isTouchDevice||""==tdUtil.getBackendVar("td_ad_background_click_link")||jQuery("body").click(function(a){a=jQuery(a.target?a.target:a.srcElement);if(a.hasClass("td-outer-container")||a.hasClass("td-theme-wrap")||a.hasClass("td-header-wrap"))"_blank"==td_ad_background_click_target?window.open(td_ad_background_click_link):location.href=td_ad_background_click_link});function td_read_site_cookie(a){a=escape(a)+"=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var d=b[c];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return unescape(d.substring(a.length,d.length))}return null}function td_set_cookies_life(a){var b=new Date;b.setTime(b.getTime()+a[2]);document.cookie=a[0]+"="+a[1]+"; expires="+b.toGMTString()+"; path=/"}var tdIsScrollingAnimation=!1,td_mouse_wheel_or_touch_moved=!1;jQuery(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){!1!==tdIsScrollingAnimation&&(tdIsScrollingAnimation=!1,td_mouse_wheel_or_touch_moved=!0,jQuery("html, body").stop())});document.addEventListener&&document.addEventListener("touchmove",function(a){!1!==tdIsScrollingAnimation&&(tdIsScrollingAnimation=!1,td_mouse_wheel_or_touch_moved=!0,jQuery("html, body").stop())},!1);var td_scroll_to_top_is_visible=!1;function td_events_scroll_scroll_to_top(a){tdIsScrollingAnimation||(400<a?!1===td_scroll_to_top_is_visible&&(td_scroll_to_top_is_visible=!0,jQuery(".td-scroll-up").addClass("td-scroll-up-visible")):!0===td_scroll_to_top_is_visible&&(td_scroll_to_top_is_visible=!1,jQuery(".td-scroll-up").removeClass("td-scroll-up-visible")))}jQuery(".td-scroll-up").click(function(){if(!tdIsScrollingAnimation)return td_scroll_to_top_is_visible=!1,jQuery(".td-scroll-up").removeClass("td-scroll-up-visible"),td_more_articles_box.is_box_visible=!1,jQuery(".td-more-articles-box").removeClass("td-front-end-display-block"),tdUtil.scrollToPosition(0,1200),!1});jQuery(".td-read-down a").click(function(a){a.preventDefault();tdUtil.scrollToPosition(jQuery(".td-full-screen-header-image-wrap").height(),1200)});function td_post_template_6_title(){function a(){d=jQuery(document).scrollTop();if(950>=d){var a=1-d/800;!0===tdDetect.isIe8&&(a=1);a=Math.round(100*a)/100;b.style.opacity=a;tdUtil.tdMoveY(c,- -Math.round(d/4));e=-Math.round(d/8);tdUtil.tdMoveY(b,-e)}f=!1}var b=document.getElementById("td_parallax_header_6"),c=document.getElementById("td-full-screen-header-image"),d="",e;jQuery(window).scroll(function(){!1===f&&window.requestAnimationFrame(a);f=!0});var f=!1}function td_smart_lists_magnific_popup(){jQuery(".td-lightbox-enabled").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1],tCounter:tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")},image:{tError:"<a href='%url%'>The image #%curr%</a> could not be loaded.",titleSrc:function(a){return a.el.attr("data-caption")}},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}},callbacks:{change:function(a){if(""!=a.el[0].id){var b=a.el[0].id.split("_");jQuery(".td-iosSlider").iosSlider("goToSlide",parseInt(b[1])+1)}else tdModalImageLastEl=a.el,setTimeout(function(){tdUtil.scrollIntoView(a.el)},100)},beforeClose:function(){""!=tdModalImageLastEl&&tdUtil.scrollIntoView(tdModalImageLastEl)}}});jQuery("[data-mfp-src]").magnificPopup({preloader:!0,tLoading:"Loading url #%curr%...",type:"iframe",markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',iframe:{patterns:{youtube:{index:"youtube.com/",id:function(a){return(a=a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&\?]{11,11}).*/))&&2<=a.length?a[2]:null},src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"}},srcAction:"iframe_src"}});jQuery("[data-mfp-src]").on("click",function(a){a.preventDefault();jQuery(this).magnificPopup("open")})}function td_get_document_width(){var a=0;self.innerHeight?a=self.innerWidth:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientWidth:document.body&&(a=document.body.clientWidth);return a}function td_get_document_height(){var a=0;self.innerHeight?a=self.innerHeight:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&(a=document.body.clientHeight);return a}function setMenuMinHeight(){if("undefined"===typeof tdEvents.previousWindowInnerWidth)tdEvents.previousWindowInnerWidth=tdEvents.window_innerWidth;else if(tdEvents.previousWindowInnerWidth===tdEvents.window_innerWidth)return;tdEvents.previousWindowInnerWidth=tdEvents.window_innerWidth;var a=jQuery("#td-mobile-nav"),b=tdEvents.window_innerHeight+1;a.length&&a.css("min-height",b+"px");if(tdDetect.isMobileDevice){a=jQuery(".td-menu-background");var c=jQuery(".td-search-background");a.length&&a.css("height",b+70+"px");c.length&&c.css("height",b+70+"px")}}function td_comments_form_validation(){jQuery(".comment-form").submit(function(a){jQuery("form#commentform :input").each(function(){var b=jQuery(this),c=jQuery(this).parent().parent();b.attr("aria-required")&&(""==b.val()?(a.preventDefault(),c.addClass("td-comment-form-warnings"),"comment"==b.attr("id")?(c.find(".td-warning-comment").show(200),b.css("border","1px solid #ff7a7a")):"author"==b.attr("id")?(c.find(".td-warning-author").show(200),b.css("border","1px solid #ff7a7a")):"email"==b.attr("id")&&(c.find(".td-warning-email").show(200),b.css("border","1px solid #ff7a7a"))):"email"==b.attr("id")&&!1===tdUtil.isEmail(b.val())&&(a.preventDefault(),c.addClass("td-comment-form-warnings"),c.find(".td-warning-email-error").show(200)))})});jQuery("form#commentform :input").each(function(){var a=jQuery(this).parent().parent(),b=jQuery(this);b.focus(function(){"comment"==b.attr("id")?(a.find(".td-warning-comment").hide(200),b.css("border","1px solid #e1e1e1")):"author"==b.attr("id")?(a.find(".td-warning-author").hide(200),b.css("border","1px solid #e1e1e1")):"email"==b.attr("id")&&(a.find(".td-warning-email").hide(200),a.find(".td-warning-email-error").hide(200),b.css("border","1px solid #e1e1e1"))})})}function td_scroll_to_class(){jQuery("[data-scroll-to-class]").on("click",function(a){a.preventDefault();a.stopImmediatePropagation();a=jQuery(this);var b=a.offset(),c=a.data("scroll-to-class"),d=a.data("scroll-offset"),e=a.data("scroll-target");if("undefined"===typeof d||""===d)d=0;if("undefined"!==typeof c&&""!==c){var f=jQuery("."+c);f.length?(c=f.offset(),b=400*Math.floor(Math.abs(b.top-c.top)/100),1500<b?b=1500:500>b&&(b=500),tdUtil.scrollToPosition(c.top+d,b),a=a.parent().parent("li.menu-item"),a.length&&(a.siblings(".current-menu-item").removeClass("current-menu-item"),a.addClass("current-menu-item")),jQuery("body").removeClass("td-menu-mob-open-menu")):"undefined"!==typeof e&&""!==e&&(td_set_cookies_life(["td-cookie-scroll-to-class",c,864E5]),td_set_cookies_life(["td-cookie-scroll-offset",d,864E5]),jQuery("body").removeClass("td-menu-mob-open-menu"),window.location=e)}})}jQuery(window).load(function(){var a=td_read_site_cookie("td-cookie-scroll-to-class"),b=td_read_site_cookie("td-cookie-scroll-offset");if("undefined"!==typeof a&&null!==a){td_set_cookies_life(["td-cookie-scroll-to-class","",1]);td_set_cookies_life(["td-cookie-scroll-offset","",1]);var c=jQuery("."+a);if(c.length){c=c.offset();var d=400*Math.floor(Math.abs(c.top)/100);1500<d?d=1500:500>d&&(d=500);var e=0;"undefined"!==typeof b&&null!==b&&(e=parseInt(b));tdUtil.scrollToPosition(c.top+e,d);a=jQuery('[data-scroll-to-class="'+a+'"]');a.length&&(a=a.parent().parent("li.menu-item"),a.length&&(a.siblings(".current-menu-item").removeClass("current-menu-item"),a.addClass("current-menu-item")))}}});var tdLoadingBox={};(function(){tdLoadingBox={speed:40,arrayColorsTemp:"rgba(99, 99, 99, 0);rgba(99, 99, 99, 0.05);rgba(99, 99, 99, 0.08);rgba(99, 99, 99, 0.2);rgba(99, 99, 99, 0.3);rgba(99, 99, 99, 0.5);rgba(99, 99, 99, 0.6);rgba(99, 99, 99, 1)".split(";"),arrayColors:[],statusAnimation:"stop",stop:function(){tdLoadingBox.statusAnimation="stop"},init:function(a,b){!1===tdUtil.isUndefined(b)&&(tdLoadingBox.speed=b);var c=/^#[a-zA-Z0-9]{3,6}$/;a&&c.test(a)?(c=tdLoadingBox.hexToRgb(a),c="rgba("+c.r+", "+c.g+", "+c.b+", ",tdLoadingBox.arrayColors[7]=c+" 0.9)",tdLoadingBox.arrayColors[6]=c+" 0.7)",tdLoadingBox.arrayColors[5]=c+" 0.5)",tdLoadingBox.arrayColors[4]=c+" 0.3)",tdLoadingBox.arrayColors[3]=c+" 0.15)",tdLoadingBox.arrayColors[2]=c+" 0.15)",tdLoadingBox.arrayColors[1]=c+" 0.15)",tdLoadingBox.arrayColors[0]=c+" 0.15)"):tdLoadingBox.arrayColors=tdLoadingBox.arrayColorsTemp.slice(0);"stop"===tdLoadingBox.statusAnimation&&(tdLoadingBox.statusAnimation="display",this.render())},render:function(a){tdLoadingBox.animationDisplay('<div class="td-lb-box td-lb-box-1" style="background-color:'+tdLoadingBox.arrayColors[0]+'"></div><div class="td-lb-box td-lb-box-2" style="background-color:'+tdLoadingBox.arrayColors[1]+'"></div><div class="td-lb-box td-lb-box-3" style="background-color:'+tdLoadingBox.arrayColors[2]+'"></div><div class="td-lb-box td-lb-box-4" style="background-color:'+tdLoadingBox.arrayColors[3]+'"></div><div class="td-lb-box td-lb-box-5" style="background-color:'+tdLoadingBox.arrayColors[4]+'"></div><div class="td-lb-box td-lb-box-6" style="background-color:'+tdLoadingBox.arrayColors[5]+'"></div><div class="td-lb-box td-lb-box-7" style="background-color:'+tdLoadingBox.arrayColors[6]+'"></div><div class="td-lb-box td-lb-box-8" style="background-color:'+tdLoadingBox.arrayColors[7]+'"></div>');a=[tdLoadingBox.arrayColors[0],tdLoadingBox.arrayColors[1],tdLoadingBox.arrayColors[2],tdLoadingBox.arrayColors[3],tdLoadingBox.arrayColors[4],tdLoadingBox.arrayColors[5],tdLoadingBox.arrayColors[6],tdLoadingBox.arrayColors[7]];tdLoadingBox.arrayColors[0]=a[7];tdLoadingBox.arrayColors[1]=a[0];tdLoadingBox.arrayColors[2]=a[1];tdLoadingBox.arrayColors[3]=a[2];tdLoadingBox.arrayColors[4]=a[3];tdLoadingBox.arrayColors[5]=a[4];tdLoadingBox.arrayColors[6]=a[5];tdLoadingBox.arrayColors[7]=a[6];"display"===tdLoadingBox.statusAnimation?setTimeout(tdLoadingBox.render,tdLoadingBox.speed):tdLoadingBox.animationDisplay("")},animationDisplay:function(a){jQuery(".td-loader-gif").html(a)},hexToRgb:function(a){return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}}})();var tdAjaxSearch={};jQuery().ready(function(){tdAjaxSearch.init()});(function(){tdAjaxSearch={_current_selection_index:0,_last_request_results_count:0,_first_down_up:!0,_is_search_open:!1,init:function(){jQuery(document).click(function(a){"td-icon-search"!==a.target.className&&"td-header-search"!==a.target.id&&"td-header-search-top"!==a.target.id&&!0===tdAjaxSearch._is_search_open&&tdAjaxSearch.hide_search_box()});jQuery("#td-header-search-button").click(function(a){a.preventDefault();!0===tdAjaxSearch._is_search_open?tdAjaxSearch.hide_search_box():tdAjaxSearch.show_search_box()});jQuery("#td-header-search-button-mob").click(function(a){jQuery("body").addClass("td-search-opened");var b=jQuery("#td-header-search-mob");setTimeout(function(){b.focus()},1300);0<b.val().trim().length&&tdAjaxSearch.do_ajax_call_mob()});jQuery(".td-search-close a").click(function(){jQuery("body").removeClass("td-search-opened")});jQuery("#td-header-search").keydown(function(a){if(a.which&&39===a.which||a.keyCode&&39===a.keyCode||a.which&&37===a.which||a.keyCode&&37===a.keyCode)tdAjaxSearch.td_aj_search_input_focus();else{if(a.which&&13===a.which||a.keyCode&&13===a.keyCode)return a=jQuery(".td-aj-cur-element"),0<a.length?(a=a.find(".entry-title a").attr("href"),window.location=a):jQuery(this).parent().parent().submit(),!1;if(a.which&&40===a.which||a.keyCode&&40===a.keyCode)return tdAjaxSearch.move_prompt_down(),!1;if(a.which&&38===a.which||a.keyCode&&38===a.keyCode)return tdAjaxSearch.move_prompt_up(),!1;(a.which&&8===a.which||a.keyCode&&8===a.keyCode)&&1===jQuery(this).val().length&&jQuery("#td-aj-search").empty();tdAjaxSearch.td_aj_search_input_focus();setTimeout(function(){tdAjaxSearch.do_ajax_call()},100);return!0}});jQuery("#td-header-search-mob").keydown(function(a){if(a.which&&13===a.which||a.keyCode&&13===a.keyCode)return a=jQuery(".td-aj-cur-element"),0<a.length?(a=a.find(".entry-title a").attr("href"),window.location=a):jQuery(this).parent().parent().submit(),!1;(a.which&&8===a.which||a.keyCode&&8===a.keyCode)&&1===jQuery(this).val().length&&jQuery("#td-aj-search-mob").empty();setTimeout(function(){tdAjaxSearch.do_ajax_call_mob()},100);return!0})},show_search_box:function(){jQuery(".td-drop-down-search").addClass("td-drop-down-search-open");!0!==tdDetect.isIos&&setTimeout(function(){document.getElementById("td-header-search").focus()},200);tdAjaxSearch._is_search_open=!0},hide_search_box:function(){jQuery(".td-drop-down-search").removeClass("td-drop-down-search-open");tdAjaxSearch._is_search_open=!1},move_prompt_up:function(){!0===tdAjaxSearch._first_down_up?(tdAjaxSearch._first_down_up=!1,0===tdAjaxSearch._current_selection_index?tdAjaxSearch._current_selection_index=tdAjaxSearch._last_request_results_count-1:tdAjaxSearch._current_selection_index--):0===tdAjaxSearch._current_selection_index?tdAjaxSearch._current_selection_index=tdAjaxSearch._last_request_results_count:tdAjaxSearch._current_selection_index--;tdAjaxSearch._repaintCurrentElement()},move_prompt_down:function(){!0===tdAjaxSearch._first_down_up?tdAjaxSearch._first_down_up=!1:tdAjaxSearch._current_selection_index===tdAjaxSearch._last_request_results_count?tdAjaxSearch._current_selection_index=0:tdAjaxSearch._current_selection_index++;tdAjaxSearch._repaintCurrentElement()},_repaintCurrentElement:function(){jQuery(".td_module_wrap").removeClass("td-aj-cur-element");tdAjaxSearch._current_selection_index>tdAjaxSearch._last_request_results_count-1?jQuery(".td-search-form").fadeTo(100,1):(tdAjaxSearch.td_aj_search_input_remove_focus(),jQuery(".td_module_wrap").eq(tdAjaxSearch._current_selection_index).addClass("td-aj-cur-element"))},td_aj_search_input_focus:function(){tdAjaxSearch._current_selection_index=0;tdAjaxSearch._first_down_up=!0;jQuery(".td-search-form").fadeTo(100,1);jQuery(".td_module_wrap").removeClass("td-aj-cur-element")},td_aj_search_input_remove_focus:function(){0!==tdAjaxSearch._last_request_results_count&&jQuery(".td-search-form").css("opacity",.5)},process_ajax_response:function(a){var b=jQuery("#td-header-search").val();""===b?jQuery("#td-aj-search").empty():(a=jQuery.parseJSON(a),a.td_search_query===b&&(tdAjaxSearch._current_selection_index=0,tdAjaxSearch._last_request_results_count=a.td_total_in_list,tdAjaxSearch._first_down_up=!0,jQuery("#td-aj-search").html(a.td_data),"undefined"!==typeof window.tdAnimationStack&&!0===window.tdAnimationStack.activated&&(window.tdAnimationStack.check_for_new_items("#td-aj-search .td-animation-stack",window.tdAnimationStack.SORTED_METHOD.sort_left_to_right,!0),window.tdAnimationStack.compute_items())))},process_ajax_response_mob:function(a){var b=jQuery("#td-header-search-mob").val();""===b?jQuery("#td-aj-search-mob").empty():(a=jQuery.parseJSON(a),a.td_search_query===b&&(jQuery("#td-aj-search-mob").html(a.td_data),"undefined"!==typeof window.tdAnimationStack&&!0===window.tdAnimationStack.activated&&(window.tdAnimationStack.check_for_new_items("#td-aj-search-mob .td-animation-stack",window.tdAnimationStack.SORTED_METHOD.sort_left_to_right,!0),window.tdAnimationStack.compute_items())))},do_ajax_call:function(){var a=jQuery("#td-header-search").val();""===a?tdAjaxSearch.td_aj_search_input_focus():tdLocalCache.exist(a)?tdAjaxSearch.process_ajax_response(tdLocalCache.get(a)):jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"td_ajax_search",td_string:a},success:function(b,c,d){tdLocalCache.set(a,b);tdAjaxSearch.process_ajax_response(b)},error:function(a,c,d){}})},do_ajax_call_mob:function(){var a=jQuery("#td-header-search-mob").val();""!==a&&(tdLocalCache.exist(a)?tdAjaxSearch.process_ajax_response_mob(tdLocalCache.get(a)):jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:"td_ajax_search",td_string:a},success:function(b,c,d){tdLocalCache.set(a,b);tdAjaxSearch.process_ajax_response_mob(b)},error:function(a,c,d){}}))}}})();"use strict";jQuery().ready(function(){tdModalImage();tdUtil.imageMoveClassToFigure("td-post-image-full");tdUtil.imageMoveClassToFigure("td-post-image-right");tdUtil.imageMoveClassToFigure("td-post-image-left");"undefined"!==typeof window.tds_general_modal_image&&""!==window.tds_general_modal_image&&jQuery(".single .td-post-content a > img").filter(function(a,b){if(-1!==b.className.indexOf("wp-image")){var c=jQuery(b).parent(),d=c.attr("href");-1!==d.indexOf(document.domain)&&-1!==d.indexOf("uploads")&&c.addClass("td-modal-image")}})});var tdModalImageLastEl="";function tdModalImage(){jQuery("figure.wp-caption").each(function(){var a=jQuery(this).children("figcaption").html();jQuery(this).children("a").data("caption",a)});jQuery(".td-modal-image").each(function(){jQuery(this).parent().addClass("td-modal-image");jQuery(this).removeClass("td-modal-image")});jQuery("article").magnificPopup({type:"image",delegate:".td-modal-image",gallery:{enabled:!0,tPrev:tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),tNext:tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),tCounter:tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")},ajax:{tError:tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")},image:{tError:tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),titleSrc:function(a){a=jQuery(a.el).data("caption");return"undefined"!==typeof a?a:""}},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}},callbacks:{change:function(a){tdModalImageLastEl=a.el;tdUtil.scrollIntoView(a.el)},beforeClose:function(){tdAffix.allow_scroll=!1;tdUtil.scrollIntoView(tdModalImageLastEl);var a=setInterval(function(){tdIsScrollingAnimation||(clearInterval(a),setTimeout(function(){tdAffix.allow_scroll=!0},100))},100)}}});jQuery(".td-main-content-wrap").magnificPopup({type:"image",delegate:".td-modal-image",gallery:{enabled:!0,tPrev:tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),tNext:tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),tCounter:tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")},ajax:{tError:tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")},image:{tError:tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),titleSrc:function(a){a=jQuery(a.el).data("caption");return"undefined"!==typeof a?a:""}},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}},callbacks:{change:function(a){tdModalImageLastEl=a.el;tdUtil.scrollIntoView(a.el)},beforeClose:function(){tdAffix.allow_scroll=!1;tdUtil.scrollIntoView(tdModalImageLastEl);var a=setInterval(function(){tdIsScrollingAnimation||(clearInterval(a),setTimeout(function(){tdAffix.allow_scroll=!0},100))},100)}}});"undefined"===typeof jetpackCarouselStrings&&(jQuery("figure.gallery-item").each(function(){var a=jQuery(this).children("figcaption").html();jQuery(this).find("a").data("caption",a)}),jQuery(".tiled-gallery").magnificPopup({type:"image",delegate:"a",gallery:{enabled:!0,tPrev:tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),tNext:tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),tCounter:tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")},ajax:{tError:tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")},image:{tError:tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),titleSrc:function(a){a=jQuery(a.el).parent().find(".tiled-gallery-caption").text();return"undefined"!==typeof a?a:""}},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}},callbacks:{change:function(a){tdModalImageLastEl=a.el;tdUtil.scrollIntoView(a.el)},beforeClose:function(){tdUtil.scrollIntoView(tdModalImageLastEl)}}}),jQuery(".gallery").magnificPopup({type:"image",delegate:".gallery-icon > a",gallery:{enabled:!0,tPrev:tdUtil.getBackendVar("td_magnific_popup_translation_tPrev"),tNext:tdUtil.getBackendVar("td_magnific_popup_translation_tNext"),tCounter:tdUtil.getBackendVar("td_magnific_popup_translation_tCounter")},ajax:{tError:tdUtil.getBackendVar("td_magnific_popup_translation_ajax_tError")},image:{tError:tdUtil.getBackendVar("td_magnific_popup_translation_image_tError"),titleSrc:function(a){a=jQuery(a.el).data("caption");return"undefined"!==typeof a?a:""}},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}},callbacks:{change:function(a){tdModalImageLastEl=a.el;tdUtil.scrollIntoView(a.el)},beforeClose:function(){tdUtil.scrollIntoView(tdModalImageLastEl)}}}))}var tdBlocks={};(function(){function a(){function a(a,b){!0===d&&a.target===e?window.location=a.target:(d=!0,e=a.target,a.preventDefault(),setTimeout(function(){d=!1},300),c(a,b))}function c(a,b){var c=b.data("td_block_id"),d=tdBlocks.tdGetBlockObjById(c);d.is_ajax_running=!0;jQuery(".mega-menu-sub-cat-"+c).removeClass("cur-sub-cat");b.addClass("cur-sub-cat");d.td_filter_value=b.data("td_filter_value");d.td_current_page=1;tdBlocks.tdAjaxDoBlockRequest(d,"mega_menu")}jQuery(".td-ajax-next-page").click(function(a){a.preventDefault();a=tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));jQuery(this).hasClass("ajax-page-disabled")||!0===a.is_ajax_running||(a.is_ajax_running=!0,a.td_current_page++,tdBlocks.tdAjaxDoBlockRequest(a,"next"))});jQuery(".td-ajax-prev-page").click(function(a){a.preventDefault();a=tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));jQuery(this).hasClass("ajax-page-disabled")||!0===a.is_ajax_running||(a.is_ajax_running=!0,a.td_current_page--,tdBlocks.tdAjaxDoBlockRequest(a,"back"))});jQuery(".td_ajax_load_more_js").click(function(a){a.preventDefault();jQuery(this).hasClass("ajax-page-disabled")||(jQuery(this).css("visibility","hidden"),a=tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id")),a.td_current_page++,tdBlocks.tdAjaxDoBlockRequest(a,"load_more"),a.max_num_pages<=a.td_current_page&&jQuery(this).addClass("ajax-page-disabled"))});tdDetect.isMobileDevice?jQuery(".td-pulldown-filter-display-option").click(function(){var a=jQuery(this).data("td_block_id");jQuery("#td_pulldown_"+a).addClass("td-pulldown-filter-list-open");a=jQuery("#td_pulldown_"+a+"_list");a.removeClass("fadeOut");a.addClass("td_animated td_fadeIn")}):jQuery(".td-pulldown-filter-display-option").hover(function(){var a=jQuery(this).data("td_block_id");jQuery("#td_pulldown_"+a).addClass("td-pulldown-filter-list-open");a=jQuery("#td_pulldown_"+a+"_list");a.removeClass("fadeOut");a.addClass("td_animated td_fadeIn");a.css("visibility","visible")},function(){var a=jQuery(this).data("td_block_id");jQuery("#td_pulldown_"+a).removeClass("td-pulldown-filter-list-open")});jQuery(".td-related-title a").click(function(a){a.preventDefault();jQuery(".td-related-title").children("a").removeClass("td-cur-simple-item");jQuery(this).addClass("td-cur-simple-item");a=jQuery(this).data("td_block_id");a=tdBlocks.tdGetBlockObjById(a);a.td_filter_value=jQuery(this).data("td_filter_value");a.td_current_page=1;tdBlocks.tdAjaxDoBlockRequest(a,"pull_down")});var d=!1,e="";tdDetect.isTouchDevice?jQuery(".block-mega-child-cats a").click(function(b){a(b,jQuery(this))},!1).each(function(b,c){c.addEventListener("touchend",function(b){a(b,jQuery(this))},!1)}):jQuery(".block-mega-child-cats a").hover(function(a){c(a,jQuery(this))},function(a){});jQuery(".td-subcat-item a").click(function(a){a.preventDefault();a=tdBlocks.tdGetBlockObjById(jQuery(this).data("td_block_id"));!0!==a.is_ajax_running&&(a.is_ajax_running=!0,jQuery("."+jQuery(this).data("td_block_id")+"_rand").find(".td-cur-simple-item").removeClass("td-cur-simple-item"),jQuery(this).addClass("td-cur-simple-item"),a.td_filter_value=jQuery(this).data("td_filter_value"),a.td_current_page=1,tdBlocks.tdAjaxDoBlockRequest(a,"pull_down"))});jQuery(".td-pulldown-filter-link").click(function(a){a.preventDefault();var b=jQuery(this).data("td_block_id");jQuery("#"+b).find(".iosSlider").iosSlider("destroy");var c=tdBlocks.tdGetBlockObjById(b);!0!==c.is_ajax_running&&(c.is_ajax_running=!0,c.td_filter_value=jQuery(this).data("td_filter_value"),jQuery("."+jQuery(this).data("td_block_id")+"_rand").find(".td-cur-simple-item").removeClass("td-cur-simple-item"),jQuery(this).addClass("td-cur-simple-item"),c.td_current_page=1,jQuery("#td_pulldown_"+b).removeClass("td-pulldown-filter-list-open"),tdBlocks.tdAjaxDoBlockRequest(c,"pull_down"),tdDetect.isMobileDevice&&tdUtil.stopBubble(a))})}jQuery().ready(function(){a()});tdBlocks={tdPullDownFilterChangeValue:function(a,c){jQuery("#td-pulldown-"+a+"-val").html(c)},tdAjaxDoBlockRequest:function(a,c){var b=JSON.stringify(a);if(tdLocalCache.exist(b))return tdBlocks.tdBlockAjaxLoadingStart(a,!0,c),tdBlocks.tdAjaxBlockProcessResponse(tdLocalCache.get(b),c),"cache_hit";tdBlocks.tdBlockAjaxLoadingStart(a,!1,c);jQuery.ajax({type:"POST",url:td_ajax_url,cache:!0,data:{action:"td_ajax_block",td_atts:a.atts,td_block_id:a.id,td_column_number:a.td_column_number,td_current_page:a.td_current_page,block_type:a.block_type,td_filter_value:a.td_filter_value,td_user_action:a.td_user_action},success:function(a,d,l){tdLocalCache.set(b,a);tdBlocks.tdAjaxBlockProcessResponse(a,c)},error:function(a,b,c){}})},tdAjaxBlockProcessResponse:function(a,c){var b=jQuery.parseJSON(a);if("load_more"===c||"infinite_load"===c){for(var e=0;e<tdSmartSidebar.items.length;e++)"case_3_bottom_of_content"===tdSmartSidebar.items[e].sidebar_state&&(tdSmartSidebar.items[e].sidebar_state="case_1_fixed_down");jQuery(b.td_data).appendTo("#"+b.td_block_id)}else jQuery("#"+b.td_block_id).html(b.td_data);!0===b.td_hide_prev?jQuery("#prev-page-"+b.td_block_id).addClass("ajax-page-disabled"):jQuery("#prev-page-"+b.td_block_id).removeClass("ajax-page-disabled");!0===b.td_hide_next?jQuery("#next-page-"+b.td_block_id).addClass("ajax-page-disabled"):jQuery("#next-page-"+b.td_block_id).removeClass("ajax-page-disabled");e=tdBlocks.tdGetBlockObjById(b.td_block_id);"slide"===e.block_type&&jQuery("#"+b.td_block_id+" .slide-wrap-active-first").addClass("slide-wrap-active");e.is_ajax_running=!1;tdBlocks.tdBlockAjaxLoadingEnd(b,e,c)},tdBlockAjaxLoadingStart:function(a,c,d){var b=jQuery("#"+a.id);jQuery(".td-loader-gif").remove();b.removeClass("td_fadeInRight td_fadeInLeft td_fadeInDown td_fadeInUp td_animated_xlong");b.addClass("td_block_inner_overflow");var f=b.height();b.css("height",f);!1===c&&("load_more"===d?(b.parent().append('<div class="td-loader-gif td-loader-infinite td-loader-blocks-load-more  td-loader-animation-start"></div>'),tdLoadingBox.init(a.header_color?a.header_color:tds_theme_color_site_wide),setTimeout(function(){jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")},50)):"infinite_load"===d?(b.parent().append('<div class="td-loader-gif td-loader-infinite td-loader-animation-start"></div>'),tdLoadingBox.init(a.header_color?a.header_color:tds_theme_color_site_wide),setTimeout(function(){jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")},50)):(b.parent().append('<div class="td-loader-gif td-loader-animation-start"></div>'),tdLoadingBox.init(a.header_color?a.header_color:tds_theme_color_site_wide),setTimeout(function(){jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")},50),b.addClass("td_animated_long td_fadeOut_to_1")))},tdBlockAjaxLoadingEnd:function(a,c,d){jQuery(".td-loader-gif").removeClass("td-loader-animation-mid").addClass("td-loader-animation-end");setTimeout(function(){jQuery(".td-loader-gif").remove();tdLoadingBox.stop()},400);var b=jQuery("#"+c.id);b.removeClass("td_animated_long td_fadeOut_to_1");if(!0===tdAnimationStack.activated)var f=tdAnimationStack.SORTED_METHOD.sort_left_to_right;switch(d){case"next":b.addClass("td_animated_xlong td_fadeInRight");void 0!==f&&(f=tdAnimationStack.SORTED_METHOD.sort_right_to_left);break;case"back":b.addClass("td_animated_xlong td_fadeInLeft");break;case"pull_down":b.addClass("td_animated_xlong td_fadeInDown");break;case"mega_menu":b.addClass("td_animated_xlong td_fadeInDown");break;case"load_more":setTimeout(function(){jQuery("."+c.id+"_rand .td_ajax_load_more_js").css("visibility","visible")},500);break;case"infinite_load":setTimeout(function(){tdInfiniteLoader.computeTopDistances();""!==a.td_data&&tdInfiniteLoader.enable_is_visible_callback(c.id)},500),setTimeout(function(){tdInfiniteLoader.computeTopDistances()},1E3),setTimeout(function(){tdInfiniteLoader.computeTopDistances()},1500)}setTimeout(function(){jQuery(".td_block_inner_overflow").removeClass("td_block_inner_overflow");b.css("height","auto");tdSmartSidebar.compute()},200);setTimeout(function(){tdSmartSidebar.compute()},500);void 0!==f&&setTimeout(function(){tdAnimationStack.check_for_new_items("#"+c.id+" .td-animation-stack",f,!0)},200)},tdGetBlockIndex:function(a){var b=0,d=0;jQuery.each(tdBlocksArray,function(c,f){if(f.id===a)return d=b,!1;b++});return d},tdGetBlockObjById:function(a){return tdBlocksArray[tdBlocks.tdGetBlockIndex(a)]}}})();jQuery().ready(function(){var a={type:"inline",preloader:!1,focus:"#name",removalDelay:500,callbacks:{beforeOpen:function(){this.st.mainClass=this.st.el.attr("data-effect");tdLogin.clearFields();tdLogin.showHideMsg();700>jQuery(window).width()?this.st.focus=!1:!1===tdDetect.isIe&&(this.st.focus="#login_email")},beforeClose:function(){}},disableOn:function(){return 750>jQuery(window).width()?!1:!0}};void 0!==window.tds_login_sing_in_widget&&(jQuery(".comment-reply-login").attr({href:"#login-form","data-effect":"mpf-td-login-effect"}),jQuery(".comment-reply-login, .td-login-modal-js").magnificPopup(a));jQuery(".td-login-modal-js, .comment-reply-login").on("click",function(a){750>jQuery(window).width()&&void 0!==window.tds_login_sing_in_widget&&(a.preventDefault(),jQuery("body").addClass("td-menu-mob-open-menu"),jQuery(".td-mobile-container").hide(),jQuery("#td-mobile-nav").addClass("td-hide-menu-content"),setTimeout(function(){jQuery(".td-mobile-container").show()},500),tdLogin.showHideElementsMobile([["#td-login-mob",1],["#td-register-mob",0],["#td-forgot-pass-mob",0]]))});jQuery("#login-link").on("click",function(){tdLogin.showHideElements([["#td-login-div",1],["#td-register-div",0],["#td-forgot-pass-div",0]]);jQuery("#login-form").addClass("td-login-animation");700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#login_email").focus();tdLogin.showHideMsg()});jQuery("#register-link").on("click",function(){tdLogin.showHideElements([["#td-login-div",0],["#td-register-div",1],["#td-forgot-pass-div",0]]);jQuery("#login-form").addClass("td-login-animation");700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#register_email").focus();tdLogin.showHideMsg()});jQuery("#forgot-pass-link").on("click",function(a){a.preventDefault();tdLogin.showHideElements([["#td-login-div",0],["#td-register-div",0],["#td-forgot-pass-div",1]]);jQuery("#login-form").addClass("td-login-animation");700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#forgot_email").focus();tdLogin.showHideMsg()});jQuery("#login_button").on("click",function(){tdLogin.handlerLogin()});jQuery("#login_pass").keydown(function(a){(a.which&&13===a.which||a.keyCode&&13===a.keyCode)&&tdLogin.handlerLogin()});jQuery("#register_button").on("click",function(){tdLogin.handlerRegister()});jQuery("#register_user").keydown(function(a){(a.which&&13===a.which||a.keyCode&&13===a.keyCode)&&tdLogin.handlerRegister()});jQuery("#forgot_button").on("click",function(){tdLogin.handlerForgotPass()});jQuery("#forgot_email").keydown(function(a){(a.which&&13===a.which||a.keyCode&&13===a.keyCode)&&tdLogin.handlerForgotPass()});jQuery(".td-back-button").on("click",function(){tdLogin.showHideElements([["#td-login-div",1],["#td-register-div",0],["#td-forgot-pass-div",0]]);jQuery("#login-form").removeClass("td-login-animation");jQuery(".td_display_err").hide()})});var tdLogin={};(function(){tdLogin={email_pattern:/^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,handlerLogin:function(){var a=jQuery("#login_email"),b=jQuery("#login_pass");a.length&&b.length&&(a=a.val().trim(),b=b.val().trim(),a&&b?(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.showHideMsg(td_please_wait),tdLogin.doAction("td_mod_login",a,"",b)):tdLogin.showHideMsg(td_email_user_pass_incorrect))},handlerRegister:function(){var a=jQuery("#register_email"),b=jQuery("#register_user");a.length&&b.length&&(a=a.val().trim(),b=b.val().trim(),tdLogin.email_pattern.test(a)&&b?(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.showHideMsg(td_please_wait),tdLogin.doAction("td_mod_register",a,b,"")):tdLogin.showHideMsg(td_email_user_incorrect))},handlerForgotPass:function(){var a=jQuery("#forgot_email");a.length&&(a=a.val().trim(),tdLogin.email_pattern.test(a)?(tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLogin.showHideMsg(td_please_wait),tdLogin.doAction("td_mod_remember_pass",a,"","")):tdLogin.showHideMsg(td_email_incorrect))},showHideElements:function(a){if(a.constructor===Array)for(var b=a.length,c=0;c<b;c++)if(a[c].constructor===Array&&2===a[c].length){var d=jQuery(a[c][0]);d.length&&(1===a[c][1]?d.removeClass("td-display-none").addClass("td-display-block"):d.removeClass("td-display-block").addClass("td-display-none"))}},showHideElementsMobile:function(a){if(a.constructor===Array)for(var b=a.length,c=0;c<b;c++)if(a[c].constructor===Array&&2===a[c].length){var d=jQuery(a[c][0]);d.length&&(1===a[c][1]?d.removeClass("td-login-hide").addClass("td-login-show"):d.removeClass("td-login-show").addClass("td-login-hide"))}},showTabs:function(a){if(a.constructor===Array)for(var b=a.length,c=0;c<b;c++)if(a[c].constructor===Array&&2===a[c].length){var d=jQuery(a[c][0]);d.length&&(1===a[c][1]?d.addClass("td_login_tab_focus"):d.removeClass("td_login_tab_focus"))}},addRemoveClass:function(a){if(a.constructor===Array&&3===a.length){var b=jQuery(a[0]);b.length&&(1===a[1]?b.addClass(a[2]):b.removeClass(a[2]))}},showHideMsg:function(a){var b=jQuery(".td_display_err");b.length&&(void 0!==a&&a.constructor===String&&0<a.length?(b.show(),b.html(a)):(b.hide(),b.html("")))},clearFields:function(){jQuery("#login_email").val("");jQuery("#login_pass").val("");jQuery("#register_email").val("");jQuery("#register_user").val("");jQuery("#forgot_email").val("")},doAction:function(a,b,c,d){jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:a,email:b,user:c,pass:d},success:function(a,b,c){a=jQuery.parseJSON(a);switch(a[0]){case"login":1===a[1]?location.reload(!0):(tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(a[2]));break;case"register":1===a[1]?tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]);tdLogin.showHideMsg(a[2]);break;case"remember_pass":1===a[1]?tdLogin.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):tdLogin.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLogin.showHideMsg(a[2])}},error:function(a,b,c){}})}}})();jQuery().ready(function(){jQuery("#login-link-mob").on("click",function(){tdLoginMob.showHideElements([["#td-login-mob",1],["#td-register-mob",0],["#td-forgot-pass-mob",0]]);jQuery("#td-mobile-nav").addClass("td-hide-menu-content");700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#login_email-mob").focus();tdLoginMob.showHideMsg()});jQuery("#register-link-mob").on("click",function(){tdLoginMob.showHideElements([["#td-login-mob",0],["#td-register-mob",1],["#td-forgot-pass-mob",0]]);jQuery("#td-mobile-nav").addClass("td-hide-menu-content");700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#register_email-mob").focus();tdLoginMob.showHideMsg()});jQuery("#forgot-pass-link-mob").on("click",function(){tdLoginMob.showHideElements([["#td-login-mob",0],["#td-register-mob",0],["#td-forgot-pass-mob",1]]);700<jQuery(window).width()&&!1===tdDetect.isIe&&jQuery("#forgot_email-mob").focus();tdLoginMob.showHideMsg()});jQuery("#login_button-mob").on("click",function(){tdLoginMob.handlerLogin()});jQuery("#login_pass-mob").keydown(function(a){(a.which&&13===a.which||a.keyCode&&13===a.keyCode)&&tdLoginMob.handlerLogin()});jQuery("#register_button-mob").on("click",function(){tdLoginMob.handlerRegister()});jQuery("#register_user-mob").keydown(function(a){(a.which&&13===a.which||a.keyCode&&13===a.keyCode)&&tdLoginMob.handlerRegister()});jQuery("#forgot_button-mob").on("click",function(){tdLoginMob.handlerForgotPass()});jQuery("#forgot_email-mob").keydown(function(a){(a.which&&13===a.which||a.keyCode&&13===a.keyCode)&&tdLoginMob.handlerForgotPass()});jQuery("#td-mobile-nav .td-login-close a, #td-mobile-nav .td-register-close a").on("click",function(){tdLoginMob.showHideElements([["#td-login-mob",0],["#td-register-mob",0],["#td-forgot-pass-mob",0]]);jQuery("#td-mobile-nav").removeClass("td-hide-menu-content")});jQuery("#td-mobile-nav .td-forgot-pass-close a").on("click",function(){tdLoginMob.showHideElements([["#td-login-mob",1],["#td-register-mob",0],["#td-forgot-pass-mob",0]])})});var tdLoginMob={};(function(){tdLoginMob={email_pattern:/^[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/,handlerLogin:function(){var a=jQuery("#login_email-mob"),b=jQuery("#login_pass-mob");a.length&&b.length&&(a=a.val().trim(),b=b.val().trim(),a&&b?(tdLoginMob.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLoginMob.showHideMsg(td_please_wait),tdLoginMob.doAction("td_mod_login",a,"",b)):tdLoginMob.showHideMsg(td_email_user_pass_incorrect))},handlerRegister:function(){var a=jQuery("#register_email-mob"),b=jQuery("#register_user-mob");a.length&&b.length&&(a=a.val().trim(),b=b.val().trim(),tdLoginMob.email_pattern.test(a)&&b?(tdLoginMob.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLoginMob.showHideMsg(td_please_wait),tdLoginMob.doAction("td_mod_register",a,b,"")):tdLoginMob.showHideMsg(td_email_user_incorrect))},handlerForgotPass:function(){var a=jQuery("#forgot_email-mob");a.length&&(a=a.val().trim(),tdLoginMob.email_pattern.test(a)?(tdLoginMob.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]),tdLoginMob.showHideMsg(td_please_wait),tdLoginMob.doAction("td_mod_remember_pass",a,"","")):tdLoginMob.showHideMsg(td_email_incorrect))},showHideElements:function(a){if(a.constructor===Array)for(var b=a.length,c=0;c<b;c++)if(a[c].constructor===Array&&2===a[c].length){var d=jQuery(a[c][0]);d.length&&(1===a[c][1]?d.removeClass("td-login-hide").addClass("td-login-show"):d.removeClass("td-login-show").addClass("td-login-hide"))}},addRemoveClass:function(a){if(a.constructor===Array&&3===a.length){var b=jQuery(a[0]);b.length&&(1===a[1]?b.addClass(a[2]):b.removeClass(a[2]))}},showHideMsg:function(a){var b=jQuery(".td_display_err");b.length&&(void 0!==a&&a.constructor===String&&0<a.length?(b.show(),b.html(a)):(b.hide(),b.html("")))},clearFields:function(){jQuery("#login_email-mob").val("");jQuery("#login_pass-mob").val("");jQuery("#register_email-mob").val("");jQuery("#register_user-mob").val("");jQuery("#forgot_email-mob").val("")},doAction:function(a,b,c,d){jQuery.ajax({type:"POST",url:td_ajax_url,data:{action:a,email:b,user:c,pass:d},success:function(a,b,c){a=jQuery.parseJSON(a);switch(a[0]){case"login":1===a[1]?location.reload(!0):(tdLoginMob.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLoginMob.showHideMsg(a[2]));break;case"register":1===a[1]?tdLoginMob.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):tdLoginMob.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]);tdLoginMob.showHideMsg(a[2]);break;case"remember_pass":1===a[1]?tdLoginMob.addRemoveClass([".td_display_err",1,"td_display_msg_ok"]):tdLoginMob.addRemoveClass([".td_display_err",0,"td_display_msg_ok"]),tdLoginMob.showHideMsg(a[2])}},error:function(a,b,c){}})}}})();var tdDemoMenu;(function(a,b){tdDemoMenu={mousePosX:0,mousePosY:0,init:function(){a(document).mousemove(function(a){if(a.pageX||a.pageY)tdDemoMenu.mousePosX=a.pageX,tdDemoMenu.mousePosY=a.pageY;else if(a.clientX||a.clientY)tdDemoMenu.mousePosX=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,tdDemoMenu.mousePosY=a.clientY+document.body.scrollTop+document.documentElement.scrollTop});a(document).mouseleave(function(b){a(".td-screen-demo:first").css("visibility","hidden")});a("#td-theme-settings").find(".td-skin-wrap:first").scroll(function(b){b=b.currentTarget;var c=a(this).find(".td-skin-scroll:first");b.clientHeight+b.scrollTop<b.scrollHeight?c.css({bottom:0}):c.css({bottom:-40})});a("#td-theme-settings").find(".td-skin-scroll:first").click(function(b){b=a(this).closest(".td-skin-wrap");b.animate({scrollTop:b.scrollTop()+200},{duration:800,easing:"easeInOutQuart"})}).mouseenter(function(b){a("#td-theme-settings").find(".td-screen-demo:first").css("visibility","hidden")});a(".td-set-theme-style-link").hover(function(b){var c=a(this),e=c.closest(".td-set-theme-style"),f=a(".td-screen-demo:first"),l=0,g=0;var t=a("#wpadminbar");var y=f.find("img:first");c=c.data("img-url");y.length?y.replaceWith('<img src="'+c+'"/>'):f.html('<img src="'+c+'"/>');0===a(".td-set-theme-style-link").index(this)%2?l=2*e.outerWidth(!0):(e=e.prev(".td-set-theme-style"),e.length&&(l=e.outerWidth(!0)-0,g=e.outerWidth(!0)+0),b.preventDefault(),b.stopPropagation());b=b.pageY-document.body.scrollTop-f.outerHeight(!0)/2;b+f.outerHeight(!0)>window.innerHeight&&(b-=b+f.outerHeight(!0)-window.innerHeight);t=t.length?t.outerHeight(!0):0;t>b&&(b=t);t={top:b,right:l,width:""};b=f.data("width-preview");0<g&&(t.width=b+g);f.css(t);f.data("right-value",l+g);f.css("visibility","visible")},function(b){a(".td-screen-demo:first").css("visibility","hidden")}).mousemove(function(a){tdDemoMenu._moveScreenDemo(a)})},_moveScreenDemo:function(b){var c=a(".td-screen-demo:first"),e=a("#wpadminbar"),f=b.pageY-document.body.scrollTop-c.outerHeight(!0)/2;e=e.length?e.outerHeight(!0):0;e>f&&(f=e);0>f?f=0:a(window).height()-c.outerHeight(!0)/2<b.pageY-document.body.scrollTop&&(f=a(window).height()-c.outerHeight(!0));c.css("top",f)},_checkMousePosition:function(){var c;a(".td-set-theme-style-link").each(function(b,e){tdDemoMenu._log(b);var d=a(e).closest(".td-set-theme-style"),l=!1,g=!1;if(0===a(".td-set-theme-style-link").index(e)%2)parseInt(d.position().top)+parseInt(a(window).scrollTop())<tdDemoMenu.mousePosY&&tdDemoMenu.mousePosY<parseInt(d.position().top)+parseInt(a(window).scrollTop())+parseInt(d.outerHeight())&&(l=!0,parseInt(a(window).width())-2*parseInt(d.outerWidth())<tdDemoMenu.mousePosX&&tdDemoMenu.mousePosX<parseInt(a(window).width())-parseInt(d.outerWidth())&&(g=!0));else{var t=d.prev(".td-set-theme-style");t.length&&parseInt(t.position().top)+parseInt(a(window).scrollTop())<tdDemoMenu.mousePosY&&tdDemoMenu.mousePosY<parseInt(t.position().top)+parseInt(a(window).scrollTop())+parseInt(t.outerHeight())&&(l=!0,parseInt(a(window).width())-parseInt(d.outerWidth())<tdDemoMenu.mousePosX&&tdDemoMenu.mousePosX<parseInt(a(window).width())&&(g=!0))}if(l&&g)return c=e,!1});b===c?a("#td-theme-settings").find(".td-screen-demo:first").css("visibility","hidden"):a(c).mouseenter()},_log:function(a){}}})(jQuery);(function(){if("hide"===td_read_site_cookie("td_show_panel")){var a=jQuery("#td-theme-settings");a.length&&(a.removeClass("td-theme-settings-small"),jQuery("#td-theme-set-hide").html("DEMOS"))}else jQuery("#td-theme-set-hide").html("CLOSE")})();jQuery().ready(function(){!1===tdDetect.isIos&&!1===tdDetect.isAndroid&&tdDemoMenu.init();jQuery("#td-theme-set-hide").click(function(a){a.preventDefault();a.stopPropagation();a=jQuery(this);var b=jQuery("#td-theme-settings");b.hasClass("td-theme-settings-small")?(b.removeClass("td-theme-settings-small"),b.addClass("td-theme-settings-closed"),a.html("DEMOS"),setTimeout(function(){b.addClass("td-ts-closed-no-transition")},450),td_set_cookies_life(["td_show_panel","hide",864E5])):(b.removeClass("td-ts-closed-no-transition"),b.addClass("td-theme-settings-small"),b.removeClass("td-theme-settings-closed"),a.html("CLOSE"),td_set_cookies_life(["td_show_panel","show",864E5]))})});var tdTrendingNow={};(function(){tdTrendingNow={items:[],item:function(){this.blockUid="";this.trendingNowAutostart="manual";this.trendingNowPosition=this.trendingNowTimer=0;this.trendingNowPosts=[];this._is_initialized=!1},init:function(){tdTrendingNow.items=[]},_initialize_item:function(a){!0!==a._is_initialized&&(a._is_initialized=!0)},addItem:function(a){if("undefined"===typeof a.blockUid)throw"item.blockUid is not valid";if("undefined"===typeof a.trendingNowPosts||1>a.trendingNowPosts.length)throw"item.trendingNowPosts is not valid";tdTrendingNow.items.push(a);tdTrendingNow._initialize_item(a);tdTrendingNow.tdTrendingNowAutoStart(a.blockUid)},deleteItem:function(a){for(var b=0;b<tdTrendingNow.items.length;b++)if(tdTrendingNow.items[b].blockUid===a)return tdTrendingNow.items.splice(b,1),!0;return!1},itemPrev:function(a){for(var b,c=0;c<tdTrendingNow.items.length;c++)tdTrendingNow.items[c].blockUid===a&&(b=tdTrendingNow.items[c]);void 0!==a&&1>=b.trendingNowPosts.length||("manual"!==b.trendingNowAutostart&&(clearInterval(b.trendingNowTimer),b.trendingNowTimer=setInterval(function(){tdTrendingNow.tdTrendingNowChangeText([a,"left"],!0)},3E3)),tdTrendingNow.tdTrendingNowChangeText([a,"right"],!1))},itemNext:function(a){for(var b,c=0;c<tdTrendingNow.items.length;c++)tdTrendingNow.items[c].blockUid===a&&(b=tdTrendingNow.items[c]);void 0!==a&&1>=b.trendingNowPosts.length||("manual"!==b.trendingNowAutostart&&(clearInterval(b.trendingNowTimer),b.trendingNowTimer=setInterval(function(){tdTrendingNow.tdTrendingNowChangeText([a,"left"],!0)},3E3)),tdTrendingNow.tdTrendingNowChangeText([a,"left"],!0))},tdTrendingNowChangeText:function(a,b){for(var c=a[0],d=a[1],e=[],f=0,l,g=0;g<tdTrendingNow.items.length;g++)tdTrendingNow.items[g].blockUid===c&&(l=g,e=tdTrendingNow.items[g].trendingNowPosts,f=tdTrendingNow.items[g].trendingNowPosition);if("undefined"!==typeof l&&null!==l&&(c=f,g=e.length-1,!(1>g))){"left"===d?(f+=1,f>g&&(f=0)):(--f,0>f&&(f=g));tdTrendingNow.items[l].trendingNowPosition=f;e[c].css("opacity",0);e[c].css("z-index",0);for(var t in e)!0===e.hasOwnProperty(t)&&e[t].removeClass("td_animated_xlong td_fadeInLeft td_fadeInRight td_fadeOutLeft td_fadeOutRight");e[f].css("opacity",1);e[f].css("z-index",1);!0===b?(e[c].addClass("td_animated_xlong td_fadeOutLeft"),e[f].addClass("td_animated_xlong td_fadeInRight")):(e[c].addClass("td_animated_xlong td_fadeOutRight"),e[f].addClass("td_animated_xlong td_fadeInLeft"))}},tdTrendingNowAutoStart:function(a){for(var b=0;b<tdTrendingNow.items.length;b++)tdTrendingNow.items[b].blockUid===a&&"manual"!==tdTrendingNow.items[b].trendingNowAutostart&&(tdTrendingNow.items[b].trendingNowTimer=tdTrendingNow.setTimerChangingText(a))},setTimerChangingText:function(a){return setInterval(function(){tdTrendingNow.tdTrendingNowChangeText([a,"left"],!0)},3E3)}};tdTrendingNow.init()})();"use strict";var td_history={td_history_change_event:!1,init:function(){window.addEventListener("popstate",function(a){td_history.td_history_change_event=!0;"undefined"!=typeof a.state&&null!=a.state&&jQuery("#"+a.state.slide_id).iosSlider("goToSlide",a.state.current_slide)})},replace_history_entry:function(a){!1!==tdDetect.hasHistory&&history.replaceState(a,null)},add_history_entry:function(a,b,c){if(!1!==tdDetect.hasHistory)if(""==c)history.pushState(a,null,null);else{var d=td_history.get_query_parameter("p");""!=d?1==c?history.pushState(a,null,"?p="+d):history.pushState(a,null,"?p="+d+"&"+b+"="+c):1==c?history.pushState(a,null,td_history.get_mod_rewrite_base_url()):history.pushState(a,null,td_history.get_mod_rewrite_base_url()+c+"/")}},get_mod_rewrite_base_url:function(){var a=document.URL;"/"==a.charAt(a.length-1)&&(a=a.slice(0,-1));return!1===td_history.get_mod_rewrite_pagination(document.URL)?document.URL:a.substring(0,a.lastIndexOf("/"))+"/"},get_mod_rewrite_pagination:function(){var a=document.URL;"/"==a.charAt(a.length-1)&&(a=a.slice(0,-1));a=a.substring(a.lastIndexOf("/")+1,a.length);return td_history.isInt(a)?a:!1},get_current_page:function(a){if(""!=td_history.get_query_parameter("p"))return a=td_history.get_query_parameter(a),""!=a?a:1;a=td_history.get_mod_rewrite_pagination();return!1!==a?a:1},isInt:function(a){return 0===a%1},get_query_parameter:function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(location.search);return null==a?"":decodeURIComponent(a[1].replace(/\+/g," "))},slide_changed_callback:function(a){if(!0===td_history.td_history_change_event)td_history.td_history_change_event=!1;else{var b=a.currentSlideNumber;a=a.sliderContainerObject.attr("id");td_history.add_history_entry({current_slide:b,slide_id:a},"slide",b)}}};window.history&&window.history.pushState&&td_history.init();var tdSmartSidebar={};(function(){tdSmartSidebar={hasItems:!1,items:[],scroll_window_scrollTop_last:0,tds_snap_menu:tdUtil.getBackendVar("tds_snap_menu"),is_enabled:!0,is_enabled_state_run_once:!1,is_disabled_state_run_once:!1,is_tablet_grid:!1,_view_port_current_interval_index:tdViewport.getCurrentIntervalIndex(),item:function(){this.sidebar_jquery_obj=this.content_jquery_obj="";this.content_bottom=this.content_top=this.sidebar_height=this.sidebar_bottom=this.sidebar_top=0;this.sidebar_state="";this.case_3_run_once=this.case_2_run_once=this.case_1_run_once=!1;this.case_3_last_content_height=this.case_3_last_sidebar_height=0;this.case_4_run_once=!1;this.case_4_last_menu_offset=0;this.case_6_run_once=this.case_5_run_once=!1},add_item:function(a){tdSmartSidebar.hasItems=!0;a.sidebar_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');a.content_jquery_obj.prepend('<div class="clearfix"></div>').append('<div class="clearfix"></div>');tdSmartSidebar.items.push(a)},td_events_scroll:function(a){if(!1!==tdSmartSidebar.hasItems)if(!1===tdSmartSidebar.is_enabled){if(!1===tdSmartSidebar.is_disabled_state_run_once){tdSmartSidebar.is_disabled_state_run_once=!0;for(var b=0;b<tdSmartSidebar.items.length;b++)tdSmartSidebar.items[b].sidebar_jquery_obj.css({width:"auto",position:"static",top:"auto",bottom:"auto"});tdSmartSidebar.log("smart_sidebar_disabled")}}else window.requestAnimationFrame(function(){var b=0;""!==tdSmartSidebar.tds_snap_menu&&(b=tdAffix._get_menu_affix_height(),"smart_snap_always"===tdAffix.tds_snap_menu&&(b+=tdAffix.menu_offset));"undefined"!==typeof window.tdThemeName&&"Newspaper"===window.tdThemeName&&(b+=20);var d="";a!==tdSmartSidebar.scroll_window_scrollTop_last&&(d=a>tdSmartSidebar.scroll_window_scrollTop_last?"down":"up");tdSmartSidebar.scroll_window_scrollTop_last=a;var e=jQuery(window).height(),f=a+e;a+=b;for(var l=0;l<tdSmartSidebar.items.length;l++){var g=tdSmartSidebar.items[l];g.content_top=g.content_jquery_obj.offset().top;g.content_height=g.content_jquery_obj.height();g.content_bottom=g.content_top+g.content_height;g.sidebar_top=g.sidebar_jquery_obj.offset().top;g.sidebar_height=g.sidebar_jquery_obj.height();g.sidebar_bottom=g.sidebar_top+g.sidebar_height;if(g.content_height<=g.sidebar_height)g.sidebar_state="case_6_content_too_small";else if(g.sidebar_height<e){var t=g.content_top;tdAffix.is_menu_affix||"undefined"===typeof window.tdThemeName||"Newsmag"!==window.tdThemeName||"smart_snap_always"!==tdAffix.tds_snap_menu||(t+=b);tdSmartSidebar._is_smaller_or_equal(a,t)?g.sidebar_state="case_2_top_of_content":!0===tdSmartSidebar._is_smaller(g.sidebar_bottom,a)?tdSmartSidebar._is_smaller(a,g.content_bottom-g.sidebar_height)?g.sidebar_state="case_4_fixed_up":g.sidebar_state="case_3_bottom_of_content":tdSmartSidebar._is_smaller_or_equal(g.content_bottom,g.sidebar_bottom)?"up"===d&&tdSmartSidebar._is_smaller_or_equal(a,g.sidebar_top)?g.sidebar_state="case_4_fixed_up":g.sidebar_state="case_3_bottom_of_content":g.sidebar_state=g.content_bottom-a>=g.sidebar_height?"case_4_fixed_up":"case_3_bottom_of_content"}else if(!0===tdSmartSidebar._is_smaller(g.sidebar_bottom,a)?!0===tdSmartSidebar._is_smaller_or_equal(a,g.sidebar_top)&&!0===tdSmartSidebar._is_smaller_or_equal(g.content_top,a)?g.sidebar_state="case_4_fixed_up":!0===tdSmartSidebar._is_smaller(g.sidebar_bottom,f)&&!0===tdSmartSidebar._is_smaller(g.sidebar_bottom,g.content_bottom)&&g.content_bottom>=f?g.sidebar_state="case_1_fixed_down":g.sidebar_state="case_3_bottom_of_content":!0===tdSmartSidebar._is_smaller(g.sidebar_bottom,f)&&!0===tdSmartSidebar._is_smaller(g.sidebar_bottom,g.content_bottom)&&"down"===d&&g.content_bottom>=f?g.sidebar_state="case_1_fixed_down":!0===tdSmartSidebar._is_smaller_or_equal(g.sidebar_top,g.content_top)&&"up"===d&&g.content_bottom>=f?g.sidebar_state="case_2_top_of_content":!0===tdSmartSidebar._is_smaller_or_equal(g.content_bottom,g.sidebar_bottom)&&"down"===d||g.content_bottom<f?g.sidebar_state="case_3_bottom_of_content":!0===tdSmartSidebar._is_smaller_or_equal(a,g.sidebar_top)&&"up"===d&&!0===tdSmartSidebar._is_smaller_or_equal(g.content_top,a)?g.sidebar_state="case_4_fixed_up":"up"===d&&!0===tdSmartSidebar._is_smaller_or_equal(f,g.sidebar_top)&&(g.sidebar_state="case_2_top_of_content"),"case_1_fixed_down"===g.sidebar_state&&"up"===d||"case_4_fixed_up"===g.sidebar_state&&"down"===d)g.sidebar_state="case_5_absolute";t=0;var y=tdViewport.getCurrentIntervalItem();null!==y&&(t=y.sidebarWidth);switch(g.sidebar_state){case"case_1_fixed_down":if(!0===g.case_1_run_once)break;tdSmartSidebar.log("sidebar_id: "+l+" "+g.sidebar_state);g.case_1_run_once=!0;g.case_2_run_once=!1;g.case_3_run_once=!1;g.case_4_run_once=!1;g.case_5_run_once=!1;g.case_6_run_once=!1;g.sidebar_jquery_obj.css({width:t,position:"fixed",top:"auto",bottom:"0","z-index":"1"});break;case"case_2_top_of_content":if(!0===g.case_2_run_once)break;tdSmartSidebar.log("sidebar_id: "+l+" "+g.sidebar_state);g.case_1_run_once=!1;g.case_2_run_once=!0;g.case_3_run_once=!1;g.case_4_run_once=!1;g.case_5_run_once=!1;g.case_6_run_once=!1;g.sidebar_jquery_obj.css({width:"auto",position:"static",top:"auto",bottom:"auto"});break;case"case_3_bottom_of_content":if(!0===g.case_3_run_once&&g.case_3_last_sidebar_height===g.sidebar_height&&g.case_3_last_content_height===g.content_height)break;tdSmartSidebar.log("sidebar_id: "+l+" "+g.sidebar_state);g.case_1_run_once=!1;g.case_2_run_once=!1;g.case_3_run_once=!0;g.case_3_last_sidebar_height=g.sidebar_height;g.case_3_last_content_height=g.content_height;g.case_4_run_once=!1;g.case_5_run_once=!1;g.case_6_run_once=!1;g.sidebar_jquery_obj.css({width:t,position:"absolute",top:g.content_bottom-g.sidebar_height-g.content_top,bottom:"auto"});break;case"case_4_fixed_up":if(!0===g.case_4_run_once&&g.case_4_last_menu_offset===b)break;tdSmartSidebar.log("sidebar_id: "+l+" "+g.sidebar_state);g.case_1_run_once=!1;g.case_2_run_once=!1;g.case_3_run_once=!1;g.case_4_run_once=!0;g.case_4_last_menu_offset=b;g.case_5_run_once=!1;g.case_6_run_once=!1;g.sidebar_jquery_obj.css({width:t,position:"fixed",top:b,bottom:"auto"});break;case"case_5_absolute":if(!0===g.case_5_run_once)break;tdSmartSidebar.log("sidebar_id: "+l+" "+g.sidebar_state);g.case_1_run_once=!1;g.case_2_run_once=!1;g.case_3_run_once=!1;g.case_4_run_once=!1;g.case_5_run_once=!0;g.case_6_run_once=!1;g.sidebar_jquery_obj.css({width:t,position:"absolute",top:g.sidebar_top-g.content_top,bottom:"auto"});break;case"case_6_content_too_small":!0!==g.case_6_run_once&&(tdSmartSidebar.log("sidebar_id: "+l+" "+g.sidebar_state),g.case_1_run_once=!1,g.case_2_run_once=!1,g.case_3_run_once=!1,g.case_4_run_once=!1,g.case_5_run_once=!1,g.case_6_run_once=!0,g.sidebar_jquery_obj.css({width:"auto",position:"static",top:"auto",bottom:"auto"}))}}})},compute:function(){tdSmartSidebar.td_events_scroll(jQuery(window).scrollTop())},reset_run_once_flags:function(){for(var a=0;a<tdSmartSidebar.items.length;a++)tdSmartSidebar.items[a].case_1_run_once=!1,tdSmartSidebar.items[a].case_2_run_once=!1,tdSmartSidebar.items[a].case_3_run_once=!1,tdSmartSidebar.items[a].case_3_last_sidebar_height=0,tdSmartSidebar.items[a].case_3_last_content_height=0,tdSmartSidebar.items[a].case_4_run_once=!1,tdSmartSidebar.items[a].case_4_last_menu_offset=0,tdSmartSidebar.items[a].case_5_run_once=!1,tdSmartSidebar.items[a].case_6_run_once=!1},td_events_resize:function(){tdSmartSidebar._view_port_current_interval_index=tdViewport.getCurrentIntervalIndex();switch(tdSmartSidebar._view_port_current_interval_index){case 0:tdSmartSidebar.is_enabled=!1;tdSmartSidebar.is_enabled_state_run_once=!1;break;case 1:!1===tdSmartSidebar.is_tablet_grid&&(tdSmartSidebar.reset_run_once_flags(),tdSmartSidebar.is_tablet_grid=!0,tdSmartSidebar.is_desktop_grid=!1,tdSmartSidebar.log("view port tablet"));tdSmartSidebar.is_enabled=!0;tdSmartSidebar.is_disabled_state_run_once=!1;!1===tdSmartSidebar.is_enabled_state_run_once&&(tdSmartSidebar.is_enabled_state_run_once=!0,tdSmartSidebar.log("smart_sidebar_enabled"));break;case 2:case 3:!0===tdSmartSidebar.is_tablet_grid&&(tdSmartSidebar.reset_run_once_flags(),tdSmartSidebar.is_tablet_grid=!1,tdSmartSidebar.is_desktop_grid=!0,tdSmartSidebar.log("view port desktop")),tdSmartSidebar.is_enabled=!0,tdSmartSidebar.is_disabled_state_run_once=!1,!1===tdSmartSidebar.is_enabled_state_run_once&&(tdSmartSidebar.is_enabled_state_run_once=!0,tdSmartSidebar.log("smart_sidebar_enabled"))}tdSmartSidebar.compute()},log:function(a){},_is_smaller_or_equal:function(a,b){return 1<=Math.abs(a-b)?a<b?!0:!1:!0},_is_smaller:function(a,b){return 1<=Math.abs(a-b)?a<b?!0:!1:!1}}})();var tdInfiniteLoader={};(function(){tdInfiniteLoader={hasItems:!1,items:[],item:function(){this.jqueryObj=this.uid="";this.bottomTop=0;this.isVisibleCallbackEnabled=!0;this.isVisibleCallback=function(){}},addItem:function(a){tdInfiniteLoader.hasItems=!0;tdInfiniteLoader.items.push(a)},computeTopDistances:function(){!1!==tdInfiniteLoader.hasItems&&(jQuery.each(tdInfiniteLoader.items,function(a,b){var c=tdInfiniteLoader.items[a].jqueryObj.offset().top;tdInfiniteLoader.items[a].bottomTop=c+tdInfiniteLoader.items[a].jqueryObj.height()}),tdInfiniteLoader.computeEvents())},computeEvents:function(){if(!1!==tdInfiniteLoader.hasItems){var a=jQuery(window).height()+jQuery(window).scrollTop();jQuery.each(tdInfiniteLoader.items,function(b,c){tdInfiniteLoader.items[b].bottomTop<a+700&&!0===tdInfiniteLoader.items[b].isVisibleCallbackEnabled&&(tdInfiniteLoader.items[b].isVisibleCallbackEnabled=!1,tdInfiniteLoader.items[b].isVisibleCallback())})}},enable_is_visible_callback:function(a){jQuery.each(tdInfiniteLoader.items,function(b,c){if(c.uid===a)return tdInfiniteLoader.items[b].isVisibleCallbackEnabled=!0,!1})}};jQuery(".td_ajax_infinite").each(function(){var a=new tdInfiniteLoader.item;a.jqueryObj=jQuery(this);a.uid=jQuery(this).data("td_block_id");a.isVisibleCallback=function(){var b=tdBlocks.tdGetBlockObjById(a.jqueryObj.data("td_block_id"));""===b.ajax_pagination_infinite_stop||b.td_current_page<parseInt(b.ajax_pagination_infinite_stop)+1?(b.td_current_page++,tdBlocks.tdAjaxDoBlockRequest(b,"infinite_load")):b.td_current_page<b.max_num_pages&&setTimeout(function(){jQuery("#infinite-lm-"+b.id).css("display","block").css("visibility","visible")},400)};tdInfiniteLoader.addItem(a)});jQuery(window).load(function(){tdInfiniteLoader.computeTopDistances()});jQuery().ready(function(){tdInfiniteLoader.computeTopDistances()})})();"use strict";var Froogaloop=function(){function a(b){return new a.fn.init(b)}function b(a,b,c){if(!c.contentWindow.postMessage)return!1;var d=c.getAttribute("src").split("?")[0];a=JSON.stringify({method:a,value:b});"//"===d.substr(0,2)&&(d=window.location.protocol+d);c.contentWindow.postMessage(a,d)}function c(a){try{var b=JSON.parse(a.data);var c=b.event||b.method}catch(C){}"ready"==c&&!f&&(f=!0);if(a.origin!=l)return!1;a=b.value;var d=b.data,g=""===g?null:b.player_id;b=g?e[g][c]:e[c];c=[];if(!b)return!1;void 0!==a&&c.push(a);d&&c.push(d);g&&c.push(g);return 0<c.length?b.apply(null,c):b.call()}function d(a,b,c){c?(e[c]||(e[c]={}),e[c][a]=b):e[a]=b}var e={},f=!1,l="";a.fn=a.prototype={element:null,init:function(a){"string"===typeof a&&(a=document.getElementById(a));this.element=a;a=this.element.getAttribute("src");"//"===a.substr(0,2)&&(a=window.location.protocol+a);a=a.split("/");for(var b="",c=0,d=a.length;c<d;c++){if(3>c)b+=a[c];else break;2>c&&(b+="/")}l=b;return this},api:function(a,c){if(!this.element||!a)return!1;var e=this.element,f=""!==e.id?e.id:null,g=c&&c.constructor&&c.call&&c.apply?null:c,l=c&&c.constructor&&c.call&&c.apply?c:null;l&&d(a,l,f);b(a,g,e);return this},addEvent:function(a,c){if(!this.element)return!1;var e=this.element,g=""!==e.id?e.id:null;d(a,c,g);"ready"!=a?b("addEventListener",a,e):"ready"==a&&f&&c.call(null,g);return this},removeEvent:function(a){if(!this.element)return!1;var c=this.element,d;a:{if((d=""!==c.id?c.id:null)&&e[d]){if(!e[d][a]){d=!1;break a}e[d][a]=null}else{if(!e[a]){d=!1;break a}e[a]=null}d=!0}"ready"!=a&&d&&b("removeEventListener",a,c)}};a.fn.init.prototype=a.fn;window.addEventListener?window.addEventListener("message",c,!1):window.attachEvent("onmessage",c);return window.Froogaloop=window.$f=a}(),tdCustomEvents={};(function(){tdCustomEvents={_callback_scroll:function(){tdAnimationScroll.compute_all_items()},_callback_resize:function(){},_lazy_callback_scroll_100:function(){!0===tdAnimationStack.activated&&tdAnimationStack.td_events_scroll()},_lazy_callback_scroll_500:function(){},_lazy_callback_resize_100:function(){tdPullDown.td_events_resize();tdBackstr.td_events_resize();tdAnimationScroll.td_events_resize()},_lazy_callback_resize_500:function(){!0===tdAnimationStack.activated&&tdAnimationStack.td_events_resize();for(var a=0;a<td_backstretch_items.length;a++)tdAnimationScroll.reinitialize_item(td_backstretch_items[a],!0),td_compute_backstretch_item(td_backstretch_items[a]);tdAnimationScroll.compute_all_items();setMenuMinHeight();jQuery("body").find(".tdc-video-inner-wrapper").each(function(){var a=jQuery(this),c=a.find("iframe");if(c.length){var d=c.attr("aspect-ratio");if("undefined"!==typeof d){var e=a.width();a=a.height();var f=a/e;d<f?c.css({width:a/d,height:a}):d>f&&c.css({width:"100%",height:d*e})}}});for(a=0;a<tdAnimationScroll.items.length;a++)"undefined"!==typeof tdAnimationScroll.items[a].td_video_parallax&&tdAnimationScroll.reinitialize_item(tdAnimationScroll.items[a],!0)}}})();var tdEvents={};(function(){tdEvents={scroll_event_slow_run:!1,scroll_event_medium_run:!1,resize_event_slow_run:!1,resize_event_medium_run:!1,scroll_window_scrollTop:0,window_pageYOffset:window.pageYOffset,window_innerHeight:window.innerHeight,window_innerWidth:window.innerWidth,init:function(){jQuery(window).scroll(function(){tdEvents.scroll_event_slow_run=!0;tdEvents.scroll_event_medium_run=!0;tdEvents.scroll_window_scrollTop=jQuery(window).scrollTop();tdEvents.window_pageYOffset=window.pageYOffset;tdAffix.td_events_scroll(tdEvents.scroll_window_scrollTop);tdSmartSidebar.td_events_scroll(tdEvents.scroll_window_scrollTop);tdCustomEvents._callback_scroll()});jQuery(window).resize(function(){tdEvents.resize_event_slow_run=!0;tdEvents.resize_event_medium_run=!0;tdEvents.window_innerHeight=window.innerHeight;tdEvents.window_innerWidth=window.innerWidth;tdCustomEvents._callback_resize()});setInterval(function(){tdViewport.detectChanges();tdEvents.scroll_event_medium_run&&(tdEvents.scroll_event_medium_run=!1,tdInfiniteLoader.computeEvents(),tdCustomEvents._lazy_callback_scroll_100());tdEvents.resize_event_medium_run&&(tdEvents.resize_event_medium_run=!1,tdSmartSidebar.td_events_resize(),tdCustomEvents._lazy_callback_resize_100())},100);setInterval(function(){tdEvents.scroll_event_slow_run&&(tdEvents.scroll_event_slow_run=!1,td_events_scroll_scroll_to_top(tdEvents.scroll_window_scrollTop),td_more_articles_box.td_events_scroll(tdEvents.scroll_window_scrollTop),tdCustomEvents._lazy_callback_scroll_500());tdEvents.resize_event_slow_run&&(tdEvents.resize_event_slow_run=!1,tdAffix.compute_wrapper(),tdAffix.compute_top(),tdDetect.runIsPhoneScreen(),tdCustomEvents._lazy_callback_resize_500())},500)}};tdEvents.init()})();var tdAjaxCount={};(function(){tdAjaxCount={tdGetViewsCountsAjax:function(a,b){var c="td_ajax_get_views";"post"===a&&(c="td_ajax_update_views");jQuery.ajax({type:"POST",url:td_ajax_url,cache:!0,data:{action:c,td_post_ids:b},success:function(a,b,c){a=jQuery.parseJSON(a);a instanceof Object&&jQuery.each(a,function(a,b){jQuery(".td-nr-views-"+a).html(b)})},error:function(a,b,c){}})}}})();var tdYoutubePlayers={},tdVimeoPlayers={};jQuery().ready(function(){tdYoutubePlayers.init();tdVimeoPlayers.init()});(function(){tdYoutubePlayers={tdPlayerContainer:"player_youtube",players:[],init:function(){for(var a=jQuery(".td_wrapper_playlist_player_youtube"),b=0;b<a.length;b++){var c=jQuery(a[b]),d=tdYoutubePlayers.addPlayer(c),e=d.tdPlayerContainer;c.parent().find(".td_youtube_control").data("player-id",e);for(var f=c.parent().find(".td_click_video_youtube"),l=0;l<f.length;l++)jQuery(f[l]).data("player-id",e),l+1<f.length?jQuery(f[l]).data("next-video-id",jQuery(f[l+1]).data("video-id")):jQuery(f[l]).data("next-video-id",jQuery(f[0]).data("video-id"));"1"==c.data("autoplay")&&(d.autoplay=1);c=c.data("first-video");""!==c&&(d.tdPlaylistIdYoutubeVideoRunning=c,d.playVideo(c))}jQuery(".td_click_video_youtube").click(function(){var a=jQuery(this).data("video-id"),b=jQuery(this).data("player-id");void 0!==b&&""!==b&&void 0!==a&&""!==a&&tdYoutubePlayers.operatePlayer(b,"play",a)});jQuery(".td_youtube_control").click(function(){var a=jQuery(this).data("player-id");void 0!==a&&""!==a&&(jQuery(this).hasClass("td-sp-video-play")?tdYoutubePlayers.operatePlayer(a,"play"):tdYoutubePlayers.operatePlayer(a,"pause"))})},addPlayer:function(a){a=tdYoutubePlayers.createPlayer(tdYoutubePlayers.tdPlayerContainer+"_"+tdYoutubePlayers.players.length,a);tdYoutubePlayers.players.push(a);return a},operatePlayer:function(a,b,c){for(var d=0;d<tdYoutubePlayers.players.length;d++)if(tdYoutubePlayers.players[d].tdPlayerContainer==a){a=tdYoutubePlayers.players[d];a.playStatus();"play"===b?(a.autoplay=1,void 0===c?a.playerPlay():a.playVideo(c)):"pause"==b&&tdYoutubePlayers.players[d].playerPause();break}},createPlayer:function(a,b){var c={tdYtPlayer:"",tdPlayerContainer:a,autoplay:0,tdPlaylistIdYoutubeVideoRunning:"",jqTDWrapperVideoPlaylist:b.closest(".td_wrapper_video_playlist"),jqPlayerWrapper:b,jqControlPlayer:"",_videoId:"",playVideo:function(a){c._videoId=a;"undefined"===typeof YT||"undefined"===typeof YT.Player?(window.onYouTubePlayerAPIReady=function(){for(var a=0;a<tdYoutubePlayers.players.length;a++)tdYoutubePlayers.players[a].loadPlayer()},jQuery.getScript("https://www.youtube.com/player_api").done(function(a,b){})):c.loadPlayer(a)},loadPlayer:function(a){var b=c._videoId;void 0!==a&&(b=a);if(void 0!==b){c.tdPlaylistIdYoutubeVideoRunning=b;a=window.td_youtube_list_ids["td_"+c.tdPlaylistIdYoutubeVideoRunning].title;var d=window.td_youtube_list_ids["td_"+c.tdPlaylistIdYoutubeVideoRunning].time;c.jqTDWrapperVideoPlaylist.find(".td_click_video_youtube").removeClass("td_video_currently_playing");c.jqTDWrapperVideoPlaylist.find(".td_"+b).addClass("td_video_currently_playing");c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_title_youtube").html(a);c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_time_youtube").html(d);c.jqPlayerWrapper.html("<div id="+c.tdPlayerContainer+"></div>");c.jqControlPlayer=c.jqTDWrapperVideoPlaylist.find(".td_youtube_control");c.tdYtPlayer=new YT.Player(c.tdPlayerContainer,{playerVars:{autoplay:c.autoplay},height:"100%",width:"100%",videoId:b,events:{onStateChange:c.onPlayerStateChange}})}},onPlayerStateChange:function(a){if(a.data===YT.PlayerState.PLAYING)c.pauseStatus();else if(a.data===YT.PlayerState.ENDED){c.playStatus();c.autoplay=1;a="";var b=c.jqTDWrapperVideoPlaylist.find(".td_video_currently_playing");b.length&&(b=jQuery(b).next(".td_click_video_youtube"),b.length&&(a=jQuery(b).data("video-id")));""!==a&&c.playVideo(a)}else YT.PlayerState.PAUSED&&c.playStatus()},playerPlay:function(){c.tdYtPlayer.playVideo()},playerPause:function(){c.tdYtPlayer.pauseVideo()},playStatus:function(){c.jqControlPlayer.removeClass("td-sp-video-pause").addClass("td-sp-video-play")},pauseStatus:function(){c.jqControlPlayer.removeClass("td-sp-video-play").addClass("td-sp-video-pause")}};return c}};tdVimeoPlayers={tdPlayerContainer:"player_vimeo",players:[],existingAutoplay:!1,init:function(){for(var a=jQuery(".td_wrapper_playlist_player_vimeo"),b=0;b<a.length;b++)0!==tdVimeoPlayers.addPlayer(jQuery(a[b])).autoplay&&(tdVimeoPlayers.existingAutoplay=!0);jQuery(".td_click_video_vimeo").click(function(){var a=jQuery(this).data("video-id"),b=jQuery(this).data("player-id");void 0!==b&&""!==b&&void 0!==a&&""!==a&&tdVimeoPlayers.operatePlayer(b,"play",a)});jQuery(".td_vimeo_control").click(function(){var a=jQuery(this).data("player-id");void 0!==a&&""!==a&&(jQuery(this).hasClass("td-sp-video-play")?tdVimeoPlayers.operatePlayer(a,"play"):tdVimeoPlayers.operatePlayer(a,"pause"))})},addPlayer:function(a){var b=tdVimeoPlayers.tdPlayerContainer+"_"+tdVimeoPlayers.players.length,c=tdVimeoPlayers.createPlayer(b,a);a.parent().find(".td_vimeo_control").data("player-id",b);for(var d=a.parent().find(".td_click_video_vimeo"),e=0;e<d.length;e++)jQuery(d[e]).data("player-id",b),e+1<d.length?jQuery(d[e]).data("next-video-id",jQuery(d[e+1]).data("video-id")):jQuery(d[e]).data("next-video-id",jQuery(d[0]).data("video-id"));"1"==a.data("autoplay")&&(c.autoplay=1);a=a.data("first-video");void 0!==a&&""!==a&&c.createPlayer(a);tdVimeoPlayers.players.push(c);return c},operatePlayer:function(a,b,c){for(var d=0;d<tdVimeoPlayers.players.length;d++)if(tdVimeoPlayers.players[d].playerId==a){a=tdVimeoPlayers.players[d];"play"===b?(a.autoplay=1,void 0!==c?(tdVimeoPlayers.existingAutoplay=!1,a.createPlayer(c)):a.playerPlay()):"pause"===b&&a.playerPause();break}},createPlayer:function(a,b){var c={playerId:a,jqTDWrapperVideoPlaylist:b.closest(".td_wrapper_video_playlist"),jqPlayerWrapper:b,currentVideoPlaying:"",player:"",jqControlPlayer:"",autoplay:0,createPlayer:function(a){if(""!==a){this.currentVideoPlaying=a;var b="",d=window.td_vimeo_list_ids["td_"+a].title,l=window.td_vimeo_list_ids["td_"+a].time;c.jqTDWrapperVideoPlaylist.find(".td_click_video_vimeo").removeClass("td_video_currently_playing");c.jqTDWrapperVideoPlaylist.find(".td_"+a).addClass("td_video_currently_playing");c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_title_vimeo").html(d);c.jqTDWrapperVideoPlaylist.find(".td_current_video_play_time_vimeo").html(l);c.jqControlPlayer=c.jqTDWrapperVideoPlaylist.find(".td_vimeo_control");tdVimeoPlayers.existingAutoplay||0===c.autoplay?c.playStatus():(b="&autoplay=1",tdDetect.isMobileDevice?c.playStatus():c.pauseStatus());c.jqPlayerWrapper.html('<iframe id="'+c.playerId+'" src="https://player.vimeo.com/video/'+a+"?api=1&player_id="+c.playerId+b+'"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');c.createVimeoObjectPlayer(jQuery)}},createVimeoObjectPlayer:function(a){var b="";a=a("#"+c.playerId);a.length&&(b=$f(a[0]),c.player=b,b.addEvent("ready",function(){b.addEvent("play",function(a){c.pauseStatus();c.autoplay=1});b.addEvent("pause",function(a){c.playStatus()});b.addEvent("finish",function(a){a="";var b=c.jqTDWrapperVideoPlaylist.find(".td_video_currently_playing");b.length&&(b=jQuery(b).next(".td_click_video_vimeo"),b.length&&(a=jQuery(b).data("video-id")));""!==a?(c.createPlayer(a),tdDetect.isMobileDevice?c.playStatus():c.pauseStatus()):c.playStatus()})}))},playerPlay:function(){c.autoplay=1;c.player.api("play")},playerPause:function(){c.player.api("pause")},playStatus:function(){c.jqControlPlayer.removeClass("td-sp-video-pause").addClass("td-sp-video-play")},pauseStatus:function(){c.jqControlPlayer.removeClass("td-sp-video-play").addClass("td-sp-video-pause")}};return c}}})();"use strict";jQuery(window).load(function(){td_resize_smartlist_sliders_and_update()});jQuery().ready(function(){td_resize_smartlist_sliders_and_update()});function td_resize_smartlist_slides(a){var b=a.currentSlideNumber;a=jQuery(a.data.obj[0]).attr("id");tdDetect.isIe8||(jQuery("#"+a).css("overflow","none"),jQuery("#"+a+" .td-item").css("overflow","visible"));b=jQuery("#"+a+"_item_"+b).outerHeight(!0);jQuery("#"+a+", #"+a+" .td-slider").css({height:b})}function td_resize_smartlist_sliders_and_update(){jQuery(document).find(".td-smart-list-slider").each(function(){var a=jQuery(this).attr("id");tdDetect.isIe8||(jQuery("#"+a).css("overflow","none"),jQuery("#"+a+" .td-item").css("overflow","visible"));var b=0;b=jQuery("#"+a+"_item_"+td_history.get_current_page("slide")).outerHeight(!0);jQuery("#"+a+", #"+a+" .td-slider").css({height:b});tdDetect.isAndroid&&setTimeout(function(){jQuery("#"+a).iosSlider("update")},2E3)})}function td_resize_normal_slide(a){a=jQuery(a.data.obj[0]).attr("id");var b=td_get_document_width();tdDetect.isIe8||(jQuery("#"+a).css("overflow","none"),jQuery("#"+a+" .td-item").css("overflow","visible"));var c=jQuery("#"+a+"_item_0").outerWidth(!0),d=780;tdDetect.isAndroid&&(d=1E3);b<d&&!tdDetect.isIpad&&(b=300<c?.5*c:c,jQuery("#"+a+", #"+a+" .td-slider, #"+a+" .td-slider .td-module-thumb").css({height:b}))}function td_resize_normal_slide_and_update(a){var b=jQuery(a.data.obj[0]).attr("id");a=td_get_document_width();tdDetect.isIe8||(jQuery("#"+b).css("overflow","none"),jQuery("#"+b+" .td-item").css("overflow","visible"));var c=0;c=jQuery("#"+b+"_item_0").outerWidth(!0);var d=780;tdDetect.isAndroid&&(d=1E3);a<d&&!tdDetect.isIpad&&(c=300<c?.5*c:c,jQuery("#"+b+", #"+b+" .td-slider, #"+b+" .td-slider .td-module-thumb").css({height:c}),setTimeout(function(){jQuery("#"+b).iosSlider("update")},2E3))}var tdPullDown={};(function(){tdPullDown={_view_port_interval_index:tdViewport.INTERVAL_INITIAL_INDEX,items:[],item:function(){this.horizontal_element_css_class=this.container_jquery_obj=this.vertical_jquery_obj=this.horizontal_jquery_obj=this.blockUid="";this.minimum_elements=1;this.excluded_jquery_elements=[];this._horizontal_extra_space=1;this._horizontal_elements=[];this._vertical_elements=[];this._vertical_ul_jquery_obj="";this._vertical_jquery_obj_outer_width=0;this._is_initialized=!1},init:function(){tdPullDown._view_port_interval_index=tdViewport.getCurrentIntervalIndex();tdPullDown.items=[]},add_item:function(a){if(1!==a.vertical_jquery_obj.length)throw"item.vertical_jquery_obj is more or less than one: "+a.vertical_jquery_obj.length;if(1!==a.horizontal_jquery_obj.length)throw"item.horizontal_jquery_obj is more or less than one: "+a.horizontal_jquery_obj.length;if(1!==a.container_jquery_obj.length)throw"item.container_jquery_obj is more or less than one: "+a.container_jquery_obj.length;if(""===a.horizontal_element_css_class)throw"item.horizontal_element_css_class is empty";tdPullDown.items.push(a);tdPullDown._initialize_item(a);tdPullDown._compute_item(a)},deleteItem:function(a){for(var b=0;b<tdPullDown.items.length;b++)if(tdPullDown.items[b].blockUid===a)return tdPullDown.items.splice(b,1),!0;return!1},unloadItem:function(a){for(var b=0;b<tdPullDown.items.length;b++)if(tdPullDown.items[b].blockUid===a){for(var c=0;c<tdPullDown.items[b]._vertical_elements.length;c++)tdPullDown.items[b]._vertical_elements[c].jquery_object.detach().appendTo(tdPullDown.items[b].horizontal_jquery_obj);tdPullDown.deleteItem(a);return!0}return!1},_initialize_item:function(a){if(!0!==a._is_initialized)if(a._vertical_ul_jquery_obj=a.vertical_jquery_obj.find("ul:first"),0===a._vertical_ul_jquery_obj.length)tdPullDown.log("Item can' be initialized. The vertical list doesn't have an 'ul' container");else{var b=null,c=null;a.horizontal_jquery_obj.find("."+a.horizontal_element_css_class+":visible").each(function(d,f){b=jQuery(f);b.css("-webkit-transition","opacity 0.2s");b.css("-moz-transition","opacity 0.2s");b.css("-o-transition","opacity 0.2s");b.css("transition","opacity 0.2s");b.css("opacity","1");c={jquery_object:b,calculated_width:b.outerWidth(!0)};a._horizontal_elements.push(c)});a._vertical_jquery_obj_outer_width=a.vertical_jquery_obj.outerWidth(!0);a.vertical_jquery_obj.css("display","none");var d=a.horizontal_jquery_obj.css("padding-left");void 0!==d&&""!==d&&(a._horizontal_extra_space+=parseInt(d.replace("px","")));d=a.horizontal_jquery_obj.css("padding-right");void 0!==d&&""!==d&&(a._horizontal_extra_space+=parseInt(d.replace("px","")));d=a.horizontal_jquery_obj.css("margin-left");void 0!==d&&""!==d&&(a._horizontal_extra_space+=parseInt(d.replace("px","")));d=a.horizontal_jquery_obj.css("margin-right");void 0!==d&&""!==d&&(a._horizontal_extra_space+=parseInt(d.replace("px","")));d=a.horizontal_jquery_obj.css("border-left");void 0!==d&&""!==d&&(a._horizontal_extra_space+=parseInt(d.replace("px","")));d=a.horizontal_jquery_obj.css("border-right");void 0!==d&&""!==d&&(a._horizontal_extra_space+=parseInt(d.replace("px","")));a._is_initialized=!0}},_get_horizontal_elements_width:function(a){for(var b=0,c=a._horizontal_elements.length-1;0<=c;c--)b+=a._horizontal_elements[c].calculated_width;return b},_reinitialize_all_items:function(){for(var a=tdPullDown.items.length-1;0<=a;a--)tdPullDown._reinitialize_item(tdPullDown.items[a])},_reinitialize_item:function(a){!1!==a._is_initialized&&(a._is_initialized=!1,a.horizontal_jquery_obj.html(a.horizontal_jquery_obj.html()+a._vertical_ul_jquery_obj.html()),a._vertical_ul_jquery_obj.html(""),a._horizontal_elements=[],a._vertical_elements=[],a._horizontal_extra_space=1,tdPullDown._initialize_item(a))},_compute_item:function(a){if(!1!==a._is_initialized){tdPullDown._prepare_horizontal_header(a,!0);var b=0,c=a.container_jquery_obj.css("width");if(void 0!==c&&""!==c)for(b=c.replace("px",""),c=a.excluded_jquery_elements.length-1;0<=c;c--)b-=a.excluded_jquery_elements[c].outerWidth(!0);0<a._vertical_elements.length&&(b-=a._vertical_jquery_obj_outer_width);b-=tdPullDown._get_horizontal_elements_width(a);b-=a._horizontal_extra_space;for(var d;0>b;){if(0!==a.minimum_elements&&a._horizontal_elements.length<=a.minimum_elements){tdPullDown._make_all_elements_vertical(a);tdPullDown._prepare_horizontal_header(a);return}0===a._vertical_elements.length&&(b-=a._vertical_jquery_obj_outer_width);d=tdPullDown._make_element_vertical(a);b+=d.calculated_width}if(0!==a.minimum_elements&&0===a._horizontal_elements.length&&0<a._vertical_elements.length&&b>=a._vertical_elements[0].calculated_width){for(d=c=0;d<a.minimum_elements&&d<a._vertical_elements.length;d++)c+=a._vertical_elements[d].calculated_width;for(var e=0,f=a.minimum_elements;0<f&&0<a._vertical_elements.length&&b>=c;)if(d=tdPullDown._make_element_horizontal(a),null!==d)e+=d.calculated_width,f--;else{tdPullDown._prepare_horizontal_header(a);return}b-=e}for(;(0<a._horizontal_elements.length||0===a._horizontal_elements.length&&0===a.minimum_elements)&&0<a._vertical_elements.length&&b>=a._vertical_elements[0].calculated_width;)if(d=tdPullDown._make_element_horizontal(a),null!==d)b-=d.calculated_width;else{tdPullDown._prepare_horizontal_header(a);return}1===a._vertical_elements.length&&b+a._vertical_jquery_obj_outer_width>=a._vertical_elements[0].calculated_width&&tdPullDown._make_element_horizontal(a);tdPullDown._prepare_horizontal_header(a)}},_prepare_horizontal_header:function(a,b){var c=a.horizontal_jquery_obj.parent().siblings(".block-title:first");1===c.length&&(c=c.find("span:first"),1===c.length&&("undefined"!==typeof b&&!0===b?c.css("margin-right",0):0===a._horizontal_elements.length?c.css("margin-right",a._vertical_jquery_obj_outer_width+"px"):c.css("margin-right",0)))},_compute_all_items:function(){for(var a=tdPullDown.items.length-1;0<=a;a--)tdPullDown.items[a].constructor===tdPullDown.item&&tdPullDown._compute_item(tdPullDown.items[a])},_make_element_horizontal:function(a){if(!1===a._is_initialized||0===a._vertical_elements.length)return null;var b=a._vertical_elements.shift();0===a._vertical_elements.length&&a.vertical_jquery_obj.css("display","none");a._horizontal_elements.push(b);b.jquery_object.css("opacity","0");b.jquery_object.detach().appendTo(a.horizontal_jquery_obj);setTimeout(function(){b.jquery_object.css("opacity","1")},50);return b},_make_element_vertical:function(a){if(!1===a._is_initialized||0===a._horizontal_elements.length)return null;var b=a._horizontal_elements.pop();0===a._vertical_elements.length&&a.vertical_jquery_obj.css("display","");a._vertical_elements.unshift(b);b.jquery_object.detach().prependTo(a._vertical_ul_jquery_obj);return b},_make_all_elements_vertical:function(a){for(;0<a._horizontal_elements.length;)tdPullDown._make_element_vertical(a)},td_events_resize:function(){0!==tdPullDown.items.length&&(tdPullDown._view_port_interval_index!==tdViewport.getCurrentIntervalIndex()?(tdPullDown._view_port_interval_index=tdViewport.getCurrentIntervalIndex(),"undefined"!==typeof tdPullDown.reinitTimeout&&clearTimeout(tdPullDown.reinitTimeout),tdPullDown.reinitTimeout=setTimeout(function(){tdPullDown._reinitialize_all_items();tdPullDown._compute_all_items()},100)):tdPullDown._compute_all_items())},log:function(a){}};tdPullDown.init()})();var td_fps={start_time:0,current_time:0,frame_number:0,init:function(){var a=td_fps.start_time=0,b=0,c=0,d=jQuery("#fps_table");0==d.length&&(d=jQuery("<div>").css({position:"fixed",top:"120px",left:"10px",width:"100px",height:"20px",border:"1px solid black","font-size":"11px","z-index":"100000","background-color":"white"}),d.appendTo("body"));var e=function(){td_fps.frame_number++;td_fps.current_time=Date.now();c=(td_fps.current_time-td_fps.start_time)/1E3;b=(td_fps.frame_number/c).toPrecision(2);b!=a&&(a=b,d.html(a+" fps"));1<c&&(td_fps.start_time=td_fps.current_time,td_fps.frame_number=0);requestAnimationFrame(e)};e()}},tdAnimationScroll={};(function(){tdAnimationScroll={items:[],rAFIndex:0,animation_running:!1,item:function(){this.percent_value=0;this.animation_callback=null;this.jqueryObj="";this.wrapper_jquery_obj=void 0;this.top_marker_jquery_obj="";this.full_height=0;this.offset_bottom_top=this.offset_top="";this.properties={};this.computed_item_properties={};this.computation_stopped=this._is_initialized=this.top_is_out=this.redraw=!1;this.add_item_property=function(a,b,c,d,e,f){if(!(b>=c))if(void 0===this.properties[a])this.properties[a]={computed_value:"",settings:[]},0!==b&&(this.properties[a].settings[this.properties[a].settings.length]={start_percent:0,end_percent:b,start_value:d,end_value:d,easing:""}),this.properties[a].settings[this.properties[a].settings.length]={start_percent:b,end_percent:c,start_value:d,end_value:e,easing:f},this.properties[a].settings[this.properties[a].settings.length]={start_percent:c,end_percent:100,start_value:e,end_value:e,easing:""};else{var l=this.properties[a].settings[this.properties[a].settings.length-1];l.start_percent!==b?(this.properties[a].settings[this.properties[a].settings.length-1]={start_percent:l.start_percent,end_percent:b,start_value:l.end_value,end_value:l.end_value,easing:""},this.properties[a].settings[this.properties[a].settings.length]={start_percent:b,end_percent:c,start_value:d,end_value:e,easing:f}):this.properties[a].settings[this.properties[a].settings.length-1]={start_percent:b,end_percent:c,start_value:d,end_value:e,easing:f};100!==c&&(this.properties[a].settings[this.properties[a].settings.length]={start_percent:c,end_percent:100,start_value:e,end_value:e,easing:""})}};this.remove_item_property=function(a){if(void 0===this.properties[a])return!1;delete this.properties[a];return!0}},init:function(){tdAnimationScroll.items=[]},add_item:function(a){if(a.constructor===tdAnimationScroll.item&&"undefined"!==typeof a.jqueryObj){var b=a.jqueryObj.prev();b.length&&b.hasClass("td_marker_animation")||(tdAnimationScroll.items.push(a),tdAnimationScroll._initialize_item(a))}},_initialize_item:function(a){if(!0!==a._is_initialized&&(a.full_height=void 0===a.wrapper_jquery_obj?a.jqueryObj.outerHeight(!0):a.wrapper_jquery_obj.height(),0!==a.full_height)){var b=jQuery('<div class="td_marker_animation" style="height: 0; width: 0">');b.insertBefore(a.jqueryObj);a.top_marker_jquery_obj=b;a.offset_top=a.top_marker_jquery_obj.offset().top;a.offset_bottom_top=a.offset_top+a.full_height;a.top_is_out=tdEvents.window_pageYOffset>a.offset_top;a._is_initialized=!0}},reinitialize_all_items:function(a){for(var b=tdAnimationScroll.items.length-1;0<=b;b--)tdAnimationScroll.reinitialize_item(tdAnimationScroll.items[b],a)},reinitialize_item:function(a,b){if(!1!==a._is_initialized){a._is_initialized=!1;a.offset_top=a.top_marker_jquery_obj.offset().top;if(!0===b&&(a.full_height=void 0===a.wrapper_jquery_obj?a.jqueryObj.outerHeight(!0):a.wrapper_jquery_obj.height(),0===a.full_height))return;a.offset_bottom_top=a.offset_top+a.full_height;a._is_initialized=!0}},_compute_item_properties:function(a){var b={},c;for(c in a.properties)if(!0===a.properties.hasOwnProperty(c)){var d=a.properties[c];var e;for(e=0;e<d.settings.length;e++){var f=d.settings[e];if(f.start_percent<=a.percent_value&&a.percent_value<f.end_percent||a.percent_value===f.end_percent&&100===a.percent_value){if(f.start_value===f.end_value)f=f.start_value;else if(e=(a.percent_value-f.start_percent)/(f.end_percent-f.start_percent)*(f.end_value-f.start_value),void 0===f.easing||""===f.easing)f=f.start_value+e;else{var l=Math.abs(f.start_value-f.end_value)/1E3;f=f.start_value<f.end_value?f.start_value+1E3*jQuery.easing[f.easing](null,e,0,l,f.end_value-f.start_value):f.start_value-1E3*jQuery.easing[f.easing](null,-e,0,l,f.start_value-f.end_value)}d.computed_value!==f&&(d.computed_value=f,b[c]=f,a.redraw=!0);break}}}a.computed_item_properties=b},compute_item:function(a){if(!1!==a._is_initialized){var b=0;tdEvents.window_pageYOffset+tdEvents.window_innerHeight>=a.offset_top&&(b=tdEvents.window_pageYOffset>a.offset_bottom_top?100:100*(tdEvents.window_pageYOffset+tdEvents.window_innerHeight-a.offset_top)/(tdEvents.window_innerHeight+a.full_height));a.percent_value!==b&&(a.percent_value=b,tdAnimationScroll._compute_item_properties(a));a.top_is_out=tdEvents.window_pageYOffset>a.offset_top}},compute_all_items:function(){!1===tdAnimationScroll.animation_running&&(tdAnimationScroll.rAFIndex=window.requestAnimationFrame(tdAnimationScroll._animate_all_items));tdAnimationScroll.animation_running=!0},_animate_all_items:function(){for(var a=0;a<tdAnimationScroll.items.length;a++)!1===tdAnimationScroll.items[a].computation_stopped&&tdAnimationScroll.compute_item(tdAnimationScroll.items[a]);for(a=0;a<tdAnimationScroll.items.length;a++)!0===tdAnimationScroll.items[a].redraw&&tdAnimationScroll.items[a].animation_callback();tdAnimationScroll.animation_running=!1},td_events_resize:function(){0!==tdAnimationScroll.items.length&&(tdAnimationScroll.reinitialize_all_items(!1),tdAnimationScroll.compute_all_items())},log:function(a){}};tdAnimationScroll.init()})();var tdHomepageFull={};(function(a,b){tdHomepageFull={items:[],item:function(){this.blockUid="";this.$tmplBlock=b},addItem:function(a){if(!tdHomepageFull.items.length)switch(a.theme_name){case"Newsmag":tdHomepageFull._addNewsmagItem(a);break;default:tdHomepageFull._addItem(a)}},deleteItem:function(a){for(var b=0;b<tdHomepageFull.items.length;b++){var c=tdHomepageFull.items[b];if(c.blockUid===a)switch(c.theme_name){case"Newsmag":tdHomepageFull._deleteNewsmagItem(c,b);break;default:tdHomepageFull._deleteItem(c,b)}}return!1},_addItem:function(b){b.$tmplBlock=a("#"+b.blockUid+"_tmpl");a(".td-header-wrap").after(b.$tmplBlock.html());var c=a('<div class="backstretch"></div>'),e=a('<img class="td-backstretch not-parallax" src="'+b.postFeaturedImage+'"/>');c.append(e);a("body").prepend(c);var f=new tdBackstr.item;f.wrapper_image_jquery_obj=c;f.image_jquery_obj=e;tdBackstr.add_item(f);b.$article=a("#post-"+b.postId);b.$bgImageWrapper=c;b.backstrItem=f;tdHomepageFull.items.push(b)},_addNewsmagItem:function(b){b.$tmplBlock=a("#"+b.blockUid+"_tmpl");a("body").addClass("single_template_6");a("#td-outer-wrap").prepend(b.$tmplBlock.html());var c=a('<div class="td-full-screen-header-image-wrap"></div>'),e=a('<div id="td-full-screen-header-image" class="td-image-gradient"></div>'),f=a('<img class="td-backstretch" src="'+b.postFeaturedImage+'"/>');c.append(e);e.append(f);a("#td-outer-wrap").prepend(c);b.$bgImageWrapper=c;e=new tdBackstr.item;e.wrapper_image_jquery_obj=c;e.image_jquery_obj=f;tdBackstr.add_item(e);b.$article=a("#post-"+b.postId);b.backstrItem=e;a(".td-read-down a").click(function(b){b.preventDefault();tdUtil.scrollToPosition(a(".td-full-screen-header-image-wrap").height(),1200)});tdHomepageFull.items.push(b)},_deleteItem:function(a,d){a.$tmplBlock.remove();a.$article.remove();a.$bgImageWrapper.remove();tdHomepageFull.items.splice(d,1);tdBackstr.deleteItem(a.blockUid)&&(a.backstrItem=b);var c=document.body.className;c=c.replace(/td-boxed-layout/g,"");c=c.replace(/single_template_8/g,"");c=c.replace(/homepage-post/g,"");document.body.className=c},_deleteNewsmagItem:function(a,d){a.$tmplBlock.remove();a.$article.remove();a.$bgImageWrapper.remove();tdHomepageFull.items.splice(d,1);tdBackstr.deleteItem(a.blockUid)&&(a.backstrItem=b);var c=document.body.className;c=c.replace(/single_template_6/g,"");document.body.className=c}}})(jQuery);var tdBackstr={};(function(){tdBackstr={items:[],item:function(){this.blockUid="";this.image_aspect_rate=this.previous_value=0;this.image_jquery_obj=this.wrapper_image_jquery_obj=""},add_item:function(a){if(a.constructor===tdBackstr.item)if(a.image_jquery_obj.get(0).complete)tdBackstr._load_item_image(a);else a.image_jquery_obj.on("load",function(){tdBackstr._load_item_image(a)})},deleteItem:function(a){for(var b=0;b<tdBackstr.items.length;b++)if(tdBackstr.items[b].blockUid===a)return tdBackstr.items.splice(b,1),!0;return!1},_load_item_image:function(a){a.image_aspect_rate=a.image_jquery_obj.width()/a.image_jquery_obj.height();tdBackstr.items.push(a);tdBackstr._compute_item(a);a.image_jquery_obj.css("opacity","1")},_compute_item:function(a){if(a.wrapper_image_jquery_obj.width()/a.wrapper_image_jquery_obj.height()<a.image_aspect_rate){var b=1;a.previous_value!==b&&(a.image_jquery_obj.removeClass("td-stretch-width"),a.image_jquery_obj.addClass("td-stretch-height"),a.previous_value=b)}else b=2,a.previous_value!==b&&(a.image_jquery_obj.removeClass("td-stretch-height"),a.image_jquery_obj.addClass("td-stretch-width"),a.previous_value=b)},_compute_all_items:function(){for(var a=0;a<tdBackstr.items.length;a++)tdBackstr._compute_item(tdBackstr.items[a])},td_events_resize:function(){0!==tdBackstr.items.length&&tdBackstr._compute_all_items()},log:function(a){window.console.log(a)}}})();var tdAnimationStack={};(function(){tdAnimationStack={_animation_css_class1:"",_animation_css_class2:"",_animation_default_effect:"type0",activated:!1,_ready_for_initialization:!0,_ready_init_timeout:void 0,max_waiting_for_init:3E3,_specific_selectors:"",_general_selectors:"",ready_init:function(){tdDetect.isIe8||tdDetect.isIe9||0<jQuery(".vc_images_carousel").length?(tdAnimationStack._ready_for_initialization=!1,void 0!==window.td_animation_stack_effect&&(""===window.td_animation_stack_effect&&(window.td_animation_stack_effect=tdAnimationStack._animation_default_effect),jQuery("body").removeClass("td-animation-stack-"+window.td_animation_stack_effect))):void 0===window.tds_animation_stack||void 0===window.td_animation_stack_effect?tdAnimationStack._ready_for_initialization=!1:(void 0!==window.td_animation_stack_specific_selectors&&(tdAnimationStack._specific_selectors=window.td_animation_stack_specific_selectors),""===window.td_animation_stack_effect&&(window.td_animation_stack_effect=tdAnimationStack._animation_default_effect),tdAnimationStack._animation_css_class1="td-animation-stack-"+window.td_animation_stack_effect+"-1",tdAnimationStack._animation_css_class2="td-animation-stack-"+window.td_animation_stack_effect+"-2",void 0!==window.td_animation_stack_general_selectors&&(tdAnimationStack._general_selectors=window.td_animation_stack_general_selectors),jQuery(tdAnimationStack._general_selectors).addClass(tdAnimationStack._animation_css_class1),tdAnimationStack._ready_init_timeout=setTimeout(function(){!0!==tdAnimationStack.activated&&(tdAnimationStack._ready_for_initialization=!1,void 0!==window.td_animation_stack_effect&&jQuery("body").removeClass("td-animation-stack-"+window.td_animation_stack_effect))},tdAnimationStack.max_waiting_for_init))},_ITEM_TO_VIEW_PORT:{ITEM_ABOVE_VIEW_PORT:0,ITEM_IN_VIEW_PORT:1,ITEM_UNDER_VIEW_PORT:2},SORTED_METHOD:{sort_left_to_right:function(a,b){return a.offset_top>b.offset_top?1:a.offset_top<b.offset_top?-1:a._order>b._order?1:a._order<b._order?-1:0},sort_right_to_left:function(a,b){return a.offset_top>b.offset_top||!(a.offset_top<b.offset_top||a._order>b._order)&&a._order<b._order?1:-1}},_order:0,interval:70,min_interval:17,max_interval:40,_current_interval:void 0,_items_in_view_port:[],_items_above_view_port:[],items:[],item:function(){this._order=this.jqueryObj=this.offset_bottom_to_top=this.offset_top=void 0},_initialize_item:function(a){a._order=tdAnimationStack._order++;a.offset_top=a.jqueryObj.offset().top;a.offset_bottom_to_top=a.offset_top+a.jqueryObj.height()},check_for_new_items:function(a,b,c){if(!1!==tdAnimationStack.activated&&!1!==tdAnimationStack._ready_for_initialization){void 0===a&&(a="");var d=[];jQuery(tdAnimationStack._general_selectors).not("."+tdAnimationStack._animation_css_class2).addClass(tdAnimationStack._animation_css_class1);var e=jQuery(a+", .post").find(tdAnimationStack._specific_selectors).filter(function(){return jQuery(this).hasClass(tdAnimationStack._animation_css_class1)});e.each(function(a,b){var c=new tdAnimationStack.item;c.jqueryObj=jQuery(b);tdAnimationStack.log(a);tdAnimationStack._initialize_item(c);d.push(c)});(function(){for(var a=!0,l=0;l<d.length;l++)if(!1===e[l].complete){a=!1;break}if(!1===a){var g=(new Date).getTime();tdAnimationStack.log("TIMER - started");var t=setInterval(function(){var f;if((new Date).getTime()-g>tdAnimationStack.max_waiting_for_init)for(clearInterval(t),f=0;f<d.length;f++)d[f].jqueryObj.removeClass(tdAnimationStack._animation_css_class1),d[f].jqueryObj.addClass(tdAnimationStack._animation_css_class2);else{a=!0;for(f=0;f<d.length;f++)if(!1===e[f].complete){a=!1;break}!0===a&&(clearInterval(t),tdAnimationStack.log("TIMER - stopped"),tdAnimationStack._precompute_items(d,b,c),tdAnimationStack.compute_items())}},100)}else tdAnimationStack._precompute_items(d,b,c),tdAnimationStack.compute_items()})();tdAnimationStack.log("checked for new items finished")}},_precompute_items:function(a,b,c){a.sort(b);if(!0===c)for(;0<a.length;)tdAnimationStack.log("add item 1 : "+a.length),tdAnimationStack._items_in_view_port.push(a.shift());else for(;0<a.length;)tdAnimationStack.log("add item 2 : "+a.length),tdAnimationStack.items.push(a.shift())},init:function(){void 0!==window.tds_animation_stack&&!1!==tdAnimationStack._ready_for_initialization&&(clearTimeout(tdAnimationStack._ready_init_timeout),tdAnimationStack.activated=!0,tdAnimationStack.check_for_new_items(".td-animation-stack",tdAnimationStack.SORTED_METHOD.sort_left_to_right,!1))},reinit:function(){!1!==tdAnimationStack._ready_for_initialization&&(tdAnimationStack.items=[],tdAnimationStack._items_in_view_port=[],tdAnimationStack._items_above_view_port=[],tdAnimationStack.init())},compute_items:function(){if(!1!==tdAnimationStack.activated&&!1!==tdAnimationStack._ready_for_initialization){for(tdAnimationStack._separate_items();0<tdAnimationStack._items_above_view_port.length;){tdAnimationStack.log("animation - above the view port");var a=tdAnimationStack._items_above_view_port.shift();a.jqueryObj.removeClass(tdAnimationStack._animation_css_class1);a.jqueryObj.addClass(tdAnimationStack._animation_css_class2)}0<tdAnimationStack._items_in_view_port.length&&(clearInterval(tdAnimationStack._current_interval),a=tdAnimationStack._get_item_from_view_port(),a.jqueryObj.removeClass(tdAnimationStack._animation_css_class1),a.jqueryObj.addClass(tdAnimationStack._animation_css_class2),0<tdAnimationStack._items_in_view_port.length&&(tdAnimationStack.log("start animation timer"),tdAnimationStack._to_timer(tdAnimationStack._get_right_interval(1/tdAnimationStack._items_in_view_port.length*tdAnimationStack.interval))))}},_to_timer:function(a){tdAnimationStack._current_interval=setInterval(function(){if(0<tdAnimationStack._items_in_view_port.length){var b=tdAnimationStack._get_item_from_view_port();tdAnimationStack.log("animation at interval: "+a);b.jqueryObj.removeClass(tdAnimationStack._animation_css_class1);b.jqueryObj.addClass(tdAnimationStack._animation_css_class2);clearInterval(tdAnimationStack._current_interval);0<tdAnimationStack._items_in_view_port.length&&tdAnimationStack._to_timer(tdAnimationStack._get_right_interval(1/tdAnimationStack._items_in_view_port.length*tdAnimationStack.interval))}},a)},_get_item_from_view_port:function(){return tdAnimationStack._items_in_view_port.shift()},_get_right_interval:function(a){return a<tdAnimationStack.min_interval?tdAnimationStack.min_interval:a>tdAnimationStack.max_interval?tdAnimationStack.max_interval:a},_item_to_view_port:function(a){tdAnimationStack.log("position item relative to the view port >> "+tdEvents.window_pageYOffset+tdEvents.window_innerHeight+" : "+a.offset_top);return tdEvents.window_pageYOffset+tdEvents.window_innerHeight<a.offset_top?tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT:tdEvents.window_pageYOffset+tdEvents.window_innerHeight>=a.offset_top&&tdEvents.window_pageYOffset<=a.offset_bottom_to_top?tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT:tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT},_separate_items:function(){if(0!==tdAnimationStack.items.length)for(;0<tdAnimationStack.items.length;)switch(tdAnimationStack._item_to_view_port(tdAnimationStack.items[0])){case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_ABOVE_VIEW_PORT:tdAnimationStack._items_above_view_port.push(tdAnimationStack.items.shift());break;case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_IN_VIEW_PORT:tdAnimationStack._items_in_view_port.push(tdAnimationStack.items.shift());break;case tdAnimationStack._ITEM_TO_VIEW_PORT.ITEM_UNDER_VIEW_PORT:tdAnimationStack.log("after separation items >> above: "+tdAnimationStack._items_above_view_port.length+" in: "+tdAnimationStack._items_in_view_port.length+" under: "+tdAnimationStack.items.length);return}},td_events_scroll:function(){tdAnimationStack.compute_items()},td_events_resize:function(){clearInterval(tdAnimationStack._current_interval);tdAnimationStack.reinit()},log:function(a){}}})();"use strict";tdAffix.init({menu_selector:".td-header-menu-wrap",menu_wrap_selector:".td-header-menu-wrap-full",tds_snap_menu:tdUtil.getBackendVar("tds_snap_menu"),tds_snap_menu_logo:tdUtil.getBackendVar("tds_logo_on_sticky"),menu_affix_height:48,menu_affix_height_on_mobile:54});"enabled"==tdUtil.getBackendVar("tds_smart_sidebar")&&!1===tdDetect.isIos&&jQuery(window).load(function(){jQuery(".td-ss-row").each(function(){var a=new tdSmartSidebar.item;a.sidebar_jquery_obj=jQuery(this).children(".td-pb-span4").find(".wpb_wrapper:first");a.content_jquery_obj=jQuery(this).children(".td-pb-span8").find(".wpb_wrapper:first");tdSmartSidebar.add_item(a)});if(0<jQuery(".td-ss-main-content").length&&0<jQuery(".td-ss-main-sidebar").length){var a=new tdSmartSidebar.item;a.sidebar_jquery_obj=jQuery(".td-ss-main-sidebar");a.content_jquery_obj=jQuery(".td-ss-main-content");tdSmartSidebar.add_item(a)}tdSmartSidebar.td_events_resize()});jQuery(window).load(function(){jQuery(".td-subcat-filter").each(function(a,b){var c=jQuery(b),d=c.find(".td-subcat-list:first"),e=new tdPullDown.item;e.blockUid=c.parent().parent().data("td-block-uid");e.horizontal_jquery_obj=d;e.vertical_jquery_obj=c.find(".td-subcat-dropdown:first");e.horizontal_element_css_class="td-subcat-item";e.container_jquery_obj=d.closest(".td-block-title-wrap");e.excluded_jquery_elements=[e.container_jquery_obj.find(".td-pulldown-size")];tdPullDown.add_item(e)});jQuery(".td-category-siblings").each(function(a,b){var c=jQuery(b),d=c.find(".td-category:first"),e=new tdPullDown.item;e.horizontal_jquery_obj=d;e.vertical_jquery_obj=c.find(".td-subcat-dropdown:first");e.horizontal_element_css_class="entry-category";e.container_jquery_obj=d.parents(".td-category-siblings:first");tdPullDown.add_item(e)})});var td_backstretch_items=[];jQuery(window).ready(function(){jQuery(".td-backstretch").each(function(a,b){if(!jQuery(b).hasClass("not-parallax")){var c=new tdAnimationScroll.item;c.jqueryObj=jQuery(b);c.wrapper_jquery_obj=c.jqueryObj.parent();tdAnimationScroll.add_item(c);td_backstretch_items.push(c);td_compute_backstretch_item(c)}});jQuery(".td-parallax-header").each(function(a,b){var c=new tdAnimationScroll.item;c.jqueryObj=jQuery(b);c.add_item_property("move_y",50,100,0,100,"");c.add_item_property("opacity",50,100,1,0,"");c.animation_callback=function(){var a=parseFloat(c.computed_item_properties.move_y).toFixed(),b=parseFloat(c.computed_item_properties.opacity);c.jqueryObj.css({"-webkit-transform":"translate3d(0px,"+a+"px, 0px)",transform:"translate3d(0px,"+a+"px, 0px)"});c.jqueryObj.css("transform","translate3d(0px,"+a+"px, 0px)");c.jqueryObj.css("opacity",b);c.redraw=!1};tdAnimationScroll.add_item(c)});tdAnimationScroll.compute_all_items();setTimeout(function(){jQuery(".tdc-video-parallax-wrapper").each(function(a,b){td_compute_parallax_background(b)});tdAnimationScroll.compute_all_items()},300);tdAnimationStack.ready_init()});function td_compute_parallax_background(a){a=jQuery(a);var b=Math.round(.2*a.height()),c=-1*b,d=new tdAnimationScroll.item;d.jqueryObj=a;d.add_item_property("move_y",0,100,c,b,"");d.animation_callback=function(){var a=parseFloat(d.computed_item_properties.move_y).toFixed();d.jqueryObj.css({"-webkit-transform":"translate3d(0px,"+a+"px, 0px) scale(1.2)",transform:"translate3d(0px,"+a+"px, 0px) scale(1.2)"});d.redraw=!1;d.td_video_parallax=!0};tdAnimationScroll.add_item(d)}function td_compute_backstretch_item(a){var b=100*(tdEvents.window_innerHeight-a.offset_top)/(tdEvents.window_innerHeight+a.full_height),c=100*tdEvents.window_innerHeight/(tdEvents.window_innerHeight+a.full_height),d=a.offset_top/4;0==d&&(d=100);var e=d/1.2*(100-b)/(c-b);c=-d/2+.5;a.remove_item_property("move_y");a.add_item_property("move_y",b,100,c,e,"");var f=parseFloat(1+Math.abs(d)/a.full_height).toFixed(2);delete a.animation_callback;a.animation_callback=function(){var b=parseFloat(a.computed_item_properties.move_y).toFixed();a.jqueryObj.css({left:"50%","-webkit-transform":"translate3d(-50%,"+b+"px, 0px) scale("+f+","+f+")",transform:"translate3d(-50%,"+b+"px, 0px) scale("+f+","+f+")"});a.redraw=!1}}var tdAjaxLoop={};(function(){tdAjaxLoop={loopState:{sidebarPosition:"",moduleId:1,currentPage:1,max_num_pages:0,atts:{},ajax_pagination_infinite_stop:0,server_reply_html_data:""},init:function(){jQuery(".td-ajax-loop-infinite").each(function(){var a=new tdInfiniteLoader.item;a.jqueryObj=jQuery(this);a.uid="tdAjaxLoop";a.isVisibleCallback=function(){0!==tdAjaxLoop.loopState.ajax_pagination_infinite_stop&&tdAjaxLoop.loopState.currentPage>=tdAjaxLoop.loopState.ajax_pagination_infinite_stop&&tdAjaxLoop.loopState.currentPage+1<tdAjaxLoop.loopState.max_num_pages?jQuery(".td-load-more-infinite-wrap").css("display","block").css("visibility","visible"):tdAjaxLoop.infiniteNextPage(!1)};tdInfiniteLoader.addItem(a)});jQuery(".td-load-more-infinite-wrap").click(function(a){a.preventDefault();jQuery(".td-load-more-infinite-wrap").css("visibility","hidden");tdAjaxLoop.infiniteNextPage(!0)})},infiniteNextPage:function(a){tdAjaxLoop.loopState.currentPage++;tdAjaxLoop.loopState.server_reply_html_data="";tdAjaxLoop.loopState.currentPage>tdAjaxLoop.loopState.max_num_pages||(jQuery(".td-ss-main-content").append('<div class="td-loader-gif td-loader-infinite td-loader-animation-start"></div>'),tdLoadingBox.init(tds_theme_color_site_wide,45),setTimeout(function(){jQuery(".td-loader-gif").removeClass("td-loader-animation-start").addClass("td-loader-animation-mid")},50),jQuery.ajax({type:"POST",url:td_ajax_url,cache:!0,data:{action:"td_ajax_loop",loopState:tdAjaxLoop.loopState},success:function(b,c,d){tdAjaxLoop._processAjaxRequest(b,a)},error:function(a,c,d){}}))},_processAjaxRequest:function(a,b){jQuery(".td-loader-gif").remove();tdLoadingBox.stop();var c=jQuery.parseJSON(a);""===c.server_reply_html_data?jQuery(".td-load-more-infinite-wrap").css("visibility","hidden"):(jQuery(".td-ajax-loop-infinite").before(c.server_reply_html_data),parseInt(c.currentPage)>=parseInt(c.max_num_pages)?jQuery(".td-load-more-infinite-wrap").css("visibility","hidden"):!0===b&&jQuery(".td-load-more-infinite-wrap").css("visibility","visible"),setTimeout(function(){tdAnimationStack.check_for_new_items(".td-main-content .td-animation-stack",tdAnimationStack.SORTED_METHOD.sort_left_to_right,!0)},200),!0!==b&&(setTimeout(function(){tdInfiniteLoader.computeTopDistances();tdInfiniteLoader.enable_is_visible_callback("tdAjaxLoop")},500),setTimeout(function(){tdInfiniteLoader.computeTopDistances()},1E3),setTimeout(function(){tdInfiniteLoader.computeTopDistances()},1500)))}}})();var tdWeather={};(function(){tdWeather={_icons:{"01d":"clear-sky-d","02d":"few-clouds-d","03d":"scattered-clouds-d","04d":"broken-clouds-d","09d":"shower-rain-d","10d":"rain-d","11d":"thunderstorm-d","13d":"snow-d","50d":"mist-d","01n":"clear-sky-n","02n":"few-clouds-n","03n":"scattered-clouds-n","04n":"broken-clouds-n","09n":"shower-rain-n","10n":"rain-n","11n":"thunderstorm-n","13n":"snow-n","50n":"mist-n"},_currentRequestInProgress:!1,_currentItem:"",_currentLatitude:0,_currentLongitude:0,_currentPositionCacheKey:"",_currentLocationCacheKey:"",_currentLocation:"",items:[],_is_location_open:!1,init:function(){jQuery(".td-icons-location").click(function(){!0!==tdWeather._currentRequestInProgress&&(tdWeather._currentRequestInProgress=!0,tdWeather._currentItem=tdWeather._getItemByBlockID(jQuery(this).data("block-uid")),navigator.geolocation&&navigator.geolocation.getCurrentPosition(tdWeather._updateLocationCallback,tdWeather._displayLocationApiError,{enableHighAccuracy:!0,timeout:1E7,maximumAge:6E5}),tdWeather._currentRequestInProgress=!1)});jQuery(".td-weather-now").click(function(){!0!==tdWeather._currentRequestInProgress&&(tdWeather._currentRequestInProgress=!0,tdWeather._currentItem=tdWeather._getItemByBlockID(jQuery(this).data("block-uid")),tdWeather._currentItem.current_unit=1===tdWeather._currentItem.current_unit?0:1,tdWeather._renderCurrentItem())});jQuery(".td-manual-location-form").submit(function(a){a.preventDefault();!0!==tdWeather._currentRequestInProgress&&(tdWeather._currentRequestInProgress=!0,tdWeather._currentItem=tdWeather._getItemByBlockID(jQuery(this).data("block-uid")),tdWeather._currentLocation=jQuery("input#"+jQuery(this).data("block-uid")).val(),tdWeather._updateLocationCallback2(tdWeather._currentLocation),tdWeather._currentRequestInProgress=!1,tdWeather._hide_manual_location_form())});jQuery(document).click(function(a){!0===tdWeather._is_location_open&&!0!==jQuery(a.target).hasClass("td-location-set-input")&&!0!==jQuery(a.target).hasClass("td-location-set-button")&&tdWeather._hide_manual_location_form()})},addItem:function(a){tdWeather.items.push(a)},_updateLocationCallback:function(a){tdWeather._currentLatitude=a.coords.latitude;tdWeather._currentLongitude=a.coords.longitude;tdWeather._currentPositionCacheKey=a.coords.latitude+"_"+a.coords.longitude;tdLocalCache.exist(tdWeather._currentPositionCacheKey+"_today")?tdWeather._owmGetTodayDataCallback(tdLocalCache.get(tdWeather._currentPositionCacheKey+"_today")):jQuery.ajax({dataType:"jsonp",url:"https://api.openweathermap.org/data/2.5/weather?lat="+tdWeather._currentLatitude+"&lon="+tdWeather._currentLongitude+"&units=metric&lang="+tdWeather._currentItem.api_language+"&appid="+tdWeather._currentItem.api_key,success:tdWeather._owmGetTodayDataCallback,cache:!0})},_owmGetTodayDataCallback:function(a){tdLocalCache.set(tdWeather._currentPositionCacheKey+"_today",a);tdWeather._currentItem.api_location=a.name;tdWeather._currentItem.today_clouds=tdUtil.round(a.clouds.all);tdWeather._currentItem.today_humidity=tdUtil.round(a.main.humidity);tdWeather._currentItem.today_icon=tdWeather._icons[a.weather[0].icon];tdWeather._currentItem.today_icon_text=a.weather[0].description;tdWeather._currentItem.today_max[0]=tdUtil.round(a.main.temp_max,1);tdWeather._currentItem.today_max[1]=tdWeather._celsiusToFahrenheit(a.main.temp_max);tdWeather._currentItem.today_min[0]=tdUtil.round(a.main.temp_min,1);tdWeather._currentItem.today_min[1]=tdWeather._celsiusToFahrenheit(a.main.temp_min);tdWeather._currentItem.today_temp[0]=tdUtil.round(a.main.temp,1);tdWeather._currentItem.today_temp[1]=tdWeather._celsiusToFahrenheit(a.main.temp);tdWeather._currentItem.today_wind_speed[0]=tdUtil.round(a.wind.speed,1);tdWeather._currentItem.today_wind_speed[1]=tdWeather._kmphToMph(a.wind.speed);tdLocalCache.exist(tdWeather._currentPositionCacheKey)?tdWeather._owmGetFiveDaysData(tdLocalCache.get(tdWeather._currentPositionCacheKey)):jQuery.ajax({dataType:"jsonp",url:"https://api.openweathermap.org/data/2.5/forecast?lat="+tdWeather._currentLatitude+"&lon="+tdWeather._currentLongitude+"&units=metric&lang="+tdWeather._currentItem.api_language+"&appid="+tdWeather._currentItem.api_key,success:tdWeather._owmGetFiveDaysData,cache:!0})},_owmGetFiveDaysData:function(a){tdLocalCache.set(tdWeather._currentPositionCacheKey,a);for(var b=0;b<tdWeather._currentItem.forecast.length&&5!==b;b++){var c=tdWeather._currentItem.forecast[b];c.day_temp[0]=tdUtil.round(a.list[c.owm_day_index].main.temp_max);c.day_temp[1]=tdWeather._celsiusToFahrenheit(c.day_temp[0])}tdWeather._renderCurrentItem()},_renderCurrentItem:function(){var a=jQuery("#"+tdWeather._currentItem.block_uid),b=tdWeather._currentLatitude,c=tdWeather._currentLongitude,d=tdWeather._currentLocation;a.find(".td-weather-city").html(tdWeather._currentItem.api_location);""===d&&0===b&&0===c&&a.find(".td-weather-city").html(tdWeather._currentItem.location);a.find(".td-weather-condition").html(tdWeather._currentItem.today_icon_text);b=a.find(".td-w-today-icon");b.removeClass();b.addClass("td-w-today-icon");b.addClass(tdWeather._currentItem.today_icon);b=tdWeather._currentItem.current_unit;c="kmh";d="C";1===b&&(c="mph",d="F");a.find(".td-big-degrees").html(tdWeather._currentItem.today_temp[b]);a.find(".td-weather-unit").html(d);a.find(".td-w-high-temp").html(tdWeather._currentItem.today_max[b]);a.find(".td-w-low-temp").html(tdWeather._currentItem.today_min[b]);a.find(".td-w-today-humidity").html(tdWeather._currentItem.today_humidity+"%");a.find(".td-w-today-wind-speed").html(tdWeather._currentItem.today_wind_speed[b]+c);a.find(".td-w-today-clouds").html(tdWeather._currentItem.today_clouds+"%");for(c=0;c<tdWeather._currentItem.forecast.length;c++)a.find(".td-day-"+c).html(tdWeather._currentItem.forecast[c].day_name),a.find(".td-degrees-"+c).html(tdWeather._currentItem.forecast[c].day_temp[b]);tdWeather._currentRequestInProgress=!1},_getItemByBlockID:function(a){for(var b=0;b<tdWeather.items.length;b++)if(tdWeather.items[b].block_uid===a)return tdWeather.items[b];return!1},_displayLocationApiError:function(a){if(1===a.code){if(tdDetect.isAndroid)tdWeather._show_manual_location_form();else if(tdDetect.isIos){alert("Please enable Location services for Safari Websites and reload the page. \n ---------------------- \nSettings > Privacy > Location Services");return}tdWeather._show_manual_location_form()}tdWeather._show_manual_location_form()},_celsiusToFahrenheit:function(a){a=9*a/5+32;var b=tdUtil.round(a,1);return 99.9<b?tdUtil.round(a):b},_kmphToMph:function(a){return tdUtil.round(.621371192*a,1)},_show_manual_location_form:function(){tdWeather._currentItem=tdWeather._getItemByBlockID(tdWeather._currentItem.block_uid);jQuery("#"+tdWeather._currentItem.block_uid).find(".td-weather-set-location").addClass("td-show-location");jQuery(".td-manual-location-form input").focus();tdWeather._is_location_open=!0},_hide_manual_location_form:function(){jQuery("#"+tdWeather._currentItem.block_uid).find(".td-weather-set-location").removeClass("td-show-location");tdWeather._is_location_open=!1},_updateLocationCallback2:function(a){tdWeather._currentLocationCacheKey=a;tdLocalCache.exist(tdWeather._currentLocationCacheKey+"_today")?tdWeather._owmGetTodayDataCallback2(tdLocalCache.get(tdWeather._currentLocationCacheKey+"_today")):(a="https://api.openweathermap.org/data/2.5/weather?q="+encodeURIComponent(a)+"&lang="+tdWeather._currentItem.api_language+"&units=metric&appid="+tdWeather._currentItem.api_key,jQuery.ajax({dataType:"jsonp",url:a,success:tdWeather._owmGetTodayDataCallback2,cache:!0}))},_owmGetTodayDataCallback2:function(a){tdLocalCache.set(tdWeather._currentLocationCacheKey+"_today",a);tdWeather._currentItem.api_location=a.name;tdWeather._currentItem.today_clouds=tdUtil.round(a.clouds.all);tdWeather._currentItem.today_humidity=tdUtil.round(a.main.humidity);tdWeather._currentItem.today_icon=tdWeather._icons[a.weather[0].icon];tdWeather._currentItem.today_icon_text=a.weather[0].description;tdWeather._currentItem.today_max[0]=tdUtil.round(a.main.temp_max,1);tdWeather._currentItem.today_max[1]=tdWeather._celsiusToFahrenheit(a.main.temp_max);tdWeather._currentItem.today_min[0]=tdUtil.round(a.main.temp_min,1);tdWeather._currentItem.today_min[1]=tdWeather._celsiusToFahrenheit(a.main.temp_min);tdWeather._currentItem.today_temp[0]=tdUtil.round(a.main.temp,1);tdWeather._currentItem.today_temp[1]=tdWeather._celsiusToFahrenheit(a.main.temp);tdWeather._currentItem.today_wind_speed[0]=tdUtil.round(a.wind.speed,1);tdWeather._currentItem.today_wind_speed[1]=tdWeather._kmphToMph(a.wind.speed);tdLocalCache.exist(tdWeather._currentLocationCacheKey)?tdWeather._owmGetFiveDaysData2(tdLocalCache.get(tdWeather._currentLocationCacheKey)):jQuery.ajax({dataType:"jsonp",url:"https://api.openweathermap.org/data/2.5/forecast?q="+tdWeather._currentItem.api_location+"&lang="+tdWeather._currentItem.api_language+"&units=metric&cnt=35&appid="+tdWeather._currentItem.api_key,success:tdWeather._owmGetFiveDaysData2,cache:!0})},_owmGetFiveDaysData2:function(a){tdLocalCache.set(tdWeather._currentLocationCacheKey,a);for(var b={},c=!0,d=Object.prototype.hasOwnProperty,e=0;e<a.list.length;e++)if(d.call(a.list[e],"dt")){c=a.list[e].dt;var f=td_date_i18n("Ymd",c);!1===d.call(b,f)?b[f]={timestamp:c,day_name:td_date_i18n("D",c),day_temp:[tdUtil.round(a.list[e].main.temp_max),tdUtil.round(tdWeather._celsiusToFahrenheit(a.list[e].main.temp_max))],owm_day_index:e}:b[f].day_temp[0]<tdUtil.round(a.list[e].main.temp_max)&&(b[f].day_temp[0]=tdUtil.round(a.list[e].main.temp_max),b[f].day_temp[1]=tdUtil.round(tdWeather._celsiusToFahrenheit(a.list[e].main.temp_max)));c=!1}if(!1===c){tdWeather._currentItem.forecast=[];for(var l in b){if(5===tdWeather._currentItem.forecast.length)break;tdWeather._currentItem.forecast[tdWeather._currentItem.forecast.length]=b[l]}}tdWeather._renderCurrentItem()}}})();tdWeather.init();jQuery(window).load(function(){jQuery("body").addClass("td-js-loaded");window.tdAnimationStack.init()});jQuery(window).ready(function(){jQuery(".td_smart_list_1 a, .td_smart_list_3 a").click(function(a){if(a.target===a.currentTarget){var b=jQuery(this).attr("target"),c=jQuery(this)[0].hasAttribute("download"),d=jQuery(this).attr("href");c||("_blank"==b?(a.preventDefault(),window.open(d)):window.location.href!==d&&tdUtil.isValidUrl(d)&&(window.location.href=d))}});jQuery(".td_block_trending_now").each(function(){var a=new tdTrendingNow.item,b=jQuery(this).find(".td-trending-now-wrapper").data("start"),c=0;a.blockUid=jQuery(this).data("td-block-uid");"manual"!==b&&(a.trendingNowAutostart=b);jQuery("#"+a.blockUid+" .td-trending-now-post").each(function(){a.trendingNowPosts[c]=jQuery(this);c++});"undefined"===typeof a.trendingNowPosts||1>a.trendingNowPosts.length||tdTrendingNow.addItem(a)});jQuery(".td-trending-now-nav-left").on("click",function(a){a.preventDefault();a=jQuery(this).data("block-id");tdTrendingNow.itemPrev(a)});jQuery(".td-trending-now-nav-right").on("click",function(a){a.preventDefault();a=jQuery(this).data("block-id");tdTrendingNow.itemNext(a)})});var tdAnimationSprite={};(function(){tdAnimationSprite={items:[],isInRequestAnimation:!1,item:function(){this.blockUid="";this.paused=this._isInitialized=!1;this.automatStart=!0;this.properties=[];this.readyToAnimate=!1;this.nextFrame=1;this.animationSpriteClass=this.jqueryObj=this.interval=void 0;this._currentDirection="right";this._executedLoops=0;this.loops=this.reverse=this.velocity=this.frameWidth=this.frames=this._prop_background_position=void 0;this.animate=function(){this._prop_background_position=-1*this.nextFrame*this.frameWidth+"px 0";this.readyToAnimate=!0;!0===this.reverse?"right"===this._currentDirection?this.nextFrame===this.frames-1?(this._currentDirection="left",this.nextFrame--):this.nextFrame++:"left"===this._currentDirection&&(0===this.nextFrame?(this._currentDirection="right",this.nextFrame++,this._executedLoops++,0!==this.loops&&this._executedLoops===this.loops&&clearInterval(this.interval)):this.nextFrame--):this.nextFrame===this.frames-1?(this._executedLoops++,0!==this.loops&&this._executedLoops===this.loops&&clearInterval(this.interval),this.nextFrame=0):this.nextFrame++;!1===tdAnimationSprite.isInRequestAnimation&&(tdAnimationSprite.isInRequestAnimation=!0,window.requestAnimationFrame(tdAnimationSprite.animateAllItems))}},_initializeItem:function(a){if(!0!==a._isInitialized){var b=/(td_animation_sprite\S*)/gi;"undefined"!==typeof a.jqueryObj.attr("class")&&(b=a.jqueryObj.attr("class").match(b),null!==b&&(a.offsetTop=a.jqueryObj.offset().top,a.offsetBottomToTop=a.offsetTop+a.jqueryObj.height(),a.animationSpriteClass=b[b.length-1],b=a.animationSpriteClass.split("-"),7===b.length&&(a.frames=parseInt(b[1]),a.frameWidth=parseInt(b[2]),a.velocity=parseInt(b[3]),a.loops=parseInt(b[4]),1===parseInt(b[5])?a.reverse=!0:a.reverse=!1,1===parseInt(b[6])?a.automatStart=!0:a.automatStart=!1,a._isInitialized=!0)))}},addItem:function(a){a.constructor===tdAnimationSprite.item&&(tdAnimationSprite.items.push(a),tdAnimationSprite._initializeItem(a),!0===a.automatStart&&tdAnimationSprite.computeItem(a))},deleteItem:function(a){for(var b=0;b<tdAnimationSprite.items.length;b++)if(tdAnimationSprite.items[b].blockUid===a)return tdAnimationSprite.items.splice(b,1),!0;return!1},computeItem:function(a){1<a.frames&&void 0===a.interval&&(a.interval=setInterval(function(){!1===a.paused&&a.animate()},a.velocity))},recomputeItem:function(a){clearInterval(a.interval);a.interval=void 0;a._isInitialized=!1;tdAnimationSprite._initializeItem(a);tdAnimationSprite.computeItem(a)},stopItem:function(a){a.constructor===tdAnimationSprite.item&&!0===a._isInitialized&&(clearInterval(a.interval),a.interval=void 0)},startItem:function(a){a.constructor===tdAnimationSprite.item&&!0===a._isInitialized&&(a.paused=!1)},pauseItem:function(a){a.constructor===tdAnimationSprite.item&&!0===a._isInitialized&&(a.paused=!0)},computeAllItems:function(){for(var a=0;a<tdAnimationSprite.items.length;a++)tdAnimationSprite.computeItem(tdAnimationSprite.items[a])},recomputeAllItems:function(){for(var a=0;a<tdAnimationSprite.items.length;a++)tdAnimationSprite.recomputeItem(tdAnimationSprite.items[a])},stopAllItems:function(){for(var a=0;a<tdAnimationSprite.items.length;a++)tdAnimationSprite.stopItem(tdAnimationSprite.items[a])},pauseAllItems:function(){for(var a=0;a<tdAnimationSprite.items.length;a++)tdAnimationSprite.pauseItem(tdAnimationSprite.items[a])},startAllItems:function(){for(var a=0;a<tdAnimationSprite.items.length;a++)tdAnimationSprite.startItem(tdAnimationSprite.items[a])},animateAllItems:function(){for(var a,b=0;b<tdAnimationSprite.items.length;b++)a=tdAnimationSprite.items[b],!0===a.readyToAnimate&&(a.jqueryObj.css("background-position",a._prop_background_position),a.readyToAnimate=!1);tdAnimationSprite.isInRequestAnimation=!1}};for(var a=jQuery('span[class^="td_animation_sprite"]'),b=0;b<a.length;b++){var c=new tdAnimationSprite.item;c.jqueryObj=jQuery(a[b]);c.blockUid=c.jqueryObj.data("td-block-uid");tdAnimationSprite.addItem(c)}})();function td_date_i18n(a,b){var c,d=/\\?(.?)/gi,e=function(a,b){return l[a]?l[a]():b},f=function(a,b){for(a=String(a);a.length<b;)a="0"+a;return a};var l={d:function(){return f(l.j(),2)},D:function(){return tdDateNamesI18n.day_names_short[l.w()]},j:function(){return c.getDate()},l:function(){return tdDateNamesI18n.day_names[l.w()]},N:function(){return l.w()||7},S:function(){var a=l.j(),b=a%10;3>=b&&1==parseInt(a%100/10,10)&&(b=0);return["st","nd","rd"][b-1]||"th"},w:function(){return c.getDay()},z:function(){var a=new Date(l.Y(),l.n()-1,l.j()),b=new Date(l.Y(),0,1);return Math.round((a-b)/864E5)},W:function(){var a=new Date(l.Y(),l.n()-1,l.j()-l.N()+3),b=new Date(a.getFullYear(),0,4);return f(1+Math.round((a-b)/864E5/7),2)},F:function(){return tdDateNamesI18n.month_names[l.n()-1]},m:function(){return f(l.n(),2)},M:function(){return tdDateNamesI18n.month_names_short[l.n()-1]},n:function(){return c.getMonth()+1},t:function(){return(new Date(l.Y(),l.n(),0)).getDate()},L:function(){var a=l.Y();return 0===a%4&0!==a%100|0===a%400},o:function(){var a=l.n(),b=l.W();return l.Y()+(12===a&&9>b?1:1===a&&9<b?-1:0)},Y:function(){return c.getFullYear()},y:function(){return l.Y().toString().slice(-2)},a:function(){return 11<c.getHours()?"pm":"am"},A:function(){return l.a().toUpperCase()},B:function(){var a=3600*c.getUTCHours(),b=60*c.getUTCMinutes(),d=c.getUTCSeconds();return f(Math.floor((a+b+d+3600)/86.4)%1E3,3)},g:function(){return l.G()%12||12},G:function(){return c.getHours()},h:function(){return f(l.g(),2)},H:function(){return f(l.G(),2)},i:function(){return f(c.getMinutes(),2)},s:function(){return f(c.getSeconds(),2)},u:function(){return f(1E3*c.getMilliseconds(),6)},e:function(){console.log("Not supported (see source code of date() for timezone on how to add support)")},I:function(){var a=new Date(l.Y(),0),b=Date.UTC(l.Y(),0),c=new Date(l.Y(),6),d=Date.UTC(l.Y(),6);return a-b!==c-d?1:0},O:function(){var a=c.getTimezoneOffset(),b=Math.abs(a);return(0<a?"-":"+")+f(100*Math.floor(b/60)+b%60,4)},P:function(){var a=l.O();return a.substr(0,3)+":"+a.substr(3,2)},T:function(){return"UTC"},Z:function(){return 60*-c.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(d,e)},r:function(){return"D, d M Y H:i:s O".replace(d,e)},U:function(){return c/1E3|0}};this.date=function(a,b){c=void 0===b?new Date:b instanceof Date?new Date(b):new Date(1E3*b);return a.replace(d,e)};return this.date(a,b)}var tdSocialSharing={};(function(){tdSocialSharing={init:function(){jQuery(".td-social-sharing-button").click(function(a){var b=jQuery(this);if(!b.hasClass("td-social-mail")&&!b.hasClass("td-social-share-text"))if(a.preventDefault(),b.hasClass("td-social-expand-tabs")){a=b.data("block-uid");var c=jQuery("#"+a),d=b.find(".td-social-expand-tabs-icon");if(c.hasClass("td-social-show-all")){b.detach().appendTo(c.find(".td-social-sharing-hidden:first"));b=c.find(".td-post-sharing-visible:first");var e=new tdPullDown.item;e.blockUid=c.attr("id");e.horizontal_jquery_obj=b;e.vertical_jquery_obj=c.find(".td-social-sharing-hidden:first");e.horizontal_element_css_class="td-social-sharing-button-js";e.container_jquery_obj=b.parents(".td-post-sharing:first");tdPullDown.add_item(e);jQuery("#"+a).removeClass("td-social-show-all");d.removeClass("td-icon-minus");d.addClass("td-icon-plus")}else tdPullDown.unloadItem(a),jQuery("#"+a).addClass("td-social-show-all"),d.removeClass("td-icon-plus"),d.addClass("td-icon-minus"),b.detach().appendTo(c.find(".td-post-sharing-visible:first"))}else b.hasClass("td-social-print")?window.print():(a.preventDefault(),a=jQuery(window).width()/2-450,c=jQuery(window).height()/2-300,window.open(b.attr("href"),"mywin","left="+a+",top="+c+",width=900,height=600,toolbar=0"))});setTimeout(function(){jQuery(".td-post-sharing").each(function(a,b){var c=jQuery(b),d=c.find(".td-post-sharing-visible:first"),e=new tdPullDown.item;e.blockUid=c.attr("id");e.horizontal_jquery_obj=d;e.vertical_jquery_obj=c.find(".td-social-sharing-hidden:first");e.horizontal_element_css_class="td-social-sharing-button-js";e.container_jquery_obj=d.parents(".td-post-sharing:first");tdPullDown.add_item(e)})},50)}};tdSocialSharing.init()})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./assets/js/jquery-1.12.4\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var addComment={moveForm:function(a,b,c,d){var e,f,g,h,i=this,j=i.I(a),k=i.I(c),l=i.I("cancel-comment-reply-link"),m=i.I("comment_parent"),n=i.I("comment_post_ID"),o=k.getElementsByTagName("form")[0];if(j&&k&&l&&m&&o){i.respondId=c,d=d||!1,i.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",k.parentNode.insertBefore(e,k)),j.parentNode.insertBefore(k,j.nextSibling),n&&d&&(n.value=d),m.value=b,l.style.display="",l.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{for(var p=0;p<o.elements.length;p++)if(f=o.elements[p],h=!1,"getComputedStyle"in window?g=window.getComputedStyle(f):document.documentElement.currentStyle&&(g=f.currentStyle),(f.offsetWidth<=0&&f.offsetHeight<=0||"hidden"===g.visibility)&&(h=!0),"hidden"!==f.type&&!f.disabled&&!h){f.focus();break}}catch(q){}return!1}},I:function(a){return document.getElementById(a)}};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}else;}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(e){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/alexandre/pucminas/staticsite2/assets/js/main.js Unexpected token (3:0)\nYou may need an appropriate loader to handle this file type.\n| window._wpemojiSettings = { \"baseUrl\": \"https:\\/\\/s.w.org\\/images\\/core\\/emoji\\/2.4\\/72x72\\/\", \"ext\": \".png\", \"svgUrl\": \"https:\\/\\/s.w.org\\/images\\/core\\/emoji\\/2.4\\/svg\\/\", \"svgExt\": \".svg\", \"source\": { \"concatemoji\": \"https:\\/\\/demo.tagdiv.com\\/newspaper\\/wp-includes\\/js\\/wp-emoji-release.min.js?ver=d533c96a\" } }; !function (a, b, c) { function d(a, b) { var c = String.fromCharCode; l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, a), 0, 0); var d = k.toDataURL(); l.clearRect(0, 0, k.width, k.height), l.fillText(c.apply(this, b), 0, 0); var e = k.toDataURL(); return d === e } function e(a) { var b; if (!l || !l.fillText) return !1; switch (l.textBaseline = \"top\", l.font = \"600 32px Arial\", a) { case \"flag\": return !(b = d([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819])) && (b = d([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]), !b); case \"emoji\": return b = d([55357, 56692, 8205, 9792, 65039], [55357, 56692, 8203, 9792, 65039]), !b }return !1 } function f(a) { var c = b.createElement(\"script\"); c.src = a, c.defer = c.type = \"text/javascript\", b.getElementsByTagName(\"head\")[0].appendChild(c) } var g, h, i, j, k = b.createElement(\"canvas\"), l = k.getContext && k.getContext(\"2d\"); for (j = Array(\"flag\", \"emoji\"), c.supports = { everything: !0, everythingExceptFlag: !0 }, i = 0; i < j.length; i++)c.supports[j[i]] = e(j[i]), c.supports.everything = c.supports.everything && c.supports[j[i]], \"flag\" !== j[i] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[j[i]]); c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function () { c.DOMReady = !0 }, c.supports.everything || (h = function () { c.readyCallback() }, b.addEventListener ? (b.addEventListener(\"DOMContentLoaded\", h, !1), a.addEventListener(\"load\", h, !1)) : (a.attachEvent(\"onload\", h), b.attachEvent(\"onreadystatechange\", function () { \"complete\" === b.readyState && c.readyCallback() })), g = c.source || {}, g.concatemoji ? f(g.concatemoji) : g.wpemoji && g.twemoji && (f(g.twemoji), f(g.wpemoji))) }(window, document, window._wpemojiSettings\n| \n| window.tdwGlobal = { \"adminUrl\": \"https:\\/\\/demo.tagdiv.com\\/newspaper\\/wp-admin\\/\", \"wpRestNonce\": \"7ce61e8530\", \"wpRestUrl\": \"https:\\/\\/demo.tagdiv.com\\/newspaper\\/wp-json\\/\", \"permalinkStructure\": \"\\/%postname%\\/\" };\n| \n| var _wpcf7 = { \"recaptcha\": { \"messages\": { \"empty\": \"Please verify that you are not a robot.\" } }, \"cached\": \"1\" };");

/***/ })
/******/ ]);