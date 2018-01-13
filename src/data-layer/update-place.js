const placeModel = require('../models/donation-place.model')

module.exports = (id, update) => {
    return placeModel.findById(id).exec().then((item)=>{
        item.name = update.name
        item.address = update.address
        item.location  = update.location || item.location
        return item.save()
    })
}