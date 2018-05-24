const  mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  unitPrice: { type: Number },
  multiple: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

exports = {
  Schema: productSchema,
  model: mongoose.model('product', productSchema)
};