import React, { Component, Fragment } from 'react';
import { View, Image } from '@tarojs/components';
import {
  PageSkeleton, Native, PageHeader, SafeAreaView,
} from '@hb/taro-fusion-components';
import { observer } from 'mobx-react';
import loginModel from '@/models/loginModel';
import { jumpToAnyUrl } from '@/utils/jumpTo';
import './settings.scss';
import { forwardIcon } from '@/assets/index';

@observer
export default class Settings extends Component {
  componentDidShow() {
    Native.hideHomeButton();
  }

  handleBack = () => {
    Native.navigateBack();
  };

  handleProfileClick = () => {
    jumpToAnyUrl('/pages/profile/profile');
  };

  handleAboutClick = () => {
    jumpToAnyUrl('/pages/about/about');
  };

  handleLogout = () => {
    Native.showModal({
      title: '提示',
      content: '确认退出登录吗？',
      confirmColor: '#007AFF',
      success: (res) => {
        if (res.confirm) {
          // 清除登录信息
          loginModel.setLoginResult({
            mobile: '',
            guid: '',
            token: '',
            ticket: '',
          });
          Native.showToast('退出成功');
          // 返回我的页面
          this.handleBack();
        }
      },
    });
  };

  render() {
    const {
      loginResult: { mobile },
    } = loginModel;

    return (
      <PageSkeleton className="page-settings-view">
        <Fragment key="header">
          <PageHeader title="设置"></PageHeader>
        </Fragment>
        <Fragment key="body">
          {/* 设置选项列表 */}
          <View className="settings-list">
            <View className="settings-item" onClick={this.handleProfileClick}>
              <View className="item-label">个人资料</View>
              <Image src={forwardIcon} className="item-arrow"></Image>
            </View>

            <View className="settings-divider" />

            <View className="settings-item">
              <View className="item-label">手机号</View>
              <View className="item-value">
                {mobile
                  ? mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
                  : ''}
              </View>
            </View>

            <View className="settings-divider" />

            <View className="settings-item" onClick={this.handleAboutClick}>
              <View className="item-label">关于星卡</View>
              <Image src={forwardIcon} className="item-arrow"></Image>
            </View>

            <View className="settings-divider" />
          </View>
        </Fragment>
        <Fragment key="footer">
          {/* 退出登录按钮 */}
          <SafeAreaView safeAreaInsetBottom>
          <View className="logout-section">
            <View className="logout-btn" onClick={this.handleLogout}>
              <View className="logout-text">退出登录</View>
            </View>
          </View>
          </SafeAreaView>

        </Fragment>
      </PageSkeleton>
    );
  }
}
