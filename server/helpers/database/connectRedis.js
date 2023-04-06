const redis = require("redis");
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

client.on("error", (err) => console.error("Redis Client Error", err));
client.on("connect", () => console.log("Redis Client Connected!"));

module.exports = client;
