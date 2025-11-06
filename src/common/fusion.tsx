import React from 'react';
import {
  PageSkeleton, Http, Native, ICodeEnv,
} from '@hb/taro-fusion-components';
import Taro from '@tarojs/taro';
import Env from '@/common/env';
import appConst from '@/constants/app.const';
import appModel from '@/models/appModel';
import { LoginEvent } from '@/common/events';
import loginModel from '@/models/loginModel';

let mobileInfo = {};
const getMobileInfo = () => {
  if (Object.keys(mobileInfo).length) {
    return mobileInfo;
  }
  try {
    const {
      model, system, platform, version,
    } = Taro.getSystemInfoSync();

    mobileInfo = {
      mobileVersion: version || 'UNKNOW',
      mobileModel: model || 'UNKNOW',
      mobileSystem: system || 'UNKNOW',
      systemPlatform: platform || 'UNKNOW',
    };
    return mobileInfo;
  } catch {
    return {
      mobileVersion: 'UNKNOW',
      mobileModel: 'UNKNOW',
      mobileSystem: 'UNKNOW',
      systemPlatform: 'UNKNOW',
    };
  }
};

const getHttpBaseParams = () => {
  const { scene, traceId } = appModel;

  const httpBaseParams = {
    version: Env.appVersion,
    appName: Env.appName,
    $scene: scene,
    $traceId: traceId,
    systemCode: appConst.SYSTEM_CODE,
    ...getMobileInfo(),
    ...Env.codeEnv !== 'pro' ? {
      __sysTag: Env.codeEnvTag,
    } : {},
  };

  return httpBaseParams;
};

class Fusion {
  // initUbt 已移除，Ubt 功能已禁用

  /**
   * 初始化PageSkeleton
   */
  static initPageSkeleton() {
    PageSkeleton.setGlobalOptions({
      // customSlotRender: (props) => {
      //   const { hideElf } = props.customProps || {};
      //   // 生产环境不渲染该逻辑
      //   if (process.env.CODE_ENV !== 'pro' || Number(process.env.IS_CI) !== 1) {
      //     // eslint-disable-next-line
      //     const Elf = require('@/components/common/Elf').default;
      //     return !hideElf && <Elf />;
      //   }
      //   return null;
      // },
      onPageUnload() {
        // 移除当前页面的登录监听器
        LoginEvent.offCurrent();
      },
    });
  }

  /**
   * 初始化Native
   */
  static initNative() {
    Native.config({
      shareAppOptions: {
        shareOriginId: appConst.MINA_ORIGIN_ID,
      },
    });
  }

  static init() {
    Fusion.initNative();
    // Fusion.initUbt();
    Fusion.initPageSkeleton();
  }
}

// 注册到 Env 中
Env.register((codeEnv: ICodeEnv) => {
  Taro.nextTick(() => {
    Native.setCodeEnv(codeEnv);
    Fusion.init();
  });
});

export default Fusion;
