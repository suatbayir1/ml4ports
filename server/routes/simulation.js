// Libraries
const express = require("express");
const router = express.Router();

// Controllers
const { getHierarchy } = require("../controllers/simulation");

// Middlewares
const { isExistsInCache } = require("../middlewares/database/redisCache");

// Routes
router.get("/getHierarchy", [isExistsInCache], getHierarchy);

module.exports = router;
