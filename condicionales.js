//let evidencia = 3.6;
//if (evidencia >= 3.5) {
//    console.log("El resultado es aprobado");
//} else {
//   console.log("El resultado no es aprobado")
//}

//let age = 21;
//if  (age <= 13) {
//    console.log("Usted es un niño");
//} else if (age <= 18) {
//   console.log("Ustes es un adolescente");
//} else if (age <= 60) {
//    console.log("Usted es un adulto");
//} else {
//    consoile.log("Usted es un anciano");
//}

//let semanas = Number(prompt("Semanas cotizadas: "))
//let age = Number(prompt("Edad: "));
//let gender = prompt("Género (male/female): ");
//if (gender == "male") {
//   if (age >= 62) {
//        if (semanas >= 1300) {
//            console.log("Se pensiona");
//        } else {
//            console.log("Tiene que cotizar más semanas");
//        }
//    } else {
//        console.log("No se puede pensionar todavía");
//    }
//} else if (gender == "female") {
//    if (age >= 57) {
//        if (semanas >= 1250) {
//            console.log("Se pensiona");
//        } else {
//            console.log("Tiene que cotizar más semanas");
//       }
//    } else {
//    console.log("No se puede pensionar todavía");
//    }
//} else {
//    console.log("Lo siento, no puedo calcular la pensión para ese género")
//}

//let email = "ejemplo123@gmail.com";
//let password = "12345678";

//let correo = prompt("Correo electrónico: ");
//let contrasena = prompt("Contraseña: ");

//if (correo == email && contrasena == password) {
//    console.log("Acceso permitido");
//} else {
//    console.log("Acceso denegado");
//}

//let electiva = true;
//let practica = false;

//if (electiva || practica) {
//   console.log("Felicidades. Te certificas")
//} else {
//    console.log("Lo siento. No te certificas")
//}

//let evidencia = 4.0;
//let texto = (evidencia >= 3.5) ? "APROBADO" : "DESAPROBADO";

//let day = 1;
//switch (day) {
//    case 1 :
//        console.log("Monday");
//        break;
//    case 2 :
//        console.log("Tuesday");
//        break;
//    case 3 :
//        console.log("Wednesday");
//        break;
//    case 4 :
//       console.log("Thrusday");
//        break;
//    case 5 :
//        console.log("Friday");
//        break;
//    case 6 :
//        console.log("Saturday");
//        break;
//    case 7 :
//        console.log("Sunday");
//        break;
//    default :
//       console.log("Día no valido");
//}

let operation = Number(prompt("Elija una operación: \n1. Suma  \n2. Resta \n3. Multiplicación \n4. División"));
let num1 = Number(prompt("Número 1: "));
let num2 = Number(prompt("Número 2: "));

switch(operation) {
    case 1 :
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2 :
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3 :
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case 4 :
        if (num2 != 0) {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
            console.log("ERROR");
        }
        break;
    default :
        console.log("Operación inválida");
}