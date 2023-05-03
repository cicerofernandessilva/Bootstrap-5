const express = require("express");
const { loginForm, registerForm } = require("../controllers/authControllers");
const router = express.Router();

router.get("/register", registerForm);
router.get("/login", loginForm);

module.exports = router;
