const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const home = require('./routes/home');

const app = express();

// Configure our Express app to use ejs as our templating engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use('/', home);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
