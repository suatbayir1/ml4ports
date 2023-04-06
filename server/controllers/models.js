// Libraries
const asyncErrorWrapper = require("express-async-handler");

// Models
const Model = require("../models/Model");

// Helpers
const { setCache, getFromDate } = require("../helpers/database/cache");

// Functions
const createTrainedModelMetadata = asyncErrorWrapper(async (req, res, next) => {
  const model = await Model.create(req.body);

  return res.status(200).json({
    fromCache: false,
    lastUpdateTime: Date.now(),
    data: model,
    message: "Model created successfully",
  });
});

const getTrainedModelsMetadata = asyncErrorWrapper(async (req, res, next) => {
  const { isPassed, lastUpdateTime, dataInMemory } = res.locals;
  const fromDate = getFromDate(isPassed, lastUpdateTime);
  // let fromDate = new Date(2019, 3, 1).toISOString();

  // if (isPassed) {
  //   fromDate = new Date(lastUpdateTime).toISOString();
  // }

  const models = await Model.find({
    updatedAt: { $gte: fromDate },
  }).sort({ updatedAt: "desc" });

  const cachedData = await setCache(
    req.originalUrl,
    models,
    dataInMemory,
    isPassed
  );

  return res.status(200).json({
    fromCache: false,
    ...cachedData,
  });
});

const getTrainedModelMetadata = asyncErrorWrapper(async (req, res, next) => {
  await setCache(req.originalUrl, req.model);

  return res.status(200).json({
    fromCache: false,
    lastUpdateTime: Date.now(),
    data: req.model,
  });
});

module.exports = {
  createTrainedModelMetadata,
  getTrainedModelsMetadata,
  getTrainedModelMetadata,
};
