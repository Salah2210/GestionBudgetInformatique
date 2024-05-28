const express = require("express");
const AggregatedDataController = require("../controllers/AggregatedDataController");

const router = express.Router();

router.post("/aggregate", AggregatedDataController.aggregateData);

module.exports = router;
