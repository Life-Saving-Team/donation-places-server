
const utility = require('../helpers/utility.js')
const { findOneAndUpdate, add, remove, getOneById } = require('../query/Locations.query.js')





function addLocation(req, res) {
    const position = {
        coordinates: [req.body.longitude, req.body.latitude],
        type: "Point"
    }
    const { name, description } = req.body

    const newLocation = { name, description, position }
    return add(newLocation)
        .then((added) => {
            global.io.emit('updated')
            return res.status(200).json(added)
        })
        .catch(err => utility.badRequest(res, 'to add location'))
}


function findLocationAndUpdate(req, res) {
    if (!req.body._id) utility.missingData(res, '_id')
    const position = {
        coordinates: [req.body.longitude, req.body.latitude],
        type: "Point"
    }
    const { name, description, _id } = req.body
    const newLocation = { name, description, position }
    return findOneAndUpdate(_id, newLocation)
        .then((added) => {
            return res.status(200).json(added)
        })
        .catch(err => utility.badRequest(res, err))
}


function removeLocation(req, res) {
    return remove(req.params.id)
        .then(() => {
            res.status(200).json("Ok")
        })
        .catch(err => utility.badRequest(res, 'to remove location'))
}

function getLocationInfoById(req, res) {
    return getOneById(req.params.id)
        .then((item) => res.status(200).json(item))
        .catch(err => utility.badRequest(res, 'to get location'))
}


module.exports = { addLocation, findLocationAndUpdate, removeLocation, getLocationInfoById }