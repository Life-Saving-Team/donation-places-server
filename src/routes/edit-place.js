const update = require('../data-layer/update-place')

module.exports = (req, res, next)  => {
    const location = {
        coordinates: [req.body.longitude, req.body.latitude],
        type: "Point"
    }
    const { name, address, category, city, isPrivate } = req.body
    const newDonationPlace = { name, address, location, name, address, category, city, isPrivate }
    return update(req.params.id, newDonationPlace)
        .then((added) => {
            global.log.error(added)
            return res.status(200).json(added)
        })
        .catch(err => next(err))
}
