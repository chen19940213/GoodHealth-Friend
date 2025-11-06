import { sources } from 'webpack';

const { RawSource } = sources;

const platformConfs = {
  alipay: {
    appFile: 'app.acss',
    commomFile: 'common.acss',
    source: `@import './global.acss';\n@import './common.acss';\n`,
    global: 'global.acss',
    chunkName: '[name].acss'
  },
  tt: {
    appFile: 'app.ttss',
    commomFile: 'common.ttss',
    source: `@import './global.ttss';\n@import './common.ttss';\n`,
    global: 'global.ttss',
    chunkName: '[name].ttss'
  }
}

/**
 * Fix: 支付宝 common.acss 优先级小于 app.acss 
 * @see https://github.com/NervJS/taro/issues/12778
 * @param {Object} ctx 插件上下文
 * @param {Object} options 配置
 */
export default function(ctx, options) {
  // 当前的平台
  const platform = process.env.TARO_ENV;

  const platformConf = platformConfs[platform];

  if (!platformConf) {
    return
  }

  const { commomFile, appFile, source, global, chunkName } = platformConf;

  options = Object.assign({ platform }, options)
  if (process.env.TARO_ENV !== options.platform) {
    return
  }

  /**
   * 修改编译后文件
   */
  ctx.modifyBuildAssets(({ assets }) => {
    /**
     * 新增 app.acss 用以导入全局及公共样式
     */
    assets[appFile] = new RawSource(source);
    /**
     * 防止 common.acss 为空的情况
     */
    if (!assets[commomFile]) {
      assets[commomFile] = new RawSource('');
    }
  })

  /**
   * 修改 miniCssExtractPlugin 配置:将 app.acss 改名为 global.scss
   */
  ctx.modifyWebpackChain(({ chain }) => {
    chain.plugin('miniCssExtractPlugin').tap(args => {
      args[0].filename = function(pathData) {
        if (pathData.chunk.name === 'app') {
          return global;
        }
        return chunkName;
      }
      return args
    })
  })
}