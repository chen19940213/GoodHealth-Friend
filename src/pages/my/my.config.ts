export default {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
  enableShareAppMessage: false,
  ...process.env.TARO_ENV === 'alipay' ? {
    transparentTitle: 'always',
    titlePenetrate: 'YES',
    allowsBounceVertical: 'NO',
    pullRefresh: false,
  } : {},
};
