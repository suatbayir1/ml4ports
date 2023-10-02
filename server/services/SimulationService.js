// Libraries
const asyncErrorWrapper = require("express-async-handler");
const redisClient = require("../helpers/database/connectRedis");

// Helpers
const { poolPromise } = require("../helpers/database/connectMsSQL");
const {
  getContainersQuery,
  getHierarchy,
  getDocks,
  getNumberOfGroupsByContainerType,
} = require("../config/queries/sqlQueries");
const { setCache } = require("../helpers/database/cache");

class SimulationService {
  // static get = asyncErrorWrapper(async (url) => {
  //   const pool = await poolPromise;
  //   const sqlResult = await pool.request().query(getHierarchy());

  //   const result = sqlResult.recordset;

  //   return result;
  // });

  static get = asyncErrorWrapper(async (query) => {
    const pool = await poolPromise;
    const sqlResult = await pool.request().query(query);

    const result = sqlResult.recordset;

    return result;
  });

  static set = asyncErrorWrapper(async () => {
    return sqlResult.recordset;
  });
}

module.exports = SimulationService;
