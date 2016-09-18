var webpack = require('webpack');
var config = require('./webpack.base.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.plugins = (config.plugins || []).concat([
  // this allows uglify to strip all warnings
  // from Vue.js source code.
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  // This minifies not only JavaScript, but also
  // the templates (with html-minifier) and CSS (with cssnano)!
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin("../css/main.css")
]);

config.vue = {
  loaders: {
    stylus: ExtractTextPlugin.extract('css!stylus')
  },
  autoprefixer: {
    browsers: ['safari >= 9', 'ie >= 9']
  }
}

module.exports = config