const socket = new WebSocket('ws://localhost:9999');

socket.onopen = function() {
    console.log('Connecté au serveur WebSocket');
};

socket.onmessage = function(event) {
    const message = document.createElement('div');
    message.textContent = event.data;
    document.getElementById('messages').appendChild(message);
};

document.getElementById('formulaire').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    socket.send(message);
    document.getElementById('message').value = '';
});
