var datedepart2 = "";
var temps2 = "";
var repete2 ="";
const timerElement2 = document.getElementById("timer");

var datedepart3 = "";
var temps3 = "";
var repete3 ="";
const timerElement3 = document.getElementById("timer3");

var datedepart3e = "";
var temps3e = "";
var repete3e ="";
const timerElement3e = document.getElementById("timer3e");

var datedepart24 = "";
var temps24 = "";
var repete24 ="";
const timerElement24 = document.getElementById("timer24");

var dateactuelle = "";
let audio = new Audio("alarme.mp3");

function start2() {
    datedepart2 = Date.now();
    repete2 = setInterval(() => {
        dateactuelle = Date.now();
        temps2 = Math.round((dateactuelle - datedepart2) / 1000);
        temps2 = 7200 - temps2;
        if (temps2 < 1) {
            audio.play();
            if (vouvertureauto == 1) {
                link = "https://serveur-prive.net/minecraft/sunaris-semirp-claims-economie-unique-entreprises-jobs-alliages-10379/vote";
                open(link,"_blank")
            }
            alert("timer fini");
            clearInterval(repete2); //stop la bpucle
        }
        const heures2 = Math.floor(temps2 / 3600); // Conversion en heures
        const minutes2 = Math.floor((temps2 % 3600) / 60); // Conversion en minutes
        const secondesRestantes2 = temps2 % 60; // Secondes restantes
      
        timerElement2.innerText = `${heures2}:${minutes2}:${secondesRestantes2}`;
      }, 1000) //1 secondes
}

function start3() {
    datedepart3 = Date.now();
    repete3 = setInterval(() => {
        dateactuelle = Date.now();
        temps3 = Math.round((dateactuelle - datedepart3) / 1000);
        temps3 = 10800 - temps3;
        if (temps3 < 1) {
            audio.play();
            if (vouvertureauto == 1) {
                link = "https://serveur-minecraft.com/2833";
                open(link,"_blank")
            }
            alert("timer fini");
            clearInterval(repete3); //stop la bpucle
        }
        const heures3 = Math.floor(temps3 / 3600); // Conversion en heures
        const minutes3 = Math.floor((temps3 % 3600) / 60); // Conversion en minutes
        const secondesRestantes3 = temps3 % 60; // Secondes restantes
      
        timerElement3.innerText = `${heures3}:${minutes3}:${secondesRestantes3}`;
      }, 1000) //1 secondes
}

function start3e() {
    datedepart3e = Date.now();
    repete3e = setInterval(() => {
        dateactuelle = Date.now();
        temps3e = Math.round((dateactuelle - datedepart3e) / 1000);
        temps3e = 10800 - temps3e;
        if (temps3e < 1) {
            audio.play();
            if (vouvertureauto == 1) {
                link = "https://www.liste-serveurs-minecraft.org/serveur-minecraft/sunaris-semirp-1-19-2/";
                open(link,"_blank")
            }
            alert("timer fini");
            clearInterval(repete3e); //stop la bpucle
        }
        const heures3e = Math.floor(temps3e / 3600); // Conversion en heures
        const minutes3e = Math.floor((temps3e % 3600) / 60); // Conversion en minutes
        const secondesRestantes3e = temps3e % 60; // Secondes restantes
      
        timerElement3e.innerText = `${heures3e}:${minutes3e}:${secondesRestantes3e}`;
      }, 1000) //1 secondes
}

function start24() {
    datedepart24 = Date.now();
    repete24 = setInterval(() => {
        dateactuelle = Date.now();
        temps24 = Math.round((dateactuelle - datedepart24) / 1000);
        temps24 = 86400 - temps24;
        if (temps24 < 1) {
            audio.play();
            if (vouvertureauto == 1) {
                link = "https://www.serveursminecraft.org/serveur/5993/";
                open(link,"_blank")
            }
            alert("timer fini");
            clearInterval(repete24); //stop la bpucle
        }
        const heures24 = Math.floor(temps24 / 3600); // Conversion en heures
        const minutes24 = Math.floor((temps24 % 3600) / 60); // Conversion en minutes
        const secondesRestantes24 = temps24 % 60; // Secondes restantes
      
        timerElement24.innerText = `${heures24}:${minutes24}:${secondesRestantes24}`;
      }, 1000) //1 secondes
}