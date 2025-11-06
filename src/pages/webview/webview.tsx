import React, { Component } from 'react';
import { WebView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import Native from '@/common/native';

export default class Webview extends Component {
  componentDidMount(): void {
    Native.hideHomeButton();
  }

  componentDidShow() {
    const { title } = Native.getUrlParams();
    if (title) {
      Taro.setNavigationBarTitle({
        title: title || '',
      });
    }
  }

  onShareAppMessage() {
    return Native.getShareAppOptions();
  }

  render() {
    const { url = '' } = Native.getUrlParams();
    return (
      <WebView src={url}></WebView>
    );
  }
}
