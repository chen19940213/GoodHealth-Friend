import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

// PageSkeleton 组件属性接口
export interface PageSkeletonProps {
  className?: string;
  children?: React.ReactNode;
  onScrollToLower?: () => void;
  customProps?: Record<string, unknown>;
}

// 全局选项接口
export interface PageSkeletonGlobalOptions {
  onPageUnload?: () => void;
  customSlotRender?: (props: PageSkeletonProps) => React.ReactNode;
}

// 全局选项存储
let globalOptions: PageSkeletonGlobalOptions = {};

// PageSkeleton 组件实现
const PageSkeletonComponent: React.FC<PageSkeletonProps> = (props) => {
  const { className, children } = props;
  
  // 胶囊按钮信息
  const [capsuleHeight, setCapsuleHeight] = useState<number>(0);
  // 胶囊按钮顶部位置
  const [capsuleTop, setCapsuleTop] = useState<number>(0);
  // 安全区域信息
  const [safeAreaBottom, setSafeAreaBottom] = useState<number>(0);

  useEffect(() => {
    // 获取胶囊按钮信息
    try {
      const menuButton = Taro.getMenuButtonBoundingClientRect();
      if (menuButton) {
        if (menuButton.height) {
          setCapsuleHeight(menuButton.height);
        }
        if (menuButton.top !== undefined) {
          setCapsuleTop(menuButton.top);
        }
      }
    } catch (error) {
      console.warn('获取胶囊按钮信息失败:', error);
    }

    // 获取安全区域信息
    try {
      const systemInfo = Taro.getSystemInfoSync();
      const safeArea = systemInfo.safeArea;
      if (safeArea) {
        // 计算底部安全区域高度 = 屏幕高度 - 安全区域底部
        const screenHeight = systemInfo.screenHeight || systemInfo.windowHeight || 0;
        const safeAreaBottomValue = screenHeight - (safeArea.bottom || 0);
        setSafeAreaBottom(safeAreaBottomValue);
      }
    } catch (error) {
      console.warn('获取安全区域信息失败:', error);
    }

    // 组件卸载时调用 onPageUnload
    return () => {
      if (globalOptions.onPageUnload) {
        globalOptions.onPageUnload();
      }
    };
  }, []);

  // 分离具名插槽
  let headerSlot: React.ReactNode = null;
  let bodySlot: React.ReactNode = null;
  let footerSlot: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.key) {
      if (child.key === 'header') {
        headerSlot = child;
      } else if (child.key === 'body') {
        bodySlot = child;
      } else if (child.key === 'footer') {
        footerSlot = child;
      }
    }
  });

  // 如果没有找到具名插槽，将所有 children 作为 body
  if (!headerSlot && !bodySlot && !footerSlot && children) {
    bodySlot = children;
  }

  // 自定义插槽渲染
  const customSlot = globalOptions.customSlotRender
    ? globalOptions.customSlotRender(props)
    : null;

  return (
    <View className={`page-skeleton ${className || ''}`}>
      {customSlot}
      {/* Header 区域 */}
      {headerSlot && (
        <View 
          className="page-skeleton__header"
          style={{ 
            height: capsuleTop && capsuleHeight ? `${capsuleTop + capsuleHeight}px` : 'auto',
            minHeight: capsuleHeight ? `${capsuleHeight}px` : 'auto'
          }}
        >
          {headerSlot}
        </View>
      )}
      {/* Body 区域 */}
      {bodySlot && (
        <View className="page-skeleton__body">
          {bodySlot}
        </View>
      )}
      {/* Footer 区域 */}
      {footerSlot && (
        <View 
          className="page-skeleton__footer"
          style={{ paddingBottom: safeAreaBottom ? `${safeAreaBottom}px` : '0' }}
        >
          {footerSlot}
        </View>
      )}
    </View>
  );
};

// 创建 PageSkeleton 组件，包含静态方法
const PageSkeleton = Object.assign(PageSkeletonComponent, {
  setGlobalOptions: (options: PageSkeletonGlobalOptions) => {
    globalOptions = { ...globalOptions, ...options };
  },
});

export default PageSkeleton;
