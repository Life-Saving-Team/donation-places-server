const locationModel = require('../models/donation-place.model')

module.exports = {
    getPlaces({ limit, skip, searchFilter, categoryFilter }) {
        const query = searchFilter ? { name: { $regex: RegExp(`.*${searchFilter}.*`) } } : { category: categoryFilter }
        return locationModel.find(query).limit(limit).skip(skip).lean().exec()
    },

    getPlacesCount(searchFilter, categoryFilter) {
        const query = searchFilter ? { name: { $regex: RegExp(`.*${searchFilter}.*`) } } : { category: categoryFilter }
        return locationModel.find(query).count().lean().exec()
    },
}
