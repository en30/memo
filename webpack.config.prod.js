const webpack = require('webpack');
const cloneDeep = require('lodash/cloneDeep')
const common = require('./webpack.config.base.js')

let config = Object.assign(cloneDeep(common), {
  entry: [
    'babel-polyfill',
    './lib/production.js'
  ],
  devtool: false,
});

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": "'production'"
  }),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false,
    },
    comments: false,
    sourceMap: false,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HashedModuleIdsPlugin()
)

module.exports = config;
