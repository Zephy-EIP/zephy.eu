(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+hPa":function(e,t,n){e.exports=n.p+"static/bg03-996314409401de99e170673e173b5fb7.jpg"},"2o5t":function(e,t,n){e.exports=n.p+"static/bg01-da6d2588f8a6a0dd2587a8ad088626f2.jpg"},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,f=-1;function m(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&d())}function d(){if(!l){var e=s(m);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"8ujH":function(e,t,n){var r=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var i,s,c=t.prefix||"__jp",u=t.name||c+o++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,m=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;f&&(s=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),f));function p(){i.parentNode&&i.parentNode.removeChild(i),window[u]=a,s&&clearTimeout(s)}return window[u]=function(e){r("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+m(u)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,d.parentNode.insertBefore(i,d),function(){window[u]&&p()}};var o=0;function a(){}},G04T:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n("8ujH"))&&r.__esModule?r:{default:r},a=n("H/qo");var i=function(e){var t=e.url,n=e.timeout;return new Promise((function(e,r){return(0,o.default)(t,{param:"c",timeout:n},(function(t,n){t&&r(t),n&&e(n)}))}))},s=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r="group["===n.substring(0,6)?n:n.toUpperCase();t=t.concat("&".concat(r,"=").concat(e[n]))}return t},c=function(e,t,n){var r=(0,a.validate)(e),o=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var c="https://zephy.us7.list-manage.com/subscribe/post?u=7bfd8b6e1ad51e6ff46c72d98&amp;id=0c806f7cba",u=3500;arguments.length<3&&"string"==typeof t?c=t:"string"==typeof n&&(c=n),c=c.replace(/\/post/g,"/post-json");var l="&EMAIL=".concat(o).concat(s(t)),f="".concat(c).concat(l);return i({url:f,timeout:u})};t.default=c},GTTd:function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())}).call(this,n("8oxB"))},"H/qo":function(e,t,n){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},KssD:function(e,t,n){e.exports=n.p+"static/bg02-d9d5c7bf5a847fa79d5b44aa0c7bb96d.jpg"},QXP7:function(e,t){var n=1e3,r=6e4,o=60*r,a=24*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var s,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?i(s=e,a,"day")||i(s,o,"hour")||i(s,r,"minute")||i(s,n,"second")||s+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("7oih"),i=n("obyI"),s=n.n(i);function c(){return o.a.createElement("footer",{id:"footer"},o.a.createElement("ul",{className:"icons"},s.a.socialLinks.map((function(e){var t=e.icon,n=e.name,r=e.url;return o.a.createElement("li",null,o.a.createElement("a",{href:r,class:"icon "+t},o.a.createElement("span",{class:"label"},n)))}))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"© Zephy.")))}var u=n("nWR2"),l=n.n(u);function f(){return o.a.createElement("header",{id:"header"},o.a.createElement("img",{src:l.a,id:"logo",alt:"Logo - Zephy"}),o.a.createElement("h1",null,s.a.heading),o.a.createElement("p",null,s.a.subHeading))}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=n("dI71"),p=n("G04T"),h=n.n(p),g=function(e){function t(){var t;return(t=e.call(this)||this).state={message:"",email:""},t.onSubmit=t.onSubmit.bind(m(t)),t.handleChangeEmail=t.handleChangeEmail.bind(m(t)),t}Object(d.a)(t,e);var n=t.prototype;return n.handleChangeEmail=function(e){this.setState({email:e.target.value})},n.onSubmit=function(e){var t=this;e.preventDefault(),e.stopPropagation(),h()(this.state.email).then((function(e){var n="";n="error"===e.result?"Erreur, vous êtes peut-être déjà inscrit ou vérifiez votre adresse mail.":"Merci, à bientôt.",t.setState({email:""}),t.setState({message:n}),setTimeout((function(){t.setState({message:""})}),3e3),console.log(e)})).catch((function(){}))},n.render=function(){var e=this.state.message;return o.a.createElement("form",{id:"signup-form",onSubmit:this.onSubmit},o.a.createElement("input",{type:"email",name:"email",id:"email",value:this.state.email,onChange:this.handleChangeEmail,placeholder:"Adresse email"}),o.a.createElement("input",{type:"submit",value:"S'inscrire"}),o.a.createElement("span",{className:(e?"visible success":"")+" message"},e))},t}(r.Component),v=function(e){function t(){var t;return(t=e.call(this)||this).state={pos:0,lastPos:0},t.rotateSlide=t.rotateSlide.bind(m(t)),t}Object(d.a)(t,e);var n=t.prototype;return n.rotateSlide=function(){var e=this,t=this.props.settings;setInterval((function(){var n=e.state,r=n.pos,o=n.lastPos;o=r,++r>=t.images.length&&(r=0),setTimeout((function(){o=r,e.setState({lastPos:o})}),t.delay/2),e.setState({lastPos:o,pos:r})}),t.delay)},n.componentDidMount=function(){this.rotateSlide()},n.render=function(){var e=this.state,t=e.pos,n=e.lastPos,r=this.props.settings;return o.a.createElement("div",{id:"bg"},r.images.map((function(e,r){return o.a.createElement("div",{key:e.url,style:{backgroundPosition:e.position,backgroundImage:'url("'+e.url+'")'},className:r===t?"visible top":r===n?"visible":""})})),";")},t}(r.PureComponent),y={images:[{url:n("2o5t"),position:"center"},{url:n("KssD"),position:"center"},{url:n("+hPa"),position:"center"}],delay:6e3};t.default=function(){return o.a.createElement(a.a,null,o.a.createElement(f,null),o.a.createElement(g,null),o.a.createElement(c,null),o.a.createElement(v,{settings:y}))}},bRoh:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var o=t.formatters[r];if("function"==typeof o){var a=i[c];n=o.call(e,a),i.splice(c,1),c--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}},nWR2:function(e,t,n){e.exports=n.p+"static/logo-4510dd4683437abe49a6d3f2a000b936.png"},obyI:function(e,t){e.exports={siteTitle:"Zephy",manifestName:"Zephy",manifestShortName:"Zephy",manifestStartUrl:"/",manifestBackgroundColor:"#ffffff",manifestThemeColor:"#ffffff",manifestDisplay:"standalone",manifestIcon:"src/assets/images/logo.png",pathPrefix:"/zephy.eu",heading:"Zephy",subHeading:"Zephy est un assistant personnalisable qui a pour but de faciliter la plannification de tous vos déplacements urbains.",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/Zephy-EIP"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/zephy_44"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/zephy_44/"},{icon:"fa-envelope-o",name:"Email",url:"mailto:contact@zephy.eu"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-9ed8a52d2cd32f10e1ef.js.map