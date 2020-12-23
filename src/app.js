'use strict';

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
})


const portToUse = 3000;
app.listen(portToUse, () => {
  console.log(`Listening on port ${portToUse}...`);
})
