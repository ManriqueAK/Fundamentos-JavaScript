let menu = Number(prompt("Elija una opción:\n1. Ver horario\n2. Consultar notas\n3. Salir"));
let nota = null;

switch(menu) {
    case 1: 
        console.log("Horarios: ");
        break;
    case 2 :
        nota = Number(prompt("Nota: "));
        if (nota >= 0 && nota <= 5) {
            if (nota >= 4.5) {
                console.log("Excelente");
            } else if (nota >= 3.5) {
                console.log("Bueno");
            } else if (nota >= 3) {
                console.log("Aceptable");
            } else if (nota < 3) {
                console.log("Debe reforzar");
            }
        } else {
            console.log("Valor inválido");
        break;
}
    case 3 :
        console.log("Adiós");
        break;
    default: 
        console.log("Opción no válida")
}