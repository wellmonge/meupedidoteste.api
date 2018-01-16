import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({ 
            name: {type: String, required: true }, 
            midleName: String, 
            lastName: {type: String, required: true },
            updatedAt: {type: mongoose.Schema.Types.Date},
        });

personSchema.pre('save', next =>   {
    now = new Date();
    if(!this.createdAt) {   
        this.createdAt = now;
    }
    
    if(this.endereco && !this.endereco.createdAt) {
        this.endereco.createdAt = now;
    }
    
    next();
});

export default {
    schema: personSchema,
    model: mongoose.model('Person', personSchema)
};