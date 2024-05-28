const mongoose = require("mongoose");

const totalSchema = new mongoose.Schema({
    Name: String,
    Pu: Number,
    Quantity: Number,
    Montant: Number,
    Pexquantity:Number,
    Pexmontant:Number,
    Pextr:Number,
    Dexquantity:Number,
    Dexmontant:Number,
    Dextr:Number
});

const Total = mongoose.model("Total", totalSchema);
module.exports = Total;