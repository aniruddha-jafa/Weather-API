# What's the weather like? 
## A back-end mini-project

Main learning goals:
- sanitise and validate a simple form in Express
- query an API from the Express server (no client-side 'fetch' etc)

Basic functionality:
- search form to get city name from user
- sanitise and validate input
- query a weather API (e.g. OpenWeatherMap)
- display a concise weather description for the city
- on errors, display errors message and re-render the search form

Key tools used:
- Node, Express
- rendering: handlebars
- validation: express-validator
- weather API provided by: OpenWeatherMap
- making API requests: node-fetch


The initial inspiration for such a project (a weather API client) came from Mead & Percival's _Complete Nodejs course 3rd edition_. But unlike the app from the course, which also contains a client-side script, this app is server-based i.e. no client-side scripts are used. In particular, this project:
- initiates the http request for the weather API from the server, not in the web browser
- adds form sanitisation and validation
- uses node-fetch instead of request (which is now deprecated) to make http requests
- uses the OpenWeatherMap API instead of the darksky API
- defines and chains middleware (helper functions) to simplify error-handling
