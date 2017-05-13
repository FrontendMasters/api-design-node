const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const jsonData = { count: 12, message: 'hey' }

app.get('/', function (req, res) {
  fs.readFile('index.html', function (err, buffer) {
    if (err) {
      res.status(500).send(err.message)
    }
    var html = buffer.toString()
    res.setHeader('Content-Type', 'text/html')
    res.send(html)
  })

  /* res.sendFile(path.join(__dirname, './index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  }) */
})

app.get('/data', function (req, res) {
  res.json(jsonData)
})

const PORT = 3000
app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`)
})
