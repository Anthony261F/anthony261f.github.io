const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Nouvelle connexion WebSocket établie');

  socket.on('message', (message) => {
    console.log('Message reçu du client :', message);
    // Traitez le message reçu du client et envoyez une réponse si nécessaire
    // Vous pouvez également diffuser le message à tous les clients connectés en utilisant io.emit()
  });

  socket.on('disconnect', () => {
    console.log('Connexion WebSocket fermée');
  });
});

server.listen(8261, () => {
  console.log('Serveur WebSocket démarré sur le port 8261');
});
