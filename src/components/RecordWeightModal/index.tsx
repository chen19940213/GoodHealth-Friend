import React, { Component } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import DateTimePicker from '@/components/DateTimePicker';
import SuccessModal from '@/components/SuccessModal';
import './index.scss';

export interface RecordWeightModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    weight: number;
    mood: string;
    menstruation: boolean;
    dateTime: string;
  }) => void;
}

interface RecordWeightModalState {
  weight: string; // 当前输入的体重字符串
  selectedMood: string; // 选中的心情
  menstruation: boolean; // 大姨妈开关
  dateTime: string; // 日期时间
  selectedDate: Date; // 选中的日期对象
  showDateTimePicker: boolean; // 显示时间选择器
  showSuccessModal: boolean; // 显示成功提示弹窗
}

const MOODS = [
  { key: 'happy', label: '开心', emoji: '😊' },
  { key: 'calm', label: '平静', emoji: '😌' },
  { key: 'anxious', label: '焦虑', emoji: '😰' },
  { key: 'angry', label: '愤怒', emoji: '😠' },
  { key: 'sleepy', label: '困倦', emoji: '😴' },
];

export default class RecordWeightModal extends Component<
  RecordWeightModalProps,
  RecordWeightModalState
> {
  constructor(props: RecordWeightModalProps) {
    super(props);
    const now = new Date();
    this.state = {
      weight: '50.00',
      selectedMood: 'calm',
      menstruation: true,
      dateTime: this.formatDateTime(now),
      selectedDate: now,
      showDateTimePicker: false,
      showSuccessModal: false,
    };
  }

  // 组件挂载后，如果 visible 为 true，隐藏 tabbar
  componentDidMount() {
    if (this.props.visible) {
      this.hideTabBar();
    }
  }

  // 监听 visible 变化，控制 tabbar 显示/隐藏
  componentDidUpdate(prevProps: RecordWeightModalProps) {
    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        this.hideTabBar();
      } else {
        this.showTabBar();
      }
    }
  }

  // 组件卸载时恢复 tabbar
  componentWillUnmount() {
    this.showTabBar();
  }

  // 隐藏 tabbar
  hideTabBar = () => {
    try {
      Taro.hideTabBar({
        animation: false,
      });
    } catch (error) {
      console.warn('隐藏 tabbar 失败:', error);
    }
  };

  // 显示 tabbar
  showTabBar = () => {
    try {
      Taro.showTabBar({
        animation: false,
      });
    } catch (error) {
      console.warn('显示 tabbar 失败:', error);
    }
  };

  // 格式化日期时间显示
  formatDateTime = (date: Date): string => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const selectedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // 判断是否是今天
    if (selectedDate.getTime() === today.getTime()) {
      return `今天 ${hours}:${minutes < 10 ? '0' : ''}${minutes} /`;
    } else {
      return `${month}月${day}日 ${hours}:${minutes < 10 ? '0' : ''}${minutes} /`;
    }
  };

  // 处理数字输入
  handleNumberInput = (value: string) => {
    const { weight } = this.state;
    let newWeight = weight;

    if (value === 'clear') {
      // 清空
      newWeight = '0.00';
    } else if (value === '.') {
      // 小数点
      if (!newWeight.includes('.')) {
        newWeight = newWeight + '.';
      }
    } else {
      // 数字
      if (newWeight === '0.00' || newWeight === '0') {
        newWeight = value;
      } else {
        // 检查是否已经有小数点
        if (newWeight.includes('.')) {
          const parts = newWeight.split('.');
          // 限制小数点后两位
          if (parts[1] && parts[1].length < 2) {
            newWeight = newWeight + value;
          } else if (parts[1] && parts[1].length >= 2) {
            // 已经两位小数，不添加
            return;
          } else {
            newWeight = newWeight + value;
          }
        } else {
          // 没有小数点，可以继续添加数字
          newWeight = newWeight + value;
        }
      }
    }

    // 格式化显示（确保有两位小数）
    if (!newWeight.includes('.')) {
      newWeight = newWeight + '.00';
    } else {
      const parts = newWeight.split('.');
      if (parts[1].length === 0) {
        newWeight = newWeight + '00';
      } else if (parts[1].length === 1) {
        newWeight = newWeight + '0';
      }
    }

    this.setState({ weight: newWeight });
  };

  // 选择心情
  handleSelectMood = (moodKey: string) => {
    this.setState({ selectedMood: moodKey });
  };

  // 切换大姨妈开关
  handleToggleMenstruation = () => {
    this.setState((prevState) => ({
      menstruation: !prevState.menstruation,
    }));
  };

  // 处理日期时间选择
  handleDateTimeSelect = () => {
    this.setState({ showDateTimePicker: true });
  };

  // 关闭时间选择器
  handleCloseDateTimePicker = () => {
    this.setState({ showDateTimePicker: false });
  };

  // 确认时间选择
  handleDateTimeConfirm = (date: Date) => {
    this.setState({
      selectedDate: date,
      dateTime: this.formatDateTime(date),
      showDateTimePicker: false,
    });
  };

  // 提交
  handleSubmit = () => {
    const { weight, selectedMood, menstruation, dateTime } = this.state;
    const { onSubmit } = this.props;

    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) {
      Taro.showToast({
        title: '请输入有效的体重',
        icon: 'none',
      });
      return;
    }

    // 先显示成功弹窗
    this.setState({ showSuccessModal: true });
  };

  // 成功弹窗完成回调
  handleSuccessComplete = () => {
    const { weight, selectedMood, menstruation, dateTime } = this.state;
    const { onSubmit } = this.props;

    const weightNum = parseFloat(weight);
    if (onSubmit) {
      onSubmit({
        weight: weightNum,
        mood: selectedMood,
        menstruation,
        dateTime,
      });
    }

    // 关闭成功弹窗和主弹窗
    this.setState({ showSuccessModal: false });
    this.props.onClose();
  };

  // 关闭成功弹窗
  handleCloseSuccessModal = () => {
    this.setState({ showSuccessModal: false });
  };

  // 格式化体重显示
  formatWeightDisplay = () => {
    const { weight } = this.state;
    if (!weight.includes('.')) {
      return `${weight}.00 kg`;
    }
    const parts = weight.split('.');
    const integerPart = parts[0];
    const decimalPart = parts[1] || '00';
    return `${integerPart}.${decimalPart.padEnd(2, '0')} kg`;
  };

  render() {
    const { visible, onClose } = this.props;
    const {
      selectedMood,
      menstruation,
      dateTime,
      showDateTimePicker,
      showSuccessModal,
      selectedDate,
      weight,
    } = this.state;
    const weightDisplay = this.formatWeightDisplay();
    const weightInteger = weightDisplay.split('.')[0];
    const weightDecimal = '.' + weightDisplay.split('.')[1];

    if (!visible) {
      return null;
    }

    return (
      <View className="record-weight-modal">
        {/* 时间选择器弹窗 */}
        <DateTimePicker
          visible={showDateTimePicker}
          value={selectedDate}
          onClose={this.handleCloseDateTimePicker}
          onConfirm={this.handleDateTimeConfirm}
        />

        {/* 成功提示弹窗 */}
        <SuccessModal
          visible={showSuccessModal}
          weight={parseFloat(weight)}
          onClose={this.handleCloseSuccessModal}
          onComplete={this.handleSuccessComplete}
        />
        {/* 遮罩层 */}
        <View className="modal-mask" onClick={onClose} />

        {/* 弹窗内容 */}
        <View className="modal-content">
          {/* 顶部区域 */}
          <View className="modal-header">
            <View className="header-left">
              <View className="header-icon">
                <View className="icon-scale" />
                <View className="icon-badge">RECORD</View>
              </View>
              <Text className="header-title">记录体重</Text>
            </View>
            <View className="header-close" onClick={onClose}>
              <Text className="close-icon">×</Text>
            </View>
          </View>

          {/* 日期时间选择 */}
          <View className="date-time-selector" onClick={this.handleDateTimeSelect}>
            <Text className="date-time-text">{dateTime}</Text>
          </View>

          {/* 心情选择 */}
          <View className="mood-section">
            <Text className="section-label">心情</Text>
            <View className="mood-options">
              {MOODS.map((mood) => (
                <View
                  key={mood.key}
                  className={`mood-item ${selectedMood === mood.key ? 'active' : ''}`}
                  onClick={() => this.handleSelectMood(mood.key)}
                >
                  <View className="mood-indicator" />
                  <Text className="mood-label">{mood.label}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* 大姨妈开关 */}
          <View className="menstruation-section">
            <Text className="section-label">大姨妈</Text>
            <View
              className={`toggle-switch ${menstruation ? 'on' : 'off'}`}
              onClick={this.handleToggleMenstruation}
            >
              <View className="toggle-handle" />
            </View>
          </View>

          {/* 体重显示 */}
          <View className="weight-display">
            <Text className="weight-integer">{weightInteger}</Text>
            <Text className="weight-decimal">{weightDecimal}</Text>
          </View>

          {/* 数字键盘 */}
          <View className="keypad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <View
                key={num}
                className="keypad-button"
                onClick={() => this.handleNumberInput(num.toString())}
              >
                <Text className="keypad-text">{num}</Text>
              </View>
            ))}
            <View
              className="keypad-button"
              onClick={() => this.handleNumberInput('.')}
            >
              <Text className="keypad-text">.</Text>
            </View>
            <View
              className="keypad-button"
              onClick={() => this.handleNumberInput('0')}
            >
              <Text className="keypad-text">0</Text>
            </View>
            <View
              className="keypad-button"
              onClick={() => this.handleNumberInput('clear')}
            >
              <Text className="keypad-text">清空</Text>
            </View>
          </View>

          {/* 打卡按钮 */}
          <Button className="submit-button" onClick={this.handleSubmit}>
            打卡
          </Button>
        </View>
      </View>
    );
  }
}

