var datedepart2 = "";
var temps2 = "";
var dateactuelle = "";
var repete2 ="";
const timerElement = document.getElementById("timer");
function start2() {
    datedepart2 = Date.now();
    repete2 = setInterval(() => {
        dateactuelle = Date.now();
        temps2 = Math.round((dateactuelle - datedepart2) / 1000);
        temps2 = 7200 - temps2;
        timerElement.innerText = temps2;
        if (temps2 < 1) {
            alert("timer fini");
            clearInterval(repete2);
        }
      }, 1000) //60 secondes
}