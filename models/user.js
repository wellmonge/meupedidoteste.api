import mongoose from 'mongoose';

const userSchema = 
    new mongoose.Schema({
        username:  { type: String },
        password:  { type: String },   
        createdAt: { type: Date, default: Date.now }
    });

userSchema.pre('save', next =>(e) => {
    const now = new Date();
    if(!this.createdAt) {   
        this.createdAt = now;
    }
    next();
});

export default {
    schema: userSchema,
    model: mongoose.model('User', userSchema)
} 