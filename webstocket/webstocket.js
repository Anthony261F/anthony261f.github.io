const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8261 });

server.on('connection', (socket) => {
  console.log('Nouvelle connexion WebSocket établie');

  socket.on('message', (message) => {
    console.log('Message reçu du client :', message);
    // Traitez le message reçu du client et envoyez une réponse si nécessaire
  });

  socket.on('close', () => {
    console.log('Connexion WebSocket fermée');
  });
});
