const webpack = require('webpack');
const cloneDeep = require('lodash/cloneDeep')
const common = require('./webpack.config.base.js')

let config = Object.assign(cloneDeep(common), {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './lib/development.js'
  ],
  devtool: 'inline-source-map',
})

config.module.rules.find((rule) => rule.loader === 'babel-loader').query.plugins.push(
  'react-hot-loader/babel'
)

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
);

module.exports = config;
