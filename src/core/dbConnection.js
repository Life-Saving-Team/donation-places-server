
const mongoose = require("mongoose")

function connectToOriginalDb(){
    return mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:admin@ds163711.mlab.com:63711/temp_database', { useMongoClient: true});
}
function connectToTestDb(){
    return mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:admin@ds163711.mlab.com:63711/temp_database', { useMongoClient: true});
}
mongoose.connection.on('open', () => console.log('Db connected'))

mongoose.connection.on('error', (error) => {
    throw new Error(error)
})
module.exports  = {connectToOriginalDb, connectToTestDb}


