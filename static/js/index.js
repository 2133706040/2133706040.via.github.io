(function(t){function e(e){for(var o,a,r=e[0],c=e[1],u=e[2],l=0,f=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={index:0},s=[];function a(t){return r.p+"static/js/"+({}[t]||t)+".js?0aae8f38"}function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=a(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,n[1](u)}i[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("fb05")},"14a0":function(t,e,n){"use strict";var o=n("c60d"),i=n.n(o);i.a},"275f":function(t,e,n){},"5fa0":function(t,e,n){"use strict";var o=n("c64a"),i=n.n(o);i.a},"779e":function(t,e,n){},"7d67":function(t,e,n){},"89ec":function(t,e,n){},9561:function(t,e,n){},a8c2:function(t,e,n){"use strict";var o=n("7d67"),i=n.n(o);i.a},aca6:function(t,e,n){"use strict";var o=n("89ec"),i=n.n(o);i.a},b38a:function(t,e,n){"use strict";var o=n("9561"),i=n.n(o);i.a},c50e:function(t,e,n){"use strict";t.exports={suggest:"https://m.baidu.com/su",weather:"https://free-api.heweather.net/s6/weather/",weather_ic:"https://cdn.heweather.com/img/plugin/190516/icon/c/"}},c60d:function(t,e,n){},c64a:function(t,e,n){},ccdb:function(t,e,n){"use strict";var o=n("779e"),i=n.n(o);i.a},fb05:function(t,e,n){"use strict";n.r(e);n("96dd"),n("a60a"),n("e783"),n("8b1f");var o=n("6e6d"),i=n("09d0"),s=(n("cc1d"),n("2427")),a=n.n(s),r=(n("897d"),n("82c6")),c=n.n(r),u={400:"Error request",401:"Unauthorized, please log in again",403:"Deny access",404:"Request error, this resource was not found",405:"Request method is not allowed",408:"Request timeout",500:"Server side error",501:"Network not implemented",502:"Network Error",503:"Services are not available",504:"Network timeout",505:"http version does not support this request",default:"Connection error"},l=n("c50e"),d=n.n(l),f=void 0;Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=f.constructor;return f.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),a.a.defaults.retry=4,a.a.defaults.timeout=5e3,a.a.defaults.retryDelay=1e3,a.a.interceptors.request.use((function(t){return Object.assign(t.headers,{"Content-Type":"application/x-www-form-urlencoded"}),t})),a.a.interceptors.response.use((function(t){var e=t.data;return"string"==typeof e&&(e=JSON.parse(e)),Promise.resolve(t)}),(function(t){if(t){var e=void 0;e=t.response?u[e.response.status||"default"]:t.toString(),alert(e)}}));var h=function(t,e,n,o){var s=new Promise((function(s,r){var u={url:t,method:n};"post"===n?u.data=c.a.stringify(e):u.params=e,"object"==Object(i["a"])(o)&&Object.assign(u,o),a.a.request(u).then((function(t){s(t.data)})).catch((function(t){r(t)}))}));return s.always=function(){arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Function;console.log(f)},s};window.$={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return h(t,e,"get",n)},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return h(t,e,"post",n)},getScript:function(t,e){var n=this;return new Promise((function(o){var i=document.createElement("script");i.type="text/javascript",i.async="async",i.charset="UTF-8",i.src=t,i.addEventListener("load",(function(){o(),"function"==typeof e&&e()}),!1),i.addEventListener("error",(function(){n.error()}),!1),document.head.appendChild(i)}))},path:d.a,extend:Object.assign,error:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};alert("".concat(t.message||t.msg||"Error: Network Error").concat(t.code?"[code:".concat(t.code,"]"):""))}};var g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._t("default")],2)},p=[],v=(n("275f"),{name:"BaseLayout"}),m=v,w=(n("aca6"),n("4e82")),b=Object(w["a"])(m,g,p,!1,null,null,null),_=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.effect}},[t.loading?n("div",{staticClass:"site-loading"}):t._e()])},x=[],C=n("b27f"),k={name:"SiteLoading",data:function(){return{loading:!1,effect:"fade-in"}},methods:{show:function(){this.loading=!0,this.changeEffect("fade-out")},hide:function(){this.loading=!1,this.changeEffect("fade-in")},changeEffect:function(t){var e=this;Object(C["setTimeout"])((function(){e.effect=t}),300)}}},E=k,O=(n("5fa0"),Object(w["a"])(E,y,x,!1,null,null,null)),S=O.exports,T={install:function(t){var e=t.extend(S),n=(new e).$mount();document.body.appendChild(n.$el),t.prototype.$loading=window.$loading={show:function(){n.show()},hide:function(){n.hide()}}}},j=T,L=(n("8f42"),n("e6d1"),n("c041"),n("db3e"),window.location.search.slice(1)),P=function(){var t=this;L.replace(/([^=]*)=([^&]*)&?/g,(function(e,n,o){t[n]=decodeURIComponent(o).replace(/</g,"&lt;").replace(/>/g,"&gt;")}))};P.prototype.toString=function(){return L};new P;var q=navigator.userAgent.toLowerCase(),M={isMobile:/(iphone|ipod|ipad|ios|android|nokia|blackberry|webos|webos|webmate|bada|lg|ucweb)/i.test(q),isIos:/(iphone|ipod|ipad|ios)/i.test(q),isAndroid:/(android)/i.test(q),isWeiXin:/micromessenger/i.test(q),isQQBrowser:/qqbrowser/i.test(q)},W={set:function(t,e,n){var o=new Date;n&&o.setTime(o.getTime()+24*n*3600*1e3),document.cookie=t+"="+e+(n?";path=/;expires="+o.toGMTString():"")},get:function(t){for(var e,n=document.cookie.replace(/[ ]/g,""),o=n.split(";"),i=0;i<o.length;i++){o[i]=o[i].replace("="," ");var s=o[i].split(" ");if(t==s[0]){e=s[1];break}}return e},delete:function(t){var e=new Date;e.setTime(e.getTime()-1e4),document.cookie=t+"=v; expires ="+e.toGMTString()}};o["a"].config.productionTip=!1,o["a"].component("BaseLayout",_),o["a"].use(j);var R=function(){return n.e("chunk-2d21dfab").then(n.bind(null,"d438"))};M.isMobile&&R().then((function(t){t.default()}));var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-layout",[n("div",{staticClass:"widget google"}),n("search-box"),n("div",{staticClass:"toolbar"},[n("weather-box",{attrs:{radius:t.radius[0]}}),n("a",{staticClass:"btn btn-qrcode",style:t.radius[1],attrs:{href:"https://cli.im/"}},[t._v("二维码")]),n("a",{staticClass:"btn btn-apk",style:t.radius[2],attrs:{href:"https://apkcombo.com/zh-cn/apk-downloader/"}},[t._v("软件")])],1)],1)},B=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weather-box"},[n("a",{staticClass:"btn btn-weather",style:t.radius,on:{click:function(e){return t.toggleWeather(!0)}}},[n("span",{staticClass:"celsius"},[t._v(t._s(t.now.tmp||"--")+"°")]),t._v(t._s(t.basic.location||"--"))]),n("transition",{attrs:{name:"fade-in"}},[t.status?n("div",{staticClass:"weather-card"},[n("div",{staticClass:"cover",on:{click:function(e){return t.toggleWeather(!1)}}}),n("div",{staticClass:"card"},[n("div",{staticClass:"row"},[n("div",{staticClass:"location pull-left"},[t._v("\n                        "+t._s(t.basic.admin_area+t.basic.parent_city+(t.basic.parent_city==t.basic.location?"":t.basic.location))+"\n                        "),n("span",{staticClass:"link",on:{click:function(e){t.setlocation("请输入你的所在位置 ( 不输入 = 获取ip位置 )")}}},[t._v("切换")])]),n("div",{staticClass:"pull-right"},[n("a",{staticClass:"link",attrs:{href:"https://heweather.com",target:"_blank"}},[t._v("@和风天气")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"temp pull-left"},[n("img",{staticClass:"ic-cond",attrs:{src:t.weatherIc(t.now.cond_code+t.getCond())}}),n("div",{staticClass:"text"},[n("div",{staticClass:"num"},[t._v(t._s(t.now.tmp||"--")+"°")]),t._v("\n                            "+t._s(t.now.cond_txt||"--")+"\n                        ")])]),n("div",{staticClass:"wind pull-righ"},[n("span",{staticClass:"btn-brf"},[t._v(t._s(t.lifestyle[0].brf||"--"))]),n("div",[t._v(t._s(t.now.wind_dir+t.now.wind_sc+"级"))]),n("div",[t._v("相对湿度"+t._s(t.now.hum))])])]),n("div",{staticClass:"hr"}),n("div",{staticClass:"row"},[n("div",{staticClass:"forecast"},t._l(t.daily_forecast,(function(e,o){return n("div",{key:o,staticClass:"item"},[n("div",{staticClass:"date"},[t._v(t._s(0==o?"今天":t.shortTime(e.date)))]),n("img",{staticClass:"ic-cond",attrs:{src:t.weatherIc(e["cond_code_"+t.getCond()]+t.getCond())}}),n("div",{staticClass:"tmp"},[t._v(t._s(e.tmp_min)+"°/"+t._s(e.tmp_max)+"°")])])})),0)])]),n("b",{staticClass:"close",on:{click:function(e){return t.toggleWeather(!1)}}},[t._v("×")])]):t._e()])],1)},D=[],A={name:"WeatherBox",data:function(){var t={};return{status:!1,param:{location:"",key:"7f3c55309e6b466fa8ac4ac7c808f34d"},basic:t,daily_forecast:[],lifestyle:[t],now:t,update:t}},props:["radius"],methods:{getCond:function(){var t=(new Date).getHours()>18?"n":"d";return t},weatherIc:function(t){return $.path.weather_ic+t+".png"},shortTime:function(t){return t.substr(5)},toggleWeather:function(t){this.now.tmp?this.status=t:alert("还没准备好~")},setlocation:function(t){t?(t=prompt(t),t||(t="auto_ip")):(t="auto_ip",console.log("调整为判断ip区域")),this.param.location=t,W.set("location",t,3),this.getWeather()},geolocation:function(){return new Promise((function(t,e){var n=W.get("location");n&&t(n),navigator.geolocation||e("你的浏览器不支持自动定位服务！"),navigator.geolocation.getCurrentPosition((function(o){var i=o.coords,s=i.longitude,a=i.latitude;void 0!==s&&void 0!==a||e("无法获取到正确位置！"),n="".concat(s,",").concat(a),W.set("location",n,3),t(n)}),(function(t){var n=t.message;e(n||"浏览器拒绝提供位置服务！")})),setTimeout((function(){e("自动获取位置超时，取消任务")}),1e3)}))},getWeather:function(){var t=this;console.dir("开始获取天气"),$.get($.path.weather,this.param).then((function(e){var n=e.HeWeather6;console.dir("天气信息请求成功");var o=n.pop(),i=o.basic,s=o.daily_forecast,a=o.lifestyle,r=o.now,c=o.status,u=o.update;"ok"==c&&(t.basic=i,t.lifestyle=a,t.daily_forecast=s,t.now=r,t.update=u)})).catch((function(){console.error("天气信息请求失败"),t.now.tmp="--"}))}},mounted:function(){var t=this;this.geolocation().then((function(e){console.log("自动获取位置".concat(e)),t.param.location=e,t.getWeather()})).catch((function(e){console.error(e),t.setlocation()}))}},U=A,z=(n("a8c2"),Object(w["a"])(U,N,D,!1,null,null,null)),J=z.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box clearfix"},[n("span",{staticClass:"label select",on:{click:t.showEngineList}},[t._v("\n        "+t._s(t.Engines[t.engine]["text"])+"\n    ")]),n("select-list",{ref:"engineList",attrs:{option:t.Engines},on:{select:t.selectEngine}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],ref:"input",staticClass:"text",attrs:{type:"text",placeholder:"你要搜点什么？≖‿≖✧"},domProps:{value:t.text},on:{blur:t.removeSuggest,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(t.enterText)},input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("select-list",{ref:"suggestList",attrs:{option:t.suggest},on:{select:t.useSuggest}}),n("button",{staticClass:"submit",on:{click:function(e){return t.submit(t.text)}}})],1)},G=[],H=(n("4634"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.status?n("div",{staticClass:"select-list"},t._l(t.option,(function(e,o){return n("div",{key:o,class:["item",t.active==o?"active":""],on:{click:function(e){return t.check(o)}}},[t._v(t._s(e.text))])})),0):t._e()])}),Q=[],X=[{text:"无选项",value:""}],K={name:"SelectList",data:function(){return{status:!1,active:0}},props:{option:{type:Array,default:X}},methods:{toggle:function(t,e){this.status=t,"number"===typeof e&&(this.active=e)},check:function(t){var e=this;this.active=t,this.$emit("select",t),this.$nextTick((function(){e.toggle(!1)}))}}},V=K,Y=(n("ccdb"),Object(w["a"])(V,H,Q,!1,null,null,null)),Z=Y.exports,tt=[{text:"百度",value:"https://www.baidu.com/s?wd="},{text:"谷歌",value:"https://www.google.com.hk/search?q="},{text:"知乎",value:"https://www.zhihu.com/search?type=content&q="},{text:"淘宝",value:"https://s.".concat(M.isMobile?"m.taobao.com/h5":"taobao.com/search","?q=")},{text:"京东",value:"https://".concat(M.isMobile?"so.m.jd.com/ware/search.action":"search.jd.com/Search","?keyword=")}],et={name:"SearchBox",data:function(){return{engine:+W.get("engine")||0,Engines:tt,suggest:[],suggestTimeOut:void 0,text:""}},computed:{suggestList:function(){return this.$refs.suggestList},enterText:function(){return this.suggest.length?this.suggest[0].text:this.text}},components:{SelectList:Z},watch:{text:function(t,e){if(e!==t){var n=t.trim();n?this.getSuggess(n):this.suggest=[]}}},methods:{getSuggess:function(t){$.getScript("".concat($.path.suggest,"?callback=setSuggess&wd=").concat(t))},useSuggest:function(t){this.submit(this.suggest[t].value)},removeSuggest:function(){var t=this;this.suggestTimeOut&&clearTimeout(this.suggestTimeOut),this.suggestTimeOut=setTimeout((function(){t.suggestList.toggle(!1)}),200)},showEngineList:function(){this.$refs.engineList.toggle(!0,this.engine)},selectEngine:function(t){this.engine=t,W.set("engine",t,365)},submit:function(t){location.href=this.Engines[this.engine].value+encodeURIComponent(t)}},mounted:function(){var t=this;window.setSuggess=function(e){var n=e.s,o=[];n.forEach((function(t,e){o.push({text:t,value:t})})),t.suggest=o,t.suggestList.toggle(!0)},setTimeout((function(){t.$refs.input.focus()}),800)}},nt=et,ot=(n("14a0"),Object(w["a"])(nt,F,G,!1,null,null,null)),it=ot.exports,st={name:"Index",data:function(){return{radius:[]}},components:{WeatherBox:J,SearchBox:it},methods:{random:function(){return Math.floor(20*Math.random())-10+50+"%"},setRadius:function(){for(var t=[],e=0;e<3;e++)t[e]={borderRadius:"".concat(this.random()," ").concat(this.random()," ").concat(this.random()," ").concat(this.random(),"/").concat(this.random()," ").concat(this.random()," ").concat(this.random()," ").concat(this.random())};this.radius=t}},mounted:function(){setInterval(this.setRadius,3e3),this.setRadius()}},at=st,rt=(n("b38a"),Object(w["a"])(at,I,B,!1,null,null,null)),ct=rt.exports;new o["a"]({render:function(t){return t(ct)}}).$mount("#app")}});