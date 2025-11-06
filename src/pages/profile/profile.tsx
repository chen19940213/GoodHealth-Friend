import React, { Component, Fragment } from 'react';
import { View, Input } from '@tarojs/components';
import {
  PageSkeleton, Native, OssImage, PageHeader,
} from '@hb/taro-fusion-components';
import { observer } from 'mobx-react';
import myModel from '@/models/myModel';
import { defaultUserAvatar } from '@/constants/page.const';
import './profile.scss';

@observer
export default class Profile extends Component {
  state = {
    nickname: '',
  };

  componentDidShow() {
    Native.hideHomeButton();
    // 初始化昵称
    const { userInfo: { nickname } } = myModel;
    this.setState({
      nickname: nickname || '昵称123',
    });
  }

  handleBack = () => {
    Native.navigateBack();
  };

  handleNicknameChange = (e) => {
    this.setState({
      nickname: e.detail.value,
    });
  };

  handleNicknameBlur = () => {
    // 保存昵称
    const { nickname } = this.state;
    if (nickname.trim()) {
      myModel.setUserInfo({
        ...myModel.userInfo,
        nickname: nickname.trim(),
      });
    }
  };

  render() {
    const { userInfo: { avatar } } = myModel;

    return (
      <PageSkeleton className='page-profile-view'>
         <Fragment key="header">
          <PageHeader title="个人资料"></PageHeader>
        </Fragment>
        {/* 用户头像区域 */}
        <View className='avatar-section'>
          <View className='avatar-container'>
            <OssImage
              className='user-avatar'
              width={160}
              height={160}
              src={avatar || defaultUserAvatar}
            />

          </View>
        </View>

        {/* 昵称设置 */}
        <View className='settings-item'>
          <View className='item-label'>昵称</View>
          <Input
            className='nickname-input'
            value={this.state.nickname}
            placeholder='请输入昵称'
            onInput={this.handleNicknameChange}
            onBlur={this.handleNicknameBlur}
          />
        </View>
      </PageSkeleton>
    );
  }
}
