const socket = new WebSocket('ws://localhost:9261');

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
    const lenom = document.getElementById('nom').value + " : "
    socket.send(lenom + message);
    document.getElementById('message').value = '';
});

var nom_b = document.getElementById("fond");
var nom_t = document.getElementById("fond2");
nom_b.style.visibility = "visible";
nom_t.style.visibility = "visible";
function envoie_nom() {
    nom_b.style.visibility = "hidden";
    nom_t.style.visibility = "hidden";
    document.getElementById('renom').innerText = document.getElementById('nom').value
}
