'use strict'

const express = require('express')
const app = express()


const path = require('path')
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))  // use to serve static assets e.g. CSS

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index')
})



const portToUse = 3000
app.listen(portToUse, () => {
  console.log(`Listening on port ${portToUse}...`)
})
