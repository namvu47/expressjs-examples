const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const weatherRoute = require('./routes/weather.route.js');

const port = 5000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/weather', weatherRoute);

app.listen(port, () => console.log(`Weather-app listening on port ${port}!`));