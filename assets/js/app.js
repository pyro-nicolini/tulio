let visuales = [
    "assets/img/bodoque.png", "assets/img/tulio.png", "assets/img/lulo.png",
    "assets/img/lana.png", "assets/img/tarro.png", "assets/img/patana.png",
    "assets/img/juanin.png", "assets/img/tramoya.png",
    "assets/img/bodoque.png", "assets/img/tulio.png", "assets/img/lulo.png",
    "assets/img/lana.png", "assets/img/tarro.png", "assets/img/patana.png",
    "assets/img/juanin.png", "assets/img/tramoya.png",
    "assets/img/bodoque.png", "assets/img/tulio.png", "assets/img/lulo.png",
    "assets/img/lana.png", "assets/img/tarro.png", "assets/img/patana.png",
    "assets/img/juanin.png", "assets/img/tramoya.png"
  ];
  
  let renderVisuales = document.getElementById("imagen");
  let showTime = document.getElementById("img");
  
  if (!showTime) {
    showTime = document.createElement("img");
    showTime.id = "img";
  }
  showTime.className = "show-time";
  showTime.style.backgroundColor = "skyblue";
  renderVisuales.appendChild(showTime);
  
  let crono = document.getElementById("crono");
  let stopwatchElement = document.getElementById("stopwatch");
  
  let botones = document.querySelectorAll(".card");
  
  function setBotonesDisabled(disabled) {
    botones.forEach(boton => boton.disabled = disabled);
  }
  
  setBotonesDisabled(true);
  
  let index = 0;
  let coincidir = "";
  let startTime = 0; // Tiempo de inicio
  let stopwatchInterval; // Intervalo del cronómetro
  
  function startStopwatch() {
    stopwatchInterval = setInterval(() => {
      let elapsed = (Date.now() - startTime) / 1000;
      stopwatchElement.innerHTML = `${elapsed.toFixed(2)} s`;
    }, 50);
  }
  
  function stopStopwatch() {
    clearInterval(stopwatchInterval);
  }
  
  function velocity() {
    return new Promise((resolve) => {
      let interval = setInterval(() => {
        showTime.src = visuales[index];
        index++;
        
        if (index === visuales.length) {
          clearInterval(interval);
          let random = Math.floor(Math.random() * visuales.length);
          showTime.src = visuales[random];
          showTime.style.backgroundColor = "yellow";
          coincidir = showTime.src;
          startTime = Date.now(); // Inicia el contador
          setBotonesDisabled(false);
          startStopwatch();
          resolve();
        }
      }, 100);
    });
  }
  
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      if (startTime === 0) return;
      
      
      let reactionTime = Date.now() - startTime; // milisegundos
      let reactionSeconds = (reactionTime / 1000).toFixed(2); // conversión a segundos
      
      setBotonesDisabled(true);
      
      if (coincidir === boton.children[0].src) {
          crono.innerHTML += `<li>Reacción: ${reactionSeconds} s</li>`;
          boton.style.backgroundColor = "rgb(57, 202, 0)";
          showTime.style.backgroundColor = "rgb(57, 202, 0)";
          stopStopwatch();
        } else {
            crono.innerHTML += `<li>Reacción: ${reactionSeconds} s</li>`;
            boton.style.backgroundColor = "rgb(176, 116, 255)";
      }
    });
  });
    
  async function esperar(){
    crono.innerHTML += `<li>¡Empieza el juego!</li>`;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    index = 0;
    startTime = 0;
    showTime.style.backgroundColor = "skyblue";
    botones.forEach((boton) => boton.style.backgroundColor = "rgb(255, 146, 43)");
    await velocity();
  }
    
  esperar();
  
  document.addEventListener('DOMContentLoaded', () => {
    const radialMenu = document.getElementById("radial-menu");
    const cards = radialMenu.querySelectorAll(".card");

    const total = cards.length;
    const radius = radialMenu.offsetWidth * .5;
    const centerX = radialMenu.offsetWidth / 2;
    const centerY = radialMenu.offsetHeight / 2;

    cards.forEach((card, index) => {
      const angle = (index / total) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      card.style.left = `${x}px`;
      card.style.top = `${y}px`;
    });
  });