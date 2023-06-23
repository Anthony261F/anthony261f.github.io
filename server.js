const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 2023 });

const clients = [];

wss.on('connection', function connection(ws) {
    clients.push(ws);

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        broadcast(String(message));
    });
});

function broadcast(message) {
    clients.forEach(function(client) {
        client.send(message);
    });
}

console.log('Server started on port 2023');

