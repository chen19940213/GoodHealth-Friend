import React, { Component } from 'react';
import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { appraisalPassed, identifyText_icon } from '@/assets/index';
import './index.scss';
import { IdentifyTaskItem } from '@/services/apis/index.api';

interface CardCellProps {
  cardCellData: IdentifyTaskItem;
  onClick?: () => void;
}

export default class CardCell extends Component<CardCellProps> {
  handleCardClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    } else {
      // 默认跳转到鉴定结果页
      Taro.navigateTo({
        url: '/pages/result/result',
      });
    }
  };

  render() {
    const {
      nickName = '',
      aiReason = '',
      userPic = '',
      firstImageUrl = '',
      aiResult = 1,
    } = this.props?.cardCellData || {};

    return (
      <View className='card-cell' onClick={this.handleCardClick}>
        {/* 背景容器 */}
        <View className='card-cell-container'>
          {/* 在线鉴定证明标题 */}
          <View className='card-header'>
            <View className='header-line' />
            <View className='header-title'>在线鉴定证明</View>
            <View className='header-line' />
          </View>

          {/* 鉴定结果 */}
          <View className='result-text'>{aiResult === 1 ? '符合正品特征' : '无法鉴定'}</View>
          <View className='result-subtitle'>鉴别结果根据用户信息得出</View>

          {/* 商品图片区域 */}
          <View className='product-section'>
            <View className='product-image-container'>
              <Image src={firstImageUrl} className='product-image' mode='aspectFill' />
              {/* 鉴别通过标记 */}
              <Image src={appraisalPassed} className='verify-badge' />
            </View>
          </View>

          {/* 底部用户信息 */}
          <View className='bottom-section'>
            <View className='user-info'>
              {userPic && (
                <Image src={userPic} className='user-avatar' />
              )}
              {!userPic && (
                <View className='user-avatar-placeholder' />
              )}
              <View className='user-content'>
                <View className='user-name-row'>
                    <View className='verified-badge'>
                        <Image src={identifyText_icon} className='verified-icon' />
                      <View className='verified-text'>星卡鉴定师</View>
                    </View>
                  <View className='user-name'>{nickName}</View>
                </View>

              </View>
            </View>
            <View className='user-description'>{aiReason}</View>
          </View>
        </View>
      </View>
    );
  }
}
