module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5, // 基准值，通常设置为你设计稿的基础字体大小（例如：16px）
        unitPrecision: 5, // 转换后的精度，允许小数点后几位
        propList: ['*'], // 需要转换的属性列表，'*' 表示所有属性，也可以自定义如 ['font-size', 'line-height']
        selectorBlackList: [], // 忽略转换的的选择器，比如正则表达式匹配的类名
        replace: true, // 是否直接替换值，而不是在原来的值后面添加备用单位
        mediaQuery: false, // 允许在媒体查询中转换px
        minPixelValue: 0, // 设置要替换的最小像素值，小于这个值的px不转换
      }
    }
  }