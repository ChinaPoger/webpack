const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { LoaderOptionsPlugin } = require('webpack');
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
  entry: './src/js/index.js',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build')
  },
  mode: 'development',
  module: {
    rules: [
      {
        //css-loader吧css加入到js文件里面，style-loader是插入到dom里面去，这边是有顺序的，从右到左 
        //安装方式是 npm i style-loader css-loader -D
        test: /\.css$/,
        //多个loader
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader']
        //单个loader
        //loader:'style-loader'
      },
      {
        //less-loader把less翻译成css,css-loader吧css加入到js文件里面，style-loader是插入到dom里面去，这边是有顺序的，从右到左
        //安装方式是 npm i style-loader css-loader less less-loader -D 
        test: /\.less$/,
        //多个loader
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
        //单个loader
        //loader:'style-loader'
      },
      {
        //sass-loader把less翻译成css,css-loader吧css加入到js文件里面，style-loader是插入到dom里面去，这边是有顺序的，从右到左
        //安装方式是 npm i style-loader css-loader node-sass sass-loader -D 
        test: /\.scss$/,
        //多个loader
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
        //单个loader
        //loader:'style-loader'
      }


    ]
  },
  plugins: [
    //默认会创建一个空的html,目的是自动引入打包的资源(js,css...)
    //需要输出几个页面，就需要new几个
    //安装方式 npm i html-webpack-plugin -D
    new HtmlWebpackPlugin({
      //指定一个模板
      template: './src/index.html',
      //指定输出的文件名
      filename: 'index.html',

    }),
    //会把各种css集成到一个css文件
    //注意这边注册好插件之后，loader最后一步的翻译到html中的Loader需要使用MiniCSSExtractPlugin.loader,这个插件不支持打包分离css
    //安装方式npm i mini-css-extract-plugin -D
    new MiniCSSExtractPlugin({
      filename: 'gebo.css'
    })

  ]

}