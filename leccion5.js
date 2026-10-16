//Tabla de multiplicar con un prompt
let number = Number(prompt("Qué número desea multiplicar: "));
for (let i = 1; i <= 10 ; i++) {
    console.log(`${number} x ${i} = ${number*i}`)
}

//Promedio notas

let n = Number(prompt("Cuántas notas desea ingresar: "));
let j = 1;
let promedio = 0;

while (j <= n) {
    let nota = Number(prompt("Nota: "));
    promedio += nota;
    j++;
}
if (n != 0) {
    console.log(`El promedio es: ${promedio/n}`);
}

fichas = ["3233140" , "3356178" , "3576896", "3421789" , "3856734"];

k = 1;

for (ficha of fichas) {
    if (ficha == "3233140") {
        console.log(`${k} Se omitió la ficha`)
        k++;
        continue;
    } else {
        console.log(`${k}. Ficha ${ficha}`)
        k++;
    }
}

for (let l = 2 ; l <= 50 ; l += 2) {
    console.log(l)
}