import React, { PureComponent, ReactNode } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import { FusionScrollView, PageFloatLayout, SafeAreaView } from '@hb/taro-fusion-components';
import './index.scss';

interface IDrawerProps {
  isOpen: boolean;
  className?: string;
  children?: ReactNode;
  title?: string;
  onClose?: () => void;
}

export default class Drawer extends PureComponent<IDrawerProps> {
  state = {
  };

  panelRef = React.createRef<PageFloatLayout>();

  render() {
    const {
      className, isOpen, children, title, onClose = () => null,
    } = this.props;
    return (
       <PageFloatLayout
          ref={this.panelRef}
          isOpen={isOpen}
          className={classNames('com-drawer-wrapper', className)}
          onHide={() => onClose()}
        >
          <View className='drawer-panel-view'>
             <View className='indicator-bar' />
             <View className='drawer-title-view'>
               {title}
               <View className='close' onClick={() => {
                  this.panelRef.current?.setIsOpen(false);
               }} />
             </View>
             <View className='drawer-body-view'>
                <FusionScrollView
                  className='drawer-body-scroll'
                  scrollY
                >
                  {children}
                  <SafeAreaView safeAreaInsetBottom />
                </FusionScrollView>
             </View>
          </View>
       </PageFloatLayout>
    );
  }
}
