const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

mongoose.set('strictQuery', false);

// Define the container schema
const containerSchema = new mongoose.Schema({
  id: String,
  C_TYPE: String,
  C_KIND: String,
  C_STATUS: String,
  CONTAINER_KEY: Number,
  ORDER_KEY: Number,
  MOORAGE_DATE: String,
  MOORAGE_TIME: String,
  SHIP_NAME: String,
  SHIP_DWT: Number,
  SHIP_KIND: String,
  SHIP_LENGTH: Number,
  SHIP_WIDTH: Number,
  SHIP_DRAFT: Number,
  SHIP_GRT: Number,
  LINE_KEY: Number,
  LINE_NAME: String
});

// Define the container model
const Container = mongoose.model('Container', containerSchema);


// Define a route to retrieve all containers
router.get('/containers', async (req, res) => {
  try {
    const containers = await Container.find();
    res.json(containers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;