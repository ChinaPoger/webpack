const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');
const { triggerAsyncId } = require('async_hooks');
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
    path: resolve(__dirname, 'dist'),
     // 打包后路径公式：静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径
    publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        //css-loader吧css加入到js文件里面，style-loader是插入到dom里面去，这边是有顺序的，从右到左 
        //安装方式是 npm i style-loader css-loader -D
        test: /\.css$/,
        //多个loader
        use: [ 'style-loader','css-loader', 'postcss-loader']
        //单个loader
        //loader:'style-loader'
      },
      {
        //less-loader把less翻译成css,css-loader吧css加入到js文件里面，style-loader是插入到dom里面去，这边是有顺序的，从右到左
        //安装方式是 npm i style-loader css-loader less less-loader -D 
        test: /\.less$/,
        //多个loader
        use: [ 'style-loader','css-loader', 'less-loader', 'postcss-loader']
        //单个loader
        //loader:'style-loader'
      },
      {
        //sass-loader把less翻译成css,css-loader吧css加入到js文件里面，style-loader是插入到dom里面去，这边是有顺序的，从右到左
        //安装方式是 npm i style-loader css-loader node-sass sass-loader -D 
        test: /\.scss$/,
        //多个loader
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        //单个loader
        //loader:'style-loader'
      },
      {
        //url-loader可以打包图片资源
        //安装方式 npm i url-loader file-loader -D
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            //https://webpack.js.org/loaders/url-loader/#mimetype 官网解释
            loader: 'url-loader',
            options: {
              publicPatsh:'./images/',
              outputPath:'images/',
              limit: 10 * 1024,
              encoding: 'hex',//["utf8","utf16le","latin1","base64","hex","ascii","binary","ucs2"].
             // name:'[hash:10].[ext]'
            },
          },
        ],
      },
      {
        //这个不是用来打包html，这个是处理html中引入图片得到loader
        //安装方式 npm i 
        test:/\.html$/,
        use:'html-loader'
      }
      ,
      {
        //使用排除法把剩余需要打包的资源包括进去，使用file-loader打包
        // 使用方式: npm i file-loader -D
        exclude:/\.(png|jpg|gif|js|less|scss|css|html|json)$/i,
        loader:'file-loader',
        options:{
          outputPath:'font/',
          publicPath:'./font',
          name:'[name][hash:8].[ext]'
        }

      }
      ,
      {
        //eslint只检查js语法，使用方法是加eslint-loader,zai package.json中添加eslint-loader所需要加载的检查的规范，例如airbnb-base
        //安装方式：npm i eslint-loader eslint eslint-config-airbnb-base eslint-plugin-import -D
        test:/\.js$/,
        loader: 'eslint-loader',
        // 只检查自己写的代码，不检查第三方库的代码
        exclude: /node_modules/,
        options:{
            fix:true
        }
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
    }),
    //压缩css
    //安装方式  npm i optimize-css-assets-webpack-plugin -D
    //new OptimizeCssAssetsWebpackPlugin()

  ],
//devserver热呈现，可以在更新资源内容的时候做实时更新到内存，并且页面实时刷新
//安装方式 npm i webpack-dev-server 
//启动方式 npx webpack serve
//https://www.cnblogs.com/tugenhua0707/p/9418526.html 参数的定义
  devServer:{
    port:3001,
    open:true,
    compress:true,
    proxy: {
      '/api': {
        target: 'http://news.baidu.com', // 目标接口的域名
        // secure: true,  // https 的时候 使用该参数
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/api' : ''  // 重写路径
        }
      }
    }
  }

}