//Operadores aritméticos

let a = 5;
let b = 10;

//Suma
console.log(a+b);
let suma = a + b;
console.log(a + " + " + b + " = " + suma);

//Resta
console.log(a + " - " + b + " = " + (a-b));

//Multiplicación
console.log(a + " x " + b + " = " + (a*b));

//División 
console.log(a + " / " + b + " = " + (a/b));

//Potenciación
console.log(b + " elevado a la " + a + " = " + (b**a));

//Módulo
console.log("El módulo de " + a + " y " + b + " es: " + b%a);
console.log("El módulo de 13 y " + a + " es:" + 13%a);

//Pedir los números
let c = Number(prompt("Número 1: "));
let d = Number(prompt("Número 2: "));
alert("El resultado es: " + (c+d));