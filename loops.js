for (let i = 1 ; i <= 5 ; i++) {
    console.log(i);
}

for (let j = 5 ; j >= 1 ; j--) {
    console.log(j);
}

//Tabla de multiplicar del 7
for (let k = 1 ; k <=10 ; k++) {
    console.log("7 x ", k, "=",7*k)
}

let names = ["Felipe" , "Miguel" , "Adriana" ,"Alejandra" , "Oscar"];

for (let l = 0 ; l < names.length ; l++) {
    console.log(`${l+1}. ${names[l]}`);
}

for (let name of names) {
    console.log(`${name}`)
}

let fruits = ["melon" , "apple" , "banana" , "cherry" , "bluebarry" , "mango"];
let h = 1;
for (fruit of fruits) {
    console.log(`${h}. ${fruit}`)
    h++;
}