const locationModel = require('../models/donation-place.model')


module.exports = (id) =>  {
    return locationModel.findById(id).lean().exec()
}
