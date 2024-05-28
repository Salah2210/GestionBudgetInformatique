const AggregatedDataService = require("../services/AggregatedDataService");
const path = require("path");
//const modelsPath = path.join(__dirname, "../models");

//const tableModels = path.join(__dirname, "../models/directions");
//require("../models/directions");

const aggregateData = async (req, res) => {
    try {
        await AggregatedDataService.aggregateData(tableModels);
        res.status(200).send("Data aggregation completed and saved to the database.");
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("An error occurred during data aggregation.");
    }
};

module.exports = {
    aggregateData
};
