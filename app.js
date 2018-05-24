const express = require( 'express');
const load = require( 'express-load');
const bodyParser = require( 'body-parser');
const methodOverride = require( 'method-override');
const errorHandler = require( 'error-handler');
const dotenv = require( 'dotenv');

const app = express();
dotenv.config();

// all environments
app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(methodOverride('_method'));
app.set('superSecret', process.env.SECRET);

const env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  app.use(errorHandler);
}
// production only
if (env === 'production') {}
// TODO


// load modules
load('config').then('utils').then('routes').into(app);

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});
