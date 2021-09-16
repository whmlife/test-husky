/*eslint-disable no-console, no-var */
var express = require('express')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackConfig = require('./webpack.config')

var app = express()

app.use(
  webpackDevMiddleware(webpack(webpackConfig), {
    publicPath: '/__build__/',
    stats: {
      colors: true
    }
  })
)

app.use(express.static(__dirname))

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})
