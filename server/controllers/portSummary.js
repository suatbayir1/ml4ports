const asyncErrorWrapper = require("express-async-handler");
const {getDataForPortStatus} = require("../helpers/database/portStatusHelper")


const getCurrentPortStatus = asyncErrorWrapper(async (req, res) => {
  console.log("getCurrentPortStatus")  
  try {
      let result = await getDataForPortStatus(req.originalUrl, 1)
      res.status(200).json(result);
      //JSON.stringify(obj)
    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
})

const refreshCurrentPortStatus = asyncErrorWrapper(async (req, res) => {
  console.log("refreshCurrentPortStatus")  
  try {
      let result = await getDataForPortStatus(req.originalUrl, 3)
      res.status(200).json(result);
      //JSON.stringify(obj)
    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
})

const getDailyContainersStatus = asyncErrorWrapper(async (req, res) => {
    // req.params.id
    console.log("getDailyContainersStatus")
    try{
      let result = await getDataForPortStatus(req.originalUrl, 2, req.params.id)
      //console.log("in controller: ", result)
      res.status(200).json(result)
    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
})

module.exports = {
    getCurrentPortStatus,
    getDailyContainersStatus,
    refreshCurrentPortStatus
};
