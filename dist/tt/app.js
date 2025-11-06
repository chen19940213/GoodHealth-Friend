require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@hb/wisdom-config-sdk/lib/client/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@hb/wisdom-config-sdk/lib/client/index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var window = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/index.js")["window"];
!function(t,e){ true?module.exports=e():0}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=function(t,e){try{return t()}catch(t){return e}};var r=function(){return(r=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},i=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function u(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}s((o=o.apply(t,e||[])).next())}))},u=function(t,e){var n,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=u.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},c={project:"",fallback:null,fromCache:!0},s=function(){function t(t){this.options=Object.assign({},t),this.cache={}}return t.prototype.requestProject=function(t,e){var n,i,u=this;void 0===e&&(e="default");var c=function(t,e,n,o){return void 0===n&&(n="default"),void 0===o&&(o="pro"),"https://assets.51downapp.cn/wisdom-config/v1/"+o+"/"+t+"/"+e+"/"+n+"/index.json"}(t,this.options.env,this.options.func||"default",this.options.secretEnv||"pro");return this.cache[t]?this.cache[t][e]||(this.cache[t][e]=Promise.resolve({})):this.cache[t]=((n={})[e]=Promise.resolve({}),n),Object.assign(this.cache[t],r({},this.cache[t]||{}),((i={})[e]=this.options.request(c,this.options.timeOut).then((function(t){return t&&"string"==typeof t?o((function(){return JSON.parse(t)}),t):t})).catch((function(t){return u.log(t&&t.message?t.message:t,"error"),null})).then((function(e){return"object"!==Object.prototype.toString.call(e).slice(8,-1).toLowerCase()&&u.log(t+" 配置的内容不合法"),u.log("请求"+t+"配置成功: "+JSON.stringify(e)),e})),i)),this.cache[t][e]},t.prototype.setConfig=function(t){Object.assign(this.options,t),this.cache={}},t.prototype.deriveInfo=function(t){if(!t)return null;var e=t.split(".").filter((function(t){return t}));return 1===e.length?this.options.project?{project:this.options.project,func:"default",field:e[0]}:null:2===e.length?{project:e[0],func:"default",field:e[1]}:3===e.length?{project:e[0],func:e[1],field:e[2]}:null},t.prototype.get=function(t,e,n){return void 0===n&&(n={fromCache:!0}),i(this,void 0,void 0,(function(){var r,i,c,s,a,l,f=this;return u(this,(function(u){return(r=this.deriveInfo(t))?(i=r.project,c=r.func,s=r.field,a=n.fromCache,l=o((function(){return f.cache[i][c]}),null),a&&l||this.requestProject(i),o((function(){return!!f.cache[i][c]}),!1)?[2,this.cache[i][c].then((function(t){return o((function(){if(!t||!t.value)return f.log("获取项目"+i+"下字段"+s+"值失败，项目数据结构错误，请在后台检查一致性，返回fallback: "+e),e;var n=t.value[s],o=(n||{}).value;return void 0===n||void 0===o?(f.log("获取项目"+i+"下字段"+s+"值失败，返回fallback: "+e),e):(f.log("获取项目"+i+"下字段"+s+"值成功: "+o),o)}),e)}))]:(this.log(i+"获取失败，返回fallback: "+e),[2,e])):(this.log("信息不全","error"),[2,e])}))}))},t.prototype.getAll=function(t){return i(this,void 0,void 0,(function(){var e,n,o;return u(this,(function(r){switch(r.label){case 0:return(e=Object.assign(c,{project:this.options.project},t||{})).project?e.fromCache&&this.cache[e.project]&&this.cache[e.project].default?[2,this.cache[e.project].default]:[4,this.requestProject(e.project)]:(this.log("getAll 未指定项目名"),[2,e.fallback||null]);case 1:return(n=r.sent())&&(o=n.value)?[2,Object.keys(o).reduce((function(t,e){return t[e]=o[e].value,t}),{})]:[2,null]}}))}))},t.prototype.log=function(t,e){void 0===e&&(e="log"),this.options.log&&console[e]("[Config SDK]: "+t)},t}()},,function(t,e,n){"use strict";n.r(e);var o,r=n(0),i=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),u={request:function(t,e){return new Promise((function(n,o){var r=3e4;if(e&&/^[1-9]\d*$/.test(String(e))&&e<6e5&&(r=e),window&&"undefined"!=typeof XMLHttpRequest){var i=new XMLHttpRequest;i.open("GET",t),i.timeout=r,i.onloadend=function(){i.status>=200&&i.status<300||304===i.status?n(JSON.parse(i.response)):o(null)},i.onabort=o,i.ontimeout=o,i.onerror=o,i.setRequestHeader("Content-Type","application/json; charset=UTF-8"),i.send()}else"undefined"!=typeof my&&my.request&&my.canIUse&&my.canIUse("request")?my.request({url:t,method:"GET",timeout:r,success:function(t){return n(t.data)},headers:{"Content-Type":"application/json; charset=utf-8"},fail:o}):"undefined"!=typeof wx&&wx.request&&wx.canIUse&&wx.canIUse("request")?wx.request({url:t,method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"},success:function(t){return n(t.data)},fail:o}):o(null)}))},env:"pro"},c=function(t){function e(e){return t.call(this,Object.assign({},u,e||{}))||this}return i(e,t),e}(r.a);e.default=c}])}));

/***/ }),

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _models_appModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/appModel */ "./src/models/appModel.ts");
/* harmony import */ var _common_native__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/common/native */ "./src/common/native.ts");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Ubt/index.js");
/* harmony import */ var _common_fusion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/fusion */ "./src/common/fusion.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













// 导出原始的 APM, PageT

var _Ubt$exports = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_5__.Ubt.exports(),
  APM = _Ubt$exports.APM,
  PageT = _Ubt$exports.PageT;
// 配置页面打开时间
APM.pageStartTime();
// 执行 PageT
PageT((_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default()), _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance);
// Fusion 初始化
_common_fusion__WEBPACK_IMPORTED_MODULE_3__["default"].init();
var App = /*#__PURE__*/function (_Component) {
  function App() {
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, App);
    return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, App, arguments);
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(App, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(App, [{
    key: "onLaunch",
    value: function onLaunch(options) {
      // 版本更新检测
      _models_appModel__WEBPACK_IMPORTED_MODULE_2__["default"].checkAppUpdate();
      // 初始化
      _models_appModel__WEBPACK_IMPORTED_MODULE_2__["default"].init(options);
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow(options) {
      if (_common_native__WEBPACK_IMPORTED_MODULE_10__["default"].IS_WEAPP) {
        _models_appModel__WEBPACK_IMPORTED_MODULE_2__["default"].setScene(options);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(mobx_react__WEBPACK_IMPORTED_MODULE_11__.Provider, {
        children: this.props.children
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_plugin_platform_tt_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-tt/dist/runtime */ "./node_modules/@tarojs/plugin-platform-tt/dist/runtime.js");
/* harmony import */ var _tarojs_plugin_inject_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-inject/dist/runtime */ "./node_modules/@tarojs/plugin-inject/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/bom/window.js");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "./node_modules/@tarojs/plugin-framework-react/dist/runtime.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !!../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./app.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");












var config = {"pages":["pages/index/index","pages/my/my","pages/identification/identification","pages/camera/camera","pages/appraisal/appraisal","pages/result/result","pages/settings/settings","pages/profile/profile","pages/nickname-edit/nickname-edit","pages/login/login","pages/about/about"],"subPackages":[{"root":"pages/cathouse","pages":["cathouse-detail/cathouse-detail"]},{"root":"pages/webview","pages":["webview"]}],"tabBar":{"list":[{"iconPath":"./assets/tabs/homepage.png","selectedIconPath":"./assets/tabs/homepage_selected.png","pagePath":"pages/index/index","text":"首页"},{"iconPath":"./assets/tabs/my.png","selectedIconPath":"./assets/tabs/my_selected.png","pagePath":"pages/my/my","text":"我的"}],"color":"#333333","selectedColor":"#000000","backgroundColor":"#fff","borderStyle":"black"},"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"哈啰","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_6__.taroWindowProvider.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_7__.createReactApp)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], react__WEBPACK_IMPORTED_MODULE_4__, react_dom__WEBPACK_IMPORTED_MODULE_5__["default"], config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.initPxTransform)({
  designWidth: 750,
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ }),

/***/ "./src/common/fusion.tsx":
/*!*******************************!*\
  !*** ./src/common/fusion.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Ubt/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Http/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageSkeleton/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/env */ "./src/common/env.ts");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/app.const */ "./src/constants/app.const.ts");
/* harmony import */ var _models_appModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/appModel */ "./src/models/appModel.ts");
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/events */ "./src/common/events.ts");
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");












var mobileInfo = {};
var getMobileInfo = function getMobileInfo() {
  if (Object.keys(mobileInfo).length) {
    return mobileInfo;
  }
  try {
    var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSystemInfoSync(),
      model = _Taro$getSystemInfoSy.model,
      system = _Taro$getSystemInfoSy.system,
      platform = _Taro$getSystemInfoSy.platform,
      version = _Taro$getSystemInfoSy.version;
    mobileInfo = {
      mobileVersion: version || 'UNKNOW',
      mobileModel: model || 'UNKNOW',
      mobileSystem: system || 'UNKNOW',
      systemPlatform: platform || 'UNKNOW'
    };
    return mobileInfo;
  } catch (_unused) {
    return {
      mobileVersion: 'UNKNOW',
      mobileModel: 'UNKNOW',
      mobileSystem: 'UNKNOW',
      systemPlatform: 'UNKNOW'
    };
  }
};
var getHttpBaseParams = function getHttpBaseParams() {
  var scene = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].scene,
    traceId = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].traceId;
  var httpBaseParams = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
    version: _common_env__WEBPACK_IMPORTED_MODULE_1__["default"].appVersion,
    appName: _common_env__WEBPACK_IMPORTED_MODULE_1__["default"].appName,
    $scene: scene,
    $traceId: traceId,
    systemCode: _constants_app_const__WEBPACK_IMPORTED_MODULE_2__["default"].SYSTEM_CODE
  }, getMobileInfo()), _common_env__WEBPACK_IMPORTED_MODULE_1__["default"].codeEnv !== 'pro' ? {
    __sysTag: _common_env__WEBPACK_IMPORTED_MODULE_1__["default"].codeEnvTag
  } : {});
  return httpBaseParams;
};
var Fusion = /*#__PURE__*/function () {
  function Fusion() {
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Fusion);
  }
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Fusion, null, [{
    key: "initUbt",
    value:
    /**
     * 初始化Ubt
     */
    function initUbt() {
      var appName = _common_env__WEBPACK_IMPORTED_MODULE_1__["default"].appName,
        appVersion = _common_env__WEBPACK_IMPORTED_MODULE_1__["default"].appVersion,
        codeEnv = _common_env__WEBPACK_IMPORTED_MODULE_1__["default"].codeEnv;
      var bindUbtData = /*#__PURE__*/function () {
        var _ref = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee() {
          var _yield$loginModel$get, guid, _yield$appModel$getLo, _latitude, _longitude, _Taro$getSystemInfoSy2, platform, _deviceModel, _Taro$getSystemInfoSy3, _version, _osVersion, _screenHeight, _screenWidth, _manufacturer, _language;
          return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                _context.n = 1;
                return _models_loginModel__WEBPACK_IMPORTED_MODULE_5__["default"].getLoginResult();
              case 1:
                _yield$loginModel$get = _context.v;
                guid = _yield$loginModel$get.guid;
                _context.n = 2;
                return _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].getLocation({
                  fromCache: true
                });
              case 2:
                _yield$appModel$getLo = _context.v;
                _latitude = _yield$appModel$getLo.latitude;
                _longitude = _yield$appModel$getLo.longitude;
                _Taro$getSystemInfoSy2 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSystemInfoSync(), platform = _Taro$getSystemInfoSy2.platform, _deviceModel = _Taro$getSystemInfoSy2.model, _Taro$getSystemInfoSy3 = _Taro$getSystemInfoSy2.version, _version = _Taro$getSystemInfoSy3 === void 0 ? '' : _Taro$getSystemInfoSy3, _osVersion = _Taro$getSystemInfoSy2.system, _screenHeight = _Taro$getSystemInfoSy2.windowHeight, _screenWidth = _Taro$getSystemInfoSy2.windowWidth, _manufacturer = _Taro$getSystemInfoSy2.brand, _language = _Taro$getSystemInfoSy2.language;
                _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_11__.Ubt.bindData({
                  appName: appName,
                  releaseVersion: appVersion,
                  appVersion: appVersion,
                  latitude: function latitude() {
                    return _latitude;
                  },
                  longitude: function longitude() {
                    return _longitude;
                  },
                  cityCode: function cityCode() {
                    return '-1';
                  },
                  cityName: function cityName() {
                    return '-1';
                  },
                  adCode: function adCode() {
                    return '-1';
                  },
                  userGuid: function userGuid() {
                    return guid;
                  },
                  os: function os() {
                    return platform;
                  },
                  deviceModel: function deviceModel() {
                    return _deviceModel;
                  },
                  manufacturer: function manufacturer() {
                    return _manufacturer;
                  },
                  version: function version() {
                    return _version;
                  },
                  osVersion: function osVersion() {
                    return _osVersion;
                  },
                  screenHeight: function screenHeight() {
                    return _screenHeight;
                  },
                  screenWidth: function screenWidth() {
                    return _screenWidth;
                  },
                  language: function language() {
                    return _language;
                  }
                });
                return _context.a(2, guid);
            }
          }, _callee);
        }));
        return function bindUbtData() {
          return _ref.apply(this, arguments);
        };
      }();
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_11__.Ubt.config({
        debug: codeEnv !== 'pro',
        categoryId: _constants_app_const__WEBPACK_IMPORTED_MODULE_2__["default"].CATEGORY_ID || '',
        logMaxCount: 3,
        logTimeout: 3000,
        beforePageView: function () {
          var _beforePageView = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee2(params) {
            var scene, traceId, userGuid;
            return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  scene = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].scene, traceId = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].traceId;
                  _context2.n = 1;
                  return bindUbtData();
                case 1:
                  userGuid = _context2.v;
                  return _context2.a(2, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, params), {}, {
                    businessInfo: (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, params.businessInfo), {}, {
                      scene: scene,
                      traceId: traceId,
                      userGuid: userGuid
                    })
                  }));
              }
            }, _callee2);
          }));
          function beforePageView(_x) {
            return _beforePageView.apply(this, arguments);
          }
          return beforePageView;
        }(),
        beforePageViewOut: function () {
          var _beforePageViewOut = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee3(params) {
            var scene, traceId, userGuid;
            return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context3) {
              while (1) switch (_context3.n) {
                case 0:
                  scene = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].scene, traceId = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].traceId;
                  _context3.n = 1;
                  return bindUbtData();
                case 1:
                  userGuid = _context3.v;
                  return _context3.a(2, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, params), {}, {
                    businessInfo: (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, params.businessInfo), {}, {
                      scene: scene,
                      traceId: traceId,
                      userGuid: userGuid
                    })
                  }));
              }
            }, _callee3);
          }));
          function beforePageViewOut(_x2) {
            return _beforePageViewOut.apply(this, arguments);
          }
          return beforePageViewOut;
        }(),
        beforeClickButton: function () {
          var _beforeClickButton = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee4(params) {
            var scene, traceId, userGuid;
            return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context4) {
              while (1) switch (_context4.n) {
                case 0:
                  scene = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].scene, traceId = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].traceId;
                  _context4.n = 1;
                  return bindUbtData();
                case 1:
                  userGuid = _context4.v;
                  return _context4.a(2, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, params), {}, {
                    businessInfo: (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, params.businessInfo), {}, {
                      scene: scene,
                      traceId: traceId,
                      userGuid: userGuid
                    })
                  }));
              }
            }, _callee4);
          }));
          function beforeClickButton(_x3) {
            return _beforeClickButton.apply(this, arguments);
          }
          return beforeClickButton;
        }(),
        beforeModuleExpose: function () {
          var _beforeModuleExpose = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee5(params) {
            var scene, traceId, userGuid;
            return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context5) {
              while (1) switch (_context5.n) {
                case 0:
                  scene = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].scene, traceId = _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].traceId;
                  _context5.n = 1;
                  return bindUbtData();
                case 1:
                  userGuid = _context5.v;
                  return _context5.a(2, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, params), {}, {
                    businessInfo: (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, params.businessInfo), {}, {
                      scene: scene,
                      traceId: traceId,
                      userGuid: userGuid
                    })
                  }));
              }
            }, _callee5);
          }));
          function beforeModuleExpose(_x4) {
            return _beforeModuleExpose.apply(this, arguments);
          }
          return beforeModuleExpose;
        }()
      });
    }

    /**
     * 初始化Http
     */
  }, {
    key: "initHttp",
    value: function initHttp() {
      var _Ubt$exports = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_11__.Ubt.exports(),
        APM = _Ubt$exports.APM;
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_12__.Http.config({
        baseURL: _constants_app_const__WEBPACK_IMPORTED_MODULE_2__["default"].API,
        /**
         * 附加通用业务参数
         */
        requestParams: function () {
          var _requestParams = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().m(function _callee6() {
            var _yield$loginModel$get2, token, ticket, _yield$appModel$getLo2, latitude, longitude;
            return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])().w(function (_context6) {
              while (1) switch (_context6.n) {
                case 0:
                  _context6.n = 1;
                  return _models_loginModel__WEBPACK_IMPORTED_MODULE_5__["default"].getLoginResult();
                case 1:
                  _yield$loginModel$get2 = _context6.v;
                  token = _yield$loginModel$get2.token;
                  ticket = _yield$loginModel$get2.ticket;
                  _context6.n = 2;
                  return _models_appModel__WEBPACK_IMPORTED_MODULE_3__["default"].getLocation();
                case 2:
                  _yield$appModel$getLo2 = _context6.v;
                  latitude = _yield$appModel$getLo2.latitude;
                  longitude = _yield$appModel$getLo2.longitude;
                  return _context6.a(2, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({}, getHttpBaseParams()), {}, {
                    latitude: latitude,
                    longitude: longitude,
                    ticket: ticket,
                    token: token
                  }));
              }
            }, _callee6);
          }));
          function requestParams() {
            return _requestParams.apply(this, arguments);
          }
          return requestParams;
        }(),
        timeout: 15000,
        /**
         * 请求发送前统计
         * 扁鹊上的网络分析
         */
        beforeRequest: function beforeRequest(options) {
          APM.trackHttp(options);
          return options;
        },
        /**
         * 处理业务错误码
         */
        onBizCodeError: function onBizCodeError(res) {
          // 登录态过期
          if (res.code === 103) {
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__["default"].showToast('登录态已过期，请重新登录');
            _models_loginModel__WEBPACK_IMPORTED_MODULE_5__["default"].logout();
          } else {
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__["default"].showToast(res.msg || '');
          }
        }
      });
    }

    /**
     * 初始化PageSkeleton
     */
  }, {
    key: "initPageSkeleton",
    value: function initPageSkeleton() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__.PageSkeleton.setGlobalOptions({
        // customSlotRender: (props) => {
        //   const { hideElf } = props.customProps || {};
        //   // 生产环境不渲染该逻辑
        //   if (process.env.CODE_ENV !== 'pro' || Number(process.env.IS_CI) !== 1) {
        //     // eslint-disable-next-line
        //     const Elf = require('@/components/common/Elf').default;
        //     return !hideElf && <Elf />;
        //   }
        //   return null;
        // },
        onPageUnload: function onPageUnload() {
          // 移除当前页面的登录监听器
          _common_events__WEBPACK_IMPORTED_MODULE_4__.LoginEvent.offCurrent();
        }
      });
    }

    /**
     * 初始化Native
     */
  }, {
    key: "initNative",
    value: function initNative() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__["default"].config({
        shareAppOptions: {
          shareOriginId: _constants_app_const__WEBPACK_IMPORTED_MODULE_2__["default"].MINA_ORIGIN_ID
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      Fusion.initNative();
      // Fusion.initUbt();
      Fusion.initPageSkeleton();
      Fusion.initHttp();
    }
  }]);
}(); // 注册到 Env 中
_common_env__WEBPACK_IMPORTED_MODULE_1__["default"].register(function (codeEnv) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().nextTick(function () {
    _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__["default"].setCodeEnv(codeEnv);
    Fusion.init();
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Fusion);

/***/ }),

