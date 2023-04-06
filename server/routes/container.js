// Libraries
const express = require("express");
const router = express.Router();

// Controllers
const {
  getNumberOfGroupsByContainerType,
} = require("../controllers/container");

// Middlewares
const { isExistsInCache } = require("../middlewares/database/redisCache");

// Routes
router.get(
  "/getNumberOfGroupsByContainerType",
  isExistsInCache,
  getNumberOfGroupsByContainerType
);

router.get(
  "/getNumberOfGroupsByContainerType/:id",
  isExistsInCache,
  getNumberOfGroupsByContainerType
);

module.exports = router;
