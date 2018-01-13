const deleteById = require('../data-layer/delete-by-id')

module.exports = (req, res, next) => {
    return deleteById(req.params.id)
        .then(() => {
            res.status(200).json("Ok")
        })
        .catch(err => next(err))
}
