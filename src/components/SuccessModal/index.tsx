import React, { Component } from 'react';
import { View, Text, Button } from '@tarojs/components';
import './index.scss';

export interface SuccessModalProps {
  visible: boolean;
  weight: number;
  onClose: () => void;
  onComplete?: () => void;
}

export default class SuccessModal extends Component<SuccessModalProps> {
  // 格式化体重显示
  formatWeight = (weight: number): { integer: string; decimal: string } => {
    const weightStr = weight.toFixed(2);
    const parts = weightStr.split('.');
    return {
      integer: parts[0],
      decimal: `.${parts[1]}`,
    };
  };

  // 完成按钮点击
  handleComplete = () => {
    const { onComplete, onClose } = this.props;
    if (onComplete) {
      onComplete();
    }
    onClose();
  };

  render() {
    const { visible, weight, onClose } = this.props;
    if (!visible) {
      return null;
    }

    const { integer, decimal } = this.formatWeight(weight);

    return (
      <View className="success-modal">
        {/* 遮罩层 */}
        <View className="modal-mask" onClick={onClose} />

        {/* 弹窗内容 */}
        <View className="modal-content">
          {/* 关闭按钮 */}
          <View className="close-button" onClick={onClose}>
            <View className="close-icon" />
          </View>

          {/* 标题 */}
          <Text className="modal-title">太棒啦!</Text>
          <Text className="modal-subtitle">你已经完成了一次体重记录!</Text>

          {/* 体重显示 */}
          <View className="weight-display">
            <Text className="weight-integer">{integer}</Text>
            <Text className="weight-decimal">{decimal} kg</Text>
          </View>

          {/* 提示文字 */}
          <Text className="motivational-text">
            你的身体需要时间适应, 别对自己太苛刻!
          </Text>

          {/* 完成按钮 */}
          <Button className="complete-button" onClick={this.handleComplete}>
            完成
          </Button>
        </View>
      </View>
    );
  }
}

