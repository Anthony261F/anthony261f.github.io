const socket = new WebSocket('ws://localhost:2023');
let lastActivityTime = Date.now(); // Enregistrez cette valeur lorsque l'utilisateur se connecte

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
    const lenom = document.getElementById('nom').value + " : ";
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
    document.getElementById('renom').innerText = document.getElementById('nom').value;
    const nomc = document.getElementById('nom').value;
    socket.send("[+] " + nomc + " à rejoint le tchat");
}

document.addEventListener('mousemove', function() {
    lastActivityTime = Date.now();
  });

  setInterval(function() {
    const currentTime = Date.now();
    const inactivityThreshold = 120000; // Durée d'inactivité en millisecondes (2 minutes)
  
    if (currentTime - lastActivityTime > inactivityThreshold) {
      // Utilisateur considéré comme déconnecté
      socket.send("[-] " + nomc + " à quitté le tchat");
    }
  }, 60000); // Vérification toutes les minutes
  