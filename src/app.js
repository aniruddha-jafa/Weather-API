'use strict'


// import external modules
const express = require('express')
const path = require('path')
const hbs = require('hbs')

// initialise app
const app = express()

// import helper functions (self-defined)
const { validateQuery } = require('./helperFunctions')
const { renderHomePage } = require('./helperFunctions')

// Define useful variables
const urlEncodedParser = express.urlencoded({ extended: false })
const portToUse = 3000

// Define paths for static assets
const publicPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../views/partials')
app.use(express.static(publicPath))  // use to serve static assets e.g. CSS

// set view engine
hbs.registerPartials(partialsPath)
app.set('view engine', 'hbs')

// Routes
app.get('/', renderHomePage)

app.post('/',
  urlEncodedParser,
  validateQuery,
  renderHomePage,
  (err, req, res, next) => {
    console.error(err)
  }
)

app.get('*', (req, res) => {
  res.render('404', { title: 'Error 404' })
})


app.listen(portToUse, () => {
  console.log(`Listening on port ${portToUse}...`)
})
