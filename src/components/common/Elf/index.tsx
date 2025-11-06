import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import {
  View,
  Text,
  Image,
  MovableView,
  MovableArea,
} from '@tarojs/components';
import Native from '@/common/native';
import Drawer from '@/components/common/Drawer';
import loginModel from '@/models/loginModel';
import {
  FusionInput, FusionScrollView, SafeAreaView, Storage,
  Util,
} from '@hb/taro-fusion-components';
import {
  IMG_arrow_right_grey, IMG_copy_alpha, IMG_del_blue, IMG_scan_blue,
} from '@/assets/icons';
import { jumpToAnyUrl } from '@/utils/jumpTo';
import Env from '@/common/env';
import classNames from 'classnames';
import './index.scss';
import { IAnyType } from '@/services/types';

interface SuccessCallbackResult {
  tapIndex: number;
  index?: number;
  errMsg: string;
}

interface IConfigField {
  label: string;
  type: string;
  id: string;
  value?: string;
  onClick?: (item: IConfigField) => void;
}

interface FlatRouteVo {
  params: string;
  path: string;
  pageId: string;
}
interface IElfState {
  isOpen: boolean;
  configFields: IConfigField[];
  moveX: number;
  moveY: number;
  currentPagePath: string;
  flatRouteList: FlatRouteVo[];
  showPathList: boolean;
  activePageId: string;
}
export default class Elf extends Component<IAnyType, IElfState> {
  state = {
    isOpen: false,
    configFields: [] as IConfigField[],
    moveX: 0,
    moveY: 0,
    currentPagePath: '',
    showPathList: false,
    flatRouteList: this.getFlatRouteList(),
    activePageId: '',
  };

  componentDidMount(): void {
    this.initConfigFields();
  }

  /**
   * 设置Elf的配置字段
   */
  initConfigFields() {
    const configFields = [
      {
        label: '手机号',
        type: 'readonly',
        id: 'phone',
        value: loginModel.loginResult?.mobile || '未登录',
      },
      {
        label: '环境切换',
        type: 'select',
        id: 'change_env',
        onClick: () => {
          const itemList = ['fat', 'uat', 'pre', 'pro'].map((val) => val.toLocaleUpperCase());
          Taro.showActionSheet({
            itemList,
            success: (res: SuccessCallbackResult) => {
              const curIndex = Native.IS_ALIPAY_PLATFORM ? (res.index || 0) : res.tapIndex;
              if (curIndex < 0) return;

              Env.setCodeEnv(itemList[curIndex].toLocaleLowerCase());

              loginModel.logout();
              this.setElfOpen(false);

              Native.reLaunch({
                // 重新打开当前页面或者打开首页
                url: Native.getPagePath({ query: true }) || '/pages/index/index',
              });
            },
          }).catch((error) => {
            console.error(error);
          });
        },
        value: Env.codeEnv?.toUpperCase(),
      },
      {
        label: '页面切换',
        type: 'select',
        id: 'goto',
        onClick: () => this.setPathListOpen(true),
        value: Native.getPagePath() || 'N/A',
      },
      {
        label: '扫码跳转',
        type: 'scan',
        id: 'scanto',
        onClick: () => {
          Taro.scanCode({
            success: (res) => {
              const { result } = res;
              this.setElfOpen(false);
              Util.requestTimeout(500).then(() => {
                jumpToAnyUrl(result);
              });
            },
          }).catch((error) => {
            console.error(error);
          });
        },
        value: '支持小程序、App、H5等页面',
      },
      {
        label: '页面路径',
        type: 'copy',
        id: 'route_path',
        value: Native.getPagePath({ query: true }) || 'N/A',
        onClick: (item: IConfigField) => {
          Native.setClipboardData(item.value || '').catch((error) => {
            console.error(error);
          });
        },
      },
      {
        label: '小程序类型',
        type: 'readonly',
        id: 'app',
        value: Env.appEnv,
      },
      {
        label: '设备平台',
        type: 'readonly',
        id: 'platform',
        value: Native.isAndroid ? 'Android' : 'IOS',
      },
      {
        label: '构建渠道',
        type: 'readonly',
        id: 'compile_platform',
        value: process.env.IS_CI ? 'CI平台' : '本地',
      },
      {
        label: '宿主App版本',
        type: 'readonly',
        id: 'mpaas_version',
        value: Native.getAppVersion(),
      },
      {
        label: '小程序版本',
        type: 'readonly',
        id: 'app_version',
        value: Env.appVersion,
      },
      {
        label: '操作系统版本',
        type: 'readonly',
        id: 'phone_version',
        value: Native.getOsVersion(),
      },
      {
        label: '小程序基础库版本',
        type: 'readonly',
        id: 'sdk_version',
        value: Native.IS_ALIPAY_PLATFORM ? my.SDKVersion : Native.systemInfo.SDKVersion || '',
      },
      {
        label: '清除本地缓存',
        type: 'delete',
        id: 'clear_cache',
        onClick: async () => {
          await Storage.clear();
          loginModel.logout();
          await Native.showToast('已清除所有本地缓存');
          this.setElfOpen(false);

          Native.reLaunch({
            url: Native.getPagePath({ query: true }) || '/pages/index/index',
          });
        },
        value: '一键清理',
      },
    ];

    this.setState({ configFields });
  }

