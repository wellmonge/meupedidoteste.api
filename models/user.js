import mongoose from 'mongoose';

const userSchema = 
    new global.db.Schema({
        username:  { type: String },
        password:  { type: String },   
        createdAt: { type: Date, default: Date.now }
    });

export default {
    schema: userSchema,
    model: global.db.model('User', userSchema)
} 