import React, { Component, Fragment } from 'react';
import { View, Text, Input, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import {
  OssImage,
  Native,
} from '@hb/taro-fusion-components';
import { observer } from 'mobx-react';
import myModel from '@/models/myModel';
import { defaultUserAvatar } from '@/constants/page.const';
import PageSkeleton from '@/components/PageSkeleton';
import './profile.scss';

interface ProfileState {
  nickname: string;
  gender: 'male' | 'female';
  persona: string[];
  reason: string;
  height: string;
  weight: string;
  capsuleTop: number;
  capsuleHeight: number;
}

@observer
export default class Profile extends Component<{}, ProfileState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nickname: '昵称123',
      gender: 'male',
      persona: [],
      reason: '',
      height: '',
      weight: '',
      capsuleTop: 0,
      capsuleHeight: 0,
    };
  }

  componentDidMount() {
    this.setCapsuleInfo();
  }

  componentDidShow() {
    Native.hideHomeButton();
    // 初始化数据
    const { userInfo } = myModel;
    this.setState({
      nickname: userInfo?.nickname || '昵称123',
      gender: (userInfo?.gender as 'male' | 'female') || 'male',
      persona: userInfo?.persona || [],
      reason: userInfo?.reason || '',
      height: userInfo?.height || '',
      weight: userInfo?.weight || '',
    });
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

  handleAvatarClick = () => {
    // TODO: 实现头像选择
    Taro.showToast({
      title: '头像选择功能待实现',
      icon: 'none',
    });
  };

  handleNicknameChange = (e: any) => {
    this.setState({
      nickname: e.detail.value,
    });
  };

  handleGenderChange = (gender: 'male' | 'female') => {
    this.setState({ gender });
  };

  handlePersonaToggle = (persona: string) => {
    this.setState((prevState) => {
      const currentPersona = [...prevState.persona];
      const index = currentPersona.indexOf(persona);
      if (index > -1) {
        currentPersona.splice(index, 1);
      } else {
        currentPersona.push(persona);
      }
      return { persona: currentPersona };
    });
  };

  handleReasonChange = (e: any) => {
    this.setState({
      reason: e.detail.value,
    });
  };

  handleHeightChange = (e: any) => {
    this.setState({
      height: e.detail.value,
    });
  };

  handleWeightChange = (e: any) => {
    this.setState({
      weight: e.detail.value,
    });
  };

  handleSave = () => {
    const { nickname, gender, persona, reason, height, weight } = this.state;
    myModel.setUserInfo({
      ...myModel.userInfo,
      nickname,
      gender,
      persona,
      reason,
      height,
      weight,
    });
    Taro.showToast({
      title: '保存成功',
      icon: 'success',
    });
    setTimeout(() => {
      Taro.navigateBack();
    }, 500);
  };

  render() {
    const { userInfo: { avatar } } = myModel;
    const { nickname, gender, persona, reason, height, weight, capsuleTop, capsuleHeight } = this.state;
    const personaOptions = ['辣妹', '中国女人', '女王'];

    return (
      <PageSkeleton className='page-profile-view'>
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
            <Text className="nav-title">个人资料</Text>
            <View className="nav-actions">
              <View className="action-icon">
                <Text className="icon-text">⋯</Text>
              </View>
              <View className="action-icon">
                <Text className="icon-text">⚙</Text>
              </View>
            </View>
          </View>
        </Fragment>
        <Fragment key="body">
          {/* 用户头像区域 */}
          <View className='avatar-section'>
            <View className='avatar-container' onClick={this.handleAvatarClick}>
              <OssImage
                className='user-avatar'
                width={160}
                height={160}
                src={avatar || defaultUserAvatar}
              />
              <View className='avatar-edit-icon'>
                <Text className='edit-icon'>✏️</Text>
              </View>
            </View>
          </View>

          {/* 表单区域 */}
          <View className='form-section'>
            {/* 昵称 */}
            <View className='form-item'>
              <Text className='item-label'>昵称</Text>
              <Input
                className='form-input'
                value={nickname}
                placeholder='昵称123'
                onInput={this.handleNicknameChange}
              />
            </View>

            {/* 性别 */}
            <View className='form-item'>
              <Text className='item-label'>性别</Text>
              <View className='gender-buttons'>
                <View
                  className={`gender-btn ${gender === 'male' ? 'active' : ''}`}
                  onClick={() => this.handleGenderChange('male')}
                >
                  <Text className='gender-icon'>♂</Text>
                  <Text className='gender-text'>男</Text>
                </View>
                <View
                  className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
                  onClick={() => this.handleGenderChange('female')}
                >
                  <Text className='gender-icon'>♀</Text>
                  <Text className='gender-text'>女</Text>
                </View>
              </View>
            </View>

            {/* 人设 */}
            <View className='form-item'>
              <Text className='item-label'>人设</Text>
              <View className='persona-tags'>
                {personaOptions.map((option) => (
                  <View
                    key={option}
                    className={`persona-tag ${persona.includes(option) ? 'active' : ''}`}
                    onClick={() => this.handlePersonaToggle(option)}
                  >
                    <Text className='tag-text'>{option}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* 减肥原因 */}
            <View className='form-item'>
              <Text className='item-label'>减肥原因</Text>
              <View className='textarea-wrapper'>
                <Input
                  className='form-textarea'
                  value={reason}
                  placeholder='想填咱就填，不想填就算了撒'
                  onInput={this.handleReasonChange}
                  type='text'
                />
              </View>
            </View>

            {/* 身高 */}
            <View className='form-item'>
              <Text className='item-label'>身高</Text>
              <Input
                className='form-input'
                value={height}
                placeholder='可填可不填哦~'
                onInput={this.handleHeightChange}
              />
            </View>

            {/* 体重 */}
            <View className='form-item'>
              <Text className='item-label'>体重</Text>
              <Input
                className='form-input'
                value={weight}
                placeholder='可填可不填哦~'
                onInput={this.handleWeightChange}
              />
            </View>
          </View>
        </Fragment>
      </PageSkeleton>
    );
  }
}
