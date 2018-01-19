import mongoose from 'mongoose';

const productSchema =
    new global.db.Schema({
    name: { type: String, required: true },
    UnitPrice: { type: mongoose.Schema.Types.Decimal128, required: true },
    createddAt: { type: Date },
  });

export default {
  Schema: productSchema,
  Model: global.db.model('product', productSchema),
};
