const express = require("express");
const { create } = require("express-handlebars");
const app = express();
const hbs = create({ extname: "hbs" });

app.engine("hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  // res.send("Estas solicitando la ruta raiz😍!");
  res.render("home");
});

app.use(express.static(__dirname + "/public"));
app.listen(5000, () => console.log("Servidor andando👌!"));
