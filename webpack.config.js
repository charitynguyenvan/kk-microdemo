const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: {
    'service-1': './service-1.js',
    'service-2': './service-2.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  target: 'node',
  externals: [nodeExternals()]
}
