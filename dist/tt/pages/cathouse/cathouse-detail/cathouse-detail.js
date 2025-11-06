"use strict";
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/cathouse/cathouse-detail/cathouse-detail"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cathouse/cathouse-detail/cathouse-detail!./src/pages/cathouse/cathouse-detail/cathouse-detail.tsx":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cathouse/cathouse-detail/cathouse-detail!./src/pages/cathouse/cathouse-detail/cathouse-detail.tsx ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CatHouseDetail; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageSkeleton/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageHeader/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/OssImage/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/SafeAreaView/index.js");
/* harmony import */ var _components_cathouse_CatHouseDataView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/cathouse/CatHouseDataView */ "./src/components/cathouse/CatHouseDataView/index.tsx");
/* harmony import */ var _models_catHouseModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/catHouseModel */ "./src/models/catHouseModel.ts");
/* harmony import */ var _models_loginModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var _class;









var CatHouseDetail = (0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.observer)(_class = /*#__PURE__*/function (_Component) {
  function CatHouseDetail() {
    var _this;
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, CatHouseDetail);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, CatHouseDetail, [].concat(args));
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "gotoPay", function () {
      _models_loginModel__WEBPACK_IMPORTED_MODULE_3__["default"].checkLogin(function (isLogin) {
        if (isLogin) {
          _models_catHouseModel__WEBPACK_IMPORTED_MODULE_2__["default"].doPay();
        } else {
          _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_9__["default"].showToast({
            title: '请先登录'
          });
        }
      }, {
        observe: true
      });
    });
    return _this;
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__["default"])(CatHouseDetail, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(CatHouseDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_9__["default"].hideHomeButton();
    }
    /**
     * 小程序分享配置
     * @param options
     * @returns
     */
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(options) {
      return _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_9__["default"].getShareAppOptions((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__["default"])((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_12__["default"])({}, options), {}, {
        title: '谷阳北路猫猫屋',
        desc: '分享一个猫猫的故事',
        path: _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_9__["default"].getPagePath({
          query: true
        }) || '/pages/index/index',
        imageUrl: 'https://m.hellobike.com/resource/helloyun/23756/JGFhfKegoE.jpg',
        targetType: 'mini',
        shareType: [1],
        callback: function callback(res) {
          _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_9__["default"].showToast(res.errorMessage);
          console.log('onShareAppMessage', res);
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__.PageSkeleton, {
        className: "page-detail-view",
        headerWithFadeInOut: true,
        customProps: {
          // 隐藏elf
          hideElf: true
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__.PageHeader, {
            useBgColorForCustomBackIcon: true,
            useBgColorForNativeBackIcon: true,
            isGhost: true
          })
        }, "backheader"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__.PageHeader, {
            useBgColorForCustomBackIcon: true,
            title: "\u732B\u5C4B\u8BE6\u60C5",
            backIconColor: "black"
          })
        }, "leaveheader"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Swiper, {
            className: "cathouse-header-view",
            autoplay: true,
            circular: true
            /** 修复了 `adjustHeight` 不生效的问题 */,
            adjustHeight: "none",
            indicatorDots: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.SwiperItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_16__.OssImage, {
                className: "cathouse-cover",
                mode: "aspectFill",
                src: "https://m.hellobike.com/resource/helloyun/23756/JGFhfKegoE.jpg"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.SwiperItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_16__.OssImage, {
                className: "cathouse-cover",
                mode: "aspectFill",
                src: "https://m.hellobike.com/resource/gallery/146/WH7JGaID_shelves-ranking-bg.jpg"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "cathouse-content-view",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "cathouse-name",
              children: ["\u8C37\u9633\u5317\u8DEF\u732B\u732B\u5C4B", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Button, {
                className: "share-btn",
                openType: "share",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_16__.OssImage, {
                  mode: "aspectFill",
                  width: 80,
                  className: "share-icon",
                  src: "https://m.hellobike.com/resource/gallery/146/ckAPp2NW_share.png"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_cathouse_CatHouseDataView__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
          })]
        }, "scroll"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_17__.SafeAreaView, {
            safeAreaInsetBottom: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "cathouse-pay-btn",
              onClick: this.gotoPay,
              children: "\u9A8C\u8BC1\u652F\u4ED8"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "cathouse-pay-tips",
              children: "\u8BF7\u5728FAT\u73AF\u5883\u4E0B\u9A8C\u8BC1\uFF08\u5176\u4ED6\u73AF\u5883\u6CA1\u6709\u6570\u636E\uFF09"
            })]
          })
        }, "footer")]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/apis/Pay/api.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/apis/Pay/api.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestConfirmPayApi: function() { return /* binding */ requestConfirmPayApi; }
