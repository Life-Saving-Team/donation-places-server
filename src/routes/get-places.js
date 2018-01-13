const db = require('../data-layer/read-places')

module.exports = (req, res, next) => {
    let promise
    const query = { limit: 10, skip: parseInt(req.query.skip), searchFilter: req.query.searchFilter, categoryFilter: req.query.categoryFilter }
    promise = Promise.all([db.getPlaces(query), db.getPlacesCount(req.query.searchFilter, req.query.categoryFilter)])
    return promise.then(([places, count]) => res.status(200).json({ places, count })).catch(err => next(err))
}