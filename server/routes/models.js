// Libraries
const express = require("express");
const router = express.Router();

// Controllers
const {
  getTrainedModelsMetadata,
  getTrainedModelMetadata,
  createTrainedModelMetadata,
  redeployModel,
  redeployModelMetadata,
} = require("../controllers/models");

// Middlewares
const { isExistsInCache } = require("../middlewares/database/redisCache");
const {
  checkTrainedModelMetadataIsExists,
  checkTrainedModelMetadataIsExistsById,
} = require("../middlewares/database/assetChecker");
const modelFileUpload = require("../middlewares/libraries/ModelFileUpload");

// Routes
router.post(
  "/createTrainedModelMetadata",
  [checkTrainedModelMetadataIsExists],
  createTrainedModelMetadata
);

router.get(
  "/getTrainedModelsMetadata",
  // isExistsInCache,
  getTrainedModelsMetadata
);

router.get(
  "/getTrainedModelMetadata/:id",
  [isExistsInCache, checkTrainedModelMetadataIsExistsById],
  getTrainedModelMetadata
);

router.post(
  "/:id/redeployModelFile",
  [modelFileUpload.single("file")],
  redeployModel
);

router.post("/:id/redeployModelMetadata", redeployModelMetadata);

module.exports = router;
