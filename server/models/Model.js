// Libraries
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModelSchema = new Schema(
  {
    trainer: {
      type: String,
      required: [true, "Please provide a trainer"],
    },
    algorithm: {
      type: String,
      required: [true, "Please provide a algorithm"],
      enum: ["LinearRegression", "KNN", "SVM", "DecisionTree"],
    },
    modelType: {
      type: String,
      required: [true, "Please provide a model type"],
      enum: ["Single", "Ensemble"],
    },
    modelName: {
      type: String,
      required: [true, "Please provide a model name"],
    },
    description: {
      type: String,
      default: "",
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    metrics: {
      type: Object,
    },
    subModels: {
      type: Array,
    },
    modelPath: {
      type: String,
      required: [true, "Please provide a model path"],
    },
  },
  { strict: false }
);

ModelSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Models", ModelSchema);