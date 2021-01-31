const { resolve } = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  mode: 'development',
  module: {
    rules: []
  },
  plugins: []

}