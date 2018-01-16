import { enums } from './enum/index';
import { Address, Parking, Tower } from './schema/index';
import person from './person';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:  String,
    email:  String,
    password: String,
    userType: {
        type: mongoose.Schema.Types.Mixed,
        enum: enums.userType
    },
    person: {type: mongoose.Schema.Types.Object, ref: person.schema},
    address: [{type: mongoose.Schema.Types.Object, ref: Address }],
    updatedAt: {type: mongoose.Schema.Types.Date},   
    createdAt: {type: mongoose.Schema.Types.Date, default: Date.now}
});

userSchema.pre('save', next =>(e) => {
    var now = new Date();
    console.log(e)
    console.log(this)
    // if(!this.createdAt) {   
    //     this.createdAt = now;
    // }
    
    next();
});

export default {
    schema: userSchema,
    model: mongoose.model('User', userSchema)
} 