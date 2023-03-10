// // console.log("funciona!");

// const carrito = document.querySelector("#carrito");
// const template = document.querySelector("#template");
// const btnAgregar = document.querySelectorAll(".card .btn");
// const fragment = document.createDocumentFragment();

// // //teste
// // console.log(carrito);
// // console.log(template);
// // console.log(btnAgregar);
// // console.log(fragment);

// const carritoObj = [];

// const agrCarrito = (e) => {
//   //   console.log(e.target);
//   console.log(e.target.dataset.fruta);
//   const producto = {
//     titulo: e.target.dataset.fruta,
//     id: e.target.dataset.fruta,
//     cantidad: 1,
//   };

//   const indice = carritoObj.findIndex((item) => item.id === producto.id);
//   // console.log(indice);

//   if (indice === -1) {
//     carritoObj.push(producto);
//   } else {
//     carritoObj[indice].cantidad++;
//   }
//   // console.log(carritoObj);

//   pintarCarrito(carritoObj);
// };

// const pintarCarrito = (array) => {
//   carrito.textContent = "";
//   //   console.log("pintar carrito", producto);
//   carritoObj.forEach((item) => {
//     const clone = template.content.firstElementChild.cloneNode(true);
//     clone.querySelector(".lead").textContent = item.titulo;
//     clone.querySelector(".badge").textContent = item.cantidad;
//     fragment.appendChild(clone);
//   });
//   carrito.appendChild(fragment);
// };
// btnAgregar.forEach((btn) => btn.addEventListener("click", agrCarrito));

//teste de eventos

// const padre = document.querySelector(".border-primary");
// const hijo = document.querySelector(".border-secondary");
// const nieto = document.querySelector(".border-danger");
// console.log(padre);
// console.log(hijo);
// console.log(nieto);
// propagacion del evento
// padre.addEventListener("click", () => console.log("Me desti click - padre "));
// hijo.addEventListener("click", () => console.log("Me desti click - hijo "));
// nieto.addEventListener("click", () => console.log("Me desti click - nieto "));

// con forEach

// const all = document.querySelectorAll(".border");

// all.forEach((propagacion) => {
//   propagacion.addEventListener("click", () => console.log("Me deste click"));
// });

//sem propagação do evento

// all.forEach((propagacion) => {
//   propagacion.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Me deste click");
//   });
// });

// manipulando formulario

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Me deste click");
});

//con ancla

const ancla = document.querySelector("a");

ancla.addEventListener("click", (e) => console.log("Me deste click!"));
