// Libraries
const express = require("express");
const router = express.Router();

// Route modules
const test = require("./test");
const container = require("./container");
const models = require("./models");
const ships = require("./ships")

// Routers
router.use("/test", test);
router.use("/container", container);
router.use("/model", models);
router.use("/ships", ships);

module.exports = router;
