const mongoose = require("mongoose");
const init = () => {
  mongoose.connect(
    "mongodb+srv://abc:123@cluster0.1or3y.mongodb.net/PieceOfHeaven?retryWrites=true&w=majority",
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
