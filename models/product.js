import mongoose from 'mongoose';

const productSchema = 
    new mongoose.Schema({ 
            name: { type: String, required: true },
            UnitPrice: { type: Decimal128, required: true }, 
            createddAt: { type: Date },
        });

productSchema.pre('save', next =>   {
    const now = new Date();
    if(!this.createdAt) {   
        this.createdAt = now;
    }
    next();
});

export default {
    schema: productSchema,
    model: mongoose.model('product', productSchema)
};