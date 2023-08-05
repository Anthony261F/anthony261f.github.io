var datedepart2 = "";
var temps2 = "";
var repete2 ="";
const timerElement2 = document.getElementById("timer");
let isDecompteEnCours2 = false;
var date2 = document.getElementById("date2");
var date_now2 = "";

var date_setnow2 = new Date();
const heure_setnow2 = date_setnow2.getHours() < 10 || date_setnow2.getHours() === 0 ? "0" + date_setnow2.getHours() : date_setnow2.getHours();
var minute_1_2 = date_setnow2.getMinutes() + 1;
const minute_setnow2 = minute_1_2 < 10 || minute_1_2 === 0 ? "0" + minute_1_2 : minute_1_2;

date2.value = heure_setnow2 + ":" + minute_setnow2;


var datedepart3 = "";
var temps3 = "";
var repete3 ="";
const timerElement3 = document.getElementById("timer3");
let isDecompteEnCours3 = false;
var date3 = document.getElementById("date3");
var date_now3 = "";

var date_setnow3 = new Date();
const heure_setnow3 = date_setnow3.getHours() < 10 || date_setnow3.getHours() === 0 ? "0" + date_setnow3.getHours() : date_setnow3.getHours();
var minute_1_3 = date_setnow3.getMinutes() + 1;
const minute_setnow3 = minute_1_3 < 10 || minute_1_3 === 0 ? "0" + minute_1_3 : minute_1_3;

date3.value = heure_setnow3 + ":" + minute_setnow3;


var datedepart3e = "";
var temps3e = "";
var repete3e ="";
const timerElement3e = document.getElementById("timer3e");
let isDecompteEnCours3e = false;
var date3e = document.getElementById("date3e");
var date_now3e = "";

var date_setnow3e = new Date();
const heure_setnow3e = date_setnow3e.getHours() < 10 || date_setnow3e.getHours() === 0 ? "0" + date_setnow3e.getHours() : date_setnow3e.getHours();
var minute_1_3e = date_setnow3e.getMinutes() + 1;
const minute_setnow3e = minute_1_3e < 10 || minute_1_3e === 0 ? "0" + minute_1_3e : minute_1_3e;

date3e.value = heure_setnow3e + ":" + minute_setnow3e;


var datedepart24 = "";
var temps24 = "";
var repete24 ="";
const timerElement24 = document.getElementById("timer24");
let isDecompteEnCours24 = false;
var date24 = document.getElementById("date24");
var date_now24 = "";

var date_setnow24 = new Date();
const heure_setnow24 = date_setnow24.getHours() < 10 || date_setnow24.getHours() === 0 ? "0" + date_setnow24.getHours() : date_setnow24.getHours();
var minute_1_24 = date_setnow24.getMinutes() + 1;
const minute_setnow24 = minute_1_24 < 10 || minute_1_24 === 0 ? "0" + minute_1_24 : minute_1_24;

date24.value = heure_setnow24 + ":" + minute_setnow24;


var dateactuelle = "";
let audio = new Audio("alarme.mp3");

function startTout() {
    start2();
    start3();
    start3e();
    start24();
}

function startTouttime() {
  valide_date2();
  valide_date3();
 // start3e();
 // start24();
}

