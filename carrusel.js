let btnAnterior = document.getElementById("btnAnterior"); //Captura elemento en variable
let btnSiguiente = document.getElementById("btnSiguiente"); //Captura elemento en variable
btnAnterior.classList.add("botones"); //añade estilo CSS
btnSiguiente.classList.add("botones"); //añade estilo CSS

let images = ["assets/images/img1.jpg" , "assets/images/img2.jpg" , "assets/images/img3.jpg"]; //crea lista con rutas de imagenes

let posicion = 0; //un contador para moverse en la lista con indices

btnSiguiente.addEventListener("click" , function () { //crea evento para el boton
    let slider = document.getElementById("slider"); //captura el elemento HTML en una variable
    posicion++; //aumenta la posicion del indice
    if (posicion >= images.length) { //verifica si esta al final de la lista
        posicion = 0; //devuelve el indice al primero
    }
    slider.src = images[posicion]; //cambia la imagen segun el indice 
});

btnAnterior.addEventListener("click" , function () { //crea evento para el boton
    let slider = document.getElementById("slider"); //Captura el elemento HTML en una variable
    posicion--; //disminuye la posicion del indice
    if (posicion < 0) { //verifica si esta al comienzo de la lista
        posicion = images.length-1; //devuelve el indice al ultimo 
    }
    slider.src = images[posicion]; //cambia la imagen segun el indice
});