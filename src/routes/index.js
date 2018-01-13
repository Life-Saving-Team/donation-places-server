const router = require('express').Router()
const getPlaces = require('./get-places')
const getNearbyPlaces = require('./get-nearby-places')
const getPlace = require('./get-place')
const addPlace = require('./add-place')
const editPlace = require('./edit-place')
const removePlace = require('./remove-place')
const Validate = require('./_validation')

router.get('/', getPlaces)
router.get('/nearby', getNearbyPlaces)
router.get('/:id', getPlace)
router.post('/', Validate.writePlace, addPlace)
router.put('/:id', Validate.writePlace, editPlace)
router.delete('/:id', removePlace)

module.exports = router