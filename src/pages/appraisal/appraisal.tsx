import React, { Component, Fragment } from 'react';
import { View, Text, Image } from '@tarojs/components';
import {
  PageSkeleton,
  Native,
  PageHeader,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import './appraisal.scss';
import { underAppraisalBg } from '@/assets/index';

export default class AppraisalPage extends Component {
  private timer: NodeJS.Timeout | null = null;

  state = {
    countdown: 5, // 倒计时
  };

  componentDidMount() {
    Native.hideHomeButton();
    // this.startCountdown();
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  startCountdown = () => {
    this.timer = setInterval(() => {
      this.setState((prevState: { countdown: number }) => {
        const newCountdown = prevState.countdown - 1;
        if (newCountdown <= 0) {
          // 倒计时结束，跳转到结果页面
          this.navigateToResult();
          return { countdown: 0 };
        }
        return { countdown: newCountdown };
      });
    }, 1000);
  };

  navigateToResult = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    Taro.navigateTo({
      url: '/pages/result/result',
    });
  };

  handleBack = () => {
    Taro.navigateBack();
  };

  render() {
    const { countdown } = this.state;

    return (
      <PageSkeleton className='page-appraisal-view'>
        <Fragment key="header">
          <PageHeader
            // title="鉴定中"
            backIconColor='white'
            bgColor='transparent'
            titleColor='#fff'
            onClickBackIcon={this.handleBack}
          />
        </Fragment>
        <Fragment key="scroll">
          {/* 背景图片 */}
          {/* <View className='appraisal-bg'>
            <Image
              src={underAppraisalBg}
              className='bg-image'
              mode='aspectFill'
            />
          </View> */}

          {/* 主要内容区域 */}
          <View className='appraisal-content'>
            {/* 鉴定图标区域 */}
            {/* <View className='appraisal-icon-section'>
              <View className='icon-container'>
                <View className='loading-icon'>
                  <View className='loading-circle'></View>
                  <View className='loading-dots'>
                    <View className='dot'></View>
                    <View className='dot'></View>
                    <View className='dot'></View>
                  </View>
                </View>
              </View>
            </View> */}

            {/* 文字说明区域 */}
            <View className='appraisal-text-section'>
              <Text className='main-title'>正在鉴定中...</Text>
              <Text className='sub-title'>鉴定过程可能需要一定时间，请耐心等待</Text>
            </View>
          </View>
        </Fragment>
      </PageSkeleton>
    );
  }
}
