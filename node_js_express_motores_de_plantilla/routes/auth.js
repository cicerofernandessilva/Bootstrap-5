const express = require("express");
const { body } = require("express-validator");
const {
  loginForm,
  registerForm,
  registerUser,
  confirmC,
  loginUser,
  cerrarSesion,
} = require("../controllers/authControllers");
const router = express.Router();

router.get("/register", registerForm);
// router.post("/register", registerUser); sem validacion
router.post(
  "/register",
  [
    body("userName", "Ingrese un nombre valido!").trim().notEmpty().escape(),
    body("email", "Ingrese un email valido!").trim().isEmail().normalizeEmail(),
    body("password", "Ingrese un contrasena de minimo 6 caracteres!")
      .trim()
      .isLength({ min: 6 })
      .escape()
      .custom((value, { req }) => {
        if (value !== req.body.repassword) {
          throw new Error("No coinciden las contrasenas!");
        } else {
          return value;
        }
      }),
  ],
  registerUser
);
router.get("/confirm/:token", confirmC);
router.get("/login", loginForm);
router.post(
  "/login",
  [
    body("email", "Ingrese un email valido!").trim().isEmail().normalizeEmail(),
    body("password", "Ingrese un contrasena de minimo 6 caracteres!")
      .trim()
      .isLength({ min: 6 })
      .escape(),
  ],
  loginUser
);

router.get("/logout", cerrarSesion);

module.exports = router;
