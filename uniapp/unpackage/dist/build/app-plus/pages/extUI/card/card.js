!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=608)}({0:function(t,e,i){"use strict";function n(t,e,i,n,o,a,r,s,u,c){var l,d="function"==typeof t?t.options:t;if(u){d.components||(d.components={});var p=Object.prototype.hasOwnProperty;for(var f in u)p.call(u,f)&&!p.call(d.components,f)&&(d.components[f]=u[f])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId="data-v-"+a),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var _=d.render;d.render=function(t,e){return l.call(e),_(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:d}}i.d(e,"a",(function(){return n}))},1:function(t,e){t.exports={}},10:function(t,e){t.exports=Vue},11:function(t,e,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(12).default,Vue.prototype.__$appStyle__)},12:function(t,e,i){"use strict";i.r(e);var n=i(1),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},121:function(t,e,i){"use strict";var n=i(425),o=i(308),a=i(0);var r=Object(a.a)(o.default,n.b,n.c,!1,null,null,"d7a06ac4",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(537).default,this.options.style):Object.assign(this.options.style,i(537).default)}).call(r),e.default=r.exports},17:function(t,e,i){"use strict";i.r(e);var n=i(6),o=i(3);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var r=i(0);var s=Object(r.a)(o.default,n.b,n.c,!1,null,"08332194","1ef803f2",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(18).default,this.options.style):Object.assign(this.options.style,i(18).default)}).call(s),e.default=s.exports},18:function(t,e,i){"use strict";i.r(e);var n=i(5),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},2:function(t,e,i){"use strict";i.r(e),e.default={appid:"__UNI__9C1D61F"}},3:function(t,e,i){"use strict";i.r(e);var n=i(4),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},305:function(t,e,i){"use strict";i.r(e);var n=i(306),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},306:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",props:{title:{type:String,default:""},extra:{type:String,default:""},note:{type:String,default:""},thumbnail:{type:String,default:""},mode:{type:String,default:"basic"},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},307:function(t,e){t.exports={"uni-card":{marginTop:"12",marginRight:"12",marginBottom:"12",marginLeft:"12",backgroundColor:"#ffffff",position:"relative",flexDirection:"column",borderColor:"#e5e5e5",borderStyle:"solid",borderWidth:"1",borderRadius:"3",overflow:"hidden"},"uni-card__thumbnailimage":{position:"relative",flexDirection:"column",justifyContent:"center",height:"150",overflow:"hidden"},"uni-card__thumbnailimage-box":{flex:1,flexDirection:"row",overflow:"hidden"},"uni-card__thumbnailimage-image":{flex:1},"uni-card__thumbnailimage-title":{position:"absolute",bottom:0,left:0,right:0,flexDirection:"row",paddingTop:"16rpx",paddingRight:"24rpx",paddingBottom:"16rpx",paddingLeft:"24rpx",backgroundColor:"rgba(0,0,0,0.4)"},"uni-card__thumbnailimage-title-text":{flex:1,fontSize:"28rpx",color:"#ffffff"},"uni-card__title":{flexDirection:"row",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10",borderBottomColor:"#F5F5F5",borderBottomStyle:"solid",borderBottomWidth:"1"},"uni-card__title-header":{width:"40",height:"40",overflow:"hidden",borderRadius:"5"},"uni-card__title-header-image":{width:"40",height:"40"},"uni-card__title-content":{flexDirection:"column",justifyContent:"center",paddingLeft:"10",height:"40",overflow:"hidden"},"uni-card__title-content-title":{fontSize:"28rpx",lineHeight:"22",lines:1},"uni-card__title-content-extra":{fontSize:"26rpx",lineHeight:"35rpx",color:"#999999"},"uni-card__header":{position:"relative",flexDirection:"row",paddingTop:"24rpx",paddingRight:"24rpx",paddingBottom:"24rpx",paddingLeft:"24rpx",alignItems:"center",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"1"},"uni-card__header-title":{flexDirection:"row",marginRight:"16rpx",justifyContent:"flex-start",alignItems:"center"},"uni-card__header-title-text":{fontSize:"32rpx",flex:1,lines:1,overflow:"hidden",textOverflow:"ellipsis"},"uni-card__header-extra-img":{height:"40rpx",width:"40rpx",marginRight:"16rpx"},"uni-card__header-extra-text":{flex:1,marginLeft:"16rpx",fontSize:"28rpx",textAlign:"right",color:"#999999"},"uni-card__content":{color:"#333333"},"uni-card__content--pd":{paddingTop:"24rpx",paddingRight:"24rpx",paddingBottom:"24rpx",paddingLeft:"24rpx"},"uni-card__content-extra":{fontSize:"28rpx",paddingBottom:"10",color:"#999999"},"uni-card__footer":{justifyContent:"space-between",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10",borderTopColor:"#e5e5e5",borderTopStyle:"solid",borderTopWidth:"1"},"uni-card__footer-text":{color:"#999999",fontSize:"28rpx"},"uni-card--shadow":{borderColor:"#e5e5e5",borderStyle:"solid",borderWidth:"1"},"uni-card--full":{marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,borderRadius:0}}},308:function(t,e,i){"use strict";var n=i(309),o=i.n(n);e.default=o.a},309:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i(17)),o=a(i(535));function a(t){return t&&t.__esModule?t:{default:t}}var r={components:{uniSection:n.default,uniCard:o.default},data:function(){return{list:[{id:0,title:"",content:"这是一个基础卡片示例，内容较少，此示例不带边框阴影。",shadow:!1,note:"",extra:"",thumbnail:""},{id:1,title:"标题文字",content:"这是一个基础卡片示例，内容比较多，内容样式可自定义，卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、时间等，此示例带边框阴影。",shadow:!0,note:"",extra:"额外信息",thumbnail:""},{id:2,title:"标题文字",content:"这是一个带标题，带底部选项按钮的基础卡片示例，内容样式可自定义。",shadow:!0,note:"Tips",extra:"额外信息",thumbnail:""},{id:3,title:"标题文字",content:"这是一个完整配置的基础卡片示例。内容样式可自定义。",shadow:!0,note:"Tips",extra:"额外信息",thumbnail:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}],Tips:["喜欢","评论","分享"]}},methods:{clickCard:function(){uni.showToast({title:"点击卡片",icon:"none"})},footerClick:function(t){uni.showToast({title:t,icon:"none"})}}};e.default=r},310:function(t,e){t.exports={example:{paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15"},"example-info":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",color:"#3b4144",backgroundColor:"#ffffff",fontSize:"14",lineHeight:"20"},"example-info-text":{fontSize:"14",lineHeight:"20",color:"#3b4144"},"example-body":{flexDirection:"column",paddingTop:"20rpx",paddingRight:0,paddingBottom:0,paddingLeft:0,backgroundColor:"#ffffff"},"word-btn-white":{fontSize:"18",color:"#FFFFFF"},"word-btn":{flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6",height:"48",marginTop:"15",marginRight:"15",marginBottom:"15",marginLeft:"15",backgroundColor:"#007AFF"},"word-btn--hover":{backgroundColor:"#4ca2ff"},"image-box":{height:"350rpx",overflow:"hidden"},image:{flex:1},"content-box":{paddingTop:"20rpx"},"content-box-text":{fontSize:"14",lineHeight:"20"},"footer-box":{justifyContent:"space-between",flexDirection:"row"},"footer-box__item":{alignItems:"center",paddingTop:"10rpx",paddingRight:0,paddingBottom:"10rpx",paddingLeft:0,fontSize:"30rpx",color:"#666666"}}},4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},425:function(t,e,i){"use strict";var n={"uni-section":i(17).default,"uni-card":i(535).default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[i("view",[i("u-text",{staticClass:["example-info"]},[t._v("卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。")]),i("uni-section",{attrs:{title:"基础卡片",type:"line"}}),i("view",{staticClass:["example-body"]},t._l(t.list,(function(e){return i("view",{key:e.id,staticClass:["example-box"]},[i("uni-card",{attrs:{title:e.title,isShadow:e.shadow,note:e.note,extra:e.extra,thumbnail:e.thumbnail},on:{click:t.clickCard}},[i("u-text",{staticClass:["content-box-text"]},[t._v(t._s(e.content))])])],1)})),0),i("uni-section",{attrs:{title:"图文卡片",type:"line"}}),i("view",{staticClass:["example-body"]},[i("view",{staticClass:["example-box"]},[i("uni-card",{attrs:{isShadow:!0,title:"uni-app 框架",mode:"style",thumbnail:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",extra:"DCloud 2019-05-20 12:32:19",note:"true"},on:{click:t.clickCard}},[i("u-text",{staticClass:["content-box-text"]},[t._v("uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可编译到iOS、Android、H5、以及各种小程序等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架")]),i("block",{attrs:{slot:"footer"},slot:"footer"},[i("view",{staticClass:["footer-box"]},[i("view",{on:{click:function(e){t.footerClick("喜欢")}}},[i("u-text",{staticClass:["footer-box__item"]},[t._v(" 喜欢")])]),i("view",{on:{click:function(e){t.footerClick("评论")}}},[i("u-text",{staticClass:["footer-box__item"]},[t._v(" 评论")])]),i("view",{on:{click:function(e){t.footerClick("分享")}}},[i("u-text",{staticClass:["footer-box__item"]},[t._v(" 收藏")])])])])],1)],1),i("view",{staticClass:["example-box"]},[i("uni-card",{attrs:{isShadow:!0,title:"DCloud",mode:"title",thumbnail:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png",extra:"技术没有上限",note:"true"},on:{click:t.clickCard}},[i("view",[i("view",{staticClass:["image-box"]},[i("u-image",{staticClass:["image"],attrs:{mode:"aspectFill",src:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"}})],1),i("view",{staticClass:["content-box"]},[i("u-text",{staticClass:["content-box-text"]},[t._v("uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可编译到iOS、Android、H5、以及各种小程序等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。")])])]),i("template",{slot:"footer"},[i("view",{staticClass:["footer-box"]},[i("view",{on:{click:function(e){t.footerClick("喜欢")}}},[i("u-text",{staticClass:["footer-box__item"]},[t._v(" 喜欢")])]),i("view",{on:{click:function(e){t.footerClick("评论")}}},[i("u-text",{staticClass:["footer-box__item"]},[t._v(" 评论")])]),i("view",{on:{click:function(e){t.footerClick("分享")}}},[i("u-text",{staticClass:["footer-box__item"]},[t._v(" 收藏")])])])])],2)],1)])],1)])},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}))},431:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-card"],class:{"uni-card--full":!0===t.isFull||"true"===t.isFull,"uni-card--shadow":!0===t.isShadow||"true"===t.isShadow},on:{click:t.onClick}},["style"===t.mode?i("view",{staticClass:["uni-card__thumbnailimage"]},[i("view",{staticClass:["uni-card__thumbnailimage-box"]},[i("u-image",{staticClass:["uni-card__thumbnailimage-image"],attrs:{src:t.thumbnail,mode:"aspectFill"}})],1),t.title?i("view",{staticClass:["uni-card__thumbnailimage-title"]},[i("u-text",{staticClass:["uni-card__thumbnailimage-title-text"]},[t._v(t._s(t.title))])]):t._e()]):t._e(),"title"===t.mode?i("view",{staticClass:["uni-card__title"]},[i("view",{staticClass:["uni-card__title-header"]},[i("u-image",{staticClass:["uni-card__title-header-image"],attrs:{src:t.thumbnail,mode:"scaleToFill"}})],1),i("view",{staticClass:["uni-card__title-content"]},[i("u-text",{staticClass:["uni-card__title-content-title"]},[t._v(t._s(t.title))]),i("u-text",{staticClass:["uni-card__title-content-extra"]},[t._v(t._s(t.extra))])])]):t._e(),"basic"===t.mode&&t.title?i("view",{staticClass:["uni-card__header"]},[t.thumbnail?i("view",{staticClass:["uni-card__header-extra-img-view"]},[i("u-image",{staticClass:["uni-card__header-extra-img"],attrs:{src:t.thumbnail}})],1):t._e(),i("u-text",{staticClass:["uni-card__header-title-text"]},[t._v(t._s(t.title))]),t.extra?i("u-text",{staticClass:["uni-card__header-extra-text"]},[t._v(t._s(t.extra))]):t._e()]):t._e(),i("view",{staticClass:["uni-card__content","uni-card__content--pd"]},["style"===t.mode&&t.extra?i("view",{},[i("u-text",{staticClass:["uni-card__content-extra"]},[t._v(t._s(t.extra))])]):t._e(),t._t("default")],2),t.note?i("view",{staticClass:["uni-card__footer"]},[t._t("footer",[i("u-text",{staticClass:["uni-card__footer-text"]},[t._v(t._s(t.note))])])],2):t._e()])},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}))},5:function(t,e){t.exports={"uni-section":{position:"relative",marginTop:"10",flexDirection:"row",alignItems:"center",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",height:"50",backgroundColor:"#f8f8f8",borderBottomColor:"#e5e5e5",borderBottomStyle:"solid",borderBottomWidth:"0.5",fontWeight:"normal"},"uni-section__head":{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10"},line:{height:"15",backgroundColor:"#c0c0c0",borderRadius:"5",width:"3"},circle:{width:"8",height:"8",borderTopRightRadius:"50",borderTopLeftRadius:"50",borderBottomLeftRadius:"50",borderBottomRightRadius:"50",backgroundColor:"#c0c0c0"},"uni-section__content":{flex:1,color:"#333333"},"uni-section__content-title":{fontSize:"28rpx",color:"#333333"},distraction:{flexDirection:"row",alignItems:"center"},"uni-section__content-sub":{fontSize:"24rpx",color:"#999999"}}},535:function(t,e,i){"use strict";i.r(e);var n=i(431),o=i(305);for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var r=i(0);var s=Object(r.a)(o.default,n.b,n.c,!1,null,"0d359717","fe090600",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(536).default,this.options.style):Object.assign(this.options.style,i(536).default)}).call(s),e.default=s.exports},536:function(t,e,i){"use strict";i.r(e);var n=i(307),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},537:function(t,e,i){"use strict";i.r(e);var n=i(310),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e.default=o.a},6:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:["uni-section"],attrs:{nvue:""}},[t.type?i("view",{staticClass:["uni-section__head"]},[i("view",{staticClass:["uni-section__head-tag"],class:t.type})]):t._e(),i("view",{staticClass:["uni-section__content"]},[i("u-text",{staticClass:["uni-section__content-title"],class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?i("u-text",{staticClass:["uni-section__content-sub"]},[t._v(t._s(t.subTitle))]):t._e()]),t._t("default")],2)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}))},608:function(t,e,i){"use strict";i.r(e);i(7),i(11);var n=i(121);n.default.mpType="page",n.default.route="pages/extUI/card/card",n.default.el="#root",new Vue(n.default)},7:function(t,e,i){"use strict";function n(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,i){return e&&u(t.prototype,e),i&&u(t,i),t}var l=i(8).version;function d(){var t="";if("n"===f()){try{t=plus.runtime.getDCloudId()}catch(e){t=""}return t}try{t=uni.getStorageSync("__DC_STAT_UUID")}catch(e){t="__DC_UUID_VALUE"}if(!t){t=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync("__DC_STAT_UUID",t)}catch(t){uni.setStorageSync("__DC_STAT_UUID","__DC_UUID_VALUE")}}return t}var p=function(){return parseInt((new Date).getTime()/1e3)},f=function(){return"n"},_=0,h=0,g=function(){return _=p(),"n"===f()&&uni.setStorageSync("__page__residence__time",p()),_},v=0,m=0,y=function(){var t=(new Date).getTime();return v=t,m=0,t},b=function(){var t=(new Date).getTime();return m=t,t},x=function(t){var e=0;return 0!==v&&(e=m-v),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},S=function(t){var e=getCurrentPages(),i=e[e.length-1].$vm,n=t._query,o=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===f()?i.$mp&&i.$mp.page.is+o:i.$scope&&i.$scope.route+o||i.$mp&&i.$mp.page.route+o},w=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},C=i(9).default,D=i(2).default||i(2),T=uni.getSystemInfoSync(),k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(u,t);var e,i=(e=u,function(){var t,i=a(e);if(o()){var r=a(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return n(this,t)});function u(){var t;return s(this,u),(t=i.call(this)).instance=null,"function"==typeof uni.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return c(u,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new u),this.instance}}]),c(u,[{key:"addInterceptorInit",value:function(){var t=this;uni.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;uni.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var e=this;t?uni.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var t=this;uni.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,g(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,w(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,w(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(i)}}]),u}(function(){function t(){var e,i;s(this,t),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:d(),ut:f(),mpn:(i="","wx"!==f()&&"qq"!==f()||uni.canIUse("getAccountInfoSync")&&(i=uni.getAccountInfoSync().miniProgram.appId||""),i),ak:D.appid,usv:l,v:"n"===f()?plus.runtime.version:"",ch:(e="","n"===f()&&(e=plus.runtime.channel),e),cn:"",pn:"",ct:"",t:p(),tt:"",p:"android"===T.platform?"a":"i",brand:T.brand||"",md:T.model,sv:T.system.replace(/(Android|iOS)\s/,""),mpsdk:T.SDKVersion||"",mpv:T.version||"",lang:T.language,pr:T.pixelRatio,ww:T.windowWidth,wh:T.windowHeight,sw:T.screenWidth,sh:T.screenHeight}}return c(t,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(b(),x("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,b();var i=x();y();var n=S(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,i=S(this),n=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===f()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=C&&C.pages[n]&&C.pages[n].titleNView&&C.pages[n].titleNView.titleText||C&&C.pages[n]&&C.pages[n].navigationBarTitleText||"",this.__licationShow)return y(),this.__licationShow=!1,void(this._lastPageRoute=i);if(b(),this._lastPageRoute=i,x("page").overtime){var o={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(o)}y()}},{key:"_pageHide",value:function(){if(!this.__licationHide){b();var t=x("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e,i,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=p(),this.statData.sc=function(t){var e=f(),i="";return t||("wx"===e&&(i=uni.getLaunchOptionsSync().scene),i)}(t.scene),this.statData.fvts=(e=uni.getStorageSync("First__Visit__Time"),i=0,e?i=e:(i=p(),uni.setStorageSync("First__Visit__Time",i),uni.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var t=uni.getStorageSync("Last__Visit__Time"),e=0;return e=t||"",uni.setStorageSync("Last__Visit__Time",p()),e}(),this.statData.tvc=function(){var t=uni.getStorageSync("Total__Visit__Count"),e=1;return t&&(e=t,e++),uni.setStorageSync("Total__Visit__Count",e),e}(),"n"===f()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:p(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,o=void 0===n?"":n,a=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:i,e_v:"object"==typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:p(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var t=this;uni.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,(function(e){t.statData.v=e.version||"",t.getNetworkInfo()}))}},{key:"getLocation",value:function(){var t=this;D.getLocation?uni.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,e){var i=this,n=p(),o=this._navigationBarTitle;t.ttn=o.page,t.ttpj=o.config,t.ttc=o.report;var a=this._reportingRequestData;if("n"===f()&&(a=uni.getStorageSync("__UNI__STAT__DATA")||{}),a[t.lt]||(a[t.lt]=[]),a[t.lt].push(t),"n"===f()&&uni.setStorageSync("__UNI__STAT__DATA",a),h=p(),"n"===f()&&(_=uni.getStorageSync("__page__residence__time")),!(h-_<10)||e){var r=this._reportingRequestData;"n"===f()&&(r=uni.getStorageSync("__UNI__STAT__DATA")),g();var s=[],u=[],c=[],d=function(t){r[t].forEach((function(e){var i=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)}(e);0===t?s.push(i):3===t?c.push(i):u.push(i)}))};for(var v in r)d(v);s.push.apply(s,u.concat(c));var m={usv:l,t:n,requests:JSON.stringify(s)};this._reportingRequestData={},"n"===f()&&uni.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==f()||"a"!==this.statData.p?this._sendRequest(m):setTimeout((function(){i._sendRequest(m)}),200):this.imageRequest(m)}}},{key:"_sendRequest",value:function(t){var e=this;uni.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(i){++e._retry<3&&setTimeout((function(){e._sendRequest(t)}),1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=function(t){var e=Object.keys(t).sort(),i={},n="";for(var o in e)i[e[o]]=t[e[o]],n+=e[o]+"="+t[e[o]]+"&";return{sign:"",options:n.substr(0,n.length-1)}}(function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+i}},{key:"sendEvent",value:function(t,e){var i,n;(n=e,(i=t)?"string"!=typeof i?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):i.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof n&&"object"!=typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===i&&"string"!=typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),t}()).getInstance(),R=!1,j={onLaunch:function(t){k.report(t,this)},onReady:function(){k.ready(this)},onLoad:function(t){if(k.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return k.interceptShare(!1),e.call(this,t)}}},onShow:function(){R=!1,k.show(this)},onHide:function(){R=!0,k.hide(this)},onUnload:function(){R?R=!1:k.hide(this)},onError:function(t){k.error(t)}};!function(){var t=i(10);(t.default||t).mixin(j),uni.report=function(t,e){k.sendEvent(t,e)}}()},8:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-261120200409001",_inBundle:!1,_integrity:"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz",_shasum:"e9daeef120f133bf3d4ca0505f5b2abed0e874a7",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"ff0877f516c1cc986cf2d7eae2bf5030c58050f9",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-261120200409001"}},9:function(t,e,i){"use strict";i.r(e),e.default={pages:{},globalStyle:{}}}});