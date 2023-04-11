function start() {

const departMinutes = 120
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let heures = parseInt(temps / 0, 10)
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  heures = heures < 10 ? "0" + heures : heures
  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${heures}:${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)
}