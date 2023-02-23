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

console.log("Hola JS");
// Uso de prompt e parseInt
let nombreUsuario = prompt("Escribe tu nombre");
let n1 = parseInt(prompt("Escribe un número de 0 a 10"));
//uso de if
console.log(typeof n1);
if (n1 == Number) {
  if (n1 <= 10 && n1 >= 0) {
    alert(
      "Olá " +
        nombreUsuario +
        "! Muy bueno! " +
        n1 +
        " e um número entre 0 e 10."
    );
  } else {
    alert(
      "Olá " +
        nombreUsuario +
        "! Muy malo! " +
        n1 +
        " no es um número entre 0 e 10."
    );
  }
} else {
  alert(
    "Olá " +
      nombreUsuario +
      "! Tú no escribiste un número! " +
      n1 +
      " no es un número!"
  );
}
