const webpack = require('webpack');
// 我们这里的配置文件是一个函数
const webpackConfig = require('./config/webpack.config.js');

const compiler = webpack(webpackConfig());

// 遍历hooks，添加回调，输出`hookName`
Object.keys(compiler.hooks).forEach(hookName => {
  if (compiler.hooks[hookName].tap) {
    compiler.hooks[hookName].tap('anyString', () => {
      console.log(`run -> ${hookName}`);
    });
  } 
});

// 触发webpack的编译流程
compiler.run();