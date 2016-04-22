/**
 * mill - webpack.config.production.js
 *
 * Authors:
 *   xeodou <xeodou@gmail.com>
 */

'use strict';

/**
 * Module dependencies.
 */
const webpack = require('webpack');
const path = require('path');
const MillPlugin = require('webpack-mill-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './index',
  output: {
    filename: 'modern.js',
    path: path.join(__dirname, '.'),
    publicPath: './',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.html$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-mill']
      },
    }],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new MillPlugin('modern'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __DEVTOOLS__: false,
    })
  ]
};
