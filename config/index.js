import path from "path";

const config = {
  projectName: "taro-web",
  date: "2021-9-17",
  designWidth: 375,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2,
    '375': 2 / 1
  },
  sourceRoot: "src",
  outputRoot: "dist",
  alias: {
    "@": path.resolve(__dirname, "..", "src"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/components": path.resolve(__dirname, "..", "src/components")
  },
  plugins: [
    '@tarojs/plugin-platform-weapp-qy'
  ],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {
    }
  },
  framework: "react",
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      // url: {
      //   enable: true,
      //   config: {
      //     limit: 1024 // 设定转换尺寸上限
      //   }
      // },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      },
    },
    // prerender: {
    //   match: 'pages/waybill/index', // 所有以 `pages/waybill/` 开头的页面都参与 prerender
    //   include: ['pages/ofd/index'], // `pages/waybill/index` 也会参与 prerender
    //   exclude: ['pages/timeliness/**', 'pages/financial/**'],
    // },
    imageUrlLoaderOption: {
      limit: 3072
    },
    webpackChain(chain) {
 
      chain.merge({
        // optimization: {
        //   splitChunks: {
        //     cacheGroups: {
        //       default: false,
        //       components: {
        //         test: function(module, chunks) {
        //             if (/src\/components\//.test(module.context)) {
        //                 return true
        //             }
        //         },
        //         chunks: 'all',
        //         name: 'components',
        //         minChunks: 2,
        //         priority: 400
        //       },
        //       static: {
        //         test: function(module, chunks) {
        //             if (/src\/static\//.test(module.context)) {
        //                 return true
        //             }
        //         },
        //         chunks: 'all',
        //         name: 'static',
        //         minChunks: 2,
        //         priority: 300
        //       },
        //       vendor: {
        //         name: 'vendor',
        //         test: /[\\/]node_modules[\\/]/,
        //         chunks: 'all',
        //         minChunks: 1,
        //         priority: 100
        //       }
        //   },
        //   chunks: 'async',
        //   minSize: 30000,
        //   minChunks: 1,
        //   maxAsyncRequests: 5,
        //   maxInitialRequests: 3,
        //   automaticNameDelimiter: '~',
        //   name: true
        // }
        // },
        })

      chain.module
        .rule('script')
        .use('linariaLoader')
        .loader('linaria/loader')
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
