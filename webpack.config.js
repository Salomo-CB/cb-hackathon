var webpack = require('webpack');

module.exports = {
  entry: {
    'base': './pages/base/index.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'none' } }
    ],
    loaders: [
      { test: /\.js$|\.tag$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
};