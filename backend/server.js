var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var router = require('./route/index.js')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, '../frontend/public')))

app.use("/api", router)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './../frontend/views/index.html'))
})


module.exports = app