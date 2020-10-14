const express = require("express");
const router = express.Router();
const cardsController = require("../Card/index");
router.get("/cards", cardsController.getAllCard);
router.post("/newcard", cardsController.addNewCard);
module.exports = router;
