import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { View, Image, Text } from '@tarojs/components';
import {
  PageSkeleton,
  Native,
  Poster,
  SafeAreaView,
  PageHeader,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import posterConfig from './data/result-poster.json';
import './result.scss';
import { appraisalPassed, checkSuccess, identifyText_icon } from '@/assets/index';

interface ResultState {
  posterUrl: string;
  generating: boolean;
}

@observer
export default class Result extends Component<Record<string, never>, ResultState> {
  state: ResultState = {
    posterUrl: '',
    generating: false,
  };

  componentDidMount() {
    Native.hideHomeButton();
  }

  // 返回上一页
  handleBack = () => {
    Taro.navigateBack();
  };

  // 分享功能
  handleShare = () => {
    Taro.showActionSheet({
      itemList: ['保存鉴别证书', '分享给好友'],
      success: (res) => {
        if (res.tapIndex === 0) {
          this.handleSaveImage();
        } else if (res.tapIndex === 1) {
          this.handleShareToFriend();
        }
      },
    });
  };

  // 长按生成图片
  handleLongPress = () => {
    this.handleSaveImage();
  };

  // 生成并保存图片
  handleSaveImage = () => {
    try {
      this.setState({ generating: true });
      Taro.showLoading({ title: '正在生成证书...' });

      // 使用 Poster 组件生成图片
      // posterUrl 会在 onReady 回调中设置
    } catch {
      this.handleGenerateError();
    }
  };

  // 处理生成错误
  handleGenerateError = () => {
    Taro.hideLoading();
    Taro.showToast({
      title: '生成失败，请重试',
      icon: 'none',
    });
    this.setState({ generating: false });
  };

  // Poster 生成完成回调
  handlePosterReady = (path: string) => {
    this.setState({
      posterUrl: path,
      generating: false,
    });

    Taro.hideLoading();

    // 先预览图片
    Taro.previewImage({
      urls: [path],
      current: path,
    });

    // 询问是否保存
    setTimeout(() => {
      Taro.showModal({
        title: '保存鉴别证书',
        content: '是否保存鉴别证书到相册？',
        success: (res) => {
          if (res.confirm) {
            this.saveToAlbum(path);
          }
        },
      });
    }, 1000);
  };

  // 保存到相册
  saveToAlbum = (filePath: string) => {
    Taro.saveImageToPhotosAlbum({
      filePath,
      success: () => {
        Taro.showToast({
          title: '已保存到相册',
          icon: 'success',
        });
      },
      fail: (err) => {
        // 处理权限问题
        if (err.errMsg.includes('auth')) {
          Taro.showModal({
            title: '需要授权',
            content: '需要您授权保存图片到相册',
            success: (res) => {
              if (res.confirm) {
                Taro.openSetting();
              }
            },
          });
        } else {
          Taro.showToast({
            title: '保存失败',
            icon: 'none',
          });
        }
      },
    });
  };

  // 分享给好友
  handleShareToFriend = () => {
    if (this.state.posterUrl) {
      Taro.showShareImageMenu({
        path: this.state.posterUrl,
      });
    } else {
      Taro.showToast({
        title: '请先生成证书',
        icon: 'none',
      });
    }
  };

  render() {
    const { generating } = this.state;

    return (
      <PageSkeleton className='page-result-view'>
        <Fragment key="header">
           <PageHeader className='custom-page-header'
           title="鉴别结果"
           backIconColor='white'
           bgColor='#020202'
           titleColor='#fff'>
           </PageHeader>
      </Fragment>
        <Fragment key="scroll">

          {/* 主内容卡片 */}
          <View className='content-card' onLongPress={this.handleLongPress}>

            {/* 标题区域 */}
            <View className='title-section'>
              <View className='title-header'>
                <View className='line' />
                <Text className='title-text'>在线鉴定证明</Text>
                <View className='line' />
              </View>
              <View className='result-status'>符合正品特征</View>
              <View className='result-tip'>鉴别结果根据用户信息得出</View>
            </View>
            <View className='img-section'>
              <View className='product-image-container'>
              <Image
              src='https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856'
              className='product-image'
              mode='aspectFill' />
              <Image src={appraisalPassed} className='verify-badge' />
              </View>

            </View>
            {/* 鉴定师信息 */}
            <View className='appraiser-info'>
              <Image
                className='appraiser-avatar'
                src='https://img1.baidu.com/it/u=293340820,2978436854&fm=253&app=138&f=JPEG?w=683&h=856'
                mode='aspectFill'
              />
              <View>
              <View className='appraiser-badge'>
                <Image src={identifyText_icon} className='verified-icon' />
                <Text className='badge-text'>星卡鉴定师</Text>
              </View>
              <View className='appraiser-name'>椰椰</View>
              </View>
            </View>

            {/* 鉴别说明 */}
            <View className='description'>
            “小卡细节工艺符合正品特征，鉴别通过，纹路比例切角没问题”
            </View>

            {/* 鉴别部位分析 */}
            <View className='analysis-header'>
              <Text className='analysis-title'>鉴别部位分析</Text>
              <View className='header-right'>
              <Text className='analysis-count'>5项全通过</Text>
              <Image src={checkSuccess} className='check-success-icon'></Image>
              </View>

            </View>

            {/* 检测项目列表 */}
            <View className='check-list'>
              <View className='check-item'>
                <Text className='check-label'>小卡正面</Text>
                <View className='divider-line' />
                <Image src={checkSuccess} className='check-success-icon'></Image>
              </View>

              <View className='check-item'>
                <Text className='check-label'>小卡背面</Text>
              <View className='divider-line' />

                <Image src={checkSuccess} className='check-success-icon'></Image>
              </View>

              <View className='check-item'>
                <Text className='check-label'>小卡正面纹路对光</Text>
              <View className='divider-line' />

                <Image src={checkSuccess} className='check-success-icon'></Image>
              </View>

              <View className='check-item'>
                <Text className='check-label'>小卡背面文字logo</Text>
                 <View className='divider-line' />
                <Image src={checkSuccess} className='check-success-icon'></Image>
              </View>

              <View className='check-item'>
                <Text className='check-label'>小卡像素点</Text>
                <View className='divider-line' />
                <Image src={checkSuccess} className='check-success-icon'></Image>
              </View>
            </View>

            {/* 鉴别ID和时间 */}
            <View className='info-section'>
              <View className='info-row'>
                <Text className='info-label'>鉴别ID：</Text>
                <Text className='info-value'>73r9273894377789</Text>
              </View>
              <View className='info-row'>
                <Text className='info-label'>鉴别时间：</Text>
                <Text className='info-value'>2025-10-05</Text>
                <Text className='info-value'>13:30</Text>
              </View>
            </View>

          </View>

          {/* 底部提示 */}

          {/* 隐藏的 Poster 组件用于生成图片 */}
          {generating && (
            <View style={{ position: 'fixed', left: '-9999px', top: '-9999px' }}>
              <Poster
                palette={posterConfig.data}
                onReady={this.handlePosterReady}
              />
            </View>
          )}
        </Fragment>
        <Fragment key='footer'>
        <Text className='footer-tip'>
            在线鉴定结果仅供参考，具体情况以实物为准
          </Text>
        </Fragment>
        <SafeAreaView safeAreaInsetBottom />
      </PageSkeleton>
    );
  }
}
