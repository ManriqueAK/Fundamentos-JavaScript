let programas = new Array("ADSO" , "SST" , "Topografía" , "Minería");
console.log(programas);
console.log(typeof(programas));

let programaSena = ["ADSO" , 22811 , true];
console.log(programaSena);
console.log(typeof(programaSena));

let codeLanguages = ["HTML" , "CSS" , "JavaScript" , "Python"];
console.log(codeLanguages);

codeLanguages.push("Java"); //agrega un elemento al array
console.log(codeLanguages);

codeLanguages[2] = "JS";
console.log(codeLanguages);

codeLanguages.pop(); //elimina el último elemento del array
console.log(codeLanguages);

codeLanguages.reverse(); //reordena al revés los elementos del array
console.log(codeLanguages);

console.log(codeLanguages.length); //cuenta los elementos del array

console.log(codeLanguages.includes("PHP")); //devuelve un true o false si el elemento existe en el array
console.log(codeLanguages.includes("Python"));