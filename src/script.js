const socket = new WebSocket('ws://localhost:2023');
let nomc = ''; // Déclarer la variable nomc à l'extérieur de la fonction envoie_nom

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
var nomm = document.getElementById('nom').value
nom_b.style.visibility = "visible";
nom_t.style.visibility = "visible";
function envoie_nom() {
    nomm = document.getElementById('nom').value
    if (nomm == "") {
        alert("champ obligatoire");
    } else {
        nom_b.style.visibility = "hidden";
        nom_t.style.visibility = "hidden";
        document.getElementById('renom').innerText = document.getElementById('nom').value;
        nomc = document.getElementById('nom').value; // Affecter la valeur à la variable nomc
        socket.send("[+] " + nomc + " à rejoint le tchat");
    }

}

let lastActivityTime = Date.now(); // Enregistrez cette valeur lorsque l'utilisateur se connecte

document.documentElement.addEventListener('mousemove', function() {
  lastActivityTime = Date.now();
});

setInterval(function() {
  const currentTime = Date.now();
  const inactivityThreshold = 300000; // Durée d'inactivité en millisecondes (5 minutes)

  if (currentTime - lastActivityTime > inactivityThreshold) {
    // Utilisateur considéré comme déconnecté
    if (nomc == "") {
        
    } else {
        socket.send("[-] " + nomc + " à était déconecté du tchat");
        location.reload();        
    }
  }
}, 10000); // Vérification toutes les 10 secondes

function deco() {
    socket.send("[-] " + nomc + " à quitté le tchat");
    location.reload();   
}