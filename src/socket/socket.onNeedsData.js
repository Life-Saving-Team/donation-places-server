
const {findFromPosition} = require('../query/locations.query')
function onNeedsData(io, socket) {
    return socket.on('needs data', (payload) => {
        if(payload.longitude)  {
                socket.longitude = payload.longitude
                socket.latitude = payload.latitude
            }

         if (socket.longitude)   {
            return findFromPosition(socket.longitude, socket.latitude).then((locations) => socket.emit('new data', locations))
         }
        
    })
}





module.exports = { onNeedsData }
