//uso de modulos nativos do node
// const http = require("http");
// const port = 5000;

// const server = http.createServer((req, res) => {
//   res.end("este es la respuesta 🚀");
// });

// server.listen(port, () => console.log("Funcionando! 😁 "));

//uso de modulos nativos do express
const fs = require("fs");
const express = require("express");
const { clearScreenDown } = require("readline");

const app = express();
const port = 5000;

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // necessário para ler informações capturadas via post

// app.get("/formulario", (req, res) => {
//   console.log(req.query); //mostrar a informação capturada
//   res.send("Formulário enviado!...");
// });

app.post("/formulario", (req, res) => {
  console.log(req.body); //mostrar a informação capturada via post
  const { nombre, apellido } = req.body; // coloca os dados dentro de uma constante
  // if (!nombre || !apellido) return res.send("No colocaste tus datos!"); //texto em tela
  if (!nombre || !apellido) return res.redirect("/erro.html"); //cria pagina de erro
  console.log(nombre, apellido);
  //crear archivos con fs
  fs.writeFile(`archivo/${nombre}.txt`, apellido, (err) => {
    if (err) return res.send("Falló al crear el archivo!");
    // res.send("Se creo el archivo!");
    res.download(__dirname + `/archivo/${nombre}.txt`);
  });
  // res.send("Formulário enviado!...");
});

app.get("/", (req, res) => {
  res.send("Clicaste na pagina de inicio! 🚀🚀");
});

app.get("/cicero", (req, res) => {
  res.send("Visitaste la pagina cicero! 🚀🚀");
});

app.get("/post", (req, res) => {
  res.send("Usaste el metodo POST! 🚀🚀");
});

app.listen(port, () => {
  console.log("Funciona! 😎😎👏");
});
