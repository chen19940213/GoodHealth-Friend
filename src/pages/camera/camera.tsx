/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { View, Image, Camera } from '@tarojs/components';
import {
  PageSkeleton,
  Native,
  PageHeader,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import './camera.scss';
import {
  albumIcon,
  torchIcon,
} from '@/assets/index';
import photoModel from '@/models/photoModel';
import { CAMERA_STEP_INFO } from '@/constants/page.const';

@observer
export default class CameraPage extends Component {
  cameraContext: Taro.CameraContext | null = null;

  state = {
    currentStep: 1, // 当前拍摄步骤 1-4
    isCameraReady: false, // 相机是否准备就绪
    flashMode: 'off', // 闪光灯模式：off, on, auto
    showShutter: false, // 是否显示快门效果
    showFlash: false, // 是否显示手电筒闪烁效果
  };

  componentDidMount() {
    Native.hideHomeButton();
    // 获取页面参数
    const { step } = Native.getUrlParams();
    if (step) {
      this.setState({
        currentStep: parseInt(step as string, 10),
      });
    }

    // 初始化相机
    this.initCamera();
  }

  initCamera = () => {
    try {
      // 创建相机上下文
      this.cameraContext = Taro.createCameraContext();
    } catch {
      // 创建相机上下文失败
    }

    // 延迟设置相机就绪状态，给相机一些初始化时间
    setTimeout(() => {
      this.setState({ isCameraReady: true });
    }, 500);
  };

  onCameraReady = () => {
    this.setState({ isCameraReady: true });
  };

  onCameraError = () => {
    Native.showToast('相机启动失败，请重试');
    // 即使出错也尝试设置为就绪状态，让用户可以使用其他功能
    setTimeout(() => {
      this.setState({ isCameraReady: true });
    }, 2000);
  };

  componentDidShow() {
    // 页面显示时的逻辑
  }

  componentDidHide() {
    // 页面隐藏时的逻辑
  }

  componentWillUnmount() {
    // 清理相机上下文
    if (this.cameraContext) {
      this.cameraContext = null;
    }
  }

  handleBack = () => {
    Taro.navigateBack();
  };

  handleTakePhoto = () => {
    // 使用当前页面的相机组件拍摄

    if (!this.cameraContext) {
      this.initCamera();
      // 给相机一些时间初始化
      setTimeout(() => {
        this.takePhotoWithCamera();
      }, 500);
      return;
    }

    // 直接使用相机组件拍摄
    this.takePhotoWithCamera();
  };

  // 使用相机组件拍摄
  takePhotoWithCamera = () => {
    const { currentStep } = this.state;

    // 开始拍摄流程

    if (!this.cameraContext) {
      // 直接使用备用方案
      this.takePhotoWithChooseMedia();
      return;
    }

    // 显示拍摄快门效果
    this.showShutterEffect();

    // 设置超时检测
    const timeoutId = setTimeout(() => {
      Native.showToast('正在使用备用拍摄方式...');
      this.takePhotoWithChooseMedia();
    }, 3000);

    this.cameraContext.takePhoto({
      quality: 'high',
      success: (res: any) => {
        clearTimeout(timeoutId);
        // 拍摄成功
        const imagePath = res.tempImagePath || res.tempFilePath;
        // 获取图片路径

        if (!imagePath) {
          // 未获取到图片路径
          Native.showToast('拍摄失败，请重试');
          return;
        }

        // 短暂延迟，让用户看到快门效果
        setTimeout(() => {
          this.handlePhotoSuccess(imagePath, currentStep);
        }, 200);
      },
      fail: () => {
        clearTimeout(timeoutId);
        // 拍摄失败
        // 切换到备用拍摄方案
        // 使用备用方案
        this.takePhotoWithChooseMedia();
      },
    });
  };

  // 显示拍摄快门效果
  showShutterEffect = () => {
    // 使用 state 来控制快门效果的显示
    this.setState({ showShutter: true });

    // 300ms 后隐藏快门效果
    setTimeout(() => {
      this.setState({ showShutter: false });
    }, 300);
  };

  // 备用拍摄方案（使用系统拍摄接口）
  takePhotoWithChooseMedia = () => {
    const { currentStep } = this.state;

    // 使用备用拍摄方案

    Taro.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera'],
      camera: 'back',
      maxDuration: 60,
      sizeType: ['compressed'],
      success: (res: { tempFiles: { tempFilePath: string }[] }) => {
        // 备用拍摄成功

        if (!res.tempFiles || res.tempFiles.length === 0) {
          // 未获取到图片文件
          Native.showToast('拍摄失败，请重试');
          return;
        }

        const { tempFilePath } = res.tempFiles[0];
        // 获取图片路径

        if (!tempFilePath) {
          // 图片路径为空
          Native.showToast('拍摄失败，请重试');
          return;
        }

        this.handlePhotoSuccess(tempFilePath, currentStep);
      },
      fail: (err: { errMsg?: string }) => {
        // 备用拍摄失败

        // 如果是用户取消，不显示错误提示
        if (err.errMsg && err.errMsg.includes('cancel')) {
          // 用户取消拍摄
          return;
        }

        Native.showToast('拍摄失败，请重试');
      },
    });
  };

  // 处理拍摄成功的通用逻辑
  handlePhotoSuccess = (imagePath: string, step: number) => {
    // 使用photoModel保存照片（只保存本地路径，不上传）
    photoModel.setPhoto(step, imagePath);

    // 自动切换到下一张
    this.handleNextStep();
  };

  handleToggleLight = () => {
    // 切换手电筒
    const { flashMode } = this.state;
    const newFlashMode = flashMode === 'off' ? 'on' : 'off';

    this.setState({ flashMode: newFlashMode });

    // 调用系统手电筒
    this.setTorch(newFlashMode);

    const torchText = {
      off: '关闭',
      on: '开启',
    };

    Native.showToast(`手电筒${torchText[newFlashMode]}`);

    // 如果开启手电筒，添加短暂的闪烁效果提示
    if (newFlashMode === 'on') {
      this.showFlashEffect();
    }
  };

  // 显示手电筒闪烁效果
  showFlashEffect = () => {
    // 使用 state 来控制闪烁效果的显示
    this.setState({ showFlash: true });

    // 300ms 后隐藏闪烁效果
    setTimeout(() => {
      this.setState({ showFlash: false });
    }, 300);
  };

  // 设置系统手电筒
  setTorch = (mode: string) => {
    try {
      // 使用 Taro 的手电筒控制
      (Taro as any).setTorch({
        torch: mode === 'on',
        success: () => {
          // 手电筒设置成功
        },
        fail: () => {
          // 如果系统手电筒设置失败，尝试使用相机上下文
          this.setCameraTorch(mode);
        },
      });
    } catch {
      // 降级到相机上下文控制
      this.setCameraTorch(mode);
    }
  };

  // 使用相机上下文设置手电筒（备用方案）
  setCameraTorch = (mode: string) => {
    if (this.cameraContext) {
      try {
        // 注意：CameraContext 可能没有 setTorch 方法
        (this.cameraContext as any).setTorch({
          torch: mode === 'on',
          success: () => {
            // 相机手电筒设置成功
          },
          fail: () => {
            // 相机手电筒设置失败
          },
        });
      } catch {
        // 相机手电筒设置异常
      }
    }
  };

  handleSelectFromAlbum = () => {
    // 从相册选择
    const { currentStep } = this.state;

    Taro.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album'],
      success: (res: { tempFiles: { tempFilePath: string }[] }) => {
        // 选择照片成功
        const { tempFilePath } = res.tempFiles[0];

        // 使用photoModel保存选择的照片（只保存本地路径，不上传）
        photoModel.setPhoto(currentStep, tempFilePath);
      },
      fail: () => {
        // 选择照片失败
        Native.showToast('选择照片失败，请重试');
      },
    });
  };

  handleRetake = () => {
    // 重新拍摄当前步骤
    const { currentStep } = this.state;

    // 清除当前步骤的照片
    photoModel.clearPhoto(currentStep);
    // 重新拍摄
    // this.handleTakePhoto();
  };

  handlePreviousStep = () => {
    const { currentStep } = this.state;
    if (currentStep > 1) {
      this.setState({
        currentStep: currentStep - 1,
      });
    }
  };

  handleNextStep = () => {
    const { currentStep } = this.state;
    const totalSteps = Object.keys(CAMERA_STEP_INFO).length;
    if (currentStep < totalSteps) {
      this.setState({
        currentStep: currentStep + 1,
      });
    }
    // 如果是最后一步，不自动返回，让用户手动点击"完成"按钮
  };

  handleComplete = () => {
    // 所有照片拍摄完成，返回上一页
    Taro.navigateBack();
  };

  handleStepImageClick = () => {
    const stepInfo = this.getCurrentStepInfo();
    Taro.previewImage({
      urls: [stepInfo.image],
      current: stepInfo.image,
    });
  };

  getCurrentStepInfo = () => CAMERA_STEP_INFO[this.state.currentStep];

  render() {
    const {
      currentStep, flashMode, showShutter, showFlash,
    } = this.state;
    const stepInfo = this.getCurrentStepInfo();
    const currentPhoto = photoModel.getPhoto(currentStep);
    const totalSteps = Object.keys(CAMERA_STEP_INFO).length;

    return (
      <PageSkeleton className='page-camera-view'>
        <Fragment key="header">
        <PageHeader title="拍照鉴别" backIconColor='white' bgColor='#020202' titleColor='#fff'></PageHeader>
        </Fragment>
        <Fragment key="scroll">
           {/* 进度条 */}
           <View className='progress-section'>
            <View className='step-indicator'>{currentStep}/{totalSteps}</View>
            <View className='progress-bar'>
              {Array.from({ length: totalSteps }, (_, index) => (
                <View
                  key={index + 1}
                  className={`progress-item ${currentStep >= index + 1 ? 'active' : ''}`}
                ></View>
              ))}
            </View>
          </View>
          {/* 相机预览区域 */}
          <View className='camera-preview'>
            {/* 实时相机预览 */}
            <Camera
              className='camera-component'
              devicePosition='back'
              flash={flashMode as 'off' | 'on' | 'auto'}
              onReady={this.onCameraReady}
              onError={this.onCameraError}
            />

            {/* 快门效果 */}
            {showShutter && (
              <View className='shutter-overlay'></View>
            )}

            {/* 手电筒闪烁效果 */}
            {showFlash && (
              <View className='flash-overlay'></View>
            )}

            {/* 已拍摄照片预览覆盖层 */}
            {currentPhoto && (
              <View
                className='photo-overlay'
                onClick={() => {
                  Taro.previewImage({
                    urls: [currentPhoto],
                    current: currentPhoto,
                  });
                }}
              >
                <Image
                  className='overlay-image'
                  src={currentPhoto}
                  mode='aspectFit'
                />
                {/* <View className='overlay-mask'>
                  <View className='overlay-text'>已拍摄第{currentStep}张照片</View>
                </View> */}
              </View>
            )}

            {/* 拍摄框 */}
            <View className='capture-frame'>
              <View className='frame-corners'>
                <View className='corner top-left'></View>
                <View className='corner top-right'></View>
                <View className='corner bottom-left'></View>
                <View className='corner bottom-right'></View>
              </View>
            </View>
          </View>

          {/* 拍摄说明区域 */}
          <View className='instruction-section'>
            <View className='step-image' onClick={this.handleStepImageClick}>
              <Image src={stepInfo.image} className='step-image-img'></Image>
              {stepInfo.required && (
                <View className='required-badge'>必拍</View>
              )}
            </View>
            <View className='step-content'>
              <View className='step-title'>{stepInfo.title}</View>
              <View className='step-description'>{stepInfo.description}</View>
            </View>
          </View>

          {/* 底部控制区域 */}
          <View className='bottom-controls'>
            {currentPhoto ? (
              // 已拍照状态：显示上一张、重拍、下一张
              <View className='control-buttons'>
                <View className='control-button photo-control' onClick={this.handlePreviousStep}>
                  <View className='control-text'>上一张</View>
                </View>

                <View className='control-button photo-control' onClick={this.handleRetake}>
                  <View className='control-text'>重拍</View>
                </View>

                <View className='control-button photo-control' onClick={currentStep === totalSteps ? this.handleComplete : this.handleNextStep}>
                  <View className='control-text'>{currentStep === totalSteps ? '完成' : '下一张'}</View>
                </View>
              </View>
            ) : (
              // 未拍照状态：显示手电筒、拍摄、相册
              <View className='control-buttons'>
                <View className={`control-button ${flashMode === 'on' ? 'torch-active' : ''}`} onClick={this.handleToggleLight}>
                  <Image src={torchIcon} className='torch-icon'></Image>
                  <View className='control-text'>
                    {flashMode === 'off' ? '手电筒' : '开启'}
                  </View>
                </View>

                <View className='capture-button' onClick={this.handleTakePhoto}>
                  <View className='capture-icon'></View>
                </View>

                <View className='control-button' onClick={this.handleSelectFromAlbum}>
                  <Image src={albumIcon} className='album-icon'></Image>
                  <View className='control-text'>相册</View>
                </View>
              </View>
            )}
          </View>
        </Fragment>
      </PageSkeleton>
    );
  }
}
