/*
安装css兼容性的依赖
npm i post-loader postcss-preset-env -D
load块在最后添加'postcss-loader'
需要在package.json的同级目录下面创建postcss.config.js文件
*/
module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: [
        "defaults",
        "Android 4.1",
        "iOS 7.1",
        "Chrome>31",
        "ff>31",
        "ie>=8",
        "last 2 versions",
        ">0%"
      ]
    })
  ]
}