const mongoose = require("mongoose");

const siegetotalSchema = new mongoose.Schema({
    name: String,
    pu: Number,
    quantity: Number,
    montant: Number
});

const SiegeTotal = mongoose.model("SiegeTotal", siegetotalSchema);
module.exports = SiegeTotal;
