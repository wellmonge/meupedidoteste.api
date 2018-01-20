import mongoose, { Schema } from 'mongoose';

const userSchema =
    new Schema({
    username: { type: String },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
  });

export default {
  Schema: userSchema,
  model: mongoose.model('User', userSchema),
};
