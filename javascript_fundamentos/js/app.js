// console.log("Hola JS");
// // Uso de prompt e parseInt
// let nombreUsuario = prompt("Escribe tu nombre");
// let n1 = parseInt(prompt("Escribe un número"));
// let n2 = parseInt(prompt("Escribe otro número"));

// let numberSoma = n1 + n2;

// alert(
//   "Olá " +
//     nombreUsuario +
//     "! A soma entre " +
//     n1 +
//     " e " +
//     n2 +
//     " é igual a " +
//     numberSoma
// );

// console.log("Hola JS");
// // Uso de prompt e parseInt
// let nombreUsuario = prompt("Escribe tu nombre");
// let n1 = parseInt(prompt("Escribe un número de 0 a 10"));
// //uso de if
// console.log(typeof n1);
// if (n1 == Number) {
//   if (n1 <= 10 && n1 >= 0) {
//     alert(
//       "Olá " +
//         nombreUsuario +
//         "! Muy bueno! " +
//         n1 +
//         " e um número entre 0 e 10."
//     );
//   } else {
//     alert(
//       "Olá " +
//         nombreUsuario +
//         "! Muy malo! " +
//         n1 +
//         " no es um número entre 0 e 10."
//     );
//   }
// } else {
//   alert(
//     "Olá " +
//       nombreUsuario +
//       "! Tú no escribiste un número! " +
//       n1 +
//       " no es un número!"
//   );
// }

//switch

// let user = prompt(`Escolhe una opcion:
// 1: Bom,
// 2: Medio,
// 3: Maravilhoso. `);

// switch (user) {
//   case "1":
//     alert("Muy Bueno!");
//     break;
//   case "2":
//     alert("Muy mejor!");
//     break;
//   case "3":
//     alert("Muy Maravilhoso!");
//     break;

//   default:
//     alert("Usted no digito un número de 1 a 3!");
//     break;
// }

// while

// let nUser = prompt("Digitas un número");

// while (nUser <= 10) {
//   console.log(nUser);
//   nUser++;
// }
// console.log("Termino em " + nUser);

// Jogo de adivinhação

// let nRandom = Math.floor(Math.random() * (10 - 1)) + 1;

// console.log(nRandom);

// let vidas = 3;

// console.log("Usted tiene " + vidas + " vidas");

// let nUser = parseInt(
//   prompt("Adivine el número de 1 al 10! Digite un numero...")
// );

// while (nRandom !== nUser && vidas > 1) {
//   console.log("Te equivocaste 😢");
//   let mensaje = nRandom > nUser ? "El número es mayor!" : "El numero es menor!";
//   vidas--;
//   console.log(mensaje);
//   console.log(nUser);
//   console.log("Usted tiene " + vidas + " vidas");
//   nUser = parseInt(prompt("Digite otro número de 1 al 10..."));
// }

// if (nRandom === nUser && vidas >= 1) {
//   console.log("Ganaste! 😍");
// } else {
//   console.log("Perdiste 😢");
//   console.log("Usted tiene " + vidas + " vidas");
// }

//array

// let frutas = ["manzana", "papaya", "plantano", "perita", "sandia", "uva", 10];
// console.log(frutas);
// console.log(frutas[1]);
// console.log(frutas[6]);
// console.log(frutas[0]);
// console.log(frutas.length);
// let i = 0;

// while (i < frutas.length) {
//   console.log("Loor con while " + frutas[i]);
//   i++;
// }

// for (loop)

// let frutas = ["manzana", "papaya", "plantano", "perita", "sandia", "uva", 10];
// console.log(frutas);
// console.log(frutas.length);

// for (let i = 0; i < frutas.length; i++) {
//   console.log("Loor con for do item número " + i + " é " + frutas[i]);
// }

//for of

let frutas = ["manzana", "papaya", "plantano", "perita", "sandia", "uva", 10];
console.log(frutas);
console.log(frutas.length);

for (let unidade of frutas) {
  console.log(unidade);
}

let user = "Cícero";
for (let letra of user) {
  console.log(letra);
}
