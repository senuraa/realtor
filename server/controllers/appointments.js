var mongoose = require('mongoose');
var Apps = mongoose.model('appointments');
var Ads = mongoose.model('advertisements');
var qs = require('qs');
/**
 * Retrieve ads according to requirement
 *
 * @param req
 * @param res
 */

/*
* Status
* 0 - pending confirmation from advertiser
* 1 - advertiser confirmed
* 2 - appointment cancelled
* 3 - past appointment
*/
exports.addAppointments = function (req, res) {
    var phone_number = req.body.phone_number;
    var ad_id = req.body.ad_id;
    var app_date = req.body.datetime;
    var comments = req.body.comments;
    console.log(req.body);
    var newApp = new Apps({ phone_number: phone_number, ad_id: mongoose.Types.ObjectId(ad_id), app_date: app_date, comments: comments, status: 0 })
    newApp.save(function (err, apps) {
        if (err) {
            throw err;
            res.status(500).json({ "message": "Error creating the appointment" })
        } else {
            console.log('Appointment created');
            res.status(200).json(apps)
        }


    })
}

exports.getAppointments = function (req, res) {
    var phone_number = req.body.phone_number;
    var status = req.body.status;
    var app;
    var ad;

    Apps.find({phone_number:phone_number}).populate('ad_id').exec(function(err,docs){
        if(err){
            console.log(err);
            res.status(500).json({"error":"error getting appointments"})
        }else{
            res.status(200).json(docs);
        }
    })
}
