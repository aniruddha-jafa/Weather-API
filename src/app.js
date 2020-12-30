'use strict'


// import external modules
const express = require('express')
const path = require('path')
const hbs = require('hbs')

// initialise app
const app = express()

// import helper functions (self-defined)
const { validateQuery, fetchWeatherData } = require('./helperFunctions')

// Define useful variables
const urlEncodedParser = express.urlencoded({ extended: false })
const portToUse = 3000
const publicPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')

// set view engine
hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs')
app.use(express.static(publicPath))  // use to serve static assets e.g. CSS

// Routes
app.get('/', (req, res) => {
  res.render('home', { renderForm: true,
                       message: '' })
})

app.post('/',
  urlEncodedParser,
  validateQuery,
  fetchWeatherData,
  (err, req, res, next) => {
    console.error(err)
    res.render('home', { renderForm: true,
                         message: `Please try again, ${err.message}` })
  }
)

app.get('*', (req, res) => {
  res.render('home', { renderForm: false,
                       message: 'Error 404: Page not found' })
})


app.listen(portToUse, () => {
  console.log(`Listening on port ${portToUse}...`)
})
