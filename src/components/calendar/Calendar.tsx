import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import dayjs from 'dayjs';
import './Calendar.scss';

interface CalendarProps {
  onDateSelect?: (date: string) => void;
  weightData?: Array<{ date: string; weight: number }>; // 体重数据
}

interface CalendarState {
  currentMonth: dayjs.Dayjs;
  selectedDate: string;
}

export default class Calendar extends Component<CalendarProps, CalendarState> {
  weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  constructor(props: CalendarProps) {
    super(props);
    this.state = {
      currentMonth: dayjs(),
      selectedDate: dayjs().format('YYYY-MM-DD'),
    };
  }

  // 获取当前月份的所有日期（只显示当月）
  getDaysInMonth = () => {
    const { currentMonth } = this.state;
    const startOfMonth = currentMonth.startOf('month');
    const daysInMonth = currentMonth.daysInMonth();
    const startDay = startOfMonth.day(); // 0-6, 0是周日

    const days: Array<{ date: string; day: number; isCurrentMonth: boolean; isToday: boolean; isEmpty: boolean }> = [];

    // 填充前面的空白位置（不显示其他月份的日期）
    for (let i = 0; i < startDay; i++) {
      days.push({
        date: '',
        day: 0,
        isCurrentMonth: false,
        isToday: false,
        isEmpty: true,
      });
    }

    // 当前月的日期
    const today = dayjs().format('YYYY-MM-DD');
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = currentMonth.date(i).format('YYYY-MM-DD');
      days.push({
        date: dateStr,
        day: i,
        isCurrentMonth: true,
        isToday: dateStr === today,
        isEmpty: false,
      });
    }

    return days;
  };

  // 切换月份
  handlePrevMonth = () => {
    this.setState({
      currentMonth: this.state.currentMonth.subtract(1, 'month'),
    });
  };

  handleNextMonth = () => {
    this.setState({
      currentMonth: this.state.currentMonth.add(1, 'month'),
    });
  };

  // 选择日期
  handleDateSelect = (date: string) => {
    this.setState({ selectedDate: date });
    if (this.props.onDateSelect) {
      this.props.onDateSelect(date);
    }
  };

  // 获取日期对应的体重数据
  getDayWeight = (date: string) => {
    if (!date) return null;
    
    const { weightData } = this.props;
    if (!weightData || weightData.length === 0) return null;
    
    const data = weightData.find(item => item.date === date);
    return data ? data.weight.toFixed(2) : null;
  };

  // 判断日期是否有星星标记（可以根据实际需求判断，比如特殊日期）
  hasStar = (date: string) => {
    // 这里可以根据实际需求判断，比如标记特殊日期
    // 暂时返回 false
    return false;
  };

  render() {
    const { currentMonth, selectedDate } = this.state;
    const days = this.getDaysInMonth();

    return (
      <View className='calendar'>
        {/* 月份导航 */}
        <View className='calendar-header'>
          <View className='month-nav' onClick={this.handlePrevMonth}>
            <Text className='nav-icon'>‹</Text>
          </View>
          <View className='month-title'>
            <Text className='month-text'>{currentMonth.format('YYYY年MM月')}</Text>
          </View>
          <View className='month-nav' onClick={this.handleNextMonth}>
            <Text className='nav-icon'>›</Text>
          </View>
        </View>

        {/* 星期标题 */}
        <View className='calendar-weekdays'>
          {this.weekDays.map((day) => (
            <View key={day} className='weekday'>
              <Text className='weekday-text'>{day}</Text>
            </View>
          ))}
        </View>

        {/* 日期网格 */}
        <View className='calendar-days'>
          {days.map((item, index) => {
            // 如果是空位，不渲染内容
            if (item.isEmpty) {
              return (
                <View
                  key={`empty-${index}`}
                  className='calendar-day empty'
                />
              );
            }

            const weight = this.getDayWeight(item.date);
            const hasStarMark = this.hasStar(item.date);
            const isSelected = item.date === selectedDate;
            const hasWeight = weight !== null && weight !== '';

            // 检查下一个日期是否也有体重数据（用于显示连接线）
            let hasNextWeight = false;
            if (index < days.length - 1 && !days[index + 1].isEmpty) {
              const nextWeight = this.getDayWeight(days[index + 1].date);
              hasNextWeight = nextWeight !== null && nextWeight !== '';
            }

            return (
              <View
                key={`${item.date}-${index}`}
                className={`calendar-day ${
                  item.isToday ? 'today' : ''
                } ${isSelected ? 'selected' : ''} ${
                  hasWeight ? 'has-weight' : ''
                } ${hasWeight && hasNextWeight ? 'has-connection' : ''}`}
                onClick={() => this.handleDateSelect(item.date)}
              >
                <View className='day-circle'>
                  <Text className='day-text'>{item.day}</Text>
                  {hasStarMark && (
                    <View className='day-star'>
                      <Text>⭐</Text>
                    </View>
                  )}
                </View>
                {/* 每个日期下方都显示备注区域 */}
                <View className='day-weight-container'>
                  {hasWeight ? (
                    <Text className='day-weight'>{weight}</Text>
                  ) : (
                    <Text className='day-weight-placeholder' />
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

