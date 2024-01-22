const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack') // 正确引入webpack及其插件

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
        // 或者你想要定义的其他编译时变量
      }),
    ]
  },
})
// module.exports = {
//   configureWebpack: {
//     plugins: [
//       new DefinePlugin({
//         '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
//         // 或者你想要定义的其他编译时变量
//       }),
//     ]
//   },
//   // ... 其他Vue CLI配置项
// }

// module.exports = defineConfig({
//   pluginOptions: {
//     'unplugin-vue-components': {
//       resolvers: [
//         VantResolver(),
//       ],
//     },
//   },
// });