"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/nickname-edit/nickname-edit"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/nickname-edit/nickname-edit!./src/pages/nickname-edit/nickname-edit.tsx":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/nickname-edit/nickname-edit!./src/pages/nickname-edit/nickname-edit.tsx ***!
  \************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NicknameEdit; }
/* harmony export */ });
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./src/shims/hb-taro-fusion-components.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _models_myModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/myModel */ "./src/models/myModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var _class;







var NicknameEdit = (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(_class = /*#__PURE__*/function (_Component) {
  function NicknameEdit() {
    var _this;
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NicknameEdit);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, NicknameEdit, [].concat(args));
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "state", {
      nickname: ''
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleBack", function () {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.navigateBack();
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleNicknameChange", function (e) {
      var value = e.detail.value;
      if (value.length <= 24) {
        _this.setState({
          nickname: value
        });
      }
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_this, "handleComplete", function () {
      var nickname = _this.state.nickname;
      if (nickname.length < 2) {
        _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('昵称至少需要2个字');
        return;
      }
      if (nickname.length > 24) {
        _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('昵称最多24个字');
        return;
      }

      // 更新用户信息
      _models_myModel__WEBPACK_IMPORTED_MODULE_2__["default"].setUserInfo((0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])((0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__["default"])({}, _models_myModel__WEBPACK_IMPORTED_MODULE_2__["default"].userInfo), {}, {
        nickname: nickname
      }));
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('修改成功');
      setTimeout(function () {
        _this.handleBack();
      }, 500);
    });
    return _this;
  }
  (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__["default"])(NicknameEdit, _Component);
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__["default"])(NicknameEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var nickname = _models_myModel__WEBPACK_IMPORTED_MODULE_2__["default"].userInfo.nickname;
      this.setState({
        nickname: nickname || ''
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.hideHomeButton();
    }
  }, {
    key: "render",
    value: function render() {
      var nickname = this.state.nickname;
      var charCount = nickname.length;
      var isValid = charCount >= 2 && charCount <= 24;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.PageSkeleton, {
        className: "page-nickname-edit-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "nav-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "back-btn",
            onClick: this.handleBack,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
              className: "back-icon"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "nav-title",
            children: "\u6635\u79F0\u7F16\u8F91"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "complete-btn ".concat(isValid ? 'active' : ''),
            onClick: isValid ? this.handleComplete : undefined,
            children: "\u5B8C\u6210"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "input-hint",
          children: "\u8BF7\u8F93\u51652\u523024\u4E2A\u5B57"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "input-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Input, {
            className: "nickname-input",
            value: nickname,
            onInput: this.handleNicknameChange,
            placeholder: "\u8BF7\u8F93\u5165\u6635\u79F0",
            maxlength: 24,
            focus: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "char-count",
            children: [charCount, "/24"]
          })]
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/pages/nickname-edit/nickname-edit.tsx":
/*!***************************************************!*\
  !*** ./src/pages/nickname-edit/nickname-edit.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_nickname_edit_nickname_edit_nickname_edit_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/nickname-edit/nickname-edit!./nickname-edit.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/nickname-edit/nickname-edit!./src/pages/nickname-edit/nickname-edit.tsx");


var config = {"navigationBarTitleText":"昵称编辑","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_nickname_edit_nickname_edit_nickname_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/nickname-edit/nickname-edit', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_nickname_edit_nickname_edit_nickname_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_nickname_edit_nickname_edit_nickname_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_nickname_edit_nickname_edit_nickname_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_nickname_edit_nickname_edit_nickname_edit_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/nickname-edit/nickname-edit.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=nickname-edit.js.map