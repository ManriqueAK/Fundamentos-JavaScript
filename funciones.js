//function saludo () {
//    console.log("Hola mundo");
//}

//saludo ();

//function saludoPersonalizado (nombre, apellido) {
//    console.log(`Hola ${nombre} ${apellido}`);
//}

//saludoPersonalizado ("Juan" , "Manrique");
//saludoPersonalizado ("Sebastian" , "Manrique");

//function bienvenidaSENA (nombre, programa = "ADSO") {
//    console.log(`Hola aprendiz ${nombre} del programa ${programa}`);
//}

//bienvenidaSENA ("Juan Manrique");
//bienvenidaSENA ("Pepito" , "Minería");

//function calculateAge (name, birthYear) {
//    let age = 2026 - birthYear;
//    console.log(`Tienes ${age} años`);
//}

//calculateAge ("Juan" , 2005);
//calculateAge (2000 , "Miguel");

//function calculateAverage (num1 , num2 , num3) {
//    let resultado = (num1 + num2 + num3) / 3;
//    return resultado;
//}

//let result = calculateAverage(4 , 5 , 3);
//console.log(result)


function sumar (num1, num2) {
    return num1 + num2;
}

function restar (num1 , num2) {
    return num1 - num2;
}

function multiplicar (num1 , num2) {
    return num1 * num2;
}

function dividir (num1 , num2) {
    return num1 / num2;
}

function calculator (num1, num2, operation) {
    switch (operation) {
        case 1 :
            return sumar(num1 , num2);
            break;
        case 2 : 
            return restar(num1 , num2);
            break;
        case 3 :
            return multiplicar(num1 , num2);
            break;
        case 4 :
            return dividir(num1 , num2);
            break;
        default :
            return "Opción no válida";
    }
}

console.log(calculator(3 , 5 , 1));
console.log(calculator(10 , 3 , 2));
console.log(calculator(2 , 5 , 3));
console.log(calculator(40 , 10 , 4));

