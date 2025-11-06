import { Storage, ILoginResult } from '@hb/taro-fusion-components';
import { observable } from 'mobx';
import { LoginEvent } from '@/common/events';
import Native from '@/common/native';
import { ICheckLoginOptions } from '@/services/types';

const LOGIN_RESULT_KEY = 'login_result';
class LoginModel {
  /**
   * 登录态
   */
  @observable loginResult = {} as ILoginResult;

  /**
   * 初始化登录态
   */
  initAppLogin() {
    if (Native.IS_MPAAS) {
      // 没有缓存，则重新获取
      Native.getAppLoginResult().then((res) => {
        this.setLoginResult(res);
      }).catch(() => {
        this.setLoginResult({} as ILoginResult);
      });
    } else {
      const loginResult = Storage.getItemSync(LOGIN_RESULT_KEY) || {} as ILoginResult;
      this.setLoginResult((loginResult || {}) as ILoginResult);
    }
  }

  /**
   * 登录态保护机制，常用于以下两个场景：
   * - 仅在登录态下调用某些接口；或者不同登录态处理不同逻辑
   * - 当登录态发生变化时，需要重新执行原来的逻辑（一般用于页面初始化监听，便于及时更新页面）
   * @param callback 登录态初始完成后的回调函数
   * @param options ICheckLoginOptions
   */
  checkLogin(callback: (isLogin: boolean) => void, options: ICheckLoginOptions = {}) {
    this.getLoginResult().then((res) => {
      // 判断登录态：如果有 token 就算登录（ticket 可能是可选的）
      const isLogin = !!res.token;
      // eslint-disable-next-line no-console
      console.log('checkLogin 初始判断:', isLogin, 'token:', res.token, 'ticket:', res.ticket);
      callback(isLogin);
    });

    const { observe = false, observeMode = 'all' } = options;

    if (observe) {
      // 关于 observe 参数：当页面销毁时，系统会自动扫描并移除监听器，无需手动回收。
      LoginEvent.on((loginResult) => {
        // 判断登录态：如果有 token 就算登录（ticket 可能是可选的）
        const isLogin = !!loginResult.token;
        // eslint-disable-next-line no-console
        console.log('checkLogin 监听事件:', isLogin, 'token:', loginResult.token, 'ticket:', loginResult.ticket);
        callback(isLogin);
      }, observeMode);
    }
  }

  /**
   * 设置登录态（登录后或注销后调用）
   * @param loginResult ILoginResult
   */
  setLoginResult(loginResult: ILoginResult) {
    // eslint-disable-next-line no-console
    console.log('setLoginResult 保存登录态:', loginResult, 'token:', loginResult?.token, 'ticket:', loginResult?.ticket);
    this.loginResult = loginResult;
    // MPAAS 环境无需持久化，以免App退出登录导致登录态不同步
    if (!Native.IS_MPAAS) {
      Storage.setItemSync(LOGIN_RESULT_KEY, loginResult, 90);
    }
    // 触发事件给应用层，用于做不同的逻辑处理
    LoginEvent.trigger(loginResult);
  }

  /**
   * 获取登录态（无论如何都返回结果）
   * @description 优先取缓存，再从桥或本地缓存中获取，如果都没有，则返回 { }
   * @returns ILoginResult | {}
   */
  async getLoginResult() {
    // 优先取缓存（只要有 token 就算有登录态，ticket 可能是可选的）
    if (this.loginResult.token) {
      // eslint-disable-next-line no-console
      console.log('getLoginResult 从缓存获取:', this.loginResult);
      return Promise.resolve(this.loginResult);
    }

    if (Native.IS_MPAAS) {
      // 没有缓存，则重新获取
      return Native.getAppLoginResult().then((res) => {
        // eslint-disable-next-line no-console
        console.log('getLoginResult 从 Native 获取:', res);
        return res;
      }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('getLoginResult Native 获取失败，返回空对象');
        return {} as ILoginResult;
      });
    }

    const loginResult = Storage.getItemSync(LOGIN_RESULT_KEY) || {} as ILoginResult;
    // eslint-disable-next-line no-console
    console.log('getLoginResult 从 Storage 获取:', loginResult);
    return Promise.resolve((loginResult || {}) as ILoginResult);
  }

  /**
   * 注销登录信息
   */
  logout() {
    this.setLoginResult({} as ILoginResult);
    Storage.removeItemSysnc(LOGIN_RESULT_KEY);
  }
}

export default new LoginModel();
