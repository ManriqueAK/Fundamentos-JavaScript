let nota1 = Number(prompt("Nota 1: "));
let nota2 = Number(prompt("Nota 2: "));
let nota3 = Number(prompt("Nota 3: "));
let promedio = ((nota1 + nota2 + nota3)/3).toFixed(1);
let aprobo = promedio >= 3.0;
console.log(`El promedio fue ${promedio}. Aprobó? ${aprobo}`);
if (promedio < 3.0) {
    console.log("Faltan ", (3.0 - promedio).toFixed(2), "puntos para aprobar");
} else {
    console.log("No necesita más puntos para aprobar");
}
