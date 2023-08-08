// Libraries
const asyncErrorWrapper = require("express-async-handler");
const redisClient = require("../../helpers/database/connectRedis");

const isExistsInCache = asyncErrorWrapper(async (req, res, next) => {
  let result;

  const cacheResult = await redisClient.get(req.originalUrl);

  if (cacheResult) {
    result = JSON.parse(cacheResult);

    if (
      Date.now() - result["lastUpdateTime"] >
      process.env.REDIS_CACHE_EXPIRE_TIME
    ) {
      res.locals.isPassed = true;
      res.locals.dataInMemory = result["data"];
      res.locals.lastUpdateTime = result["lastUpdateTime"];
      next();
    } else {
      res.status(200).json({
        fromCache: true,
        lastUpdateTime: result["lastUpdateTime"],
        data: result["data"],
      });
    }
  } else {
    res.locals.isPassed = false;
    next();
  }
});

module.exports = {
  isExistsInCache,
};
