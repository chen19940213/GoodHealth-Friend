import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import * as echarts from 'echarts';
import './index.scss';

interface TrendChartProps {
  currentMonthData: Array<{ date: string; weight: number }>;
  lastMonthData: Array<{ date: string; weight: number }>;
}

interface TrendChartState {
  ec: {
    onInit: (canvas: any, width: number, height: number, dpr?: number) => any;
  };
}

export default class TrendChart extends Component<TrendChartProps, TrendChartState> {
  private chart: any = null;
  private canvasId = `trend-chart-${Date.now()}`;

  constructor(props: TrendChartProps) {
    super(props);
    this.state = {
      ec: {
        onInit: this.initChart.bind(this),
      },
    };
  }

  componentDidUpdate(prevProps: TrendChartProps) {
    if (this.chart && (prevProps.currentMonthData !== this.props.currentMonthData || 
        prevProps.lastMonthData !== this.props.lastMonthData)) {
      this.updateChart();
    }
  }

  initChart = (canvas: any, width: number, height: number, dpr?: number) => {
    // 为 canvas 对象添加 DOM 兼容方法
    const methods = {
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() { return true; },
      getBoundingClientRect: function() {
        return {
          left: 0,
          top: 0,
          width: width,
          height: height,
          right: width,
          bottom: height,
        };
      },
    };
    
    Object.keys(methods).forEach((key) => {
      if (!canvas[key]) {
        Object.defineProperty(canvas, key, {
          value: methods[key],
          writable: false,
          enumerable: false,
          configurable: true,
        });
      }
    });

    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr || Taro.getSystemInfoSync().pixelRatio || 1,
    });
    canvas.setChart(chart);
    this.chart = chart;
    this.updateChart();
    return chart;
  };

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }

  updateChart = () => {
    if (!this.chart) return;

    const { currentMonthData, lastMonthData } = this.props;

    // 生成日期数组（当前月份的所有日期）
    const dates: string[] = [];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const daysInMonth = new Date(year, month, 0).getDate();
    
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(`${month}/${i}`);
    }

    // 处理当前月数据
    const currentMonthWeights = dates.map((_, index) => {
      const day = index + 1;
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const data = currentMonthData.find(d => d.date === dateStr);
      return data ? data.weight : null;
    });

    // 处理上月数据
    const lastMonthWeights = dates.map((_, index) => {
      const day = index + 1;
      const lastMonth = month === 1 ? 12 : month - 1;
      const lastYear = month === 1 ? year - 1 : year;
      const dateStr = `${lastYear}-${String(lastMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const data = lastMonthData.find(d => d.date === dateStr);
      return data ? data.weight : null;
    });

    // 计算初始显示范围（显示前7天）
    const initialEndPercent = daysInMonth > 7 ? (7 / daysInMonth) * 100 : 100;

    const option = {
      // 标题、图例等配置
      legend: {
        data: ['本月重量', '上月体重']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
      },
      // X 轴配置
      xAxis: {
        type: 'category',
        data: dates,
        boundaryGap: false  // 数据点对齐刻度线
      },
      // Y 轴配置
      yAxis: {
        type: 'value',
        name: '公斤',
        min: 0,
        max: 90
      },
      // 数据缩放配置 - 关键部分
      dataZoom: [
        {
          type: 'slider',  // 滑块型数据缩放组件
          xAxisIndex: 0,  // 控制第 0 个 X 轴
          start: 0,       // 初始显示范围起始位置（百分比）
          end: initialEndPercent,  // 初始显示范围结束位置（显示前 7 条）
          height: 20,      // 滑块高度
          bottom: 10,      // 距离底部距离
          handleIcon: 'path://M30.9,48.6L16.8,34.5c-0.6-0.6-0.6-1.5,0-2.1L30.9,18.3c0.6-0.6,1.5-0.6,2.1,0l14.1,14.1c0.6,0.6,0.6,1.5,0,2.1L33,48.6C32.4,49.2,31.5,49.2,30.9,48.6z',
          handleSize: '80%',
          handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          textStyle: {
            color: '#999'
          },
          borderColor: '#ccc',
          fillerColor: 'rgba(0,0,0,0.1)',
          dataBackground: {
            lineStyle: {
              color: '#ccc'
            },
            areaStyle: {
              color: 'rgba(0,0,0,0.1)'
            }
          },
          selectedDataBackground: {
            lineStyle: {
              color: '#409EFF'
            },
            areaStyle: {
              color: 'rgba(64,158,255,0.2)'
            }
          },
          // 支持触摸拖动
          moveHandleSize: 8,
          moveOnMouseMove: true,
          preventDefaultMouseMove: true
        },
        {
          type: 'inside',  // 内置型数据缩放，支持触摸拖动和平移
          xAxisIndex: 0,
          start: 0,
          end: initialEndPercent,
          // 支持触摸操作
          zoomOnMouseWheel: true,
          moveOnMouseMove: true,
          moveOnMouseWheel: true
        }
      ],
      // 系列配置
      series: [
        {
          name: '本月重量',
          type: 'line',
          data: currentMonthWeights,
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#ff0000'
          },
          lineStyle: {
            color: '#ff0000',
            width: 2
          },
          // 关键：添加底部阴影
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(255, 0, 0, 0.3)'  // 顶部透明度较高
                },
                {
                  offset: 1,
                  color: 'rgba(255, 0, 0, 0.05)'  // 底部透明度较低
                }
              ]
            }
          },
          emphasis: {
            focus: 'series',
            itemStyle: {
              borderWidth: 2,
              borderColor: '#fff'
            }
          }
        },
        {
          name: '上月体重',
          type: 'line',
          data: lastMonthWeights,
          smooth: true,
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#999999'
          },
          lineStyle: {
            color: '#999999',
            width: 2
          },
          emphasis: {
            focus: 'series',
            itemStyle: {
              borderWidth: 2,
              borderColor: '#fff'
            }
          }
        }
      ],
      // 提示框配置
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      }
    };

    this.chart.setOption(option);
  };

  render() {
    return (
      <View className="trend-chart">
        {/* @ts-ignore */}
        <ec-canvas
          id={this.canvasId}
          canvas-id={this.canvasId}
          echarts={echarts}
          ec={this.state.ec}
          className="chart-canvas"
        />
      </View>
    );
  }
}

