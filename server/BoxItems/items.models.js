const mongoose = require("mongoose");
const { Schema } = mongoose;
const itemsSchema = new Schema({
  Name: { type: String, required: true },
  image: { type: String },
  Price: { type: Number, required: true },
  Quantity: { type: Number, required: true },
});
module.exports = mongoose.model("Items", itemsSchema);
