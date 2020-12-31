# What's the weather like? :sunny: :snowflake: :umbrella:
## A back-end mini-project

December 2020 - my first server-side, javascript project :blush:

:: Main learning goals
- sanitise and validate a simple form
- query an API from the server (no client-side 'fetch' etc)
- display results on the client side

:: Basic functionality
- search form to get city name from user
- sanitise and validate input
- query a weather API (e.g. OpenWeatherMap)
- display a concise weather description for the city
- on errors, display errors message and re-render the search form

:: Key tools used
- Node, Express
- rendering: handlebars
- validation: express-validator
- weather API provided by: OpenWeatherMap
- making API requests: node-fetch

:: Acknowledgements

The initial inspiration for such a project (a weather API client) came from Mead & Percival's _Complete Nodejs course 3rd edition_. But unlike the app from the course, which also contains a client-side script, this app is server-based i.e. no client-side scripts are used. In particular, this project:
- initiates the http request for the weather API from the server, not from the web browser
- adds form sanitisation and validation
- uses node-fetch instead of request (which is now deprecated) to make http requests
- uses the OpenWeatherMap API instead of the darksky API
- defines and chains middleware (helper functions) to simplify error-handling

:: Ideas for improvement
- add optional form field to specify country
- add fallback URLs / APIs so that a larger set of cities can be covered
- add tests
