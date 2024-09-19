const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/index.js');

const app = express();

// add other middleware
app.use(cors());
app.use(morgan('dev'));

const config = {
    port: process.env.PORT || 8080,
  };
  
const server = app.listen(config.port, () => {
    // eslint-disable-next-line no-console
    console.log('Express server listening on port', config.port);
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', routes);

return app;

