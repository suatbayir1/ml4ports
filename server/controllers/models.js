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

const redeployModel = asyncErrorWrapper(async (req, res, next) => {
  return res.status(200).json({
    fromCache: false,
    message: "The model file was successfully saved",
  });
});

const redeployModelMetadata = asyncErrorWrapper(async (req, res, next) => {
  const { id: id } = req.params;

  let model = await Model.findById(id);

  Object.keys(req.body).forEach((key) => {
    console.log(key);
    model[key] = req.body[key];
  });

  console.log(model);

  model = await model.save();

  return res.status(200).json({
    fromCache: false,
    message: "The model metadata was successfully updated",
    data: model,
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
  redeployModel,
  redeployModelMetadata,
};
