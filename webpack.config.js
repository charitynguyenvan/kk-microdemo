const nodeExternals = require('webpack-node-externals')
module.exports = {
  entry: {
    // 'lambda-1': './lambda.js'
    'micro-1': './service-1.js',
    'micro-2': './service-2.js',
    'e-store': './event-store.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js',
    // library: '', libraryTarget: 'commonjs'
  },
  target: 'node',
  externals: [nodeExternals()]
}
