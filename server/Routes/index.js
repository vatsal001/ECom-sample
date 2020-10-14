const boxRoutes = require("./box.routes");
const itemsRoutes = require("./items.routes");
const cardRoutes = require("./card.routes");
module.exports = (app) => {
  app.use("/box", boxRoutes);
  app.use("/item", itemsRoutes);
  app.use("/card", cardRoutes);
};
