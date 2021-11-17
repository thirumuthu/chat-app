const http = require('http').createServer()

const io = require('socket.io')(http, {
    cors:{origin:"*"}
})

io.on('connection', socket => {
    const id = socket.handshake.query.id
    socket.join(id)
    console.log("id ==> ",id)
    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach(recipient => {
            const newRecipient = recipients.filter(r => r !== recipient);
            newRecipient.push(id);
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipient,
                sender: id,
                text
            })
        });
    })
})
 
http.listen(5000, () => console.log('listening on 5000'));