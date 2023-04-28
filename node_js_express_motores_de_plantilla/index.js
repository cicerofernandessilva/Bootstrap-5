const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Estas solicitando la ruta raiz😍!");
});

app.listen(5000, () => console.log("Servidor andando👌!"));
