(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/result/result"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/result/result!./src/pages/result/result.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/result/result!./src/pages/result/result.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Result; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageSkeleton/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageHeader/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/SafeAreaView/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_result_poster_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/result-poster.json */ "./src/pages/result/data/result-poster.json");
/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/index */ "./src/assets/index/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var _class;









var Result = (0,mobx_react__WEBPACK_IMPORTED_MODULE_5__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Result() {
    var _this;
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Result);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Result, [].concat(args));
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "state", {
      posterUrl: '',
      generating: false
    });
    // 返回上一页
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "handleBack", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
    });
    // 分享功能
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "handleShare", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showActionSheet({
        itemList: ['保存鉴别证书', '分享给好友'],
        success: function success(res) {
          if (res.tapIndex === 0) {
            _this.handleSaveImage();
          } else if (res.tapIndex === 1) {
            _this.handleShareToFriend();
          }
        }
      });
    });
    // 长按生成图片
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "handleLongPress", function () {
      _this.handleSaveImage();
    });
    // 生成并保存图片
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "handleSaveImage", function () {
      try {
        _this.setState({
          generating: true
        });
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
          title: '正在生成证书...'
        });

        // 使用 Poster 组件生成图片
        // posterUrl 会在 onReady 回调中设置
      } catch (_unused) {
        _this.handleGenerateError();
      }
    });
    // 处理生成错误
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "handleGenerateError", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '生成失败，请重试',
        icon: 'none'
      });
      _this.setState({
        generating: false
      });
    });
    // Poster 生成完成回调
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "handlePosterReady", function (path) {
      _this.setState({
        posterUrl: path,
        generating: false
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();

      // 先预览图片
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().previewImage({
        urls: [path],
        current: path
      });

      // 询问是否保存
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
          title: '保存鉴别证书',
          content: '是否保存鉴别证书到相册？',
          success: function success(res) {
            if (res.confirm) {
              _this.saveToAlbum(path);
            }
          }
        });
      }, 1000);
    });
    // 保存到相册
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "saveToAlbum", function (filePath) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().saveImageToPhotosAlbum({
        filePath: filePath,
        success: function success() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '已保存到相册',
            icon: 'success'
          });
        },
        fail: function fail(err) {
          // 处理权限问题
          if (err.errMsg.includes('auth')) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '需要授权',
              content: '需要您授权保存图片到相册',
              success: function success(res) {
                if (res.confirm) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().openSetting();
                }
              }
            });
          } else {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '保存失败',
              icon: 'none'
            });
          }
        }
      });
    });
    // 分享给好友
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this, "handleShareToFriend", function () {
      if (_this.state.posterUrl) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showShareImageMenu({
          path: _this.state.posterUrl
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '请先生成证书',
          icon: 'none'
        });
      }
    });
    return _this;
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Result, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__["default"])(Result, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_11__["default"].hideHomeButton();
    }
  }, {
    key: "render",
    value: function render() {
      var generating = this.state.generating;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_12__.PageSkeleton, {
        className: "page-result-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__.PageHeader, {
            className: "custom-page-header",
            title: "\u9274\u522B\u7ED3\u679C",
            backIconColor: "white",
            bgColor: "#020202",
            titleColor: "#fff"
          })
        }, "header"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            className: "content-card",
            onLongPress: this.handleLongPress,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "title-section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "title-header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "title-text",
                  children: "\u5728\u7EBF\u9274\u5B9A\u8BC1\u660E"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "line"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "result-status",
                children: "\u7B26\u5408\u6B63\u54C1\u7279\u5F81"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "result-tip",
                children: "\u9274\u522B\u7ED3\u679C\u6839\u636E\u7528\u6237\u4FE1\u606F\u5F97\u51FA"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "img-section",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "product-image-container",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: "https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856",
                  className: "product-image",
                  mode: "aspectFill"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.appraisalPassed,
                  className: "verify-badge"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "appraiser-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                className: "appraiser-avatar",
                src: "https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856",
                mode: "aspectFill"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "appraiser-badge",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                    src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.identifyText_icon,
                    className: "verified-icon"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                    className: "badge-text",
                    children: "\u661F\u5361\u9274\u5B9A\u5E08"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "appraiser-name",
                  children: "\u6930\u6930"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "description",
              children: "\u201C\u5C0F\u5361\u7EC6\u8282\u5DE5\u827A\u7B26\u5408\u6B63\u54C1\u7279\u5F81\uFF0C\u9274\u522B\u901A\u8FC7\uFF0C\u7EB9\u8DEF\u6BD4\u4F8B\u5207\u89D2\u6CA1\u95EE\u9898\u201D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "analysis-header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                className: "analysis-title",
                children: "\u9274\u522B\u90E8\u4F4D\u5206\u6790"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "header-right",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "analysis-count",
                  children: "5\u9879\u5168\u901A\u8FC7"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.checkSuccess,
                  className: "check-success-icon"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "check-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u6B63\u9762"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.checkSuccess,
                  className: "check-success-icon"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u80CC\u9762"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.checkSuccess,
                  className: "check-success-icon"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u6B63\u9762\u7EB9\u8DEF\u5BF9\u5149"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.checkSuccess,
                  className: "check-success-icon"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u80CC\u9762\u6587\u5B57logo"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.checkSuccess,
                  className: "check-success-icon"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u50CF\u7D20\u70B9"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.checkSuccess,
                  className: "check-success-icon"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
              className: "info-section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "info-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "info-label",
                  children: "\u9274\u522BID\uFF1A"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "info-value",
                  children: "73r9273894377789"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
                className: "info-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "info-label",
                  children: "\u9274\u522B\u65F6\u95F4\uFF1A"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "info-value",
                  children: "2025-10-05"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
                  className: "info-value",
                  children: "13:30"
                })]
              })]
            })]
          }), generating && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.View, {
            style: {
              position: 'fixed',
              left: '-9999px',
              top: '-9999px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_15__.Poster, {
              palette: _data_result_poster_json__WEBPACK_IMPORTED_MODULE_2__.data,
              onReady: this.handlePosterReady
            })
          })]
        }, "scroll"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_14__.Text, {
            className: "footer-tip",
            children: "\u5728\u7EBF\u9274\u5B9A\u7ED3\u679C\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5177\u4F53\u60C5\u51B5\u4EE5\u5B9E\u7269\u4E3A\u51C6"
          })
        }, 'footer'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_16__.SafeAreaView, {
          safeAreaInsetBottom: true
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/alipay.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/alipay.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);






function _callSuper(t, o, e) {
  return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/* eslint-disable */



function getNum() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return parseFloat(value);
}
var AlipayPoster = /*#__PURE__*/function (_Component) {
  function AlipayPoster(props) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AlipayPoster);
    _this = _callSuper(this, AlipayPoster, [props]);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, "deviceWidth", 375);
    _this.state = {
      picURL: '',
      showCanvas: true,
      painterStyle: '',
      photoStyle: ''
    };
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AlipayPoster, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(AlipayPoster, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _my$getSystemInfoSync = my.getSystemInfoSync(),
        screen = _my$getSystemInfoSync.screen;
      var _ref = screen || {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 375 : _ref$width;
      this.deviceWidth = width;
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(method, data) {
      if (this.props[method]) {
        this.props[method](data);
      }
    }

    /**
     * 测量文本宽度（代替`ctx.measureText`）
     * @description fix mpaas bug: `measureText` 在真机上无法测量超过屏幕宽度（1x）的文本。
     * 故这里对文本进行切片，然后计算每个切片的长度，最后累加。
     * @param {*} text
     * @param {*} fontSize
     */
  }, {
    key: "measureText",
    value: function measureText(ctx, text, fontSize) {
      // 单元切片的字数, 乘以0.8是为了确保每个切片在安全区域内  
      var unitSliceFontCount = Math.ceil(this.deviceWidth / fontSize * 0.8);

      // 如果文本长度小于等于单片长度，则直接测量，无需切分
      if (text.length <= unitSliceFontCount) {
        return ctx.measureText(text);
      }
      var sliceStartIndex = 0;
      var sliceEndIndex = unitSliceFontCount;
      var textWidth = 0;
      while (sliceStartIndex < text.length) {
        var unitSliceText = text.slice(sliceStartIndex, sliceEndIndex);
        textWidth += ctx.measureText(unitSliceText).width;
        sliceStartIndex += unitSliceFontCount;
        sliceEndIndex += unitSliceFontCount;
      }
      return {
        width: textWidth
      };
    }

    /**
     * 将一段文字拆成多段
     * @param {*} ctx
     * @param {*} text
     * @param {*} fontSize
     * @param {*} width
     * @param {*} maxLines
     */
  }, {
    key: "splitText",
    value: function splitText(ctx, text, fontSize, width, maxLines) {
      var arr = [];

      // 记录剩余文字
      var remainText = text;
      while (arr.length < maxLines - 1 && this.measureText(ctx, remainText, fontSize).width > width) {
        // 估算一行能容纳多少文字
        var assumTextNum = Math.floor(width / fontSize);

        // 计算假定文字的宽度
        var _this$measureText = this.measureText(ctx, remainText.substr(0, assumTextNum), fontSize),
          assumTextWidth = _this$measureText.width;
        if (assumTextWidth > width) {
          while (assumTextWidth > width) {
            assumTextWidth = this.measureText(ctx, remainText.substr(0, --assumTextNum), fontSize).width;
          }
        } else {
          while (assumTextWidth <= width) {
            assumTextWidth = this.measureText(ctx, remainText.substr(0, ++assumTextNum), fontSize).width;
          }
          assumTextWidth = this.measureText(ctx, remainText.substr(0, --assumTextNum), fontSize).width;
        }
        arr.push({
          text: remainText.substr(0, assumTextNum),
          width: assumTextWidth
        });
        remainText = remainText.substr(assumTextNum);
      }
      arr.push({
        text: remainText,
        width: this.measureText(ctx, remainText, fontSize).width
      });
      return arr;
    }
  }, {
    key: "onCanvasReady",
    value: function onCanvasReady() {
      var _this2 = this;
      var that = this;
      var _this$props$palette = this.props.palette,
        viewWidth = _this$props$palette.width,
        viewHeight = _this$props$palette.height,
        background = _this$props$palette.background,
        views = _this$props$palette.views;
      var _Taro$getSystemInfoSy = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default().getSystemInfoSync(),
        pixelRatio = _Taro$getSystemInfoSy.pixelRatio;
      var context = my.createCanvasContext('photo');
      this.canvasContext = context;
      var bgSrc = background;
      context.drawImage(bgSrc, 0, 0, parseFloat(viewWidth), parseFloat(viewHeight));
      views.forEach(function (element) {
        var type = element.type,
          text = element.text,
          css = element.css,
          url = element.url;
        var color = css.color,
          fontSize = css.fontSize,
          fontWeight = css.fontWeight,
          left = css.left,
          _css$textAlign = css.textAlign,
          textAlign = _css$textAlign === void 0 ? 'left' : _css$textAlign,
          top = css.top,
          width = css.width,
          bottom = css.bottom,
          height = css.height,
          right = css.right,
          borderRadius = css.borderRadius,
          _css$maxLines = css.maxLines,
          maxLines = _css$maxLines === void 0 ? 1 : _css$maxLines,
          _css$lineHeight = css.lineHeight,
          lineHeight = _css$lineHeight === void 0 ? 1 : _css$lineHeight;
        if (type === 'text') {
          context.setFontSize(getNum(fontSize));
          context.setFillStyle(color);
          // alipay 不支持
          // context.setFontWeight(fontWeight);
          context.setTextBaseline('top');
          // 当width不存在时，以left绘制
          context.setTextAlign(width ? textAlign : 'left');
          var textWidth = _this2.measureText(context, text, getNum(fontSize)).width;
          var posX = left ? getNum(left) : getNum(viewWidth) - (getNum(right) + (getNum(textWidth) || textWidth));
          if (width && textAlign === 'center') {
            posX = posX + getNum(width || textWidth) / 2;
          }
          if (width && getNum(textWidth) > getNum(width)) {
            var txts = _this2.splitText(context, element.text, getNum(fontSize), getNum(width), maxLines);
            var _posX = left ? getNum(left) : getNum(viewWidth) - (getNum(right) + getNum(width));
            var textHeight = isNaN(lineHeight) ? getNum(lineHeight) : getNum(fontSize) * lineHeight;
            txts.forEach(function (txt, index) {
              context.fillText(txt.text, _posX, getNum(top) + textHeight * index, getNum(width));
            });
          } else {
            context.fillText(element.text, posX, getNum(top), getNum(width || textWidth));
          }
        }
        if (type === 'image') {
          context.save();
          var imgWidth = getNum(width);
          var imgHeight = getNum(height);
          var x = left ? getNum(left) : getNum(viewWidth) - (getNum(width) + getNum(right));
          var y = top ? getNum(top) : getNum(viewHeight) - (getNum(height) + getNum(bottom));
          if (borderRadius) {
            var radius = getNum(borderRadius);
            context.beginPath();
            context.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5);
            context.lineTo(x + imgWidth - radius, y);
            context.arc(x + imgWidth - radius, y + radius, radius, Math.PI * 1.5, 0);
            context.lineTo(x + imgWidth, y + imgHeight - radius);
            context.arc(x + imgWidth - radius, y + imgHeight - radius, radius, 0, Math.PI * 0.5);
            context.lineTo(x + radius, y + imgHeight);
            context.arc(x + radius, y + imgHeight - radius, radius, Math.PI * 0.5, Math.PI);
            context.lineTo(x, y + radius);
            context.setLineJoin('round');
            context.clip();
          }
          context.drawImage(url, x, y, imgWidth, imgHeight);
          context.restore();
        }
      });
      context.draw(false, function () {
        // 此时绘制完成
        context.toTempFilePath({
          success: function success(res) {
            that.triggerEvent('imgOK', {
              path: res.apFilePath
            });
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$state = this.state,
        painterStyle = _this$state.painterStyle,
        photoStyle = _this$state.photoStyle;
      var _this$props$palette2 = this.props.palette,
        width = _this$props$palette2.width,
        height = _this$props$palette2.height;
      var customStyle = this.props.customStyle;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        style: "position: relative;".concat(customStyle, ";").concat(painterStyle)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Canvas, {
        id: "photo",
        onReady: function onReady() {
          return _this3.onCanvasReady();
        },
        style: photoStyle,
        width: getNum(width),
        height: getNum(height)
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);
/* harmony default export */ __webpack_exports__["default"] = (AlipayPoster);
AlipayPoster.defaultProps = {
  use2D: false,
  customStyle: '',
  customActionStyle: {},
  palette: {},
  dancePalette: {},
  scaleRatio: 1,
  widthPixels: 0,
  dirty: false,
  LRU: false,
  action: {},
  disableAction: false,
  clearActionBox: false
};

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Poster: function() { return /* binding */ Poster; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_Native__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../apis/Native */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _alipay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alipay */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/alipay.js");
/* harmony import */ var _weapp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weapp */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/weapp.js");





function _callSuper(t, o, e) {
  return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}




var Poster = /*#__PURE__*/function (_Component) {
  function Poster() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Poster);
    return _callSuper(this, Poster, arguments);
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Poster, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Poster, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        palette = _this$props.palette,
        style = _this$props.style,
        _this$props$onReady = _this$props.onReady,
        onReady = _this$props$onReady === void 0 ? function () {
          return undefined;
        } : _this$props$onReady;
      var renderProps = {
        use2D: true,
        palette: palette,
        imgOK: function imgOK(_ref) {
          var path = _ref.path;
          return onReady(path);
        },
        customStyle: style
      };
      if (_apis_Native__WEBPACK_IMPORTED_MODULE_6__["default"].IS_ALIPAY_PLATFORM) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_alipay__WEBPACK_IMPORTED_MODULE_7__["default"], renderProps);
      }
      if (_apis_Native__WEBPACK_IMPORTED_MODULE_6__["default"].IS_WEAPP) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_weapp__WEBPACK_IMPORTED_MODULE_8__["default"], renderProps);
      }
      return null;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/calc.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/calc.js ***!
  \************************************************************************************/
/***/ (function(module) {

/* eslint-disable */
// 四则运算

!function () {
  var _calculate = function calculate(s) {
    s = s.trim();
    var stack = new Array();
    var preSign = '+';
    var numStr = '';
    var n = s.length;
    for (var i = 0; i < n; ++i) {
      if (s[i] === '.' || !isNaN(Number(s[i])) && s[i] !== ' ') {
        numStr += s[i];
      } else if (s[i] === '(') {
        var isClose = 1;
        var j = i;
        while (isClose > 0) {
          j += 1;
          if (s[j] === '(') isClose += 1;
          if (s[j] === ')') isClose -= 1;
        }
        numStr = "".concat(_calculate(s.slice(i + 1, j)));
        i = j;
      }
      if (isNaN(Number(s[i])) && s[i] !== '.' || i === n - 1) {
        var num = parseFloat(numStr);
        switch (preSign) {
          case '+':
            stack.push(num);
            break;
          case '-':
            stack.push(-num);
            break;
          case '*':
            stack.push(stack.pop() * num);
            break;
          case '/':
            stack.push(stack.pop() / num);
            break;
          default:
            break;
        }
        preSign = s[i];
        numStr = '';
      }
    }
    var ans = 0;
    while (stack.length) {
      ans += stack.pop();
    }
    return ans;
  };
  module.exports = _calculate;
}();

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/downloader.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/downloader.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dowloader; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);







/**
 * LRU 文件存储，使用该 downloader 可以让下载的文件存储在本地，下次进入小程序后可以直接使用
 * 详细设计文档可查看 https://juejin.im/post/5b42d3ede51d4519277b6ce3
 */
var util = __webpack_require__(/*! ./util */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/util.js");
var sha1 = __webpack_require__(/*! ./sha1 */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/sha1.js");
var SAVED_FILES_KEY = 'savedFiles';
var KEY_TOTAL_SIZE = 'totalSize';
var KEY_PATH = 'path';
var KEY_TIME = 'time';
var KEY_SIZE = 'size';

// 可存储总共为 6M，目前小程序可允许的最大本地存储为 10M
var MAX_SPACE_IN_B = 6 * 1024 * 1024;
var savedFiles = {};
var Dowloader = /*#__PURE__*/function () {
  function Dowloader() {
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Dowloader);
    // app 如果设置了最大存储空间，则使用 app 中的
    if (getApp().PAINTER_MAX_LRU_SPACE) {
      MAX_SPACE_IN_B = getApp().PAINTER_MAX_LRU_SPACE;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorage({
      key: SAVED_FILES_KEY,
      success: function success(res) {
        if (res.data) {
          savedFiles = res.data;
        }
      }
    }).catch(function (err) {
      console.log(err);
    });
  }

  /**
   * 下载文件，会用 lru 方式来缓存文件到本地
   * @param {String} url 文件的 url
   */
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Dowloader, [{
    key: "download",
    value: function download(url, lru) {
      return new Promise(function (resolve, reject) {
        if (!(url && util.isValidUrl(url))) {
          resolve(url);
          return;
        }
        var fileName = getFileName(url);
        if (!lru) {
          // 无 lru 情况下直接判断 临时文件是否存在，不存在重新下载
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getFileSystemManager().getFileInfo({
            filePath: fileName,
            success: function success() {
              resolve(url);
            },
            fail: function fail() {
              if (util.isOnlineUrl(url)) {
                downloadFile(url, lru).then(function (path) {
                  resolve(path);
                }, function () {
                  reject();
                });
              } else if (util.isDataUrl(url)) {
                transformBase64File(url, lru).then(function (path) {
                  resolve(path);
                }, function () {
                  reject();
                });
              }
            }
          });
          return;
        }
        var file = getFile(fileName);
        if (file) {
          if (file[KEY_PATH].indexOf('//usr/') !== -1) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getFileSystemManager().getFileInfo({
              filePath: file[KEY_PATH],
              success: function success() {
                resolve(file[KEY_PATH]);
              },
              fail: function fail(error) {
                console.error("base64 file broken, ".concat(JSON.stringify(error)));
                transformBase64File(url, lru).then(function (path) {
                  resolve(path);
                }, function () {
                  reject();
                });
              }
            });
          } else {
            // 检查文件是否正常，不正常需要重新下载
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSavedFileInfo({
              filePath: file[KEY_PATH],
              success: function success(res) {
                resolve(file[KEY_PATH]);
              },
              fail: function fail(error) {
                console.error("the file is broken, redownload it, ".concat(JSON.stringify(error)));
                downloadFile(url, lru).then(function (path) {
                  resolve(path);
                }, function () {
                  reject();
                });
              }
            });
          }
        } else {
          if (util.isOnlineUrl(url)) {
            downloadFile(url, lru).then(function (path) {
              resolve(path);
            }, function () {
              reject();
            });
          } else if (util.isDataUrl(url)) {
            transformBase64File(url, lru).then(function (path) {
              resolve(path);
            }, function () {
              reject();
            });
          }
        }
      });
    }
  }]);
}();

function getFileName(url) {
  if (util.isDataUrl(url)) {
    var _ref = /data:image\/(\w+);base64,(.*)/.exec(url) || [],
      _ref2 = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, 3),
      format = _ref2[1],
      bodyData = _ref2[2];
    var fileName = "".concat(sha1.hex_sha1(bodyData), ".").concat(format);
    return fileName;
  } else {
    return url;
  }
}
function transformBase64File(base64data, lru) {
  return new Promise(function (resolve, reject) {
    var _ref3 = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [],
      _ref4 = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, 3),
      format = _ref4[1],
      bodyData = _ref4[2];
    if (!format) {
      console.error('base parse failed');
      reject();
      return;
    }
    var fileName = "".concat(sha1.hex_sha1(bodyData), ".").concat(format);
    var path = "".concat(wx.env.USER_DATA_PATH, "/").concat(fileName);
    var buffer = _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().base64ToArrayBuffer(bodyData.replace(/[\r\n]/g, ""));
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getFileSystemManager().writeFile({
      filePath: path,
      data: buffer,
      encoding: 'binary',
      success: function success() {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getFileSystemManager().getFileInfo({
          filePath: path,
          success: function success(tmpRes) {
            var newFileSize = tmpRes.size;
            lru ? doLru(newFileSize).then(function () {
              saveFile(fileName, newFileSize, path, true).then(function (filePath) {
                resolve(filePath);
              });
            }, function () {
              resolve(path);
            }) : resolve(path);
          },
          fail: function fail(error) {
            // 文件大小信息获取失败，则此文件也不要进行存储
            console.error("getFileInfo ".concat(path, " failed, ").concat(JSON.stringify(error)));
            resolve(path);
          }
        });
      },
      fail: function fail(err) {
        console.log(err);
      }
    });
  });
}
function downloadFile(url, lru) {
  return new Promise(function (resolve, reject) {
    var downloader = url.startsWith('cloud://') ? wx.cloud.downloadFile : (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().downloadFile);
    downloader({
      url: url,
      fileID: url,
      success: function success(res) {
        if (res.statusCode !== 200) {
          console.log("downloadFile ".concat(url, " failed res.statusCode is not 200"));
          reject();
          return;
        }
        var tempFilePath = res.tempFilePath;
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getFileSystemManager().getFileInfo({
          filePath: tempFilePath,
          success: function success(tmpRes) {
            var newFileSize = tmpRes.size;
            lru ? doLru(newFileSize).then(function () {
              saveFile(url, newFileSize, tempFilePath).then(function (filePath) {
                resolve(filePath);
              });
            }, function () {
              resolve(tempFilePath);
            }) : resolve(tempFilePath);
          },
          fail: function fail(error) {
            // 文件大小信息获取失败，则此文件也不要进行存储
            console.error("getFileInfo ".concat(res.tempFilePath, " failed, ").concat(JSON.stringify(error)));
            resolve(res.tempFilePath);
          }
        });
      },
      fail: function fail(error) {
        console.error("downloadFile failed, ".concat(JSON.stringify(error), " "));
        reject();
      }
    });
  });
}
function saveFile(key, newFileSize, tempFilePath) {
  var isDataUrl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return new Promise(function (resolve, reject) {
    if (isDataUrl) {
      var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
      savedFiles[key] = {};
      savedFiles[key][KEY_PATH] = tempFilePath;
      savedFiles[key][KEY_TIME] = new Date().getTime();
      savedFiles[key][KEY_SIZE] = newFileSize;
      savedFiles['totalSize'] = newFileSize + totalSize;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
        key: SAVED_FILES_KEY,
        data: savedFiles
      });
      resolve(tempFilePath);
      return;
    }
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().saveFile({
      tempFilePath: tempFilePath,
      success: function success(fileRes) {
        var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
        savedFiles[key] = {};
        savedFiles[key][KEY_PATH] = fileRes.savedFilePath;
        savedFiles[key][KEY_TIME] = new Date().getTime();
        savedFiles[key][KEY_SIZE] = newFileSize;
        savedFiles['totalSize'] = newFileSize + totalSize;
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
          key: SAVED_FILES_KEY,
          data: savedFiles
        });
        resolve(fileRes.savedFilePath);
      },
      fail: function fail(error) {
        console.error("saveFile ".concat(key, " failed, then we delete all files, ").concat(JSON.stringify(error)));
        // 由于 saveFile 成功后，res.tempFilePath 处的文件会被移除，所以在存储未成功时，我们还是继续使用临时文件
        resolve(tempFilePath);
        // 如果出现错误，就直接情况本地的所有文件，因为你不知道是不是因为哪次lru的某个文件未删除成功
        reset();
      }
    });
  });
}

