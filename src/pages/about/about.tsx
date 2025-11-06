import React, { Component, Fragment } from 'react';
import { View, Image, Text } from '@tarojs/components';
import {
  PageSkeleton,
  Native,
  PageHeader,
  SafeAreaView,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import './about.scss';
import { StarCard_icon_white } from '@/assets/index';

export default class About extends Component {
  componentDidShow() {
    Native.hideHomeButton();
  }

  // 小程序分享配置
  onShareAppMessage() {
    return {
      title: '星卡 - AI鉴定专家',
      path: '/pages/index/index',
      imageUrl: '', // 可以设置分享图片
    };
  }

  // 朋友圈分享配置
  onShareTimeline() {
    return {
      title: '星卡 - AI鉴定专家',
      path: '/pages/index/index',
      imageUrl: '', // 可以设置分享图片
    };
  }

  handleBack = () => {
    Native.navigateBack();
  };

  handleShare = () => {
    // 直接引导用户使用右上角分享
    Taro.showModal({
      title: '分享给好友',
      content: '请点击右上角的分享按钮，选择分享方式',
      showCancel: true,
      cancelText: '取消',
      confirmText: '知道了',
    });
  };

  // 复制链接
  copyLink = () => {
    const shareUrl = 'https://m.hellobike.com/star-card'; // 替换为实际的分享链接
    Taro.setClipboardData({
      data: shareUrl,
      success: () => {
        Taro.showToast({
          title: '链接已复制',
          icon: 'success',
        });
      },
      fail: () => {
        Taro.showToast({
          title: '复制失败',
          icon: 'none',
        });
      },
    });
  };

  render() {
    return (
      <PageSkeleton className="page-about-view">
        <Fragment key="header">
        <PageHeader title="设置"></PageHeader>
        </Fragment>
        <Fragment key="body">
          <View className='empty-view'></View>
          {/* 主内容区域 */}
          <View className="content-section">
            {/* 星卡图标 */}
            <View className="app-icon-container">
                <Image src={StarCard_icon_white} className='app-icon'></Image>
            </View>

            {/* 应用信息 */}
            <View className="app-info">
              <View className="app-title">星卡</View>
              <View className="app-version">1.0</View>
            </View>
          </View>
        </Fragment>
        <Fragment key="footer">

            <View className="share-section">
              <View className="share-btn" onClick={this.handleShare}>
                <Text className="share-text">点击分享给好友</Text>
              </View>
          <SafeAreaView safeAreaInsetBottom>
          </SafeAreaView>
            </View>
        </Fragment>
      </PageSkeleton>
    );
  }
}
