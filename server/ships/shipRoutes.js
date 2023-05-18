const express = require("express");
const Ship = require("./shipModel");
const router = express.Router();

// REST endpoint to get ships by SHIP_NAME
router.get("/", async (req, res) => {
  try {
    const { SHIP_NAME } = req.query;
    let query = {};

    if (SHIP_NAME) {
      query.SHIP_NAME = SHIP_NAME;
    }

    const ships = await Ship.find(query);
    res.json(ships);
  } catch (err) {
    res.status(500).json({ message: "An error occurred" });
  }
});

router.get('/unique-names', async (req, res) => {
    try {
      const shipNames = await Ship.distinct('SHIP_NAME');
      res.json(shipNames);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching unique ship names' });
    }
  });
  

module.exports = router;

