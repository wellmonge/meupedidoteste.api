'use strict';

import bluebird from 'bluebird';
import mongoose from 'mongoose';

var dburi = process.env.MONGODB_URI;

var db = mongoose.connect(dburi, {useMongoClient: true, promiseLibrary: bluebird });

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open',function () {
    console.log("It's opened"); 
});

export default db;