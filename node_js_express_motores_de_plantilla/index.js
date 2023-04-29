const express = require("express");
const { create } = require("express-handlebars");
const app = express();
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

app.use(express.static(__dirname + "/public"));
app.use("/", require("./routes/home"));
app.use("/auth", require("./routes/auth"));

app.listen(5000, () => console.log("Servidor andando👌!"));
