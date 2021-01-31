require('../css/style.css');
require('../less/style.less');
require('../scss/style.scss');
require('../font/iconfont.css');

function add(x, y) {
  return x + y;
}

add(5, 6);
// 下一行eslint所有规则无效
// eslint-disable-next-line
console.log('这是首页用到的js文件的index.js');
