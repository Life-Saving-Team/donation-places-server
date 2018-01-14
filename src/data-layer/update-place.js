const placeModel = require('../models/donation-place.model')

module.exports = (_id, {name , address, location , isPrivate, city, category}) => {
    console.log(name, _id)
    return placeModel.findOneAndUpdate({ _id }, { name , address, location , isPrivate, city, category }, { new: true })
}