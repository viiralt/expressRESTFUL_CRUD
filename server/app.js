const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const db = require('./db');

const app = express();
const port = 7777;

app.use(bodyParser.json())
app.use(routes);

app.listen(port || 7777, () => {
  console.log(`now serving on port ${port}`);
})

module.exports = app;