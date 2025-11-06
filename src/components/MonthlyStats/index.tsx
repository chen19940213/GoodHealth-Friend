import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss';

export interface MonthlyStatsProps {
  averageWeight: number;
  maxWeight: number;
  minWeight: number;
  weightChange: number;
}

export default class MonthlyStats extends Component<MonthlyStatsProps> {
  render() {
    const { averageWeight, maxWeight, minWeight, weightChange } = this.props;

    return (
      <View className="monthly-stats">
        <Text className="stats-title">本月数据统计</Text>
        <View className="stats-grid">
          <View className="stats-item">
            <Text className="stats-label">平均体重</Text>
            <Text className="stats-value">{averageWeight.toFixed(2)}</Text>
          </View>
          <View className="stats-item">
            <Text className="stats-label">最大体重</Text>
            <Text className="stats-value highlight">{maxWeight.toFixed(2)}</Text>
          </View>
          <View className="stats-item">
            <Text className="stats-label">最小体重</Text>
            <Text className="stats-value highlight">{minWeight.toFixed(2)}</Text>
          </View>
          <View className="stats-item">
            <Text className="stats-label">体重变化</Text>
            <Text className="stats-value">{weightChange.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    );
  }
}

