const asyncErrorWrapper = require("express-async-handler");
const {
  getDataForPortStatus,
} = require("../helpers/database/portStatusHelper");

const getCurrentPortStatus = asyncErrorWrapper(async (req, res) => {
  try {
    let result = await getDataForPortStatus(req.originalUrl, 1);
    res.status(200).json(result);
    //JSON.stringify(obj)
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

const refreshCurrentPortStatus = asyncErrorWrapper(async (req, res) => {
  try {
    let result = await getDataForPortStatus(req.originalUrl, 3);
    res.status(200).json(result);
    //JSON.stringify(obj)
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

const getDailyContainersStatus = asyncErrorWrapper(async (req, res) => {
  // req.params.id
  try {
    let result = await getDataForPortStatus(req.originalUrl, 2, req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

module.exports = {
  getCurrentPortStatus,
  getDailyContainersStatus,
  refreshCurrentPortStatus,
};
