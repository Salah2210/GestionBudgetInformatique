const mongoose = require('mongoose');

const NewSchema = new mongoose.Schema({
    nom: String,
    pu: String,
    montant: Number,
    quantity: {
        bpt: Number,
        bpp: Number,
        bimfp: Number,
        biind: Number,
        bic: Number,
        bsc: Number,
        bpabx: Number,
        bptel: Number,
        bci: Number
        // You can add more fields if needed
    }
});

const NewModel = mongoose.model('NewModel', NewSchema);

module.exports = NewModel;