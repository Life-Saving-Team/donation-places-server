const db = require('../data-layer/read-places')

module.exports = (req, res, next) => {
    let promise
    promise = Promise.all([db.getPlaces(req.query), db.getPlacesCount(req.query)])
    return promise.then(([places, count]) => {
        res.status(200).json({ places, count })
    }).catch(err => next(err))
}