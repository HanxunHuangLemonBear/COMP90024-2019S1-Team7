(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)a=u[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-147b903d":"e018d42c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-147b903d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-147b903d":"0519b088"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e),c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"48e4":function(e,t,n){"use strict";var r=n("c6bd"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("795b"),a=n.n(r),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg",attrs:{id:"app"}},[n("Navbar"),n("Home"),n("router-view")],1)},u=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"/"==this.$route.path?n("div",{attrs:{id:"home"}},[e._m(0),e._m(1)]):e._e()},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"banner"}},[n("div",{staticClass:"inner"},[n("div",{staticClass:"logo"}),n("p",[e._v("\n        COMP90024 - Cluster and Cloud Computing "),n("br"),e._v("\n        Assignment Two\n      ")])]),n("a",{staticClass:"more",attrs:{href:"#intro"}},[e._v("Learn More")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"wrapper center",attrs:{id:"intro"}},[n("div",{staticClass:"inner"},[n("h2",[e._v("Group Member")]),n("p",[e._v("Hanxun Huang - 975781")]),n("p",[e._v("Haonan Chen - 000000")]),n("p",[e._v("Lihuan Zhang - 000000")]),n("p",[e._v("Xu Wang - 979895")]),n("p",[e._v("Xu Yang - 961717")]),n("p",{staticClass:"button premium",attrs:{onclick:"window.location.href='/map'"}},[n("a",[e._v("Go Premium")])])])])}],l={name:"Home"},f=l,d=(n("cca4"),n("2877")),p=Object(d["a"])(f,s,c,!1,null,null,null),h=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"alt",attrs:{id:"header"}},[n("a",{attrs:{id:"logo",href:"/"}}),n("nav",[n("ul",["/"==this.$route.path?n("li",[e._m(0)]):e._e(),"/"!=this.$route.path?n("li",[n("a",{class:"button "+[this.info.class],attrs:{href:this.info.href},on:{click:e.changeButton}},[n("span",[e._v(e._s(this.info.buttonText))])])]):e._e()])])])},g=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"button premium",attrs:{href:"/map"}},[n("span",[e._v("Go Premium")])])}],v={name:"Navbar",data:function(){return{info:{href:"#anchor1",class:"premium",buttonText:"View statistics"}}},mounted:function(){console.debug("| Header Mounted"),this.handleNavbar()},methods:{handleNavbar:function(){var e=document.getElementById("header");window.onscroll=function(){0==document.body.scrollTop&&0==document.documentElement.scrollTop?e.classList.add("alt"):e.classList.remove("alt")}},changeButton:function(){var e=this;"#anchor1"==this.info.href?setTimeout(function(){e.info.href="#gmap",e.info.class="map",e.info.buttonText="View Map"},500):setTimeout(function(){e.info.href="#anchor1",e.info.class="premium",e.info.buttonText="View statistics"},100)}}},b=v,w=(n("48e4"),Object(d["a"])(b,m,g,!1,null,null,null)),y=w.exports,_={name:"app",components:{Home:h,Navbar:y}},C=_,x=(n("8dd4"),Object(d["a"])(C,i,u,!1,null,"ac551d46",null)),T=x.exports,k=n("8c4f");o["default"].use(k["a"]);var j=function(){return n.e("chunk-147b903d").then(n.bind(null,"4bb4"))},O=new k["a"]({routes:[{path:"/map",component:j}],mode:"history"}),S=!0,E="/",M={baseUrl:E,baseApi:S?E:"/api/"},L=n("a4bb"),N=n.n(L),P=n("f499"),$=n.n(P),A=n("7618");n("ac6a"),n("28a5"),n("c5f6");function D(e){return e=Number(e),e<10?"0"+e:e}var U={minite2str:function(e){var t=Math.floor(e/60),n=e%60,r="";return t>0&&(r+=t+"hours"),n>0&&(r+=n+"minutes"),r},ms2str:function(e){var t=Math.floor(e/10),n=Math.floor(t/6e3),r=Math.floor((t-n)/100),a=t%100;return{minute:D(n),second:D(r),msecond:D(a)}},getUrlParam:function(){var e=window.location.href.split("?"),t=e.length>1?e[1].split("&"):[],n={};return t.length>0&&t[0].length>0&&t.forEach(function(e){var t=e.split("=");n[t[0]]=t[1]}),n},setStorage:function(e,t){"object"==Object(A["a"])(t).toLowerCase()&&(t=$()(t)),window.localStorage.setItem(e,t)},getStorage:function(e){return window.localStorage.getItem(e)},removeStorage:function(e){window.localStorage.removeItem(e)},clearStorage:function(){window.localStorage.clear()},setCookie:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="expires="+r.toUTCString();document.cookie=e+"="+t+"; "+a},getCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){var a=n[r];while(" "===a.charAt(0))a=a.substring(1);if(-1!==a.indexOf(t))return a.substring(t.length,a.length)}return null},clearCookie:function(){this.setCookie("username","",-1)},formatNum:function(e){return e=Number(e),e<10?"0"+e:e},timestamp2datetime:function(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate(),o=t.getHours(),i=t.getMinutes(),u=t.getSeconds();return n+"-"+D(r)+"-"+D(a)+" "+D(o)+":"+D(i)+":"+D(u)},formatDate:function(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return n+"-"+D(r)+"-"+D(a)},removeObjFromArrayBy:function(e,t){for(var n=N()(t)[0],r=t[n],a=null,o=0;o<e.length;o++)if(e[o][n]==r){a={index:o,item:e[o]};break}return e.splice(a.index,1),e},imageFile2DataURL:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4?arguments[4]:void 0;return new a.a(function(a,i){var u=new FileReader,s=new Image,c=document.createElement("canvas"),l=c.getContext("2d");u.onerror=i,s.onerror=i,s.onload=function(){var i,u;if(o)i=t,u=n;else{i=s.width,u=s.height;var f=t||i,d=n||u,p=Math.max(i/f,u/d);p>1&&(i/=p,u/=p)}c.width=i,c.height=u,l.clearRect(0,0,i,u),l.drawImage(s,0,0,i,u);var h=r<1?c.toDataURL("image/jpeg",r):c.toDataURL(e.type);a(h)},u.onload=function(){return s.src=u.result},u.readAsDataURL(e)})},imageFileCompress:function(e,t,n,r,a){return this.imageFile2DataURL(e,t,n,r,a).then(function(e){return e})}},B=n("9f7b"),H=n.n(B),F=n("bc3a"),R=n.n(F),I=n("4328"),q=n.n(I),G=n("b25f"),J=n.n(G);o["default"].use(J.a),o["default"].use(H.a),o["default"].config.productionTip=!1,R.a.defaults.timeout=5e3,R.a.interceptors.response.use(function(e){if(null==e.data&&"json"===e.config.responseType&&null!=e.request.responseText)try{e.data=JSON.parse(e.request.responseText)}catch(t){}return e});var V=function(e){var t=e.data,n={},r=e.url;for(var o in t)n[o]=t[o];n=q.a.stringify(n);var i=e.method.toLowerCase(),u="get"===i||"put"===i||"delete"===i;return n.length&&u&&(r+=M.baseApi.indexOf("?")>=0?"&":"?",r+=n),new a.a(function(t,a){R()({url:M.baseApi+r,method:e.method,responseType:e.dataType||"json",data:u?"":n}).then(function(e){e.data.success?t(e.data):a(e.data)}).catch(function(e){a(e)})})};o["default"].prototype.$axios=R.a,o["default"].prototype.$ajax=V,o["default"].prototype.siteConfig=M,o["default"].prototype.siteUtils=U,o["default"].prototype.setTitle=function(e){document.title=e},o["default"].prototype.goBack=function(){window.history.length>1?O.go(-1):O.push("/")};var Y=new o["default"]({el:"#app",router:O,render:function(e){return e(T)}});Y.$mount("#app")},"8dd4":function(e,t,n){"use strict";var r=n("d016"),a=n.n(r);a.a},c6bd:function(e,t,n){},cca4:function(e,t,n){"use strict";var r=n("f07c"),a=n.n(r);a.a},d016:function(e,t,n){},f07c:function(e,t,n){}});