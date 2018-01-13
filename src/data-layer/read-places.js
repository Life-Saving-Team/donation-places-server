const placeModel = require('../models/donation-place.model')

module.exports = {
    getPlaces({ limit, skip, searchFilter, categoryFilter, cityFilter }) {
        const query = { category: categoryFilter, city: cityFilter }
        if (searchFilter) query.name = { $regex: RegExp(`.*${searchFilter}.*`) }
        return placeModel.find(query).limit(limit).skip(skip).lean().exec()
    },

    getPlacesCount(searchFilter, categoryFilter, cityFilter) {
        const query = { category: categoryFilter, city: cityFilter }
        if (searchFilter) query.name = { $regex: RegExp(`.*${searchFilter}.*`) }
        return placeModel.find(query).count().lean().exec()
    },
}
