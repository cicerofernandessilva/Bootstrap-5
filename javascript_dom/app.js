// console.log("funciona! 😍");

// console.log(document);
// console.log(document.head);
// console.log(document.title);
// console.log(document.getElementById("textoWeb"));
// console.log(document.getElementById("textoWeb").textContent);
// console.log(document.getElementById("textoWeb").innerHTML);

document.addEventListener("DOMContentLoaded", () => {
  console.log("funciona! 😍");

  console.log(document);
  console.log(document.head);
  console.log(document.title);
  console.log(document.getElementById("textoWeb"));
  console.log(document.getElementById("textoWeb").textContent);
  console.log(document.getElementById("textoWeb").innerHTML);
  console.log(document.querySelector("#textoSelector").innerHTML);
  console.log(document.querySelector(".classSelector").innerHTML);
  console.log(document.querySelector(".text-danger").textContent); // só pega o primerio elemento que coincide
  console.log(document.querySelectorAll(".text-danger"));
  console.log(document.querySelectorAll(".container .text-danger"));
  console.log(document.querySelectorAll("p"));

  const h1 = document.querySelector("#javascript");
  const boton = document.querySelector(".btn");
  const boton2 = document.querySelector(".btn2");

  console.log(h1.textContent);
  console.log(h1.nodeName);
  console.log(h1.id);
  console.log(h1.style);

  boton.addEventListener("click", () => {
    h1.textContent = "Texto modificado via javascript via boton";

    h1.style.backgroundColor = "blueviolet";
    h1.style.color = "white";
    h1.style.padding = "1rem";
    h1.style.margin = "0";
  });
  boton2.addEventListener("click", () => {
    h1.textContent = "Texto modificado via javascript via boton";

    h1.style.backgroundColor = "black";
    h1.style.color = "white";
    h1.style.padding = "2rem";
    h1.style.margin = "2rem";
  });

  const lista = document.querySelector("#lista");
  const paises = ["Brasil", "Japão", "Bolivia", "Espagña"];

  paises.forEach((pais) => {
    const li = document.createElement("li");
    li.textContent = pais;
    lista.appendChild(li);
  });

  const p = document.createElement("p");
  p.textContent = "Elemento creado en JS";
  lista.appendChild(p);
});
