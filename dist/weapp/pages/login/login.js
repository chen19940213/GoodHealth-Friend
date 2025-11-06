"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./src/pages/login/login.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./src/pages/login/login.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./src/shims/hb-taro-fusion-components.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var _services_apis_login_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/apis/login.api */ "./src/services/apis/login.api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var _class;
/* eslint-disable @typescript-eslint/no-explicit-any */









var Login = (0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Login() {
    var _this;
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Login);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Login, [].concat(args));
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleBack", function () {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.navigateBack();
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleLoginSuccess", function (res) {
      _models_loginModel__WEBPACK_IMPORTED_MODULE_3__["default"].setLoginResult(res);
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('登录成功');
      setTimeout(function () {
        _this.handleBack();
      }, 500);
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleLoginFail", function (error) {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast(error.message);
    });
    // 微信授权登录
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleWxAuth", /*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_10__["default"])(/*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().m(function _callee() {
      var loginRes, result, _t;
      return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_11__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            // 显示加载提示
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showLoading({
              title: '登录中...',
              mask: true
            });

            // 获取微信登录凭证 code
            // 注意：getUserProfile 已废弃，现在只需要获取 code 即可
            // 用户昵称和头像等信息可以通过后端接口获取
            _context.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().login();
          case 1:
            loginRes = _context.v;
            if (loginRes.code) {
              _context.n = 2;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('获取微信登录凭证失败');
            return _context.a(2);
          case 2:
            _context.n = 3;
            return (0,_services_apis_login_api__WEBPACK_IMPORTED_MODULE_4__.requestWxLoginMockApi)({
              code: loginRes.code
            });
          case 3:
            result = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();

            // 登录成功，保存登录信息（包含 openId）
            // eslint-disable-next-line no-console
            console.log('登录成功，返回数据:', result);
            _this.handleLoginSuccess(result.data);
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
            // eslint-disable-next-line no-console
            console.error('登录失败:', _t);
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast((_t === null || _t === void 0 ? void 0 : _t.message) || '登录失败，请重试');
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 4]]);
    })));
    return _this;
  }
  (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Login, _Component);
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__["default"])(Login, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.hideHomeButton();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.PageSkeleton, {
        className: "page-login-view",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "top-gradient-bg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "back-btn",
            onClick: this.handleBack,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "back-icon"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "logo-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "logo-box",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "logo-text",
                children: "\u661F\u5361"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "slogan",
              children: "\u4E2D\u68C0\u3001\u6D77\u5173\u4E92\u8BA4\u7684AI\u9274\u5B9A\u56E2\u4F53\u6807\u51C6"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "login-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Button, {
              className: "wx-auth-btn",
              onClick: this.handleWxAuth,
              children: "\u5FAE\u4FE1\u6388\u6743\u767B\u5F55"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "phone-login-text",
              children: "\u624B\u673A\u53F7\u767B\u5F55/\u6CE8\u518C"
            })]
          })]
        }, "scroll")
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/pages/login/login.tsx":
/*!***********************************!*\
  !*** ./src/pages/login/login.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./login.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./src/pages/login/login.tsx");


var config = {"navigationBarTitleText":"登录","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/login/login', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_login_login_login_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/login/login.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=login.js.map