/* harmony export */ });
/* harmony import */ var _utils_appenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/appenv */ "./node_modules/@hb/taro-fusion-components/esm/utils/appenv.js");
/* harmony import */ var _Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Http */ "./node_modules/@hb/taro-fusion-components/esm/apis/Http/index.js");


/**
 * 请求待支付确认参数，用于唤起支付收银台
 * @param data
 * @param baseUrl
 * @returns
 */
function requestConfirmPayApi(data, codeEnv) {
  var url = 'com.alphapay.paymentOrder.pay';
  return _Http__WEBPACK_IMPORTED_MODULE_0__.Http.post(url, data, {
    baseURL: (0,_utils_appenv__WEBPACK_IMPORTED_MODULE_1__.getBaseUrl)(codeEnv).API,
    catchErrorCode: true
  });
}

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/apis/Pay/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/apis/Pay/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pay: function() { return /* binding */ Pay; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _hb_NBridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hb/NBridge */ "./node_modules/@hb/NBridge/lib/NBridge.js");
/* harmony import */ var _hb_NBridge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hb_NBridge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ "./node_modules/@hb/taro-fusion-components/esm/apis/Pay/api.js");
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Native */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/PureNative.js");
/* harmony import */ var _utils_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/shared */ "./node_modules/@hb/taro-fusion-components/esm/utils/shared.js");



function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}





