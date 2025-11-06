import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import {
  View, Text, Button,
} from '@tarojs/components';
import {
  PageSkeleton,
  SafeAreaView,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import SemiCircleProgress from '@/components/SemiCircleProgress/SemiCircleProgress';
import LineChart from '@/components/LineChart/LineChart';
import './index.scss';

interface IndexState {
  // 体重数据
  currentWeight: number;
  targetWeight: number;
  initialWeight: number;
  // 打卡数据
  continuousDays: number;
  // 折线图数据
  chartData: Array<{ date: string; weight: number; label: string }>;
  // 打卡卡片数据
  checkinCards: Array<{ date: string; weight: number; emoji?: string }>;
}

@observer
export default class Index extends Component<{}, IndexState> {
  constructor(props: {}) {
    super(props);
    // 初始化数据
    this.state = {
      currentWeight: 55.01,
      targetWeight: 50.00,
      initialWeight: 65.00,
      continuousDays: 5,
      chartData: [
        { date: '2024-01-01', weight: 58.00, label: '周一' },
        { date: '2024-01-02', weight: 56.10, label: '周二' },
        { date: '2024-01-03', weight: 56.50, label: '周三' },
        { date: '2024-01-04', weight: 56.00, label: '周四' },
        { date: '2024-01-05', weight: 55.01, label: '今天' },
        { date: '2024-01-06', weight: 55.00, label: '周六' },
        { date: '2024-01-07', weight: 54.80, label: '周日' },
      ],
      checkinCards: [
        { date: '2024-01-01', weight: 58.00 },
        { date: '2024-01-02', weight: 56.10 },
        { date: '2024-01-03', weight: 56.50 },
        { date: '2024-01-04', weight: 56.00 },
        { date: '2024-01-05', weight: 55.01 },
      ],
    };
  }


  componentDidShow() {
    // 页面显示时的逻辑
  }

  // 计算进度百分比
  getProgress = () => {
    const { currentWeight, targetWeight, initialWeight } = this.state;
    const total = initialWeight - targetWeight;
    const current = initialWeight - currentWeight;
    if (total <= 0) return 0;
    return Math.min(100, Math.max(0, (current / total) * 100));
  };

  // 记录体重
  handleRecordWeight = () => {
    Taro.showModal({
      title: '记录体重',
      content: '跳转到记录体重页面',
      showCancel: false,
    });
  };

  render() {
    const {
      currentWeight, targetWeight, initialWeight, continuousDays, chartData, checkinCards,
    } = this.state;
    const progress = this.getProgress();

    return (
      <View className='page-index-view'>
        <Fragment key="scroll">
          {/* 顶部渐变背景 */}
          <View className='top-gradient-bg' />

          {/* 页面标题区域 */}
          <View className='page-header'>
            <View className='header-title'>
              <Text className='title-text'>好健友🏋</Text>
              <Text className='subtitle-text'>健康体重一起行动</Text>
            </View>
            <View className='header-status'>
              {/* 时间显示等 */}
            </View>
          </View>

          {/* 用户信息卡片 */}
          <View className='user-card'>
            <View className='user-avatar' />
            <View className='user-info'>
              <View className='user-name'>小珍猪</View>
              <View className='user-reason'>减肥原因：身体原因血脂高</View>
              <View className='user-motivation'>每日激励：减肥从戒掉说谎开始......少吃不会死，多吃他会胖</View>
            </View>
          </View>

          {/* 进度卡片区域 */}
          <View className='progress-card'>
            <View className='card-header'>
              <Text className='card-title'>每日打卡</Text>
              <View className='card-stats'>
                <Text className='stats-text'>已连续记录</Text>
                <Text className='stats-number'>{continuousDays}</Text>
                <Text className='stats-unit'>天</Text>
              </View>
              <View className='trend-link'>
                <Text className='trend-text'>日历趋势</Text>
              </View>
            </View>

            {/* 打卡卡片列表 */}
            <View className='checkin-cards'>
              {checkinCards.map((card, index) => (
                <View
                  key={index}
                  className={`checkin-card ${index === checkinCards.length - 1 ? 'today' : ''}`}
                >
                  <View className='card-emoji'>{card.emoji || '😊'}</View>
                  <Text className='card-weight'>{card.weight.toFixed(2)}</Text>
                </View>
              ))}
            </View>

            {/* 记录体重按钮 */}
            <Button className='record-button' onClick={this.handleRecordWeight}>
              记录体重
            </Button>

            {/* 折线图 */}
            <View className='chart-section'>
              <LineChart data={chartData} />
            </View>
          </View>

          {/* 半圆形进度条区域 */}
          <View className='progress-section'>
            <SemiCircleProgress
              progress={progress}
              currentWeight={currentWeight}
              targetWeight={targetWeight}
              initialWeight={initialWeight}
            />
          </View>

          <SafeAreaView safeAreaInsetBottom />
        </Fragment>
      </View>
    );
  }
}
