import React, { Component } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

export interface SocialModalProps {
  visible: boolean;
  type: 'xiaohongshu' | 'group';
  onClose: () => void;
}

export default class SocialModal extends Component<SocialModalProps> {
  componentDidMount() {
    if (this.props.visible) {
      this.hideTabBar();
    }
  }

  componentDidUpdate(prevProps: SocialModalProps) {
    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        this.hideTabBar();
      } else {
        this.showTabBar();
      }
    }
  }

  componentWillUnmount() {
    this.showTabBar();
  }

  hideTabBar = () => {
    try {
      Taro.hideTabBar();
    } catch (error) {
      console.warn('hideTabBar failed:', error);
    }
  };

  showTabBar = () => {
    try {
      Taro.showTabBar();
    } catch (error) {
      console.warn('showTabBar failed:', error);
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
    Taro.showToast({
      title: '提交成功',
      icon: 'success',
    });
    this.props.onClose();
  };

  render() {
    const { visible, type, onClose } = this.props;
    if (!visible) return null;

    const isXiaohongshu = type === 'xiaohongshu';
    const title = isXiaohongshu ? '关注小红书' : '加群交流';
    const weChatId = '123';

    return (
      <View className="social-modal">
        <View className="modal-mask" onClick={onClose} />
        <View className="modal-content">
          <View className="modal-header">
            <View className="header-back" onClick={onClose}>
              <Text className="back-icon">‹</Text>
            </View>
            <Text className="header-title">{title}</Text>
            <View className="header-close" onClick={onClose}>
              <Text className="close-icon">×</Text>
            </View>
          </View>
          <View className="modal-body">
            {isXiaohongshu ? (
              <>
                <View className="device-top">
                  <View className="device-slot" />
                </View>
                <View className="paper-content">
                  <Text className="paper-title">欢迎关注小红书</Text>
                  <Text className="paper-subtitle">"好健友"</Text>
                  <View className="qr-placeholder">
                    <Text className="qr-label">二维码</Text>
                  </View>
                  <Text className="paper-instruction">
                    直接搜索"好健友",或扫码关注
                  </Text>
                </View>
              </>
            ) : (
              <>
                <View className="qr-section">
                  <View className="qr-placeholder">
                    <Text className="qr-label">二维码</Text>
                  </View>
                  <View className="wechat-id-section" onClick={this.handleCopyWeChatId}>
                    <Text className="wechat-id-label">点击复制官方微信号</Text>
                    <Text className="wechat-id-value">{weChatId}</Text>
                  </View>
                </View>
              </>
            )}
          </View>
          <View className="modal-footer">
            <Button className="submit-button" onClick={this.handleSubmit}>
              提交
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

