var socket = new WebSocket("ws://localhost:8261/chat");

socket.onopen = function(event) {
    console.log("Connexion établie !");
  };
  
  socket.onmessage = function(event) {
    var message = event.data;
    console.log("Message reçu :", message);
  };

  var message = "Hello, server!";
socket.send(message);

socket.close();
