// Libraries
const sql = require("mssql");

// Constants
const config = {
  user: "sa",
  password: "mysqlpassword",
  server: "localhost",
  database: "PORTDATA",
  requestTimeout: 600000,
  options: {
    trustedConnection: true,
    encrypt: true,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

module.exports = {
  sql,
  poolPromise,
};
