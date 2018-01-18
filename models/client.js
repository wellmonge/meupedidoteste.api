const clientSchema = 
    new global.db.Schema({ 
            name: { type: String, required: true }, 
            createddAt: { type: Date, default: Date.now }
        });

export default {
    schema: clientSchema,
    model: global.db.model('client', clientSchema)
};