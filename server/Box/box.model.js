const mongoose = require("mongoose");
const { Schema } = mongoose;

const boxSchema = new Schema({
  boxColor: { type: String, required: true },
  boxPrize: { type: Number, required: true },
  image: { type: String },
  items: [
    {
      Name: { type: String },
      image: { type: String },
      Price: { type: Number },
      Quantity: { type: Number },
    },
  ],
});
module.exports = mongoose.model("box", boxSchema);
