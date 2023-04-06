// Libraries
const express = require("express");
const router = express.Router();
const { poolPromise } = require("../helpers/database/connectMsSQL");

// Controller Functions

// Middlewares

// Routes
router.get("/", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .query("select top 1 * FROM dbo.DUMMY_DWELL");

    res.json(result.recordset);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

module.exports = router;
