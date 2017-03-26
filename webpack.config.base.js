const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  context: resolve(__dirname),
  resolve: {
    extensions: ['.js', '.es6.jsx', '.jsx', '.css'],
    modules: [ 'node_modules' ]
  },
  module: {
    rules: [
      {
        test: /\/memos\/.+\.md$/,
        enforce: 'pre',
        loaders: [resolve(__dirname, './lib/md2react-loader')],
      },
      {
        test: /\/memos\//,
        exclude: /(node_modules|index.js$)/,
        loaders: [resolve(__dirname, './lib/with-birthtime-loader')],
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
          ]
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "en30's memo",
      template: 'lib/index.ejs',
      inject: false
    })
  ]
}
