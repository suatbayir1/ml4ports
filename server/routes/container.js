// Libraries
const express = require("express");
const router = express.Router();

// Controllers
const {
  getNumberOfGroupsByContainerType,
  getContainers,
  getUniqueLineKeys,
  getUniqueGoodsName,
  getUniqueShipNames,
  groupedLine,
  groupedShip,
  groupedGoods,
} = require("../controllers/container");

// Middlewares
const { isExistsInCache } = require("../middlewares/database/redisCache");

// Routes
router.get(
  "/getNumberOfGroupsByContainerType",
  isExistsInCache,
  getNumberOfGroupsByContainerType
);

router.get(
  "/getNumberOfGroupsByContainerType/:id",
  isExistsInCache,
  getNumberOfGroupsByContainerType
);

router.get("/", isExistsInCache, getContainers);
router.get("/unique-line-keys", isExistsInCache, getUniqueLineKeys);
router.get("/unique-goods-name", isExistsInCache, getUniqueGoodsName);
router.get("/unique-ship-names", isExistsInCache, getUniqueShipNames);
router.get("/grouped-line", isExistsInCache, groupedLine);
router.get("/grouped-ship", isExistsInCache, groupedShip);
router.get("/grouped-goods", isExistsInCache, groupedGoods);

module.exports = router;
