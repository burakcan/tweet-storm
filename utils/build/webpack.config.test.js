const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const srcPath = baseConfig.__srcPath__;
const outPath = baseConfig.__outPath__;

module.exports = Object.assign(baseConfig, {
  debug: true,
  devtool: 'eval-cheap-module-source-map',

  entry: {},
  output: {},

  module: Object.assign(baseConfig.module, {
    preLoaders: [],
    loaders: baseConfig.module.loaders.concat([{
      test: /\.scss/,
      loaders: ['style', 'css', 'postcss', 'sass'],
    }]),
  }),

  plugins: [],

  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }
});