var Pay = /*#__PURE__*/function () {
  function Pay() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Pay);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Pay, null, [{
    key: "config",
    value:
    /**
     * 支付基础配置（必须）
     * @param options 配置项 IBasePayOptions
     * @supported weapp,alipay,mpaas
     */
    function config(options) {
      this.basePayOptions = _objectSpread(_objectSpread({}, this.basePayOptions), options);
    }

    /**
     * 支付宝支付
     * @param params RequestPayParams
     */
  }, {
    key: "requestAlipayPay",
    value: function requestAlipayPay(params) {
      var _this$basePayOptions = this.basePayOptions,
        defaultPayChannel = _this$basePayOptions.payChannel,
        defaultSystemCode = _this$basePayOptions.systemCode,
        defaultBusinessType = _this$basePayOptions.businessType;
      var guid = params.guid,
        amount = params.amount,
        orderId = params.orderId,
        token = params.token,
        _params$payChannel = params.payChannel,
        payChannel = _params$payChannel === void 0 ? defaultPayChannel : _params$payChannel,
        _params$systemCode = params.systemCode,
        systemCode = _params$systemCode === void 0 ? defaultSystemCode : _params$systemCode,
        _params$businessType = params.businessType,
        businessType = _params$businessType === void 0 ? defaultBusinessType : _params$businessType;
      var requestParams = {
        amount: amount,
        channel: payChannel,
        systemCode: systemCode,
        orders: [{
          amount: amount,
          guid: guid,
          orderId: orderId,
          businessType: businessType
        }],
        token: token
      };
      return new Promise(function (resolve, reject) {
        (0,_api__WEBPACK_IMPORTED_MODULE_5__.requestConfirmPayApi)(requestParams, _Native__WEBPACK_IMPORTED_MODULE_6__["default"].codeEnv).then(function (res) {
          if (res.code === 0) {
            var _ref = res.data.credential || {},
              orderStr = _ref.params;
            my.tradePay({
              orderStr: orderStr,
              success: function success(data) {
                var _ref2 = data || {},
                  resultCode = _ref2.resultCode,
                  memo = _ref2.memo;
                // 支付成功
                if (resultCode === '9000') {
                  resolve({
                    errCode: 0,
                    errMsg: 'pay success'
                  });
                } else {
                  reject((0,_utils_shared__WEBPACK_IMPORTED_MODULE_7__.createErrorObject)(memo));
                }
              },
              fail: function fail(error) {
                reject((0,_utils_shared__WEBPACK_IMPORTED_MODULE_7__.createErrorObject)(error));
              }
            });
          } else {
            reject((0,_utils_shared__WEBPACK_IMPORTED_MODULE_7__.createErrorObject)(res.msg || ''));
          }
        });
      });
    }

    /**
     * MPAAS小程序支付
     * @param params
     * @returns
     */
  }, {
    key: "requestMpaasPay",
    value: function requestMpaasPay(params) {
      var defaultBusinessType = this.basePayOptions.businessType;
      var guid = params.guid,
        amount = params.amount,
        orderId = params.orderId,
        businessScene = params.businessScene,
        _params$businessType2 = params.businessType,
        businessType = _params$businessType2 === void 0 ? defaultBusinessType : _params$businessType2;
      var requestParams = {
        businessType: businessType,
        businessScene: businessScene,
        payMoney: amount,
        payList: [{
          amount: amount,
          guid: guid,
          businessType: businessType,
          orderId: orderId,
          type: '1'
        }]
      };
      return new Promise(function (resolve, reject) {
        _hb_NBridge__WEBPACK_IMPORTED_MODULE_1___default().requestPayment(_objectSpread(_objectSpread({}, requestParams), {}, {
          success: function success() {
            resolve({
              errCode: 0,
              errMsg: 'pay success'
            });
          },
          fail: function fail(error) {
            reject((0,_utils_shared__WEBPACK_IMPORTED_MODULE_7__.createErrorObject)(error));
          }
        }));
      });
    }

    /**
     * 微信支付
     * @param params
     * @returns
     */
  }, {
    key: "requestWxPay",
    value: function requestWxPay(params) {
      var _this$basePayOptions2 = this.basePayOptions,
        defaultPayChannel = _this$basePayOptions2.payChannel,
        defaultSystemCode = _this$basePayOptions2.systemCode,
        defaultBusinessType = _this$basePayOptions2.businessType;
      var guid = params.guid,
        amount = params.amount,
        orderId = params.orderId,
        openId = params.openId,
        token = params.token,
        _params$payChannel2 = params.payChannel,
        payChannel = _params$payChannel2 === void 0 ? defaultPayChannel : _params$payChannel2,
        _params$systemCode2 = params.systemCode,
        systemCode = _params$systemCode2 === void 0 ? defaultSystemCode : _params$systemCode2,
        _params$businessType3 = params.businessType,
        businessType = _params$businessType3 === void 0 ? defaultBusinessType : _params$businessType3;
      var requestParams = {
        amount: amount,
        channel: payChannel,
        systemCode: systemCode,
        orders: [{
          amount: amount,
          guid: guid,
          orderId: orderId,
          businessType: businessType
        }],
        extra: JSON.stringify({
          openId: openId
        }),
        token: token
      };
      return new Promise(function (resolve, reject) {
        (0,_api__WEBPACK_IMPORTED_MODULE_5__.requestConfirmPayApi)(requestParams, _Native__WEBPACK_IMPORTED_MODULE_6__["default"].codeEnv).then(function (res) {
          if (res.code === 0) {
            var extra = res.data.extra;
            var _ref3 = extra || {},
              timeStamp = _ref3.timeStamp,
              nonceStr = _ref3.nonceStr,
              paySign = _ref3.paySign;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().requestPayment({
              timeStamp: timeStamp,
              nonceStr: nonceStr,
              "package": extra["package"],
              signType: 'MD5',
              paySign: paySign,
              success: function success() {
                resolve({
                  errCode: 0,
                  errMsg: 'pay success'
                });
              },
              fail: function fail(error) {
                reject((0,_utils_shared__WEBPACK_IMPORTED_MODULE_7__.createErrorObject)(error));
              }
            });
          } else {
            reject((0,_utils_shared__WEBPACK_IMPORTED_MODULE_7__.createErrorObject)(res.msg || ''));
          }
        });
      });
    }

    /**
     * 发起支付，调用成功时会唤起收银台支付
     * @param params 支付请求参数 IRequestPayParams
     * @supported weapp,alipay,mpaas
     */
  }, {
    key: "request",
    value: function request(params) {
      if (_Native__WEBPACK_IMPORTED_MODULE_6__["default"].IS_WEAPP) {
        return this.requestWxPay(params);
      }
      if (_Native__WEBPACK_IMPORTED_MODULE_6__["default"].IS_MPAAS) {
        return this.requestMpaasPay(params);
      }
      if (_Native__WEBPACK_IMPORTED_MODULE_6__["default"].IS_ALIPAY) {
        return this.requestAlipayPay(params);
      }
      return this.requestWxPay(params);
    }
  }]);
}();
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Pay, "basePayOptions", {
  businessType: 0,
  payChannel: '',
  systemCode: ''
});

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/utils/appenv.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/utils/appenv.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBaseUrl: function() { return /* binding */ getBaseUrl; }
/* harmony export */ });
var baseUrl = {
  API: 'https://api.hellobike.com/api/'
};

