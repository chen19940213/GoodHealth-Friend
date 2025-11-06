/* eslint-disable */

let APP_CONFIG = {
  default: {} as Taro.AppConfig,
};

if (process.env.NEW_MP_TYPE === 'weapp') {
  APP_CONFIG = require('./configs/weapp.config.ts');
}

if (process.env.NEW_MP_TYPE === 'alipay') {
  APP_CONFIG = require('./configs/alipay.config.ts');
}

if (process.env.NEW_MP_TYPE === 'tt') {
  APP_CONFIG = require('./configs/tt.config.ts');
}

if (process.env.NEW_MP_TYPE === 'hello') {
  APP_CONFIG = require('./configs/hello.config.ts');
}

if (process.env.NEW_MP_TYPE === 'pet') {
  APP_CONFIG = require('./configs/pet.config.ts');
}

if (process.env.NEW_MP_TYPE === 'petbos') {
  APP_CONFIG = require('./configs/petbos.config.ts');
}

if (process.env.NEW_MP_TYPE === 'rent') {
  APP_CONFIG = require('./configs/rent.config.ts');
}

// @ts-ignore
if (process.env.NODE_ENV === 'development' && +process.env.IS_CI !== 1) {
  const slimConf = require('../.slim.config.js');
  const mptype = process.env.NEW_MP_TYPE || '';
  const slimList = slimConf[mptype] || [];

  const subPackages = APP_CONFIG.default.subPackages || [];

  if (slimList.length) {
    APP_CONFIG.default.subPackages = subPackages.filter((sub) => {
      const subname = sub.root?.split('/')?.[1] || '';
      return slimList.includes(subname);
    });
  }
}

export default defineAppConfig(APP_CONFIG.default);
