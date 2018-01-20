import mongoose, { Schema } from 'mongoose';

const productSchema =
  new Schema({
    name: { type: String, required: true },
    unitPrice: { type: Number },
    multiple: { type: Number },
    createdAt: { type: Date, default: Date.now },
  });

export default {
  Schema: productSchema,
  model: mongoose.model('product', productSchema),
};
