const express = require('express')
const jsonData = { count: 12, message: 'sup' }
const port = 3000

const app = express()

app.get('/', (req, res) => {
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