/**
 * 根据 codeEnv 获取baseUrl
 * @param codeEnv
 * @returns
 */
function getBaseUrl(codeEnv) {
  if (codeEnv !== 'pro') {
    baseUrl.API = "https://".concat(codeEnv, "-api.hellobike.com/api/");
  }
  return baseUrl;
}

/***/ }),

/***/ "./src/assets/cathouse/index.ts":
/*!**************************************!*\
  !*** ./src/assets/cathouse/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IMG_donggan: function() { return /* binding */ IMG_donggan; },
/* harmony export */   IMG_feedgs: function() { return /* binding */ IMG_feedgs; },
/* harmony export */   IMG_feedpeople: function() { return /* binding */ IMG_feedpeople; },
/* harmony export */   IMG_maoliang: function() { return /* binding */ IMG_maoliang; },
/* harmony export */   IMG_rundays: function() { return /* binding */ IMG_rundays; },
/* harmony export */   IMG_xuhang: function() { return /* binding */ IMG_xuhang; }
/* harmony export */ });
var IMG_xuhang = 'https://m.hellobike.com/resource/helloyun/29354/E7iTn_dianchi.png';
var IMG_donggan = 'https://m.hellobike.com/resource/helloyun/wb21675/1DWMU_lyophilization.png';
var IMG_maoliang = 'https://m.hellobike.com/resource/helloyun/22132/A6Peq_maoliang.png';
var IMG_feedgs = 'https://m.hellobike.com/resource/helloyun/23756/lYpmS_WechatIMG187.png';
var IMG_feedpeople = 'https://m.hellobike.com/resource/helloyun/23756/FNbnKE7sHh.png';
var IMG_rundays = 'https://m.hellobike.com/resource/helloyun/23756/n0lJk_WechatIMG190.png';

/***/ }),

