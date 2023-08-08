// Libraries
const asyncErrorWrapper = require("express-async-handler");
const redisClient = require("../helpers/database/connectRedis");

// Helpers
const { poolPromise } = require("../helpers/database/connectMsSQL");
const {
  getDistributionOfTotalShipCountByDays,
} = require("../config/queries/sqlQueries");
const { setCache } = require("../helpers/database/cache");

class Ship {
  static get = asyncErrorWrapper(async (url) => {
    const pool = await poolPromise;
    const sqlResult = await pool
      .request()
      .query(getDistributionOfTotalShipCountByDays());

    const result = sqlResult.recordset;

    return result;
  });

  static set = asyncErrorWrapper(async () => {
    return sqlResult.recordset;
  });
}

module.exports = Ship;
