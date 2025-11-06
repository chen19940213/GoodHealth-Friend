export default {
  pages: [
    'pages/index/index',
    'pages/calendar-trend/calendar-trend',
    'pages/my/my',
    'pages/settings/settings',
    'pages/profile/profile',
    'pages/nickname-edit/nickname-edit',
    'pages/login/login',
  ],
  subPackages: [
    {
      root: 'pages/webview',
      pages: ['webview'],
    },
  ],
  tabBar: {
    list: [
      {
        iconPath: './assets/tabs/homepage.png',
        selectedIconPath: './assets/tabs/homepage_selected.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: './assets/tabs/my.png',
        selectedIconPath: './assets/tabs/my_selected.png',
        pagePath: 'pages/my/my',
        text: '我的',
      },
    ],
    color: '#879099',
    selectedColor: '#FF5078',
    backgroundColor: '#fff',
    borderStyle: 'black',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '哈啰',
    navigationBarTextStyle: 'black',
    enableInPageRenderInput: 'YES',
    pullRefresh: false,
    permission: {
      customShowNavOption: 'false',
      customShowHome: 'false',
    },
  },
};
