/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component, Fragment } from 'react';
import { Button, View } from '@tarojs/components';
import { PageSkeleton, Native } from '@hb/taro-fusion-components';
import { observer } from 'mobx-react';
import Taro from '@tarojs/taro';
import loginModel from '@/models/loginModel';
import { requestWxLoginMockApi } from '@/services/apis/login.api';
import './login.scss';

@observer
export default class Login extends Component {
  componentDidShow() {
    Native.hideHomeButton();
  }

  handleBack = () => {
    Native.navigateBack();
  };

  handleLoginSuccess = (res: any) => {
    loginModel.setLoginResult(res);
    Native.showToast('登录成功');
    setTimeout(() => {
      this.handleBack();
    }, 500);
  };

  handleLoginFail = (error: Error) => {
    Native.showToast(error.message);
  };

  // 微信授权登录
  handleWxAuth = async () => {
    try {
      // 显示加载提示
      Taro.showLoading({
        title: '登录中...',
        mask: true,
      });

      // 获取微信登录凭证 code
      // 注意：getUserProfile 已废弃，现在只需要获取 code 即可
      // 用户昵称和头像等信息可以通过后端接口获取
      const loginRes = await Taro.login();

      if (!loginRes.code) {
        Taro.hideLoading();
        Native.showToast('获取微信登录凭证失败');
        return;
      }

      // 调用后端接口进行登录
      // 后端会使用 code、appId、appSecret 获取 openId 和 session_key
      const result = await requestWxLoginMockApi({
        code: loginRes.code,
      });

      Taro.hideLoading();

      // 登录成功，保存登录信息（包含 openId）
      // eslint-disable-next-line no-console
      console.log('登录成功，返回数据:', result);
      this.handleLoginSuccess(result.data);
    } catch (error: any) {
      Taro.hideLoading();
      // eslint-disable-next-line no-console
      console.error('登录失败:', error);
      Native.showToast(error?.message || '登录失败，请重试');
    }
  };

  render() {
    return (
      <PageSkeleton className='page-login-view'>
        <Fragment key="scroll">
          {/* 顶部渐变背景 */}
          <View className='top-gradient-bg' />

          {/* 返回按钮 */}
          <View className='back-btn' onClick={this.handleBack}>
            <View className='back-icon' />
          </View>

          {/* Logo 区域 */}
          <View className='logo-section'>
            <View className='logo-box'>
              <View className='logo-text'>星卡</View>
            </View>
            <View className='slogan'>中检、海关互认的AI鉴定团体标准</View>
          </View>

          {/* 登录按钮区域 */}
          <View className='login-actions'>
            {/* <LoginButton
              className='auth-login-btn'
              channel={30}
              systemCode={appConst.SYSTEM_CODE}
              onSuccess={this.handleLoginSuccess}
              onFail={this.handleLoginFail}
            >
              授权头像和昵称
            </LoginButton> */}
            <Button
              className='wx-auth-btn'
              onClick={this.handleWxAuth}
            >
              微信授权登录
            </Button>
            <View className='phone-login-text'>手机号登录/注册</View>
          </View>
        </Fragment>
      </PageSkeleton>
    );
  }
}
