const  mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  createdAt: { type: Date, default: Date.now }
});

exports = {
  Schema: userSchema,
  model: mongoose.model('User', userSchema)
};