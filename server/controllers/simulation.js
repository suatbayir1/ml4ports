// Libraries
const asyncErrorWrapper = require("express-async-handler");

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

  res.status(200).json({
    fromCache: false,
    lastUpdateTime: Date.now(),
    data: data,
  });
});

module.exports = {
  getHierarchy,
};