  /**
   * 获取所有扁平化的页面路径
   * @returns
   */
  getFlatRouteList() {
    const { pages, subPackages } = Taro.getApp().config || {};

    const paths = [
      ...(pages || []),
      ...(subPackages || []).reduce((acc, cur) => {
        const subpages = cur.pages.map((page) => `${cur.root}/${page}`);
        return [...acc, ...subpages];
      }, []),
    ];

    return paths.map((path) => ({
      path: `/${path}`,
      params: '',
      pageId: path.replace(/\//g, '_'),
    }));
  }

  /**
   * 切换路径选择面板
   * @param isOpen
   */
  setPathListOpen(isOpen: boolean) {
    this.setState({
      showPathList: isOpen,
    });
  }

  /**
   * 控制Elf面板开关
   * @param isOpen
   */
  setElfOpen = (isOpen: boolean) => {
    this.setState({
      isOpen,
    });

    if (isOpen) {
      this.initConfigFields();
    } else {
      this.setPathListOpen(false);
      this.setState({
        activePageId: '',
      });
    }
  };

  /**
   * 渲染配置列表
   * @returns
   */
  renderConfigPanel() {
    const { configFields } = this.state;

    const iconsMap = {
      delete: IMG_del_blue,
      select: IMG_arrow_right_grey,
      copy: IMG_copy_alpha,
      scan: IMG_scan_blue,
    };

    return (
      <View className="dev-config-list">
        {configFields.map((item) => (
          <View
            key={item.id}
            className="dev-config-item"
            onClick={() => {
              if (typeof item.onClick === 'function') {
                item.onClick(item);
              }
            }}
          >
            <Text className="dev-config-item-label">{item.label}</Text>
            {React.isValidElement(item.value) ? (
              <View className="dev-config-item-content">
                {item.value}
              </View>
            ) : (
              <Text className="dev-config-item-value" selectable>
                {item.value}
              </Text>
            )}
            {!['readonly'].includes(item.type) ? (
              <View className="dev-config-item-controls">
                <Image
                  className='elf-control-icon'
                  src={iconsMap[item.type]}
                />
              </View>
            ) : null}
          </View>
        ))}
      </View>
    );
  }

  /**
   * 渲染路径选择
   * @returns
   */
  renderRoutePathList() {
    const { flatRouteList = [], activePageId } = this.state;

    return (
      <View className='dev-config-route-list'>
        <FusionScrollView className='route-list-scroll'>
          {
            flatRouteList.map((item, index) => (
                <View key={index}
                  className={classNames('route-list-item', {
                    active: activePageId === item.pageId,
                  })}
                  onClick={() => {
                    this.setState({
                      activePageId: item.pageId,
                    });
                  }}
                >
                  <View>{item.path}</View>
                  {
                    activePageId === item.pageId && (
                      <View className='route-params-box'>
                        <FusionInput
                          className='route-params-input'
                          placeholder='启动参数，如：name=vendor&color=black'
                          value={item.params}
                          onInput={(e) => {
                            const { value } = e.detail;
                            flatRouteList[index].params = value || '';

                            this.setState({
                              flatRouteList,
                            });
                          }}
                        />
                      </View>
                    )
                  }
                </View>
            ))
          }
        </FusionScrollView>
        <SafeAreaView safeAreaInsetBottom>
          <View className='btn-list'>
            <View
              className='btn cancel'
              onClick={() => this.setPathListOpen(false)}
            >
              取消
            </View>
            <View
              className='btn'
              onClick={() => {
                this.setElfOpen(false);
                const targetPage = flatRouteList.find((page) => page.pageId === activePageId);
                if (targetPage) {
                  const { path, params } = targetPage;
                  const targetUrl = path + (params ? `?${params}` : '');
                  // 等待弹窗消失后跳转
                  Util.requestTimeout(500).then(() => {
                    jumpToAnyUrl(targetUrl);
                  });
                }
              }}
            >
              确定
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  render() {
    const {
      isOpen,
      moveX,
      moveY,
      showPathList,
    } = this.state;

    return (
      <View className='app-elf-view'>
        <MovableArea className="elf-movable-area">
          <MovableView
            className="elf-movable-view"
            direction="all"
            inertia
            x={moveX}
            y={moveY}
          >
            <View className="elf-container"
            onClick={() => this.setElfOpen(true)}
            >
              {Env.codeEnv?.toUpperCase()}
            </View>
          </MovableView>
        </MovableArea>
        <Drawer
          isOpen={isOpen}
          onClose={() => this.setElfOpen(false)}
          title="调试面板"
        >
          {
            showPathList ? (
              this.renderRoutePathList()
            ) : (
              <View className="dev-config-panel">
                <View className="dev-config-panel-body">
                  {this.renderConfigPanel()}
                </View>
              </View>
            )
          }
        </Drawer>
      </View>
    );
  }
}
