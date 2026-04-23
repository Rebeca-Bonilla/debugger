const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? (process.env.GITHUB_ACTIONS ? '/debugger/' : '/')
    : '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Debugger';
      return args;
    })
  }
})