let aprendiz = {
    nombre : "Sebastian",
    apellido : "Manrique",
    correo : "correofalso123@gmail.com",
    programa : {
        nombre : "ADSO",
        codigo : 32331,
        ficha : 3233140,
        duracion : 21,
    },
    saludar : function() {
        console.log("Hola, mundo");
    }
}

console.log(aprendiz);
console.log(aprendiz.nombre);
console.log(aprendiz.programa.ficha);
console.log(aprendiz.saludar());

//constructores de funciones con objetos

function aprendizSena (nombre, apellido, correo, programa) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.programa = programa;
    this.saludar = function () {
        console.log("Hola, mundo");
    }
}

let aprendiz1 = new aprendizSena("Felipe" , "Sandoval" , "correofalso456@gmail.com" , "ADSO");
console.log(aprendiz1);
let aprendiz2 = new aprendizSena("Pepito" , "Perez" , "correofalso789@gmail.com" , "SST");
console.log(aprendiz2);

console.log(typeof(aprendiz1));
console.log(aprendiz2.nombre);
console.log(aprendiz1.saludar());