/***/ "./src/components/cathouse/CatHouseDataView/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/cathouse/CatHouseDataView/index.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/OssImage/index.js");
/* harmony import */ var _assets_cathouse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/cathouse */ "./src/assets/cathouse/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var CatHouseDataView = /*#__PURE__*/function (_Component) {
  function CatHouseDataView() {
    var _this;
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CatHouseDataView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CatHouseDataView, [].concat(args));
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_this, "state", {
      runDataList: [{
        iconUrl: _assets_cathouse__WEBPACK_IMPORTED_MODULE_5__.IMG_xuhang,
        data: 6,
        title: '剩余续航天数',
        unit: '天'
      }, {
        iconUrl: _assets_cathouse__WEBPACK_IMPORTED_MODULE_5__.IMG_donggan,
        data: 91,
        title: '当前冻干',
        unit: '%'
      }, {
        iconUrl: _assets_cathouse__WEBPACK_IMPORTED_MODULE_5__.IMG_maoliang,
        data: 85,
        title: '当前猫粮',
        unit: '%'
      }, {
        iconUrl: _assets_cathouse__WEBPACK_IMPORTED_MODULE_5__.IMG_feedgs,
        data: 31.0,
        title: '总投喂克数',
        unit: '万克'
      }, {
        iconUrl: _assets_cathouse__WEBPACK_IMPORTED_MODULE_5__.IMG_feedpeople,
        data: 5723,
        title: '投喂过的人数',
        unit: '人'
      }, {
        iconUrl: _assets_cathouse__WEBPACK_IMPORTED_MODULE_5__.IMG_rundays,
        data: 550,
        title: '已持续运行天数',
        unit: '天'
      }]
    });
    return _this;
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__["default"])(CatHouseDataView, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(CatHouseDataView, [{
    key: "render",
    value: function render() {
      var runDataList = this.state.runDataList;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "com-cathouse-data-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "run-data-view",
          children: runDataList.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "run-data-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_9__.OssImage, {
                mode: "widthFix",
                className: "icon",
                src: item.iconUrl
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                className: "data",
                children: [item.data, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
                  className: "unit",
                  children: item.unit
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
                className: "title",
                children: item.title
              })]
            }, index);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "cathouse-story",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "title",
            children: "\u732B\u732B\u7684\u6545\u4E8B"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
            className: "content",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "dl",
              children: "\u9047\u89C1\u5C0F\u7070"
            }), "\u5728\u4E00\u4E2A\u98CE\u548C\u65E5\u4E3D\u7684\u4E0B\u5348\uFF0C\u6211\u50CF\u5F80\u5E38\u4E00\u6837\u5728\u5C0F\u533A\u7684\u82B1\u56ED\u91CC\u6563\u6B65\u3002\u7A81\u7136\uFF0C\u4E00\u53EA\u7626\u5F31\u7684\u5C0F\u732B\u4ECE\u8349\u4E1B\u4E2D\u94BB\u4E86\u51FA\u6765\uFF0C\u5B83\u7684\u773C\u795E\u4E2D\u5145\u6EE1\u4E86\u6050\u60E7\u548C\u65E0\u52A9\u3002 \u6211\u8E72\u4E0B\u8EAB\u6765\uFF0C\u8F7B\u8F7B\u5730\u629A\u6478\u7740\u5C0F\u732B\uFF0C\u53D1\u73B0\u5B83\u8EAB\u4E0A\u6709\u591A\u5904\u4F24\u53E3\uFF0C\u663E\u7136\u662F\u88AB\u5176\u4ED6\u52A8\u7269\u653B\u51FB\u8FC7\u3002\u5C0F\u732B\u7684\u773C\u795E\u8BA9\u6211\u5FC3\u751F\u601C\u60AF\uFF0C\u6211\u51B3\u5B9A\u5E26\u5B83\u56DE\u5BB6\u6551\u6CBB\u3002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "dl",
              children: "\u6551\u6CBB\u4E0E\u5EB7\u590D"
            }), "\u56DE\u5230\u5BB6\u4E2D\uFF0C\u6211\u7ACB\u5373\u4E3A\u5C0F\u732B\u8FDB\u884C\u4E86\u7B80\u5355\u7684\u5305\u624E\uFF0C\u5E76\u8054\u7CFB\u4E86\u9644\u8FD1\u7684\u52A8\u7269\u533B\u9662\u3002\u517D\u533B\u68C0\u67E5\u540E\u53D1\u73B0\uFF0C \u5C0F\u732B\u4E0D\u4EC5\u6709\u5916\u4F24\uFF0C\u8FD8\u6709\u8F7B\u5FAE\u7684\u8425\u517B\u4E0D\u826F\u3002\u6211\u51B3\u5B9A\u7ED9\u5B83\u53D6\u540D\u201C\u5C0F\u7070\u201D\uFF0C\u5E76\u5F00\u59CB\u4E3A\u5B83\u5236\u5B9A\u8BE6\u7EC6\u7684\u5EB7\u590D\u8BA1\u5212\u3002 \u6BCF\u5929\uFF0C\u6211\u90FD\u4F1A\u4E3A\u5C0F\u7070\u51C6\u5907\u8425\u517B\u4E30\u5BCC\u7684\u98DF\u7269\uFF0C\u966A\u5B83\u73A9\u800D\uFF0C\u5E2E\u52A9\u5B83\u6062\u590D\u4F53\u529B\u3002 \u7ECF\u8FC7\u4E00\u4E2A\u6708\u7684\u6089\u5FC3\u7167\u6599\uFF0C\u5C0F\u7070\u7684\u4F24\u53E3\u9010\u6E10\u6108\u5408\uFF0C\u8EAB\u4F53\u4E5F\u53D8\u5F97\u5065\u58EE\u8D77\u6765\u3002", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
              className: "dl",
              children: "\u5BFB\u627E\u65B0\u5BB6"
            }), "\u770B\u7740\u5C0F\u7070\u6D3B\u6CFC\u7684\u6837\u5B50\uFF0C\u6211\u51B3\u5B9A\u4E3A\u5B83\u5BFB\u627E\u4E00\u4E2A\u6E29\u6696\u7684\u65B0\u5BB6\u3002\u6211\u901A\u8FC7\u793E\u4EA4\u5A92\u4F53\u53D1\u5E03\u4E86\u5C0F\u7070\u7684\u7167\u7247\u548C\u6545\u4E8B\uFF0C \u5F88\u5FEB\u5C31\u6709\u8BB8\u591A\u7231\u5FC3\u4EBA\u58EB\u8054\u7CFB\u6211\uFF0C\u8868\u793A\u613F\u610F\u6536\u517B\u5C0F\u7070\u3002\u7ECF\u8FC7\u7B5B\u9009\uFF0C\u6211\u6700\u7EC8\u9009\u62E9\u4E86\u5F20\u963F\u59E8\u4F5C\u4E3A\u5C0F\u7070\u7684\u65B0\u4E3B\u4EBA\u3002 \u5F20\u963F\u59E8\u662F\u4E00\u4F4D\u9000\u4F11\u6559\u5E08\uFF0C\u5979\u5BF9\u52A8\u7269\u5145\u6EE1\u7231\u5FC3\uFF0C\u5BB6\u91CC\u4E5F\u6709\u8DB3\u591F\u7684\u7A7A\u95F4\u548C\u65F6\u95F4\u7167\u987E\u5C0F\u7070\u3002 \u5728\u6211\u7684\u966A\u4F34\u4E0B\uFF0C\u5C0F\u7070\u88AB\u5B89\u5168\u5730\u9001\u5230\u4E86\u5F20\u963F\u59E8\u7684\u5BB6\u4E2D\u3002\u5F20\u963F\u59E8\u5BF9\u5C0F\u7070\u7684\u5230\u6765\u975E\u5E38\u9AD8\u5174\uFF0C\u5979\u627F\u8BFA\u4F1A\u50CF\u5BF9\u5F85\u81EA\u5DF1\u7684\u5B69\u5B50\u4E00\u6837\u7167\u987E\u5B83\u3002 \u5C0F\u7070\u7EC8\u4E8E\u627E\u5230\u4E86\u4E00\u4E2A\u6E29\u6696\u7684\u5BB6\uFF0C\u5F00\u59CB\u4E86\u5B83\u65B0\u7684\u751F\u6D3B\u3002"]
          })]
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ __webpack_exports__["default"] = (CatHouseDataView);

