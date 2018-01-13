const db = require('../data-layer/read-places')

module.exports = (req, res, next) => {
        console.log(req.query)
    let promise
    const query = { limit: 10, skip: parseInt(req.query.skip), searchFilter: req.query.searchFilter, categoryFilter: req.query.categoryFilter, cityFilter: req.query.cityFilter }
    promise = Promise.all([db.getPlaces(query), db.getPlacesCount(req.query.searchFilter, req.query.categoryFilter, req.query.cityFilter)])
    return promise.then(([places, count]) => {
        res.status(200).json({ places, count })
    }).catch(err => next(err))
}