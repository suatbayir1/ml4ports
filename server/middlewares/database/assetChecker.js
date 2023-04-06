// Libraries
const asyncErrorWrapper = require("express-async-handler");

// Helpers
const CustomError = require("../../helpers/error/CustomError");

// Models
const Model = require("../../models/Model");

const checkTrainedModelMetadataIsExists = asyncErrorWrapper(
  async (req, res, next) => {
    console.log(req.body);
    const { modelName } = req.body;

    const model = await Model.findOne({ modelName: modelName });

    if (model) {
      return next(
        new CustomError(
          "A model has already been created with this model name",
          409
        )
      );
    }

    req.model = model;

    next();
  }
);

const checkTrainedModelMetadataIsExistsById = asyncErrorWrapper(
  async (req, res, next) => {
    const { id } = req.params;

    const model = await Model.findById(id);

    if (!model) {
      return next(new CustomError("There is no such Model with that id", 409));
    }

    req.model = model;

    next();
  }
);

module.exports = {
  checkTrainedModelMetadataIsExists,
  checkTrainedModelMetadataIsExistsById,
};
