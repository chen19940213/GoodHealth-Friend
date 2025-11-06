import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { View, Text, Button } from '@tarojs/components';
import {
  PageSkeleton,
  OssImage,
  Native,
  SafeAreaView,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import { myUBT } from '@/common/tianqi';
import loginModel from '@/models/loginModel';
import myModel from '@/models/myModel';
import { defaultUserAvatar } from '@/constants/page.const';
import './my.scss';
import { jumpToAnyUrl } from '@/utils/jumpTo';
import { noListIcon, settingsIcon } from '@/assets/index';
import CardCell from '@/components/cardCell';
import { requestWxLoginMockApi } from '@/services/apis/login.api';

@observer
export default class My extends Component {
  componentDidMount() {
    // 监听登录态变化
    loginModel.checkLogin(
      (isLogin) => {
        // eslint-disable-next-line no-console
        console.log('登录态变化', isLogin, loginModel.loginResult);
        if (isLogin) {
          // 登录了，重新请求列表数据
          myModel.getMyIdentifyTaskList(true);
        } else {
          // 未登录，清空列表数据
          myModel.clearCardList();
        }
      },
      {
        observe: true, // 开启监听，当登录态变化时自动触发回调
      },
    );
  }

  componentDidShow() {
    myUBT.pageView();
    Native.hideHomeButton();

    // 根据当前登录态决定是否请求数据
    const isLogin = !!(loginModel.loginResult?.token && loginModel.loginResult?.ticket);
    if (isLogin) {
      // 已登录，请求我的鉴定任务列表数据（包含 token）
      myModel.getMyIdentifyTaskList(true);
    } else {
      // 未登录，清空列表数据
      myModel.clearCardList();
    }
  }

  componentDidHide() {
    myUBT.pageViewOut();
  }

  handleSettingsClick = () => {
    jumpToAnyUrl('/pages/settings/settings');
  };

  handleLoginClick = () => {
    Taro.getUserProfile({
      desc: '用于完善用户资料',
      success: () => {
        // 获取用户信息后，调用登录处理
        this.handleWxLogin();
      },
      fail: () => {
        Native.showToast('获取用户信息失败');
      },
    });
  };

  // 微信登录处理
  handleWxLogin = async () => {
    try {
      // 获取微信登录凭证 code
      const loginRes = await Taro.login();

      if (!loginRes.code) {
        Native.showToast('获取微信登录凭证失败');
        return;
      }

      // // 获取 code 成功，复制到剪贴板
      // await Taro.setClipboardData({
      //   data: loginRes.code,
      // });

      // // 显示成功提示
      // await Taro.showModal({
      //   title: '获取 code 成功',
      //   content: `code: ${loginRes.code}\n\n已复制到剪贴板`,
      //   showCancel: false,
      //   confirmText: '确定',
      // });

      // // 显示加载提示
      // Taro.showLoading({
      //   title: '登录中...',
      //   mask: true,
      // });

      // 调用本地模拟接口进行登录
      // 后端会使用 code、appId、appSecret 获取 openId 和 session_key
      const result = await requestWxLoginMockApi({
        code: loginRes.code,
        // userInfo: {
        //   nickName: userInfo.nickName,
        //   avatarUrl: userInfo.avatarUrl,
        //   gender: userInfo.gender,
        //   city: userInfo.city,
        //   province: userInfo.province,
        //   country: userInfo.country,
        // },
      });

      Taro.hideLoading();

      // 登录成功，保存登录信息（包含 openId）
      this.handleLoginSuccess(result.data as Parameters<typeof loginModel.setLoginResult>[0]);
    } catch (error) {
      Taro.hideLoading();
      const err = error as Error;
      Native.showToast(err.message || '登录失败，请重试');
    }
  };

  handleLoginSuccess = (res: Parameters<typeof loginModel.setLoginResult>[0]) => {
    // eslint-disable-next-line no-console
    console.log('登录成功，保存的数据:', res);
    loginModel.setLoginResult(res);
    Native.showToast('登录成功');
  };

  handleScrollToLower = () => {
    // 加载更多数据
    if (!myModel.loading && myModel.hasMore) {
      myModel.getMyIdentifyTaskList(false);
    }
  };

  renderNoList = () => (
      <View className='no-list-container'>
        <Image src={noListIcon} className='no-list-icon' />
        <View className='no-list-text'>暂时没有鉴定任何东西哦～</View>
      </View>
  );

  render() {
    const { loginResult } = loginModel;
    const { token } = loginResult;
    // 从 loginResult 中获取用户信息（可能在不同层级）
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const avatar = (loginResult as any)?.avatar || (loginResult as any)?.userInfo?.avatar || '';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nickname = (loginResult as any)?.nickname || (loginResult as any)?.userInfo?.nickname || '女王陛下';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userNewId = (loginResult as any)?.userNewId || (loginResult as any)?.userId || '';
    const isLogin = !!token;

    return (
      <PageSkeleton className='page-my-view' onScrollToLower={this.handleScrollToLower}>
        <Fragment key="scroll">
            {/* 顶部渐变背景区域 */}
            <View className='top-gradient-bg' />

            {/* 用户信息区域 */}
            <View className='user-section'>
              <View className='user-info-container'>
                <OssImage
                  className='user-avatar'
                  width={79}
                  height={79}
                  src={avatar || defaultUserAvatar}
                />
                <View className='user-info'>
                  {isLogin ? (
                    <>
                      <View className='user-nickname'>{nickname || '女王陛下'}</View>
                    </>
                  ) : (
                    <>
                      <View className='login-text-btn' onClick={this.handleLoginClick}>
                        去登录
                      </View>
                    </>
                  )}
                </View>
              </View>
              <View className='settings-icon-wrapper' onClick={this.handleSettingsClick}>
                <View className='settings-icon' />
              </View>
            </View>

            {/* 减肥原因 */}
            <View className='reason-section'>
              <Text className='reason-text'>减肥原因：身体原因血脂高，希望恢复健康，加油！</Text>
            </View>

            {/* 标签区域 */}
            <View className='tags-section'>
              <View className='tag-item'>
                <View className='tag-icon'>🏷️</View>
                <Text className='tag-text'>中国女人</Text>
              </View>
              <View className='tag-item'>
                <Text className='tag-text'>163</Text>
              </View>
              <View className='tag-item'>
                <Text className='tag-text'>45</Text>
              </View>
            </View>

            {/* 反馈卡片 */}
            <View className='feedback-card'>
              <View className='feedback-avatar' />
              <View className='feedback-content'>
                <Text className='feedback-title'>截止目前，好健友已有327939位朋友</Text>
                <Text className='feedback-subtitle'>累计减肥224434斤，折合288头老母猪！</Text>
              </View>
            </View>

            {/* 操作按钮 */}
            <View className='action-buttons'>
              <Button className='action-btn primary' onClick={() => {}}>
                关注小红书
              </Button>
              <Button className='action-btn primary' onClick={() => {}}>
                加群交流
              </Button>
            </View>

            <SafeAreaView safeAreaInsetBottom />
        </Fragment>
      </PageSkeleton>
    );
  }
}
