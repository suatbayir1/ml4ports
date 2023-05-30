const groupItemsByType = (items) => {
  const groupedItems = {};

  for (const item of items) {
    const {
      LINE_KEY,
      LINE_NAME,
      MOORAGE_DATE,
      SHIP_NAME,
      C_TYPE,
      CONTAINER_COUNT,
    } = item;

    const key = `${LINE_KEY}_${LINE_NAME}_${MOORAGE_DATE}_${SHIP_NAME}`;

    if (!groupedItems[key]) {
      groupedItems[key] = {
        LINE_KEY,
        LINE_NAME,
        MOORAGE_DATE,
        SHIP_NAME,
        20: 0,
        40: 0,
        "40 HC": 0,
      };
    }

    groupedItems[key][C_TYPE] += CONTAINER_COUNT;
  }

  return Object.values(groupedItems);
};

const groupItemsByTypeGoods = (items) => {
  const groupedItems = {};

  for (const item of items) {
    const {
      LINE_KEY,
      LINE_NAME,
      MOORAGE_DATE,
      GOODS_NAME,
      GOODS_GROUP_KEY,
      SHIP_NAME,
      C_TYPE,
      CONTAINER_COUNT,
    } = item;

    const key = `${LINE_KEY}_${LINE_NAME}_${MOORAGE_DATE}_${GOODS_NAME}_${GOODS_GROUP_KEY}_${SHIP_NAME}`;

    if (!groupedItems[key]) {
      groupedItems[key] = {
        LINE_KEY,
        LINE_NAME,
        MOORAGE_DATE,
        GOODS_NAME,
        GOODS_GROUP_KEY,
        SHIP_NAME,
        20: 0,
        40: 0,
        "40 HC": 0,
      };
    }

    groupedItems[key][C_TYPE] += CONTAINER_COUNT;
  }

  return Object.values(groupedItems);
};

module.exports = { groupItemsByType, groupItemsByTypeGoods };
