
const utility = require('../helpers/utility.js')
const { findOneAndUpdate, add, remove, getOneById } = require('../query/donation-places.query.js')





function addDonationPlace(req, res) {
    const position = {
        coordinates: [req.body.longitude, req.body.latitude],
        type: "Point"
    }
    const { name, description } = req.body

    const newDonationPlace = { name, description, position }
    return add(newDonationPlace)
        .then((added) => {
            global.io.emit('updated')
            return res.status(200).json(added)
        })
        .catch(err => utility.badRequest(res, 'to add DonationPlace'))
}


function findDonationPlaceAndUpdate(req, res) {
    if (!req.body._id) utility.missingData(res, '_id')
    const position = {
        coordinates: [req.body.longitude, req.body.latitude],
        type: "Point"
    }
    const { name, description, _id } = req.body
    const newDonationPlace = { name, description, position }
    return findOneAndUpdate(_id, newDonationPlace)
        .then((added) => {
            return res.status(200).json(added)
        })
        .catch(err => utility.badRequest(res, err))
}


function removeDonationPlace(req, res) {
    return remove(req.params.id)
        .then(() => {
            res.status(200).json("Ok")
        })
        .catch(err => utility.badRequest(res, 'to remove DonationPlace'))
}

function getDonationPlaceInfoById(req, res) {
    return getOneById(req.params.id)
        .then((item) => res.status(200).json(item))
        .catch(err => utility.badRequest(res, 'to get DonationPlace'))
}


module.exports = { addDonationPlace, findDonationPlaceAndUpdate, removeDonationPlace, getDonationPlaceInfoById }