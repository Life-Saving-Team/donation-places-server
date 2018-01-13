const placeModel = require('../models/donation-place.model')

module.exports = {
    getPlaces({ limit, skip, searchFilter, categoryFilter }) {
        const query = searchFilter ? { name: { $regex: RegExp(`.*${searchFilter}.*`) } } : { category: categoryFilter }
        return placeModel.find(query).limit(limit).skip(skip).lean().exec()
    },

    getPlacesCount(searchFilter, categoryFilter) {
        const query = searchFilter ? { name: { $regex: RegExp(`.*${searchFilter}.*`) } } : { category: categoryFilter }
        return placeModel.find(query).count().lean().exec()
    },
}
