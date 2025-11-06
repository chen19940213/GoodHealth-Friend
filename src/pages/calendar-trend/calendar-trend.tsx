import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import PageSkeleton from '@/components/PageSkeleton';
import Calendar from '@/components/calendar/Calendar';
import TrendChart from '@/components/TrendChart';
import MonthlyStats from '@/components/MonthlyStats';
import './calendar-trend.scss';

interface CalendarTrendState {
  activeTab: 'calendar' | 'trend';
  // 当前月体重数据
  currentMonthData: Array<{ date: string; weight: number }>;
  // 上月体重数据
  lastMonthData: Array<{ date: string; weight: number }>;
  // 本月统计数据
  monthlyStats: {
    averageWeight: number;
    maxWeight: number;
    minWeight: number;
    weightChange: number;
  };
  // 当前显示的月份
  currentMonth: string;
  // 胶囊按钮信息
  capsuleTop: number;
  capsuleHeight: number;
}

@observer
export default class CalendarTrend extends Component<{}, CalendarTrendState> {
  constructor(props: {}) {
    super(props);
    // 从路由参数或全局状态获取数据，这里先用模拟数据
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    this.state = {
      activeTab: 'calendar',
      currentMonthData: this.getMockCurrentMonthData(),
      lastMonthData: this.getMockLastMonthData(),
      monthlyStats: {
        averageWeight: 40.50,
        maxWeight: 41.20,
        minWeight: 40.00,
        weightChange: 0.50,
      },
      currentMonth: `${year}年${month}月`,
      capsuleTop: 0,
      capsuleHeight: 0,
    };
  }

  componentDidMount() {
    this.loadData();
    this.setCapsuleInfo();
  }

  componentDidShow() {
    // 页面显示时重新加载数据
    this.loadData();
  }

  // 设置胶囊按钮信息
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

  // 加载数据（从存储中获取或使用模拟数据）
  loadData = () => {
    try {
      // 从存储中获取数据
      const storedData = Taro.getStorageSync('calendarTrendData');
      if (storedData && storedData.currentMonthData) {
        const currentMonthData = storedData.currentMonthData || [];
        const chartData = storedData.chartData || [];
        
        // 计算上月数据（从当前月数据推算或使用模拟数据）
        const lastMonthData = this.getMockLastMonthData();
        
        // 计算统计数据
        const monthlyStats = this.calculateMonthlyStatsFromData(currentMonthData);
        
        this.setState({
          currentMonthData,
          lastMonthData,
          monthlyStats,
        });
        return;
      }
    } catch (error) {
      console.warn('获取存储数据失败:', error);
    }

    // 如果没有存储数据，使用模拟数据
    this.setState({
      currentMonthData: this.getMockCurrentMonthData(),
      lastMonthData: this.getMockLastMonthData(),
      monthlyStats: {
        averageWeight: 40.50,
        maxWeight: 41.20,
        minWeight: 40.00,
        weightChange: 0.50,
      },
    });
  };

  // 从数据计算统计数据
  calculateMonthlyStatsFromData = (data: Array<{ date: string; weight: number }>) => {
    if (data.length === 0) {
      return {
        averageWeight: 0,
        maxWeight: 0,
        minWeight: 0,
        weightChange: 0,
      };
    }

    const weights = data.map(item => item.weight);
    const averageWeight = weights.reduce((sum, w) => sum + w, 0) / weights.length;
    const maxWeight = Math.max(...weights);
    const minWeight = Math.min(...weights);
    const weightChange = maxWeight - minWeight;

    return {
      averageWeight,
      maxWeight,
      minWeight,
      weightChange,
    };
  };

  // 模拟当前月数据
  getMockCurrentMonthData = (): Array<{ date: string; weight: number }> => {
    const data: Array<{ date: string; weight: number }> = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    
    // 模拟一些有体重数据的日期
    const daysWithData = [2, 4, 7, 18, 20, 29];
    daysWithData.forEach(day => {
      data.push({
        date: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        weight: 40.0 + (day % 10) * 0.1,
      });
    });
    
    return data;
  };

  // 模拟上月数据
  getMockLastMonthData = (): Array<{ date: string; weight: number }> => {
    const data: Array<{ date: string; weight: number }> = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 上月
    const lastMonth = month === 0 ? 12 : month;
    const lastYear = month === 0 ? year - 1 : year;
    
    // 模拟一些有体重数据的日期
    const daysWithData = [1, 5, 10, 15, 20, 25];
    daysWithData.forEach(day => {
      data.push({
        date: `${lastYear}-${String(lastMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
        weight: 40.5 + (day % 10) * 0.1,
      });
    });
    
    return data;
  };

  // 返回上一页
  handleBack = () => {
    Taro.navigateBack();
  };

  // 切换 tab
  handleTabChange = (tab: 'calendar' | 'trend') => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab, currentMonthData, lastMonthData, monthlyStats, capsuleTop, capsuleHeight } = this.state;

    return (
      <PageSkeleton className="page-calendar-trend-view">
        <Fragment key="header">
          <View className="header-wrapper">
            {/* 导航栏 */}
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
            <View className="nav-title">
              <Text className="title-text">{this.state.currentMonth}</Text>
            </View>
            <View className="nav-actions">
              <View className="action-icon">
                <Text className="icon-text">⋯</Text>
              </View>
              <View className="action-icon">
                <Text className="icon-text">⚙</Text>
              </View>
            </View>
          </View>
          {/* Tab 切换 */}
          <View 
            className="tab-header"
            style={{ 
              marginTop: capsuleTop && capsuleHeight ? `${capsuleTop + capsuleHeight}px` : '0',
            }}
          >
            <View className="tab-container">
              <View
                className={`tab-item ${activeTab === 'calendar' ? 'active' : ''}`}
                onClick={() => this.handleTabChange('calendar')}
              >
                <Text className="tab-text">日历</Text>
              </View>
              <View
                className={`tab-item ${activeTab === 'trend' ? 'active' : ''}`}
                onClick={() => this.handleTabChange('trend')}
              >
                <Text className="tab-text">趋势</Text>
              </View>
            </View>
          </View>
          </View>
        </Fragment>
        <Fragment key="body">
          {/* 日历或趋势内容 */}
          <View className="content-section">
            {activeTab === 'calendar' ? (
              <View className="calendar-wrapper">
                <Calendar weightData={currentMonthData} />
              </View>
            ) : (
              <View className="trend-wrapper">
                <View className="trend-header">
                  <Text className="trend-title">趋势</Text>
                  <Text className="trend-summary">
                    本周到目前为止,体重比上月少 <Text className="highlight">2.65</Text> 公斤
                  </Text>
                  <View className="trend-legend">
                    <View className="legend-item">
                      <View className="legend-dot pink" />
                      <Text className="legend-text">本月重量</Text>
                    </View>
                    <View className="legend-item">
                      <View className="legend-dot gray" />
                      <Text className="legend-text">上月体重</Text>
                    </View>
                  </View>
                </View>
                <TrendChart
                  currentMonthData={currentMonthData}
                  lastMonthData={lastMonthData}
                />
              </View>
            )}
          </View>

          {/* 本月数据统计 */}
          <MonthlyStats
            averageWeight={monthlyStats.averageWeight}
            maxWeight={monthlyStats.maxWeight}
            minWeight={monthlyStats.minWeight}
            weightChange={monthlyStats.weightChange}
          />
        </Fragment>
      </PageSkeleton>
    );
  }
}
