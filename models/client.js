const clientSchema =
    new global.db.Schema({
    name: { type: String, required: true },
    createddAt: { type: Date, default: Date.now },
  });

export default {
  Schema: clientSchema,
  Model: global.db.model('client', clientSchema),
};
