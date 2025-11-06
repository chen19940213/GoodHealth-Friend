import { ILoginResult } from '@hb/taro-fusion-components';
import Http from '@/common/http';
import { wxLoginAction } from '../actions';

/**
 * 微信登录请求参数
 */
export interface WxLoginParams {
  /**
   * 微信登录凭证 code
   */
  code: string;
  /**
   * 用户信息（可选，getUserProfile 已废弃，后端可通过 openId 获取用户信息）
   */
  userInfo?: {
    nickName?: string;
    avatarUrl?: string;
    gender?: number;
    city?: string;
    province?: string;
    country?: string;
  };
}

/**
 * 微信登录响应数据
 */
export interface WxLoginResponse extends ILoginResult {
  /**
   * 用户 openId
   */
  openId?: string;
  /**
   * 用户 unionId
   */
  unionId?: string;
  /**
   * 用户信息
   */
  userInfo?: {
    nickname?: string;
    avatar?: string;
    gender?: number;
    city?: string;
    province?: string;
    country?: string;
  };
}

/**
 * 微信登录接口（使用内部 action）
 * @param params 登录参数
 * @returns Promise<ResponseData<WxLoginResponse>>
 */
export function requestWxLoginApi(params: WxLoginParams) {
  return Http.post<WxLoginResponse>(wxLoginAction, params);
}

/**
 * 微信登录接口（调用外部接口）
 * @param params 登录参数
 * @returns Promise<ResponseData<WxLoginResponse>>
 */
export function requestWxLoginMockApi(params: WxLoginParams) {
  return Http.post<WxLoginResponse>(wxLoginAction, params);
}
