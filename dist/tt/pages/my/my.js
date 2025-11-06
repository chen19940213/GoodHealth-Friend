"use strict";
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/my/my"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my/my!./src/pages/my/my.tsx":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/my/my!./src/pages/my/my.tsx ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ My; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageSkeleton/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/OssImage/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/SafeAreaView/index.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var _common_tianqi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/tianqi */ "./src/common/tianqi.ts");
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var _constants_page_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/page.const */ "./src/constants/page.const.ts");
/* harmony import */ var _utils_jumpTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/jumpTo */ "./src/utils/jumpTo.ts");
/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/index */ "./src/assets/index/index.ts");
/* harmony import */ var _components_cardCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/cardCell */ "./src/components/cardCell/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var _class;













var My = (0,mobx_react__WEBPACK_IMPORTED_MODULE_9__.observer)(_class = /*#__PURE__*/function (_Component) {
  function My() {
    var _this;
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, My);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_11__["default"])(this, My, [].concat(args));
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "state", {
      userInfo: {},
      cardList: [
        // {
        //   id: 1,
        //   imageUrl: 'https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856',
        //   userName: '椰椰',
        //   result: '符合正品特征',
        // },
        // {
        //   id: 2,
        //   imageUrl: 'https://img1.baidu.com/it/u=1704341968,2213944469&fm=253&app=138&f=JPEG?w=682&h=850',
        //   userName: '椰椰',
        //   result: '符合正品特征',
        // },
        // {
        //   id: 3,
        //   imageUrl: 'https://img1.baidu.com/it/u=3825010941,2472429333&fm=253&app=138&f=JPEG?w=684&h=620',
        //   userName: '椰椰',
        //   result: '符合正品特征',
        // },
        // {
        //   id: 4,
        //   imageUrl: 'https://img2.baidu.com/it/u=3440722248,2022509867&fm=253&app=138&f=JPEG?w=684&h=865',
        //   userName: '椰椰',
        //   result: '符合正品特征',
        // },
      ]
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "handleSettingsClick", function () {
      (0,_utils_jumpTo__WEBPACK_IMPORTED_MODULE_5__.jumpToAnyUrl)('/pages/settings/settings');
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "handleLoginClick", function () {
      (0,_utils_jumpTo__WEBPACK_IMPORTED_MODULE_5__.jumpToAnyUrl)('/pages/login/login');
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "handleScrollToLower", function () {
      console.log('页面触底了，开始加载更多数据');

      // 模拟异步加载数据
      setTimeout(function () {
        var newCards = [{
          id: _this.state.cardList.length + 1,
          imageUrl: 'https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856',
          userName: '椰椰',
          result: '符合正品特征'
        }, {
          id: _this.state.cardList.length + 2,
          imageUrl: 'https://img1.baidu.com/it/u=1704341968,2213944469&fm=253&app=138&f=JPEG?w=682&h=850',
          userName: '椰椰',
          result: '符合正品特征'
        }, {
          id: _this.state.cardList.length + 3,
          imageUrl: 'https://img1.baidu.com/it/u=3825010941,2472429333&fm=253&app=138&f=JPEG?w=684&h=620',
          userName: '椰椰',
          result: '符合正品特征'
        }, {
          id: _this.state.cardList.length + 4,
          imageUrl: 'https://img2.baidu.com/it/u=3440722248,2022509867&fm=253&app=138&f=JPEG?w=684&h=865',
          userName: '椰椰',
          result: '符合正品特征'
        }];
        _this.setState({
          cardList: [].concat((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_13__["default"])(_this.state.cardList), newCards)
        });
      }, 1000); // 模拟网络延迟
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_this, "renderNoList", function () {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
        className: "no-list-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
          src: _assets_index__WEBPACK_IMPORTED_MODULE_6__.noListIcon,
          className: "no-list-icon"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
          className: "no-list-text",
          children: "\u6682\u65F6\u6CA1\u6709\u9274\u5B9A\u4EFB\u4F55\u4E1C\u897F\u54E6\uFF5E"
        })]
      });
    });
    return _this;
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_15__["default"])(My, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_16__["default"])(My, [{
    key: "componentDidShow",
    value:
    // componentDidMount() {
    //   loginModel.checkLogin((isLogin) => {
    //     if (isLogin) {
    //       // 登录后调用获取用户信息
    //       myModel.getUserInfo();
    //     } else {
    //       myModel.setUserInfo({
    //         avatar: defaultUserAvatar,
    //         nickname: '未登录',
    //       });
    //     }
    //   }, { observe: true });
    // }

    function componentDidShow() {
      _common_tianqi__WEBPACK_IMPORTED_MODULE_2__.myUBT.pageView();
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_17__["default"].hideHomeButton();
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      _common_tianqi__WEBPACK_IMPORTED_MODULE_2__.myUBT.pageViewOut();
    }
  }, {
    key: "render",
    value: function render() {
      var token = _models_loginModel__WEBPACK_IMPORTED_MODULE_3__["default"].loginResult.token;
      var _ref = _models_loginModel__WEBPACK_IMPORTED_MODULE_3__["default"].loginResult.userInfo || {},
        avatar = _ref.avatar,
        nickname = _ref.nickname;
      console.error((0,mobx__WEBPACK_IMPORTED_MODULE_1__.toJS)(nickname));
      var mobile = _models_loginModel__WEBPACK_IMPORTED_MODULE_3__["default"].loginResult.mobile;
      var isLogin = !!token;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_18__.PageSkeleton, {
        className: "page-my-view",
        onScrollToLower: this.handleScrollToLower,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "top-gradient-bg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "user-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "user-info-container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_19__.OssImage, {
                className: "user-avatar",
                width: 132,
                height: 132,
                src: avatar || _constants_page_const__WEBPACK_IMPORTED_MODULE_4__.defaultUserAvatar
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "user-info",
                children: isLogin ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                    className: "user-nickname",
                    children: nickname || '用户'
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                    className: "user-id",
                    children: ["ID\uFF1A", mobile || '1023920930']
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                    className: "login-text-btn",
                    onClick: this.handleLoginClick,
                    children: "\u53BB\u767B\u5F55"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                    className: "user-id",
                    children: "ID\uFF1A1023920930"
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
              src: _assets_index__WEBPACK_IMPORTED_MODULE_6__.settingsIcon,
              className: "settings-icon",
              onClick: this.handleSettingsClick
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "identification-section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "section-title",
              children: "\u6211\u7684\u9274\u5B9A"
            })
          }), this.state.cardList.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "image-grid-section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "image-grid",
              children: this.state.cardList.map(function (card) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_cardCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  imageUrl: card.imageUrl,
                  userName: card.userName,
                  result: card.result
                }, card.id);
              })
            })
          }) : this.renderNoList(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_20__.SafeAreaView, {
            safeAreaInsetBottom: true
          })]
        }, "scroll")
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


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