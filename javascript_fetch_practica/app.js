// console.log("Funciona!");

// const url = "https://pokeapi.co/api/v2/pokemon/ditto";

// // confirmando se a url está online
// fetch(url).then((res) => console.log(res));

// // transformando em Json
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// // pegando dados do objeto
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data.forms[0].name)); // escrevendo nome

// rickandmorty API

const loading = document.getElementById("loading");
const card = document.getElementById("card-dinamics");
const template = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

//teste

console.log(loading);
console.log(card);
console.log(template);

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  // console.log("Pegando dados!");
  try {
    loadingT(true);
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    //provar
    // console.log(data);
    pintarData(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingT(false);
  }
};

const loadingT = (estado) => {
  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};

const pintarData = (data) => {
  card.textContent = "";
  data.results.forEach((item) => {
    //teste
    // console.log(item);
    // console.log(item.name);
    const clone = template.cloneNode(true);
    clone.querySelector("h5").textContent = item.name;
    clone.querySelector("p").textContent = item.species;
    clone.querySelector("img").setAttribute("src", item.image);
    // console.log(clone);

    // Não gerar reflow
    fragment.appendChild(clone);
  });
  card.appendChild(fragment);
};
