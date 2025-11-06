import React, { Component } from 'react';
import { View, Input } from '@tarojs/components';
import { PageSkeleton, Native } from '@hb/taro-fusion-components';
import { observer } from 'mobx-react';
import myModel from '@/models/myModel';
import './nickname-edit.scss';

interface State {
  nickname: string;
}

@observer
export default class NicknameEdit extends Component<{}, State> {
  state: State = {
    nickname: '',
  };

  componentDidMount() {
    const { userInfo: { nickname } } = myModel;
    this.setState({
      nickname: nickname || '',
    });
  }

  componentDidShow() {
    Native.hideHomeButton();
  }

  handleBack = () => {
    Native.navigateBack();
  };

  handleNicknameChange = (e) => {
    const value = e.detail.value;
    if (value.length <= 24) {
      this.setState({ nickname: value });
    }
  };

  handleComplete = () => {
    const { nickname } = this.state;
    if (nickname.length < 2) {
      Native.showToast('昵称至少需要2个字');
      return;
    }
    if (nickname.length > 24) {
      Native.showToast('昵称最多24个字');
      return;
    }

    // 更新用户信息
    myModel.setUserInfo({
      ...myModel.userInfo,
      nickname,
    });

    Native.showToast('修改成功');
    setTimeout(() => {
      this.handleBack();
    }, 500);
  };

  render() {
    const { nickname } = this.state;
    const charCount = nickname.length;
    const isValid = charCount >= 2 && charCount <= 24;

    return (
      <PageSkeleton className='page-nickname-edit-view'>
        {/* 顶部导航栏 */}
        <View className='nav-bar'>
          <View className='back-btn' onClick={this.handleBack}>
            <View className='back-icon' />
          </View>
          <View className='nav-title'>昵称编辑</View>
          <View 
            className={`complete-btn ${isValid ? 'active' : ''}`}
            onClick={isValid ? this.handleComplete : undefined}
          >
            完成
          </View>
        </View>

        {/* 输入提示 */}
        <View className='input-hint'>请输入2到24个字</View>

        {/* 输入框区域 */}
        <View className='input-section'>
          <Input
            className='nickname-input'
            value={nickname}
            onInput={this.handleNicknameChange}
            placeholder='请输入昵称'
            maxlength={24}
            focus
          />
          <View className='char-count'>{charCount}/24</View>
        </View>
      </PageSkeleton>
    );
  }
}

