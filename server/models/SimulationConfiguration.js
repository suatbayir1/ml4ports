// Libraries
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SimulationConfigurationSchema = new Schema({
  rules: [String], //"cfs", "one", "isps", "ardiye"
  // container_count: Number
});

module.exports = mongoose.model("SimulationConfiguration", SimulationConfigurationSchema);
