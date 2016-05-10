// Karma configuration
// Generated on Fri May 06 2016 18:45:57 GMT+0300 (EEST)
var webpackConfig = require('./utils/build/webpack.config.test.js');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.min.js',
      'test/**/*.js',
    ],
    preprocessors: {
      'test/**/*.js': ['webpack'],
    },
    webpack: webpackConfig,
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  });
}
