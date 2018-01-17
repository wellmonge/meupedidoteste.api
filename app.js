import express from 'express';
import load from 'express-load';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import errorHandler from 'error-handler';
import dotenv from 'dotenv';

var app = express();
dotenv.config();

// all environments
app.disable("x-powered-by");
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.use(methodOverride('_method'));
app.set('superSecret', process.env.SECRET);

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
    app.use(errorHandler);
}
// production only
if (env === 'production') {
    // TODO
}

//load modules
load('config')
    .then('utils')
    .then('routes')
    .into(app);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

export default app;