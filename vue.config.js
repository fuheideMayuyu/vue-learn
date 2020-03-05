const path = require('path')

module.exports = { 

  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
  },
  
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
}