var mongoose = require('mongoose');
var apps = mongoose.model('appointments');
var qs = require('qs');
/**
 * Retrieve ads according to requirement
 *
 * @param req
 * @param res
 */
exports.addAppointments = function (req, res) {
    var phone_number = req.body.phone_number;
    var ad_id = req.body.ad_id;
    var app_date = req.body.datetime;
    var comments = req.body.comments;
    console.log(req.body);
    var newApp = new apps({ phone_number: phone_number, ad_id: ad_id, app_date: app_date, comments: comments })
    newApp.save(function(err,apps){
        if(err){
            throw err;
            res.status(500).json({"message":"Error creating the appointment"})
        }else{
            console.log('Appointment created');
            res.status(200).json(apps)
        } 
        
        
    })
}

