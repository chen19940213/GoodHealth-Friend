const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const buildCmds = {
    weapp: "taro build --type weapp",
    alipay: "taro build --type alipay",
    tt: "taro build --type tt",
    hello: "taro build --type alipay",
    pet: "taro build --type alipay",
    petbos: "taro build --type alipay",
    rent: "taro build --type alipay",
};

const envMaps = {
    wechat: "weapp",
    alipay: "alipay",
    tiktok: "tt",
    mpaas: "hello",
    pet: "pet",
    petbos: "petbos",
    rent: "rent",
};

/**
 * 模拟 CI 注入的 MP_TYPE
 * @param {*} MP_TYPE 
 */
const setOriginMpType = (MP_TYPE) => {
    if (MP_TYPE === 'weapp') {
        process.env.MP_TYPE = 'wechat';
    } else if (MP_TYPE === 'tt') {
        process.env.MP_TYPE = 'tiktok';
    } else if (MP_TYPE === 'hello') {
        process.env.MP_TYPE = 'mpaas';
    } else {
        process.env.MP_TYPE = MP_TYPE;
    }
}

/**
 * 构建产物输出路径
 * @returns 
 */
const getOutputPath = () => {
    let MP_TYPE = process.env.NEW_MP_TYPE;
    const taroEnv = envMaps[MP_TYPE] || MP_TYPE;
    return +process.env.IS_CI === 1 ? 'dist' : 'dist/' + taroEnv;
};

const resolvePath = (...paths) => {
    const cwd = process.cwd();
    return path.resolve(cwd, ...paths);
};

/**
 * 设置自定义环境变量
 * @param {*} appEnv 端标识
 */
const setCustomAppEnv = (appEnv) => {
    const envFile = resolvePath(`dotenv/.${appEnv}.env`);

    if (fs.existsSync(envFile)) {
        const envConfig = dotenv.parse(fs.readFileSync(envFile, 'utf8'));
        for (const key in envConfig) {
            if (key.startsWith('FUSION_APP_')) {
                process.env[key] = envConfig[key];
            }
        }
    } else {
        console.warn(`Environment file ${envFile} does not exist.`);
    }
}

/**
 * 读取自定义环境变量
 * @description 读取以 FUSION_APP_ 开头的环境变量，并将其值转换为 JSON 字符串
 */
const getCustomAppEnv = () => {
    const customAppEnv = {};

    for (const key in process.env) {
        if (key.startsWith('FUSION_APP_')) {
            const envKey = key.replace('FUSION_APP_', '');
            customAppEnv[envKey] = JSON.stringify(process.env[key]);
        }
    }
    return customAppEnv;
}

module.exports = {
    buildCmds,
    envMaps,
    getOutputPath,
    resolvePath,
    setCustomAppEnv,
    getCustomAppEnv,
    setOriginMpType,
};