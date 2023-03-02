// console.log("Funciona!");

const inputColor = document.getElementById("inputColor");
const visualizar = document.getElementById("visualizar");
const colorPar = document.getElementById("colorPar");
const cardColor = document.getElementById("cardColor");

// console.log(inputColor);
// console.log(visualizar);
// console.log(colorPar);
// console.log(cardColor);

visualizar.addEventListener("click", () => {
  console.log(inputColor.value);
  //   console.log("Me desti click!");
  colorPar.textContent = inputColor.value;
  colorPar.style.color = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;

  navigator.clipboard
    .writeText(inputColor.value)
    .then(() => console.log("texto copiado"))
    .catch((e) => console.log(e));
});
