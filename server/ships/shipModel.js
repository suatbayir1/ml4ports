const mongoose = require("mongoose");

const ShipSchema = new mongoose.Schema({
  20: String,
  40: String,
  SHIP_NAME: String,
  SHIP_DWT: String,
  SHIP_KIND: String,
  SHIP_LENGTH: String,
  SHIP_WIDTH: String,
  SHIP_DRAFT: String,
  SHIP_GRT: String,
  LINE_KEY: String,
  LINE_NAME: String,
  YEAR: String,
  MONTH: String,
  DAY: String,
  DAY_OF_WEEK: String,
  DAY_OF_YEAR: String,
  "40 HC": String,
  "45 HC": String,
});

const Ship = mongoose.model("Ship", ShipSchema, "grouped1_df"); 

module.exports = Ship;