/***/ }),

/***/ "./src/models/catHouseModel.ts":
/*!*************************************!*\
  !*** ./src/models/catHouseModel.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _common_native__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/common/native */ "./src/common/native.ts");
/* harmony import */ var _constants_app_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/app.const */ "./src/constants/app.const.ts");
/* harmony import */ var _services_apis_cathouse_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/apis/cathouse.api */ "./src/services/apis/cathouse.api.ts");
/* harmony import */ var _loginModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginModel */ "./src/models/loginModel.ts");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Pay/index.js");









var CatHouseModel = /*#__PURE__*/function () {
  function CatHouseModel() {
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, CatHouseModel);
  }
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(CatHouseModel, [{
    key: "createOrder",
    value: function createOrder() {
      var params = {
        applyOrderId: "5410379339760926721",
        coinType: 2,
        orderSource: 3,
        paySkuName: "1个月吃饱饱",
        paymoneyValue: 0.3,
        paymoneykey: "apply_pay_key6"
      };
      return (0,_services_apis_cathouse_api__WEBPACK_IMPORTED_MODULE_4__.requestSaveOrderApi)(params);
    }
  }, {
    key: "randomStr",
    value: function randomStr(length) {
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var result = '';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
  }, {
    key: "randomInt",
    value: function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * 创建待支付订单
     * @returns 
     */
  }, {
    key: "createTtPayOrder",
    value: (function () {
      var _createTtPayOrder = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])().m(function _callee() {
        var _yield$loginModel$get, userGuid, _yield$loginModel$get2, userNewId;
        return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return _loginModel__WEBPACK_IMPORTED_MODULE_1__["default"].getLoginResult();
            case 1:
              _yield$loginModel$get = _context.v;
              userGuid = _yield$loginModel$get.guid;
              _yield$loginModel$get2 = _yield$loginModel$get.userNewId;
              userNewId = _yield$loginModel$get2 === void 0 ? 0 : _yield$loginModel$get2;
              return _context.a(2, (0,_services_apis_cathouse_api__WEBPACK_IMPORTED_MODULE_4__.requestOrderServiceIfaceApi)({
                PayOrderCondition: {
                  directPay: 1,
                  amount: 0.1,
                  reminder: 1,
                  orderId: this.randomInt(1, 10000000000000).toString(),
                  cityCode: "021",
                  businessId: this.randomStr(32),
                  chargeType: '4001',
                  userGuid: userGuid,
                  showDetail: 1,
                  orderTime: new Date().getTime().toString(),
                  userNewId: userNewId,
                  payedNotify: 1,
                  businessType: 40
                }
              }));
          }
        }, _callee, this);
      }));
      function createTtPayOrder() {
        return _createTtPayOrder.apply(this, arguments);
      }
      return createTtPayOrder;
    }()
    /**
     * 创建待支付订单
     * @returns 
     */
    )
  }, {
    key: "createPayOrder",
    value: (function () {
      var _createPayOrder = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])().m(function _callee2() {
        var _yield$this$createOrd, data, _data$orderId, orderId, _data$tradeOrderId, tradeOrderId;
        return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!_common_native__WEBPACK_IMPORTED_MODULE_7__["default"].IS_TT) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2, this.createTtPayOrder().then(function (_ref) {
                var data = _ref.data;
                var amount = data.amount,
                  guid = data.guid;
                return {
                  businessType: 28,
                  businessScene: 1,
                  guid: guid,
                  amount: amount
                };
              }));
            case 1:
              _context2.n = 2;
              return this.createOrder();
            case 2:
              _yield$this$createOrd = _context2.v;
              data = _yield$this$createOrd.data;
              _data$orderId = data.orderId, orderId = _data$orderId === void 0 ? '' : _data$orderId, _data$tradeOrderId = data.tradeOrderId, tradeOrderId = _data$tradeOrderId === void 0 ? '' : _data$tradeOrderId;
              return _context2.a(2, (0,_services_apis_cathouse_api__WEBPACK_IMPORTED_MODULE_4__.requestToPayOrderApi)({
                orderId: orderId,
                tradeOrderId: tradeOrderId
              }).then(function (_ref2) {
                var data = _ref2.data;
                var _data$businessType = data.businessType,
                  businessType = _data$businessType === void 0 ? 0 : _data$businessType,
                  _data$businessScene = data.businessScene,
                  businessScene = _data$businessScene === void 0 ? 0 : _data$businessScene,
                  amount = data.payPrice,
                  guid = data.payNo;
                return {
                  businessType: businessType,
                  businessScene: businessScene,
                  amount: amount,
                  guid: guid
                };
              }));
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function createPayOrder() {
        return _createPayOrder.apply(this, arguments);
      }
      return createPayOrder;
    }())
  }, {
    key: "doPay",
    value: function doPay() {
      this.createPayOrder().then(/*#__PURE__*/function () {
        var _ref3 = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])().m(function _callee3(data) {
          var _data$businessType2, businessType, _data$businessScene2, businessScene, amount, _data$guid, guid, _yield$loginModel$get3, token, _yield$loginModel$get4, openId;
          return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])().w(function (_context3) {
            while (1) switch (_context3.n) {
              case 0:
                _data$businessType2 = data.businessType, businessType = _data$businessType2 === void 0 ? 0 : _data$businessType2, _data$businessScene2 = data.businessScene, businessScene = _data$businessScene2 === void 0 ? 0 : _data$businessScene2, amount = data.amount, _data$guid = data.guid, guid = _data$guid === void 0 ? '' : _data$guid;
                _context3.n = 1;
                return _loginModel__WEBPACK_IMPORTED_MODULE_1__["default"].getLoginResult();
              case 1:
                _yield$loginModel$get3 = _context3.v;
                token = _yield$loginModel$get3.token;
                _yield$loginModel$get4 = _yield$loginModel$get3.openId;
                openId = _yield$loginModel$get4 === void 0 ? '' : _yield$loginModel$get4;
                _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_8__.Pay.request({
                  systemCode: _constants_app_const__WEBPACK_IMPORTED_MODULE_0__["default"].SYSTEM_CODE,
                  payChannel: _constants_app_const__WEBPACK_IMPORTED_MODULE_0__["default"].PAY_CHANNEL,
                  businessType: businessType,
                  businessScene: businessScene,
                  guid: guid,
                  amount: String(amount),
                  token: token,
                  openId: openId
                }).then(function () {
                  _common_native__WEBPACK_IMPORTED_MODULE_7__["default"].showToast({
                    title: '支付成功'
                  });
                }).catch(function (error) {
                  _common_native__WEBPACK_IMPORTED_MODULE_7__["default"].showToast({
                    title: error.message
                  });
                  console.error('支付失败', error);
                });
              case 2:
                return _context3.a(2);
            }
          }, _callee3);
        }));
        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (new CatHouseModel());

