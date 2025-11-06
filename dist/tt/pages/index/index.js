"use strict";
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageSkeleton/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/SafeAreaView/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_tianqi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/tianqi */ "./src/common/tianqi.ts");
/* harmony import */ var _models_indexModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/indexModel */ "./src/models/indexModel.ts");
/* harmony import */ var _components_cardCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/cardCell */ "./src/components/cardCell/index.tsx");
/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/index */ "./src/assets/index/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var _class;











var Index = (0,mobx_react__WEBPACK_IMPORTED_MODULE_7__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Index() {
    var _this;
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Index);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Index, [].concat(args));
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "state", {
      identifyList: [{
        content: '垃**鉴别了小卡'
      }, {
        content: '小**鉴别了小卡'
      }, {
        content: '王**鉴别了小卡'
      }, {
        content: '李**鉴别了小卡'
      }],
      cardList: [{
        id: 1,
        imageUrl: 'https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856',
        userName: '椰椰',
        result: '符合正品特征'
      }, {
        id: 2,
        imageUrl: 'https://img1.baidu.com/it/u=1704341968,2213944469&fm=253&app=138&f=JPEG?w=682&h=850',
        userName: '椰椰',
        result: '符合正品特征'
      }, {
        id: 3,
        imageUrl: 'https://img1.baidu.com/it/u=3825010941,2472429333&fm=253&app=138&f=JPEG?w=684&h=620',
        userName: '椰椰',
        result: '符合正品特征'
      }, {
        id: 4,
        imageUrl: 'https://img2.baidu.com/it/u=3440722248,2022509867&fm=253&app=138&f=JPEG?w=684&h=865',
        userName: '椰椰',
        result: '符合正品特征'
      }]
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "handleIdentifyClick", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
        url: '/pages/identification/identification'
      });
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this, "handleScrollToLower", function () {
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
          cardList: [].concat((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.state.cardList), newCards)
        });
      }, 1000); // 模拟网络延迟
    });
    return _this;
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_12__["default"])(Index, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_13__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__["default"].hideHomeButton();
      var _Native$getUrlParams = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__["default"].getUrlParams(),
        id = _Native$getUrlParams.id;
      // 请求数据：跟登录态无关，无需使用 loginModel.checkLogin
      _models_indexModel__WEBPACK_IMPORTED_MODULE_3__["default"].getStatsInfo(id);
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _Native$getUrlParams2 = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__["default"].getUrlParams(),
        source = _Native$getUrlParams2.source;
      _common_tianqi__WEBPACK_IMPORTED_MODULE_2__.indexUBT.pageView({
        source: source
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      var _Native$getUrlParams3 = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__["default"].getUrlParams(),
        source = _Native$getUrlParams3.source;
      _common_tianqi__WEBPACK_IMPORTED_MODULE_2__.indexUBT.pageViewOut({
        source: source
      });
    }

    /**
     * 小程序分享配置
     * @param options
     * @returns
     */
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(options) {
      return _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__["default"].getShareAppOptions((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_15__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_15__["default"])({}, options), {}, {
        path: '/pages/index/index?shareUserId=123'
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_16__.PageSkeleton, {
        className: "page-index-view",
        onScrollToLower: this.handleScrollToLower,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "top-gradient-bg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "left-gradient-bg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "right-gradient-bg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
            src: _assets_index__WEBPACK_IMPORTED_MODULE_5__.StarCard_home_bg,
            className: "top-decoration-bg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "page-title-section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
              className: "main-title",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                className: "title-text",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_5__.StarCard_icon,
                  className: "star-card-icon"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                className: "divider"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                className: "subtitle",
                children: "\u4E2D\u68C0\u3001\u6D77\u5173\u4E92\u8BA4\u7684AI\u9274\u5B9A\u56E2\u4F53\u6807\u51C6"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "main-card-section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
              className: "main-card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
                src: _assets_index__WEBPACK_IMPORTED_MODULE_5__.cardDecoration,
                className: "card-decoration"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                className: "card-top",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_5__.identifyText,
                  className: "card-title"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                  className: "card-description",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
                    src: _assets_index__WEBPACK_IMPORTED_MODULE_5__.identifyText_icon,
                    className: "description-icon"
                  }), "\u7EBF\u4E0A\u56FE\u7247\u9274\u522B\uFF0CAI+\u4EBA\u5DE5\u53CC\u4FDD\u9669"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                  className: "card-feature",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Swiper, {
                    className: "feature-swiper",
                    vertical: true,
                    autoplay: true,
                    circular: true,
                    interval: 3000,
                    duration: 500,
                    indicatorDots: false,
                    children: this.state.identifyList.map(function (item, index) {
                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.SwiperItem, {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                          className: "feature-item",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                            className: "feature-icon"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                            className: "feature-text",
                            children: item.content
                          })]
                        })
                      }, index);
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                  className: "identify-button",
                  onClick: this.handleIdentifyClick,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                    className: "button-icon",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
                      src: _assets_index__WEBPACK_IMPORTED_MODULE_5__.scanIcon,
                      className: "icon-image"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                    className: "button-text",
                    children: "\u8BC6\u522B\u9274\u5B9A"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                className: "card-bottom",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                  className: "stats-text",
                  children: ["\u7D2F\u8BA1\u9274\u522B\u6570\u91CF\u8D85\u8FC7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
                    className: "highlight-number",
                    children: "5,155,105"
                  })]
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "history-section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
              className: "history-title",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.Image, {
                src: _assets_index__WEBPACK_IMPORTED_MODULE_5__.historySectionTitle,
                className: "title-image"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
            className: "image-grid-section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_17__.View, {
              className: "image-grid",
              children: this.state.cardList.map(function (card) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_cardCell__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  imageUrl: card.imageUrl,
                  userName: card.userName,
                  result: card.result
                }, card.id);
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_18__.SafeAreaView, {
            safeAreaInsetBottom: true
          })]
        }, "scroll")
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/models/indexModel.ts":
/*!**********************************!*\
  !*** ./src/models/indexModel.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _services_apis_index_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/apis/index.api */ "./src/services/apis/index.api.ts");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");








