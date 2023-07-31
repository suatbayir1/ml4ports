// Libraries
const asyncErrorWrapper = require("express-async-handler");
const redisClient = require("../helpers/database/connectRedis");

// Helpers
const {
  groupItemsByType,
  groupItemsByTypeGoods,
} = require("../helpers/container/group");
// Helpers
const { setCache, getFromDate } = require("../helpers/database/cache");

// Services
const ContainerService = require("../services/ContainerService");

// Models
const Container = require("../models/Container");

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

const getContainers = asyncErrorWrapper(async (req, res, next) => {
  const { dataInMemory } = res.locals;

  const containers = await Container.find().limit(100);

  const cachedData = await setCache(
    req.originalUrl,
    containers,
    dataInMemory,
    false
  );

  return res.status(200).json({
    fromCache: false,
    ...cachedData,
  });
});

const getUniqueLineKeys = asyncErrorWrapper(async (req, res, next) => {
  const { dataInMemory } = res.locals;

  const uniqueLineKeys = await Container.distinct("LINE_KEY");

  const cachedData = await setCache(
    req.originalUrl,
    uniqueLineKeys,
    dataInMemory,
    false
  );

  return res.status(200).json({
    fromCache: false,
    ...cachedData,
  });
});

const getUniqueGoodsName = asyncErrorWrapper(async (req, res, next) => {
  const { dataInMemory } = res.locals;

  const uniqueGoodsName = await Container.distinct("GOODS_NAME");

  const cachedData = await setCache(
    req.originalUrl,
    uniqueGoodsName,
    dataInMemory,
    false
  );

  return res.status(200).json({
    fromCache: false,
    ...cachedData,
  });
});

const getUniqueShipNames = asyncErrorWrapper(async (req, res, next) => {
  const { dataInMemory } = res.locals;

  const uniqueShipNames = await Container.distinct("SHIP_NAME");

  const cachedData = await setCache(
    req.originalUrl,
    uniqueShipNames,
    dataInMemory,
    false
  );

  return res.status(200).json({
    fromCache: false,
    ...cachedData,
  });
});

const groupedLine = asyncErrorWrapper(async (req, res, next) => {
  const { dataInMemory } = res.locals;
  const { selectedLineKey, startDate, endDate } = req.query;

  let pipeline = [
    {
      $group: {
        _id: {
          LINE_KEY: "$LINE_KEY",
          LINE_NAME: "$LINE_NAME",
          MOORAGE_DATE: "$MOORAGE_DATE",
          C_TYPE: "$C_TYPE",
          SHIP_NAME: "$SHIP_NAME",
        },
        CONTAINER_COUNT: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        LINE_KEY: "$_id.LINE_KEY",
        LINE_NAME: "$_id.LINE_NAME",
        MOORAGE_DATE: "$_id.MOORAGE_DATE",
        C_TYPE: "$_id.C_TYPE",
        SHIP_NAME: "$_id.SHIP_NAME",
        CONTAINER_COUNT: 1,
      },
    },
    {
      $sort: {
        MOORAGE_DATE: 1,
      },
    },
  ];

  if (selectedLineKey) {
    const lineKey = parseInt(selectedLineKey);
    pipeline.unshift({ $match: { LINE_KEY: lineKey } });
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    pipeline.unshift({
      $match: {
        MOORAGE_DATE: {
          $gte: start,
          $lte: end,
        },
      },
    });
  }

  const containerCounts = await Container.aggregate(pipeline);

  const groupedLines = groupItemsByType(containerCounts);

  const cachedData = await setCache(
    req.originalUrl,
    groupedLines,
    dataInMemory,
    false
  );

  return res.status(200).json({
    fromCache: false,
    ...cachedData,
  });
});

const groupedShip = asyncErrorWrapper(async (req, res, next) => {
  const { dataInMemory } = res.locals;
  const { selectedShipName } = req.query;

  let pipeline = [
    {
      $group: {
        _id: {
          LINE_KEY: "$LINE_KEY",
          LINE_NAME: "$LINE_NAME",
          MOORAGE_DATE: "$MOORAGE_DATE",
          C_TYPE: "$C_TYPE",
          SHIP_NAME: "$SHIP_NAME",
        },
        CONTAINER_COUNT: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        LINE_KEY: "$_id.LINE_KEY",
        LINE_NAME: "$_id.LINE_NAME",
        MOORAGE_DATE: "$_id.MOORAGE_DATE",
        C_TYPE: "$_id.C_TYPE",
        SHIP_NAME: "$_id.SHIP_NAME",
        CONTAINER_COUNT: 1,
      },
    },
    {
      $sort: {
        MOORAGE_DATE: 1,
      },
    },
  ];

  if (selectedShipName) {
    pipeline.unshift({ $match: { SHIP_NAME: selectedShipName } });
  }

  const containerCounts = await Container.aggregate(pipeline);

  const groupedShips = groupItemsByType(containerCounts);

  const cachedData = await setCache(
    req.originalUrl,
    groupedShips,
    dataInMemory,
    false
  );

  return res.status(200).json({
    fromCache: false,
    ...cachedData,
  });
});

const groupedGoods = asyncErrorWrapper(async (req, res, next) => {
  const { dataInMemory } = res.locals;
  const { selectedGoods, startDate, endDate } = req.query;

  let pipeline = [
    {
      $group: {
        _id: {
          LINE_KEY: "$LINE_KEY",
          LINE_NAME: "$LINE_NAME",
          MOORAGE_DATE: "$MOORAGE_DATE",
          GOODS_NAME: "$GOODS_NAME",
          GOODS_GROUP_KEY: "$GOODS_GROUP_KEY",
          C_TYPE: "$C_TYPE",
          SHIP_NAME: "$SHIP_NAME",
        },
        CONTAINER_COUNT: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        LINE_KEY: "$_id.LINE_KEY",
        LINE_NAME: "$_id.LINE_NAME",
        MOORAGE_DATE: "$_id.MOORAGE_DATE",
        GOODS_NAME: "$_id.GOODS_NAME",
        GOODS_GROUP_KEY: "$_id.GOODS_GROUP_KEY",
        C_TYPE: "$_id.C_TYPE",
        SHIP_NAME: "$_id.SHIP_NAME",
        CONTAINER_COUNT: 1,
      },
    },
    {
      $sort: {
        MOORAGE_DATE: 1,
      },
    },
  ];

  if (selectedGoods) {
    pipeline.unshift({ $match: { GOODS_NAME: selectedGoods } });
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    pipeline.unshift({
      $match: {
        MOORAGE_DATE: {
          $gte: start,
          $lte: end,
        },
      },
    });
  }

  const containerCounts = await Container.aggregate(pipeline);

  const grouped = groupItemsByTypeGoods(containerCounts);

  const cachedData = await setCache(
    req.originalUrl,
    grouped,
    dataInMemory,
    false
  );

  return res.status(200).json({
    fromCache: false,
    ...cachedData,
  });
});

module.exports = {
  getNumberOfGroupsByContainerType,
  getContainers,
  getUniqueLineKeys,
  getUniqueGoodsName,
  getUniqueShipNames,
  groupedLine,
  groupedShip,
  groupedGoods,
};
