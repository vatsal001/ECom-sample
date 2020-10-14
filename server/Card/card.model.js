const mongoose = require("mongoose");
const { Schema } = mongoose;
const cardSchema = new Schema({
  Color: { type: String },
  image: { type: String },
  Name: { type: String },
});
module.exports = mongoose.model("card", cardSchema);
