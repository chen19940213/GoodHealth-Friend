import Taro, { getCurrentInstance } from '@tarojs/taro';
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import appModel from '@/models/appModel';
import Native from '@/common/native';
import { AppShowOptions } from '@/services/types';
import Fusion from '@/common/fusion';
import '@/app.scss';

// Ubt 已移除，使用空对象替代
const APM = { pageStartTime: () => {} };
const PageT = () => {};
// Fusion 初始化
Fusion.init();
if (process.env.CODE_ENV !== 'pro') {
  Taro.setEnableDebug({ enableDebug: true });
}
interface IAppProps {
  children?: React.ReactNode;
}
class App extends Component<IAppProps> {
  onLaunch(options: AppShowOptions) {
    // 版本更新检测

    appModel.checkAppUpdate();
    // 初始化
    appModel.init(options);
  }

  componentDidShow(options: AppShowOptions) {
    if (Native.IS_WEAPP) {
      appModel.setScene(options);
    }
  }

  render() {
    return (
      <Provider>
       {this.props.children}
      </Provider>
    );
  }
}

export default App;
