var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AdSchema = new Schema({
    bedrooms: { type: String },
    ad_id: { type: String },
    price: { type: String },
    land_size: { type: String },
    contact: { type: String },
    description: {type: String},
    location: {type: String},
    category: {type: String},
    bathrooms: {type: String}
});
mongoose.model('advertisements',AdSchema);