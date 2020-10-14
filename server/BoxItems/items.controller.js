const { json } = require("body-parser");
const Items = require("./items.models");
exports.getAllitems = (req, res) => {
  Items.find({}, (err, items) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!items) {
      return res.status(404).json({ messege: "There are no any items here!" });
    }
    return res
      .status(200)
      .json({ messege: "Successfully got all the items!", items });
  });
};
exports.addNewItem = (req, res) => {
  let New_Item = new Items(req.body);
  New_Item.save((err, item) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!New_Item) {
      return res.status(404).json({ message: "Items are required!" });
    }
    return res
      .status(200)
      .json({ message: "Successfully Added new Item!", item });
  });
};
