'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.dist = false

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'dist/slipit.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [path.join(__dirname, 'src')],
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css!sass'
      )
    }, {
      test: /\.html$/,
      loader: 'html'
    }]
  },
  get plugins () {
    let plugins = []

    plugins.push(new ExtractTextPlugin('dist/slipit.css', {
      allChunks: true
    }))

    if (exports.dist) {
      plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }))

      plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }))
    }

    return plugins
  },
  externals: {
    'angular': 'window.angular',
    'jquery': 'window.jQuery',
    'hammer': 'window.Hammer'
  }
}
