import { Native } from '@hb/taro-fusion-components';
import Env from '@/common/env';
import { IJumpToAnyUrlOptions } from '@/services/types';

/**
 * 跳转到任意页面（小程序、Native、H5 等）
 * @param url
 * @param options IJumpToAnyUrlOptions
 */
export function jumpToAnyUrl(
  url: string,
  options: IJumpToAnyUrlOptions = {},
) {
  const {
    params = {},
    recycle,
    closeTinyApp,
    useAppWebView,
    title,
    reLaunch,
  } = options;

  const targetUrl = Native.appendQueryToUrl(url, params);

  // 以 /pages/ 开头，则直接跳转
  if (/^\/pages\//.test(url)) {
    if (reLaunch) {
      Native.reLaunch({
        url: targetUrl,
      });
    } else {
      if (Native.isTabbarPage(url)) {
        Native.switchTab({
          url,
        });
      } else {
        Native.navigateTo({
          url: targetUrl,
          recycle,
        });
      }
    }
  } else if (/https?:\/\//.test(url)) {
    if (Native.IS_MPAAS && useAppWebView) {
      Native.jumpToApp(url, {
        params,
        closeTinyApp,
      });
    } else {
      // 使用小程序的webview打开
      jumpToWebView(targetUrl, title);
    }
  } else {
    // 其他类型的地址仅mpaas可以打开
    if (Native.IS_MPAAS) {
      Native.jumpToApp(url, {
        params,
        closeTinyApp,
      });
    } else {
      console.log('url format is invalid: ', targetUrl);
      Native.showToast(`url format is invalid for ${Env.appEnv}`);
    }
  }
}

/**
 * 在小程序的 Webview 中打开一个网页
 * @param url https 地址，需在小程序后台配置安全域名。
 * @param title 页面标题
 */
export function jumpToWebView(url: string, title?: string) {
  if (/^https:\/\//.test(url)) {
    Native.navigateTo({
      url: '/pages/webview/webview',
      params: {
        url,
        title,
      },
    });
  } else {
    throw new Error('the url is invalid');
  }
}

/**
 * 跳转到首页
 */
export function jumpToIndex() {
  Native.switchTab({
    url: '/pages/index/index',
  });
}
