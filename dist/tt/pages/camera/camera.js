"use strict";
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/camera/camera"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/camera/camera!./src/pages/camera/camera.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/camera/camera!./src/pages/camera/camera.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CameraPage; }
/* harmony export */ });
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/callSuper.js */ "./node_modules/@babel/runtime/helpers/esm/callSuper.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-tt/dist/components-react.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/apis/Native/Native.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageSkeleton/index.js");
/* harmony import */ var _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @hb/taro-fusion-components */ "./node_modules/@hb/taro-fusion-components/esm/components/PageHeader/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/index */ "./src/assets/index/index.ts");
/* harmony import */ var _models_photoModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/photoModel */ "./src/models/photoModel.ts");
/* harmony import */ var _constants_page_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/page.const */ "./src/constants/page.const.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var _class;
/* eslint-disable @typescript-eslint/no-explicit-any */










var CameraPage = (0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.observer)(_class = /*#__PURE__*/function (_Component) {
  function CameraPage() {
    var _this;
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this, CameraPage);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_callSuper_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this, CameraPage, [].concat(args));
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "cameraContext", null);
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "state", {
      currentStep: 1,
      // 当前拍摄步骤 1-4
      isCameraReady: false,
      // 相机是否准备就绪
      flashMode: 'off',
      // 闪光灯模式：off, on, auto
      showShutter: false,
      // 是否显示快门效果
      showFlash: false // 是否显示手电筒闪烁效果
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "initCamera", function () {
      try {
        // 创建相机上下文
        _this.cameraContext = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().createCameraContext();
      } catch (_unused) {
        // 创建相机上下文失败
      }

      // 延迟设置相机就绪状态，给相机一些初始化时间
      setTimeout(function () {
        _this.setState({
          isCameraReady: true
        });
      }, 500);
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "onCameraReady", function () {
      _this.setState({
        isCameraReady: true
      });
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "onCameraError", function () {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast('相机启动失败，请重试');
      // 即使出错也尝试设置为就绪状态，让用户可以使用其他功能
      setTimeout(function () {
        _this.setState({
          isCameraReady: true
        });
      }, 2000);
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleBack", function () {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleTakePhoto", function () {
      // 使用当前页面的相机组件拍摄

      if (!_this.cameraContext) {
        _this.initCamera();
        // 给相机一些时间初始化
        setTimeout(function () {
          _this.takePhotoWithCamera();
        }, 500);
        return;
      }

      // 直接使用相机组件拍摄
      _this.takePhotoWithCamera();
    });
    // 使用相机组件拍摄
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "takePhotoWithCamera", function () {
      var currentStep = _this.state.currentStep;

      // 开始拍摄流程

      if (!_this.cameraContext) {
        // 直接使用备用方案
        _this.takePhotoWithChooseMedia();
        return;
      }

      // 显示拍摄快门效果
      _this.showShutterEffect();

      // 设置超时检测
      var timeoutId = setTimeout(function () {
        _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast('正在使用备用拍摄方式...');
        _this.takePhotoWithChooseMedia();
      }, 3000);
      _this.cameraContext.takePhoto({
        quality: 'high',
        success: function success(res) {
          clearTimeout(timeoutId);
          // 拍摄成功
          var imagePath = res.tempImagePath || res.tempFilePath;
          // 获取图片路径

          if (!imagePath) {
            // 未获取到图片路径
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast('拍摄失败，请重试');
            return;
          }

          // 短暂延迟，让用户看到快门效果
          setTimeout(function () {
            _this.handlePhotoSuccess(imagePath, currentStep);
          }, 200);
        },
        fail: function fail() {
          clearTimeout(timeoutId);
          // 拍摄失败
          // 切换到备用拍摄方案
          // 使用备用方案
          _this.takePhotoWithChooseMedia();
        }
      });
    });
    // 显示拍摄快门效果
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "showShutterEffect", function () {
      // 使用 state 来控制快门效果的显示
      _this.setState({
        showShutter: true
      });

      // 300ms 后隐藏快门效果
      setTimeout(function () {
        _this.setState({
          showShutter: false
        });
      }, 300);
    });
    // 备用拍摄方案（使用系统拍摄接口）
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "takePhotoWithChooseMedia", function () {
      var currentStep = _this.state.currentStep;

      // 使用备用拍摄方案

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['camera'],
        camera: 'back',
        maxDuration: 60,
        sizeType: ['compressed'],
        success: function success(res) {
          // 备用拍摄成功

          if (!res.tempFiles || res.tempFiles.length === 0) {
            // 未获取到图片文件
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast('拍摄失败，请重试');
            return;
          }
          var tempFilePath = res.tempFiles[0].tempFilePath;
          // 获取图片路径

          if (!tempFilePath) {
            // 图片路径为空
            _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast('拍摄失败，请重试');
            return;
          }
          _this.handlePhotoSuccess(tempFilePath, currentStep);
        },
        fail: function fail(err) {
          // 备用拍摄失败

          // 如果是用户取消，不显示错误提示
          if (err.errMsg && err.errMsg.includes('cancel')) {
            // 用户取消拍摄
            return;
          }
          _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast('拍摄失败，请重试');
        }
      });
    });
    // 处理拍摄成功的通用逻辑
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handlePhotoSuccess", function (imagePath, step) {
      // 使用photoModel保存照片
      _models_photoModel__WEBPACK_IMPORTED_MODULE_3__["default"].setPhoto(step, imagePath);

      // Native.showToast(`第${step}张照片拍摄成功`);

      // 自动切换到下一张
      // setTimeout(() => {
      _this.handleNextStep();
      // }, 1000); // 1秒后自动切换
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleToggleLight", function () {
      // 切换手电筒
      var flashMode = _this.state.flashMode;
      var newFlashMode = flashMode === 'off' ? 'on' : 'off';
      _this.setState({
        flashMode: newFlashMode
      });

      // 调用系统手电筒
      _this.setTorch(newFlashMode);
      var torchText = {
        off: '关闭',
        on: '开启'
      };
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast("\u624B\u7535\u7B52".concat(torchText[newFlashMode]));

      // 如果开启手电筒，添加短暂的闪烁效果提示
      if (newFlashMode === 'on') {
        _this.showFlashEffect();
      }
    });
    // 显示手电筒闪烁效果
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "showFlashEffect", function () {
      // 使用 state 来控制闪烁效果的显示
      _this.setState({
        showFlash: true
      });

      // 300ms 后隐藏闪烁效果
      setTimeout(function () {
        _this.setState({
          showFlash: false
        });
      }, 300);
    });
    // 设置系统手电筒
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "setTorch", function (mode) {
      try {
        // 使用 Taro 的手电筒控制
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setTorch({
          torch: mode === 'on',
          success: function success() {
            // 手电筒设置成功
          },
          fail: function fail() {
            // 如果系统手电筒设置失败，尝试使用相机上下文
            _this.setCameraTorch(mode);
          }
        });
      } catch (_unused2) {
        // 降级到相机上下文控制
        _this.setCameraTorch(mode);
      }
    });
    // 使用相机上下文设置手电筒（备用方案）
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "setCameraTorch", function (mode) {
      if (_this.cameraContext) {
        try {
          // 注意：CameraContext 可能没有 setTorch 方法
          _this.cameraContext.setTorch({
            torch: mode === 'on',
            success: function success() {
              // 相机手电筒设置成功
            },
            fail: function fail() {
              // 相机手电筒设置失败
            }
          });
        } catch (_unused3) {
          // 相机手电筒设置异常
        }
      }
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleSelectFromAlbum", function () {
      // 从相册选择
      var currentStep = _this.state.currentStep;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseMedia({
        count: 1,
        mediaType: ['image'],
        sourceType: ['album'],
        success: function success(res) {
          // 选择照片成功
          var tempFilePath = res.tempFiles[0].tempFilePath;

          // 使用photoModel保存选择的照片
          _models_photoModel__WEBPACK_IMPORTED_MODULE_3__["default"].setPhoto(currentStep, tempFilePath);
          _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast("\u7B2C".concat(currentStep, "\u5F20\u7167\u7247\u9009\u62E9\u6210\u529F"));
        },
        fail: function fail() {
          // 选择照片失败
          _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].showToast('选择照片失败，请重试');
        }
      });
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleRetake", function () {
      // 重新拍摄当前步骤
      var currentStep = _this.state.currentStep;

      // 清除当前步骤的照片
      _models_photoModel__WEBPACK_IMPORTED_MODULE_3__["default"].clearPhoto(currentStep);
      // 重新拍摄
      // this.handleTakePhoto();
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handlePreviousStep", function () {
      var currentStep = _this.state.currentStep;
      if (currentStep > 1) {
        _this.setState({
          currentStep: currentStep - 1
        });
      }
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleNextStep", function () {
      var currentStep = _this.state.currentStep;
      var totalSteps = Object.keys(_constants_page_const__WEBPACK_IMPORTED_MODULE_4__.CAMERA_STEP_INFO).length;
      if (currentStep < totalSteps) {
        _this.setState({
          currentStep: currentStep + 1
        });
      }
      // 如果是最后一步，不自动返回，让用户手动点击"完成"按钮
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleComplete", function () {
      // 所有照片拍摄完成，返回上一页
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "handleStepImageClick", function () {
      var stepInfo = _this.getCurrentStepInfo();
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().previewImage({
        urls: [stepInfo.image],
        current: stepInfo.image
      });
    });
    (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_9__["default"])(_this, "getCurrentStepInfo", function () {
      return _constants_page_const__WEBPACK_IMPORTED_MODULE_4__.CAMERA_STEP_INFO[_this.state.currentStep];
    });
    return _this;
  }
  (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_11__["default"])(CameraPage, _Component);
  return (0,_Users_chenwenying_Desktop_sparkLab_AppStarCardWXSS_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_12__["default"])(CameraPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].hideHomeButton();
      // 获取页面参数
      var _Native$getUrlParams = _hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_10__["default"].getUrlParams(),
        step = _Native$getUrlParams.step;
      if (step) {
        this.setState({
          currentStep: parseInt(step, 10)
        });
      }

      // 初始化相机
      this.initCamera();
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 清理相机上下文
      if (this.cameraContext) {
        this.cameraContext = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        currentStep = _this$state.currentStep,
        flashMode = _this$state.flashMode,
        showShutter = _this$state.showShutter,
        showFlash = _this$state.showFlash;
      var stepInfo = this.getCurrentStepInfo();
      var currentPhoto = _models_photoModel__WEBPACK_IMPORTED_MODULE_3__["default"].getPhoto(currentStep);
      var totalSteps = Object.keys(_constants_page_const__WEBPACK_IMPORTED_MODULE_4__.CAMERA_STEP_INFO).length;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_13__.PageSkeleton, {
        className: "page-camera-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_hb_taro_fusion_components__WEBPACK_IMPORTED_MODULE_14__.PageHeader, {
            title: "\u62CD\u7167\u9274\u522B",
            backIconColor: "white",
            bgColor: "#020202",
            titleColor: "#fff"
          })
        }, "header"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "progress-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "step-indicator",
              children: [currentStep, "/", totalSteps]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "progress-bar",
              children: Array.from({
                length: totalSteps
              }, function (_, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "progress-item ".concat(currentStep >= index + 1 ? 'active' : '')
                }, index + 1);
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "camera-preview",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Camera, {
              className: "camera-component",
              devicePosition: "back",
              flash: flashMode,
              onReady: this.onCameraReady,
              onError: this.onCameraError
            }), showShutter && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "shutter-overlay"
            }), showFlash && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "flash-overlay"
            }), currentPhoto && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "photo-overlay",
              onClick: function onClick() {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().previewImage({
                  urls: [currentPhoto],
                  current: currentPhoto
                });
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                className: "overlay-image",
                src: currentPhoto,
                mode: "aspectFit"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "capture-frame",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "frame-corners",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "corner top-left"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "corner top-right"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "corner bottom-left"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "corner bottom-right"
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "instruction-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "step-image",
              onClick: this.handleStepImageClick,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                src: stepInfo.image,
                className: "step-image-img"
              }), stepInfo.required && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "required-badge",
                children: "\u5FC5\u62CD"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "step-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "step-title",
                children: stepInfo.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "step-description",
                children: stepInfo.description
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
            className: "bottom-controls",
            children: currentPhoto ?
            /*#__PURE__*/
            // 已拍照状态：显示上一张、重拍、下一张
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "control-buttons",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "control-button photo-control",
                onClick: this.handlePreviousStep,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "control-text",
                  children: "\u4E0A\u4E00\u5F20"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "control-button photo-control",
                onClick: this.handleRetake,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "control-text",
                  children: "\u91CD\u62CD"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "control-button photo-control",
                onClick: currentStep === totalSteps ? this.handleComplete : this.handleNextStep,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "control-text",
                  children: currentStep === totalSteps ? '完成' : '下一张'
                })
              })]
            }) :
            /*#__PURE__*/
            // 未拍照状态：显示手电筒、拍摄、相册
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
              className: "control-buttons",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "control-button ".concat(flashMode === 'on' ? 'torch-active' : ''),
                onClick: this.handleToggleLight,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_2__.torchIcon,
                  className: "torch-icon"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "control-text",
                  children: flashMode === 'off' ? '手电筒' : '开启'
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "capture-button",
                onClick: this.handleTakePhoto,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "capture-icon"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                className: "control-button",
                onClick: this.handleSelectFromAlbum,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.Image, {
                  src: _assets_index__WEBPACK_IMPORTED_MODULE_2__.albumIcon,
                  className: "album-icon"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_15__.View, {
                  className: "control-text",
                  children: "\u76F8\u518C"
                })]
              })]
            })
          })]
        }, "scroll")]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component)) || _class;


/***/ }),

/***/ "./src/pages/camera/camera.tsx":
/*!*************************************!*\
  !*** ./src/pages/camera/camera.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_camera_camera_camera_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/camera/camera!./camera.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/camera/camera!./src/pages/camera/camera.tsx");


var config = {"navigationBarTitleText":"拍照鉴别","navigationStyle":"custom","navigationBarTextStyle":"white","backgroundColor":"#000000"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_camera_camera_camera_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/camera/camera', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_camera_camera_camera_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_camera_camera_camera_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_camera_camera_camera_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_camera_camera_camera_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/camera/camera.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=camera.js.map