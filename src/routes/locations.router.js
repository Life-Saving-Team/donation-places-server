const router = require('express').Router()
const { addLocation, findLocationAndUpdate, removeLocation, getLocationInfoById} = require('../controllers/Locations.ctrl')



router.get('/:id', getLocationInfoById)
router.post('/', addLocation)
router.put('/', findLocationAndUpdate)
router.delete('/:id', removeLocation)

module.exports = router