var _class, _descriptor;


var IndexModel = (_class = /*#__PURE__*/function () {
  function IndexModel() {
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IndexModel);
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_initializerDefineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "statsInfo", _descriptor, this);
  }
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexModel, [{
    key: "getStatsInfo",
    value: (
    /**
     * 获取统计信息
     */
    function () {
      var _getStatsInfo = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])().m(function _callee() {
        var id,
          _yield$requestStatsIn,
          data,
          _args = arguments;
        return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              id = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
              _context.n = 1;
              return (0,_services_apis_index_api__WEBPACK_IMPORTED_MODULE_6__.requestStatsInfoApi)({
                id: id
              });
            case 1:
              _yield$requestStatsIn = _context.v;
              data = _yield$requestStatsIn.data;
              this.statsInfo = data;
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function getStatsInfo() {
        return _getStatsInfo.apply(this, arguments);
      }
      return getStatsInfo;
    }())
  }]);
}(), _descriptor = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_class.prototype, "statsInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return Object.create(null);
  }
}), (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_applyDecoratedDescriptor_js__WEBPACK_IMPORTED_MODULE_7__["default"])(_class.prototype, "getStatsInfo", [mobx__WEBPACK_IMPORTED_MODULE_0__.action], Object.getOwnPropertyDescriptor(_class.prototype, "getStatsInfo"), _class.prototype), _class);
/* harmony default export */ __webpack_exports__["default"] = (new IndexModel());

// 当需要多实例共存时，直接导出Class，在页面中创建实例
// export default IndexModel;

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"","navigationBarBackgroundColor":"#000","navigationStyle":"custom","enableShareAppMessage":true};

_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].enableShareAppMessage = true

var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/index/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/services/apis/index.api.ts":
/*!****************************************!*\
  !*** ./src/services/apis/index.api.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestStatsInfoApi: function() { return /* binding */ requestStatsInfoApi; }
/* harmony export */ });
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Http/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/services/actions.ts");


/**
 * 获取统计信息
 * @param data
 * @returns
 */
function requestStatsInfoApi(data) {
  return _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__.Http.post(_actions__WEBPACK_IMPORTED_MODULE_1__.getStatsInfoAction, data);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map