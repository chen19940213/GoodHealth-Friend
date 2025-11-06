import React from 'react';
import Taro from '@tarojs/taro';
import { Image } from '@tarojs/components';
import HttpDefault from '@/common/http';

// Http: 复用项目内封装
export const Http = HttpDefault;

// Storage: 基于 Taro 同步存储
export class Storage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static setItemSync(key: string, value: any, _expireDays?: number) {
    try { Taro.setStorageSync(key, value); } catch {}
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static getItemSync(key: string): any {
    try { return Taro.getStorageSync(key); } catch { return undefined; }
  }
  static removeItemSysnc(key: string) {
    try { Taro.removeStorageSync(key); } catch {}
  }
}

// EventBus 和 Ubt 已移除实际使用，保留空导出以兼容类型
// 如果需要，可以使用空对象替代
export const EventBus = null as any;
export const Ubt = null as any;

// Native 最小实现，覆盖项目中使用到的方法/属性
export class Native {
  static IS_MPAAS = false;
  static IS_WEAPP = true;
  static IS_ALIPAY_PLATFORM = false;
  static systemInfo = (() => {
    try { return Taro.getSystemInfoSync(); } catch { return {}; }
  })() as Record<string, unknown>;
  static get isAndroid() {
    try { return /android/i.test(Taro.getSystemInfoSync().system || ''); } catch { return false; }
  }

  static config(_cfg: Record<string, unknown>) {}
  static setCodeEnv(_env: unknown) {}

  static appendQueryToUrl(url: string, params?: Record<string, unknown>) {
    if (!params || Object.keys(params).length === 0) return url;
    const qs = Object.entries(params)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
      .join('&');
    return url.includes('?') ? `${url}&${qs}` : `${url}?${qs}`;
  }

  static isTabbarPage(url: string) {
    // 简化：根据路径是否在 tabBar 列表判断，默认 false
    return false;
  }

  static reLaunch(options: { url: string }) { return Taro.reLaunch(options); }
  static switchTab(options: { url: string }) { return Taro.switchTab(options); }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static navigateTo(options: { url: string } & Record<string, any>) { return Taro.navigateTo(options); }
  static navigateBack() { return Taro.navigateBack(); }
  static hideHomeButton() { try { Taro.hideHomeButton?.(); } catch {} }
  static showToast(title: string) { return Taro.showToast({ title, icon: 'none' }); }
  static setClipboardData(data: string) { return Taro.setClipboardData({ data }); }

  static getUrlParams(options?: { url?: string }) {
    const target = options?.url || (Taro?.getCurrentInstance?.()?.router?.path as string) || '';
    const queryStr = target.split('?')[1] || '';
    return queryStr.split('&').filter(Boolean).reduce<Record<string, string>>((acc, kv) => {
      const [k, v] = kv.split('=');
      acc[decodeURIComponent(k)] = decodeURIComponent(v || '');
      return acc;
    }, {});
  }

  static getShareAppOptions() { return {}; }

  // mPaaS 相关占位
  static async getAppLoginResult() { return Promise.resolve({}); }

  // 定位：最小实现
  static async getLocation(_opts?: unknown): Promise<{ latitude: string; longitude: string; }>
  {
    try {
      const res = await Taro.getLocation({ type: 'wgs84' });
      return { latitude: String(res.latitude), longitude: String(res.longitude) };
    } catch {
      return { latitude: '0', longitude: '0' };
    }
  }

  static getPagePath(options?: { query?: boolean }) {
    const route = Taro.getCurrentPages()?.slice(-1)[0]?.route || '';
    if (!options?.query) return `/${route}`;
    const params = this.getUrlParams();
    const qs = Object.keys(params).length ? `?${Object.entries(params).map(([k,v]) => `${k}=${v}`).join('&')}` : '';
    return `/${route}${qs}`;
  }

  // mPaaS 相关占位
  static jumpToApp(_url: string, _opts?: Record<string, unknown>) { return Promise.resolve(); }
}

// UI 占位组件
export const PageSkeleton = Object.assign((props: React.PropsWithChildren<{ customProps?: Record<string, unknown> }>) => 
  React.createElement(React.Fragment, null, props.children)
, {
  setGlobalOptions: (_opts: Record<string, unknown>) => {},
});

export const FusionScrollView: React.FC<React.PropsWithChildren<Record<string, unknown>>> = (props) => 
  React.createElement(React.Fragment, null, props.children);
export const PageFloatLayout: React.FC<React.PropsWithChildren<Record<string, unknown>>> = (props) => 
  React.createElement(React.Fragment, null, props.children);
export const SafeAreaView: React.FC<React.PropsWithChildren<Record<string, unknown>>> = (props) => 
  React.createElement(React.Fragment, null, props.children);

// PageHeader 组件
export const PageHeader: React.FC<{ title?: string; [key: string]: unknown }> = (props) => 
  React.createElement(React.Fragment, null);

// OssImage 组件（OSS 图片）
export const OssImage: React.FC<{
  src?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  [key: string]: unknown;
}> = (props) => {
  const { src, className, width, height, ...rest } = props;
  return React.createElement(Image, {
    src,
    className,
    style: width || height ? { width, height } : undefined,
    ...rest,
  });
};

// Poster 组件（海报生成）
export class Poster extends React.Component<{
  palette?: unknown;
  onReady?: (path: string) => void;
  [key: string]: unknown;
}> {
  componentDidMount() {
    // 最小实现：不生成海报，只返回空路径
    if (this.props.onReady) {
      // 延迟调用，模拟异步生成
      setTimeout(() => {
        this.props.onReady?.('');
      }, 100);
    }
  }
  render() {
    return React.createElement(React.Fragment, null);
  }
}

// 类型占位
export type ICodeEnv = 'dev' | 'fat' | 'uat' | 'pro' | string;
export interface ILoginResult {
  token?: string;
  ticket?: string;
  guid?: string;
  // 允许扩展
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default Native;
