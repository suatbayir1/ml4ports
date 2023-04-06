// Libraries
const express = require("express");
const router = express.Router();

// Controllers
const {
  getTrainedModelsMetadata,
  getTrainedModelMetadata,
  createTrainedModelMetadata,
} = require("../controllers/models");

// Middlewares
const { isExistsInCache } = require("../middlewares/database/redisCache");
const {
  checkTrainedModelMetadataIsExists,
  checkTrainedModelMetadataIsExistsById,
} = require("../middlewares/database/assetChecker");

// Routes
router.post(
  "/createTrainedModelMetadata",
  [checkTrainedModelMetadataIsExists],
  createTrainedModelMetadata
);

router.get(
  "/getTrainedModelsMetadata",
  isExistsInCache,
  getTrainedModelsMetadata
);

router.get(
  "/getTrainedModelMetadata/:id",
  [isExistsInCache, checkTrainedModelMetadataIsExistsById],
  getTrainedModelMetadata
);

module.exports = router;
