const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const webpackConfig = require('../../webpack.config.dev.js')
const resolve = require('path').resolve
const open = require('opn')

exports.command = ['server', '*']

exports.description = 'start development server'

exports.builder = {}

exports.handler = ({host = '127.0.0.1', port = 8080}) => {
  const compiler = Webpack(webpackConfig)
  const server = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: resolve(__dirname, '../../dist'),
    publicPath: '/',
    stats: {
      colors: true
    },
  });
  server.listen(port, host, () => {
    const uri = `http://${host}:${port}`
    console.log(`Starting server on ${uri}`);
    open(uri)
  })
};