/***/ }),

/***/ "./src/pages/cathouse/cathouse-detail/cathouse-detail.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/cathouse/cathouse-detail/cathouse-detail.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cathouse_cathouse_detail_cathouse_detail_cathouse_detail_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cathouse/cathouse-detail/cathouse-detail!./cathouse-detail.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/cathouse/cathouse-detail/cathouse-detail!./src/pages/cathouse/cathouse-detail/cathouse-detail.tsx");


var config = {"navigationBarTitleText":"","navigationBarBackgroundColor":"#fff","navigationStyle":"custom","enableShareAppMessage":true};

_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cathouse_cathouse_detail_cathouse_detail_cathouse_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].enableShareAppMessage = true

var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cathouse_cathouse_detail_cathouse_detail_cathouse_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/cathouse/cathouse-detail/cathouse-detail', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cathouse_cathouse_detail_cathouse_detail_cathouse_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cathouse_cathouse_detail_cathouse_detail_cathouse_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cathouse_cathouse_detail_cathouse_detail_cathouse_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_cathouse_cathouse_detail_cathouse_detail_cathouse_detail_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/services/apis/cathouse.api.ts":
/*!*******************************************!*\
  !*** ./src/services/apis/cathouse.api.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestOrderServiceIfaceApi: function() { return /* binding */ requestOrderServiceIfaceApi; },
