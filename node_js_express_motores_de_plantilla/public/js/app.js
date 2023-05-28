console.log("Hola frontend!");

document.addEventListener("click", (e) => {
  //   console.log(e.target.dataset.short);
  if (e.target.dataset.short) {
    //   console.log("existe");

    const url = `${window.location.origin || "http://localhost:5000"}/${
      e.target.dataset.short
    }`;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("texto copiado!");
      })
      .catch((err) => {
        console.log("Something went wrong!", err);
      });
  }
});
