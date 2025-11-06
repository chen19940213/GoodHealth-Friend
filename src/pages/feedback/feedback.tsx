import React, { Component, Fragment } from 'react';
import { View, Text, Input, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { Native } from '@hb/taro-fusion-components';
import PageSkeleton from '@/components/PageSkeleton';
import './feedback.scss';

interface FeedbackState {
  content: string;
  capsuleTop: number;
  capsuleHeight: number;
}

export default class Feedback extends Component<{}, FeedbackState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      content: '',
      capsuleTop: 0,
      capsuleHeight: 0,
    };
  }

  componentDidMount() {
    this.setCapsuleInfo();
  }

  componentDidShow() {
    Native.hideHomeButton();
  }

  setCapsuleInfo = () => {
    try {
      const menuButton = Taro.getMenuButtonBoundingClientRect();
      if (menuButton) {
        this.setState({
          capsuleTop: menuButton.top || 0,
          capsuleHeight: menuButton.height || 0,
        });
      }
    } catch (error) {
      console.error('Failed to get capsule info:', error);
    }
  };

  handleBack = () => {
    Taro.navigateBack();
  };

  handleContentChange = (e: any) => {
    const value = e.detail.value;
    if (value.length <= 100) {
      this.setState({ content: value });
    }
  };

  handleCopyWeChatId = () => {
    const weChatId = '123';
    Taro.setClipboardData({
      data: weChatId,
      success: () => {
        Taro.showToast({
          title: '已复制微信号',
          icon: 'success',
        });
      },
    });
  };

  handleSubmit = () => {
    const { content } = this.state;
    if (!content.trim()) {
      Taro.showToast({
        title: '请输入反馈内容',
        icon: 'none',
      });
      return;
    }
    Taro.showToast({
      title: '提交成功',
      icon: 'success',
    });
    setTimeout(() => {
      Taro.navigateBack();
    }, 1000);
  };

  render() {
    const { content, capsuleTop, capsuleHeight } = this.state;
    const charCount = content.length;
    const weChatId = '123';

    return (
      <PageSkeleton className='page-feedback-view'>
        <Fragment key="header">
          <View 
            className="nav-bar"
            style={{ 
              top: capsuleTop ? `${capsuleTop}px` : '0',
              height: capsuleHeight ? `${capsuleHeight}px` : 'auto',
            }}
          >
            <View className="nav-back" onClick={this.handleBack}>
              <Text className="back-icon">‹</Text>
            </View>
            <Text className="nav-title">反馈问题</Text>
          </View>
        </Fragment>
        <Fragment key="body">
          <View className='feedback-content'>
            {/* 输入区域 */}
            <View className='input-section'>
              <Text className='input-label'>填写问题与建议</Text>
              <View className='input-wrapper'>
                <Input
                  className='feedback-input'
                  value={content}
                  placeholder='点击输入内容'
                  onInput={this.handleContentChange}
                  type='text'
                  maxlength={100}
                />
                <Text className='char-count'>{charCount}/100</Text>
              </View>
            </View>

            {/* 说明文字 */}
            <View className='instruction-section'>
              <Text className='instruction-text'>
                感谢您的反馈！我们会认真对待每一条建议，并在24小时内回复。
              </Text>
              <Text className='instruction-text'>
                如需更快解决问题，建议添加官方微信客服，并提供相关截图，我们会优先处理。
              </Text>
            </View>

            {/* 联系方式 */}
            <View className='contact-section'>
              <Text className='contact-method'>
                方法一: 点击复制官方微信号 (<Text className='wechat-id' onClick={this.handleCopyWeChatId}>{weChatId}</Text>)
              </Text>
              <Text className='contact-method'>
                方法二: 扫码添加
              </Text>
              <View className='qr-placeholder'>
                <Text className='qr-label'>二维码</Text>
              </View>
            </View>
          </View>
        </Fragment>
        <Fragment key="footer">
          <View className='submit-section'>
            <Button className='submit-button' onClick={this.handleSubmit}>
              提交
            </Button>
          </View>
        </Fragment>
      </PageSkeleton>
    );
  }
}

