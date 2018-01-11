
const {findFromPosition} = require('../query/donation-places.query')
function onNeedsData(io, socket) {
    return socket.on('needs data', (payload) => {
        if(payload.longitude)  {
                socket.longitude = payload.longitude
                socket.latitude = payload.latitude
            }

         if (socket.longitude)   {
            return findFromPosition(socket.longitude, socket.latitude).then((donationPlaces) => socket.emit('new data', donationPlaces))
         }
        
    })
}





module.exports = { onNeedsData }