/***/ "./src/models/appModel.ts":
/*!********************************!*\
  !*** ./src/models/appModel.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/env */ "./src/common/env.ts");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/app.const */ "./src/constants/app.const.ts");







var _excluded = ["fromCache"];





var defaultLocation = {
  longitude: '0',
  latitude: '0',
  resultType: 1
};
var AppModel = /*#__PURE__*/function () {
  function AppModel() {
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AppModel);
    /**
     * 打开小程序的场景值，由系统分配：
     * - weapp 官方文档：https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html
     * - alipay 官方文档：https://opendocs.alipay.com/mini/08otyv
     * - tt 官方文档：https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/scene-value
     * - mpaas 在链接中自定义：hellobike://hellobike.com/bifrost?name={appName}&appId={appId}&scene={scene}&page={page}
     * @default 0 - 表示没有获取到scene值
     */
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "scene", 0);
    /**
     * 链路跟踪id, 由访问链接携带传入，携带规则见 `setTraceId` 定义
     * @description 该字段会自动上送到所有接口及埋点中:
     * - 接口报文：$scene、$traceId
     * - 埋点：businessInfo: { traceId, scene }
     */
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "traceId", '');
    // 由访问入口传入，跟踪用户访问行为
    /**
     * 缓存当前位置信息，默认为 null
     */
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "getLocationPromise", null);
    /**
     * 存放 wisdown 配置信息，配置后启用
     * @see https://hellobike.yuque.com/gzxsb9/gt85o7/mfwxfq?
     */
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "wisdomConfig", Object.create(null));
  }
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__["default"])(AppModel, [{
    key: "init",
    value:
    /**
     * 初始化小程序
     */
    function init(options) {
      // 设置小程序 打开场景值
      this.setScene(options);
      // 设置小程序访问的traceId
      this.setTraceId(options);
      // 初始化登录态
      _models_loginModel__WEBPACK_IMPORTED_MODULE_2__["default"].initAppLogin();

      // 初始化当前定位（可开关）
      this.getLocation();
      // 初始化 wisdom（可开关）
      this.initWisdom();
    }

    /**
     * 设置小程序打开的`scene`值（兼容全端）
     * - 原生小程序：由系统分配（weapp、alipay）
     * - MPAAS：通过链接地址携带`scene`:
     * hellobike://hellobike.com/bifrost?name={appName}&appId={appId}&scene={scene}&page={page}
     * @param options
     */
  }, {
    key: "setScene",
    value: function setScene(options) {
      var scene = options.scene,
        _options$query = options.query,
        query = _options$query === void 0 ? {} : _options$query;
      // 默认2000
      var _query$scene = query.scene,
        appscene = _query$scene === void 0 ? -1 : _query$scene;

      // MPAAS 的 scene 从 query 中获取
      if (_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_7__["default"].IS_MPAAS) {
        this.scene = +appscene;
      } else {
        this.scene = scene;
      }
    }

    /**
     * 设置小程序访问的`traceId`值（兼容全端）
     * 各场景跳转链接格式如下：
     * - 小程序码（微信太阳码）: /pages/index/index?traceId={traceId}
     * - 小自定义二维码（微信）: https://c3x.me/miaowa/index?traceId={traceId}
     * - MPAAS Scheme: hellobike://hellobike.com/bifrost?name={appName}&appId={appId}&page={encode(pageUrl)}&traceId={traceId}
     * - 支付宝 Scheme: alipays://platformapi/startapp?appId={appId}&page={encode(pageUrl)}&query={encode(traceId={traceId})}
     * @param options
     */
  }, {
    key: "setTraceId",
    value: function setTraceId(options) {
      var _this = this;
      var _options$query2 = options.query,
        query = _options$query2 === void 0 ? {} : _options$query2;
      // 默认为空，即无traceId
      var _query$traceId = query.traceId,
        traceId = _query$traceId === void 0 ? '' : _query$traceId,
        q = query.q;
      this.traceId = traceId;

      // 兼容微信普通二维码参数获取
      if (_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_7__["default"].IS_WEAPP && q) {
        var _Native$getUrlParams = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_7__["default"].getUrlParams({
            url: decodeURIComponent(q)
          }),
          wxTraceId = _Native$getUrlParams.traceId;
        if (wxTraceId) {
          this.traceId = wxTraceId;
        }
      }
      // 当全局没有时，从页面参数中获取
      if (!this.traceId && _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_7__["default"].IS_MPAAS) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().nextTick(function () {
          var _Native$getUrlParams2 = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_7__["default"].getUrlParams(),
            pageTraceId = _Native$getUrlParams2.traceId;
          if (pageTraceId) {
            _this.traceId = pageTraceId;
          }
        });
      }
    }

    /**
     * 初始化 wisdom 配置
     * @description 配置项参考：https://hellobike.yuque.com/gzxsb9/gt85o7/mfwxfq
     */
  }, {
    key: "initWisdom",
    value: (function () {
      var _initWisdom = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee() {
        var ClientSDK, codeEnv, clientSDK, clientConfigEvent, wisdownConfig;
        return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(+_constants_app_const__WEBPACK_IMPORTED_MODULE_3__["default"].WISHDOM_ENABLE === 0)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              // eslint-disable-next-line
              ClientSDK = (__webpack_require__(/*! @hb/wisdom-config-sdk */ "./node_modules/@hb/wisdom-config-sdk/lib/client/index.js")["default"]);
              codeEnv = _common_env__WEBPACK_IMPORTED_MODULE_1__["default"].codeEnv;
              clientSDK = function clientSDK() {
                return new ClientSDK({
                  project: 'AppStarCardWXSS',
                  env: codeEnv
                });
              };
              clientConfigEvent = clientSDK();
              _context.n = 2;
              return clientConfigEvent.getAll();
            case 2:
              wisdownConfig = _context.v;
              this.wisdomConfig = wisdownConfig || {};
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function initWisdom() {
        return _initWisdom.apply(this, arguments);
      }
      return initWisdom;
    }()
    /**
     * 获取地理位置信息
     * @param fromCache 当对实时性要求不高时，可设置 `fromCache:true`，此时会优先查缓存，以提升获取速度。
     * @returns ILocationResult
     */
    )
  }, {
    key: "getLocation",
    value: (function () {
      var _getLocation = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee2() {
        var _this2 = this;
        var options,
          _options$fromCache,
          fromCache,
          restOptions,
          _args2 = arguments;
        return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              _options$fromCache = options.fromCache, fromCache = _options$fromCache === void 0 ? true : _options$fromCache, restOptions = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_10__["default"])(options, _excluded); // 全局不启用定位
              if (!(+_constants_app_const__WEBPACK_IMPORTED_MODULE_3__["default"].LOCATION_ENABLE === 0)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, Promise.resolve(defaultLocation));
            case 1:
              if (!fromCache) {
                _context2.n = 2;
                break;
              }
              if (!this.getLocationPromise) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2, this.getLocationPromise.then(function (res) {
                return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, res), {}, {
                  resultType: 2
                });
              }));
            case 2:
              // 重新请求定位
              this.getLocationPromise = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_7__["default"].getLocation(restOptions).then(function (res) {
                return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, res), {}, {
                  resultType: 0
                });
              }).catch(function () {
                // 本次获取失败，清理缓存，下次重新获取
                _this2.getLocationPromise = null;
                // 返回默认值
                return defaultLocation;
              });
              return _context2.a(2, this.getLocationPromise);
          }
        }, _callee2, this);
      }));
      function getLocation() {
        return _getLocation.apply(this, arguments);
      }
      return getLocation;
    }()
    /**
     * 小程序检查更新
     * @supported weapp
     */
    )
  }, {
    key: "checkAppUpdate",
    value: function checkAppUpdate() {
      // 全局不启用检查更新
      if (+_constants_app_const__WEBPACK_IMPORTED_MODULE_3__["default"].UPDATE_ENABLE === 0) {
        return;
      }
      if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().canIUse('getUpdateManager')) {
        var updateManager = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
          if (res.hasUpdate) {
            updateManager.onUpdateReady(function () {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
                title: '更新提示',
                content: '新版本已经准备好，是否重启应用？',
                success: function success(rs) {
                  if (rs.confirm) {
                    updateManager.applyUpdate();
                  }
                }
              });
            });
            updateManager.onUpdateFailed(function () {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
                title: '已经有新版本了哟~',
                content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
              });
            });
          }
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showModal({
          title: '提示',
          content: '当前微信版本过低，无法更好体验程序，请升级到最新微信版本后重试。'
        });
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (new AppModel());

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;
//# sourceMappingURL=app.js.map