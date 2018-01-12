const router = require('express').Router()
const { addDonationPlace, findDonationPlaceAndUpdate, removeDonationPlace, getDonationPlaceInfoById, getNearbyLocations} = require('../controllers/donation-places.ctrl')


router.get('/', getNearbyLocations)
router.get('/:id', getDonationPlaceInfoById)
router.post('/', addDonationPlace)
router.put('/', findDonationPlaceAndUpdate)
router.delete('/:id', removeDonationPlace)

module.exports = router