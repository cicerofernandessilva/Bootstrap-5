const express = require("express");
const { leerUrls } = require("../controllers/homeControllers");
const router = express.Router();

router.get("/", leerUrls);

module.exports = router;
