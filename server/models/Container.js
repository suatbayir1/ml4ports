// Libraries
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContainerSchema = new Schema({
  _id: String,
  CONTAINER_KEY: Number,
  CONTAINER_NO: String,
  C_STATUS: String,
  C_KIND: String,
  C_TYPE: String,
  COMPANY: String,
  COMPANY_KEY: Number,
  GOODS_NAME: String,
  GOODS_GROUP_KEY: Number,
  LINE_KEY: Number,
  LINE_NAME: String,
  ORDER_KEY: Number,
  MOORAGE_DATE: Date,
  SHIP_NAME: String,
});

module.exports = mongoose.model("Containers", ContainerSchema);
