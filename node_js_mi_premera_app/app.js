console.log("Funciona!");

const { frutas, precios } = require("./frutas"); // importando elementos de outros arquivos

console.log(frutas);
console.log(precios);

frutas.forEach((item) => console.log(item));
precios.forEach((item) => console.log(item));
