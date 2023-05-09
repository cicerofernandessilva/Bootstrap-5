const express = require("express");
const session = require("express-session");
const { create } = require("express-handlebars");
const app = express();

app.use(
  session({
    secret: "keyboard fox",
    resave: false,
    saveUninitialized: true,
    name: "secret-fox",
  })
);

//probar funcionamento
// app.get("/ruta-protegida", (req, res) => {
//   res.json(req.session.usuario || "Sin sesion de usuario!");
// });

// app.get("/crear-session", (req, res) => {
//   req.session.usuario = "cicero";
//   res.redirect("/ruta-protegida");
// });

const hbs = create({
  extname: "hbs",
  partialsDir: ["views/components"],
});

app.engine("hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// a fonte de dados foi inserida no home
// app.get("/", (req, res) => {
//   // res.send("Estas solicitando la ruta raiz😍!");
//   const urls = [
//     { origin: "www.google.com/cicero1", shortURL: "sdfdfsdf1" },
//     { origin: "www.google.com/cicero2", shortURL: "sdfdfsdf2" },
//     { origin: "www.google.com/cicero3", shortURL: "sdfdfsdf3" },
//     { origin: "www.google.com/cicero4", shortURL: "sdfdfsdf4" },
//     { origin: "www.google.com/cicero5", shortURL: "sdfdfsdf5" },
//   ];
//   res.render("home", { urls: urls });
// });

// login foi inserido no auth
// app.get("/login", (req, res) => {
//   // res.send("Estas solicitando la ruta raiz😍!");
//   res.render("login");
// });

app.use(express.urlencoded({ extended: true })); //leer body enviado via post
app.use(express.static(__dirname + "/public"));
app.use("/", require("./routes/home"));
app.use("/auth", require("./routes/auth"));
require("dotenv").config();
require("./database/db");

const PORT = process.env.PORT || 5000;

// app.listen(5000, () => console.log("Servidor andando👌!"));
app.listen(PORT, () => console.log("Servidor andando👌!" + PORT));
