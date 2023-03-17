// console.log("Funciona!");

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
