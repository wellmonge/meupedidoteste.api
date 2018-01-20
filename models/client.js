import mongoose, { Schema } from 'mongoose';

const clientSchema =
    new Schema({
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

export default {
  Schema: clientSchema,
  model: mongoose.model('client', clientSchema),
};
