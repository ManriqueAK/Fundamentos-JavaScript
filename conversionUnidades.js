function calculadora() {
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

    function calculatorMass (value  , option) {
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

    function reglaTres (val1, val2, val3, option) {
        switch(option) {
            case 1 :
                return ((val2 * val3)/val1);
                break;
            case 2 :
                return ((val1*val2)/val3);
                break;
            default :
                return "Valor no válido";
        }
    }


    let app = Number(prompt("Elija una aplicación:\n1. Conversión de unidades de longitud\n2. Conversión de unidades de masa\n3. Calculadora de densidad\n4. Regla de tres"));

    if (app == 1) {
        option = Number(prompt("Conversión:\n1. centímetros a pulgadas\n2. centímetros a pies\n3. centímetros a metros"));
        value = Number(prompt("Valor: "));
        alert(calculatorLenght(value, option));
    } else if  (app == 2) {
        option = Number(prompt("Conversión:\n1. libras a kilos\n2. arrobas a libras\n3. arrobas a kilos\n4. gramos a onzas"));
        value = Number(prompt("Valor: "));
        alert(calculatorMass(value, option));
    } else if (app == 3) {
        value = Number(prompt("Masa (g): "));
        volume = Number(prompt("Volumen (cm3): "));
        alert(`La densidad de tu compuesto es de ${value/volume} g/cm3`);
    } else if (app == 4) {
        option = Number(prompt("Elija una opción:\n1. Regla de tres directa\n2. Regla de tres inversa"));
        val1 = Number(prompt("Valor 1: "));
        val2 = Number(prompt("Valor 2: "));
        val3 = Number(prompt("Valor 3: "));
        alert(`Resultado: ${reglaTres(val1, val2, val3, option)}`);
    } else {
        alert("Valor no válido") }
}