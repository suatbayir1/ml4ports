// Libraries
const mongoose = require("mongoose");

const connectMongoDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongodb connection successful");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectMongoDB;
