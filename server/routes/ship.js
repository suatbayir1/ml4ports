// Libraries
const express = require("express");
const router = express.Router();

// Controllers
const {
  getDistributionOfTotalShipCountByDays,
} = require("../controllers/ship");

// Middlewares
const { isExistsInCache } = require("../middlewares/database/redisCache");

// Routes
router.get(
  "/getDistributionOfTotalShipCountByDays",
  [isExistsInCache],
  getDistributionOfTotalShipCountByDays
);

module.exports = router;
