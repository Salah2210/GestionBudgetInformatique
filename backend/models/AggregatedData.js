const mongoose = require("mongoose");

const AggregatedDataSchema = new mongoose.Schema({
    name: String,
    pu: Number,
    quantity: Number,
    budget: Number
});

const AggregatedData = mongoose.model("AggregatedData", AggregatedDataSchema);

module.exports = AggregatedData;
