const readNearbyPlaces = require('../data-layer/read-nearby-places-by-latitude-and-longitude')

module.exports =  (req, res, next) => {
    return readNearbyPlaces(req.query.longitude, req.query.latitude)
        .then(places => res.status(200).json(places))
        .catch(err => next(err))
}