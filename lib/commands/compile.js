const Webpack = require('webpack')
const webpackConfig = require('../../webpack.config.prod.js')

exports.command = 'compile'

exports.description = 'generate static site'

exports.builder = {}

exports.handler = () => {
  const compiler = Webpack(webpackConfig)
  compiler.run((err, stats) => {
    if(err) throw(err);
    console.log(stats.toString({colors: true}))
  })
}
