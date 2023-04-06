// Libraries
const redisClient = require("../../helpers/database/connectRedis");

const getFromDate = (isPassed, lastUpdateTime) => {
  let fromDate = new Date(2019, 3, 1).toISOString();

  if (isPassed) {
    fromDate = new Date(lastUpdateTime).toISOString();
  }

  return fromDate;
};

const setCache = async (url, data, dataInMemory, isPassed) => {
  let dataWithCache = data;

  if (isPassed) {
    dataWithCache = [...data, ...dataInMemory];
  }

  const savedData = {
    lastUpdateTime: Date.now(),
    data: dataWithCache,
  };
  await redisClient.set(
    url,
    JSON.stringify(savedData)
    //   {
    //   EX: process.env.REDIS_CACHE_EXPIRE_TIME || 846400,
    //   NX: true,
    // }
  );

  return savedData;
};

module.exports = { setCache, getFromDate };
