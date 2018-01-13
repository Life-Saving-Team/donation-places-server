const locationModel = require('../models/donation-place.model')

module.exports = (item) => {
    const newLocation = new locationModel(item)
    return newLocation.save()
}
