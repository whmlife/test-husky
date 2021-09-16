/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

// this regex should be modified to match your setup.
// in this app, we know route components are any files
// matching routes/*.js or routes/SOMETHING/*.js
// routes/components/*.js will be ignored
var routeComponentRegex = /routes\/([^\/]+\/?[^\/]+).js/

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/app.js',

  output: {
    path: __dirname + '/__build__',
    filename: 'app.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      // make sure to exclude route components here
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: routeComponentRegex,
        loader: 'babel'
      },
      // lazy load route components
      {
        test: routeComponentRegex,
        include: path.resolve(__dirname, 'src'),
        loaders: ['bundle?lazy', 'babel']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
