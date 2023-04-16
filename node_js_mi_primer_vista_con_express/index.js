//uso de modulos nativos do node
// const http = require("http");
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.end("este es la respuesta 🚀");
// });

// server.listen(port, () => console.log("Funcionando! 😁 "));

//uso de modulos nativos do express

const express = require("express");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Clicaste na pagina de inicio! 🚀🚀");
});

app.listen(port, () => {
  console.log("Funciona! 😎😎👏");
});
