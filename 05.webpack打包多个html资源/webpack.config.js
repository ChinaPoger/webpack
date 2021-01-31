const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // entry入口指示webpack以哪个文件为入口起点开始打包，分析构建内部依赖图
  // 单入口.如果只有一个入口，使用字符串，指定文件一个绕口文件，打包一个chunk，输出一个bundle,chunk的名称是默认
  //entry: ['./src/index.js'],
  // 多入口，使用数组的形式，所有的入口文件形成一个chunk，名称是默认的，输出也是只有一个bundle
  //entry: ['./src/index.js', './src/main.js'],
  //多入口，使用对象的形式,有几个入口文件就会生成几个chunk，并输出几个Bundle,cunck的名称是key
  // entry: {
  //   one: './src/index.js',
  //   two: './src/main.js'
  // },
  //特殊用法
  entry: {
    vendor: ['./src/js/common.js', './src/js/jQuery.js'],
    index: './src/js/index.js',
    cart: './src/js/cart.js',
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build')
  },
  mode: 'development',
  module: {
    rules: []
  },
  plugins: [
    //默认会创建一个空的html,目的是自动引入打包的资源(js,css...)
    //需要输出几个页面，就需要new几个
    new HtmlWebpackPlugin({
      //指定一个模板
      template: './src/index.html',
      //指定输出的文件名
      filename: 'index.html',
      //指定chunk
      chunks: ['index', 'vendor'],
      //压缩
      minify: {
        //移除空格
        collapseWhitespace: true,
        //移除注释
        removeComments: true
      }
    }),
    new HtmlWebpackPlugin({
      //指定一个模板
      template: './src/cart.html',
      //指定chunk
      chunks: ['cart', 'vendor'],
      //指定输出的文件名
      filename: 'cart.html',
    })
  ]

}