// Libraries
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const routes = require("./routes/index");
const app = express();
const redisClient = require("./helpers/database/connectRedis");

// Helpers
const connectMongoDB = require("./helpers/database/connectMongoDB");

// Middlewares
const customErrorHandler = require("./middlewares/errors/customErrorHandler");

dotenv.config({
  path: "./config/env/config.env",
});

app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(express.static(path.join(__dirname, "public")));
app.use(customErrorHandler);

// Database app connections
connectMongoDB();
// redisClient.connect().then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log(`App started on ${process.env.PORT} : ${process.env.NODE_ENV}`);
//   });
// });
