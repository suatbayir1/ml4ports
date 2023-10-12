// Libraries
const asyncErrorWrapper = require("express-async-handler");

// Services
const SimulationService = require("../services/SimulationService");

//Models
const SimulationConfiguration = require("../models/SimulationConfiguration")

// Constants
const {
  getPort,
  getDocks,
  getShips,
  getCranes,
  getTrucks,
} = require("../config/queries/sqlQueries");

const getSimulationConfiguration = asyncErrorWrapper(async (req, res, next) => {
  try {
    const configuration = await SimulationConfiguration.findOne({});
    if (configuration) {
      res.json(configuration);
    } 
    else {
      const defaultConfiguration = { rules: [] };
      const newConfiguration = await SimulationConfiguration.create(defaultConfiguration);
      res.json(newConfiguration);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get or insert the configuration." });
  }
})

const updateSimulationConfiguration = asyncErrorWrapper(async (req, res, next) => {
  try {
    const updatedConfiguration = req.body;
    const existingConfiguration = await SimulationConfiguration.findOne({});

    if (existingConfiguration) {
      existingConfiguration.rules = updatedConfiguration.rules;
      await existingConfiguration.save();
      res.json(existingConfiguration);
    }
    else {
      res.status(404).json({ error: "Configuration not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update the configuration." });
  }
});

const getHierarchy = asyncErrorWrapper(async (req, res, next) => {
  let data = {
    root: {
      id: "PORT",
      name: "Assan Port",
      imgSource: "/images/icons/simulation/port.png",
    },
    docks: [
      {
        id: "rihtim1",
        name: "Rıhtım 1",
        parent: "PORT",
        imgSource: "/images/icons/simulation/dock.png",
      },
    ],
    ships: [
      {
        id: "MSCPERLE",
        name: "MSC PERLE",
        parent: "rihtim1",
        chipText: "Discharge",
        chipColor: "primary",
        title: "MSC PERLE",
        subtitle: new Date(),
        imgSource: "/images/icons/simulation/ship.png",
      },
      {
        id: "MSCTINA",
        name: "MSC TINA",
        parent: "rihtim1",
        chipColor: "success",
        chipText: "Loading",
        title: "MSC TINA",
        subtitle: new Date(),
        imgSource: "/images/icons/simulation/ship.png",
      },
      {
        id: "ASSANDEPO",
        name: "ASSAN DEPO",
        parent: "rihtim1",
        chipText: "Problem",
        chipColor: "error",
        title: "ASSAN DEPO",
        subtitle: new Date(),
        imgSource: "/images/icons/simulation/ship.png",
      },
      {
        id: "HSLIVINGSTONE",
        name: "HS LIVINGSTONE",
        parent: "rihtim1",
        chipText: "Waiting",
        chipColor: "secondary",
        title: "HS LIVINGSTONE",
        subtitle: new Date(),
        imgSource: "/images/icons/simulation/ship.png",
      },
      {
        id: "BROOKLYN",
        name: "BROOKLYN",
        parent: "rihtim1",
        chipText: "Status1",
        chipColor: "primary",
        title: "BROOKLYN",
        subtitle: new Date(),
        imgSource: "/images/icons/simulation/ship.png",
      },
      {
        id: "BOSTON",
        name: "BOSTON",
        parent: "rihtim1",
        chipText: "Status2",
        chipColor: "warning",
        title: "BOSTON",
        subtitle: new Date(),
        imgSource: "/images/icons/simulation/ship.png",
      },
    ],
    cranes: [
      {
        trendDir: "up",
        title: "Crane 1",
        imgAlt: "paypal",
        amount: "02:04",
        avatarColor: "error",
        subtitle: "Operator 1",
        id: "crane1",
        name: "Crane 1",
        parent: "MSCPERLE",
        imgSource: "/images/icons/simulation/crane.png",
      },
      {
        trendDir: "down",
        amount: "00:44",
        title: "Crane 2",
        imgAlt: "credit-card",
        avatarColor: "success",
        subtitle: "Operator 2",
        id: "crane2",
        name: "Crane 2",
        parent: "MSCPERLE",
        imgSource: "/images/icons/simulation/crane.png",
      },
      {
        trendDir: "down",
        amount: "00:15",
        imgAlt: "atm-card",
        title: "Crane 3",
        subtitle: "Operator 3",
        avatarColor: "warning",
        id: "crane3",
        name: "Crane 3",
        parent: "MSCPERLE",
        imgSource: "/images/icons/simulation/crane.png",
      },
      {
        amount: "04:12",
        title: "Crane 4",
        imgAlt: "wallet",
        trendDir: "down",
        subtitle: "Operator 4",
        avatarColor: "primary",
        id: "crane4",
        name: "Crane 4",
        parent: "MSCTINA",
        imgSource: "/images/icons/simulation/crane.png",
      },
      {
        trendDir: "up",
        title: "Crane 5",
        amount: "07:55",
        subtitle: "Operator 5",
        avatarColor: "info",
        id: "crane5",
        name: "Crane 5",
        parent: "MSCTINA",
        imgSource: "/images/icons/simulation/crane.png",
      },
    ],
    siteCranes: [
      //   { id: "siteCrane1", name: "Site Crane 1", parent: "crane1" },
      //   { id: "siteCrane2", name: "Site Crane 2", parent: "crane2" },
      //   { id: "siteCrane3", name: "Site Crane 3", parent: "crane3" },
    ],
    trucks: [
      //   { id: "trucka", name: "Truck A", parent: "crane1" },
      //   { id: "truckb", name: "Truck B", parent: "crane2" },
      //   { id: "truckc", name: "Truck C", parent: "crane3" },
    ],
  };

  let random = Math.floor(Math.random() * 10);
  console.log(random);
  for (let i = 0; i <= random; i++) {
    data.siteCranes.push({
      id: `siteCrane${i}`,
      name: `Site Crane ${i}`,
      parent: "crane1",
      imgSource: "/images/icons/simulation/crane.png",
    });
    data.trucks.push({
      id: `truck${i}`,
      name: `Truck ${i}`,
      parent: `crane1`,
      imgSource: "/images/icons/simulation/truck.png",
    });
  }

  let hierarchy = {
    root: {},
    docks: [],
    ships: [],
    cranes: [],
    siteCranes: [],
    trucks: [],
  };

  const ports = await SimulationService.get(getPort());

  for (const port of ports) {
    hierarchy.root = {
      id: port.PORT_CODE,
      name: port.PORT_NAME,
      flag: port.FLAG,
      imgSource: "/images/icons/simulation/port.png",
    };

    const docks = await SimulationService.get(getDocks());

    for (const dock of docks) {
      hierarchy.docks.push({
        id: `dock${dock.SEA_PORT_KEY}`,
        name: dock.DESCRIPTION,
        parent: port.PORT_CODE,
        imgSource: "/images/icons/simulation/dock.png",
      });

      const ships = await SimulationService.get(getShips(dock.SEA_PORT_KEY));

      for (const ship of ships) {
        hierarchy.ships.push({
          id: `ship${ship.ORDER_KEY}`,
          name: ship.SHIP_NAME,
          parent: `dock${dock.SEA_PORT_KEY}`,
          chipText: "Discharge",
          chipColor: "primary",
          title: ship.SHIP_NAME,
          subtitle: ship.MOORAGE_DATE,
          imgSource: "/images/icons/simulation/ship.png",
        });

        const cranes = await SimulationService.get(getCranes(ship.ORDER_KEY));

        for (const crane of cranes) {
          hierarchy.cranes.push({
            trendDir: "down",
            amount: "00:44",
            title: crane.VINC,
            imgAlt: "credit-card",
            avatarColor: "success",
            subtitle: crane.VINC_OPERATOR,
            id: `crane${crane.GANG_KEY}`,
            name: crane.VINC,
            parent: `ship${ship.ORDER_KEY}`,
            imgSource: "/images/icons/simulation/crane.png",
          });

          const trucks = await SimulationService.get(getTrucks(crane.GANG_KEY));

          for (const truck of trucks) {
            hierarchy.trucks.push({
              id: `truck${truck.GANG_EQUIPMENT_KEY}`,
              name: truck.KAMYON,
              parent: `crane${crane.GANG_KEY}`,
              imgSource: "/images/icons/simulation/truck.png",
            });
          }
        }
      }
    }
  }

  res.status(200).json({
    fromCache: false,
    lastUpdateTime: Date.now(),
    data: hierarchy,
  });
});

module.exports = {
  getHierarchy,
  getSimulationConfiguration,
  updateSimulationConfiguration
};
