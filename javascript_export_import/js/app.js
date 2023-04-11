// // (function () {
// //   //function auto-executavel anonima
// //   const fruta = "🍉";
// //   console.log(fruta);
// // })();

// // import { sandia } from "./frutas.js";
// // console.log(sandia);

// // import { Fruta, frutilla, pintarPlatano, platano } from "./frutas.js";

// // const manzana = new Fruta("🍎");
// // const guinda = new Fruta("🍒");

// // console.log(guinda, manzana);

// // frutilla();
// // pintarPlatano();

// // console.log(platano);

// // import melon from "./frutas.js"; // import default

// // console.log(melon);

// //localStorege

// localStorage.setItem("platano", "🍌"); // inserir elementos
// localStorage.setItem("sandia", "🍉"); // inserir elementos
// console.log(localStorage.getItem("platano")); // pegar elementos

// // remover elemento

// localStorage.removeItem("platano");
// console.log(localStorage.getItem("platano"));
// console.log(localStorage.getItem("sandia"));

// // limpar tudo
// localStorage.clear();
// console.log(localStorage.getItem("platano"));
// console.log(localStorage.getItem("sandia"));

// // colocar objeto ou array no localStorage

// const frutas = [
//   { nombre: "🍎", color: "roxo" },
//   { nombre: "🍉", color: "roxo" },
//   { nombre: "🍏", color: "verde" },
// ];

// localStorage.setItem("frutas", JSON.stringify(frutas)); // o JSON.stringify transforma o objeto em string

// console.log(localStorage.getItem("frutas"));

// // colocar elementos do storage em const

// const frutasLocal = JSON.parse(localStorage.getItem("frutas")); // o JSON.parse transforma o string em objeto
// console.log(frutasLocal);

//practica localStorage

// console.log("funciona!");

const alert = document.querySelector("#alert");
const formulario = document.querySelector("#formulario");
const pintar = document.querySelector("#pintar");
const template = document.querySelector("#template");

// console.log(alert);
// console.log(formulario);
// console.log(pintar);
// console.log(template);

const todos = [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("funciona!");
  alert.classList.add("d-none");
  const data = new FormData(formulario);
  const [todo] = [...data.values()];
  // console.log(todo);
  if (!todo.trim()) {
    // console.log("te equivocaste, mandaste vacio!");
    alert.classList.remove("d-none");
    return;
  }
});
