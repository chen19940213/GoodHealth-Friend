/**
 * HTTP 请求封装
 * 基于 Taro.request 封装的 HTTP 请求工具
 */

import Taro from '@tarojs/taro';
import appConst from '@/constants/app.const';
import loginModel from '@/models/loginModel';

/**
 * 请求配置接口
 */
export interface RequestConfig {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  header?: Record<string, string>;
  timeout?: number;
  /**
   * 是否在请求体中包含 token，默认为 true
   */
  includeToken?: boolean;
}

/**
 * 响应数据格式
 */
export interface ResponseData<T = Record<string, unknown>> {
  code: number;
  message: string;
  data: T;
}

/**
 * HTTP 请求类
 */
class Http {
  /**
   * 基础URL（可配置）
   */
  private baseURL: string = appConst.BASE_API;

  /**
   * 默认超时时间
   */
  private timeout: number = 10000;

  /**
   * 默认请求头
   */
  private defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  /**
   * 请求拦截器
   */
  private requestInterceptor?: (config: RequestConfig) => RequestConfig;

  /**
   * 响应拦截器
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private responseInterceptor?: (response: any) => any;

  /**
   * 设置基础URL
   */
  setBaseURL(url: string) {
    this.baseURL = url;
  }

  /**
   * 设置默认超时时间
   */
  setTimeout(timeout: number) {
    this.timeout = timeout;
  }

  /**
   * 设置默认请求头
   */
  setDefaultHeaders(headers: Record<string, string>) {
    this.defaultHeaders = { ...this.defaultHeaders, ...headers };
  }

  /**
   * 设置请求拦截器
   */
  setRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig) {
    this.requestInterceptor = interceptor;
  }

  /**
   * 设置响应拦截器
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setResponseInterceptor(interceptor: (response: any) => any) {
    this.responseInterceptor = interceptor;
  }

  /**
   * 发起请求
   */
  private async request<T = Record<string, unknown>>(
    config: RequestConfig,
  ): Promise<ResponseData<T>> {
    try {
      // 判断是否是完整的 URL
      // const isFullUrl = /^https?:\/\//.test(config.url);
      // const finalUrl = isFullUrl ? config.url : this.baseURL + config.url;

      // 获取 token（从 loginModel 动态获取）
      const token = loginModel.loginResult?.token || '';
      // 是否包含 token，默认为 true
      const includeToken = config.includeToken !== false;

      // 合并 data，如果 includeToken 为 true 且有 token，则添加到请求体中
      let finalData = config.data;
      if (includeToken && token) {
        if (finalData && typeof finalData === 'object' && !Array.isArray(finalData)) {
          // 如果 data 是对象，添加 token
          finalData = {
            ...finalData,
            token,
          };
        } else {
          // 如果 data 不存在或不是对象，创建包含 token 的对象
          finalData = {
            ...(finalData || {}),
            token,
          };
        }
      }

      // 合并配置
      let finalConfig: RequestConfig = {
        ...config,
        url: this.baseURL,
        method: config.method || 'GET',
        data: finalData,
        header: {
          ...this.defaultHeaders,
          ...config.header, // 用户自定义 header
        },
        timeout: config.timeout || this.timeout,
      };

      // 执行请求拦截器
      if (this.requestInterceptor) {
        finalConfig = this.requestInterceptor(finalConfig);
      }

      // 发起请求
      const response = await Taro.request({
        url: finalConfig.url,
        method: finalConfig.method,
        data: finalConfig.data,
        header: finalConfig.header,
        timeout: finalConfig.timeout,
      });

      // 执行响应拦截器
      let result = response.data as ResponseData<T>;
      if (this.responseInterceptor) {
        result = this.responseInterceptor(result);
      }

      // 判断请求是否成功
      if (response.statusCode >= 200 && response.statusCode < 300) {
        // 判断业务是否成功
        if (result.code === 0) {
          return result;
        }

        // 如果返回 code 为 103，清除登录态并跳转到我的页面
        if (result.code === 103) {
          loginModel.logout();
          // 跳转到我的页面（tabBar 页面需要使用 switchTab）
          Taro.switchTab({
            url: '/pages/my/my',
          });
          throw new Error(result.message || '登录已失效，请重新登录');
        }

        throw new Error(result.message || '请求失败');
      }

      const errorMsg = response.statusCode === 404 ? '接口不存在' : '请求失败';
      throw new Error(`HTTP ${response.statusCode}: ${errorMsg}`);
    } catch (error) {
      const err = error as Error;
      throw new Error(err.message || '网络请求失败');
    }
  }

  /**
   * GET 请求
   */
  get<T = Record<string, unknown>>(
    url: string,
    params?: Record<string, unknown>,
    config?: Partial<RequestConfig>,
  ): Promise<ResponseData<T>> {
    // 将 params 转换为查询字符串
    let fullUrl = url;
    if (params) {
      const queryString = Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`)
        .join('&');
      fullUrl = url.includes('?') ? `${url}&${queryString}` : `${url}?${queryString}`;
    }

    return this.request<T>({
      url: fullUrl,
      method: 'GET',
      ...config,
    });
  }

  /**
   * POST 请求
   */
  post<T = Record<string, unknown>>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: Partial<RequestConfig>,
  ): Promise<ResponseData<T>> {
    return this.request<T>({
      url,
      method: 'POST',
      data: {
        action: url,
        ...data,
      },
      ...config,
    });
  }

  /**
   * PUT 请求
   */
  put<T = Record<string, unknown>>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: Partial<RequestConfig>,
  ): Promise<ResponseData<T>> {
    return this.request<T>({
      url,
      method: 'PUT',
      data,
      ...config,
    });
  }

  /**
   * DELETE 请求
   */
  delete<T = Record<string, unknown>>(
    url: string,
    params?: Record<string, unknown>,
    config?: Partial<RequestConfig>,
  ): Promise<ResponseData<T>> {
    // 将 params 转换为查询字符串
    let fullUrl = url;
    if (params) {
      const queryString = Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`)
        .join('&');
      fullUrl = url.includes('?') ? `${url}&${queryString}` : `${url}?${queryString}`;
    }

    return this.request<T>({
      url: fullUrl,
      method: 'DELETE',
      ...config,
    });
  }

  /**
   * PATCH 请求
   */
  patch<T = Record<string, unknown>>(
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    config?: Partial<RequestConfig>,
  ): Promise<ResponseData<T>> {
    return this.request<T>({
      url,
      method: 'PATCH',
      data,
      ...config,
    });
  }
}

// 导出单例
export default new Http();
