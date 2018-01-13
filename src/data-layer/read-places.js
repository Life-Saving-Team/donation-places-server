const placeModel = require('../models/donation-place.model')

module.exports = {
    getPlaces({ limit=10, skip = 0, searchFilter, categoryFilter, cityFilter }) {
        const query = { }
        if (searchFilter) query.name = { $regex: RegExp(`.*${searchFilter}.*`) }
        if (categoryFilter) query.category = categoryFilter
        if (cityFilter) query.city = cityFilter
        return placeModel.find(query).limit(limit).skip(parseInt(skip)).lean().exec()
    },

    getPlacesCount({searchFilter, categoryFilter, cityFilter}) {
        const query = { }
        if (searchFilter) query.name = { $regex: RegExp(`.*${searchFilter}.*`) }
        if (categoryFilter) query.category = categoryFilter
        if (cityFilter) query.city = cityFilter
        return placeModel.find(query).count().lean().exec()
    },
}
