

const locationModel = require('../models/location.model')

function getNearbyLocations(long, lat, distance=5000000) {
    return locationModel.
        find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [long, lat] }, $maxDistance: distance } } }).limit(10).lean().exec()
}

function findOneAndUpdate(id, update) {
    return locationModel.findById(id).exec().then((item)=>{
        item.name = update.name
        item.address = update.address
        item.location  = update.location || item.location
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
    getNearbyLocations, findOneAndUpdate, remove, add, getOneById
}