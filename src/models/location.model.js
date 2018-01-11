const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    position: new Schema({
        coordinates: {  type: [Number], required: true  },
        type: {type: String, required: true}
    }),
});




module.exports = mongoose.model('Location', _schema)
