var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [
      {
  	    test: /\.html$/,
  	    loader: "file?name=[name].[ext]"
	    },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};