import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { View, Text, Button, Image } from '@tarojs/components';
import {
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
import PageSkeleton from '@/components/PageSkeleton';
import SocialModal from '@/components/SocialModal';

interface MyState {
  showSocialModal: boolean;
  socialModalType: 'xiaohongshu' | 'group';
}

@observer
export default class My extends Component<{}, MyState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showSocialModal: false,
      socialModalType: 'xiaohongshu',
    };
  }

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

  // 跳转到个人资料页
  handleProfileClick = () => {
    Taro.navigateTo({
      url: '/pages/profile/profile',
    });
  };

  // 显示关注小红书弹窗
  handleXiaohongshuClick = () => {
    this.setState({
      showSocialModal: true,
      socialModalType: 'xiaohongshu',
    });
  };

  // 显示加群交流弹窗
  handleGroupClick = () => {
    this.setState({
      showSocialModal: true,
      socialModalType: 'group',
    });
  };

  // 关闭弹窗
  handleCloseSocialModal = () => {
    this.setState({
      showSocialModal: false,
    });
  };

  // 跳转到反馈页面
  handleFeedbackClick = () => {
    Taro.navigateTo({
      url: '/pages/feedback/feedback',
    });
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

    const { showSocialModal, socialModalType } = this.state;

    return (
      <PageSkeleton className='page-my-view' onScrollToLower={this.handleScrollToLower}>
        <Fragment key="body">
          <SocialModal
            visible={showSocialModal}
            type={socialModalType}
            onClose={this.handleCloseSocialModal}
          />
          {/* 顶部渐变背景区域 */}
          <View className='top-gradient-bg' />

          {/* 用户信息区域 */}
          <View className='user-section'>
            <View className='user-info-container' onClick={this.handleProfileClick}>
              <OssImage
                className='user-avatar'
                width={158}
                height={158}
                src={avatar || defaultUserAvatar}
              />
              <View className='user-info'>
                {isLogin ? (
                  <>
                    <View className='user-nickname'>
                      {nickname || '女王陛下'}
                      <Text className='edit-icon'>✏️</Text>
                    </View>
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

          {/* 标签区域 */}
          <View className='tags-section'>
            <View className='tag-item'>
              <Text className='tag-icon'>🔍</Text>
              <Text className='tag-text'>中国女人</Text>
            </View>
            <View className='tag-item'>
              <Text className='tag-text'>163</Text>
            </View>
            <View className='tag-item'>
              <Text className='tag-text'>45</Text>
            </View>
          </View>

          {/* 减肥原因 */}
          <View className='reason-section'>
            <Text className='reason-text'>减肥原因: 身体原因血脂高, 希望恢复健康, 加油!</Text>
          </View>

          {/* 反馈卡片 */}
          <View className='feedback-card' onClick={this.handleFeedbackClick}>
            <View className='feedback-pig' />
            <View className='feedback-content'>
              <Text className='feedback-welcome'>欢迎大家反馈宝贵建议!</Text>
              <Text className='feedback-action'>我要反馈!</Text>
            </View>
            <View className='feedback-button'>
              <Text className='feedback-button-text'>去反馈 &gt;</Text>
            </View>
          </View>

          {/* 统计数据卡片 */}
          <View className='stats-card'>
            <Text className='stats-text'>
              截止目前, 好健友已有<Text className='stats-highlight'>327939</Text>位朋友
            </Text>
            <Text className='stats-text'>
              累计减肥<Text className='stats-highlight'>224434</Text>斤, 折合<Text className='stats-highlight'>288</Text>头老母猪!
            </Text>
          </View>

          {/* 操作按钮 */}
          <View className='action-buttons'>
            <Button className='action-btn primary' onClick={this.handleXiaohongshuClick}>
              关注小红书
            </Button>
            <Button className='action-btn primary' onClick={this.handleGroupClick}>
              加群交流
            </Button>
          </View>

          <SafeAreaView safeAreaInsetBottom />
        </Fragment>
      </PageSkeleton>
    );
  }
}
