const mongoose = require("mongoose");
require("dotenv").config();

//chamar database
const clientDB = mongoose
  .connect(process.env.URI)
  .then((m) => {
    console.log("DB conectado 🔥!");
    return m.connection.getClient();
  })
  .catch((e) => console.log("DB falló conexion ! 😥" + e));

module.exports = clientDB;
