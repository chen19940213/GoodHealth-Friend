import React, { Component } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import * as echarts from 'echarts';
import './SemiCircleProgress.scss';

interface SemiCircleProgressProps {
  progress: number; // 0-100
  currentWeight: number;
  targetWeight: number;
  initialWeight: number;
}

interface SemiCircleProgressState {
  ec: {
    onInit: (canvas: any, width: number, height: number) => any;
  };
}

export default class SemiCircleProgress extends Component<SemiCircleProgressProps, SemiCircleProgressState> {
  private chart: any = null;
  private canvasId = `semi-circle-${Date.now()}`;
  private canvasWidth = 276;
  private canvasHeight = 276;

  constructor(props: SemiCircleProgressProps) {
    super(props);
    this.state = {
      ec: {
        onInit: this.initChart.bind(this),
      },
    };
  }

  componentDidUpdate() {
    if (this.chart) {
      this.updateChart();
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }

  initChart = (canvas: any, width: number, height: number, dpr?: number) => {
    // 使用传入的 width 和 height，如果没有则使用默认值
    const canvasWidth = width || this.canvasWidth;
    const canvasHeight = height || this.canvasHeight;
    const pixelRatio = dpr || Taro.getSystemInfoSync().pixelRatio || 1;

    // 为 canvas 对象添加 DOM 兼容方法，使用 Object.defineProperty 确保方法不可被覆盖
    const methods = {
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() { return true; },
      getBoundingClientRect: function() {
        return {
          left: 0,
          top: 0,
          width: canvasWidth,
          height: canvasHeight,
          right: canvasWidth,
          bottom: canvasHeight,
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
    
    if (!canvas.style) {
      Object.defineProperty(canvas, 'style', {
        value: {
          position: 'relative',
          left: '0',
          top: '0',
          width: `${canvasWidth}px`,
          height: `${canvasHeight}px`,
        },
        writable: false,
        enumerable: false,
        configurable: true,
      });
    }
    
    // 如果 canvas 有 canvasNode 属性，也需要为它添加方法
    if (canvas.canvasNode && !canvas.canvasNode.addEventListener) {
      Object.keys(methods).forEach((key) => {
        if (!canvas.canvasNode[key]) {
          Object.defineProperty(canvas.canvasNode, key, {
            value: methods[key],
            writable: false,
            enumerable: false,
            configurable: true,
          });
        }
      });
    }

    this.chart = echarts.init(canvas, null, {
      width: canvasWidth,
      height: canvasHeight,
      devicePixelRatio: pixelRatio,
    });
    canvas.setChart(this.chart);
    this.renderChart();
    return this.chart;
  };

  renderChart = () => {
    if (!this.chart) return;

    const { progress } = this.props;

    const option = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 240,
          splitNumber: false,
          progress: {
            show: true,
            roundCap: true,
            width: 9
          },
         splitLine: {
             show: false  // 完全隐藏分割线
           },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 9
            }
          },
          axisTick: {
            splitNumber: 0,
            lineStyle: {
              width: 0,
              color: '#999'
            }
          },
         
          axisLabel: {
            distance: 30,
            color: '#999',
            fontSize: 20,
            show:false
          },
          data: [
            {
              value: 100,
              show:false
            }
          ],
          pointer:{
            show:false
          },
          detail: {
               show: false  // 隐藏详情标签（通常显示在中心）
           },
        }
      ]
    };

    this.chart.setOption(option);
  };

  updateChart = () => {
    this.renderChart();
  };

  render() {
    const { currentWeight, targetWeight, initialWeight } = this.props;

    return (
      <View className='semi-circle-progress'>
        <View className='progress-container'>
          {/* Canvas 进度条 */}
          <View className='progress-bg'>
            {/* @ts-ignore */}
            <ec-canvas
              id={this.canvasId}
              canvas-id={this.canvasId}
              echarts={echarts}
              ec={this.state.ec}
              style={{ width: '276px', height: '276px' }}
              className='progress-canvas'
            />
          </View>

          {/* 中心内容 */}
          <View className='progress-content'>
            <View className='current-weight'>{currentWeight.toFixed(2)}</View>
            <View className='weight-label'>最新 (公斤)</View>
          </View>

        
        </View>

        {/* 底部信息 */}
        <View className='weight-info'>
          <View className='info-item'>
            <View className='info-value'>{initialWeight.toFixed(2)}</View>
            <View className='info-label'>初始体重</View>
          </View>
          <View className='info-item'>
            <View className='info-value'>{targetWeight.toFixed(2)}</View>
            <View className='info-label'>目标体重</View>
          </View>
        </View>
      </View>
    );
  }
}

