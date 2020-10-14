const express = require("express");
const router = express.Router();
const itemsController = require("../BoxItems/index");
router.get("/items", itemsController.getAllitems);
router.post("/newitem", itemsController.addNewItem);
module.exports = router;
