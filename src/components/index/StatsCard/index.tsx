import { View, Image } from '@tarojs/components';
import classNames from 'classnames';
import React, { Component } from 'react';
import './index.scss';
import { IMG_stats_card_icon } from '@/assets/index';

interface IStatsCardProps {
    data: number;
    title: string;
    unit: string;
    className?: string;
}

class StatsCard extends Component<IStatsCardProps> {
  render() {
    const {
      data, title, unit, className,
    } = this.props;

    return (
        <View className={classNames('com-stats-card', className)}>
            <View className="data">
              {data}
              <View className='unit'>{unit}</View>
            </View>
            <View className="desc">{title}</View>
            <Image
              className="corner"
              mode="aspectFit"
              src={IMG_stats_card_icon}
            />
        </View>
    );
  }
}

export default StatsCard;
