const express = require("express");
const router = express.Router();
const boxController = require("../Box/index");
router.get("/boxes", boxController.getAllBoxes);
router.post("/newbox", boxController.addNewBox);
router.put("/updatebox/:boxId", boxController.updateBoxWithItems);
module.exports = router;
