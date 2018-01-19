

import bluebird from 'bluebird';
import mongoose from 'mongoose';

const dburi = process.env.MONGODB_URI;

global.db = mongoose.connect(dburi, { useMongoClient: true });

mongoose.Promise = bluebird;

mongoose.connection.on('error');

mongoose.connection.once('open', () => 'Database connection is open');
