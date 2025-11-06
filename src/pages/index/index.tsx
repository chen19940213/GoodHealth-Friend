import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import {
  View, Text, Button,
} from '@tarojs/components';
import {
  SafeAreaView,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import PageSkeleton from '@/components/PageSkeleton';
import SemiCircleProgress from '@/components/SemiCircleProgress/SemiCircleProgress';
import LineChart from '@/components/LineChart/LineChart';
import RecordWeightModal from '@/components/RecordWeightModal';
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
  // 弹窗显示状态
  showRecordModal: boolean;
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
      showRecordModal: false,
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

  // 记录体重 - 打开弹窗
  handleRecordWeight = () => {
    this.setState({ showRecordModal: true });
  };

  // 关闭弹窗
  handleCloseModal = () => {
    this.setState({ showRecordModal: false });
  };

  // 提交体重记录
  handleSubmitWeight = (data: {
    weight: number;
    mood: string;
    menstruation: boolean;
    dateTime: string;
  }) => {
    const { weight, mood, menstruation, dateTime } = data;
    
    // 更新当前体重
    this.setState({
      currentWeight: weight,
    });

    // 更新打卡卡片数据
    const today = new Date().toISOString().split('T')[0];
    const newCheckinCard = {
      date: today,
      weight: weight,
      emoji: this.getMoodEmoji(mood),
    };

    this.setState((prevState) => {
      const checkinCards = [...prevState.checkinCards];
      // 检查今天是否已有记录
      const todayIndex = checkinCards.findIndex(
        (card) => card.date === today
      );
      if (todayIndex >= 0) {
        checkinCards[todayIndex] = newCheckinCard;
      } else {
        checkinCards.push(newCheckinCard);
      }

      // 更新折线图数据
      const chartData = [...prevState.chartData];
      const chartTodayIndex = chartData.findIndex(
        (item) => item.date === today
      );
      if (chartTodayIndex >= 0) {
        chartData[chartTodayIndex] = {
          ...chartData[chartTodayIndex],
          weight: weight,
        };
      } else {
        // 添加新数据点
        const labels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        const dayIndex = new Date().getDay();
        chartData.push({
          date: today,
          weight: weight,
          label: labels[dayIndex === 0 ? 6 : dayIndex - 1],
        });
      }

      return {
        checkinCards,
        chartData,
        continuousDays: this.calculateContinuousDays(checkinCards),
      };
    });

    Taro.showToast({
      title: '记录成功',
      icon: 'success',
    });
  };

  // 获取心情对应的 emoji
  getMoodEmoji = (mood: string): string => {
    const moodMap: Record<string, string> = {
      happy: '😊',
      calm: '😌',
      anxious: '😰',
      angry: '😠',
      sleepy: '😴',
    };
    return moodMap[mood] || '😊';
  };

  // 跳转到日历趋势页面
  handleGoToCalendarTrend = () => {
    const { chartData, checkinCards } = this.state;
    
    // 将打卡卡片数据转换为日历需要的格式
    const weightData = checkinCards.map(card => ({
      date: card.date,
      weight: card.weight,
    }));

    // 将数据存储到全局或通过路由参数传递
    // 这里使用 Taro 的全局数据存储
    Taro.setStorageSync('calendarTrendData', {
      currentMonthData: weightData,
      chartData: chartData,
    });

    // 使用 navigateTo 跳转到二级页面
    Taro.navigateTo({
      url: '/pages/calendar-trend/calendar-trend',
    });
  };

  // 计算连续打卡天数
  calculateContinuousDays = (
    cards: Array<{ date: string; weight: number; emoji?: string }>
  ): number => {
    if (cards.length === 0) return 0;

    // 按日期排序
    const sortedCards = [...cards].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    let continuousDays = 1;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < sortedCards.length - 1; i++) {
      const currentDate = new Date(sortedCards[i].date);
      currentDate.setHours(0, 0, 0, 0);
      const nextDate = new Date(sortedCards[i + 1].date);
      nextDate.setHours(0, 0, 0, 0);

      const diffDays = Math.floor(
        (currentDate.getTime() - nextDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diffDays === 1) {
        continuousDays++;
      } else {
        break;
      }
    }

    return continuousDays;
  };

  render() {
    const {
      currentWeight, targetWeight, initialWeight, continuousDays, chartData, checkinCards, showRecordModal,
    } = this.state;
    const progress = this.getProgress();

    return (
      <PageSkeleton className='page-index-view'>
        <Fragment key="body">
          {/* 记录体重弹窗 */}
          <RecordWeightModal
            visible={showRecordModal}
            onClose={this.handleCloseModal}
            onSubmit={this.handleSubmitWeight}
          />
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
           {/* 半圆形进度条区域 */}
           <View className='progress-section'>
            <SemiCircleProgress
              progress={progress}
              currentWeight={currentWeight}
              targetWeight={targetWeight}
              initialWeight={initialWeight}
            />
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
              <View className='trend-link' onClick={this.handleGoToCalendarTrend}>
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

           

            {/* 折线图 */}
            <View className='chart-section'>
              <LineChart data={chartData} />
            </View>
          </View>

         

          <SafeAreaView safeAreaInsetBottom />
        </Fragment>
        <Fragment key="footer">
 {/* 记录体重按钮 */}
            <Button className='record-button' onClick={this.handleRecordWeight}>
              记录体重
            </Button>
        </Fragment>
      </PageSkeleton>
    );
  }
}
