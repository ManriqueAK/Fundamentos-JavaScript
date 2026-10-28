function saludar() {
    alert("Holi");
}

boton3.onclick = function (){
    alert("Hello");
}

boton3.onclick = function () {
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.type);
}

let boton4 = document.getElementById("boton4");
console.log(boton4);

boton4.addEventListener("dblclick" , function() {
    alert("SENA");
});

boton4.addEventListener("click" , function () {
    alert("SENA");
});

let botonFecha = document.getElementById("btnDate");
let fecha = document.getElementById("fecha");

botonFecha.addEventListener("click" , function() {
    fecha.innerText = Date();
});

let box = document.getElementById("box");
box.addEventListener("mouseover" , function () {
    box.innerText = "Mouse encima";
    box.style.backgroundColor = "red";
    box.style.color = "black";
});

box.addEventListener("mouseout" , function() {
    box.innerText = "Mouse afuera"
    box.style.color = "white";
    box.style.backgroundColor = "blue";
});

let cursor = document.getElementById("cursor");
document.addEventListener("mousemove" , function(event) {
    cursor.innerHTML = `Coordenada X: ${event.clientX} Coordenada Y: ${event.clientY}`;
});

let tecla = document.getElementById("tecla");
let mostrarTecla = document.getElementById("mostrarTecla");

tecla.addEventListener("keydown" , function() {
    mostrarTecla.innerText = `Presionaste la tecla ${event.key}`;
})

function cargarPagina () {
    alert("Se ha cargado la pagina completa");
}


//Propagacion de Eventos

let myDiv = document.getElementById("myDiv");
let myP = document.getElementById("myP");

myP.addEventListener("click" , function () {
    alert("Hiciste click en el parrafo");
} , true);

myDiv.addEventListener("click" ,  function () {
    alert("Hiciste click en el Div");
} , true);