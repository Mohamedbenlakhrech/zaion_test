const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');


// body parser config
app.use(bodyParser.text());

app.use(logger('dev'));

// import index routes
const router = require('./Router');
app.use('/', router);

  
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`ZAION test app is running on ${port}`);
});

module.exports = app;