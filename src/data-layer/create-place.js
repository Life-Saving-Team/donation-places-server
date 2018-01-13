const placeModel = require('../models/donation-place.model')

module.exports = (item) => {
    const newLocation = new placeModel(item)
    return newLocation.save()
}
