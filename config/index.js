
const  bluebird = require('bluebird');
const  mongoose = require('mongoose');



const dburi = process.env.MONGODB_URI;

global.db = mongoose.connect(dburi, { useNewUrlParser: true  });

mongoose.Promise = bluebird;

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', () => 'Database connection is open');