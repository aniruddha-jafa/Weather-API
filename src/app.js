'use strict'

const express = require('express')
const app = express()

const path = require('path')
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})



const portToUse = 3000
app.listen(portToUse, () => {
  console.log(`Listening on port ${portToUse}...`)
})
