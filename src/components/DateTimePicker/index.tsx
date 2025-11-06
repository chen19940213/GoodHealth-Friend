import React, { Component } from 'react';
import { View, Text, Button, PickerView, PickerViewColumn } from '@tarojs/components';
import './index.scss';

export interface DateTimePickerProps {
  visible: boolean;
  value?: Date; // 当前选中的日期时间
  onClose: () => void;
  onConfirm: (date: Date) => void;
}

interface DateTimePickerState {
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;
  selectedHour: number;
  selectedMinute: number;
  // 数据源
  years: number[];
  months: number[];
  days: number[];
  hours: number[];
  minutes: number[];
}

export default class DateTimePicker extends Component<
  DateTimePickerProps,
  DateTimePickerState
> {
  constructor(props: DateTimePickerProps) {
    super(props);
    const now = props.value || new Date();
    const state = this.generateInitialState(now);
    this.state = state;
  }

  // 生成初始状态
  generateInitialState = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    // 生成年份列表（当前年份前后50年）
    const years: number[] = [];
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 50; i <= currentYear + 50; i++) {
      years.push(i);
    }

    // 生成月份列表
    const months: number[] = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }

    // 生成小时列表
    const hours: number[] = [];
    for (let i = 0; i < 24; i++) {
      hours.push(i);
    }

    // 生成分钟列表
    const minutes: number[] = [];
    for (let i = 0; i < 60; i++) {
      minutes.push(i);
    }

    // 计算当前月份的天数
    const daysInMonth = this.getDaysInMonth(year, month);
    const days: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return {
      selectedYear: year,
      selectedMonth: month,
      selectedDay: day,
      selectedHour: hour,
      selectedMinute: minute,
      years,
      months,
      days,
      hours,
      minutes,
    };
  };

  // 获取某年某月的天数
  getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
  };

  // 更新天数列表（当年份或月份改变时）
  updateDays = (year: number, month: number) => {
    const daysInMonth = this.getDaysInMonth(year, month);
    const days: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    // 如果当前选中的日期大于新月份的天数，则设置为该月的最后一天
    let selectedDay = this.state.selectedDay;
    if (selectedDay > daysInMonth) {
      selectedDay = daysInMonth;
    }

    this.setState({ days, selectedDay });
  };

  // 处理选择器变化
  handleChange = (e: any) => {
    // Taro 的 PickerView onChange 事件，value 在 e.detail.value 中
    const value = e.detail?.value || e.detail || e.target?.value || [];
    const [monthIndex, dayIndex, yearIndex, hourIndex, minuteIndex] = value;

    const selectedYear = this.state.years[yearIndex];
    const selectedMonth = this.state.months[monthIndex];
    const selectedDay = this.state.days[dayIndex];
    const selectedHour = this.state.hours[hourIndex];
    const selectedMinute = this.state.minutes[minuteIndex];

    // 如果年份或月份改变，需要更新天数列表
    if (
      selectedYear !== this.state.selectedYear ||
      selectedMonth !== this.state.selectedMonth
    ) {
      this.updateDays(selectedYear, selectedMonth);
    }

    this.setState({
      selectedYear,
      selectedMonth,
      selectedDay,
      selectedHour,
      selectedMinute,
    });
  };

  // 获取当前选中的索引数组
  getCurrentValue = (): number[] => {
    const { years, months, days, hours, minutes } = this.state;
    const {
      selectedYear,
      selectedMonth,
      selectedDay,
      selectedHour,
      selectedMinute,
    } = this.state;

    // 顺序：月份、日期、年份、小时、分钟（与 PickerViewColumn 的顺序一致）
    return [
      months.indexOf(selectedMonth),
      days.indexOf(selectedDay),
      years.indexOf(selectedYear),
      hours.indexOf(selectedHour),
      minutes.indexOf(selectedMinute),
    ];
  };

  // 确认选择
  handleConfirm = () => {
    const {
      selectedYear,
      selectedMonth,
      selectedDay,
      selectedHour,
      selectedMinute,
    } = this.state;

    const date = new Date(
      selectedYear,
      selectedMonth - 1,
      selectedDay,
      selectedHour,
      selectedMinute
    );

    this.props.onConfirm(date);
  };

  // 格式化月份显示
  formatMonth = (month: number): string => {
    const monthNames = [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ];
    return monthNames[month - 1];
  };

  // 格式化数字显示（补零）
  formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  render() {
    const { visible, onClose } = this.props;
    if (!visible) {
      return null;
    }

    const {
      years,
      months,
      days,
      hours,
      minutes,
      selectedYear,
      selectedMonth,
      selectedDay,
      selectedHour,
      selectedMinute,
    } = this.state;

    const currentValue = this.getCurrentValue();

    return (
      <View className="date-time-picker">
        {/* 遮罩层 */}
        <View className="picker-mask" onClick={onClose} />

        {/* 弹窗内容 */}
        <View className="picker-content">
          {/* 头部 */}
          <View className="picker-header">
            <View className="header-back" onClick={onClose}>
              <Text className="back-icon">‹</Text>
            </View>
            <Text className="header-title">选择时间</Text>
            <View className="header-close" onClick={onClose}>
              <Text className="close-icon">×</Text>
            </View>
          </View>

          {/* 选择器 */}
          <View className="picker-body">
            <View className="picker-wrapper">
              <PickerView
                value={currentValue}
                onChange={this.handleChange}
                className="picker-view"
              >
                {/* 月份列 */}
                <PickerViewColumn>
                  {months.map((month) => (
                    <View key={month} className="picker-item">
                      <Text>{this.formatMonth(month)}</Text>
                    </View>
                  ))}
                </PickerViewColumn>

                {/* 日期列 */}
                <PickerViewColumn>
                  {days.map((day) => (
                    <View key={day} className="picker-item">
                      <Text>{day}</Text>
                    </View>
                  ))}
                </PickerViewColumn>

                {/* 年份列 */}
                <PickerViewColumn>
                  {years.map((year) => (
                    <View key={year} className="picker-item">
                      <Text>{year}</Text>
                    </View>
                  ))}
                </PickerViewColumn>

                {/* 小时列 */}
                <PickerViewColumn>
                  {hours.map((hour) => (
                    <View key={hour} className="picker-item">
                      <Text>{this.formatNumber(hour)}</Text>
                    </View>
                  ))}
                </PickerViewColumn>

                {/* 分钟列 */}
                <PickerViewColumn>
                  {minutes.map((minute) => (
                    <View key={minute} className="picker-item">
                      <Text>{this.formatNumber(minute)}</Text>
                    </View>
                  ))}
                </PickerViewColumn>
              </PickerView>
              {/* 小时和分钟之间的冒号 */}
              <View className="time-separator">
                <Text>:</Text>
              </View>
            </View>
          </View>

          {/* 底部确认按钮 */}
          <View className="picker-footer">
            <Button className="confirm-button" onClick={this.handleConfirm}>
              确认
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

