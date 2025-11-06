"use strict";
require("./common");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx":
/*!************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _models_appModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/appModel */ "./src/models/appModel.ts");
/* harmony import */ var _common_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/native */ "./src/common/native.ts");
/* harmony import */ var _common_fusion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/fusion */ "./src/common/fusion.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












// Ubt 已移除，使用空对象替代

var APM = {
  pageStartTime: function pageStartTime() {}
};
var PageT = function PageT() {};
// Fusion 初始化
_common_fusion__WEBPACK_IMPORTED_MODULE_4__["default"].init();
if (true) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setEnableDebug({
    enableDebug: true
  });
}
var App = /*#__PURE__*/function (_Component) {
  function App() {
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, App);
    return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, App, arguments);
  }
  (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_8__["default"])(App, _Component);
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(App, [{
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
      if (_common_native__WEBPACK_IMPORTED_MODULE_3__["default"].IS_WEAPP) {
        _models_appModel__WEBPACK_IMPORTED_MODULE_2__["default"].setScene(options);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(mobx_react__WEBPACK_IMPORTED_MODULE_10__.Provider, {
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

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "./node_modules/@tarojs/plugin-platform-weapp/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/bom/window.js");
/* harmony import */ var _tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/plugin-framework-react/dist/runtime */ "./node_modules/@tarojs/plugin-framework-react/dist/runtime.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./app.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=app!./src/app.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");











var config = {"pages":["pages/index/index","pages/calendar-trend/calendar-trend","pages/my/my","pages/identification/identification","pages/camera/camera","pages/appraisal/appraisal","pages/result/result","pages/settings/settings","pages/profile/profile","pages/nickname-edit/nickname-edit","pages/login/login","pages/about/about"],"subPackages":[{"root":"pages/webview","pages":["webview"]}],"tabBar":{"list":[{"iconPath":"./assets/tabs/homepage.png","selectedIconPath":"./assets/tabs/homepage_selected.png","pagePath":"pages/index/index","text":"首页"},{"iconPath":"./assets/tabs/calendar.png","selectedIconPath":"./assets/tabs/calendar_selected.png","pagePath":"pages/calendar-trend/calendar-trend","text":"日历趋势"},{"iconPath":"./assets/tabs/my.png","selectedIconPath":"./assets/tabs/my_selected.png","pagePath":"pages/my/my","text":"我的"}],"color":"#879099","selectedColor":"#FF5078","backgroundColor":"#fff","borderStyle":"black"},"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"哈啰","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__.taroWindowProvider.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_react_dist_runtime__WEBPACK_IMPORTED_MODULE_6__.createReactApp)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_app_app_tsx__WEBPACK_IMPORTED_MODULE_2__["default"], react__WEBPACK_IMPORTED_MODULE_3__, react_dom__WEBPACK_IMPORTED_MODULE_4__["default"], config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.initPxTransform)({
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

/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./src/shims/hb-taro-fusion-components.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/env */ "./src/common/env.ts");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/app.const */ "./src/constants/app.const.ts");
/* harmony import */ var _models_appModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/appModel */ "./src/models/appModel.ts");
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/events */ "./src/common/events.ts");









var mobileInfo = {};
var getMobileInfo = function getMobileInfo() {
  if (Object.keys(mobileInfo).length) {
    return mobileInfo;
  }
  try {
    var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getSystemInfoSync(),
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
  var scene = _models_appModel__WEBPACK_IMPORTED_MODULE_4__["default"].scene,
    traceId = _models_appModel__WEBPACK_IMPORTED_MODULE_4__["default"].traceId;
  var httpBaseParams = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])((0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__["default"])({
    version: _common_env__WEBPACK_IMPORTED_MODULE_2__["default"].appVersion,
    appName: _common_env__WEBPACK_IMPORTED_MODULE_2__["default"].appName,
    $scene: scene,
    $traceId: traceId,
    systemCode: _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["default"].SYSTEM_CODE
  }, getMobileInfo()), _common_env__WEBPACK_IMPORTED_MODULE_2__["default"].codeEnv !== 'pro' ? {
    __sysTag: _common_env__WEBPACK_IMPORTED_MODULE_2__["default"].codeEnvTag
  } : {});
  return httpBaseParams;
};
var Fusion = /*#__PURE__*/function () {
  function Fusion() {
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Fusion);
  }
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_8__["default"])(Fusion, null, [{
    key: "initPageSkeleton",
    value:
    // initUbt 已移除，Ubt 功能已禁用

    /**
     * 初始化PageSkeleton
     */
    function initPageSkeleton() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__.PageSkeleton.setGlobalOptions({
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
          _common_events__WEBPACK_IMPORTED_MODULE_5__.LoginEvent.offCurrent();
        }
      });
    }

    /**
     * 初始化Native
     */
  }, {
    key: "initNative",
    value: function initNative() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__.Native.config({
        shareAppOptions: {
          shareOriginId: _constants_app_const__WEBPACK_IMPORTED_MODULE_3__["default"].MINA_ORIGIN_ID
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      Fusion.initNative();
      // Fusion.initUbt();
      Fusion.initPageSkeleton();
    }
  }]);
}(); // 注册到 Env 中
_common_env__WEBPACK_IMPORTED_MODULE_2__["default"].register(function (codeEnv) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().nextTick(function () {
    _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__.Native.setCodeEnv(codeEnv);
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

/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./src/shims/hb-taro-fusion-components.ts");
/* harmony import */ var _common_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/env */ "./src/common/env.ts");
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/app.const */ "./src/constants/app.const.ts");







var _excluded = ["fromCache"];





var defaultLocation = {
  longitude: '0',
  latitude: '0',
  resultType: 1
};
var AppModel = /*#__PURE__*/function () {
  function AppModel() {
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, AppModel);
    /**
     * 打开小程序的场景值，由系统分配：
     * - weapp 官方文档：https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html
     * - alipay 官方文档：https://opendocs.alipay.com/mini/08otyv
     * - tt 官方文档：https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/scene-value
     * - mpaas 在链接中自定义：hellobike://hellobike.com/bifrost?name={appName}&appId={appId}&scene={scene}&page={page}
     * @default 0 - 表示没有获取到scene值
     */
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "scene", 0);
    /**
     * 链路跟踪id, 由访问链接携带传入，携带规则见 `setTraceId` 定义
     * @description 该字段会自动上送到所有接口及埋点中:
     * - 接口报文：$scene、$traceId
     * - 埋点：businessInfo: { traceId, scene }
     */
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "traceId", '');
    // 由访问入口传入，跟踪用户访问行为
    /**
     * 缓存当前位置信息，默认为 null
     */
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "getLocationPromise", null);
    /**
     * 存放 wisdown 配置信息，配置后启用
     * @see https://hellobike.yuque.com/gzxsb9/gt85o7/mfwxfq?
     */
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "wisdomConfig", Object.create(null));
  }
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(AppModel, [{
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
      _models_loginModel__WEBPACK_IMPORTED_MODULE_3__["default"].initAppLogin();

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
      if (_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.IS_MPAAS) {
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
      if (_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.IS_WEAPP && q) {
        var _Native$getUrlParams = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.getUrlParams({
            url: decodeURIComponent(q)
          }),
          wxTraceId = _Native$getUrlParams.traceId;
        if (wxTraceId) {
          this.traceId = wxTraceId;
        }
      }
      // 当全局没有时，从页面参数中获取
      if (!this.traceId && _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.IS_MPAAS) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().nextTick(function () {
          var _Native$getUrlParams2 = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.getUrlParams(),
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
      var _initWisdom = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee() {
        var ClientSDK, codeEnv, clientSDK, clientConfigEvent, wisdownConfig;
        return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(+_constants_app_const__WEBPACK_IMPORTED_MODULE_4__["default"].WISHDOM_ENABLE === 0)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              // eslint-disable-next-line
              ClientSDK = (__webpack_require__(/*! @hb/wisdom-config-sdk */ "./src/shims/wisdom-config-sdk.ts")["default"]);
              codeEnv = _common_env__WEBPACK_IMPORTED_MODULE_2__["default"].codeEnv;
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
      var _getLocation = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_8__["default"])(/*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().m(function _callee2() {
        var _this2 = this;
        var options,
          _options$fromCache,
          fromCache,
          restOptions,
          _args2 = arguments;
        return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_9__["default"])().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              _options$fromCache = options.fromCache, fromCache = _options$fromCache === void 0 ? true : _options$fromCache, restOptions = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_10__["default"])(options, _excluded); // 全局不启用定位
              if (!(+_constants_app_const__WEBPACK_IMPORTED_MODULE_4__["default"].LOCATION_ENABLE === 0)) {
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
                return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, res), {}, {
                  resultType: 2
                });
              }));
            case 2:
              // 重新请求定位
              this.getLocationPromise = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.getLocation(restOptions).then(function (res) {
                return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])((0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_11__["default"])({}, res), {}, {
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
      if (+_constants_app_const__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE_ENABLE === 0) {
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

/***/ }),

/***/ "./src/shims/wisdom-config-sdk.ts":
/*!****************************************!*\
  !*** ./src/shims/wisdom-config-sdk.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WisdomClientSDK; }
/* harmony export */ });
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");




var WisdomClientSDK = /*#__PURE__*/function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function WisdomClientSDK(_opts) {
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WisdomClientSDK);
  }
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(WisdomClientSDK, [{
    key: "getAll",
    value: function () {
      var _getAll = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])().m(function _callee() {
        return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2, {});
          }
        }, _callee);
      }));
      function getAll() {
        return _getAll.apply(this, arguments);
      }
      return getAll;
    }()
  }]);
}();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/app.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;
//# sourceMappingURL=app.js.map