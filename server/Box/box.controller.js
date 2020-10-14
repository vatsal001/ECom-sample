const Box = require("./box.model");
exports.getAllBoxes = (req, res) => {
  Box.find({}, (err, boxes) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!boxes) {
      return res.status(404).json({ messege: "There are no Boxes available!" });
    }
    return res
      .status(200)
      .json({ messege: "Successfully got all the Boxes!", boxes });
  });
};
exports.addNewBox = (req, res) => {
  let New_Box = new Box(req.body);
  New_Box.save((err, box) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!New_Box) {
      return res.status(404).json({ message: "Boxes are required!" });
    }
    return res
      .status(200)
      .json({ message: "Successfully Added new Box!", box });
  });
};
exports.updateBoxWithItems = (req, res) => {
  let id = req.params.boxId;
  Box.findByIdAndUpdate({ _id: id }, req.body, (err, box) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!box) {
      return res.status(404).json({ message: "Cannot find anything!" });
    }
    return res.status(200).json({ message: "Successfully updated Box!", box });
  });
};
