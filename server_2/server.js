const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('MongoDB connection error:', error);
});

const containerSchema = new mongoose.Schema({
  _id: String,
  CONTAINER_KEY: Number,
  CONTAINER_NO: String,
  C_STATUS: String,
  C_KIND: String,
  C_TYPE: String,
  COMPANY: String,
  COMPANY_KEY: Number,
  GOODS_NAME: String,
  GOODS_GROUP_KEY: Number,
  LINE_KEY: Number,
  LINE_NAME: String,
  ORDER_KEY: Number,
  MOORAGE_DATE: Date,
  SHIP_NAME: String
});

const Container = mongoose.model('Container', containerSchema, 'containers');

function groupItemsByType(items) {
  const groupedItems = {};

  for (const item of items) {
    const { LINE_KEY, LINE_NAME, MOORAGE_DATE, SHIP_NAME, C_TYPE, CONTAINER_COUNT } = item;

    const key = `${LINE_KEY}_${LINE_NAME}_${MOORAGE_DATE}_${SHIP_NAME}`;

    if (!groupedItems[key]) {
      groupedItems[key] = {
        LINE_KEY,
        LINE_NAME,
        MOORAGE_DATE,
        SHIP_NAME,
        '20': 0,
        '40': 0,
        '40 HC': 0,
      };
    }

    groupedItems[key][C_TYPE] += CONTAINER_COUNT;
  }

  return Object.values(groupedItems);
}

function groupItemsByTypeGoods(items) {
  const groupedItems = {};

  for (const item of items) {
    const { LINE_KEY, LINE_NAME, MOORAGE_DATE, GOODS_NAME, GOODS_GROUP_KEY, SHIP_NAME, C_TYPE, CONTAINER_COUNT } = item;

    const key = `${LINE_KEY}_${LINE_NAME}_${MOORAGE_DATE}_${GOODS_NAME}_${GOODS_GROUP_KEY}_${SHIP_NAME}`;

    if (!groupedItems[key]) {
      groupedItems[key] = {
        LINE_KEY,
        LINE_NAME,
        MOORAGE_DATE,
        GOODS_NAME,
        GOODS_GROUP_KEY,
        SHIP_NAME,
        '20': 0,
        '40': 0,
        '40 HC': 0,
      };
    }

    groupedItems[key][C_TYPE] += CONTAINER_COUNT;
  }

  return Object.values(groupedItems);
}


app.get('/', async (req, res) => {
  try {
    const containers = await Container.find().limit(100);
    res.json(containers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/unique-line-keys', async (req, res) => {
  try {
    const uniqueLineKeys = await Container.distinct('LINE_KEY');
    res.json(uniqueLineKeys);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/unique-goods-name', async (req, res) => {
  try {
    const uniqueGoodsName = await Container.distinct('GOODS_NAME');
    res.json(uniqueGoodsName);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/unique-ship-names', async (req, res) => {
  try {
    const uniqueLineKeys = await Container.distinct('SHIP_NAME');
    res.json(uniqueLineKeys);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/grouped-line', async (req, res) => {
  const { selectedLineKey, startDate, endDate } = req.query;
  try {
    let pipeline = [
      {
        $group: {
          _id: {
            LINE_KEY: '$LINE_KEY',
            LINE_NAME: '$LINE_NAME',
            MOORAGE_DATE: '$MOORAGE_DATE',
            C_TYPE: '$C_TYPE',
            SHIP_NAME: '$SHIP_NAME'
          },
          CONTAINER_COUNT: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          LINE_KEY: '$_id.LINE_KEY',
          LINE_NAME: '$_id.LINE_NAME',
          MOORAGE_DATE: '$_id.MOORAGE_DATE',
          C_TYPE: '$_id.C_TYPE',
          SHIP_NAME: '$_id.SHIP_NAME',
          CONTAINER_COUNT: 1
        }
      },
      {
        $sort: {
          MOORAGE_DATE: 1
        }
      }
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
            $lte: end
          }
        }
      });
    }

    const containerCounts = await Container.aggregate(pipeline);

    res.json(groupItemsByType(containerCounts));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/grouped-ship', async (req, res) => {
  const { selectedShipName } = req.query;
  try {
    let pipeline = [
      {
        $group: {
          _id: {
            LINE_KEY: '$LINE_KEY',
            LINE_NAME: '$LINE_NAME',
            MOORAGE_DATE: '$MOORAGE_DATE',
            C_TYPE: '$C_TYPE',
            SHIP_NAME: '$SHIP_NAME'
          },
          CONTAINER_COUNT: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          LINE_KEY: '$_id.LINE_KEY',
          LINE_NAME: '$_id.LINE_NAME',
          MOORAGE_DATE: '$_id.MOORAGE_DATE',
          C_TYPE: '$_id.C_TYPE',
          SHIP_NAME: '$_id.SHIP_NAME',
          CONTAINER_COUNT: 1
        }
      },
      {
        $sort: {
          MOORAGE_DATE: 1
        }
      }
    ];

    if (selectedShipName) {
      pipeline.unshift({ $match: { SHIP_NAME: selectedShipName } });
    }

    const containerCounts = await Container.aggregate(pipeline);

    res.json(groupItemsByType(containerCounts));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/grouped-goods', async (req, res) => {
  const { selectedGoods, startDate, endDate } = req.query;
  try {
    let pipeline = [
      {
        $group: {
          _id: {
            LINE_KEY: '$LINE_KEY',
            LINE_NAME: '$LINE_NAME',
            MOORAGE_DATE: '$MOORAGE_DATE',
            GOODS_NAME: '$GOODS_NAME',
            GOODS_GROUP_KEY: '$GOODS_GROUP_KEY',
            C_TYPE: '$C_TYPE',
            SHIP_NAME: '$SHIP_NAME'
          },
          CONTAINER_COUNT: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          LINE_KEY: '$_id.LINE_KEY',
          LINE_NAME: '$_id.LINE_NAME',
          MOORAGE_DATE: '$_id.MOORAGE_DATE',
          GOODS_NAME: '$_id.GOODS_NAME',
          GOODS_GROUP_KEY: '$_id.GOODS_GROUP_KEY',
          C_TYPE: '$_id.C_TYPE',
          SHIP_NAME: '$_id.SHIP_NAME',
          CONTAINER_COUNT: 1
        }
      },
      {
        $sort: {
          MOORAGE_DATE: 1
        }
      }
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
            $lte: end
          }
        }
      });
    }

    const containerCounts = await Container.aggregate(pipeline);

    res.json(groupItemsByTypeGoods(containerCounts));
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
