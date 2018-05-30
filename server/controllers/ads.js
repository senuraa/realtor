var mongoose = require('mongoose');
var ads = mongoose.model('advertisements');
/**
 * Retrieve ads according to requirement
 *
 * @param req
 * @param res
 */
exports.retrieveAds= function(req,res){
    var location = req.body.location;
    var rooms = req.body.rooms;
    var priceRange = req.body.priceRange;
    var category = req.body.category;
    var areaRange = req.body.areaRange;
    var onlyLastSevenDays = req.body.showLastSeven;
    ads.find({category:category,location:location}).exec(function(err,docs){
        if(err){
            console.log(err);
            res.status(500).json({message:err})
        }else{
            if(docs.length<=0){
                ads.find({category:category}).exec(function (err,docs){
                    if(err){
                        console.log(err);
                        res.status(500).json({message:err});
                    }else{
                        res.status(200).json(docs);
                    }
                })
            }else{
                res.status(200).json(docs);
            }
            // res.status(200).json(docs);
        }
    })
}