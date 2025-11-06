"use strict";
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/profile/profile"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/profile!./src/pages/profile/profile.tsx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/profile!./src/pages/profile/profile.tsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageSkeleton/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageHeader/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/OssImage/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _models_myModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/myModel */ "./src/models/myModel.ts");
/* harmony import */ var _constants_page_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/page.const */ "./src/constants/page.const.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var _class;








var Profile = (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Profile() {
    var _this;
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Profile);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Profile, [].concat(args));
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "state", {
      nickname: ''
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleBack", function () {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].navigateBack();
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleNicknameChange", function (e) {
      _this.setState({
        nickname: e.detail.value
      });
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleNicknameBlur", function () {
      // 保存昵称
      var nickname = _this.state.nickname;
      if (nickname.trim()) {
        _models_myModel__WEBPACK_IMPORTED_MODULE_1__["default"].setUserInfo((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__["default"])({}, _models_myModel__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo), {}, {
          nickname: nickname.trim()
        }));
      }
    });
    return _this;
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__["default"])(Profile, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Profile, [{
    key: "componentDidShow",
    value: function componentDidShow() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__["default"].hideHomeButton();
      // 初始化昵称
      var nickname = _models_myModel__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.nickname;
      this.setState({
        nickname: nickname || '昵称123'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var avatar = _models_myModel__WEBPACK_IMPORTED_MODULE_1__["default"].userInfo.avatar;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_12__.PageSkeleton, {
        className: "page-profile-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__.PageHeader, {
            title: "\u4E2A\u4EBA\u8D44\u6599"
          })
        }, "header"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "avatar-section",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "avatar-container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_15__.OssImage, {
              className: "user-avatar",
              width: 160,
              height: 160,
              src: avatar || _constants_page_const__WEBPACK_IMPORTED_MODULE_2__.defaultUserAvatar
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "settings-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "item-label",
            children: "\u6635\u79F0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Input, {
            className: "nickname-input",
            value: this.state.nickname,
            placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0",
            onInput: this.handleNicknameChange,
            onBlur: this.handleNicknameBlur
          })]
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/pages/profile/profile.tsx":
/*!***************************************!*\
  !*** ./src/pages/profile/profile.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/profile!./profile.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/profile!./src/pages/profile/profile.tsx");


var config = {"navigationBarTitleText":"个人资料","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/profile/profile', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_profile_profile_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/profile/profile.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=profile.js.map