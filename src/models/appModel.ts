import Taro from '@tarojs/taro';
import { IGetLocationOptions, Native } from '@hb/taro-fusion-components';
import { AppShowOptions, ILocationResult, ILocationOptions } from '@/services/types';
import env from '@/common/env';
import loginModel from '@/models/loginModel';
import appConst from '@/constants/app.const';

const defaultLocation: ILocationResult = {
  longitude: '0',
  latitude: '0',
  resultType: 1,
};

class AppModel {
  /**
   * 打开小程序的场景值，由系统分配：
   * - weapp 官方文档：https://developers.weixin.qq.com/miniprogram/dev/reference/scene-list.html
   * - alipay 官方文档：https://opendocs.alipay.com/mini/08otyv
   * - tt 官方文档：https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/framework/scene-value
   * - mpaas 在链接中自定义：hellobike://hellobike.com/bifrost?name={appName}&appId={appId}&scene={scene}&page={page}
   * @default 0 - 表示没有获取到scene值
   */
  scene = 0;

  /**
   * 链路跟踪id, 由访问链接携带传入，携带规则见 `setTraceId` 定义
   * @description 该字段会自动上送到所有接口及埋点中:
   * - 接口报文：$scene、$traceId
   * - 埋点：businessInfo: { traceId, scene }
   */
  traceId = ''; // 由访问入口传入，跟踪用户访问行为

  /**
   * 缓存当前位置信息，默认为 null
   */
  getLocationPromise: Promise<ILocationResult> | null = null;

  /**
   * 存放 wisdown 配置信息，配置后启用
   * @see https://hellobike.yuque.com/gzxsb9/gt85o7/mfwxfq?
   */
  wisdomConfig = Object.create(null);

  /**
   * 初始化小程序
   */
  init(options: AppShowOptions) {
    // 设置小程序 打开场景值
    this.setScene(options);
    // 设置小程序访问的traceId
    this.setTraceId(options);
    // 初始化登录态
    loginModel.initAppLogin();

    // 初始化当前定位（可开关）
    this.getLocation();
    // 初始化 wisdom（可开关）
    this.initWisdom();
  }

  /**
   * 设置小程序打开的`scene`值（兼容全端）
   * - 原生小程序：由系统分配（weapp、alipay）
   * - MPAAS：通过链接地址携带`scene`:
   * hellobike://hellobike.com/bifrost?name={appName}&appId={appId}&scene={scene}&page={page}
   * @param options
   */
  setScene(options: AppShowOptions) {
    const { scene, query = {} } = options;
    // 默认2000
    const { scene: appscene = -1 } = query;

    // MPAAS 的 scene 从 query 中获取
    if (Native.IS_MPAAS) {
      this.scene = +appscene;
    } else {
      this.scene = scene;
    }
  }

  /**
   * 设置小程序访问的`traceId`值（兼容全端）
   * 各场景跳转链接格式如下：
   * - 小程序码（微信太阳码）: /pages/index/index?traceId={traceId}
   * - 小自定义二维码（微信）: https://c3x.me/miaowa/index?traceId={traceId}
   * - MPAAS Scheme: hellobike://hellobike.com/bifrost?name={appName}&appId={appId}&page={encode(pageUrl)}&traceId={traceId}
   * - 支付宝 Scheme: alipays://platformapi/startapp?appId={appId}&page={encode(pageUrl)}&query={encode(traceId={traceId})}
   * @param options
   */
  setTraceId(options: AppShowOptions) {
    const { query = {} } = options;
    // 默认为空，即无traceId
    const { traceId = '', q } = query;
    this.traceId = traceId;

    // 兼容微信普通二维码参数获取
    if (Native.IS_WEAPP && q) {
      const { traceId: wxTraceId } = Native.getUrlParams({
        url: decodeURIComponent(q as string),
      });
      if (wxTraceId) {
        this.traceId = wxTraceId;
      }
    }
    // 当全局没有时，从页面参数中获取
    if (!this.traceId && Native.IS_MPAAS) {
      Taro.nextTick(() => {
        const { traceId: pageTraceId } = Native.getUrlParams();
        if (pageTraceId) {
          this.traceId = pageTraceId;
        }
      });
    }
  }

  /**
   * 初始化 wisdom 配置
   * @description 配置项参考：https://hellobike.yuque.com/gzxsb9/gt85o7/mfwxfq
   */
  async initWisdom() {
    // 全局不启用 wisdom
    if (+appConst.WISHDOM_ENABLE === 0) {
      return;
    }
    // eslint-disable-next-line
    const ClientSDK = require('@hb/wisdom-config-sdk').default;

    const { codeEnv } = env;
    const clientSDK = () => new ClientSDK({ project: 'AppStarCardWXSS', env: codeEnv });
    const clientConfigEvent = clientSDK();
    const wisdownConfig = await clientConfigEvent.getAll();
    this.wisdomConfig = wisdownConfig || {};
  }

  /**
   * 获取地理位置信息
   * @param fromCache 当对实时性要求不高时，可设置 `fromCache:true`，此时会优先查缓存，以提升获取速度。
   * @returns ILocationResult
   */
  async getLocation(options: ILocationOptions = {}) {
    const {
      fromCache = true,
      ...restOptions
    } = options;

    // 全局不启用定位
    if (+appConst.LOCATION_ENABLE === 0) {
      return Promise.resolve(defaultLocation);
    }

    if (fromCache) {
      // 如果有缓存，直接返回缓存
      if (this.getLocationPromise) {
        return this.getLocationPromise.then((res) => ({
          ...res,
          resultType: 2,
        }));
      }
    }
    // 重新请求定位
    this.getLocationPromise = Native.getLocation(
      restOptions as IGetLocationOptions,
    ).then((res) => ({
      ...res,
      resultType: 0,
    })).catch(() => {
      // 本次获取失败，清理缓存，下次重新获取
      this.getLocationPromise = null;
      // 返回默认值
      return defaultLocation;
    });

    return this.getLocationPromise;
  }

  /**
   * 小程序检查更新
   * @supported weapp
   */
  checkAppUpdate() {
    // 全局不启用检查更新
    if (+appConst.UPDATE_ENABLE === 0) {
      return;
    }
    if (Taro.canIUse('getUpdateManager')) {
      const updateManager = Taro.getUpdateManager();
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            Taro.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success(rs) {
                if (rs.confirm) {
                  updateManager.applyUpdate();
                }
              },
            });
          });
          updateManager.onUpdateFailed(() => {
            Taro.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
            });
          });
        }
      });
    } else {
      Taro.showModal({
        title: '提示',
        content:
          '当前微信版本过低，无法更好体验程序，请升级到最新微信版本后重试。',
      });
    }
  }
}

export default new AppModel();
