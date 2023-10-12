// Libraries
const express = require("express");
const router = express.Router();

// Controllers
const { getHierarchy, getSimulationConfiguration, updateSimulationConfiguration } = require("../controllers/simulation");

// Middlewares
const { isExistsInCache } = require("../middlewares/database/redisCache");

// Routes
router.get("/getHierarchy", [isExistsInCache], getHierarchy);

router.get("/getSimulationConfiguration", getSimulationConfiguration)

router.put("/updateSimulationConfiguration", updateSimulationConfiguration)

module.exports = router;
