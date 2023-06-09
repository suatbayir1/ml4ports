// Libraries
const express = require("express");
const router = express.Router();

// Route modules
const test = require("./test");
const container = require("./container");
const models = require("./models");

// Routers
router.use("/test", test);
router.use("/container", container);
router.use("/model", models);

module.exports = router;
