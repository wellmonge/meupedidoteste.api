const productSchema = 
    new global.db.Schema({ 
            name: { type: String, required: true },
            UnitPrice: { type: Decimal128, required: true }, 
            createddAt: { type: Date },
        });

export default {
    schema: productSchema,
    model: global.db.model('product', productSchema)
};