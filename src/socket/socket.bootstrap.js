const {onConnection} = require('./socket.main')
const socket_io = require('socket.io')

module.exports = {
    instantiate(server) {
        const io = socket_io(server);
        io.sockets.setMaxListeners(1000)
        global.io = io
        onConnection(io)
    },
}

