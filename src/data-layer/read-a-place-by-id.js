const placeModel = require('../models/donation-place.model')


module.exports = (id) =>  {
    return placeModel.findById(id).lean().exec()
}
