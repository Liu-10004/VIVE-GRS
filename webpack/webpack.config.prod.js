const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config')

// const prefix = `/home/${
//   process.env.DEPLOYMENT_ENV !== 'production' ? 'dev' : 'prod'
// }/`

const plugins = baseConfig.plugins.concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': "'production'",
    // @see https://github.com/vivedu/VIVEDU-Homepage/issues/192
    'process.env.BUILD_VERSION': JSON.stringify(process.env.BUILD_VERSION),
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compressor: { warnings: false },
    output: { comments: false },
  }),
])

const prodConfig = Object.assign({}, baseConfig, {
  plugins,
  output: Object.assign({}, baseConfig.output),
})

prodConfig.module.rules.forEach((rule) => {
  if (String(rule.test) === '/\\.scss$/') {
    // 由于 style-loader 会将所有的 css 样式插入到页面的 <style> 标签里，
    // 所以需要把 style-loader 去除
    // eslint-disable-next-line no-param-reassign
    rule.loaders = ExtractTextPlugin.extract(rule.loaders.slice(1))
  }
})

module.exports = prodConfig
