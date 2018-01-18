import mongoose from 'mongoose';

const clientSchema = 
    new mongoose.Schema({ 
            name: { type: String, required: true }, 
            createddAt: { type: Date, default: Date.now }
        });

clientSchema.pre('save', next =>   {
    const now = new Date();
    if(!this.createdAt) {   
        this.createdAt = now;
    }
    next();
});

export default {
    schema: clientSchema,
    model: mongoose.model('client', clientSchema)
};