
const placeModel = require('../models/donation-place.model')


module.exports = (id)  => {
    return placeModel.findByIdAndRemove(id).lean().exec()
}