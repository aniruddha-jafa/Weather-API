'use strict'

// imports
const { body, check, validationResult } = require('express-validator')

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
