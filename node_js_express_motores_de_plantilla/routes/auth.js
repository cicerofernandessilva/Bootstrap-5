const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  // res.send("Estas solicitando la ruta raiz😍!");
  res.render("login");
});

module.exports = router;
