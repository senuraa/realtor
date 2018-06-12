var mongoose = require('mongoose');
var ads = mongoose.model('advertisements');
var qs = require('qs');
var apps = mongoose.model('appointments');
mongoose.Promise = require('bluebird');
var underscore = require("underscore");

/**
 * Retrieve ads according to requirement
 *
 * @param req
 * @param res
 */
exports.retrieveAdsSample = function (req, res) {
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
    var minPrice = req.body.minPrice * 10000;
    var maxPrice = req.body.maxPrice * 10000;

    var onlyLastSevenDays = req.body.showLastSeven;
    ads.find({ category: category }).exec(function (err, docs) {
        if (err) {
            console.log(err);
            res.status(500).json({ message: err })
        } else {
            var docJson = [];
            var priceJson = [];
            var areaJson = [];
            for (var i = 0; i < docs.length; i++) {
                docJson.push(docs[i]._doc);
            }
            var locationFiltered = underscore.where(docJson, { location: location });
            if (locationFiltered.length != 0) {
                var typeFiltered = underscore.where(locationFiltered, {
                    rent_sale: type
                });
                if (typeFiltered.length != 0) {
                    var bedroomFiltered = underscore.where(typeFiltered, {
                        bedrooms: rooms
                    });
                    if (bedroomFiltered.length != 0) {
                        underscore.filter(bedroomFiltered, function (item) {
                            if (item.price[0] >= minPrice && item.price[0] <= maxPrice) {
                                priceJson.push(item);
                            }
                        })
                        if (priceJson.length != 0) {
                            underscore.filter(priceJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(priceJson);
                            }
                        } else {
                            underscore.filter(bedroomFiltered, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(bedroomFiltered);
                            }
                        }

                    } else {
                        underscore.filter(typeFiltered, function (item) {
                            if (item.price[0] >= minPrice && item.price[0] <= maxPrice) {
                                priceJson.push(item);
                            }
                        })
                        if (priceJson.length != 0) {
                            underscore.filter(priceJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(priceJson);
                            }
                        } else {
                            underscore.filter(typeFiltered, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(typeFiltered);
                            }
                        }
                    }
                } else {
                    var bedroomFiltered = underscore.where(locationFiltered, {
                        bedrooms: rooms
                    });
                    if (bedroomFiltered.length != 0) {
                        underscore.filter(bedroomFiltered, function (item) {
                            if (item.price[0] >= minPrice && item.price[0] <= maxPrice) {
                                priceJson.push(item);
                            }
                        })
                        if (priceJson.length != 0) {
                            underscore.filter(priceJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(priceJson);
                            }
                        } else {
                            underscore.filter(bedroomFiltered, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(bedroomFiltered);
                            }
                        }
                    } else {
                        underscore.filter(locationFiltered, function (item) {
                            if (item.price[0] >= minPrice && item.price[0] <= maxPrice) {
                                priceJson.push(item);
                            }
                        })
                        if (priceJson.length != 0) {
                            underscore.filter(priceJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(priceJson);
                            }
                        } else {
                            underscore.filter(locationFiltered, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(locationFiltered);
                            }
                        }
                    }
                }
            } else {
                var typeFiltered = underscore.where(docJson, {
                    rent_sale: type
                });
                if (typeFiltered.length != 0) {
                    var bedroomFiltered = underscore.where(typeFiltered, {
                        bedrooms: rooms
                    });
                    if (bedroomFiltered.length != 0) {
                        underscore.filter(bedroomFiltered, function (item) {
                            if (item.price[0] >= minPrice && item.price[0] <= maxPrice) {
                                priceJson.push(item);
                            }
                        })
                        if (priceJson.length != 0) {
                            underscore.filter(priceJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(priceJson);
                            }
                        } else {
                            underscore.filter(bedroomFiltered, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(bedroomFiltered);
                            }
                        }
                    } else {
                        underscore.filter(typeFiltered, function (item) {
                            if (item.price[0] >= minPrice && item.price[0] <= maxPrice) {
                                priceJson.push(item);
                            }
                        })
                        if (priceJson.length != 0) {
                            underscore.filter(priceJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(priceJson);
                            }
                        } else {
                            underscore.filter(typeFiltered, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(typeFiltered);
                            }
                        }
                    }
                } else {
                    var bedroomFiltered = underscore.where(docJson, {
                        bedrooms: rooms
                    });
                    if (bedroomFiltered.length != 0) {
                        underscore.filter(bedroomFiltered, function (item) {
                            if (item.price[0] >= minPrice && item.price[0] <= maxPrice) {
                                priceJson.push(item);
                            }
                        })
                        if (priceJson.length != 0) {
                            underscore.filter(priceJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(priceJson);
                            }
                        } else {
                            underscore.filter(bedroomFiltered, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(bedroomFiltered);
                            }
                        }
                    } else {
                        underscore.filter(docJson, function (item) {
                            if (item.price[0] >= minPrice && item.price[0] <= maxPrice) {
                                priceJson.push(item);
                            }
                        })
                        if (priceJson.length != 0) {
                            underscore.filter(priceJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(priceJson);
                            }
                        } else {
                            underscore.filter(docJson, function (item) {
                                if (item.land_size[0] >= minArea && item.land_size[0] <= maxArea) {
                                    areaJson.push(item);
                                }
                            })
                            if(areaJson.length != 0){
                                res.status(200).json(areaJson);
                            }else{
                                res.status(200).json(docJson);
                            }
                        }
                    }
                }
            }

        }
    })
}

/**
 * Retrieve ads according to requirement
 *
 * @param req
 * @param res
 */
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