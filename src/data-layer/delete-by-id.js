
const locationModel = require('../models/donation-place.model')


module.exports = (id)  => {
    return locationModel.findByIdAndRemove(id).lean().exec()
}