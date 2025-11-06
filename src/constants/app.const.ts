import env from '@/common/env';

/**
 * 系统级别的常量定义在这里，其他常量定义在 page.const.ts 中
 */
const appConst = {
  CATEGORY_ID: process.env.CATEGORY_ID || '',
  SYSTEM_CODE: process.env.SYSTEM_CODE || '',
  PAY_CHANNEL: process.env.PAY_CHANNEL || '',
  MINA_ORIGIN_ID: process.env.MINA_ORIGIN_ID || '',
  LOCATION_ENABLE: process.env.LOCATION_ENABLE || 0,
  WISHDOM_ENABLE: process.env.WISHDOM_ENABLE || 0,
  UPDATE_ENABLE: process.env.UPDATE_ENABLE || 0,
  BASE_API: 'https://120.26.179.60:3000/',
};

/**
 * 根据不同环境设置
 * @param codeEnv
 */
export function setEnvConst(codeEnv: string) {
  if (codeEnv === 'pro') {
    appConst.BASE_API = 'https://120.26.179.60:3000/';
    // uat
  } else if (codeEnv === 'uat') {
    appConst.BASE_API = 'https://120.26.179.60:3000/';
    // dev/test
  } else if (codeEnv === 'fat') {
    // appConst.BASE_API = 'https://fat-starcard.hellobike.cn/api';
    // appConst.BASE_API = 'http://172.17.179.106:3000/api';
    appConst.BASE_API = 'http://120.26.179.60:3000/api';

    // pre
  } else if (codeEnv === 'pre') {
    appConst.BASE_API = 'https://120.26.179.60:3000/';
  }
}

setEnvConst(env.codeEnv);
env.register(setEnvConst);

export default appConst;
