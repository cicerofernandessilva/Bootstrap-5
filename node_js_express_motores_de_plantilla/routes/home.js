const express = require("express");
const {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarUrl,
  editarUrlForm,
  redirectShort,
} = require("../controllers/homeControllers");
const {
  formPerfil,
  editarFotoPerfil,
} = require("../controllers/perfilControllers");
const { urlValidar } = require("../middlewares/urlValidar");
const validarUser = require("../middlewares/validarUser");
const router = express.Router();

router.get("/", validarUser, leerUrls);
router.post("/", validarUser, urlValidar, agregarUrl);
router.get("/eliminar/:id", validarUser, eliminarUrl);
router.get("/editar/:id", validarUser, editarUrlForm);
router.post("/editar/:id", validarUser, urlValidar, editarUrl);

router.get("/perfil", validarUser, formPerfil);
router.post("/perfil", validarUser, editarFotoPerfil);

router.get("/:shortURL", redirectShort);

module.exports = router;
