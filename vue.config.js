// const fs = require('fs')

module.exports = {
  lintOnSave: false,

  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 强制内联CSS
  css: {
    extract: false,
    // loaderOptions: {
    //   sass: {
    //     data: fs.readFileSync('examples/variables.scss', 'utf-8')
    //   }
    // }
  },
  //扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(/packages/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}