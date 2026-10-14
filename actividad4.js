let nota = Number(prompt("Nota: "));
if (nota >= 0 && nota <= 5) {
    if (nota < 3) {
        console.log("Debe reforzar");
    } else if (nota >= 3) {
        console.log("Aceptable");
    } else if (nota > 3.5) {
        console.log("Bueno");
    } else if (nota > 4.5) {
        console.log("Excelente");
    }
} else {
    console.log("Valor inválido");
}
