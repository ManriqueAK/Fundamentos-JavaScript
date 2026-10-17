function calculatorLenght (value , option) {
    switch(option) {
        case 1 :
            return (`${value * 2.54} pulgadas`);
            break;
        case 2 :
            return (`${value * 30.48} pies`);
            break;
        case 3 :
            return (`${value / 100} m`);
            break;
        default :
            return "Valor no válido";
    }
}

function calculatorMass (value, option) {
    switch(option) {
        case 1 :
            return (`${(value * 0.45359).toFixed(2)} kg`);
            break;
        case 2 :
            return (`${value * 25} lbs`);
            break;
        case 3 :
            return (`${value * 50} kg`); 
            break;
        case 4 :
            return (`${value / 28.35} onzas`);
            break;
        default :
            return "Valor no válido";
    }
}

let app = Number(prompt("Elija una aplicación:\n1. Conversión de unidades de longitud\n2. Conversión de unidades de masa"));

if (app == 1) {
    option = Number(prompt("Conversión:\n1. centímetros a pulgadas\n2. centímetros a pies\n3. centímetros a metros"));
    value = Number(prompt("Valor: "));
    alert(calculatorLenght(value, option));
} else if  (app == 2) {
    option = Number(prompt("Conversión:\n1. libras a kilos\n2. arrobas a libras\n3. arrobas a kilos\n4. gramos a onzas"));
    value = Number(prompt("Valor: "));
    alert(calculatorMass(value, option));
} else {
    alert("Valor no válido")
}