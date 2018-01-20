import mongoose, { Schema } from 'mongoose';

const productSchema =
    new Schema({
    name: { type: String, required: true },
    UnitPrice: { type: Number, default: null },
    createdAt: { type: Date, default: Date.now },
  });

export default {
  Schema: productSchema,
  model: mongoose.model('product', productSchema),
};
