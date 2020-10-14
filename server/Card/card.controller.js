const Card = require("./card.model");
exports.getAllCard = (req, res) => {
  Card.find({}, (err, cards) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!cards) {
      return res.status(404).json({ messege: "There is no anything here!" });
    }
    return res
      .status(200)
      .json({ messege: "Successfully got the cards!", cards });
  });
};
exports.addNewCard = (req, res) => {
  let New_Cards = new Card(req.body);
  New_Cards.save((err, card) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!New_Cards) {
      return res.status(404).json({ message: "Cards are not  required!" });
    }
    return res
      .status(200)
      .json({ message: "Successfully Added new Card!", card });
  });
};
