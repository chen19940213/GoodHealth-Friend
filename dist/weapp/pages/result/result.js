"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/result/result"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/result/result!./src/pages/result/result.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/result/result!./src/pages/result/result.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Result; }
/* harmony export */ });
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./src/shims/hb-taro-fusion-components.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_result_poster_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/result-poster.json */ "./src/pages/result/data/result-poster.json");
/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/index */ "./src/assets/index/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var _class;









var Result = (0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Result() {
    var _this;
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Result);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Result, [].concat(args));
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "state", {
      posterUrl: '',
      generating: false
    });
    // 返回上一页
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleBack", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateBack();
    });
    // 分享功能
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleShare", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showActionSheet({
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
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleLongPress", function () {
      _this.handleSaveImage();
    });
    // 生成并保存图片
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleSaveImage", function () {
      try {
        _this.setState({
          generating: true
        });
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showLoading({
          title: '正在生成证书...'
        });

        // 使用 Poster 组件生成图片
        // posterUrl 会在 onReady 回调中设置
      } catch (_unused) {
        _this.handleGenerateError();
      }
    });
    // 处理生成错误
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleGenerateError", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
        title: '生成失败，请重试',
        icon: 'none'
      });
      _this.setState({
        generating: false
      });
    });
    // Poster 生成完成回调
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handlePosterReady", function (path) {
      _this.setState({
        posterUrl: path,
        generating: false
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();

      // 先预览图片
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().previewImage({
        urls: [path],
        current: path
      });

      // 询问是否保存
      setTimeout(function () {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
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
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "saveToAlbum", function (filePath) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().saveImageToPhotosAlbum({
        filePath: filePath,
        success: function success() {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
            title: '已保存到相册',
            icon: 'success'
          });
        },
        fail: function fail(err) {
          // 处理权限问题
          if (err.errMsg.includes('auth')) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showModal({
              title: '需要授权',
              content: '需要您授权保存图片到相册',
              success: function success(res) {
                if (res.confirm) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().openSetting();
                }
              }
            });
          } else {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
              title: '保存失败',
              icon: 'none'
            });
          }
        }
      });
    });
    // 分享给好友
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleShareToFriend", function () {
      if (_this.state.posterUrl) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showShareImageMenu({
          path: _this.state.posterUrl
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showToast({
          title: '请先生成证书',
          icon: 'none'
        });
      }
    });
    return _this;
  }
  (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_10__["default"])(Result, _Component);
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__["default"])(Result, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.hideHomeButton();
    }
  }, {
    key: "render",
    value: function render() {
      var generating = this.state.generating;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.PageSkeleton, {
        className: "page-result-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.PageHeader, {
            className: "custom-page-header",
            title: "\u9274\u522B\u7ED3\u679C",
            backIconColor: "white",
            bgColor: "#020202",
            titleColor: "#fff"
          })
        }, "header"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            className: "content-card",
            onLongPress: this.handleLongPress,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "title-section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "title-header",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "title-text",
                  children: "\u5728\u7EBF\u9274\u5B9A\u8BC1\u660E"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "line"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "result-status",
                children: "\u7B26\u5408\u6B63\u54C1\u7279\u5F81"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "result-tip",
                children: "\u9274\u522B\u7ED3\u679C\u6839\u636E\u7528\u6237\u4FE1\u606F\u5F97\u51FA"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "img-section",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "product-image-container",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                  src: "https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856",
                  className: "product-image",
                  mode: "aspectFill"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.appraisalPassed,
                  className: "verify-badge"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "appraiser-info",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                className: "appraiser-avatar",
                src: "https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856",
                mode: "aspectFill"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "appraiser-badge",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                    src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.identifyText_icon,
                    className: "verified-icon"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                    className: "badge-text",
                    children: "\u661F\u5361\u9274\u5B9A\u5E08"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "appraiser-name",
                  children: "\u6930\u6930"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "description",
              children: "\u201C\u5C0F\u5361\u7EC6\u8282\u5DE5\u827A\u7B26\u5408\u6B63\u54C1\u7279\u5F81\uFF0C\u9274\u522B\u901A\u8FC7\uFF0C\u7EB9\u8DEF\u6BD4\u4F8B\u5207\u89D2\u6CA1\u95EE\u9898\u201D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "analysis-header",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                className: "analysis-title",
                children: "\u9274\u522B\u90E8\u4F4D\u5206\u6790"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "header-right",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "analysis-count",
                  children: "5\u9879\u5168\u901A\u8FC7"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.checkSuccess,
                  className: "check-success-icon"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "check-list",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u6B63\u9762"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.checkSuccess,
                  className: "check-success-icon"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u80CC\u9762"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.checkSuccess,
                  className: "check-success-icon"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u6B63\u9762\u7EB9\u8DEF\u5BF9\u5149"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.checkSuccess,
                  className: "check-success-icon"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u80CC\u9762\u6587\u5B57logo"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.checkSuccess,
                  className: "check-success-icon"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "check-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "check-label",
                  children: "\u5C0F\u5361\u50CF\u7D20\u70B9"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                  className: "divider-line"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_4__.checkSuccess,
                  className: "check-success-icon"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
              className: "info-section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "info-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "info-label",
                  children: "\u9274\u522BID\uFF1A"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "info-value",
                  children: "73r9273894377789"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
                className: "info-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "info-label",
                  children: "\u9274\u522B\u65F6\u95F4\uFF1A"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "info-value",
                  children: "2025-10-05"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
                  className: "info-value",
                  children: "13:30"
                })]
              })]
            })]
          }), generating && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.View, {
            style: {
              position: 'fixed',
              left: '-9999px',
              top: '-9999px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Poster, {
              palette: _data_result_poster_json__WEBPACK_IMPORTED_MODULE_3__.data,
              onReady: this.handlePosterReady
            })
          })]
        }, "scroll"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_12__.Text, {
            className: "footer-tip",
            children: "\u5728\u7EBF\u9274\u5B9A\u7ED3\u679C\u4EC5\u4F9B\u53C2\u8003\uFF0C\u5177\u4F53\u60C5\u51B5\u4EE5\u5B9E\u7269\u4E3A\u51C6"
          })
        }, 'footer'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.SafeAreaView, {
          safeAreaInsetBottom: true
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/pages/result/result.tsx":
/*!*************************************!*\
  !*** ./src/pages/result/result.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

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

/***/ "./src/pages/result/data/result-poster.json":
/*!**************************************************!*\
  !*** ./src/pages/result/data/result-poster.json ***!
  \**************************************************/
/***/ (function(module) {

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