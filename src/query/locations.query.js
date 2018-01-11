

const locationModel = require('../models/location.model')

function findFromPosition(long, lat, distance=5000000) {
    return locationModel.
        find({ position: { $nearSphere: { $geometry: { type: "Point", coordinates: [long, lat] }, $maxDistance: distance } } }).limit(10).lean().exec()
}

function findOneAndUpdate(id, update) {
    return locationModel.findById(id).exec().then((item)=>{
        item.name = update.name
        item.ddescription = update.ddescription
        item.position  = update.position || item.position
        return item.save()
    })
}

function remove(id) {
    return locationModel.findByIdAndRemove(id).lean().exec()
}

function getOneById(id) {
    return locationModel.findById(id).lean().exec()
}

function add(item) {
    const newLocation = new locationModel(item)
    return newLocation.save()
}

module.exports = {
    findFromPosition, findOneAndUpdate, remove, add, getOneById
}