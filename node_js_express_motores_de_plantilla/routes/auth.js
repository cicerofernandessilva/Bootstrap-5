const express = require("express");
const {
  loginForm,
  registerForm,
  registerUser,
  confirmC,
  loginUser,
} = require("../controllers/authControllers");
const router = express.Router();

router.get("/register", registerForm);
router.post("/register", registerUser);
router.get("/confirm/:token", confirmC);
router.get("/login", loginForm);
router.post("/login", loginUser);

module.exports = router;
