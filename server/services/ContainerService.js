// Libraries
const asyncErrorWrapper = require("express-async-handler");
const redisClient = require("../helpers/database/connectRedis");

// Helpers
const { poolPromise } = require("../helpers/database/connectMsSQL");
const {
  getContainersQuery,
  getNumberOfGroupsByContainerType,
} = require("../config/queries/sqlQueries");
const { setCache } = require("../helpers/database/cache");

class Container {
  static get = asyncErrorWrapper(async (url) => {
    const pool = await poolPromise;
    const sqlResult = await pool
      .request()
      .query(getNumberOfGroupsByContainerType("2019-01-01 00:00:00.000"));

    const result = sqlResult.recordset;

    return result;
  });

  static set = asyncErrorWrapper(async () => {
    return sqlResult.recordset;
  });
}

module.exports = Container;
