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
  const nUser = ["cicero", "ignacio", "velente"];
  const fragment = document.createDocumentFragment();

  //con reflow
  // paises.forEach((pais) => {
  //   const li = document.createElement("li");
  //   li.textContent = pais;
  //   lista.appendChild(li);
  // });
  // nUser.forEach((pais) => {
  //   lista.innerHTML += `<li> ${pais} </li> `;
  // });

  // sin reflow
  // paises.forEach((pais) => {
  //   const li = document.createElement("li");
  //   li.textContent = pais;
  //   fragment.appendChild(li);
  // });

  // lista.appendChild(fragment); // forma mais segura de se fazer

  // //insertBefore

  // paises.forEach((pais) => {
  //   const newNode = document.createElement("li");
  //   newNode.textContent = pais;
  //   // Nos devuelve el primer elemento
  //   const referenceNode = fragment.firstChild;
  //   // Si "referenceNode" es null, el newNode se insertará al final de la lista.
  //   fragment.insertBefore(newNode, referenceNode);
  // });

  // lista.appendChild(fragment); // forma mais segura de se fazer

  const p = document.createElement("p");
  p.textContent = "Elemento creado en JS";
  lista.appendChild(p);

  //createElement modo 1

  // paises.forEach((pais) => {
  //   const newNode = document.createElement("li");
  //   newNode.innerHTML = `<li class="list"><b>Pais: </b><span class="text-primary">${pais};</span></li>`;
  //   // Nos devuelve el primer elemento
  //   const referenceNode = fragment.firstChild;
  //   // Si "referenceNode" es null, el newNode se insertará al final de la lista.
  //   fragment.insertBefore(newNode, referenceNode);
  // });

  // lista.appendChild(fragment); // forma mais segura de se fazer

  //createElement modo 2
  // paises.forEach((pais) => {
  //   const li = document.createElement("li");
  //   li.className = "list";

  //   const b = document.createElement("b");
  //   b.textContent = "Pais : ";

  //   const span = document.createElement("span");
  //   span.className = "text-primary";
  //   span.textContent = pais;

  //   li.appendChild(b);
  //   li.appendChild(span);

  //   fragment.appendChild(li);
  // });

  // lista.appendChild(fragment); // forma mais segura de se fazer

  //createElement modo 3
  // let tamplete = "";
  // paises.forEach((pais) => {
  //   tamplete += `
  //   <li class="list">
  //       <b>Pais: </b> <span class="text-primary">${pais}</span>
  //     </li>
  //   `;
  // });

  // lista.innerHTML = tamplete; // forma mais segura de se fazer

  // Uso do template

  const liTemplate = document.querySelector("#liTemplate");

  paises.forEach((pais) => {
    const clone = liTemplate.content.cloneNode(true);
    clone.querySelector("span").textContent = pais;

    fragment.appendChild(clone);
  });

  lista.appendChild(fragment); // forma mais segura de se fazer

  // <li class="list">
  //   <b>Pais: </b> <span class="text-primary">aqui vá ela pais</span>
  // </li>;
});
