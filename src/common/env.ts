import { IGenericFunction } from '@/services/types';
import pkgJson from '../../package.json';

const appEnv = process.env.NEW_MP_TYPE || 'weapp';
// eslint-disable-next-line
let _codeEnv = process.env.CODE_ENV || 'pro';
const appName = pkgJson.appNameMapping[appEnv];

// eslint-disable-next-line
const envTag = '';

const codeEnvCallbacks: IGenericFunction[] = [];

export default class Env {
  /**
   * 原始codeEnv
   */
  static get originCodeEnv() {
    return _codeEnv;
  }

  /**
   * 获取版本号
   */
  static get codeEnv() {
    if (_codeEnv) {
      return _codeEnv?.split('_')[0];
    }
    return _codeEnv;
  }

  /**
   * 设置版本号
   */
  static set codeEnv(val) {
    _codeEnv = val;
    const env = this.codeEnv;
    codeEnvCallbacks.forEach((fn: IGenericFunction) => {
      fn(env);
    });
  }

  /**
   * 全局设置代码环境
   */
  static setCodeEnv(val: string) {
    this.codeEnv = val;
  }

  /**
   * 注册观察者（在环境变化时通知）
   * @param callback - 观察者函数
   * @return 注销回调
   */
  static register(callback: IGenericFunction) {
    codeEnvCallbacks.push(callback);
    const { length } = codeEnvCallbacks;
    return () => {
      codeEnvCallbacks.splice(length - 1, 1);
    };
  }

  static get codeEnvTag() {
    if (_codeEnv === 'fat') {
      return envTag;
    }
    if (_codeEnv === 'dev') {
      return 'dev';
    }
    if (_codeEnv === 'uat') {
      return '';
    }
    return undefined;
  }

  /**
   * 小程序业务版本号
   */
  static appVersion = pkgJson.version;

  /**
   * 小程序在各端的APP名称
   */
  static appName = appName;

  /**
   * 小程序工程名称
   */
  static projectName = pkgJson.name;

  /**
   * 小程序端类型
   * - 枚举：weapp,alipay,tt,hello,pet,petbos,rent
   */
  static appEnv = appEnv;
}
