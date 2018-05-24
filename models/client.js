const  mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

exports = {
  Schema: clientSchema,
  model: mongoose.model('client', clientSchema)
};