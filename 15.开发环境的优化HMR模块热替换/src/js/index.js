require('../css/style.css');
require('../less/style.less');
require('../scss/style.scss');
require('../font/iconfont.css');
const { demo } = require('./print');

function add(x, y) {
  return x + y;
}

add(4, 6);
demo();
// 下一行eslint所有规则无效
// eslint-disable-next-line
console.log('这是首页用到的js文件的index.js');

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('Accepting the updated printMe module!');
    // 引入的文件的操作
    // ........
  });
}
