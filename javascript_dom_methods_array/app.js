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

// uso de find, devolve o item do objeto

const find = user.find((user) => user.uid > 1);
console.log("find condição user.uid > 1", find);
const find2 = user.find((user) => user.uid === 1);
console.log("find condição user.uid === 1", find2);

// uso de some, devolve verdadeiro ou falso

const some = user.some((user) => user.uid === 3);
console.log("Some condição user.uid === 3", some);
const some2 = user.some((user) => user.uid > 3);
console.log("Some condição user.uid > 3", some2);

//uso de findIndex, devolve indice

const findIndex = user.findIndex((user) => user.uid === 3);
console.log("findIndex condição user.uid === 3", findIndex);
const findIndex2 = user.findIndex((user) => user.uid > 3);
console.log("findIndex condição user.uid > 3", findIndex2);

//uso de slice, crear nuevo array con parte de uno array

const array1 = ["ignacio", "cicero", "sullyan", "simone"];
//                   0        1           2        3
const array2 = ["Maria", "Joaquim", "Sofia", "João"];

const slice = array1.slice(1, 3);
console.log("slice de 1 e 2, parametros array1.slice(1, 3)", slice);

// uso de concat, crar nuevo array con dos arrays

const array3 = array1.concat(array2);

console.log("Concat, parametros array1.concat(array2)", array3);

// uso de spread, crar nuevo array con dos arrays

const arraySpread = [...array1, ...array2];

console.log("arraySpread, parametros [...array1, ...array2]", arraySpread);

// reduce

const numerosArray = [1, 2, 3, 4, 5, 6];

const reduce = numerosArray.reduce((acc, valorActual) => acc + valorActual);
console.log("reduce - soma de numeros do array", reduce);

//falt cria novo array com, concatenação de array com elementos aninhados

const arrayAni = [1, 2, 3, [4, 5, [6, 7]]];

const flat = arrayAni.flat(3);

console.log("flat ", flat);
const arrayAni2 = [1, 2, 3, 4, 5, [6, 7], 9, 10];

const flat2 = arrayAni2.flat(2);

console.log("flat 2 ", flat2);
