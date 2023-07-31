// Libraries
const express = require("express");
const router = express.Router();

// Controller Functions
const {
  getCurrentPortStatus,
  getDailyContainersStatus,
  refreshCurrentPortStatus
} = require("../controllers/portSummary")

// Middlewares
const { isExistsInCache } = require("../middlewares/database/redisCache");

// Routes
router.get("/getDailyContainersStatus/:id", 
  getDailyContainersStatus,  
);

router.get("/getCurrentPortStatus", 
  getCurrentPortStatus,
);

router.get("/refreshCurrentPortStatus", 
  refreshCurrentPortStatus,
);

module.exports = router;
