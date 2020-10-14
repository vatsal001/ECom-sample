const mongoose = require("mongoose");
const init = () => {
  mongoose.connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  );
  const db = mongoose.connection;
  error(db);
  open(db);
};

const error = (db) => {
  db.on("error", (error) => {
    console.log("Database connection error", error);
  });
};

const open = (db) => {
  db.once("open", () => {
    console.log("Database connected");
  });
};

module.exports = { init };
