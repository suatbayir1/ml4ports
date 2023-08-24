// Libraries
const express = require("express");
const router = express.Router();

// Route modules
const test = require("./test");
const container = require("./container");
const models = require("./models");
const portSummary = require("./portSummary");
const ship = require("./ship");
const simulation = require("./simulation");

// Routers
router.use("/test", test);
router.use("/container", container);
router.use("/model", models);
router.use("/portSummary", portSummary);
router.use("/ship", ship);
router.use("/simulation", simulation);

module.exports = router;
