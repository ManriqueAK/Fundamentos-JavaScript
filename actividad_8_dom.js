//Capturar ids
let titulo = document.getElementById("titulo");
let mensaje = document.getElementById("mensaje");
let lista = document.getElementById("lista");

let competencias = ["Inglés" , "Técnica" , "Matemáticas" , "Investigación" , "Emprendimiento"]

titulo.textContent = "ADSO 3233140";

mensaje.textContent = "Este es un párrafo al que se le cambiará el color y el tamaño"
mensaje.style.color = "red";
mensaje.style.fontSize = "40px";

titulo.classList.add("destacado");

for (let competencia of competencias) {
    let li = document.createElement("li");
    li.textContent = competencia;
    li.classList.add("elemento");
    lista.appendChild(li);
}

