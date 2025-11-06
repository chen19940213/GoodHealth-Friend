export default {
  navigationBarTitleText: '',
  navigationBarBackgroundColor: '#F4F6F9',
  navigationStyle: 'custom',
  enableShareAppMessage: false,
  ...process.env.TARO_ENV === 'alipay' ? {
    transparentTitle: 'always',
    titlePenetrate: 'YES',
    allowsBounceVertical: 'NO',
    pullRefresh: false,
  } : {},
};
