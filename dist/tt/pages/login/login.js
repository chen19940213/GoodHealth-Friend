"use strict";
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./src/pages/login/login.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/login/login!./src/pages/login/login.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageSkeleton/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var _class;
/* eslint-disable @typescript-eslint/no-explicit-any */








var Login = (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Login() {
    var _this;
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Login);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Login, [].concat(args));
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleBack", function () {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].navigateBack();
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleLoginSuccess", function (res) {
      _models_loginModel__WEBPACK_IMPORTED_MODULE_2__["default"].setLoginResult(res);
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('登录成功');
      setTimeout(function () {
        _this.handleBack();
      }, 500);
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleLoginFail", function (error) {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].showToast(error.message);
    });
    // 微信授权登录
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleWxAuth", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getUserProfile({
        desc: '用于完善用户资料',
        success: function success(res) {
          // 这里可以调用后端接口进行登录
          console.error(res);
          _this.handleWxLogin(res.userInfo);
        },
        fail: function fail() {
          _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('获取用户信息失败');
        }
      });
    });
    // 微信登录处理
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleWxLogin", function (userInfo) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().login({
        success: function success(loginRes) {
          if (loginRes.code) {
            // 这里应该调用后端接口，传递code和userInfo进行登录

            // 模拟登录成功，实际应该调用后端接口
            var mockLoginResult = {
              token: "mock_token_".concat(Date.now()),
              ticket: "mock_ticket_".concat(Date.now()),
              userInfo: {
                nickname: userInfo.nickName,
                avatar: userInfo.avatarUrl,
                gender: userInfo.gender,
                city: userInfo.city,
                province: userInfo.province,
                country: userInfo.country
              }
            };
            _this.handleLoginSuccess(mockLoginResult);
          } else {
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('微信登录失败');
          }
        },
        fail: function fail() {
          _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].showToast('微信登录失败');
        }
      });
    });
    return _this;
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Login, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__["default"])(Login, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].hideHomeButton();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_11__.PageSkeleton, {
        className: "page-login-view",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "top-gradient-bg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "back-btn",
            onClick: this.handleBack,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "back-icon"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "logo-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "logo-box",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "logo-text",
                children: "\u661F\u5361"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "slogan",
              children: "\u4E2D\u68C0\u3001\u6D77\u5173\u4E92\u8BA4\u7684AI\u9274\u5B9A\u56E2\u4F53\u6807\u51C6"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "login-actions",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Button, {
              className: "wx-auth-btn",
              onClick: this.handleWxAuth,
              children: "\u5FAE\u4FE1\u6388\u6743\u767B\u5F55"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
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