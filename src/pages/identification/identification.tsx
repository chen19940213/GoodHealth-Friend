import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { View, Image, Text } from '@tarojs/components';
import {
  PageSkeleton,
  Native,
  PageHeader,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import './identification.scss';
import { scanIcon } from '@/assets/index';
import photoModel from '@/models/photoModel';
import { CAMERA_STEP_INFO } from '@/constants/page.const';
import { requestCreateAppraisalApi, requestUploadFileApi } from '@/services/apis/index.api';

@observer
export default class Identification extends Component {
  componentDidMount() {
    Native.hideHomeButton();
  }

  componentDidShow() {
    // 页面显示时的逻辑
  }

  componentDidHide() {
    // 页面隐藏时的逻辑
  }

  handleBack = () => {
    Taro.navigateBack();
  };

  handleSubmit = async () => {
    // 获取所有照片
    const allPhotos = photoModel.getAllPhotos();
    const totalSteps = Object.keys(CAMERA_STEP_INFO).length;

    // 按步骤顺序收集照片路径
    const photoPaths: string[] = [];
    for (let step = 1; step <= totalSteps; step += 1) {
      const photo = allPhotos[step];
      if (photo) {
        photoPaths.push(photo);
      }
    }

    // 如果没有照片，提示用户
    if (photoPaths.length === 0) {
      Native.showToast('请先拍摄照片');
      return;
    }

    try {
      // 显示提交中提示
      Taro.showLoading({ title: '正在上传照片...' });

      // 步骤1：上传所有照片到服务器，获取 URL 数组
      const uploadPromises = photoPaths.map((photoPath) => requestUploadFileApi({
        filePath: photoPath,
      }));

      const uploadResults = await Promise.all(uploadPromises);

      // 提取所有上传成功的 URL
      const imageUrls: string[] = [];
      uploadResults.forEach((result) => {
        if (result.url) {
          imageUrls.push(result.url);
        }
      });

      // 检查是否所有照片都上传成功
      if (imageUrls.length !== photoPaths.length) {
        Taro.hideLoading();
        Native.showToast('部分照片上传失败，请重试');
        return;
      }

      // 步骤2：调用创建鉴定接口
      Taro.showLoading({ title: '正在提交鉴定...' });

      const response = await requestCreateAppraisalApi({
        card_image: imageUrls,
      });

      // 隐藏加载提示
      Taro.hideLoading();

      // 提交成功，跳转到鉴定中页面
      if (response.code === 0) {
        Native.showToast('提交成功');
        // 延迟跳转，让用户看到成功提示
        setTimeout(() => {
          Taro.navigateTo({
            url: '/pages/appraisal/appraisal',
          });
        }, 1000);
      } else {
        Native.showToast(response.message || '提交失败，请重试');
      }
    } catch (error) {
      // 隐藏加载提示
      Taro.hideLoading();
      const errorMsg = error instanceof Error ? error.message : '提交失败，请重试';
      Native.showToast(errorMsg);
    }
  };

  handlePhotoClick = (step: number) => {
    Taro.navigateTo({
      url: `/pages/camera/camera?step=${step}`,
    });
  };

  handleExampleImageClick = (imageSrc: string) => {
    const totalSteps = Object.keys(CAMERA_STEP_INFO).length;
    const imageUrls = Array.from({ length: totalSteps }, (_, index) => {
      const step = index + 1;
      return CAMERA_STEP_INFO[step].image;
    });

    Taro.previewImage({
      urls: imageUrls,
      current: imageSrc,
    });
  };

  handleAgreementClick = () => {
    // 跳转到协议页面
    Taro.navigateTo({
      url: `/pages/webview/webview?url=${encodeURIComponent('https://m.hellobike.com/mf/spa/u_rntimj/latest/MA2310164656593543907773012.html?activityCode=MA2310164656593543907773012')}&title=星卡鉴定在线鉴别协议`,
    });
  };

  render() {
    const totalSteps = Object.keys(CAMERA_STEP_INFO).length;

    // 检查所有必填步骤是否都已完成
    const isAllRequiredPhotosTaken = () => Object.keys(CAMERA_STEP_INFO).every((stepKey) => {
      const step = parseInt(stepKey, 10);
      const stepInfo = CAMERA_STEP_INFO[step];
      // 检查该步骤是否有有效照片
      const photo = photoModel.getPhoto(step);
      const hasPhoto = photo && photo !== null && photo !== undefined && photo.trim() !== '';
      // 如果该步骤是必填的，则必须有照片；如果不是必填的，则不需要检查
      return stepInfo.required ? hasPhoto : true;
    });

    const canSubmit = isAllRequiredPhotosTaken();

    return (
      <PageSkeleton className='page-identification-view'>

        <Fragment key="header">
        <PageHeader title="识别鉴定"></PageHeader>
        </Fragment>
        <Fragment key="scroll">

          {/* 拍摄说明区域 */}
          <View className='instruction-section'>
            <View className='instruction-title'>
              请按照如下顺序依次拍摄清晰完整的鉴定点图片
            </View>

            {/* 拍摄区域 */}
            <View className='photo-upload-section'>
              {Array.from({ length: totalSteps }, (_, index) => {
                const step = index + 1;
                const stepInfo = CAMERA_STEP_INFO[step];
                const photo = photoModel.getPhoto(step);

                return (
                  <View key={step} className='photo-item' onClick={() => this.handlePhotoClick(step)}>
                    <View className='photo-frame'>
                      {photo ? (
                        <Image
                          className='photo-image'
                          src={photo}
                          mode='aspectFill'
                        />
                      ) : (
                        <View className='photo-placeholder'>
                          <View className='plus-icon'></View>
                        </View>
                      )}
                    </View>
                    <View className='photo-label'>
                      {stepInfo.required && <View className='required-mark'>*</View>}
                      <View className='label-text'>
                        {stepInfo.label}
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>

            <View className='agreement-text'>
              提交即已阅读且同意
              <Text className='agreement-text-link' onClick={this.handleAgreementClick}>《星卡鉴定在线鉴别协议》</Text>
            </View>
          </View>

          {/* 拍摄范例区域 */}
          <View className='example-section'>
            <View className='example-title'>拍摄范例</View>
            <View className='example-images'>
              {Array.from({ length: totalSteps }, (_, index) => {
                const step = index + 1;
                const stepInfo = CAMERA_STEP_INFO[step];

                return (
                  <View key={step} className='example-item'>
                    <Image
                      className='example-image'
                      src={stepInfo.image}
                      mode='aspectFill'
                      onClick={() => this.handleExampleImageClick(stepInfo.image)}
                    />
                    <View className='example-label'>
                      {stepInfo.required && <View className='required-mark'>*</View>}
                      {stepInfo.label}
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          {/* 提交按钮 */}
          <View className='submit-section'>
            <View
              className={`submit-button ${canSubmit ? 'active' : 'disabled'}`}
              onClick={canSubmit ? this.handleSubmit : undefined}
            >
              <View className='submit-icon'>
                <Image src={scanIcon} className='icon-image' />
              </View>
              <View className='submit-text'>提交鉴定</View>
            </View>
          </View>
        </Fragment>
      </PageSkeleton>
    );
  }
}
