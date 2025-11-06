import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';
import {
  PageSkeleton,
  Native,
  SafeAreaView,
} from '@hb/taro-fusion-components';
import Calendar from '@/components/calendar/Calendar';
import './calendar-trend.scss';

@observer
export default class CalendarTrend extends Component {
  componentDidMount() {
    Native.hideHomeButton();
  }

  componentDidShow() {
    // 页面显示时的逻辑
  }

  render() {
    return (
      <PageSkeleton className='page-calendar-trend-view'>
        <View className='calendar-container'>
          <Calendar />
        </View>
        <SafeAreaView safeAreaInsetBottom />
      </PageSkeleton>
    );
  }
}

