var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var appSchema = new Schema({
    phone_number:{type:String},
    ad_id:{type:String},
    app_date:{type: Date},
    comments:{type:String}
});
mongoose.model('appointments',appSchema);