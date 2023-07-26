var datedepart2 = "";
var temps2 = "";
var repete2 ="";
const timerElement2 = document.getElementById("timer");
let isDecompteEnCours2 = false;


var datedepart3 = "";
var temps3 = "";
var repete3 ="";
const timerElement3 = document.getElementById("timer3");
let isDecompteEnCours3 = false;

var datedepart3e = "";
var temps3e = "";
var repete3e ="";
const timerElement3e = document.getElementById("timer3e");
let isDecompteEnCours3e = false;

var datedepart24 = "";
var temps24 = "";
var repete24 ="";
const timerElement24 = document.getElementById("timer24");
let isDecompteEnCours24 = false;

var dateactuelle = "";
let audio = new Audio("alarme.mp3");

function startTout() {
    start2();
    start3();
    start3e();
    start24();
}

function start2() {
    if (isDecompteEnCours2) {
        return; // Le décompte est déjà en cours, ne rien faire
      }

      timerElement2.innerText = "02:00:00";
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
            clearInterval(repete2); //stop la boucle
            isDecompteEnCours2 = false;
        }
        const heures2 = Math.floor(temps2 / 3600); // Conversion en heures
        const minutes2 = Math.floor((temps2 % 3600) / 60); // Conversion en minutes
        const secondesRestantes2 = temps2 % 60; // Secondes restantes

        const heures2_2 = heures2 < 10 || heures2 === 0 ? "0" + heures2 : heures2;
        const minutes2_2 = minutes2 < 10 || minutes2 === 0 ? "0" + minutes2 : minutes2;
        const secondesRestantes2_2 = secondesRestantes2 < 10 || secondesRestantes2 === 0 ? "0" + secondesRestantes2 : secondesRestantes2;

        timerElement2.innerText = `${heures2_2}:${minutes2_2}:${secondesRestantes2_2}`;
      }, 1000) //1 secondes
      isDecompteEnCours2 = true;
}

function stop2() {
    clearInterval(repete2); // Arrêter la boucle du décompte
    isDecompteEnCours2 = false; // Mettre la variable à false pour indiquer que le décompte est en pause
  }

function start3() {
    if (isDecompteEnCours3) {
        return; // Le décompte est déjà en cours, ne rien faire
      }

      timerElement3.innerText = "03:00:00";
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
            clearInterval(repete3); //stop la boucle
            isDecompteEnCours3 = false;
        }
        const heures3 = Math.floor(temps3 / 3600); // Conversion en heures
        const minutes3 = Math.floor((temps3 % 3600) / 60); // Conversion en minutes
        const secondesRestantes3 = temps3 % 60; // Secondes restantes

        const heures3_2 = heures3 < 10 || heures3 === 0 ? "0" + heures3 : heures3;
        const minutes3_2 = minutes3 < 10 || minutes3 === 0 ? "0" + minutes3 : minutes3;
        const secondesRestantes3_2 = secondesRestantes3 < 10 || secondesRestantes3 === 0 ? "0" + secondesRestantes3 : secondesRestantes3;

        timerElement3.innerText = `${heures3_2}:${minutes3_2}:${secondesRestantes3_2}`;
      }, 1000) //1 secondes
      isDecompteEnCours3 = true;
}

function stop3() {
    clearInterval(repete3); // Arrêter la boucle du décompte
    isDecompteEnCours3 = false; // Mettre la variable à false pour indiquer que le décompte est en pause
  }

function start3e() {
    if (isDecompteEnCours3e) {
        return; // Le décompte est déjà en cours, ne rien faire
      }
      
      timerElement3e.innerText = "03:00:00";
    datedepart3e = Date.now();
    repete3e = setInterval(() => {
        dateactuelle = Date.now();
        temps3e = Math.round((dateactuelle - datedepart3e) / 1000);
        temps3e = 10800 - temps3e;
        if (temps3e < 1) {
            audio.play();
            if (vouvertureauto == 1) {
                link = "https://www.liste-serveurs-minecraft.org/serveur-minecraft/sunaris-semirp-1-20-x/";
                open(link,"_blank")
            }
            alert("timer fini");
            clearInterval(repete3e); //stop la boucle
            isDecompteEnCours3e = false;
        }
        const heures3e = Math.floor(temps3e / 3600); // Conversion en heures
        const minutes3e = Math.floor((temps3e % 3600) / 60); // Conversion en minutes
        const secondesRestantes3e = temps3e % 60; // Secondes restantes
        
        const heures3e_2 = heures3e < 10 || heures3e === 0 ? "0" + heures3e : heures3e;
        const minutes3e_2 = minutes3e < 10 || minutes3e === 0 ? "0" + minutes3e : minutes3e;
        const secondesRestantes3e_2 = secondesRestantes3e < 10 || secondesRestantes3e === 0 ? "0" + secondesRestantes3e : secondesRestantes3e;

        timerElement3e.innerText = `${heures3e_2}:${minutes3e_2}:${secondesRestantes3e_2}`;
      }, 1000) //1 secondes
      isDecompteEnCours3e = true;
}

function stop3e() {
    clearInterval(repete3e); // Arrêter la boucle du décompte
    isDecompteEnCours3e = false; // Mettre la variable à false pour indiquer que le décompte est en pause
  }

function start24() {
    if (isDecompteEnCours24) {
        return; // Le décompte est déjà en cours, ne rien faire
      }
      
      timerElement24.innerText = "24:00:00";
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
            clearInterval(repete24); //stop la boucle
            isDecompteEnCours24 = false;
        }
        const heures24 = Math.floor(temps24 / 3600); // Conversion en heures
        const minutes24 = Math.floor((temps24 % 3600) / 60); // Conversion en minutes
        const secondesRestantes24 = temps24 % 60; // Secondes restantes
           
        const heures24_2 = heures24 < 10 || heures24 === 0 ? "0" + heures24 : heures24;
        const minutes24_2 = minutes24 < 10 || minutes24 === 0 ? "0" + minutes24 : minutes24;
        const secondesRestantes24_2 = secondesRestantes24 < 10 || secondesRestantes24 === 0 ? "0" + secondesRestantes24 : secondesRestantes24;

        timerElement24.innerText = `${heures24_2}:${minutes24_2}:${secondesRestantes24_2}`;
      }, 1000) //1 secondes
      isDecompteEnCours24 = true;
}

function stop24() {
    clearInterval(repete24); // Arrêter la boucle du décompte
    isDecompteEnCours24 = false; // Mettre la variable à false pour indiquer que le décompte est en pause
  }