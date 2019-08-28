const Visualizer = require('webpack-visualizer-plugin');
const path = require('path');

module.exports = {
  publicPath: '/',
  configureWebpack: {
    plugins: [
      new Visualizer({ filename: './statistics.html' }),
    ],
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
    config.resolve.symlinks(false);
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.configFile = path.resolve(__dirname, ".eslintrc.js");
        return options;
      });
  },
  lintOnSave: true,

  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/_variables.scss";
              @import "@/scss/_mixins.scss";`,
      },
    },
  },

  assetsDir: 'static',
  transpileDependencies: [
    // can be string or regex
    '@philly/vue-comps',
    'pvd',
  ],
};
