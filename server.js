const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// run when client connects
io.on('connection', (socket) => {
    console.log('New WS Connection...');
});

const PORT = 3001 || process.env.PORT;

server.listen(PORT, () => console.log(`Server Started at Port ${PORT}`));
