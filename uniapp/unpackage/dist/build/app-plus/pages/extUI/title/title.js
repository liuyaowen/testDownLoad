!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=588)}({0:function(t,e,i){"use strict";function n(t,e,i,n,o,a,s,r,u,l){var c,p="function"==typeof t?t.options:t;if(u){p.components||(p.components={});var f=Object.prototype.hasOwnProperty;for(var d in u)f.call(u,d)&&!f.call(p.components,d)&&(p.components[d]=u[d])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(p.mixins||(p.mixins=[])).push(l)),e&&(p.render=e,p.staticRenderFns=i,p._compiled=!0),n&&(p.functional=!0),a&&(p._scopeId="data-v-"+a),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},p._ssrRegister=c):o&&(c=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(p.functional){p._injectStyles=c;var h=p.render;p.render=function(t,e){return c.call(e),h(t,e)}}else{var _=p.beforeCreate;p.beforeCreate=_?[].concat(_,c):[c]}return{exports:t,options:p}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},104:function(t,e,i){"use strict";var n=i(418),o=i(208),a=i(0);var s=Object(a.a)(o.default,n.b,n.c,!1,null,null,"598f5dec",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(489).default,this.options.style):Object.assign(this.options.style,i(489).default)}).call(s),e.default=s.exports},11:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},17:function(t,e,i){"use strict";i.r(e);var n=i(6),o=i(3);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var s=i(0);var r=Object(s.a)(o.default,n.b,n.c,!1,null,"08332194","1ef803f2",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(18).default,this.options.style):Object.assign(this.options.style,i(18).default)}).call(r),e.default=r.exports},18:function(t,e,i){"use strict";i.r(e);var n=i(5),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},2:function(t,e,i){"use strict";i.r(e),e.default={appid:"__UNI__9C1D61F"}},205:function(t,e,i){"use strict";i.r(e);var n=i(206),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},206:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:function(){return{}},computed:{textAlign:function(){var t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end"}return t}},watch:{title:function(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted:function(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat:function(){""===this.stat&&(this.isStat=!1);var t="boolean"==typeof this.stat&&this.stat||"string"==typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}};e.default=n},207:function(t,e){t.exports={"uni-title__box":{flexDirection:"column",alignItems:"flex-start",justifyContent:"center",paddingTop:"8",paddingRight:0,paddingBottom:"8",paddingLeft:0,flex:1},"uni-title__base":{fontSize:"15",color:"#333333",fontWeight:"500"},"uni-h1":{fontSize:"20",color:"#333333",fontWeight:"bold"},"uni-h2":{fontSize:"18",color:"#333333",fontWeight:"bold"},"uni-h3":{fontSize:"16",color:"#333333",fontWeight:"bold"},"uni-h4":{fontSize:"14",color:"#333333",fontWeight:"bold"},"uni-h5":{fontSize:"12",color:"#333333",fontWeight:"bold"}}},208:function(t,e,i){"use strict";var n=i(209),o=i.n(n);e.default=o.a},209:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i(17));function o(t){return t&&t.__esModule?t:{default:t}}var a={components:{uniTitle:o(i(487)).default,uniSection:n.default},data:function(){return{title:"章节标题通常用于记录页面标题，例如商品标题、新闻标题等，当前组件会自动上报内容统计数据"}},onLoad:function(){},methods:{}};e.default=a},210:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"},"uni-text":{fontSize:"14",lineHeight:"22",color:"#333333"}}},3:function(t,e,i){"use strict";i.r(e);var n=i(4),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},418:function(t,e,i){"use strict";var n={"uni-section":i(17).default,"uni-title":i(487).default},o=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["uni-content"]},[e("view",{staticClass:["example-info"]},[e("u-text",{staticClass:["example-info-text"]},[this._v(" 章节标题，通常用于记录页面标题，使用当前组件在 uni-app 开启统计的情况下，将会自动统计页面标题 ")])]),e("uni-section",{attrs:{title:"基础用法",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-title",{attrs:{title:this.title}})],1),e("uni-section",{attrs:{title:"不同类型",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-title",{attrs:{type:"h1",title:"h1 一级标题"}}),e("uni-title",{attrs:{type:"h2",title:"h2 二级标题"}}),e("uni-title",{attrs:{type:"h3",title:"h3 三级标题"}}),e("uni-title",{attrs:{type:"h4",title:"h4 四级标题"}}),e("uni-title",{attrs:{type:"h5",title:"h5 五级标题"}})],1),e("uni-section",{attrs:{title:"改变颜色",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-title",{attrs:{type:"h1",title:"h1 一级标题",color:"#027fff"}}),e("uni-title",{attrs:{type:"h2",title:"h2 二级标题",color:"#2490ff"}}),e("uni-title",{attrs:{type:"h3",title:"h3 三级标题",color:"#439ffc"}}),e("uni-title",{attrs:{type:"h4",title:"h4 四级标题",color:"#60adfb"}}),e("uni-title",{attrs:{type:"h5",title:"h5 五级标题",color:"#7db9f7"}})],1),e("uni-section",{attrs:{title:"对齐方式",type:"line"}}),e("view",{staticClass:["example-body"]},[e("uni-title",{attrs:{type:"h1",title:"h1 左对齐",align:"left"}}),e("uni-title",{attrs:{type:"h2",title:"h2 居中",align:"center"}}),e("uni-title",{attrs:{type:"h3",title:"h3 右对齐",align:"right"}}),e("uni-title",{attrs:{type:"h4",title:"h4 居中",align:"center"}}),e("uni-title",{attrs:{type:"h5",title:"h5 左对齐",align:"left"}})],1),e("uni-section",{attrs:{title:"组合示例",type:"line"}}),e("view",{staticClass:["example-body"]},[e("view",{staticClass:["uni-box-head"]},[e("uni-title",{attrs:{type:"h1",align:"center",title:"uni-app介绍"}})],1),e("view",{staticClass:["uni-box"]},[e("uni-title",{staticClass:["h3"],attrs:{type:"h3",title:"1 框架介绍"}})],1),e("view",{staticClass:["uni-box"]},[e("uni-title",{staticClass:["h4"],attrs:{type:"h4",title:"1.1 什么是uni-app"}})],1),e("view",[e("u-text",{staticClass:["uni-text"]},[this._v("uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。DCloud公司拥有370万开发者用户，旗下uni-app有5万+案例、900款插件、50+微信/qq群，并且被阿里小程序工具内置，开发者可以放心选择。")])]),e("view",{staticClass:["uni-box"]},[e("uni-title",{staticClass:["h4"],attrs:{type:"h4",title:"1.2 开发规范"}})],1),e("view",{},[e("uni-title",{staticClass:["h5"],attrs:{type:"h5",color:"#666",title:"- 页面文件遵循 Vue 单文件组件 (SFC) 规范"}}),e("uni-title",{staticClass:["h5"],attrs:{type:"h5",color:"#666",title:"- 组件标签靠近小程序规范，详见uni-app 组件规范"}}),e("uni-title",{staticClass:["h5"],attrs:{type:"h5",color:"#666",title:"- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范"}}),e("uni-title",{staticClass:["h5"],attrs:{type:"h5",color:"#666",title:"- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期"}}),e("uni-title",{staticClass:["h5"],attrs:{type:"h5",color:"#666",title:"- 为兼容多端运行，建议使用flex布局进行开发"}})],1)])],1)])},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},454:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:["uni-title__box"],style:{"align-items":this.textAlign}},[e("u-text",{staticClass:["uni-title__base"],class:["uni-"+this.type],style:{color:this.color}},[this._v(this._s(this.title))])])},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}))},487:function(t,e,i){"use strict";i.r(e);var n=i(454),o=i(205);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var s=i(0);var r=Object(s.a)(o.default,n.b,n.c,!1,null,"30fbffd0","102d0750",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(488).default,this.options.style):Object.assign(this.options.style,i(488).default)}).call(r),e.default=r.exports},488:function(t,e,i){"use strict";i.r(e);var n=i(207),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},489:function(t,e,i){"use strict";i.r(e);var n=i(210),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},5:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"0.5",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"28rpx",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"24rpx",color:"#999999"}}},588:function(t,e,i){"use strict";i.r(e);i(7),i(11);var n=i(104);n.default.mpType="page",n.default.route="pages/extUI/title/title",n.default.el="#root",new Vue(n.default)},6:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-section"],attrs:{nvue:""}},[t.type?i("view",{staticClass:["uni-section__head"]},[i("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),i("view",{staticClass:["uni-section__content"]},[i("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}))},7:function(t,e,i){"use strict";function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e,i){return e&&u(t.prototype,e),i&&u(t,i),t}var c=i(8).version;function p(){var t="";if("n"===d()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync("__DC_STAT_UUID")}catch(e){t="__DC_UUID_VALUE"}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync("__DC_STAT_UUID",t)}catch(t){uni.setStorageSync("__DC_STAT_UUID","__DC_UUID_VALUE")}}return t}var f=function(){return parseInt((new Date).getTime()/1e3)},d=function(){return"n"},h=0,_=0,g=function(){return h=f(),"n"===d()&&uni.setStorageSync("__page__residence__time",f()),h},y=0,v=0,m=function(){var t=(new Date).getTime();return y=t,v=0,t},S=function(){var t=(new Date).getTime();return v=t,t},b=function(t){var e=0;return 0!==y&&(e=v-y),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},D=function(t){var e=getCurrentPages(),i=e[e.length-1].$vm,n=t._query,o=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===d()?i.$mp&&i.$mp.page.is+o:i.$scope&&i.$scope.route+o||i.$mp&&i.$mp.page.route+o},w=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},T=i(9).default,x=i(2).default||i(2),C=uni.getSystemInfoSync(),k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(u,t);var e,i=(e=u,function(){var t,i=a(e);if(o()){var s=a(this).constructor;t=Reflect.construct(i,arguments,s)}else t=i.apply(this,arguments);return n(this,t)});function u(){var t;return r(this,u),(t=i.call(this)).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return l(u,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new u),this.instance}}]),l(u,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,g(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,w(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,w(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(i)}}]),u}(function(){function t(){var e,i;r(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:p(),ut:d(),mpn:(i="","wx"!==d()&&"qq"!==d()||uni.canIUse("getAccountInfoSync")&&(i=uni.getAccountInfoSync().miniProgram.appId||""),i),ak:x.appid,usv:c,v:"n"===d()?plus.runtime.version:"",ch:(e="","n"===d()&&(e=plus.runtime.channel),e),cn:"",pn:"",ct:"",t:f(),tt:"",p:"android"===C.platform?"a":"i",brand:C.brand||"",md:C.model,sv:C.system.replace(/(Android|iOS)\s/,""),mpsdk:C.SDKVersion||"",mpv:C.version||"",lang:C.language,pr:C.pixelRatio,ww:C.windowWidth,wh:C.windowHeight,sw:C.screenWidth,sh:C.screenHeight}}return l(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(S(),b("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,S();var i=b();m();var n=D(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,i=D(this),n=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===d()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=T&&T.pages[n]&&T.pages[n].titleNView&&T.pages[n].titleNView.titleText||T&&T.pages[n]&&T.pages[n].navigationBarTitleText||"",this.__licationShow)return m(),this.__licationShow=!1,void(this._lastPageRoute=i);if(S(),this._lastPageRoute=i,b("page").overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}m()}},{key:"_pageHide",value:function(){if(!this.__licationHide){S();var t=b("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,i,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=f(),this.statData.sc=function(t){var e=d(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),i=0,e?i=e:(i=f(),uni.setStorageSync("First__Visit__Time",i),uni.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",f()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===d()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,o=void 0===n?"":n,a=this._lastPageRoute,s={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:i,e_v:"object"==typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:f(),p:this.statData.p};this.request(s)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;x.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,n=f(),o=this._navigationBarTitle;t.ttn=o.page,t.ttpj=o.config,t.ttc=o.report;var a=this._reportingRequestData;if("n"===d()&&(a=uni.getStorageSync("__UNI__STAT__DATA")||{}),a[t.lt]||(a[t.lt]=[]),a[t.lt].push(t),"n"===d()&&uni.setStorageSync("__UNI__STAT__DATA",a),_=f(),"n"===d()&&(h=uni.getStorageSync("__page__residence__time")),!(_-h<10)||e){var s=this._reportingRequestData;"n"===d()&&(s=uni.getStorageSync("__UNI__STAT__DATA")),g();var r=[],u=[],l=[],p=function(t){s[t].forEach((function(e){var i=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)}(e);0===t?r.push(i):3===t?l.push(i):u.push(i)}))};for(var y in s)p(y);r.push.apply(r,u.concat(l));var v={usv:c,t:n,requests:JSON.stringify(r)};this._reportingRequestData={},"n"===d()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==d()||"a"!==this.statData.p?this._sendRequest(v):setTimeout((function(){i._sendRequest(v)}),200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=function(t){var e=Object.keys(t).sort(),i={},n="";for(var o in e)i[e[o]]=t[e[o]],n+=e[o]+"="+t[e[o]]+"&";return{sign:"",options:n.substr(0,n.length-1)}}(function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+i}},{key:"sendEvent",value:function(t,e){var i,n;(n=e,(i=t)?"string"!=typeof i?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):i.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof n&&"object"!=typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===i&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}()).getInstance(),R=!1,O={onLaunch:function(t){k.report(t,this)},onReady:function(){k.ready(this)},onLoad:function(t){if(k.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return k.interceptShare(!1),e.call(this,t)}}},onShow:function(){R=!1,k.show(this)},onHide:function(){R=!0,k.hide(this)},onUnload:function(){R?R=!1:k.hide(this)},onError:function(t){k.error(t)}};!function(){var t=i(10);(t.default||t).mixin(O),uni.report=function(t,e){k.sendEvent(t,e)}}()},8:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-261120200409001",_inBundle:!1,_integrity:"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz",_shasum:"e9daeef120f133bf3d4ca0505f5b2abed0e874a7",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"ff0877f516c1cc986cf2d7eae2bf5030c58050f9",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-261120200409001"}},9:function(t,e,i){"use strict";i.r(e),e.default={pages:{},globalStyle:{}}}});