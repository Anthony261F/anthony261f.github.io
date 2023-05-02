function start2() {

  
minutes = 1;
let temps = 2 * 60 * 60;

const timerElement = document.getElementById("timer")

setInterval(() => {
 
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  
  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)
}

function start3() {

  minutes3 = 10
  let temps3 = 3 * 60 * 60
  
  const timerElement = document.getElementById("timer3")
  
  setInterval(() => {
   
    let minutes3 = parseInt(temps3 / 60, 10)
    let secondes3 = parseInt(temps3 % 60, 10)
  
    
    minutes3 = minutes3 < 10 ? "0" + minutes3 : minutes3
    secondes3 = secondes3 < 10 ? "0" + secondes3 : secondes3
  
    timerElement.innerText = `${minutes3}:${secondes3}`
    temps3 = temps3 <= 0 ? 0 : temps3 - 1
  }, 1000)
  }

  function start3e() {

    minutes3e = 10
    let temps3e = 3 * 60 * 60
    
    const timerElement = document.getElementById("timer3e")
    
    setInterval(() => {
     
      let minutes3e = parseInt(temps3e / 60, 10)
      let secondes3e = parseInt(temps3e % 60, 10)
    
      
      minutes3e = minutes3e < 10 ? "0" + minutes3e : minutes3e
      secondes3e = secondes3e < 10 ? "0" + secondes3e : secondes3e
    
      timerElement.innerText = `${minutes3e}:${secondes3e}`
      temps3e = temps3e <= 0 ? 0 : temps3e - 1
    }, 1000)
    }

    function start24() {

      minutes24 = 10
      let temps24 = 24 * 60 * 60
      
      const timerElement = document.getElementById("timer24")
      
      setInterval(() => {
       
        let minutes24 = parseInt(temps24 / 60, 10)
        let secondes24 = parseInt(temps24 % 60, 10)
      
        
        minutes24 = minutes24 < 10 ? "0" + minutes24 : minutes24
        secondes24 = secondes24 < 10 ? "0" + secondes24 : secondes24
      
        timerElement.innerText = `${minutes24}:${secondes24}`
        temps24 = temps24 <= 0 ? 0 : temps24 - 1
      }, 1000)
      }