const { a, add } = require('./one');


function add2 () {
  add(1, 2);
}
let b = add(a, 100);

module.exports = { b, add2 };