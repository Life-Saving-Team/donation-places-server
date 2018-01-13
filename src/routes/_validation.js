const Joi = require('joi')

module.exports = {

    writePlace (req, res, next) {
        const schema = Joi.object().keys({
            address: Joi.string().required().label('address'),
            name: Joi.string().required().label('name'),
            city: Joi.string().required().label('city'),
            longitude: Joi.number().min(-180).max(180).required().label('longitude'),
            latitude: Joi.number().min(-90).max(90).required().label('latitude'),
            category: Joi.string().required().label('category'),
            isPrivate: Joi.bool().required().label('isPrivate'),
        })
        return Joi.validate(req.body, schema, (err) => next(err))
    },
    
    getNearbyPlaces(req, res, next) {
        const schema = Joi.object().keys({
            longitude: Joi.number().min(-180).max(180).required().label('longitude'),
            latitude: Joi.number().min(-90).max(90).required().label('latitude'),
        })
        return Joi.validate(req.query, schema, (err) => next(err))
    }

}


