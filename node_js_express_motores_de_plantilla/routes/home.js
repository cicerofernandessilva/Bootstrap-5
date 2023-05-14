const express = require("express");
const {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarUrl,
  editarUrlForm,
  redirectShort,
} = require("../controllers/homeControllers");
const { urlValidar } = require("../middlewares/urlValidar");
const validarUser = require("../middlewares/validarUser");
const router = express.Router();

router.get("/", validarUser, leerUrls);
router.post("/", urlValidar, agregarUrl);
router.get("/eliminar/:id", eliminarUrl);
router.get("/editar/:id", editarUrlForm);
router.post("/editar/:id", urlValidar, editarUrl);
router.get("/:shortURL", redirectShort);

module.exports = router;
