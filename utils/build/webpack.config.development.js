const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config.base');

const srcPath = baseConfig.__srcPath__;
const outPath = baseConfig.__outPath__;

module.exports = Object.assign(baseConfig, {
  debug: true,
  devtool: 'eval-cheap-module-source-map',

  entry: Object.assign(baseConfig.entry, {
    main: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      'babel-polyfill',
      'whatwg-fetch',
      path.join(srcPath, '/index.js'),
    ],
  }),

  module: Object.assign(baseConfig.module, {
    loaders: baseConfig.module.loaders.concat([
      {
        test: /\.scss/,
        loaders: ['style', 'css', 'sass'],
      },
    ]),
  }),

  plugins: baseConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]),
});
