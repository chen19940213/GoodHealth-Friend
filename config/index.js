const pkg = require('../package.json');
const { getOutputPath, resolvePath, getCustomAppEnv } = require('../scripts/utils');

const outputRoot = getOutputPath()

const config = {
  projectName: pkg.name,
  date: '2025-03-14',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    375: 2,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot,
  plugins: [
    resolvePath('config/plugins/plugin-import-scss.js'),
  ],
  env: {
    ...getCustomAppEnv(),
    TARO_ENV: JSON.stringify(process.env.TARO_ENV),
    MP_TYPE: JSON.stringify(process.env.MP_TYPE),
    NEW_MP_TYPE: JSON.stringify(process.env.NEW_MP_TYPE),
    CODE_ENV: JSON.stringify(process.env.CODE_ENV || ''),
    IS_CI: JSON.stringify(process.env.IS_CI || ''),
  },
  alias: {
    '@': resolvePath('src'),
    '@hb/taro-fusion-components': resolvePath('src/shims/hb-taro-fusion-components'),
    '@hb/taro-fusion-components/lib/apis/Native/types': resolvePath('src/shims/hb-native-types'),
    '@hb/wisdom-config-sdk': resolvePath('src/shims/wisdom-config-sdk'),
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: false,
    },
  },
  cache: {
    // Webpack 持久化缓存配置，开启后有bug，建议关闭。
    // 默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    enable: false,
  },
  copy: {
    // 拷贝 mini.project.json 文件
    patterns:
      process.env.TARO_ENV === 'alipay'
        ? [
            {
              from: 'mini.project.json',
              to: outputRoot + '/mini.project.json',
            },
          ]
        : [],
  },

  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 2048,
        },
      },
      cssModules: {
        enable: false,
        config: {
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },

    optimizeMainPackage: { enable: true },

    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    output: {
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true,
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[chunkhash].css'
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
    }
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
