let nombre = document.getElementById("nombre");
let boton = document.getElementById("btn-enviar");
let contador = document.getElementById("contadorAprendices");
let lista = document.getElementById("lista");
let total = 0;
let nombres = [];
let mostrar = document.getElementById("mostrar");



boton.addEventListener ("click" , function () {
    let aprendiz = nombre.value.trim();

    if (aprendiz == "") {
        alert("Escriba un nombre");
        return;
    }

    aprendiz.addEventListener("" , function () {
        mostrar.textContent = "";
    })

    let existe = nombres.includes(aprendiz);
    if (existe === false) {
        nombres.push(aprendiz);
    }

    let li = document.createElement("li");
    li.textContent = aprendiz;
    
    let botonEliminar = document.createElement("button");
    botonEliminar.classList.add("botonEliminar");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
        total--;
        contador.textContent = "Aprendices: " + total;
    });

    li.appendChild(botonEliminar);

    li.addEventListener("click", function () {
        li.classList.add("tachado");
    });
    
    lista.appendChild(li);

    total++
    contador.textContent = "Aprendices: " + total;
    nombre.value = "";
    nombre.focus();
});

let filtro = document.getElementById("filtro");
let listaFiltrada= document.getElementById("lista");

filtro.addEventListener("keyup" , function () {
    let term = filtro.value.toLowerCase();
    let items = listaFiltrada.getElementsByTagName("li");

    Array.from(items).forEach(function (item) {
        if (item.textContent.toLowerCase().indexOf(term) !== -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
});

console.log(nombres);