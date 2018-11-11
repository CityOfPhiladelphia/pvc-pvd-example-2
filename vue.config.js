const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  chainWebpack: (config, ...rest) => {
    config.resolve.set('symlinks', false)
  }
}
