'use strict'

const express = require('express')
const app = express()


// Define paths
const path = require('path')
const publicPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')

app.use(express.static(publicPath))  // use to serve static assets e.g. CSS


// view engine
const hbs = require('hbs')
hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs')


// Routes
app.get('/', (req, res) => {
  res.render('weather', { title: 'Home', weather: 'sunnny' })
})


app.get('*', (req, res) => {
  res.render('404', {title: 'Error 404'})
})



const portToUse = 3000
app.listen(portToUse, () => {
  console.log(`Listening on port ${portToUse}...`)
})
