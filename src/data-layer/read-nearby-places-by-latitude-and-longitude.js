
const placeModel = require('../models/donation-place.model')

module.exports = (long, lat, distance=500000000000000) =>  {
    return placeModel.
        find({ location: { $nearSphere:
             { $geometry: { type: "Point", coordinates: [long, lat] }, 
             $maxDistance: distance } } }).limit(10).lean().exec()
}