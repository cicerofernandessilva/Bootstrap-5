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

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  // console.log("Pegando dados!");
  try {
    loadingT(true);
  } catch (error) {
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
