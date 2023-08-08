// Libraries
const asyncErrorWrapper = require("express-async-handler");

// Services
const ShipService = require("../services/ShipService");

const getDistributionOfTotalShipCountByDays = asyncErrorWrapper(
  async (req, res, next) => {
    const sqlResult = await ShipService.get(req.originalUrl);

    df2 = pd.DataFrame.from_dict(sqlResult, (orient = "index"));
    print(df2.head());

    res.status(200).json({
      fromCache: false,
      lastUpdateTime: Date.now(),
      data: sqlResult,
    });
  }
);

module.exports = {
  getDistributionOfTotalShipCountByDays,
};
