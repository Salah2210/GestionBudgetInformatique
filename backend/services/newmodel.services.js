//const mongoose = require('mongoose');
const CasaNord = require('../models/directions/CasaNord');
const CasaSud = require('../models/directions/CasaSud');
const DoukkalaAbda = require('../models/directions/DoukkalaAbda');
const FesMeknes = require('../models/directions/FesMeknes');
const Haouz = require('../models/directions/Haouz');
const Nord = require('../models/directions/Nord');
const Oriental = require('../models/directions/Oriental');
const RabatTemara = require('../models/directions/RabatTemara');
const SaleGharb = require('../models/directions/SaleGharb');
const Sud = require('../models/directions/Sud');
const TadlaOuardigha = require('../models/directions/TadlaOuardigha');
const NewModel = require('../models/NewModel'); // Adjust the path as necessary

async function calculateAndInsertAggregatedData() {
    try {
        const schemas = [CasaNord, CasaSud, DoukkalaAbda, FesMeknes, Haouz, Nord, Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha];
        let aggregatedData = {
            nom: "Total Aggregated Data", // Example name, adjust as necessary
            pu: "N/A", // Example, adjust as necessary
            montant: 0, // Example calculation or static value
            quantity: { bpt: 0, bpp: 0, bimfp: 0, biind: 0, bic: 0, bsc: 0
                        , bpabx: 0, bptel: 0, bci: 0
                         }
        };

        for (const schema of schemas) {
            const results = await schema.aggregate([
                { $group: { _id: null, totalBpt: { $sum: "$bpt" }, totalBpp: { $sum: "$bpp" }, totalBimfp: { $sum: "$bimfp" }, 
                            totalBiind: { $sum: "$biind" }, totalBic: { $sum: "$bic" }, totalBsc: { $sum: "$bsc" }, totalBpabx: { $sum: "$bpabx" },
                             totalBptel: { $sum: "$bptel" }, totalBci: { $sum: "$bci" } } }
            ]);
            if (results.length > 0) {
                aggregatedData.quantity.bpt += results[0].totalBpt;
                aggregatedData.quantity.bpp += results[0].totalBpp;
                aggregatedData.quantity.bimfp += results[0].totalBimfp;
                aggregatedData.quantity.biind += results[0].totalBiind;
                aggregatedData.quantity.bic += results[0].totalBic;
                aggregatedData.quantity.bsc += results[0].totalBsc;
                aggregatedData.quantity.bpabx += results[0].totalBpabx;
                aggregatedData.quantity.bptel += results[0].totalBptel;
                aggregatedData.quantity.bci += results[0].totalBci;

            }
        }

        // Insert the aggregated data into the new collection
        const newDocument = new NewModel(aggregatedData);
        await newDocument.save();

        console.log('Aggregated data saved successfully:', newDocument);
    } catch (error) {
        console.error('Error calculating or inserting aggregated data:', error);
        throw error;
    }
}

// Don't forget to connect to MongoDB before calling this function
calculateAndInsertAggregatedData();