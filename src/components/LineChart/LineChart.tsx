import React, { Component } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import * as echarts from 'echarts';
import './LineChart.scss';

interface LineChartData {
  date: string;
  weight: number;
  label: string;
}

interface LineChartProps {
  data: LineChartData[];
  width?: number;
  height?: number;
}

interface LineChartState {
  ec: {
    onInit: (canvas: any, width: number, height: number, dpr?: number) => any;
  };
}

export default class LineChart extends Component<LineChartProps, LineChartState> {
  static defaultProps = {
    width: 614,
    height: 106,
  };

  private chart: any = null;
  private canvasId = `line-chart-${Date.now()}`;
  private canvasWidth = 614;
  private canvasHeight = 106;

  constructor(props: LineChartProps) {
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
    const { data, width: propWidth = 614, height: propHeight = 106 } = this.props;
    if (!data || data.length === 0) {
      console.warn('LineChart: 数据为空，无法初始化图表');
      return null;
    }

    // 使用传入的 width 和 height，如果没有则使用 props 中的值
    const canvasWidth = width || propWidth;
    const canvasHeight = height || propHeight;
    const pixelRatio = dpr || Taro.getSystemInfoSync().pixelRatio || 1;

    console.log('LineChart: 初始化图表', { canvasWidth, canvasHeight, pixelRatio, dataLength: data.length });

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

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

    try {
      this.chart = echarts.init(canvas, null, {
        width: canvasWidth,
        height: canvasHeight,
        devicePixelRatio: pixelRatio,
      });
      canvas.setChart(this.chart);
      this.renderChart();
      console.log('LineChart: 图表初始化成功', this.chart);
      return this.chart;
    } catch (error) {
      console.error('LineChart: 图表初始化失败', error);
      return null;
    }
  };

  renderChart = () => {
    if (!this.chart) {
      console.warn('LineChart: chart 实例不存在，无法渲染');
      return;
    }

    const { data } = this.props;
    if (!data || data.length === 0) {
      console.warn('LineChart: 数据为空，无法渲染');
      return;
    }

    // 计算数据范围
    const weights = data.map((d) => d.weight);
    const minWeight = Math.min(...weights);
    const maxWeight = Math.max(...weights);
    const weightRange = maxWeight - minWeight || 1;
    const padding = weightRange * 0.1;

    const option = {
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'category',
        data: data.map((d) => d.label),
        show: false,
      },
      yAxis: {
        type: 'value',
        min: minWeight - padding,
        max: maxWeight + padding,
        show: false,
      },
      series: [
        {
          type: 'line',
          data: weights,
          smooth: true,
          lineStyle: {
            color: '#FF688A',
            width: 2,
          },
          itemStyle: {
            color: '#FF688A',
            borderColor: '#FFFFFF',
            borderWidth: 2,
          },
          symbol: 'circle',
          symbolSize: 8,
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
                  color: 'rgba(255, 80, 120, 0.13)',
                },
                {
                  offset: 1,
                  color: 'rgba(255, 255, 255, 0)',
                },
              ],
            },
          },
        },
      ],
    };

    try {
      this.chart.setOption(option);
      console.log('LineChart: 图表配置已更新', option);
    } catch (error) {
      console.error('LineChart: 设置图表配置失败', error);
    }
  };

  updateChart = () => {
    if (this.chart) {
      this.renderChart();
    }
  };

  render() {
    const { data, width = 614, height = 106 } = this.props;
    if (!data || data.length === 0) {
      console.warn('LineChart: render 时数据为空');
      return (
        <View className='line-chart'>
          <View className='chart-container'>
            <View style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
              暂无数据
            </View>
          </View>
        </View>
      );
    }

    console.log('LineChart: render', { dataLength: data.length, width, height });

    return (
      <View className='line-chart'>
        <View className='chart-container'>
          {/* @ts-ignore */}
          <ec-canvas
            id={this.canvasId}
            canvas-id={this.canvasId}
            echarts={echarts}
            ec={this.state.ec}
            style={{ width: `100%`, height: `${height}px`, display: 'block' }}
            className='chart-canvas'
          />
        </View>

        {/* X轴标签 */}
        <View className='chart-labels'>
          {data.map((item, index) => (
            <View key={index} className='label-item'>
              <Text
                className={`label-text ${item.label === '今天' ? 'label-today' : ''}`}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

