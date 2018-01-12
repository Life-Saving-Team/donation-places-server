
const utility = require('../helpers/utility.js')
const db = require('../query/donation-places.query.js')



function addDonationPlace(req, res) {
    const location = {
        coordinates: [req.body.longitude, req.body.latitude],
        type: "Point"
    }
    const { name, address } = req.body

    const newDonationPlace = { name, address, location }
    return db.add(newDonationPlace)
        .then((added) => {
            global.io.emit('updated')
            return res.status(200).json(added)
        })
        .catch(err => utility.badRequest(res, 'to add DonationPlace'))
}


function findDonationPlaceAndUpdate(req, res) {
    if (!req.body._id) utility.missingData(res, '_id')
    const location = {
        coordinates: [req.body.longitude, req.body.latitude],
        type: "Point"
    }
    const { name, address, _id } = req.body
    const newDonationPlace = { name, address, location }
    return db.findOneAndUpdate(_id, newDonationPlace)
        .then((added) => {
            return res.status(200).json(added)
        })
        .catch(err => utility.badRequest(res, err))
}


function removeDonationPlace(req, res) {
    return db.remove(req.params.id)
        .then(() => {
            res.status(200).json("Ok")
        })
        .catch(err => utility.badRequest(res, 'to remove DonationPlace'))
}

function getDonationPlaceInfoById(req, res) {
    return db.getOneById(req.params.id)
        .then((item) => res.status(200).json(item))
        .catch(err => utility.badRequest(res, 'to get DonationPlace'))
}


function getNearbyLocations(req, res) {
    return db.getNearbyLocations(req.query.longitude, req.query.latitude)
        .then((places) => res.status(200).json(places))
        .catch(err => utility.badRequest(res, 'to get DonationPlace'))
}



module.exports = { addDonationPlace, findDonationPlaceAndUpdate, removeDonationPlace, getDonationPlaceInfoById, getNearbyLocations }