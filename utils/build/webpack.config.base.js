const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, '../../src');
const outPath = path.join(__dirname, '../../dist');

module.exports = {
  __srcPath__: srcPath,
  __outPath__: outPath,

  publicPath: '/',

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.svg|.png|.jpg/,
        loader: 'file',
      },
    ],
  },

  entry: {},

  output: {
    path: outPath,
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      root: srcPath,
      //
      images: path.join(srcPath, 'images'),
      styles: path.join(srcPath, 'styles'),
      //
      router: path.join(srcPath, 'router'),
      containers: path.join(srcPath, 'containers'),
      components: path.join(srcPath, 'components'),
      services: path.join(srcPath, 'services'),
      //
      actions: path.join(srcPath, 'redux/actions'),
      middlewares: path.join(srcPath, 'redux/middlewares'),
      reducers: path.join(srcPath, 'redux/reducers'),
      sagas: path.join(srcPath, 'redux/sagas'),
      selectors: path.join(srcPath, 'redux/selectors'),
      configureStore: path.join(srcPath, 'redux/configureStore.js'),
    },
  },

  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
    ]),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, 'index.html'),
      filename: 'index.html',
      chunks: ['main', 'commons'],
    }),
  ],

  postcss: function() {
    return [autoprefixer];
  },

  externals: [],
};
