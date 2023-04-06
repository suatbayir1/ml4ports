// Libraries
const asyncErrorWrapper = require("express-async-handler");
const redisClient = require("../helpers/database/connectRedis");

// Helpers
const { poolPromise, sql } = require("../helpers/database/connectMsSQL");

// Services
const ContainerService = require("../services/ContainerService");

// Functions
const getNumberOfGroupsByContainerType = asyncErrorWrapper(
  async (req, res, next) => {
    console.log(res.locals);
    let sqlResult;
    if (res.locals.isPassed) {
      const lastUpdateTime = new Date(res.locals.lastUpdateTime);
      const time = `${lastUpdateTime.getFullYear()}-${lastUpdateTime.getMonth()}-${lastUpdateTime.getDay()} 00:00:00.000`;
      sqlResult = await ContainerService.get(req.originalUrl, time);
    } else {
      sqlResult = await ContainerService.get(
        req.originalUrl,
        "2019-01-01 00:00:00.000"
      );
    }

    console.log(sqlResult);

    // await setCache(url, sqlResult);

    res.status(200).json({
      fromCache: false,
      lastUpdateTime: Date.now(),
      data: sqlResult,
    });
  }
);

module.exports = {
  getNumberOfGroupsByContainerType,
};
