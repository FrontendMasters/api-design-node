// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require('express')
const fs = require('fs')
const jsonData = { count: 12, message: 'sup' }
const port = 3000

const app = express()

app.get('/', (req, res) => {
  // fs.readFile('index.html', function(err, buffer) {
  //   const html = buffer.toString()

  //   res.setHeader('Content-Type', 'text/html')
  //   res.send(html)
  // })

  res.sendFile(`${__dirname}/index.html`, err => {
    if (err) res.status(500).send(err)
  })
})

app.get('/data', (req, res) => {
  res.json(jsonData)
})

app.listen(port, () => {
  console.log(`Errthang good on ${port}`)
})
