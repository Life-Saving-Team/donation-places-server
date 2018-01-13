
const locationModel = require('../models/donation-place.model')

module.exports = (long, lat, distance=5000000) =>  {
    return locationModel.
        find({ location: { $nearSphere:
             { $geometry: { type: "Point", coordinates: [long, lat] }, 
             $maxDistance: distance } } }).limit(10).lean().exec()
}