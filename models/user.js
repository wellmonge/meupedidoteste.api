import person from './person';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:  String,
    email:  String,
    password: String,
    person: {type: mongoose.Schema.Types.Object, ref: person.schema},
    updatedAt: {type: mongoose.Schema.Types.Date},   
    createdAt: {type: mongoose.Schema.Types.Date, default: Date.now}
});

userSchema.pre('save', next =>(e) => {
    var now = new Date();
    if(!this.createdAt) {   
        this.createdAt = now;
    }
    
    next();
});

export default {
    schema: userSchema,
    model: mongoose.model('User', userSchema)
} 