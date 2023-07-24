// Libraries
const express = require("express");
const router = express.Router();
const { poolPromise } = require("../helpers/database/connectMsSQL");
const { getDailyContainers } = require("../config/queries/sqlQueries")

// Controller Functions

// Middlewares

// Routes
router.get("/getDailyContainersStatus/:id", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query(getDailyContainers(req.params.id));
    
    // Process the results
    const groupedData = {};
    result.recordset.forEach(row => {
      const { CONTAINER_STATUS_KEY, CONTAINER_TYPE_KEY, REGIME_KEY} = row;
      if (!groupedData[CONTAINER_STATUS_KEY]) {
        groupedData[CONTAINER_STATUS_KEY] = {};
        //groupedData[CONTAINER_STATUS_KEY].count = 0;
      }
      if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY]){
        groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY] = {};
        //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY].count = 0;
      }
      if(!groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY]){
        groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY] = 0;
        //groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY].count = 0;
      }
      groupedData[CONTAINER_STATUS_KEY][CONTAINER_TYPE_KEY][REGIME_KEY] += 1;
    });
    /* const groupedData = {};
    result.recordset.forEach(row => {
      const { column1, column2 } = row;
      if (!groupedData[column1]) {
        groupedData[column1] = {};
        groupedData[column1].count = 0;
      }
      groupedData[column1][column2] = (groupedData[column1][column2] || 0) + 1;
      groupedData[column1].count++;
    }); */

    res.json({total_cont_count: result.recordset.length, summary: groupedData});//result.recordset);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
