const path = require('path')
const nodeExternals = require('webpack-node-externals')

const WebpackSourceMapSupport = require('webpack-source-map-support')
const BabiliPlugin = require('babili-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    'index': './source/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new WebpackSourceMapSupport(),
    new BabiliPlugin(),
    new StatsPlugin('stats.json', {
      chunkModules: true,
      exclude: /node_modules/
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
