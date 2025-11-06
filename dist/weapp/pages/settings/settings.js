"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/settings/settings"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/settings!./src/pages/settings/settings.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/settings!./src/pages/settings/settings.tsx ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Settings; }
/* harmony export */ });
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./src/shims/hb-taro-fusion-components.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var _utils_jumpTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/jumpTo */ "./src/utils/jumpTo.ts");
/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/index */ "./src/assets/index/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var _class;









var Settings = (0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Settings() {
    var _this;
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Settings);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Settings, [].concat(args));
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleBack", function () {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.navigateBack();
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleProfileClick", function () {
      (0,_utils_jumpTo__WEBPACK_IMPORTED_MODULE_3__.jumpToAnyUrl)('/pages/profile/profile');
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleAboutClick", function () {
      (0,_utils_jumpTo__WEBPACK_IMPORTED_MODULE_3__.jumpToAnyUrl)('/pages/about/about');
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleLogout", function () {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showModal({
        title: '提示',
        content: '确认退出登录吗？',
        confirmColor: '#007AFF',
        success: function success(res) {
          if (res.confirm) {
            // 清除登录信息
            _models_loginModel__WEBPACK_IMPORTED_MODULE_2__["default"].setLoginResult({
              mobile: '',
              guid: '',
              token: '',
              ticket: ''
            });
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('退出成功');
            // 返回我的页面
            _this.handleBack();
          }
        }
      });
    });
    return _this;
  }
  (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__["default"])(Settings, _Component);
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Settings, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.hideHomeButton();
    }
  }, {
    key: "render",
    value: function render() {
      var mobile = _models_loginModel__WEBPACK_IMPORTED_MODULE_2__["default"].loginResult.mobile;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.PageSkeleton, {
        className: "page-settings-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.PageHeader, {
            title: "\u8BBE\u7F6E"
          })
        }, "header"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "settings-list",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "settings-item",
              onClick: this.handleProfileClick,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "item-label",
                children: "\u4E2A\u4EBA\u8D44\u6599"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.forwardIcon,
                className: "item-arrow"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "settings-divider"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "settings-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "item-label",
                children: "\u624B\u673A\u53F7"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "item-value",
                children: mobile ? mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') : ''
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "settings-divider"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "settings-item",
              onClick: this.handleAboutClick,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "item-label",
                children: "\u5173\u4E8E\u661F\u5361"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.forwardIcon,
                className: "item-arrow"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "settings-divider"
            })]
          })
        }, "body"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.SafeAreaView, {
            safeAreaInsetBottom: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "logout-section",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "logout-btn",
                onClick: this.handleLogout,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "logout-text",
                  children: "\u9000\u51FA\u767B\u5F55"
                })
              })
            })
          })
        }, "footer")]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/pages/settings/settings.tsx":
/*!*****************************************!*\
  !*** ./src/pages/settings/settings.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_settings_settings_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/settings!./settings.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/settings/settings!./src/pages/settings/settings.tsx");


var config = {"navigationBarTitleText":"设置","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_settings_settings_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/settings/settings', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_settings_settings_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_settings_settings_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_settings_settings_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_settings_settings_settings_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/settings/settings.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=settings.js.map