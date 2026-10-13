//and
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//not
console.log(!true);
console.log(!false);

//Ejemplo
let edad = 60;
let semanas_cotizadas = 1500;
console.log(edad >= 62 && semanas_cotizadas >= 1300);

let grades = 80;
let unassisted = 5;
console.log(grades >= 70 || unassisted <= 3);