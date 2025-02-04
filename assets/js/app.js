let visuales = [
    "assets/img/bodoque.png",
    "assets/img/tulio.png",
    "assets/img/lulo.png",
    "assets/img/lana.png",
    "assets/img/tarro.png",
    "assets/img/patana.png",
    "assets/img/juanin.png",
    "assets/img/tramoya.png",    
    "assets/img/bodoque.png",
    "assets/img/tulio.png",
    "assets/img/lulo.png",
    "assets/img/lana.png",
    "assets/img/tarro.png",
    "assets/img/patana.png",
    "assets/img/juanin.png",
    "assets/img/tramoya.png",        
    "assets/img/bodoque.png",
    "assets/img/tulio.png",
    "assets/img/lulo.png",
    "assets/img/lana.png",
    "assets/img/tarro.png",
    "assets/img/patana.png",
    "assets/img/juanin.png",
    "assets/img/tramoya.png",    
];

let renderVisuales = document.getElementById("visual");

let showTime = document.getElementById("img");
showTime.className = "show-time";
showTime.style.backgroundColor = "red";
renderVisuales.appendChild(showTime);


let index = 0;

renderVisuales.style.display = '';
function velocity() {
    let interval = setInterval(() => {
        showTime.src = visuales[index];

        index++;

        if (index === visuales.length) {
            clearInterval(interval); 
            showTime.src = visuales[parseInt(Math.random()*9)]
           showTime.style.backgroundColor = "yellow"; 
        }
    }, 100);
}

// Iniciar el cambio de imágenes
velocity();
