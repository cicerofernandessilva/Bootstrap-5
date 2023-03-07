// console.log("funciona!");

//array methods MAP
const frutas = ["🍎", "🍌", "🍉", "🍐"];

const nuevasFrutas = frutas.map((item) => item);

//diferença entre map e colocar o array em uma const
const otraFrutas = frutas;

frutas.push("🍇");

console.log(nuevasFrutas); // não adiona a uva
console.log(otraFrutas); // adiciona a uva

const user = [
  { uid: 1, nombre: "cicero", edad: 34 },
  {
    uid: 2,
    nombre: "sullyan",
    edad: 34,
  },
  {
    uid: 3,
    nombre: "sofia",
    edad: 3,
  },
];

const userNombre = user.map((user) => user.nombre);
const userEdad = user.map((user) => user.edad);

//uso del filter
const mayores = user.filter((user) => user.edad > 30);
const userUid = user.filter((user) => user.uid !== 3);

console.log("Nombres .map", userNombre);
console.log("Edad .map", userEdad);
//filter para retornar com uso de seleção com critério
console.log("Por Edad mayores de 30 anos .filter", mayores);
console.log("Por uid, diferente de 3 .filter", userUid);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numPorDos = numeros.map((item) => item * 2);

console.log(numPorDos);
