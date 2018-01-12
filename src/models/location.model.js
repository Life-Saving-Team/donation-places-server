const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    governerate: { type: String, required: true },
    isPrivate: {type: Boolean, required: true},
    location: new Schema({
        coordinates: { type: [Number], required: true },
        type: { type: String, required: true }
    }),
});




module.exports = mongoose.model('Location', _schema)