/* harmony export */   requestSaveOrderApi: function() { return /* binding */ requestSaveOrderApi; },
/* harmony export */   requestToPayOrderApi: function() { return /* binding */ requestToPayOrderApi; }
/* harmony export */ });
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Http/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/services/actions.ts");



// 增加去支付的接口

/**
 * 增加去支付的接口Api
 * @param data
 * @returns
 */
function requestToPayOrderApi(data) {
  return _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__.Http.post(_actions__WEBPACK_IMPORTED_MODULE_1__.toPayOrderAction, data);
}

// 增加创建订单接口

/**
 * 增加创建订单接口Api
 * @param data
 * @returns
 */
function requestSaveOrderApi(data) {
  return _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__.Http.post(_actions__WEBPACK_IMPORTED_MODULE_1__.saveOrderAction, data);
}
/**
 * 创建待支付订单（tt）
 * @param data 
 * @returns 
 */
function requestOrderServiceIfaceApi(data) {
  return _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_0__.Http.post('https://fat-rabbit.hellobike.cn/api/rpc/method/invoke', {
    appId: "AppTravelFeeCollectionFacadeService",
    iface: "com.hellobike.fee.facade.ifaces.OrderServiceIface",
    method: "createOrder",
    param: data.PayOrderCondition
  }, {
    catchErrorCode: true
  }).then(function (res) {
    if (res.code === 0) {
      // @ts-ignore 
      var json = res.resultJson || '{}';
      return JSON.parse(json);
    }
    return res;
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/cathouse/cathouse-detail/cathouse-detail.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=cathouse-detail.js.map