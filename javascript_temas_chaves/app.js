// // Template string

// let escribe = document.getElementById("texto");
// let user = prompt("Escribe tu nombre");
// let estado = true;

// //interpolacion
// alert(` Hola ${user}! Bienvenido`);

// escribe.innerHTML = ` Hola ${user.toUpperCase()}! Bienvenido`;

// //operador ternario

// alert(` Hola ${estado ? user : "ofline"}! Usante un operador ternario`);

//var X let

// let nombre = "cicero";
// let nombre = "ignacio";

// console.log(nombre); // não permite duas declarações com mesmo nome

// let nombre = "cicero";
// nombre = "ignacio";

// console.log(nombre); // permite modificação do conteúdo de let já existente

// var nombre2 = "cicero";
// var nombre2 = "ignacio";

// console.log(nombre2); // permite duas declarações com mesmo nome

// var nombre2 = "cicero";
// nombre2 = "ignacio";

// console.log(nombre2); // permite modificação do conteúdo de var já existente

// let nombre = "cicero";

// let v = true;

// if (v) {
//   let nombre = "ignacio";
//   console.log(nombre); // escopo local
// }

// console.log(nombre); // escopo global

// var nombre = "cicero";

// var v = true;

// if (v) {
//   var nombre = "ignacio";
//   console.log(nombre); // escopo local
// }

// console.log(nombre); // escopo global é sobre escrito pelo local

//for

// let i = 0;

// for (let i = 1; i < 5; i++) { //escopo local
//   console.log(i);
// }

// console.log(i); // escopo global

// const

// similar a let, com uma diferença de ser apenas de leitura

// exceção const array

// const array = [];

// array[0] = "salvia";
// array[1] = "salvia";
// array[2] = "salvia";

// console.log(array);

//metodos de array
// const frutas = ["banana", "plátano", "patata", "uva", "piña", "manzana"];
// console.log(frutas);
// //.push
// frutas.push("sandía");
// console.log(frutas);
// // .pop
// frutas.pop();
// console.log(frutas);
// // .shift
// frutas.shift();
// console.log(frutas);
// // .unshift
// frutas.unshift("melon");
// console.log(frutas);

// práctica carrito de frutas

let escribe = document.getElementById("texto");
const carrito = [];
const frutas = prompt("🛵 Que frutas 🍉 quieres hoy?");

carrito.push(frutas);

while (confirm("🍏Queres comprar alguma otra fruta? 🍍")) {
  const frutas = prompt("🛵 Que otra frutas 🍉 quieres hoy?");
  carrito.push(frutas);
}

for (const list of carrito) {
  console.log(list);
}
escribe.innerHTML = `Elegiste las siguientes frutas en el carrito: 
${carrito}
`;

console.log(carrito);
