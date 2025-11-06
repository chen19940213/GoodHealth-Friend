"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my/my!./src/pages/my/my.tsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my/my!./src/pages/my/my.tsx ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ My; }
/* harmony export */ });
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./src/shims/hb-taro-fusion-components.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_tianqi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/tianqi */ "./src/common/tianqi.ts");
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var _models_myModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/myModel */ "./src/models/myModel.ts");
/* harmony import */ var _constants_page_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/page.const */ "./src/constants/page.const.ts");
/* harmony import */ var _utils_jumpTo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/jumpTo */ "./src/utils/jumpTo.ts");
/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/index */ "./src/assets/index/index.ts");
/* harmony import */ var _services_apis_login_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/services/apis/login.api */ "./src/services/apis/login.api.ts");
/* harmony import */ var _components_PageSkeleton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/PageSkeleton */ "./src/components/PageSkeleton/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var _class;















var My = (0,mobx_react__WEBPACK_IMPORTED_MODULE_12__.observer)(_class = /*#__PURE__*/function (_Component) {
  function My() {
    var _this;
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_13__["default"])(this, My);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_14__["default"])(this, My, [].concat(args));
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "handleSettingsClick", function () {
      (0,_utils_jumpTo__WEBPACK_IMPORTED_MODULE_7__.jumpToAnyUrl)('/pages/settings/settings');
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "handleLoginClick", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().getUserProfile({
        desc: '用于完善用户资料',
        success: function success() {
          // 获取用户信息后，调用登录处理
          _this.handleWxLogin();
        },
        fail: function fail() {
          _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('获取用户信息失败');
        }
      });
    });
    // 微信登录处理
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "handleWxLogin", /*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_16__["default"])(/*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_17__["default"])().m(function _callee() {
      var loginRes, result, err, _t;
      return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_17__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().login();
          case 1:
            loginRes = _context.v;
            if (loginRes.code) {
              _context.n = 2;
              break;
            }
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('获取微信登录凭证失败');
            return _context.a(2);
          case 2:
            _context.n = 3;
            return (0,_services_apis_login_api__WEBPACK_IMPORTED_MODULE_9__.requestWxLoginMockApi)({
              code: loginRes.code
              // userInfo: {
              //   nickName: userInfo.nickName,
              //   avatarUrl: userInfo.avatarUrl,
              //   gender: userInfo.gender,
              //   city: userInfo.city,
              //   province: userInfo.province,
              //   country: userInfo.country,
              // },
            });
          case 3:
            result = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();

            // 登录成功，保存登录信息（包含 openId）
            _this.handleLoginSuccess(result.data);
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
            err = _t;
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast(err.message || '登录失败，请重试');
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 4]]);
    })));
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "handleLoginSuccess", function (res) {
      // eslint-disable-next-line no-console
      console.log('登录成功，保存的数据:', res);
      _models_loginModel__WEBPACK_IMPORTED_MODULE_4__["default"].setLoginResult(res);
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('登录成功');
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "handleScrollToLower", function () {
      // 加载更多数据
      if (!_models_myModel__WEBPACK_IMPORTED_MODULE_5__["default"].loading && _models_myModel__WEBPACK_IMPORTED_MODULE_5__["default"].hasMore) {
        _models_myModel__WEBPACK_IMPORTED_MODULE_5__["default"].getMyIdentifyTaskList(false);
      }
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_15__["default"])(_this, "renderNoList", function () {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
        className: "no-list-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Image, {
          src: _assets_index__WEBPACK_IMPORTED_MODULE_8__.noListIcon,
          className: "no-list-icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
          className: "no-list-text",
          children: "\u6682\u65F6\u6CA1\u6709\u9274\u5B9A\u4EFB\u4F55\u4E1C\u897F\u54E6\uFF5E"
        })]
      });
    });
    return _this;
  }
  (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_19__["default"])(My, _Component);
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_20__["default"])(My, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 监听登录态变化
      _models_loginModel__WEBPACK_IMPORTED_MODULE_4__["default"].checkLogin(function (isLogin) {
        // eslint-disable-next-line no-console
        console.log('登录态变化', isLogin, _models_loginModel__WEBPACK_IMPORTED_MODULE_4__["default"].loginResult);
        if (isLogin) {
          // 登录了，重新请求列表数据
          _models_myModel__WEBPACK_IMPORTED_MODULE_5__["default"].getMyIdentifyTaskList(true);
        } else {
          // 未登录，清空列表数据
          _models_myModel__WEBPACK_IMPORTED_MODULE_5__["default"].clearCardList();
        }
      }, {
        observe: true // 开启监听，当登录态变化时自动触发回调
      });
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _loginModel$loginResu, _loginModel$loginResu2;
      _common_tianqi__WEBPACK_IMPORTED_MODULE_3__.myUBT.pageView();
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.hideHomeButton();

      // 根据当前登录态决定是否请求数据
      var isLogin = !!((_loginModel$loginResu = _models_loginModel__WEBPACK_IMPORTED_MODULE_4__["default"].loginResult) !== null && _loginModel$loginResu !== void 0 && _loginModel$loginResu.token && (_loginModel$loginResu2 = _models_loginModel__WEBPACK_IMPORTED_MODULE_4__["default"].loginResult) !== null && _loginModel$loginResu2 !== void 0 && _loginModel$loginResu2.ticket);
      if (isLogin) {
        // 已登录，请求我的鉴定任务列表数据（包含 token）
        _models_myModel__WEBPACK_IMPORTED_MODULE_5__["default"].getMyIdentifyTaskList(true);
      } else {
        // 未登录，清空列表数据
        _models_myModel__WEBPACK_IMPORTED_MODULE_5__["default"].clearCardList();
      }
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      _common_tianqi__WEBPACK_IMPORTED_MODULE_3__.myUBT.pageViewOut();
    }
  }, {
    key: "render",
    value: function render() {
      var _userInfo, _userInfo2;
      var loginResult = _models_loginModel__WEBPACK_IMPORTED_MODULE_4__["default"].loginResult;
      var token = loginResult.token;
      // 从 loginResult 中获取用户信息（可能在不同层级）
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var avatar = (loginResult === null || loginResult === void 0 ? void 0 : loginResult.avatar) || (loginResult === null || loginResult === void 0 || (_userInfo = loginResult.userInfo) === null || _userInfo === void 0 ? void 0 : _userInfo.avatar) || '';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var nickname = (loginResult === null || loginResult === void 0 ? void 0 : loginResult.nickname) || (loginResult === null || loginResult === void 0 || (_userInfo2 = loginResult.userInfo) === null || _userInfo2 === void 0 ? void 0 : _userInfo2.nickname) || '女王陛下';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var userNewId = (loginResult === null || loginResult === void 0 ? void 0 : loginResult.userNewId) || (loginResult === null || loginResult === void 0 ? void 0 : loginResult.userId) || '';
      var isLogin = !!token;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_PageSkeleton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "page-my-view",
        onScrollToLower: this.handleScrollToLower,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "top-gradient-bg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "user-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: "user-info-container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.OssImage, {
                className: "user-avatar",
                width: 79,
                height: 79,
                src: avatar || _constants_page_const__WEBPACK_IMPORTED_MODULE_6__.defaultUserAvatar
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                className: "user-info",
                children: isLogin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                    className: "user-nickname",
                    children: nickname || '女王陛下'
                  })
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                    className: "login-text-btn",
                    onClick: this.handleLoginClick,
                    children: "\u53BB\u767B\u5F55"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: "settings-icon-wrapper",
              onClick: this.handleSettingsClick,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                className: "settings-icon"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "reason-section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
              className: "reason-text",
              children: "\u51CF\u80A5\u539F\u56E0\uFF1A\u8EAB\u4F53\u539F\u56E0\u8840\u8102\u9AD8\uFF0C\u5E0C\u671B\u6062\u590D\u5065\u5EB7\uFF0C\u52A0\u6CB9\uFF01"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "tags-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: "tag-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
                className: "tag-icon",
                children: "\uD83C\uDFF7\uFE0F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: "tag-text",
                children: "\u4E2D\u56FD\u5973\u4EBA"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: "tag-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: "tag-text",
                children: "163"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: "tag-item",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: "tag-text",
                children: "45"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "feedback-card",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: "feedback-avatar"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
              className: "feedback-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: "feedback-title",
                children: "\u622A\u6B62\u76EE\u524D\uFF0C\u597D\u5065\u53CB\u5DF2\u6709327939\u4F4D\u670B\u53CB"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Text, {
                className: "feedback-subtitle",
                children: "\u7D2F\u8BA1\u51CF\u80A5224434\u65A4\uFF0C\u6298\u5408288\u5934\u8001\u6BCD\u732A\uFF01"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.View, {
            className: "action-buttons",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Button, {
              className: "action-btn primary",
              onClick: function onClick() {},
              children: "\u5173\u6CE8\u5C0F\u7EA2\u4E66"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_18__.Button, {
              className: "action-btn primary",
              onClick: function onClick() {},
              children: "\u52A0\u7FA4\u4EA4\u6D41"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.SafeAreaView, {
            safeAreaInsetBottom: true
          })]
        }, "scroll")
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/common/tianqi.ts":
/*!******************************!*\
  !*** ./src/common/tianqi.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myUBT: function() { return /* binding */ myUBT; }
/* harmony export */ });
/* unused harmony export indexUBT */
// Ubt 已移除，使用空对象替代
var indexUBT = {
  pageView: function pageView() {},
  pageViewOut: function pageViewOut() {}
};
var myUBT = {
  pageView: function pageView() {},
  pageViewOut: function pageViewOut() {}
};

/***/ }),

/***/ "./src/pages/my/my.tsx":
/*!*****************************!*\
  !*** ./src/pages/my/my.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_my_my_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my/my!./my.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my/my!./src/pages/my/my.tsx");


var config = {"navigationBarTitleText":"","navigationStyle":"custom","enableShareAppMessage":false};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_my_my_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/my/my', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_my_my_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_my_my_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_my_my_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_my_my_my_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/my/my.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=my.js.map