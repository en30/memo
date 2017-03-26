const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './lib/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname),
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.es6.jsx', '.jsx', '.css'],
    modules: [ 'node_modules' ]
  },
  module: {
    rules: [
      {
        test: /\/memos\/.+\.md$/,
        enforce: 'pre',
        loaders: [resolve(__dirname, 'md2react-loader')],
      },
      {
        test: /\/memos\//,
        exclude: /(node_modules|index.js$)/,
        loaders: [resolve(__dirname, 'with-birthtime-loader')],
      },
      {
        test: /(\.jsx?|\/memos\/.+\.md)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['env', {"modules": false}], 'react',],
          plugins: [
            'transform-function-bind',
            'transform-class-properties',
            'transform-object-rest-spread',
            'react-hot-loader/babel'
          ]
        }
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
}
