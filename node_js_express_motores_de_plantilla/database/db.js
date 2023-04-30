const mongoose = require("mongoose");

//chamar database
mongoose
  .connect(process.env.URI)
  .then(() => console.log("DB conectado 🔥!"))
  .catch((e) => console.log("DB falló conexion ! 😥" + e));