/**
 * 清空所有下载相关内容
 */
function reset() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorage({
    key: SAVED_FILES_KEY,
    success: function success() {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getSavedFileList({
        success: function success(listRes) {
          removeFiles(listRes.fileList);
        },
        fail: function fail(getError) {
          console.error("getSavedFileList failed, ".concat(JSON.stringify(getError)));
        }
      });
    }
  });
}
function doLru(size) {
  if (size > MAX_SPACE_IN_B) {
    return Promise.reject();
  }
  return new Promise(function (resolve, reject) {
    var totalSize = savedFiles[KEY_TOTAL_SIZE] ? savedFiles[KEY_TOTAL_SIZE] : 0;
    if (size + totalSize <= MAX_SPACE_IN_B) {
      resolve();
      return;
    }
    // 如果加上新文件后大小超过最大限制，则进行 lru
    var pathsShouldDelete = [];
    // 按照最后一次的访问时间，从小到大排序
    var allFiles = JSON.parse(JSON.stringify(savedFiles));
    delete allFiles[KEY_TOTAL_SIZE];
    var sortedKeys = Object.keys(allFiles).sort(function (a, b) {
      return allFiles[a][KEY_TIME] - allFiles[b][KEY_TIME];
    });
    var _iterator = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(sortedKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var sortedKey = _step.value;
        totalSize -= savedFiles[sortedKey].size;
        pathsShouldDelete.push(savedFiles[sortedKey][KEY_PATH]);
        delete savedFiles[sortedKey];
        if (totalSize + size < MAX_SPACE_IN_B) {
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    savedFiles['totalSize'] = totalSize;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
      key: SAVED_FILES_KEY,
      data: savedFiles,
      success: function success() {
        // 保证 storage 中不会存在不存在的文件数据
        if (pathsShouldDelete.length > 0) {
          removeFiles(pathsShouldDelete);
        }
        resolve();
      },
      fail: function fail(error) {
        console.error("doLru setStorage failed, ".concat(JSON.stringify(error)));
        reject();
      }
    });
  });
}
function removeFiles(pathsShouldDelete) {
  var _iterator2 = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(pathsShouldDelete),
    _step2;
  try {
    var _loop = function _loop() {
      var pathDel = _step2.value;
      var delPath = pathDel;
      if ((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_5__["default"])(pathDel) === 'object') {
        delPath = pathDel.filePath;
      }
      if (delPath.indexOf('//usr/') !== -1) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getFileSystemManager().unlink({
          filePath: delPath,
          fail: function fail(error) {
            console.error("removeSavedFile ".concat(pathDel, " failed, ").concat(JSON.stringify(error)));
          }
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeSavedFile({
          filePath: delPath,
          fail: function fail(error) {
            console.error("removeSavedFile ".concat(pathDel, " failed, ").concat(JSON.stringify(error)));
          }
        });
      }
    };
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
function getFile(key) {
  if (!savedFiles[key]) {
    return;
  }
  savedFiles[key]['time'] = new Date().getTime();
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
    key: SAVED_FILES_KEY,
    data: savedFiles
  });
  return savedFiles[key];
}

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/gradient.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/gradient.js ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _createForOfIteratorHelper = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js")["default"]);
/* eslint-disable */
// 当ctx传入当前文件，const grd = ctx.createCircularGradient() 和 
// const grd = this.ctx.createLinearGradient() 无效，因此只能分开处理
// 先分析，在外部创建grd，再传入使用就可以

!function () {
  var api = {
    isGradient: function isGradient(bg) {
      if (bg && (bg.startsWith('linear') || bg.startsWith('radial'))) {
        return true;
      }
      return false;
    },
    doGradient: function doGradient(bg, width, height, ctx) {
      if (bg.startsWith('linear')) {
        linearEffect(width, height, bg, ctx);
      } else if (bg.startsWith('radial')) {
        radialEffect(width, height, bg, ctx);
      }
    }
  };
  function analizeGrad(string) {
    var colorPercents = string.substring(0, string.length - 1).split("%,");
    var colors = [];
    var percents = [];
    var _iterator = _createForOfIteratorHelper(colorPercents),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var colorPercent = _step.value;
        colors.push(colorPercent.substring(0, colorPercent.lastIndexOf(" ")).trim());
        percents.push(colorPercent.substring(colorPercent.lastIndexOf(" "), colorPercent.length) / 100);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return {
      colors: colors,
      percents: percents
    };
  }
  function radialEffect(width, height, bg, ctx) {
    var colorPer = analizeGrad(bg.match(/radial-gradient\((.+)\)/)[1]);
    var grd = ctx.createRadialGradient(0, 0, 0, 0, 0, width < height ? height / 2 : width / 2);
    for (var i = 0; i < colorPer.colors.length; i++) {
      grd.addColorStop(colorPer.percents[i], colorPer.colors[i]);
    }
    ctx.fillStyle = grd;
    //ctx.fillRect(-(width / 2), -(height / 2), width, height);
  }
  function analizeLinear(bg, width, height) {
    var direction = bg.match(/([-]?\d{1,3})deg/);
    var dir = direction && direction[1] ? parseFloat(direction[1]) : 0;
    var coordinate;
    switch (dir) {
      case 0:
        coordinate = [0, -height / 2, 0, height / 2];
        break;
      case 90:
        coordinate = [width / 2, 0, -width / 2, 0];
        break;
      case -90:
        coordinate = [-width / 2, 0, width / 2, 0];
        break;
      case 180:
        coordinate = [0, height / 2, 0, -height / 2];
        break;
      case -180:
        coordinate = [0, -height / 2, 0, height / 2];
        break;
      default:
        var x1 = 0;
        var y1 = 0;
        var x2 = 0;
        var y2 = 0;
        if (direction[1] > 0 && direction[1] < 90) {
          x1 = width / 2 - (width / 2 * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
          y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
          x2 = -x1;
          y1 = -y2;
        } else if (direction[1] > -180 && direction[1] < -90) {
          x1 = -(width / 2) + (width / 2 * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
          y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
          x2 = -x1;
          y1 = -y2;
        } else if (direction[1] > 90 && direction[1] < 180) {
          x1 = width / 2 + (-(width / 2) * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
          y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
          x2 = -x1;
          y1 = -y2;
        } else {
          x1 = -(width / 2) - (-(width / 2) * Math.tan((90 - direction[1]) * Math.PI * 2 / 360) - height / 2) * Math.sin(2 * (90 - direction[1]) * Math.PI * 2 / 360) / 2;
          y2 = Math.tan((90 - direction[1]) * Math.PI * 2 / 360) * x1;
          x2 = -x1;
          y1 = -y2;
        }
        coordinate = [x1, y1, x2, y2];
        break;
    }
    return coordinate;
  }
  function linearEffect(width, height, bg, ctx) {
    var param = analizeLinear(bg, width, height);
    var grd = ctx.createLinearGradient(param[0], param[1], param[2], param[3]);
    var content = bg.match(/linear-gradient\((.+)\)/)[1];
    var colorPer = analizeGrad(content.substring(content.indexOf(',') + 1));
    for (var i = 0; i < colorPer.colors.length; i++) {
      grd.addColorStop(colorPer.percents[i], colorPer.colors[i]);
    }
    ctx.fillStyle = grd;
    //ctx.fillRect(-(width / 2), -(height / 2), width, height);
  }
  module.exports = {
    api: api
  };
}();

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/pen.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/pen.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearPenCache: function() { return /* binding */ clearPenCache; },
/* harmony export */   "default": function() { return /* binding */ Painter; },
/* harmony export */   penCache: function() { return /* binding */ penCache; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");




var QR = __webpack_require__(/*! ./qrcode.js */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/qrcode.js");
var GD = __webpack_require__(/*! ./gradient.js */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/gradient.js");
__webpack_require__(/*! ./string-polyfill.js */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/string-polyfill.js");
var penCache = {
  // 用于存储带 id 的 view 的 rect 信息
  viewRect: {},
  textLines: {}
};
var clearPenCache = function clearPenCache(id) {
  if (id) {
    penCache.viewRect[id] = null;
    penCache.textLines[id] = null;
  } else {
    penCache.viewRect = {};
    penCache.textLines = {};
  }
};
var Painter = /*#__PURE__*/function () {
  function Painter(ctx, data) {
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Painter);
    this.ctx = ctx;
    this.data = data;
  }
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Painter, [{
    key: "paint",
    value: function paint(callback) {
      this.style = {
        width: this.data.width.toPx(),
        height: this.data.height.toPx()
      };
      this._background();
      var _iterator = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.data.views),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var view = _step.value;
          this._drawAbsolute(view);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.ctx.draw(false, function () {
        callback && callback();
      });
    }
  }, {
    key: "_background",
    value: function _background() {
      this.ctx.save();
      var _this$style = this.style,
        width = _this$style.width,
        height = _this$style.height;
      var bg = this.data.background;
      this.ctx.translate(width / 2, height / 2);
      this._doClip(this.data.borderRadius, width, height);
      if (!bg) {
        // 如果未设置背景，则默认使用透明色
        this.ctx.fillStyle = 'transparent';
        this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
      } else if (bg.startsWith('#') || bg.startsWith('rgba') || bg.toLowerCase() === 'transparent') {
        // 背景填充颜色
        this.ctx.fillStyle = bg;
        this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
      } else if (GD.api.isGradient(bg)) {
        GD.api.doGradient(bg, width, height, this.ctx);
        this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
      } else {
        // 背景填充图片
        this.ctx.drawImage(bg, -(width / 2), -(height / 2), width, height);
      }
      this.ctx.restore();
    }
  }, {
    key: "_drawAbsolute",
    value: function _drawAbsolute(view) {
      if (!(view && view.type)) {
        // 过滤无效 view
        return;
      }
      // 证明 css 为数组形式，需要合并
      if (view.css && view.css.length) {
        /* eslint-disable no-param-reassign */
        view.css = Object.assign.apply(Object, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(view.css));
      }
      switch (view.type) {
        case 'image':
          this._drawAbsImage(view);
          break;
        case 'text':
          this._fillAbsText(view);
          break;
        case 'inlineText':
          this._fillAbsInlineText(view);
          break;
        case 'rect':
          this._drawAbsRect(view);
          break;
        case 'qrcode':
          this._drawQRCode(view);
          break;
        default:
          break;
      }
    }
  }, {
    key: "_border",
    value: function _border(_ref) {
      var _ref$borderRadius = _ref.borderRadius,
        borderRadius = _ref$borderRadius === void 0 ? 0 : _ref$borderRadius,
        width = _ref.width,
        height = _ref.height,
        _ref$borderWidth = _ref.borderWidth,
        borderWidth = _ref$borderWidth === void 0 ? 0 : _ref$borderWidth,
        _ref$borderStyle = _ref.borderStyle,
        borderStyle = _ref$borderStyle === void 0 ? 'solid' : _ref$borderStyle;
      var r1 = 0,
        r2 = 0,
        r3 = 0,
        r4 = 0;
      var minSize = Math.min(width, height);
      if (borderRadius) {
        var border = borderRadius.split(/\s+/);
        if (border.length === 4) {
          r1 = Math.min(border[0].toPx(false, minSize), width / 2, height / 2);
          r2 = Math.min(border[1].toPx(false, minSize), width / 2, height / 2);
          r3 = Math.min(border[2].toPx(false, minSize), width / 2, height / 2);
          r4 = Math.min(border[3].toPx(false, minSize), width / 2, height / 2);
        } else {
          r1 = r2 = r3 = r4 = Math.min(borderRadius && borderRadius.toPx(false, minSize), width / 2, height / 2);
        }
      }
      var lineWidth = borderWidth && borderWidth.toPx(false, minSize);
      this.ctx.lineWidth = lineWidth;
      if (borderStyle === 'dashed') {
        this.ctx.setLineDash([lineWidth * 4 / 3, lineWidth * 4 / 3]);
        // this.ctx.lineDashOffset = 2 * lineWidth
      } else if (borderStyle === 'dotted') {
        this.ctx.setLineDash([lineWidth, lineWidth]);
      }
      var notSolid = borderStyle !== 'solid';
      this.ctx.beginPath();
      notSolid && r1 === 0 && this.ctx.moveTo(-width / 2 - lineWidth, -height / 2 - lineWidth / 2); // 顶边虚线规避重叠规则
      r1 !== 0 && this.ctx.arc(-width / 2 + r1, -height / 2 + r1, r1 + lineWidth / 2, 1 * Math.PI, 1.5 * Math.PI); //左上角圆弧
      this.ctx.lineTo(r2 === 0 ? notSolid ? width / 2 : width / 2 + lineWidth / 2 : width / 2 - r2, -height / 2 - lineWidth / 2); // 顶边线

      notSolid && r2 === 0 && this.ctx.moveTo(width / 2 + lineWidth / 2, -height / 2 - lineWidth); // 右边虚线规避重叠规则
      r2 !== 0 && this.ctx.arc(width / 2 - r2, -height / 2 + r2, r2 + lineWidth / 2, 1.5 * Math.PI, 2 * Math.PI); // 右上角圆弧
      this.ctx.lineTo(width / 2 + lineWidth / 2, r3 === 0 ? notSolid ? height / 2 : height / 2 + lineWidth / 2 : height / 2 - r3); // 右边线

      notSolid && r3 === 0 && this.ctx.moveTo(width / 2 + lineWidth, height / 2 + lineWidth / 2); // 底边虚线规避重叠规则
      r3 !== 0 && this.ctx.arc(width / 2 - r3, height / 2 - r3, r3 + lineWidth / 2, 0, 0.5 * Math.PI); // 右下角圆弧
      this.ctx.lineTo(r4 === 0 ? notSolid ? -width / 2 : -width / 2 - lineWidth / 2 : -width / 2 + r4, height / 2 + lineWidth / 2); // 底边线

      notSolid && r4 === 0 && this.ctx.moveTo(-width / 2 - lineWidth / 2, height / 2 + lineWidth); // 左边虚线规避重叠规则
      r4 !== 0 && this.ctx.arc(-width / 2 + r4, height / 2 - r4, r4 + lineWidth / 2, 0.5 * Math.PI, 1 * Math.PI); // 左下角圆弧
      this.ctx.lineTo(-width / 2 - lineWidth / 2, r1 === 0 ? notSolid ? -height / 2 : -height / 2 - lineWidth / 2 : -height / 2 + r1); // 左边线
      notSolid && r1 === 0 && this.ctx.moveTo(-width / 2 - lineWidth, -height / 2 - lineWidth / 2); // 顶边虚线规避重叠规则

      if (!notSolid) {
        this.ctx.closePath();
      }
    }

    /**
     * 根据 borderRadius 进行裁减
     */
  }, {
    key: "_doClip",
    value: function _doClip(borderRadius, width, height, borderStyle) {
      if (borderRadius && width && height) {
        // 防止在某些机型上周边有黑框现象，此处如果直接设置 fillStyle 为透明，在 Android 机型上会导致被裁减的图片也变为透明， iOS 和 IDE 上不会
        // globalAlpha 在 1.9.90 起支持，低版本下无效，但把 fillStyle 设为了 white，相对默认的 black 要好点
        this.ctx.globalAlpha = 0;
        this.ctx.fillStyle = 'white';
        this._border({
          borderRadius: borderRadius,
          width: width,
          height: height,
          borderStyle: borderStyle
        });
        this.ctx.fill();
        // 在 ios 的 6.6.6 版本上 clip 有 bug，禁掉此类型上的 clip，也就意味着，在此版本微信的 ios 设备下无法使用 border 属性
        if (!(getApp().systemInfo && getApp().systemInfo.version <= '6.6.6' && getApp().systemInfo.platform === 'ios')) {
          this.ctx.clip();
        }
        this.ctx.globalAlpha = 1;
      }
    }

    /**
     * 画边框
     */
  }, {
    key: "_doBorder",
    value: function _doBorder(view, width, height) {
      if (!view.css) {
        return;
      }
      var _view$css = view.css,
        borderRadius = _view$css.borderRadius,
        borderWidth = _view$css.borderWidth,
        borderColor = _view$css.borderColor,
        borderStyle = _view$css.borderStyle;
      if (!borderWidth) {
        return;
      }
      this.ctx.save();
      this._preProcess(view, true);
      this.ctx.strokeStyle = borderColor || 'black';
      this._border({
        borderRadius: borderRadius,
        width: width,
        height: height,
        borderWidth: borderWidth,
        borderStyle: borderStyle
      });
      this.ctx.stroke();
      this.ctx.restore();
    }
  }, {
    key: "_preProcess",
    value: function _preProcess(view, notClip) {
      var width = 0;
      var height;
      var extra;
      var paddings = this._doPaddings(view);
      switch (view.type) {
        case 'inlineText':
          {
            {
              // 计算行数
              var lines = 0;
              // 文字总长度
              var textLength = 0;
              // 行高
              var lineHeight = 0;
              var textList = view.textList || [];
              for (var i = 0; i < textList.length; i++) {
                var subView = textList[i];
                var fontWeight = subView.css.fontWeight || '400';
                var textStyle = subView.css.textStyle || 'normal';
                if (!subView.css.fontSize) {
                  subView.css.fontSize = '20rpx';
                }
                this.ctx.font = "".concat(textStyle, " ").concat(fontWeight, " ").concat(subView.css.fontSize.toPx(), "px \"").concat(subView.css.fontFamily || 'sans-serif', "\"");
                textLength += this.ctx.measureText(subView.text).width;
                var tempLineHeight = subView.css.lineHeight ? subView.css.lineHeight.toPx() : subView.css.fontSize.toPx();
                lineHeight = Math.max(lineHeight, tempLineHeight);
              }
              width = view.css.width ? view.css.width.toPx(false, this.style.width) - paddings[1] - paddings[3] : textLength;
              ;
              var calLines = Math.ceil(textLength / width);
              lines += calLines;
              // lines = view.css.maxLines < lines ? view.css.maxLines : lines;
              height = lineHeight * lines;
              extra = {
                lines: lines,
                lineHeight: lineHeight
                // textArray: textArray,
                // linesArray: linesArray,
              };
            }
            break;
          }
        case 'text':
          {
            var textArray = String(view.text).split('\n');
            // 处理多个连续的'\n'
            for (var _i = 0; _i < textArray.length; ++_i) {
              if (textArray[_i] === '') {
                textArray[_i] = ' ';
              }
            }
            var _fontWeight = view.css.fontWeight || '400';
            var _textStyle = view.css.textStyle || 'normal';
            if (!view.css.fontSize) {
              view.css.fontSize = '20rpx';
            }
            this.ctx.font = "".concat(_textStyle, " ").concat(_fontWeight, " ").concat(view.css.fontSize.toPx(), "px \"").concat(view.css.fontFamily || 'sans-serif', "\"");
            // 计算行数
            var _lines = 0;
            var linesArray = [];
            for (var _i2 = 0; _i2 < textArray.length; ++_i2) {
              var _textLength = this.ctx.measureText(textArray[_i2]).width;
              var minWidth = view.css.fontSize.toPx() + paddings[1] + paddings[3];
              var partWidth = view.css.width ? view.css.width.toPx(false, this.style.width) - paddings[1] - paddings[3] : _textLength;
              if (partWidth < minWidth) {
                partWidth = minWidth;
              }
              var _calLines = Math.ceil(_textLength / partWidth);
              // 取最长的作为 width
              width = partWidth > width ? partWidth : width;
              _lines += _calLines;
              linesArray[_i2] = _calLines;
            }
            _lines = view.css.maxLines < _lines ? view.css.maxLines : _lines;
            var _lineHeight = view.css.lineHeight ? view.css.lineHeight.toPx() : view.css.fontSize.toPx();
            height = _lineHeight * _lines;
            extra = {
              lines: _lines,
              lineHeight: _lineHeight,
              textArray: textArray,
              linesArray: linesArray
            };
            break;
          }
        case 'image':
          {
            // image的长宽设置成auto的逻辑处理
            var ratio = getApp().systemInfo.pixelRatio ? getApp().systemInfo.pixelRatio : 2;
            // 有css却未设置width或height，则默认为auto
            if (view.css) {
              if (!view.css.width) {
                view.css.width = 'auto';
              }
              if (!view.css.height) {
                view.css.height = 'auto';
              }
            }
            if (!view.css || view.css.width === 'auto' && view.css.height === 'auto') {
              width = Math.round(view.sWidth / ratio);
              height = Math.round(view.sHeight / ratio);
            } else if (view.css.width === 'auto') {
              height = view.css.height.toPx(false, this.style.height);
              width = view.sWidth / view.sHeight * height;
            } else if (view.css.height === 'auto') {
              width = view.css.width.toPx(false, this.style.width);
              height = view.sHeight / view.sWidth * width;
            } else {
              width = view.css.width.toPx(false, this.style.width);
              height = view.css.height.toPx(false, this.style.height);
            }
            break;
          }
        default:
          if (!(view.css.width && view.css.height)) {
            console.error('You should set width and height');
            return;
          }
          width = view.css.width.toPx(false, this.style.width);
          height = view.css.height.toPx(false, this.style.height);
          break;
      }
      var x;
      if (view.css && view.css.right) {
        if (typeof view.css.right === 'string') {
          x = this.style.width - view.css.right.toPx(true, this.style.width);
        } else {
          // 可以用数组方式，把文字长度计算进去
          // [right, 文字id, 乘数（默认 1）]
          var rights = view.css.right;
          x = this.style.width - rights[0].toPx(true, this.style.width) - penCache.viewRect[rights[1]].width * (rights[2] || 1);
        }
      } else if (view.css && view.css.left) {
        if (typeof view.css.left === 'string') {
          x = view.css.left.toPx(true, this.style.width);
        } else {
          var lefts = view.css.left;
          x = lefts[0].toPx(true, this.style.width) + penCache.viewRect[lefts[1]].width * (lefts[2] || 1);
        }
      } else {
        x = 0;
      }
      //const y = view.css && view.css.bottom ? this.style.height - height - view.css.bottom.toPx(true) : (view.css && view.css.top ? view.css.top.toPx(true) : 0);
      var y;
      if (view.css && view.css.bottom) {
        y = this.style.height - height - view.css.bottom.toPx(true, this.style.height);
      } else {
        if (view.css && view.css.top) {
          if (typeof view.css.top === 'string') {
            y = view.css.top.toPx(true, this.style.height);
          } else {
            var tops = view.css.top;
            y = tops[0].toPx(true, this.style.height) + penCache.viewRect[tops[1]].height * (tops[2] || 1);
          }
        } else {
          y = 0;
        }
      }
      var angle = view.css && view.css.rotate ? this._getAngle(view.css.rotate) : 0;
      // 当设置了 right 时，默认 align 用 right，反之用 left
      var align = view.css && view.css.align ? view.css.align : view.css && view.css.right ? 'right' : 'left';
      var verticalAlign = view.css && view.css.verticalAlign ? view.css.verticalAlign : 'top';
      // 记录绘制时的画布
      var xa = 0;
      switch (align) {
        case 'center':
          xa = x;
          break;
        case 'right':
          xa = x - width / 2;
          break;
        default:
          xa = x + width / 2;
          break;
      }
      var ya = 0;
      switch (verticalAlign) {
        case 'center':
          ya = y;
          break;
        case 'bottom':
          ya = y - height / 2;
          break;
        default:
          ya = y + height / 2;
          break;
      }
      this.ctx.translate(xa, ya);
      // 记录该 view 的有效点击区域
      // TODO ，旋转和裁剪的判断
      // 记录在真实画布上的左侧
      var left = x;
      if (align === 'center') {
        left = x - width / 2;
      } else if (align === 'right') {
        left = x - width;
      }
      var top = y;
      if (verticalAlign === 'center') {
        top = y - height / 2;
      } else if (verticalAlign === 'bottom') {
        top = y - height;
      }
      if (view.rect) {
        view.rect.left = left;
        view.rect.top = top;
        view.rect.right = left + width;
        view.rect.bottom = top + height;
        view.rect.x = view.css && view.css.right ? x - width : x;
        view.rect.y = y;
      } else {
        view.rect = {
          left: left,
          top: top,
          right: left + width,
          bottom: top + height,
          x: view.css && view.css.right ? x - width : x,
          y: y
        };
      }
      view.rect.left = view.rect.left - paddings[3];
      view.rect.top = view.rect.top - paddings[0];
      view.rect.right = view.rect.right + paddings[1];
      view.rect.bottom = view.rect.bottom + paddings[2];
      if (view.type === 'text') {
        view.rect.minWidth = view.css.fontSize.toPx() + paddings[1] + paddings[3];
      }
      this.ctx.rotate(angle);
      if (!notClip && view.css && view.css.borderRadius && view.type !== 'rect') {
        this._doClip(view.css.borderRadius, width, height, view.css.borderStyle);
      }
      this._doShadow(view);
      if (view.id) {
        penCache.viewRect[view.id] = {
          width: width,
          height: height,
          left: view.rect.left,
          top: view.rect.top,
          right: view.rect.right,
          bottom: view.rect.bottom
        };
      }
      return {
        width: width,
        height: height,
        x: x,
        y: y,
        extra: extra
      };
    }
  }, {
    key: "_doPaddings",
    value: function _doPaddings(view) {
      var _ref2 = view.css ? view.css : {},
        padding = _ref2.padding;
      var pd = [0, 0, 0, 0];
      if (padding) {
        var pdg = padding.split(/\s+/);
        if (pdg.length === 1) {
          var x = pdg[0].toPx();
          pd = [x, x, x, x];
        }
        if (pdg.length === 2) {
          var _x = pdg[0].toPx();
          var y = pdg[1].toPx();
          pd = [_x, y, _x, y];
        }
        if (pdg.length === 3) {
          var _x2 = pdg[0].toPx();
          var _y = pdg[1].toPx();
          var z = pdg[2].toPx();
          pd = [_x2, _y, z, _y];
        }
        if (pdg.length === 4) {
          var _x3 = pdg[0].toPx();
          var _y2 = pdg[1].toPx();
          var _z = pdg[2].toPx();
          var a = pdg[3].toPx();
          pd = [_x3, _y2, _z, a];
        }
      }
      return pd;
    }

    // 画文字的背景图片
  }, {
    key: "_doBackground",
    value: function _doBackground(view) {
      this.ctx.save();
      var _this$_preProcess = this._preProcess(view, true),
        rawWidth = _this$_preProcess.width,
        rawHeight = _this$_preProcess.height;
      var background = view.css.background;
      var pd = this._doPaddings(view);
      var width = rawWidth + pd[1] + pd[3];
      var height = rawHeight + pd[0] + pd[2];
      this._doClip(view.css.borderRadius, width, height, view.css.borderStyle);
      if (GD.api.isGradient(background)) {
        GD.api.doGradient(background, width, height, this.ctx);
      } else {
        this.ctx.fillStyle = background;
      }
      this.ctx.fillRect(-(width / 2), -(height / 2), width, height);
      this.ctx.restore();
    }
  }, {
    key: "_drawQRCode",
    value: function _drawQRCode(view) {
      this.ctx.save();
      var _this$_preProcess2 = this._preProcess(view),
        width = _this$_preProcess2.width,
        height = _this$_preProcess2.height;
      QR.api.draw(view.content, this.ctx, -width / 2, -height / 2, width, height, view.css.background, view.css.color);
      this.ctx.restore();
      this._doBorder(view, width, height);
    }
  }, {
    key: "_drawAbsImage",
    value: function _drawAbsImage(view) {
      if (!view.url) {
        return;
      }
      this.ctx.save();
      var _this$_preProcess3 = this._preProcess(view),
        width = _this$_preProcess3.width,
        height = _this$_preProcess3.height;
      // 获得缩放到图片大小级别的裁减框
      var rWidth = view.sWidth;
      var rHeight = view.sHeight;
      var startX = 0;
      var startY = 0;
      // 绘画区域比例
      var cp = width / height;
      // 原图比例
      var op = view.sWidth / view.sHeight;
      if (cp >= op) {
        rHeight = rWidth / cp;
        startY = Math.round((view.sHeight - rHeight) / 2);
      } else {
        rWidth = rHeight * cp;
        startX = Math.round((view.sWidth - rWidth) / 2);
      }
      if (view.css && view.css.mode === 'scaleToFill') {
        this.ctx.drawImage(view.url, -(width / 2), -(height / 2), width, height);
      } else {
        this.ctx.drawImage(view.url, startX, startY, rWidth, rHeight, -(width / 2), -(height / 2), width, height);
        view.rect.startX = startX / view.sWidth;
        view.rect.startY = startY / view.sHeight;
        view.rect.endX = (startX + rWidth) / view.sWidth;
        view.rect.endY = (startY + rHeight) / view.sHeight;
      }
      this.ctx.restore();
      this._doBorder(view, width, height);
    }
    /**
     * 
     * @param {*} view 
     * @description 一行内文字多样式的方法
     * 
     * 暂不支持配置 text-align，默认left
     * 暂不支持配置 maxLines
     */
  }, {
    key: "_fillAbsInlineText",
    value: function _fillAbsInlineText(view) {
      if (!view.textList) {
        return;
      }
      if (view.css.background) {
        // 生成背景
        this._doBackground(view);
      }
      this.ctx.save();
      var _this$_preProcess4 = this._preProcess(view, view.css.background && view.css.borderRadius),
        width = _this$_preProcess4.width,
        height = _this$_preProcess4.height,
        extra = _this$_preProcess4.extra;
      var lines = extra.lines,
        lineHeight = extra.lineHeight;
      var staticX = -(width / 2);
      var lineIndex = 0; // 第几行
      var x = staticX; // 开始x位置
      var leftWidth = width; // 当前行剩余多少宽度可以使用

      var getStyle = function getStyle(css) {
        var fontWeight = css.fontWeight || '400';
        var textStyle = css.textStyle || 'normal';
        if (!css.fontSize) {
          css.fontSize = '20rpx';
        }
        return "".concat(textStyle, " ").concat(fontWeight, " ").concat(css.fontSize.toPx(), "px \"").concat(css.fontFamily || 'sans-serif', "\"");
      };

      // 遍历行内的文字数组
      for (var j = 0; j < view.textList.length; j++) {
        var subView = view.textList[j];

        // 某个文字开始位置
        var start = 0;
        // 文字已使用的数量
        var alreadyCount = 0;
        // 文字总长度
        var textLength = subView.text.length;
        // 文字总宽度
        var textWidth = this.ctx.measureText(subView.text).width;
        // 每个文字的平均宽度
        var preWidth = Math.ceil(textWidth / textLength);

        // 循环写文字
        while (alreadyCount < textLength) {
          // alreadyCount - start + 1 -> 当前摘取出来的文字
          // 比较可用宽度，寻找最大可写文字长度
          while ((alreadyCount - start + 1) * preWidth < leftWidth && alreadyCount < textLength) {
            alreadyCount++;
          }

          // 取出文字
          var text = subView.text.substr(start, alreadyCount - start);
          var y = -(height / 2) + subView.css.fontSize.toPx() + lineIndex * lineHeight;

          // 设置文字样式
          this.ctx.font = getStyle(subView.css);
          this.ctx.fillStyle = subView.css.color || 'black';
          this.ctx.textAlign = 'left';

          // 执行画布操作
          if (subView.css.textStyle === 'stroke') {
            this.ctx.strokeText(text, x, y);
          } else {
            this.ctx.fillText(text, x, y);
          }

          // 当次已使用宽度
          var currentUsedWidth = this.ctx.measureText(text).width;
          var fontSize = subView.css.fontSize.toPx();

          // 画 textDecoration
          var textDecoration = void 0;
          if (subView.css.textDecoration) {
            this.ctx.lineWidth = fontSize / 13;
            this.ctx.beginPath();
            if (/\bunderline\b/.test(subView.css.textDecoration)) {
              this.ctx.moveTo(x, y);
              this.ctx.lineTo(x + currentUsedWidth, y);
              textDecoration = {
                moveTo: [x, y],
                lineTo: [x + currentUsedWidth, y]
              };
            }
            if (/\boverline\b/.test(subView.css.textDecoration)) {
              this.ctx.moveTo(x, y - fontSize);
              this.ctx.lineTo(x + currentUsedWidth, y - fontSize);
              textDecoration = {
                moveTo: [x, y - fontSize],
                lineTo: [x + currentUsedWidth, y - fontSize]
              };
            }
            if (/\bline-through\b/.test(subView.css.textDecoration)) {
              this.ctx.moveTo(x, y - fontSize / 3);
              this.ctx.lineTo(x + currentUsedWidth, y - fontSize / 3);
              textDecoration = {
                moveTo: [x, y - fontSize / 3],
                lineTo: [x + currentUsedWidth, y - fontSize / 3]
              };
            }
            this.ctx.closePath();
            this.ctx.strokeStyle = subView.css.color;
            this.ctx.stroke();
          }

          // 重置数据
          start = alreadyCount;
          leftWidth -= currentUsedWidth;
          x += currentUsedWidth;
          // 如果剩余宽度 小于等于0 或者小于一个字的平均宽度，换行
          if (leftWidth <= 0 || leftWidth < preWidth) {
            leftWidth = width;
            x = staticX;
            lineIndex++;
          }
        }
      }
      this.ctx.restore();
      this._doBorder(view, width, height);
    }
  }, {
    key: "_fillAbsText",
    value: function _fillAbsText(view) {
      if (!view.text) {
        return;
      }
      if (view.css.background) {
        // 生成背景
        this._doBackground(view);
      }
      this.ctx.save();
      var _this$_preProcess5 = this._preProcess(view, view.css.background && view.css.borderRadius),
        width = _this$_preProcess5.width,
        height = _this$_preProcess5.height,
        extra = _this$_preProcess5.extra;
      this.ctx.fillStyle = view.css.color || 'black';
      if (view.id && penCache.textLines[view.id]) {
        this.ctx.textAlign = view.css.textAlign ? view.css.textAlign : 'left';
        var _iterator2 = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(penCache.textLines[view.id]),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var i = _step2.value;
            var measuredWith = i.measuredWith,
              text = i.text,
              x = i.x,
              y = i.y,
              textDecoration = i.textDecoration;
            if (view.css.textStyle === 'stroke') {
              this.ctx.strokeText(text, x, y, measuredWith);
            } else {
              this.ctx.fillText(text, x, y, measuredWith);
            }
            if (textDecoration) {
              var _this$ctx, _this$ctx2;
              var fontSize = view.css.fontSize.toPx();
              this.ctx.lineWidth = fontSize / 13;
              this.ctx.beginPath();
              (_this$ctx = this.ctx).moveTo.apply(_this$ctx, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(textDecoration.moveTo));
              (_this$ctx2 = this.ctx).lineTo.apply(_this$ctx2, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(textDecoration.lineTo));
              this.ctx.closePath();
              this.ctx.strokeStyle = view.css.color;
              this.ctx.stroke();
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else {
        var lines = extra.lines,
          lineHeight = extra.lineHeight,
          textArray = extra.textArray,
          linesArray = extra.linesArray;
        // 如果设置了id，则保留 text 的长度
        if (view.id) {
          var textWidth = 0;
          for (var _i3 = 0; _i3 < textArray.length; ++_i3) {
            var _w = this.ctx.measureText(textArray[_i3]).width;
            textWidth = _w > textWidth ? _w : textWidth;
          }
          penCache.viewRect[view.id].width = width ? textWidth < width ? textWidth : width : textWidth;
        }
        var lineIndex = 0;
        for (var j = 0; j < textArray.length; ++j) {
          var preLineLength = Math.ceil(textArray[j].length / linesArray[j]);
          var start = 0;
          var alreadyCount = 0;
          for (var _i4 = 0; _i4 < linesArray[j]; ++_i4) {
            // 绘制行数大于最大行数，则直接跳出循环
            if (lineIndex >= lines) {
              break;
            }
            alreadyCount = preLineLength;
            var _text = textArray[j].substr(start, alreadyCount);
            var _measuredWith = this.ctx.measureText(_text).width;
            // 如果测量大小小于width一个字符的大小，则进行补齐，如果测量大小超出 width，则进行减除
            // 如果已经到文本末尾，也不要进行该循环
            while (start + alreadyCount <= textArray[j].length && (width - _measuredWith > view.css.fontSize.toPx() || _measuredWith - width > view.css.fontSize.toPx())) {
              if (_measuredWith < width) {
                _text = textArray[j].substr(start, ++alreadyCount);
              } else {
                if (_text.length <= 1) {
                  // 如果只有一个字符时，直接跳出循环
                  break;
                }
                _text = textArray[j].substr(start, --alreadyCount);
                // break;
              }
              _measuredWith = this.ctx.measureText(_text).width;
            }
            start += _text.length;
            // 如果是最后一行了，发现还有未绘制完的内容，则加...
            if (lineIndex === lines - 1 && (j < textArray.length - 1 || start < textArray[j].length)) {
              while (this.ctx.measureText("".concat(_text, "...")).width > width) {
                if (_text.length <= 1) {
                  // 如果只有一个字符时，直接跳出循环
                  break;
                }
                _text = _text.substring(0, _text.length - 1);
              }
              _text += '...';
              _measuredWith = this.ctx.measureText(_text).width;
            }
            this.ctx.textAlign = view.css.textAlign ? view.css.textAlign : 'left';
            var _x4 = void 0;
            var lineX = void 0;
            switch (view.css.textAlign) {
              case 'center':
                _x4 = 0;
                lineX = _x4 - _measuredWith / 2;
                break;
              case 'right':
                _x4 = width / 2;
                lineX = _x4 - _measuredWith;
                break;
              default:
                _x4 = -(width / 2);
                lineX = _x4;
                break;
            }
            var _y3 = -(height / 2) + (lineIndex === 0 ? view.css.fontSize.toPx() : view.css.fontSize.toPx() + lineIndex * lineHeight);
            lineIndex++;
            if (view.css.textStyle === 'stroke') {
              this.ctx.strokeText(_text, _x4, _y3, _measuredWith);
            } else {
              this.ctx.fillText(_text, _x4, _y3, _measuredWith);
            }
            var _fontSize = view.css.fontSize.toPx();
            var _textDecoration = void 0;
            if (view.css.textDecoration) {
              this.ctx.lineWidth = _fontSize / 13;
              this.ctx.beginPath();
              if (/\bunderline\b/.test(view.css.textDecoration)) {
                this.ctx.moveTo(lineX, _y3);
                this.ctx.lineTo(lineX + _measuredWith, _y3);
                _textDecoration = {
                  moveTo: [lineX, _y3],
                  lineTo: [lineX + _measuredWith, _y3]
                };
              }
              if (/\boverline\b/.test(view.css.textDecoration)) {
                this.ctx.moveTo(lineX, _y3 - _fontSize);
                this.ctx.lineTo(lineX + _measuredWith, _y3 - _fontSize);
                _textDecoration = {
                  moveTo: [lineX, _y3 - _fontSize],
                  lineTo: [lineX + _measuredWith, _y3 - _fontSize]
                };
              }
              if (/\bline-through\b/.test(view.css.textDecoration)) {
                this.ctx.moveTo(lineX, _y3 - _fontSize / 3);
                this.ctx.lineTo(lineX + _measuredWith, _y3 - _fontSize / 3);
                _textDecoration = {
                  moveTo: [lineX, _y3 - _fontSize / 3],
                  lineTo: [lineX + _measuredWith, _y3 - _fontSize / 3]
                };
              }
              this.ctx.closePath();
              this.ctx.strokeStyle = view.css.color;
              this.ctx.stroke();
            }
            if (view.id) {
              penCache.textLines[view.id] ? penCache.textLines[view.id].push({
                text: _text,
                x: _x4,
                y: _y3,
                measuredWith: _measuredWith,
                textDecoration: _textDecoration
              }) : penCache.textLines[view.id] = [{
                text: _text,
                x: _x4,
                y: _y3,
                measuredWith: _measuredWith,
                textDecoration: _textDecoration
              }];
            }
          }
        }
      }
      this.ctx.restore();
      this._doBorder(view, width, height);
    }
  }, {
    key: "_drawAbsRect",
    value: function _drawAbsRect(view) {
      this.ctx.save();
      var _this$_preProcess6 = this._preProcess(view),
        width = _this$_preProcess6.width,
        height = _this$_preProcess6.height;
      if (GD.api.isGradient(view.css.color)) {
        GD.api.doGradient(view.css.color, width, height, this.ctx);
      } else {
        this.ctx.fillStyle = view.css.color;
      }
      var _view$css2 = view.css,
        borderRadius = _view$css2.borderRadius,
        borderStyle = _view$css2.borderStyle,
        borderWidth = _view$css2.borderWidth;
      this._border({
        borderRadius: borderRadius,
        width: width,
        height: height,
        borderWidth: borderWidth,
        borderStyle: borderStyle
      });
      this.ctx.fill();
      this.ctx.restore();
      this._doBorder(view, width, height);
    }

    // shadow 支持 (x, y, blur, color), 不支持 spread
    // shadow:0px 0px 10px rgba(0,0,0,0.1);
  }, {
    key: "_doShadow",
    value: function _doShadow(view) {
      if (!view.css || !view.css.shadow) {
        return;
      }
      var box = view.css.shadow.replace(/,\s+/g, ',').split(/\s+/);
      if (box.length > 4) {
        console.error("shadow don't spread option");
        return;
      }
      this.ctx.shadowOffsetX = parseInt(box[0], 10);
      this.ctx.shadowOffsetY = parseInt(box[1], 10);
      this.ctx.shadowBlur = parseInt(box[2], 10);
      this.ctx.shadowColor = box[3];
    }
  }, {
    key: "_getAngle",
    value: function _getAngle(angle) {
      return Number(angle) * Math.PI / 180;
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/qrcode.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/qrcode.js ***!
  \**************************************************************************************/
/***/ (function(module) {

/* eslint-disable */
!function () {
  // alignment pattern
  var adelta = [0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28];

  // version block
  var vpat = [0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532, 0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5, 0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69];

  // final format bits with mask: level << 3 | mask
  var fmtword = [0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,
  //L
  0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,
  //M
  0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,
  //Q
  0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b //H
  ];

  // 4 per version: number of blocks 1,2; data width; ecc width
  var eccblocks = [1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30];

  // Galois field log table
  var glog = [0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b, 0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71, 0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45, 0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6, 0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88, 0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40, 0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d, 0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57, 0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18, 0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e, 0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61, 0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2, 0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6, 0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a, 0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7, 0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf];

  // Galios field exponent table
  var gexp = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26, 0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0, 0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23, 0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1, 0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0, 0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2, 0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce, 0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc, 0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54, 0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73, 0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff, 0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41, 0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6, 0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09, 0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16, 0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00];

  // Working buffers:
  // data input and ecc append, image working buffer, fixed part of image, run lengths for badness
  var strinbuf = [],
    eccbuf = [],
    qrframe = [],
    framask = [],
    rlens = [];
  // Control values - width is based on version, last 4 are from table.
  var version, width, neccblk1, neccblk2, datablkw, eccblkwid;
  var ecclevel = 2;
  // set bit to indicate cell in qrframe is immutable.  symmetric around diagonal
  function setmask(x, y) {
    var bt;
    if (x > y) {
      bt = x;
      x = y;
      y = bt;
    }
    // y*y = 1+3+5...
    bt = y;
    bt *= y;
    bt += y;
    bt >>= 1;
    bt += x;
    framask[bt] = 1;
  }

  // enter alignment pattern - black to qrframe, white to mask (later black frame merged to mask)
  function putalign(x, y) {
    var j;
    qrframe[x + width * y] = 1;
    for (j = -2; j < 2; j++) {
      qrframe[x + j + width * (y - 2)] = 1;
      qrframe[x - 2 + width * (y + j + 1)] = 1;
      qrframe[x + 2 + width * (y + j)] = 1;
      qrframe[x + j + 1 + width * (y + 2)] = 1;
    }
    for (j = 0; j < 2; j++) {
      setmask(x - 1, y + j);
      setmask(x + 1, y - j);
      setmask(x - j, y - 1);
      setmask(x + j, y + 1);
    }
  }

  //========================================================================
  // Reed Solomon error correction
  // exponentiation mod N
  function modnn(x) {
    while (x >= 255) {
      x -= 255;
      x = (x >> 8) + (x & 255);
    }
    return x;
  }
  var genpoly = [];

  // Calculate and append ECC data to data block.  Block is in strinbuf, indexes to buffers given.
  function appendrs(data, dlen, ecbuf, eclen) {
    var i, j, fb;
    for (i = 0; i < eclen; i++) strinbuf[ecbuf + i] = 0;
    for (i = 0; i < dlen; i++) {
      fb = glog[strinbuf[data + i] ^ strinbuf[ecbuf]];
      if (fb != 255) /* fb term is non-zero */
        for (j = 1; j < eclen; j++) strinbuf[ecbuf + j - 1] = strinbuf[ecbuf + j] ^ gexp[modnn(fb + genpoly[eclen - j])];else for (j = ecbuf; j < ecbuf + eclen; j++) strinbuf[j] = strinbuf[j + 1];
      strinbuf[ecbuf + eclen - 1] = fb == 255 ? 0 : gexp[modnn(fb + genpoly[0])];
    }
  }

  //========================================================================
  // Frame data insert following the path rules

  // check mask - since symmetrical use half.
  function ismasked(x, y) {
    var bt;
    if (x > y) {
      bt = x;
      x = y;
      y = bt;
    }
    bt = y;
    bt += y * y;
    bt >>= 1;
    bt += x;
    return framask[bt];
  }

  //========================================================================
  //  Apply the selected mask out of the 8.
  function applymask(m) {
    var x, y, r3x, r3y;
    switch (m) {
      case 0:
        for (y = 0; y < width; y++) for (x = 0; x < width; x++) if (!(x + y & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
        break;
      case 1:
        for (y = 0; y < width; y++) for (x = 0; x < width; x++) if (!(y & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
        break;
      case 2:
        for (y = 0; y < width; y++) for (r3x = 0, x = 0; x < width; x++, r3x++) {
          if (r3x == 3) r3x = 0;
          if (!r3x && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
        }
        break;
      case 3:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y == 3) r3y = 0;
          for (r3x = r3y, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!r3x && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 4:
        for (y = 0; y < width; y++) for (r3x = 0, r3y = y >> 1 & 1, x = 0; x < width; x++, r3x++) {
          if (r3x == 3) {
            r3x = 0;
            r3y = !r3y;
          }
          if (!r3y && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
        }
        break;
      case 5:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y == 3) r3y = 0;
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!((x & y & 1) + !(!r3x | !r3y)) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 6:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y == 3) r3y = 0;
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!((x & y & 1) + (r3x && r3x == r3y) & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
      case 7:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y == 3) r3y = 0;
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x == 3) r3x = 0;
            if (!((r3x && r3x == r3y) + (x + y & 1) & 1) && !ismasked(x, y)) qrframe[x + y * width] ^= 1;
          }
        }
        break;
    }
    return;
  }

  // Badness coefficients.
  var N1 = 3,
    N2 = 3,
    N3 = 40,
    N4 = 10;

  // Using the table of the length of each run, calculate the amount of bad image 
  // - long runs or those that look like finders; called twice, once each for X and Y
  function badruns(length) {
    var i;
    var runsbad = 0;
    for (i = 0; i <= length; i++) if (rlens[i] >= 5) runsbad += N1 + rlens[i] - 5;
    // BwBBBwB as in finder
    for (i = 3; i < length - 1; i += 2) if (rlens[i - 2] == rlens[i + 2] && rlens[i + 2] == rlens[i - 1] && rlens[i - 1] == rlens[i + 1] && rlens[i - 1] * 3 == rlens[i]
    // white around the black pattern? Not part of spec
    && (rlens[i - 3] == 0 // beginning
    || i + 3 > length // end
    || rlens[i - 3] * 3 >= rlens[i] * 4 || rlens[i + 3] * 3 >= rlens[i] * 4)) runsbad += N3;
    return runsbad;
  }

  // Calculate how bad the masked image is - blocks, imbalance, runs, or finders.
  function badcheck() {
    var x, y, h, b, b1;
    var thisbad = 0;
    var bw = 0;

    // blocks of same color.
    for (y = 0; y < width - 1; y++) for (x = 0; x < width - 1; x++) if (qrframe[x + width * y] && qrframe[x + 1 + width * y] && qrframe[x + width * (y + 1)] && qrframe[x + 1 + width * (y + 1)] // all black
    || !(qrframe[x + width * y] || qrframe[x + 1 + width * y] || qrframe[x + width * (y + 1)] || qrframe[x + 1 + width * (y + 1)]))
      // all white
      thisbad += N2;

    // X runs
    for (y = 0; y < width; y++) {
      rlens[0] = 0;
      for (h = b = x = 0; x < width; x++) {
        if ((b1 = qrframe[x + width * y]) == b) rlens[h]++;else rlens[++h] = 1;
        b = b1;
        bw += b ? 1 : -1;
      }
      thisbad += badruns(h);
    }

    // black/white imbalance
    if (bw < 0) bw = -bw;
    var big = bw;
    var count = 0;
    big += big << 2;
    big <<= 1;
    while (big > width * width) big -= width * width, count++;
    thisbad += count * N4;

    // Y runs
    for (x = 0; x < width; x++) {
      rlens[0] = 0;
      for (h = b = y = 0; y < width; y++) {
        if ((b1 = qrframe[x + width * y]) == b) rlens[h]++;else rlens[++h] = 1;
        b = b1;
      }
      thisbad += badruns(h);
    }
    return thisbad;
  }
  function genframe(instring) {
    var x, y, k, t, v, i, j, m;

    // find the smallest version that fits the string
    t = instring.length;
    version = 0;
    do {
      version++;
      k = (ecclevel - 1) * 4 + (version - 1) * 16;
      neccblk1 = eccblocks[k++];
      neccblk2 = eccblocks[k++];
      datablkw = eccblocks[k++];
      eccblkwid = eccblocks[k];
      k = datablkw * (neccblk1 + neccblk2) + neccblk2 - 3 + (version <= 9);
      if (t <= k) break;
    } while (version < 40);

    // FIXME - insure that it fits insted of being truncated
    width = 17 + 4 * version;

    // allocate, clear and setup data structures
    v = datablkw + (datablkw + eccblkwid) * (neccblk1 + neccblk2) + neccblk2;
    for (t = 0; t < v; t++) eccbuf[t] = 0;
    strinbuf = instring.slice(0);
    for (t = 0; t < width * width; t++) qrframe[t] = 0;
    for (t = 0; t < (width * (width + 1) + 1) / 2; t++) framask[t] = 0;

    // insert finders - black to frame, white to mask
    for (t = 0; t < 3; t++) {
      k = 0;
      y = 0;
      if (t == 1) k = width - 7;
      if (t == 2) y = width - 7;
      qrframe[y + 3 + width * (k + 3)] = 1;
      for (x = 0; x < 6; x++) {
        qrframe[y + x + width * k] = 1;
        qrframe[y + width * (k + x + 1)] = 1;
        qrframe[y + 6 + width * (k + x)] = 1;
        qrframe[y + x + 1 + width * (k + 6)] = 1;
      }
      for (x = 1; x < 5; x++) {
        setmask(y + x, k + 1);
        setmask(y + 1, k + x + 1);
        setmask(y + 5, k + x);
        setmask(y + x + 1, k + 5);
      }
      for (x = 2; x < 4; x++) {
        qrframe[y + x + width * (k + 2)] = 1;
        qrframe[y + 2 + width * (k + x + 1)] = 1;
        qrframe[y + 4 + width * (k + x)] = 1;
        qrframe[y + x + 1 + width * (k + 4)] = 1;
      }
    }

    // alignment blocks
    if (version > 1) {
      t = adelta[version];
      y = width - 7;
      for (;;) {
        x = width - 7;
        while (x > t - 3) {
          putalign(x, y);
          if (x < t) break;
          x -= t;
        }
        if (y <= t + 9) break;
        y -= t;
        putalign(6, y);
        putalign(y, 6);
      }
    }

    // single black
    qrframe[8 + width * (width - 8)] = 1;

    // timing gap - mask only
    for (y = 0; y < 7; y++) {
      setmask(7, y);
      setmask(width - 8, y);
      setmask(7, y + width - 7);
    }
    for (x = 0; x < 8; x++) {
      setmask(x, 7);
      setmask(x + width - 8, 7);
      setmask(x, width - 8);
    }

    // reserve mask-format area
    for (x = 0; x < 9; x++) setmask(x, 8);
    for (x = 0; x < 8; x++) {
      setmask(x + width - 8, 8);
      setmask(8, x);
    }
    for (y = 0; y < 7; y++) setmask(8, y + width - 7);

    // timing row/col
    for (x = 0; x < width - 14; x++) if (x & 1) {
      setmask(8 + x, 6);
      setmask(6, 8 + x);
    } else {
      qrframe[8 + x + width * 6] = 1;
      qrframe[6 + width * (8 + x)] = 1;
    }

    // version block
    if (version > 6) {
      t = vpat[version - 7];
      k = 17;
      for (x = 0; x < 6; x++) for (y = 0; y < 3; y++, k--) if (1 & (k > 11 ? version >> k - 12 : t >> k)) {
        qrframe[5 - x + width * (2 - y + width - 11)] = 1;
        qrframe[2 - y + width - 11 + width * (5 - x)] = 1;
      } else {
        setmask(5 - x, 2 - y + width - 11);
        setmask(2 - y + width - 11, 5 - x);
      }
    }

    // sync mask bits - only set above for white spaces, so add in black bits
    for (y = 0; y < width; y++) for (x = 0; x <= y; x++) if (qrframe[x + width * y]) setmask(x, y);

    // convert string to bitstream
    // 8 bit data to QR-coded 8 bit data (numeric or alphanum, or kanji not supported)
    v = strinbuf.length;

    // string to array
    for (i = 0; i < v; i++) eccbuf[i] = strinbuf.charCodeAt(i);
    strinbuf = eccbuf.slice(0);

    // calculate max string length
    x = datablkw * (neccblk1 + neccblk2) + neccblk2;
    if (v >= x - 2) {
      v = x - 2;
      if (version > 9) v--;
    }

    // shift and repack to insert length prefix
    i = v;
    if (version > 9) {
      strinbuf[i + 2] = 0;
      strinbuf[i + 3] = 0;
      while (i--) {
        t = strinbuf[i];
        strinbuf[i + 3] |= 255 & t << 4;
        strinbuf[i + 2] = t >> 4;
      }
      strinbuf[2] |= 255 & v << 4;
      strinbuf[1] = v >> 4;
      strinbuf[0] = 0x40 | v >> 12;
    } else {
      strinbuf[i + 1] = 0;
      strinbuf[i + 2] = 0;
      while (i--) {
        t = strinbuf[i];
        strinbuf[i + 2] |= 255 & t << 4;
        strinbuf[i + 1] = t >> 4;
      }
      strinbuf[1] |= 255 & v << 4;
      strinbuf[0] = 0x40 | v >> 4;
    }
    // fill to end with pad pattern
    i = v + 3 - (version < 10);
    while (i < x) {
      strinbuf[i++] = 0xec;
      // buffer has room    if (i == x)      break;
      strinbuf[i++] = 0x11;
    }

    // calculate and append ECC

    // calculate generator polynomial
    genpoly[0] = 1;
    for (i = 0; i < eccblkwid; i++) {
      genpoly[i + 1] = 1;
      for (j = i; j > 0; j--) genpoly[j] = genpoly[j] ? genpoly[j - 1] ^ gexp[modnn(glog[genpoly[j]] + i)] : genpoly[j - 1];
      genpoly[0] = gexp[modnn(glog[genpoly[0]] + i)];
    }
    for (i = 0; i <= eccblkwid; i++) genpoly[i] = glog[genpoly[i]]; // use logs for genpoly[] to save calc step

    // append ecc to data buffer
    k = x;
    y = 0;
    for (i = 0; i < neccblk1; i++) {
      appendrs(y, datablkw, k, eccblkwid);
      y += datablkw;
      k += eccblkwid;
    }
    for (i = 0; i < neccblk2; i++) {
      appendrs(y, datablkw + 1, k, eccblkwid);
      y += datablkw + 1;
      k += eccblkwid;
    }
    // interleave blocks
    y = 0;
    for (i = 0; i < datablkw; i++) {
      for (j = 0; j < neccblk1; j++) eccbuf[y++] = strinbuf[i + j * datablkw];
      for (j = 0; j < neccblk2; j++) eccbuf[y++] = strinbuf[neccblk1 * datablkw + i + j * (datablkw + 1)];
    }
    for (j = 0; j < neccblk2; j++) eccbuf[y++] = strinbuf[neccblk1 * datablkw + i + j * (datablkw + 1)];
    for (i = 0; i < eccblkwid; i++) for (j = 0; j < neccblk1 + neccblk2; j++) eccbuf[y++] = strinbuf[x + i + j * eccblkwid];
    strinbuf = eccbuf;

    // pack bits into frame avoiding masked area.
    x = y = width - 1;
    k = v = 1; // up, minus
    /* inteleaved data and ecc codes */
    m = (datablkw + eccblkwid) * (neccblk1 + neccblk2) + neccblk2;
    for (i = 0; i < m; i++) {
      t = strinbuf[i];
      for (j = 0; j < 8; j++, t <<= 1) {
        if (0x80 & t) qrframe[x + width * y] = 1;
        do {
          // find next fill position
          if (v) x--;else {
            x++;
            if (k) {
              if (y != 0) y--;else {
                x -= 2;
                k = !k;
                if (x == 6) {
                  x--;
                  y = 9;
                }
              }
            } else {
              if (y != width - 1) y++;else {
                x -= 2;
                k = !k;
                if (x == 6) {
                  x--;
                  y -= 8;
                }
              }
            }
          }
          v = !v;
        } while (ismasked(x, y));
      }
    }

    // save pre-mask copy of frame
    strinbuf = qrframe.slice(0);
    t = 0; // best
    y = 30000; // demerit
    // for instead of while since in original arduino code
    // if an early mask was "good enough" it wouldn't try for a better one
    // since they get more complex and take longer.
    for (k = 0; k < 8; k++) {
      applymask(k); // returns black-white imbalance
      x = badcheck();
      if (x < y) {
        // current mask better than previous best?
        y = x;
        t = k;
      }
      if (t == 7) break; // don't increment i to a void redoing mask
      qrframe = strinbuf.slice(0); // reset for next pass
    }
    if (t != k)
      // redo best mask - none good enough, last wasn't t
      applymask(t);

    // add in final mask/ecclevel bytes
    y = fmtword[t + (ecclevel - 1 << 3)];
    // low byte
    for (k = 0; k < 8; k++, y >>= 1) if (y & 1) {
      qrframe[width - 1 - k + width * 8] = 1;
      if (k < 6) qrframe[8 + width * k] = 1;else qrframe[8 + width * (k + 1)] = 1;
    }
    // high byte
    for (k = 0; k < 7; k++, y >>= 1) if (y & 1) {
      qrframe[8 + width * (width - 7 + k)] = 1;
      if (k) qrframe[6 - k + width * 8] = 1;else qrframe[7 + width * 8] = 1;
    }
    return qrframe;
  }
  var _canvas = null;
  var api = {
    get ecclevel() {
      return ecclevel;
    },
    set ecclevel(val) {
      ecclevel = val;
    },
    get size() {
      return _size;
    },
    set size(val) {
      _size = val;
    },
    get canvas() {
      return _canvas;
    },
    set canvas(el) {
      _canvas = el;
    },
    getFrame: function getFrame(string) {
      return genframe(string);
    },
    //这里的utf16to8(str)是对Text中的字符串进行转码，让其支持中文
    utf16to8: function utf16to8(str) {
      var out, i, len, c;
      out = "";
      len = str.length;
      for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x0001 && c <= 0x007F) {
          out += str.charAt(i);
        } else if (c > 0x07FF) {
          out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
          out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
          out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
        } else {
          out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
          out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
        }
      }
      return out;
    },
    /**
     * 新增$this参数，传入组件的this,兼容在组件中生成
     * @param bg 目前只能设置颜色值
     */
    draw: function draw(str, ctx, startX, startY, cavW, cavH, bg, color, $this, ecc) {
      var that = this;
      ecclevel = ecc || ecclevel;
      if (!ctx) {
        console.warn('No canvas provided to draw QR code in!');
        return;
      }
      var size = Math.min(cavW, cavH);
      str = that.utf16to8(str); //增加中文显示

      var frame = that.getFrame(str);
      var px = size / width;
      if (bg) {
        ctx.fillStyle = bg;
        ctx.fillRect(startX, startY, cavW, cavW);
      }
      ctx.fillStyle = color || 'black';
      for (var i = 0; i < width; i++) {
        for (var j = 0; j < width; j++) {
          if (frame[j * width + i]) {
            ctx.fillRect(startX + px * i, startY + px * j, px, px);
          }
        }
      }
    }
  };
  module.exports = {
    api: api
  };
  // exports.draw = api;
}();

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/sha1.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/sha1.js ***!
  \************************************************************************************/
/***/ (function(module) {

var hexcase = 0;
var chrsz = 8;
function hex_sha1(s) {
  return binb2hex(core_sha1(str2binb(s), s.length * chrsz));
}
function core_sha1(x, len) {
  x[len >> 5] |= 0x80 << 24 - len % 32;
  x[(len + 64 >> 9 << 4) + 15] = len;
  var w = Array(80);
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;
  var e = -1009589776;
  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;
    for (var j = 0; j < 80; j++) {
      if (j < 16) w[j] = x[i + j];else w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }
    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);
}
function sha1_ft(t, b, c, d) {
  if (t < 20) return b & c | ~b & d;
  if (t < 40) return b ^ c ^ d;
  if (t < 60) return b & c | b & d | c & d;
  return b ^ c ^ d;
}
function sha1_kt(t) {
  return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
}
function safe_add(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
function rol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function str2binb(str) {
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for (var i = 0; i < str.length * chrsz; i += chrsz) bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << 24 - i % 32;
  return bin;
}
function binb2hex(binarray) {
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 + 4 & 0xf) + hex_tab.charAt(binarray[i >> 2] >> (3 - i % 4) * 8 & 0xf);
  }
  return str;
}
module.exports = {
  hex_sha1: hex_sha1
};

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/string-polyfill.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/string-polyfill.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var _toConsumableArray = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js")["default"]);
String.prototype.substr = function (start, length) {
  if (start === undefined) {
    return this.toString();
  }
  if (typeof start !== 'number' || typeof length !== 'number' && length !== undefined) {
    return '';
  }
  var strArr = _toConsumableArray(this);
  var _length = strArr.length;
  if (_length + start < 0) {
    start = 0;
  }
  if (length === undefined || start < 0 && start + length > 0) {
    return strArr.slice(start).join('');
  } else {
    return strArr.slice(start, start + length).join('');
  }
};
String.prototype.substring = function (start, end) {
  if (start === undefined) {
    return this.toString();
  }
  if (typeof start !== 'number' || typeof end !== 'number' && end !== undefined) {
    return '';
  }
  if (!(start > 0)) {
    start = 0;
  }
  if (!(end > 0) && end !== undefined) {
    end = 0;
  }
  var strArr = _toConsumableArray(this);
  var _length = strArr.length;
  if (start > _length) {
    start = _length;
  }
  if (end > _length) {
    end = _length;
  }
  if (end < start) {
    var _ref = [end, start];
    start = _ref[0];
    end = _ref[1];
  }
  return strArr.slice(start, end).join('');
};

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/util.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/util.js ***!
  \************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function isValidUrl(url) {
  return isOnlineUrl(url) || isDataUrl(url);
}
function isOnlineUrl(url) {
  return /((ht|f)tp(s?)|cloud):\/\/([^ \\/]*\.)+[^ \\/]*(:[0-9]+)?\/?/.test(url);
}
function isDataUrl(url) {
  return /data:image\/(\w+);base64,(.*)/.test(url);
}

/**
 * 深度对比两个对象是否一致
 * from: https://github.com/epoberezkin/fast-deep-equal
 * @param  {Object} a 对象a
 * @param  {Object} b 对象b
 * @return {Boolean}   是否相同
 */
/* eslint-disable */
function equal(a, b) {
  if (a === b) return true;
  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i,
      length,
      key;
    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
      return true;
    }
    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
      dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
module.exports = {
  isValidUrl: isValidUrl,
  isOnlineUrl: isOnlineUrl,
  isDataUrl: isDataUrl,
  equal: equal
};

/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/wx-canvas.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/wx-canvas.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WxCanvas; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");







// @ts-check
var WxCanvas = /*#__PURE__*/function () {
  function WxCanvas(type, ctx, canvasId, isNew, canvasNode) {
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WxCanvas);
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "ctx", void 0);
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "type", void 0);
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "canvasId", void 0);
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "canvasNode", void 0);
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "stepList", []);
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "canvasPrototype", {});
    this.ctx = ctx;
    this.canvasId = canvasId;
    this.type = type;
    if (isNew) {
      this.canvasNode = canvasNode || {};
    }
  }
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(WxCanvas, [{
    key: "width",
    get: function get() {
      if (this.canvasNode) return this.canvasNode.width;
      return 0;
    },
    set: function set(w) {
      if (this.canvasNode) {
        this.canvasNode.width = w;
        // 经测试，在 2d 接口中如果不设置这个值，IOS 端有一定几率会出现图片显示不全的情况。
        this.canvasNode._width = w;
      }
    }
  }, {
    key: "height",
    get: function get() {
      if (this.canvasNode) return this.canvasNode.height;
      return 0;
    },
    set: function set(h) {
      if (this.canvasNode) {
        this.canvasNode.height = h;
        // 经测试，在 2d 接口中如果不设置这个值，IOS 端有一定几率会出现图片显示不全的情况。
        this.canvasNode._height = h;
      }
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return this.canvasPrototype.lineWidth;
    },
    set: function set(args) {
      this.canvasPrototype.lineWidth = args;
      this.stepList.push({
        action: "lineWidth",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "lineCap",
    get: function get() {
      return this.canvasPrototype.lineCap;
    },
    set: function set(args) {
      this.canvasPrototype.lineCap = args;
      this.stepList.push({
        action: "lineCap",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "lineJoin",
    get: function get() {
      return this.canvasPrototype.lineJoin;
    },
    set: function set(args) {
      this.canvasPrototype.lineJoin = args;
      this.stepList.push({
        action: "lineJoin",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "miterLimit",
    get: function get() {
      return this.canvasPrototype.miterLimit;
    },
    set: function set(args) {
      this.canvasPrototype.miterLimit = args;
      this.stepList.push({
        action: "miterLimit",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "lineDashOffset",
    get: function get() {
      return this.canvasPrototype.lineDashOffset;
    },
    set: function set(args) {
      this.canvasPrototype.lineDashOffset = args;
      this.stepList.push({
        action: "lineDashOffset",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "font",
    get: function get() {
      return this.canvasPrototype.font;
    },
    set: function set(args) {
      this.canvasPrototype.font = args;
      this.ctx.font = args;
      this.stepList.push({
        action: "font",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "textAlign",
    get: function get() {
      return this.canvasPrototype.textAlign;
    },
    set: function set(args) {
      this.canvasPrototype.textAlign = args;
      this.stepList.push({
        action: "textAlign",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "textBaseline",
    get: function get() {
      return this.canvasPrototype.textBaseline;
    },
    set: function set(args) {
      this.canvasPrototype.textBaseline = args;
      this.stepList.push({
        action: "textBaseline",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "fillStyle",
    get: function get() {
      return this.canvasPrototype.fillStyle;
    },
    set: function set(args) {
      this.canvasPrototype.fillStyle = args;
      this.stepList.push({
        action: "fillStyle",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "strokeStyle",
    get: function get() {
      return this.canvasPrototype.strokeStyle;
    },
    set: function set(args) {
      this.canvasPrototype.strokeStyle = args;
      this.stepList.push({
        action: "strokeStyle",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "globalAlpha",
    get: function get() {
      return this.canvasPrototype.globalAlpha;
    },
    set: function set(args) {
      this.canvasPrototype.globalAlpha = args;
      this.stepList.push({
        action: "globalAlpha",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "globalCompositeOperation",
    get: function get() {
      return this.canvasPrototype.globalCompositeOperation;
    },
    set: function set(args) {
      this.canvasPrototype.globalCompositeOperation = args;
      this.stepList.push({
        action: "globalCompositeOperation",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "shadowColor",
    get: function get() {
      return this.canvasPrototype.shadowColor;
    },
    set: function set(args) {
      this.canvasPrototype.shadowColor = args;
      this.stepList.push({
        action: "shadowColor",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "shadowOffsetX",
    get: function get() {
      return this.canvasPrototype.shadowOffsetX;
    },
    set: function set(args) {
      this.canvasPrototype.shadowOffsetX = args;
      this.stepList.push({
        action: "shadowOffsetX",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "shadowOffsetY",
    get: function get() {
      return this.canvasPrototype.shadowOffsetY;
    },
    set: function set(args) {
      this.canvasPrototype.shadowOffsetY = args;
      this.stepList.push({
        action: "shadowOffsetY",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "shadowBlur",
    get: function get() {
      return this.canvasPrototype.shadowBlur;
    },
    set: function set(args) {
      this.canvasPrototype.shadowBlur = args;
      this.stepList.push({
        action: "shadowBlur",
        args: args,
        actionType: "set"
      });
    }
  }, {
    key: "save",
    value: function save() {
      this.stepList.push({
        action: "save",
        args: null,
        actionType: "func"
      });
    }
  }, {
    key: "restore",
    value: function restore() {
      this.stepList.push({
        action: "restore",
        args: null,
        actionType: "func"
      });
    }
  }, {
    key: "setLineDash",
    value: function setLineDash() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this.canvasPrototype.lineDash = args;
      this.stepList.push({
        action: "setLineDash",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "moveTo",
    value: function moveTo() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this.stepList.push({
        action: "moveTo",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "closePath",
    value: function closePath() {
      this.stepList.push({
        action: "closePath",
        args: null,
        actionType: "func"
      });
    }
  }, {
    key: "lineTo",
    value: function lineTo() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this.stepList.push({
        action: "lineTo",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "quadraticCurveTo",
    value: function quadraticCurveTo() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this.stepList.push({
        action: "quadraticCurveTo",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "bezierCurveTo",
    value: function bezierCurveTo() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this.stepList.push({
        action: "bezierCurveTo",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "arcTo",
    value: function arcTo() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      this.stepList.push({
        action: "arcTo",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "arc",
    value: function arc() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      this.stepList.push({
        action: "arc",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "rect",
    value: function rect() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      this.stepList.push({
        action: "rect",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "scale",
    value: function scale() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      this.stepList.push({
        action: "scale",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "rotate",
    value: function rotate() {
      for (var _len0 = arguments.length, args = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
        args[_key0] = arguments[_key0];
      }
      this.stepList.push({
        action: "rotate",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "translate",
    value: function translate() {
      for (var _len1 = arguments.length, args = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
        args[_key1] = arguments[_key1];
      }
      this.stepList.push({
        action: "translate",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "transform",
    value: function transform() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      this.stepList.push({
        action: "transform",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "setTransform",
    value: function setTransform() {
      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }
      this.stepList.push({
        action: "setTransform",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "clearRect",
    value: function clearRect() {
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }
      this.stepList.push({
        action: "clearRect",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "fillRect",
    value: function fillRect() {
      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }
      this.stepList.push({
        action: "fillRect",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "strokeRect",
    value: function strokeRect() {
      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }
      this.stepList.push({
        action: "strokeRect",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "fillText",
    value: function fillText() {
      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }
      this.stepList.push({
        action: "fillText",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "strokeText",
    value: function strokeText() {
      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }
      this.stepList.push({
        action: "strokeText",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      this.stepList.push({
        action: "beginPath",
        args: null,
        actionType: "func"
      });
    }
  }, {
    key: "fill",
    value: function fill() {
      this.stepList.push({
        action: "fill",
        args: null,
        actionType: "func"
      });
    }
  }, {
    key: "stroke",
    value: function stroke() {
      this.stepList.push({
        action: "stroke",
        args: null,
        actionType: "func"
      });
    }
  }, {
    key: "drawFocusIfNeeded",
    value: function drawFocusIfNeeded() {
      for (var _len17 = arguments.length, args = new Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
        args[_key17] = arguments[_key17];
      }
      this.stepList.push({
        action: "drawFocusIfNeeded",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "clip",
    value: function clip() {
      this.stepList.push({
        action: "clip",
        args: null,
        actionType: "func"
      });
    }
  }, {
    key: "isPointInPath",
    value: function isPointInPath() {
      for (var _len18 = arguments.length, args = new Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
        args[_key18] = arguments[_key18];
      }
      this.stepList.push({
        action: "isPointInPath",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "drawImage",
    value: function drawImage() {
      for (var _len19 = arguments.length, args = new Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
        args[_key19] = arguments[_key19];
      }
      this.stepList.push({
        action: "drawImage",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "addHitRegion",
    value: function addHitRegion() {
      for (var _len20 = arguments.length, args = new Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
        args[_key20] = arguments[_key20];
      }
      this.stepList.push({
        action: "addHitRegion",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "removeHitRegion",
    value: function removeHitRegion() {
      for (var _len21 = arguments.length, args = new Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
        args[_key21] = arguments[_key21];
      }
      this.stepList.push({
        action: "removeHitRegion",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "clearHitRegions",
    value: function clearHitRegions() {
      for (var _len22 = arguments.length, args = new Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
        args[_key22] = arguments[_key22];
      }
      this.stepList.push({
        action: "clearHitRegions",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "putImageData",
    value: function putImageData() {
      for (var _len23 = arguments.length, args = new Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
        args[_key23] = arguments[_key23];
      }
      this.stepList.push({
        action: "putImageData",
        args: args,
        actionType: "func"
      });
    }
  }, {
    key: "getLineDash",
    value: function getLineDash() {
      return this.canvasPrototype.lineDash;
    }
  }, {
    key: "createLinearGradient",
    value: function createLinearGradient() {
      var _this$ctx;
      return (_this$ctx = this.ctx).createLinearGradient.apply(_this$ctx, arguments);
    }
  }, {
    key: "createRadialGradient",
    value: function createRadialGradient() {
      for (var _len24 = arguments.length, args = new Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
        args[_key24] = arguments[_key24];
      }
      if (this.type === "2d") {
        var _this$ctx2;
        return (_this$ctx2 = this.ctx).createRadialGradient.apply(_this$ctx2, args);
      } else {
        var _this$ctx3;
        return (_this$ctx3 = this.ctx).createCircularGradient.apply(_this$ctx3, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(args.slice(3, 6)));
      }
    }
  }, {
    key: "createPattern",
    value: function createPattern() {
      var _this$ctx4;
      return (_this$ctx4 = this.ctx).createPattern.apply(_this$ctx4, arguments);
    }
  }, {
    key: "measureText",
    value: function measureText() {
      var _this$ctx5;
      return (_this$ctx5 = this.ctx).measureText.apply(_this$ctx5, arguments);
    }
  }, {
    key: "createImageData",
    value: function createImageData() {
      var _this$ctx6;
      return (_this$ctx6 = this.ctx).createImageData.apply(_this$ctx6, arguments);
    }
  }, {
    key: "getImageData",
    value: function getImageData() {
      var _this$ctx7;
      return (_this$ctx7 = this.ctx).getImageData.apply(_this$ctx7, arguments);
    }
  }, {
    key: "draw",
    value: function () {
      var _draw = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])().m(function _callee(reserve, func) {
        var realstepList, _iterator, _step, step, _iterator2, _step2, _step3, _t;
        return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_5__["default"])().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              realstepList = this.stepList.slice();
              this.stepList.length = 0;
              if (!(this.type === "mina")) {
                _context.n = 1;
                break;
              }
              if (realstepList.length > 0) {
                _iterator = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(realstepList);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    step = _step.value;
                    this.implementMinaStep(step);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                realstepList.length = 0;
              }
              this.ctx.draw(reserve, func);
              _context.n = 10;
              break;
            case 1:
              if (!(this.type === "2d")) {
                _context.n = 10;
                break;
              }
              if (!reserve) {
                this.ctx.clearRect(0, 0, this.canvasNode.width, this.canvasNode.height);
              }
              if (!(realstepList.length > 0)) {
                _context.n = 9;
                break;
              }
              _iterator2 = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(realstepList);
              _context.p = 2;
              _iterator2.s();
            case 3:
              if ((_step2 = _iterator2.n()).done) {
                _context.n = 5;
                break;
              }
              _step3 = _step2.value;
              _context.n = 4;
              return this.implement2DStep(_step3);
            case 4:
              _context.n = 3;
              break;
            case 5:
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              _iterator2.e(_t);
            case 7:
              _context.p = 7;
              _iterator2.f();
              return _context.f(7);
            case 8:
              realstepList.length = 0;
            case 9:
              if (func) {
                func();
              }
            case 10:
              realstepList.length = 0;
            case 11:
              return _context.a(2);
          }
        }, _callee, this, [[2, 6, 7, 8]]);
      }));
      function draw(_x, _x2) {
        return _draw.apply(this, arguments);
      }
      return draw;
    }()
  }, {
    key: "implementMinaStep",
    value: function implementMinaStep(step) {
      switch (step.action) {
        case "textAlign":
          {
            this.ctx.setTextAlign(step.args);
            break;
          }
        case "textBaseline":
          {
            this.ctx.setTextBaseline(step.args);
            break;
          }
        default:
          {
            if (step.actionType === "set") {
              this.ctx[step.action] = step.args;
            } else if (step.actionType === "func") {
              if (step.args) {
                var _this$ctx8;
                (_this$ctx8 = this.ctx)[step.action].apply(_this$ctx8, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(step.args));
              } else {
                this.ctx[step.action]();
              }
            }
            break;
          }
      }
    }
  }, {
    key: "implement2DStep",
    value: function implement2DStep(step) {
      var _this = this;
      return new Promise(function (resolve) {
        if (step.action === "drawImage") {
          var img = _this.canvasNode.createImage();
          img.src = step.args[0];
          img.onload = function () {
            var _this$ctx9;
            (_this$ctx9 = _this.ctx).drawImage.apply(_this$ctx9, [img].concat((0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(step.args.slice(1))));
            resolve(1);
          };
        } else {
          if (step.actionType === "set") {
            _this.ctx[step.action] = step.args;
          } else if (step.actionType === "func") {
            if (step.args) {
              var _this$ctx0;
              (_this$ctx0 = _this.ctx)[step.action].apply(_this$ctx0, (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(step.args));
            } else {
              _this.ctx[step.action]();
            }
          }
          resolve(1);
        }
      });
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/weapp.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@hb/taro-fusion-components/esm/components/Poster/weapp.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _libs_pen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/pen */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/pen.js");
/* harmony import */ var _libs_downloader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./libs/downloader */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/downloader.js");
/* harmony import */ var _libs_wx_canvas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./libs/wx-canvas */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/wx-canvas.js");
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./libs/util */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/util.js");
/* harmony import */ var _libs_util__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_libs_util__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);










function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
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
function _callSuper(t, o, e) {
  return o = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(o), (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
/* eslint-disable */







var calc = __webpack_require__(/*! ./libs/calc */ "./node_modules/@hb/taro-fusion-components/esm/components/Poster/libs/calc.js");

// 最大尝试的绘制次数
var MAX_PAINT_COUNT = 5;
var ACTION_DEFAULT_SIZE = 24;
var ACTION_OFFSET = '2rpx';
function setStringPrototype(screenK, scale) {
  // @ts-ignore
  String.prototype.toPx = function toPx(_, baseSize) {
    if (this === '0') {
      return 0;
    }
    var REG = /-?[0-9]+(\.[0-9]+)?(rpx|px|%)/;
    var parsePx = function parsePx(origin) {
      var results = new RegExp(REG).exec(origin);
      if (!origin || !results) {
        console.error("The size: ".concat(origin, " is illegal"));
        return 0;
      }
      var unit = results[2];
      var value = parseFloat(origin);
      var res = 0;
      if (unit === 'rpx') {
        res = Math.round(value * (screenK || 0.5) * (scale || 1));
      } else if (unit === 'px') {
        res = Math.round(value * (scale || 1));
      } else if (unit === '%') {
        res = Math.round(value * baseSize / 100);
      }
      return res;
    };
    var formula = /^calc\((.+)\)$/.exec(this);
    if (formula && formula[1]) {
      // 进行 calc 计算
      var afterOne = formula[1].replace(/([^\s\(\+\-\*\/]+)\.(left|right|bottom|top|width|height)/g, function (word) {
        var _word$split = word.split('.'),
          _word$split2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_word$split, 2),
          id = _word$split2[0],
          attr = _word$split2[1];
        return _libs_pen__WEBPACK_IMPORTED_MODULE_6__.penCache.viewRect[id][attr];
      });
      var afterTwo = afterOne.replace(new RegExp(REG, 'g'), parsePx);
      return calc(afterTwo);
    }
    return parsePx(this);
  };
}
var WeAppPoster = /*#__PURE__*/function (_Component) {
  function WeAppPoster(props) {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, WeAppPoster);
    _this = _callSuper(this, WeAppPoster, [props]);
    _this.state = {
      picURL: '',
      showCanvas: true,
      painterStyle: '',
      photoStyle: ''
    };
    _this.canvasWidthInPx = 0;
    _this.canvasHeightInPx = 0;
    _this.canvasNode = null;
    _this.paintCount = 0;
    _this.currentPalette = {};
    _this.outterDisabled = false;
    _this.isDisabled = false;
    _this.needClear = false;
    _this.frontContext = Object.create(null);
    _this.bottomContext = Object.create(null);
    _this.topContext = Object.create(null);
    _this.globalContext = Object.create(null);
    _this.touchedView = {};
    _this.findedIndex = -1;
    _this.startX = 0;
    _this.startY = 0;
    _this.startH = 0;
    _this.startW = 0;
    _this.isScale = false;
    _this.startTimeStamp = 0;
    _this.hasMove = false;
    return _this;
  }
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(WeAppPoster, _Component);
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(WeAppPoster, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialize();
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this2 = this;
      var _this$props = this.props,
        use2D = _this$props.use2D,
        palette = _this$props.palette,
        dancePalette = _this$props.dancePalette,
        action = _this$props.action,
        isDisabled = _this$props.isDisabled,
        clearActionBox = _this$props.clearActionBox;
      if (!this.isEmpty(palette) && use2D) {
        this.paintCount = 0;
        (0,_libs_pen__WEBPACK_IMPORTED_MODULE_6__.clearPenCache)();
        this.startPaint();
      }
      if (!this.isEmpty(dancePalette) && !use2D) {
        (0,_libs_pen__WEBPACK_IMPORTED_MODULE_6__.clearPenCache)();
        this.initDancePalette(dancePalette);
      }
      if (action && !this.isEmpty(action) && !use2D) {
        this.doAction(action, null, false, true);
      }
      this.outterDisabled = isDisabled;
      this.isDisabled = isDisabled;
      if (clearActionBox && !this.needClear) {
        if (this.frontContext) {
          var timer = setTimeout(function () {
            clearTimeout(timer);
            _this2.frontContext.draw();
          }, 100);
          this.touchedView = {};
          this.prevFindedIndex = this.findedIndex;
          this.findedIndex = -1;
        }
      }
      this.needClear = clearActionBox;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(object) {
      for (var i in object) {
        return false;
      }
      return true;
    }
  }, {
    key: "isNeedRefresh",
    value: function isNeedRefresh(newVal, oldVal) {
      if (!newVal || this.isEmpty(newVal) || this.props.dirty && _libs_util__WEBPACK_IMPORTED_MODULE_10___default().equal(newVal, oldVal)) {
        return false;
      }
      return true;
    }
  }, {
    key: "getBox",
    value: function getBox(rect, type) {
      var boxArea = {
        type: 'rect',
        css: {
          height: "".concat(rect.bottom - rect.top, "px"),
          width: "".concat(rect.right - rect.left, "px"),
          left: "".concat(rect.left, "px"),
          top: "".concat(rect.top, "px"),
          borderWidth: '4rpx',
          borderColor: '#1A7AF8',
          color: 'transparent'
        }
      };
      if (type === 'text') {
        boxArea.css = _objectSpread(_objectSpread({}, boxArea.css), {}, {
          borderStyle: 'dashed'
        });
      }
      if (this.props.customActionStyle && this.props.customActionStyle.border) {
        boxArea.css = _objectSpread(_objectSpread({}, boxArea.css), this.props.customActionStyle.border);
      }
      Object.assign(boxArea, {
        id: 'box'
      });
      return boxArea;
    }
  }, {
    key: "getScaleIcon",
    value: function getScaleIcon(rect, type) {
      var scaleArea = {};
      var customActionStyle = this.props.customActionStyle;
      if (customActionStyle && customActionStyle.scale) {
        scaleArea = {
          type: 'image',
          url: type === 'text' ? customActionStyle.scale.textIcon : customActionStyle.scale.imageIcon,
          css: {
            height: "".concat(2 * ACTION_DEFAULT_SIZE, "rpx"),
            width: "".concat(2 * ACTION_DEFAULT_SIZE, "rpx"),
            borderRadius: "".concat(ACTION_DEFAULT_SIZE, "rpx")
          }
        };
      } else {
        scaleArea = {
          type: 'rect',
          css: {
            height: "".concat(2 * ACTION_DEFAULT_SIZE, "rpx"),
            width: "".concat(2 * ACTION_DEFAULT_SIZE, "rpx"),
            borderRadius: "".concat(ACTION_DEFAULT_SIZE, "rpx"),
            color: '#0000ff'
          }
        };
      }
      scaleArea.css = _objectSpread(_objectSpread({}, scaleArea.css), {}, {
        align: 'center',
        left: "".concat(rect.right + ACTION_OFFSET.toPx(), "px"),
        top: type === 'text' ? "".concat(rect.top - ACTION_OFFSET.toPx() - scaleArea.css.height.toPx() / 2, "px") : "".concat(rect.bottom - ACTION_OFFSET.toPx() - scaleArea.css.height.toPx() / 2, "px")
      });
      Object.assign(scaleArea, {
        id: 'scale'
      });
      return scaleArea;
    }
  }, {
    key: "getDeleteIcon",
    value: function getDeleteIcon(rect) {
      var deleteArea = {};
      var customActionStyle = this.props.customActionStyle;
      if (customActionStyle && customActionStyle.scale) {
        deleteArea = {
          type: 'image',
          url: customActionStyle["delete"].icon,
          css: {
            height: "".concat(2 * ACTION_DEFAULT_SIZE, "rpx"),
            width: "".concat(2 * ACTION_DEFAULT_SIZE, "rpx"),
            borderRadius: "".concat(ACTION_DEFAULT_SIZE, "rpx")
          }
        };
      } else {
        deleteArea = {
          type: 'rect',
          css: {
            height: "".concat(2 * ACTION_DEFAULT_SIZE, "rpx"),
            width: "".concat(2 * ACTION_DEFAULT_SIZE, "rpx"),
            borderRadius: "".concat(ACTION_DEFAULT_SIZE, "rpx"),
            color: '#0000ff'
          }
        };
      }
      deleteArea.css = _objectSpread(_objectSpread({}, deleteArea.css), {}, {
        align: 'center',
        left: "".concat(rect.left - ACTION_OFFSET.toPx(), "px"),
        top: "".concat(rect.top - ACTION_OFFSET.toPx() - deleteArea.css.height.toPx() / 2, "px")
      });
      Object.assign(deleteArea, {
        id: 'delete'
      });
      return deleteArea;
    }
  }, {
    key: "doAction",
    value: function doAction(action, callback, isMoving, overwrite) {
      var _this3 = this;
      if (this.props.use2D) {
        return;
      }
      var newVal = null;
      if (action) {
        newVal = action.view;
      }
      if (newVal && newVal.id && this.touchedView.id !== newVal.id) {
        // 带 id 的动作给撤回时使用，不带 id，表示对当前选中对象进行操作
        var views = this.currentPalette.views;
        for (var i = 0; i < views.length; i++) {
          if (views[i].id === newVal.id) {
            // 跨层回撤，需要重新构建三层关系
            this.touchedView = views[i];
            this.findedIndex = i;
            this.sliceLayers();
            break;
          }
        }
      }
      var doView = this.touchedView;
      if (!doView || this.isEmpty(doView)) {
        return;
      }
      if (newVal && newVal.css) {
        if (overwrite) {
          doView.css = newVal.css;
        } else if (Array.isArray(doView.css) && Array.isArray(newVal.css)) {
          doView.css = Object.assign.apply(Object, [{}].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__["default"])(doView.css), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__["default"])(newVal.css)));
        } else if (Array.isArray(doView.css)) {
          doView.css = Object.assign.apply(Object, [{}].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__["default"])(doView.css), [newVal.css]));
        } else if (Array.isArray(newVal.css)) {
          doView.css = Object.assign.apply(Object, [{}, doView.css].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_11__["default"])(newVal.css)));
        } else {
          doView.css = _objectSpread(_objectSpread({}, doView.css), newVal.css);
        }
      }
      if (newVal && newVal.rect) {
        doView.rect = newVal.rect;
      }
      if (newVal && newVal.url && doView.url && newVal.url !== doView.url) {
        var downloader = new _libs_downloader__WEBPACK_IMPORTED_MODULE_12__["default"]();
        downloader.download(newVal.url, this.props.LRU).then(function (path) {
          if (newVal.url.startsWith('https')) {
            doView.originUrl = newVal.url;
          }
          doView.url = path;
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getImageInfo({
            src: path,
            success: function success(res) {
              doView.sHeight = res.height;
              doView.sWidth = res.width;
              _this3.reDraw(doView, callback, isMoving);
            },
            fail: function fail() {
              _this3.reDraw(doView, callback, isMoving);
            }
          });
        })["catch"](function (error) {
          // 未下载成功，直接绘制
          console.error(error);
          _this3.reDraw(doView, callback, isMoving);
        });
      } else {
        newVal && newVal.text && doView.text && newVal.text !== doView.text && (doView.text = newVal.text);
        newVal && newVal.content && doView.content && newVal.content !== doView.content && (doView.content = newVal.content);
        this.reDraw(doView, callback, isMoving);
      }
    }
  }, {
    key: "reDraw",
    value: function reDraw(doView, callback, isMoving) {
      var _this4 = this;
      var draw = {
        width: this.currentPalette.width,
        height: this.currentPalette.height,
        views: this.isEmpty(doView) ? [] : [doView]
      };
      var pen = new _libs_pen__WEBPACK_IMPORTED_MODULE_6__["default"](this.globalContext, draw);
      pen.paint(function (callbackInfo) {
        callback && callback(callbackInfo);
        _this4.triggerEvent('viewUpdate', {
          view: _this4.touchedView
        });
      });
      var rect = doView.rect,
        css = doView.css,
        type = doView.type;
      this.block = {
        width: this.currentPalette.width,
        height: this.currentPalette.height,
        views: this.isEmpty(doView) ? [] : [this.getBox(rect, doView.type)]
      };
      if (css && css.scalable) {
        this.block.views.push(this.getScaleIcon(rect, type));
      }
      if (css && css.deletable) {
        this.block.views.push(this.getDeleteIcon(rect));
      }
      var topBlock = new _libs_pen__WEBPACK_IMPORTED_MODULE_6__["default"](this.frontContext, this.block);
      topBlock.paint();
    }
  }, {
    key: "isInView",
    value: function isInView(x, y, rect) {
      return x > rect.left && y > rect.top && x < rect.right && y < rect.bottom;
    }
  }, {
    key: "isInDelete",
    value: function isInDelete(x, y) {
      var _iterator = _createForOfIteratorHelper(this.block.views),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var view = _step.value;
          if (view.id === 'delete') {
            return x > view.rect.left && y > view.rect.top && x < view.rect.right && y < view.rect.bottom;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
  }, {
    key: "isInScale",
    value: function isInScale(x, y) {
      var _iterator2 = _createForOfIteratorHelper(this.block.views),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var view = _step2.value;
          if (view.id === 'scale') {
            return x > view.rect.left && y > view.rect.top && x < view.rect.right && y < view.rect.bottom;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return false;
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var x = this.startX;
      var y = this.startY;
      var totalLayerCount = this.currentPalette.views.length;
      var canBeTouched = [];
      var isDelete = false;
      var deleteIndex = -1;
      for (var i = totalLayerCount - 1; i >= 0; i--) {
        var view = this.currentPalette.views[i];
        var rect = view.rect;
        if (this.touchedView && this.touchedView.id && this.touchedView.id === view.id && this.isInDelete(x, y, rect)) {
          canBeTouched.length = 0;
          deleteIndex = i;
          isDelete = true;
          break;
        }
        if (this.isInView(x, y, rect)) {
          canBeTouched.push({
            view: view,
            index: i
          });
        }
      }
      this.touchedView = {};
      if (canBeTouched.length === 0) {
        this.findedIndex = -1;
      } else {
        var _i = 0;
        var touchAble = canBeTouched.filter(function (item) {
          return Boolean(item.view.id);
        });
        if (touchAble.length === 0) {
          this.findedIndex = canBeTouched[0].index;
        } else {
          for (_i = 0; _i < touchAble.length; _i++) {
            if (this.findedIndex === touchAble[_i].index) {
              _i++;
              break;
            }
          }
          if (_i === touchAble.length) {
            _i = 0;
          }
          this.touchedView = touchAble[_i].view;
          this.findedIndex = touchAble[_i].index;
          this.triggerEvent('viewClicked', {
            view: this.touchedView
          });
        }
      }
      if (this.findedIndex < 0 || this.touchedView && !this.touchedView.id) {
        // 证明点击了背景 或无法移动的view
        this.frontContext.draw();
        if (isDelete) {
          this.triggerEvent('touchEnd', {
            view: this.currentPalette.views[deleteIndex],
            index: deleteIndex,
            type: 'delete'
          });
          this.doAction();
        } else if (this.findedIndex < 0) {
          this.triggerEvent('viewClicked', {});
        }
        this.findedIndex = -1;
        this.prevFindedIndex = -1;
      } else if (this.touchedView && this.touchedView.id) {
        this.sliceLayers();
      }
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(method, data) {
      if (this.props[method]) {
        this.props[method](data);
      }
    }
  }, {
    key: "sliceLayers",
    value: function sliceLayers() {
      var bottomLayers = this.currentPalette.views.slice(0, this.findedIndex);
      var topLayers = this.currentPalette.views.slice(this.findedIndex + 1);
      var bottomDraw = {
        width: this.currentPalette.width,
        height: this.currentPalette.height,
        background: this.currentPalette.background,
        views: bottomLayers
      };
      var topDraw = {
        width: this.currentPalette.width,
        height: this.currentPalette.height,
        views: topLayers
      };
      if (this.prevFindedIndex < this.findedIndex) {
        new _libs_pen__WEBPACK_IMPORTED_MODULE_6__["default"](this.bottomContext, bottomDraw).paint();
        this.doAction();
        new _libs_pen__WEBPACK_IMPORTED_MODULE_6__["default"](this.topContext, topDraw).paint();
      } else {
        new _libs_pen__WEBPACK_IMPORTED_MODULE_6__["default"](this.topContext, topDraw).paint();
        this.doAction();
        new _libs_pen__WEBPACK_IMPORTED_MODULE_6__["default"](this.bottomContext, bottomDraw).paint();
      }
      this.prevFindedIndex = this.findedIndex;
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      if (this.isDisabled) {
        return;
      }
      var _event$touches$ = event.touches[0],
        x = _event$touches$.x,
        y = _event$touches$.y;
      this.startX = x;
      this.startY = y;
      this.startTimeStamp = new Date().getTime();
      if (this.touchedView && !this.isEmpty(this.touchedView)) {
        var rect = this.touchedView.rect;
        if (this.isInScale(x, y, rect)) {
          this.isScale = true;
          this.startH = rect.bottom - rect.top;
          this.startW = rect.right - rect.left;
        } else {
          this.isScale = false;
        }
      } else {
        this.isScale = false;
      }
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      if (this.isDisabled) {
        return;
      }
      var current = new Date().getTime();
      if (current - this.startTimeStamp <= 500 && !this.hasMove) {
        !this.isScale && this.onClick(e);
      } else if (this.touchedView && !this.isEmpty(this.touchedView)) {
        this.triggerEvent('touchEnd', {
          view: this.touchedView
        });
      }
      this.hasMove = false;
    }
  }, {
    key: "onTouchCancel",
    value: function onTouchCancel(e) {
      if (this.isDisabled) {
        return;
      }
      this.onTouchEnd(e);
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      if (this.isDisabled) {
        return;
      }
      this.hasMove = true;
      if (!this.touchedView || this.touchedView && !this.touchedView.id) {
        return;
      }
      var _event$touches$2 = event.touches[0],
        x = _event$touches$2.x,
        y = _event$touches$2.y;
      var offsetX = x - this.startX;
      var offsetY = y - this.startY;
      var _this$touchedView = this.touchedView,
        rect = _this$touchedView.rect,
        type = _this$touchedView.type;
      var css = {};
      if (this.isScale) {
        (0,_libs_pen__WEBPACK_IMPORTED_MODULE_6__.clearPenCache)(this.touchedView.id);
        var newW = this.startW + offsetX > 1 ? this.startW + offsetX : 1;
        if (this.touchedView.css && this.touchedView.css.minWidth) {
          if (newW < this.touchedView.css.minWidth.toPx()) {
            return;
          }
        }
        if (this.touchedView.rect && this.touchedView.rect.minWidth) {
          if (newW < this.touchedView.rect.minWidth) {
            return;
          }
        }
        var newH = this.startH + offsetY > 1 ? this.startH + offsetY : 1;
        css = {
          width: "".concat(newW, "px")
        };
        if (type !== 'text') {
          if (type === 'image') {
            css.height = "".concat(newW * this.startH / this.startW, "px");
          } else {
            css.height = "".concat(newH, "px");
          }
        }
      } else {
        this.startX = x;
        this.startY = y;
        css = {
          left: "".concat(rect.x + offsetX, "px"),
          top: "".concat(rect.y + offsetY, "px"),
          right: undefined,
          bottom: undefined
        };
      }
      this.doAction({
        view: {
          css: css
        }
      }, null, !this.isScale);
    }
  }, {
    key: "initScreenK",
    value: function initScreenK() {
      if (!(getApp() && getApp().systemInfo && getApp().systemInfo.screenWidth)) {
        try {
          getApp().systemInfo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getSystemInfoSync();
        } catch (e) {
          console.error("Painter get system info failed, ".concat(JSON.stringify(e)));
          return;
        }
      }
      this.screenK = 0.5;
      if (getApp() && getApp().systemInfo && getApp().systemInfo.screenWidth) {
        this.screenK = getApp().systemInfo.screenWidth / 750;
      }
      setStringPrototype(this.screenK, this.props.scaleRatio);
    }
  }, {
    key: "initDancePalette",
    value: function initDancePalette() {
      var _this5 = this;
      if (this.props.use2D) {
        return;
      }
      this.isDisabled = true;
      this.initScreenK();
      this.downloadImages(this.props.dancePalette).then(/*#__PURE__*/function () {
        var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee(palette) {
          var width, height;
          return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this5.currentPalette = palette;
                width = palette.width, height = palette.height;
                if (!(!width || !height)) {
                  _context.next = 5;
                  break;
                }
                console.error("You should set width and height correctly for painter, width: ".concat(width, ", height: ").concat(height));
                return _context.abrupt("return");
              case 5:
                _this5.setState({
                  painterStyle: "width:".concat(width.toPx(), "px;height:").concat(height.toPx(), "px;")
                });
                _context.t0 = _this5.frontContext;
                if (_context.t0) {
                  _context.next = 11;
                  break;
                }
                _context.next = 10;
                return _this5.getCanvasContext(_this5.props.use2D, 'front');
              case 10:
                _this5.frontContext = _context.sent;
              case 11:
                _context.t1 = _this5.bottomContext;
                if (_context.t1) {
                  _context.next = 16;
                  break;
                }
                _context.next = 15;
                return _this5.getCanvasContext(_this5.props.use2D, 'bottom');
              case 15:
                _this5.bottomContext = _context.sent;
              case 16:
                _context.t2 = _this5.topContext;
                if (_context.t2) {
                  _context.next = 21;
                  break;
                }
                _context.next = 20;
                return _this5.getCanvasContext(_this5.props.use2D, 'top');
              case 20:
                _this5.topContext = _context.sent;
              case 21:
                _context.t3 = _this5.globalContext;
                if (_context.t3) {
                  _context.next = 26;
                  break;
                }
                _context.next = 25;
                return _this5.getCanvasContext(_this5.props.use2D, 'k-canvas');
              case 25:
                _this5.globalContext = _context.sent;
              case 26:
                new _libs_pen__WEBPACK_IMPORTED_MODULE_6__["default"](_this5.bottomContext, palette, _this5.props.use2D).paint(function () {
                  _this5.isDisabled = false;
                  _this5.isDisabled = _this5.outterDisabled;
                  _this5.triggerEvent('didShow');
                });
                _this5.globalContext.draw();
                _this5.frontContext.draw();
                _this5.topContext.draw();
              case 30:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      this.touchedView = {};
    }
  }, {
    key: "startPaint",
    value: function startPaint() {
      var _this6 = this;
      this.initScreenK();
      var _this$props$palette = this.props.palette,
        width = _this$props$palette.width,
        height = _this$props$palette.height;
      if (!width || !height) {
        console.error("You should set width and height correctly for painter, width: ".concat(width, ", height: ").concat(height));
        return;
      }
      var needScale = false;
      // 生成图片时，根据设置的像素值重新绘制
      if (width.toPx() !== this.canvasWidthInPx) {
        this.canvasWidthInPx = width.toPx();
        needScale = this.props.use2D;
      }
      if (this.props.widthPixels) {
        setStringPrototype(this.screenK, this.props.widthPixels / this.canvasWidthInPx);
        this.canvasWidthInPx = this.props.widthPixels;
      }
      if (this.canvasHeightInPx !== height.toPx()) {
        this.canvasHeightInPx = height.toPx();
        needScale = needScale || this.props.use2D;
      }
      this.setState({
        photoStyle: "width:".concat(this.canvasWidthInPx, "px;height:").concat(this.canvasHeightInPx, "px;")
      }, function () {
        _this6.downloadImages(_this6.props.palette).then(/*#__PURE__*/function () {
          var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_13__["default"])(/*#__PURE__*/(0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().mark(function _callee2(palette) {
            var scale;
            return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_14__["default"])().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (_this6.photoContext) {
                    _context2.next = 4;
                    break;
                  }
                  _context2.next = 3;
                  return _this6.getCanvasContext(_this6.props.use2D, 'photo');
                case 3:
                  _this6.photoContext = _context2.sent;
                case 4:
                  if (needScale) {
                    scale = getApp().systemInfo.pixelRatio;
                    _this6.photoContext.width = _this6.canvasWidthInPx * scale;
                    _this6.photoContext.height = _this6.canvasHeightInPx * scale;
                    _this6.photoContext.scale(scale, scale);
                  }
                  new _libs_pen__WEBPACK_IMPORTED_MODULE_6__["default"](_this6.photoContext, palette).paint(function () {
                    _this6.saveImgToLocal();
                  });
                  setStringPrototype(_this6.screenK, _this6.props.scaleRatio);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
    }
  }, {
    key: "downloadImages",
    value: function downloadImages(palette) {
      var _this7 = this;
      return new Promise(function (resolve, reject) {
        var preCount = 0;
        var completeCount = 0;
        var paletteCopy = JSON.parse(JSON.stringify(palette));
        if (paletteCopy.background) {
          preCount++;
          var downloader = new _libs_downloader__WEBPACK_IMPORTED_MODULE_12__["default"]();
          downloader.download(paletteCopy.background, _this7.props.LRU).then(function (path) {
            paletteCopy.background = path;
            completeCount++;
            if (preCount === completeCount) {
              resolve(paletteCopy);
            }
          }, function () {
            completeCount++;
            if (preCount === completeCount) {
              resolve(paletteCopy);
            }
          });
        }
        if (paletteCopy.views) {
          var _iterator3 = _createForOfIteratorHelper(paletteCopy.views),
            _step3;
          try {
            var _loop = function _loop() {
              var view = _step3.value;
              if (view && view.type === 'image' && view.url) {
                preCount++;
                var _downloader = new _libs_downloader__WEBPACK_IMPORTED_MODULE_12__["default"]();
                /* eslint-disable no-loop-func */
                _downloader.download(view.url, _this7.props.LRU).then(function (path) {
                  view.originUrl = view.url;
                  view.url = path;
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getImageInfo({
                    src: path,
                    success: function success(res) {
                      // 获得一下图片信息，供后续裁减使用
                      view.sWidth = res.width;
                      view.sHeight = res.height;
                    },
                    fail: function fail(error) {
                      // 如果图片坏了，则直接置空，防止坑爹的 canvas 画崩溃了
                      console.warn("getImageInfo ".concat(view.originUrl, " failed, ").concat(JSON.stringify(error)));
                      view.url = '';
                    },
                    complete: function complete() {
                      completeCount++;
                      if (preCount === completeCount) {
                        resolve(paletteCopy);
                      }
                    }
                  });
                }, function () {
                  completeCount++;
                  if (preCount === completeCount) {
                    resolve(paletteCopy);
                  }
                });
              }
            };
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
        if (preCount === 0) {
          resolve(paletteCopy);
        }
      });
    }
  }, {
    key: "saveImgToLocal",
    value: function saveImgToLocal() {
      var _this8 = this;
      var that = this;
      var optionsOf2d = {
        canvas: that.canvasNode
      };
      var optionsOfOld = {
        canvasId: 'photo',
        destWidth: that.canvasWidthInPx,
        destHeight: that.canvasHeightInPx
      };
      var timer = setTimeout(function () {
        clearTimeout(timer);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().canvasToTempFilePath(_objectSpread(_objectSpread({}, that.props.use2D ? optionsOf2d : optionsOfOld), {}, {
          success: function success(res) {
            that.getImageInfo(res.tempFilePath);
          },
          fail: function fail(error) {
            console.error("canvasToTempFilePath failed, ".concat(JSON.stringify(error)));
            that.triggerEvent('imgErr', {
              error: error
            });
          }
        }), _this8);
      }, 300);
    }
  }, {
    key: "getCanvasContext",
    value: function getCanvasContext(use2D, id) {
      var that = this;
      return new Promise(function (resolve) {
        if (use2D) {
          var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().createSelectorQuery();
          var selectId = "#".concat(id);
          query.select(selectId).fields({
            node: true,
            size: true
          }).exec(function (res) {
            that.canvasNode = res[0] && res[0].node;
            if (that.canvasNode) {
              var ctx = that.canvasNode.getContext('2d');
              var wxCanvas = new _libs_wx_canvas__WEBPACK_IMPORTED_MODULE_15__["default"]('2d', ctx, id, true, that.canvasNode);
              resolve(wxCanvas);
            }
          });
        } else {
          var temp = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().createCanvasContext(id, that);
          resolve(new _libs_wx_canvas__WEBPACK_IMPORTED_MODULE_15__["default"]('mina', temp, id, true));
        }
      });
    }
  }, {
    key: "getImageInfo",
    value: function getImageInfo(filePath) {
      var that = this;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getImageInfo({
        src: filePath,
        success: function success(infoRes) {
          if (that.paintCount > MAX_PAINT_COUNT) {
            var error = "The result is always fault, even we tried ".concat(MAX_PAINT_COUNT, " times");
            console.error(error);
            that.triggerEvent('imgErr', {
              error: error
            });
            return;
          }
          // 比例相符时才证明绘制成功，否则进行强制重绘制
          if (Math.abs((infoRes.width * that.canvasHeightInPx - that.canvasWidthInPx * infoRes.height) / (infoRes.height * that.canvasHeightInPx)) < 0.01) {
            that.triggerEvent('imgOK', {
              path: filePath
            });
          } else {
            that.startPaint();
          }
          that.paintCount++;
        },
        fail: function fail(error) {
          console.error("getImageInfo failed, ".concat(JSON.stringify(error)));
          that.triggerEvent('imgErr', {
            error: error
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;
      var _this$state = this.state,
        painterStyle = _this$state.painterStyle,
        photoStyle = _this$state.photoStyle;
      var _this$props2 = this.props,
        customStyle = _this$props2.customStyle,
        use2D = _this$props2.use2D;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
        style: "position: relative;".concat(customStyle, ";").concat(painterStyle)
      }, !use2D ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Canvas, {
        canvasId: "photo",
        style: "".concat(photoStyle, ";position: absolute; left: -9999px; top: -9999rpx;")
      }), dancePalette && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Canvas, {
        canvasId: "bottom",
        style: "".concat(painterStyle, " ;position: absolute;")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Canvas, {
        canvasId: "k-canvas",
        style: "".concat(painterStyle, " ;position: absolute;")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Canvas, {
        canvasId: "top",
        style: "".concat(painterStyle, " ;position: absolute;")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Canvas, {
        canvasId: "front",
        style: "".concat(painterStyle, " ;position: absolute;"),
        onTouchStart: function onTouchStart(e) {
          return _this9.onTouchStart(e);
        },
        onTouchMove: function onTouchMove(e) {
          return _this9.onTouchMove(e);
        },
        onTouchEnd: function onTouchEnd(e) {
          return _this9.onTouchEnd(e);
        },
        onTouchCancel: function onTouchCancel(e) {
          return _this9.onTouchCancel(e);
        },
        disableScroll: true
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Canvas, {
        type: "2d",
        id: "photo",
        style: photoStyle
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_3__.Component);
/* harmony default export */ __webpack_exports__["default"] = (WeAppPoster);
WeAppPoster.defaultProps = {
  use2D: false,
  customStyle: '',
  customActionStyle: {},
  palette: {},
  dancePalette: {},
  scaleRatio: 1,
  widthPixels: 0,
  dirty: false,
  LRU: false,
  action: {},
  disableAction: false,
  clearActionBox: false
};

/***/ }),

/***/ "./src/pages/result/result.tsx":
/*!*************************************!*\
  !*** ./src/pages/result/result.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_result_result_result_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/result/result!./result.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/result/result!./src/pages/result/result.tsx");


var config = {"navigationBarTitleText":"鉴定结果","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_result_result_result_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/result/result', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_result_result_result_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_result_result_result_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_result_result_result_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_result_result_result_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}
module.exports = _createForOfIteratorHelper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createForOfIteratorHelper; }
/* harmony export */ });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var _n = 0,
        F = function F() {};
      return {
        s: F,
        n: function n() {
          return _n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[_n++]
          };
        },
        e: function e(r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function s() {
      t = t.call(r);
    },
    n: function n() {
      var r = t.next();
      return a = r.done, r;
    },
    e: function e(r) {
      u = !0, o = r;
    },
    f: function f() {
      try {
        a || null == t["return"] || t["return"]();
      } finally {
        if (u) throw o;
      }
    }
  };
}


/***/ }),

/***/ "./src/pages/result/data/result-poster.json":
/*!**************************************************!*\
  !*** ./src/pages/result/data/result-poster.json ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"width":"750px","height":"1334px","background":"#F5F5F5","views":[{"id":"backgroundImage","type":"image","url":"https://m.hellobike.com/resource/gallery/92/Lw0SD8W5_taichi_image.png","css":{"width":"750px","height":"1334px","top":"0px","left":"0px","mode":"aspectFill"}},{"id":"contentCard","type":"image","url":"https://m.hellobike.com/resource/gallery/92/Lw0SD8W5_taichi_image.png","css":{"width":"670px","height":"1272px","top":"40px","left":"40px","mode":"aspectFill","borderRadius":"10px"}},{"id":"titleLine1","type":"rect","css":{"width":"47px","height":"2px","top":"120px","left":"300px","backgroundColor":"#FFFFFF"}},{"id":"titleText","type":"text","text":"在线鉴定证明","css":{"width":"200px","top":"100px","left":"275px","fontSize":"32px","color":"#595959","textAlign":"center","fontWeight":"400"}},{"id":"titleLine2","type":"rect","css":{"width":"47px","height":"2px","top":"120px","left":"403px","backgroundColor":"#FFFFFF"}},{"id":"resultStatus","type":"text","text":"符合正品特征","css":{"width":"400px","top":"180px","left":"175px","fontSize":"60px","color":"#020202","textAlign":"center","fontWeight":"700","lineHeight":"1.0"}},{"id":"resultTip","type":"text","text":"鉴别结果根据用户信息得出","css":{"width":"400px","top":"240px","left":"175px","fontSize":"28px","color":"#7B7B7B","textAlign":"center"}},{"id":"productImage","type":"image","url":"https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856","css":{"width":"278px","height":"342px","top":"300px","left":"236px","mode":"aspectFill","borderRadius":"10px"}},{"id":"verifyBadge","type":"image","url":"https://m.hellobike.com/resource/gallery/92/Z_vTBn4T_taichi_image.png","css":{"width":"132px","height":"132px","top":"510px","left":"450px","mode":"aspectFill"}},{"id":"appraiserAvatar","type":"image","url":"https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856","css":{"width":"60px","height":"60px","top":"700px","left":"100px","mode":"aspectFill","borderRadius":"30px"}},{"id":"appraiserBadge","type":"image","url":"https://m.hellobike.com/resource/gallery/92/21jUo7pP_taichi_image.png","css":{"width":"120px","height":"26px","top":"710px","left":"180px","mode":"aspectFill"}},{"id":"appraiserName","type":"text","text":"椰椰","css":{"width":"100px","top":"750px","left":"180px","fontSize":"26px","color":"#595959","fontWeight":"500"}},{"id":"description","type":"text","text":"小卡细节工艺符合正品特征，鉴别通过，纹路比例切角没问题","css":{"width":"600px","top":"800px","left":"75px","fontSize":"24px","color":"#595959","textAlign":"center","lineHeight":"1.5"}},{"id":"analysisTitle","type":"text","text":"鉴别部位分析","css":{"width":"200px","top":"880px","left":"100px","fontSize":"24px","color":"#000000","fontWeight":"500"}},{"id":"analysisCount","type":"text","text":"5项全通过","css":{"width":"200px","top":"880px","left":"450px","fontSize":"24px","color":"#000000","fontWeight":"500","textAlign":"right"}},{"id":"checkItem1","type":"text","text":"小卡正面","css":{"width":"200px","top":"920px","left":"100px","fontSize":"24px","color":"#595959","fontWeight":"300"}},{"id":"checkIcon1","type":"image","url":"https://m.hellobike.com/resource/gallery/92/BvUA7uS0_taichi_image.png","css":{"width":"20px","height":"20px","top":"920px","left":"600px","mode":"aspectFill"}},{"id":"checkItem2","type":"text","text":"小卡背面","css":{"width":"200px","top":"950px","left":"100px","fontSize":"24px","color":"#595959","fontWeight":"300"}},{"id":"checkIcon2","type":"image","url":"https://m.hellobike.com/resource/gallery/92/BvUA7uS0_taichi_image.png","css":{"width":"20px","height":"20px","top":"950px","left":"600px","mode":"aspectFill"}},{"id":"checkItem3","type":"text","text":"小卡正面纹路对光","css":{"width":"200px","top":"980px","left":"100px","fontSize":"24px","color":"#595959","fontWeight":"300"}},{"id":"checkIcon3","type":"image","url":"https://m.hellobike.com/resource/gallery/92/BvUA7uS0_taichi_image.png","css":{"width":"20px","height":"20px","top":"980px","left":"600px","mode":"aspectFill"}},{"id":"checkItem4","type":"text","text":"小卡背面文字logo","css":{"width":"200px","top":"1010px","left":"100px","fontSize":"24px","color":"#595959","fontWeight":"300"}},{"id":"checkIcon4","type":"image","url":"https://m.hellobike.com/resource/gallery/92/BvUA7uS0_taichi_image.png","css":{"width":"20px","height":"20px","top":"1010px","left":"600px","mode":"aspectFill"}},{"id":"checkItem5","type":"text","text":"小卡像素点","css":{"width":"200px","top":"1040px","left":"100px","fontSize":"24px","color":"#595959","fontWeight":"300"}},{"id":"checkIcon5","type":"image","url":"https://m.hellobike.com/resource/gallery/92/BvUA7uS0_taichi_image.png","css":{"width":"20px","height":"20px","top":"1040px","left":"600px","mode":"aspectFill"}},{"id":"idLabel","type":"text","text":"鉴别ID：","css":{"width":"100px","top":"1080px","left":"100px","fontSize":"22px","color":"#595959"}},{"id":"idValue","type":"text","text":"73r9273894377789","css":{"width":"200px","top":"1080px","left":"200px","fontSize":"20px","color":"#595959","fontWeight":"500"}},{"id":"timeLabel","type":"text","text":"鉴别时间：","css":{"width":"100px","top":"1110px","left":"100px","fontSize":"22px","color":"#595959"}},{"id":"timeValue","type":"text","text":"2025-10-05 13:30","css":{"width":"200px","top":"1110px","left":"200px","fontSize":"20px","color":"#595959","fontWeight":"500"}}]}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/result/result.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=result.js.map