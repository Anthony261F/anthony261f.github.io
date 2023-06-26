var datedepart2 = "";
var temps2 = "";
var repete2 ="";

var datedepart3 = "";
var temps3 = "";
var repete3 ="";

var datedepart3e = "";
var temps3e = "";
var repete3e ="";

var datedepart24 = "";
var temps24 = "";
var repete24 ="";

var dateactuelle = "";
let audio = new Audio("alarme.mp3");
const timerElement = document.getElementById("timer");

function start2() {
    datedepart2 = Date.now();
    repete2 = setInterval(() => {
        dateactuelle = Date.now();
        temps2 = Math.round((dateactuelle - datedepart2) / 1000);
        temps2 = 7200 - temps2;
        timerElement.innerText = temps2;
        if (temps2 < 1) {
            audio.play();
            alert("timer fini");
            clearInterval(repete2); //stop la bpucle
        }
      }, 1000) //1 secondes
}

function start3() {
    datedepart3 = Date.now();
    repete3 = setInterval(() => {
        dateactuelle = Date.now();
        temps3 = Math.round((dateactuelle - datedepart3) / 1000);
        temps3 = 10800 - temps3;
        timerElement.innerText = temps3;
        if (temps3 < 1) {
            audio.play();
            alert("timer fini");
            clearInterval(repete3); //stop la bpucle
        }
      }, 1000) //1 secondes
}

function start3e() {
    datedepart3e = Date.now();
    repete3e = setInterval(() => {
        dateactuelle = Date.now();
        temps3e = Math.round((dateactuelle - datedepart3e) / 1000);
        temps3e = 10800 - temps3e;
        timerElement.innerText = temps3e;
        if (temps3e < 1) {
            audio.play();
            alert("timer fini");
            clearInterval(repete3e); //stop la bpucle
        }
      }, 1000) //1 secondes
}

function start24() {
    datedepart24 = Date.now();
    repete24 = setInterval(() => {
        dateactuelle = Date.now();
        temps24 = Math.round((dateactuelle - datedepart24) / 1000);
        temps24 = 10 - temps24;
        timerElement.innerText = temps24;
        if (temps24 < 1) {
            audio.play();
            alert("timer fini");
            clearInterval(repete24); //stop la bpucle
        }
      }, 1000) //1 secondes
}