function stopTout() {
    stop2();
    stop3();
    stop3e();
    stop24();
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
            alert("Minuteur de serveur-prive.net terminer");
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

function valide_date2() {
    date_now2 = new Date();
    const heure_now2 = date_now2.getHours();
    const minute_now2 = date_now2.getMinutes();
    const date_choisi2 = date2.value;

    // Sépare les heures et les minutes de la valeur
    const heurestime2 = parseInt(date_choisi2.split(":")[0]);
    const minutestime2 = parseInt(date_choisi2.split(":")[1]);

    // Convertit les heures et les minutes en secondes
    const heuresEnSecondestime_2 = heurestime2 * 3600;
    const minutesEnSecondestime_2 = minutestime2 * 60;

    // Ajoute les secondes totales
    const secondesTotales_2 = heuresEnSecondestime_2 + minutesEnSecondestime_2;

   // Convertit les heures et les minutes en secondes
    const heuresEnSecondestimenow_2 = heure_now2 * 3600;
    const minutesEnSecondestimenow_2 = minute_now2 * 60;

    const secondesTotalesnow_2 = heuresEnSecondestimenow_2 + minutesEnSecondestimenow_2;

    const seconde_fin2 = secondesTotales_2 - secondesTotalesnow_2;
 
  
    

    if (isDecompteEnCours2) {
      return; // Le décompte est déjà en cours, ne rien faire
    }
    const heuresset2 = Math.floor(seconde_fin2 / 3600); // Conversion en heures
    const minutesset2 = Math.floor((seconde_fin2 % 3600) / 60); // Conversion en minutes
    const secondesRestantesset2 = seconde_fin2 % 60; // Secondes restantes

    const heuresset2_2 = heuresset2 < 10 || heuresset2 === 0 ? "0" + heuresset2 : heuresset2;
    const minutesset2_2 = minutesset2 < 10 || minutesset2 === 0 ? "0" + minutesset2 : minutesset2;
    const secondesRestantesset2_2 = secondesRestantesset2 < 10 || secondesRestantesset2 === 0 ? "0" + secondesRestantesset2 : secondesRestantes2;

    timerElement2.innerText = `${heuresset2_2}:${minutesset2_2}:${secondesRestantesset2_2}`;

  datedepart2 = Date.now();
  repete2 = setInterval(() => {

      dateactuelle = Date.now();
      temps2 = Math.round((dateactuelle - datedepart2) / 1000);
      temps2 = seconde_fin2 - temps2;
    
      if (temps2 < 1) {
          audio.play();
          if (vouvertureauto == 1) {
              link = "https://serveur-prive.net/minecraft/sunaris-semirp-claims-economie-unique-entreprises-jobs-alliages-10379/vote";
              open(link,"_blank")
          }
          alert("Minuteur de serveur-prive.net terminer");
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

function reset_date2() {
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
            alert("Minuteur de serveur-minecraft.com terminer");
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

  function valide_date3() {
    date_now3 = new Date();
    const heure_now3 = date_now3.getHours();
    const minute_now3 = date_now3.getMinutes();
    const date_choisi3 = date3.value;

    // Sépare les heures et les minutes de la valeur
    const heurestime3 = parseInt(date_choisi3.split(":")[0]);
    const minutestime3 = parseInt(date_choisi3.split(":")[1]);

    // Convertit les heures et les minutes en secondes
    const heuresEnSecondestime3_2 = heurestime3 * 3600;
    const minutesEnSecondestime3_2 = minutestime3 * 60;

    // Ajoute les secondes totales
    const secondesTotales3_2 = heuresEnSecondestime3_2 + minutesEnSecondestime3_2;

   // Convertit les heures et les minutes en secondes
    const heuresEnSecondestimenow3_2 = heure_now3 * 3600;
    const minutesEnSecondestimenow3_2 = minute_now3 * 60;

    const secondesTotalesnow3_2 = heuresEnSecondestimenow3_2 + minutesEnSecondestimenow3_2;

    const seconde_fin3 = secondesTotales3_2 - secondesTotalesnow3_2;
 
  
    

    if (isDecompteEnCours3) {
      return; // Le décompte est déjà en cours, ne rien faire
    }
    const heuresset3 = Math.floor(seconde_fin3 / 3600); // Conversion en heures
    const minutesset3 = Math.floor((seconde_fin3 % 3600) / 60); // Conversion en minutes
    const secondesRestantesset3 = seconde_fin3 % 60; // Secondes restantes

    const heuresset3_2 = heuresset3 < 10 || heuresset3 === 0 ? "0" + heuresset3 : heuresset3;
    const minutesset3_2 = minutesset3 < 10 || minutesset3 === 0 ? "0" + minutesset3 : minutesset3;
    const secondesRestantesset3_2 = secondesRestantesset3 < 10 || secondesRestantesset3 === 0 ? "0" + secondesRestantesset3 : secondesRestantes3;

    timerElement3.innerText = `${heuresset3_2}:${minutesset3_2}:${secondesRestantesset3_2}`;

  datedepart3 = Date.now();
  repete3 = setInterval(() => {
    dateactuelle = Date.now();
    temps3 = Math.round((dateactuelle - datedepart3) / 1000);
    temps3 = seconde_fin3 - temps3;
    if (temps3 < 1) {
        audio.play();
        if (vouvertureauto == 1) {
            link = "https://serveur-minecraft.com/2833";
            open(link,"_blank")
        }
        alert("Minuteur de serveur-minecraft.com terminer");
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

function reset_date3() {
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
            alert("Minuteur de liste-serveurs-minecraft.org terminer");
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

  function valide_date3e() {
    date_now3e = new Date();
    const heure_now3e = date_now3e.getHours();
    const minute_now3e = date_now3e.getMinutes();
    const date_choisi3e = date3e.value;

    // Sépare les heures et les minutes de la valeur
    const heurestime3e = parseInt(date_choisi3e.split(":")[0]);
    const minutestime3e = parseInt(date_choisi3e.split(":")[1]);

    // Convertit les heures et les minutes en secondes
    const heuresEnSecondestime3e_2 = heurestime3e * 3600;
    const minutesEnSecondestime3e_2 = minutestime3e * 60;

    // Ajoute les secondes totales
    const secondesTotales3e_2 = heuresEnSecondestime3e_2 + minutesEnSecondestime3e_2;

   // Convertit les heures et les minutes en secondes
    const heuresEnSecondestimenow3e_2 = heure_now3e * 3600;
    const minutesEnSecondestimenow3e_2 = minute_now3e * 60;

    const secondesTotalesnow3e_2 = heuresEnSecondestimenow3e_2 + minutesEnSecondestimenow3e_2;

    const seconde_fin3e = secondesTotales3e_2 - secondesTotalesnow3e_2;
 
  
    

    if (isDecompteEnCours3e) {
      return; // Le décompte est déjà en cours, ne rien faire
    }
    const heuresset3e = Math.floor(seconde_fin3e / 3600); // Conversion en heures
    const minutesset3e = Math.floor((seconde_fin3e % 3600) / 60); // Conversion en minutes
    const secondesRestantesset3e = seconde_fin3e % 60; // Secondes restantes

    const heuresset3e_2 = heuresset3e < 10 || heuresset3e === 0 ? "0" + heuresset3e : heuresset3e;
    const minutesset3e_2 = minutesset3e < 10 || minutesset3e === 0 ? "0" + minutesset3e : minutesset3e;
    const secondesRestantesset3e_2 = secondesRestantesset3e < 10 || secondesRestantesset3e === 0 ? "0" + secondesRestantesset3e : secondesRestantes3e;

    timerElement3e.innerText = `${heuresset3e_2}:${minutesset3e_2}:${secondesRestantesset3e_2}`;

  datedepart3e = Date.now();
  repete3e = setInterval(() => {
    dateactuelle = Date.now();
    temps3e = Math.round((dateactuelle - datedepart3e) / 1000);
    temps3e = seconde_fin3e - temps3e;
    if (temps3e < 1) {
        audio.play();
        if (vouvertureauto == 1) {
          link = "https://www.liste-serveurs-minecraft.org/serveur-minecraft/sunaris-semirp-1-20-x/";
          open(link,"_blank")
      }
      alert("Minuteur de liste-serveurs-minecraft.org terminer");
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

function reset_date3e() {
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
            alert("Minuteur de serveursminecraft.org terminer");
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

  function valide_date24() {
    date_now24 = new Date();
    const heure_now24 = date_now24.getHours();
    const minute_now24 = date_now24.getMinutes();
    const date_choisi24 = date24.value;

    // Sépare les heures et les minutes de la valeur
    const heurestime24 = parseInt(date_choisi24.split(":")[0]);
    const minutestime24 = parseInt(date_choisi24.split(":")[1]);

    // Convertit les heures et les minutes en secondes
    const heuresEnSecondestime24_2 = heurestime24 * 3600;
    const minutesEnSecondestime24_2 = minutestime24 * 60;

    // Ajoute les secondes totales
    const secondesTotales24_2 = heuresEnSecondestime24_2 + minutesEnSecondestime24_2;

   // Convertit les heures et les minutes en secondes
    const heuresEnSecondestimenow24_2 = heure_now24 * 3600;
    const minutesEnSecondestimenow24_2 = minute_now24 * 60;

    const secondesTotalesnow24_2 = heuresEnSecondestimenow24_2 + minutesEnSecondestimenow24_2;

    const seconde_fin24 = secondesTotales24_2 - secondesTotalesnow24_2;
 
  
    

    if (isDecompteEnCours24) {
      return; // Le décompte est déjà en cours, ne rien faire
    }
    const heuresset24 = Math.floor(seconde_fin24 / 3600); // Conversion en heures
    const minutesset24 = Math.floor((seconde_fin24 % 3600) / 60); // Conversion en minutes
    const secondesRestantesset24 = seconde_fin24 % 60; // Secondes restantes

    const heuresset24_2 = heuresset24 < 10 || heuresset24 === 0 ? "0" + heuresset24 : heuresset24;
    const minutesset24_2 = minutesset24 < 10 || minutesset24 === 0 ? "0" + minutesset24 : minutesset24;
    const secondesRestantesset24_2 = secondesRestantesset24 < 10 || secondesRestantesset24 === 0 ? "0" + secondesRestantesset24 : secondesRestantes24;

    timerElement24.innerText = `${heuresset24_2}:${minutesset24_2}:${secondesRestantesset24_2}`;

  datedepart24 = Date.now();
  repete24 = setInterval(() => {

      dateactuelle = Date.now();
      temps24 = Math.round((dateactuelle - datedepart24) / 1000);
      temps24 = seconde_fin24 - temps24;
    
      if (temps24 < 1) {
        audio.play();
        if (vouvertureauto == 1) {
            link = "https://www.serveursminecraft.org/serveur/5993/";
            open(link,"_blank")
        }
        alert("Minuteur de serveursminecraft.org terminer");
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

function reset_date24() {
    clearInterval(repete24); // Arrêter la boucle du décompte
    isDecompteEnCours24 = false; // Mettre la variable à false pour indiquer que le décompte est en pause
}