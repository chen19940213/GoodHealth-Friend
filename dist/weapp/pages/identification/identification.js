"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/identification/identification"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/identification/identification!./src/pages/identification/identification.tsx":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/identification/identification!./src/pages/identification/identification.tsx ***!
  \****************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Identification; }
/* harmony export */ });
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./src/shims/hb-taro-fusion-components.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/index */ "./src/assets/index/index.ts");
/* harmony import */ var _models_photoModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/photoModel */ "./src/models/photoModel.ts");
/* harmony import */ var _constants_page_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants/page.const */ "./src/constants/page.const.ts");
/* harmony import */ var _services_apis_index_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services/apis/index.api */ "./src/services/apis/index.api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var _class;











var Identification = (0,mobx_react__WEBPACK_IMPORTED_MODULE_8__.observer)(_class = /*#__PURE__*/function (_Component) {
  function Identification() {
    var _this;
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_9__["default"])(this, Identification);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Identification, [].concat(args));
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "handleBack", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateBack();
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "handleSubmit", /*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_12__["default"])(/*#__PURE__*/(0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])().m(function _callee() {
      var allPhotos, totalSteps, photoPaths, step, photo, uploadPromises, uploadResults, imageUrls, response, errorMsg, _t;
      return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_13__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            // 获取所有照片
            allPhotos = _models_photoModel__WEBPACK_IMPORTED_MODULE_4__["default"].getAllPhotos();
            totalSteps = Object.keys(_constants_page_const__WEBPACK_IMPORTED_MODULE_5__.CAMERA_STEP_INFO).length; // 按步骤顺序收集照片路径
            photoPaths = [];
            for (step = 1; step <= totalSteps; step += 1) {
              photo = allPhotos[step];
              if (photo) {
                photoPaths.push(photo);
              }
            }

            // 如果没有照片，提示用户
            if (!(photoPaths.length === 0)) {
              _context.n = 1;
              break;
            }
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('请先拍摄照片');
            return _context.a(2);
          case 1:
            _context.p = 1;
            // 显示提交中提示
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showLoading({
              title: '正在上传照片...'
            });

            // 步骤1：上传所有照片到服务器，获取 URL 数组
            uploadPromises = photoPaths.map(function (photoPath) {
              return (0,_services_apis_index_api__WEBPACK_IMPORTED_MODULE_6__.requestUploadFileApi)({
                filePath: photoPath
              });
            });
            _context.n = 2;
            return Promise.all(uploadPromises);
          case 2:
            uploadResults = _context.v;
            // 提取所有上传成功的 URL
            imageUrls = [];
            uploadResults.forEach(function (result) {
              if (result.url) {
                imageUrls.push(result.url);
              }
            });

            // 检查是否所有照片都上传成功
            if (!(imageUrls.length !== photoPaths.length)) {
              _context.n = 3;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('部分照片上传失败，请重试');
            return _context.a(2);
          case 3:
            // 步骤2：调用创建鉴定接口
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().showLoading({
              title: '正在提交鉴定...'
            });
            _context.n = 4;
            return (0,_services_apis_index_api__WEBPACK_IMPORTED_MODULE_6__.requestCreateAppraisalApi)({
              card_image: imageUrls
            });
          case 4:
            response = _context.v;
            // 隐藏加载提示
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();

            // 提交成功，跳转到鉴定中页面
            if (response.code === 0) {
              _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast('提交成功');
              // 延迟跳转，让用户看到成功提示
              setTimeout(function () {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
                  url: '/pages/appraisal/appraisal'
                });
              }, 1000);
            } else {
              _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast(response.message || '提交失败，请重试');
            }
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            // 隐藏加载提示
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().hideLoading();
            errorMsg = _t instanceof Error ? _t.message : '提交失败，请重试';
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.showToast(errorMsg);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5]]);
    })));
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "handlePhotoClick", function (step) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
        url: "/pages/camera/camera?step=".concat(step)
      });
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "handleExampleImageClick", function (imageSrc) {
      var totalSteps = Object.keys(_constants_page_const__WEBPACK_IMPORTED_MODULE_5__.CAMERA_STEP_INFO).length;
      var imageUrls = Array.from({
        length: totalSteps
      }, function (_, index) {
        var step = index + 1;
        return _constants_page_const__WEBPACK_IMPORTED_MODULE_5__.CAMERA_STEP_INFO[step].image;
      });
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().previewImage({
        urls: imageUrls,
        current: imageSrc
      });
    });
    (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__["default"])(_this, "handleAgreementClick", function () {
      // 跳转到协议页面
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default().navigateTo({
        url: "/pages/webview/webview?url=".concat(encodeURIComponent('https://m.hellobike.com/mf/spa/u_rntimj/latest/MA2310164656593543907773012.html?activityCode=MA2310164656593543907773012'), "&title=\u661F\u5361\u9274\u5B9A\u5728\u7EBF\u9274\u522B\u534F\u8BAE")
      });
    });
    return _this;
  }
  (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_14__["default"])(Identification, _Component);
  return (0,C_Users_Desktop_GoodHealth_Friend_main_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_15__["default"])(Identification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.Native.hideHomeButton();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      // 页面显示时的逻辑
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      // 页面隐藏时的逻辑
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var totalSteps = Object.keys(_constants_page_const__WEBPACK_IMPORTED_MODULE_5__.CAMERA_STEP_INFO).length;

      // 检查所有必填步骤是否都已完成
      var isAllRequiredPhotosTaken = function isAllRequiredPhotosTaken() {
        return Object.keys(_constants_page_const__WEBPACK_IMPORTED_MODULE_5__.CAMERA_STEP_INFO).every(function (stepKey) {
          var step = parseInt(stepKey, 10);
          var stepInfo = _constants_page_const__WEBPACK_IMPORTED_MODULE_5__.CAMERA_STEP_INFO[step];
          // 检查该步骤是否有有效照片
          var photo = _models_photoModel__WEBPACK_IMPORTED_MODULE_4__["default"].getPhoto(step);
          var hasPhoto = photo && photo !== null && photo !== undefined && photo.trim() !== '';
          // 如果该步骤是必填的，则必须有照片；如果不是必填的，则不需要检查
          return stepInfo.required ? hasPhoto : true;
        });
      };
      var canSubmit = isAllRequiredPhotosTaken();
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.PageSkeleton, {
        className: "page-identification-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_1__.PageHeader, {
            title: "\u8BC6\u522B\u9274\u5B9A"
          })
        }, "header"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "instruction-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "instruction-title",
              children: "\u8BF7\u6309\u7167\u5982\u4E0B\u987A\u5E8F\u4F9D\u6B21\u62CD\u6444\u6E05\u6670\u5B8C\u6574\u7684\u9274\u5B9A\u70B9\u56FE\u7247"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "photo-upload-section",
              children: Array.from({
                length: totalSteps
              }, function (_, index) {
                var step = index + 1;
                var stepInfo = _constants_page_const__WEBPACK_IMPORTED_MODULE_5__.CAMERA_STEP_INFO[step];
                var photo = _models_photoModel__WEBPACK_IMPORTED_MODULE_4__["default"].getPhoto(step);
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                  className: "photo-item",
                  onClick: function onClick() {
                    return _this2.handlePhotoClick(step);
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                    className: "photo-frame",
                    children: photo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                      className: "photo-image",
                      src: photo,
                      mode: "aspectFill"
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                      className: "photo-placeholder",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                        className: "plus-icon"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                    className: "photo-label",
                    children: [stepInfo.required && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                      className: "required-mark",
                      children: "*"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                      className: "label-text",
                      children: stepInfo.label
                    })]
                  })]
                }, step);
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "agreement-text",
              children: ["\u63D0\u4EA4\u5373\u5DF2\u9605\u8BFB\u4E14\u540C\u610F", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Text, {
                className: "agreement-text-link",
                onClick: this.handleAgreementClick,
                children: "\u300A\u661F\u5361\u9274\u5B9A\u5728\u7EBF\u9274\u522B\u534F\u8BAE\u300B"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "example-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "example-title",
              children: "\u62CD\u6444\u8303\u4F8B"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "example-images",
              children: Array.from({
                length: totalSteps
              }, function (_, index) {
                var step = index + 1;
                var stepInfo = _constants_page_const__WEBPACK_IMPORTED_MODULE_5__.CAMERA_STEP_INFO[step];
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                  className: "example-item",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                    className: "example-image",
                    src: stepInfo.image,
                    mode: "aspectFill",
                    onClick: function onClick() {
                      return _this2.handleExampleImageClick(stepInfo.image);
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                    className: "example-label",
                    children: [stepInfo.required && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                      className: "required-mark",
                      children: "*"
                    }), stepInfo.label]
                  })]
                }, step);
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
            className: "submit-section",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
              className: "submit-button ".concat(canSubmit ? 'active' : 'disabled'),
              onClick: canSubmit ? this.handleSubmit : undefined,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                className: "submit-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_3__.scanIcon,
                  className: "icon-image"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_16__.View, {
                className: "submit-text",
                children: "\u63D0\u4EA4\u9274\u5B9A"
              })]
            })
          })]
        }, "scroll")]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/pages/identification/identification.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/identification/identification.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_identification_identification_identification_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/identification/identification!./identification.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/identification/identification!./src/pages/identification/identification.tsx");


var config = {"navigationBarTitleText":"识别鉴定","navigationStyle":"custom"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_identification_identification_identification_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/identification/identification', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_identification_identification_identification_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_identification_identification_identification_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_identification_identification_identification_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_identification_identification_identification_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/identification/identification.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=identification.js.map