const readOneById = require('../data-layer/read-a-place-by-id')

module.exports = (req, res, next) => {
    return readOneById(req.params.id)
        .then((place) => place ? res.status(200).json(place) : next({ nF: 'Donation Place' }))
        .catch(err => next(err))
}


