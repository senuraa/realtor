var mongoose = require('mongoose');
var ads = mongoose.model('advertisements');
var qs = require('qs');
var apps = mongoose.model('appointments');
mongoose.Promise = require('bluebird');
/**
 * Retrieve ads according to requirement
 *
 * @param req
 * @param res
 */
exports.retrieveAds = function (req, res) {
    console.log(req.body);
    var location = req.body.location.toUpperCase();
    var rooms = req.body.noOfRooms;
    //var priceRange = req.body.priceRange;
    var category = req.body.category;
    var type = req.body.type;
    //var areaRange = req.body.areaRange;
    var minArea = req.body.minArea;
    var maxArea = req.body.maxArea;
    var minPrice = req.body.minPrice;
    var maxPrice = req.body.maxPrice;

    var onlyLastSevenDays = req.body.showLastSeven;
    ads.find({ category: category, location: location }).exec(function (err, docs) {

        if (err) {
            console.log(err);
            res.status(500).json({ message: err })
        } else {
            if (docs.length <= 0) {
                ads.find({ category: category, location: { $ne: 'NOTFOUND' } }).exec(function (err, docs) {
                    if (err) {
                        console.log(err);
                        res.status(500).json({ message: err });
                    } else {
                        res.status(200).json(docs);
                    }
                })
            } else {
                res.status(200).json(docs);
            }
            // res.status(200).json(docs);
        }
    })
}

exports.topAds = function (req, res) {
    const aggregatorOpts = [
        {
            $group: {
                _id: "$adIdStr",
                count: { $sum: 1 }
            }
        },
        { "$sort": { count: -1 } },
        { "$limit": 5 }
    ]
    apps.aggregate(aggregatorOpts)
        .then(function (docs) {
            topAdds = [];
            docs.forEach(function (u) {
                topAdds.push(ads.findOne({ _id: mongoose.Types.ObjectId(u._id) }));
            });
            return Promise.all(topAdds);
        }).then(function (listOfAdds) {
            res.send(listOfAdds);
        }).catch(function (error) {
            res.status(500).send('one of the queries failed', error);
        })
}