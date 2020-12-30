'use strict'

// imports
const { body, check, validationResult } = require('express-validator')
const fetch = require('node-fetch')

// sanitise & validate city name
exports.validateQuery = [
  check('city').exists(),
  body('city').trim().escape(),
  check('city').isLength({ min: 1 }),
  check('city').isAlpha(),

  (req, res, next) => {
     const errors = validationResult(req)

     if (!errors.isEmpty()) {
       console.log(`Error detected! Passing to error handler`)
       const errorToDisplay = errors.array()[0]
       next(new Error(errorToDisplay.msg))

     } else {
       console.log('No validation errors detected')
       next()
      }
    }
]


exports.fetchWeatherData = function(req, res, next) {
  const preferredUnits = 'metric'
  const cityName = req.body.city
  const url = `https://api.openweathermap.org/data/2.5/weather?q=
              ${cityName}
              &units=${preferredUnits}
              &appid=64697ade1356a77c85131fda13e3e2f3`
  console.log('Fetching data...')

  fetch(url)
  .then(data => data.json())
  .then(data => {
    if (data.cod === '404') { throw new Error('City not found') }

    const weatherDescription = data.weather[0].description
    const weatherMessage = `The weather in ${cityName} is decribed by: ${weatherDescription}`
    res.render('home', { renderForm: true,
                         message: weatherMessage })
    })
  .catch(err => next(err))
}
