import { IGetLocationOptions, IGetLocationResult, INavigateToOptions } from '@hb/taro-fusion-components/lib/apis/Native/types';

export type IAnyType = any;

export interface IGenericObject {
  [key: string]: any;
}

export type IGenericFunction = (...args: IAnyType[]) => void

export interface QueryString {
  [key: string]: any;
}

export interface AppShowOptions {
  apiCategory: string;
  mode: string;
  path: string;
  query: QueryString;
  refererInfo: IGenericObject;
  scene: number;
}

export interface ILocationOptions extends IGetLocationOptions {
  /**
   * 当对实时性要求不高时，可设置 `fromCache:true`，此时会优先查缓存，以提升获取速度。
   * @default false
   */
  fromCache?: boolean;
}

export interface ILocationResult extends IGetLocationResult {
  /**
   * 结果类型
   * - 0: 最新值，请求定位成功
   * - 1: 默认值，请求定位失败，当前为默认值 { latitude: '0', longitude: '0' }
   * - 2: 缓存值，取上一次定位的结果
   */
  resultType?: number;
}

export interface ICheckLoginOptions {
  /**
   * 是否观察登录态变化
   * @description 一般用于页面初始化监听，便于及时更新页面
   * @default false
   */
  observe?: boolean;
  /**
   * 监听模式，仅当 `observe` 为 `true` 时生效。
   * - `all` - 当前页面处于前台和后台都会触发回调
   * - `front` - 当前页面处于前台时触发回调
   * @default 'all'
   */
  observeMode?: 'all' | 'front';
}

export interface IJumpToAnyUrlOptions extends Pick<INavigateToOptions, 'params' | 'recycle'> {
  /**
   * 跳转App后，是否关闭当前小程序
   * @default false
   * @supported mpaas
   */
  closeTinyApp?: boolean;
  /**
   * 是否使用AppWebView打开H5页面
   * @supported mpaas
   */
  useAppWebView?: string;
  /**
   * 使用小程序webview打开时设置标题
   * @supported weapp,alipay,mpaas,tt
   */
  title?: string;
  /**
   * 是否使用 reLaunch 打开小程序页面
   * @supported weapp, alipay, mpaas, tt
   */
  reLaunch?: boolean;
}
