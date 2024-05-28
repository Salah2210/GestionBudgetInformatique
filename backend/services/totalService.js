/*
// services/totalService.js
const Total = require('../models/Total');
const Casanord = require('../models/directions/CasaNord');
const Casasud = require('../models/directions/CasaSud');
const DoukkalaAbda = require('../models/directions/DoukkalaAbda');
const FesMeknes = require('../models/directions/FesMeknes');
const Haouz = require('../models/directions/Haouz');
const Nord = require('../models/directions/Nord');
const Oriental = require('../models/directions/Oriental');
const RabatTemara = require('../models/directions/RabatTemara');
const SaleGharb = require('../models/directions/SaleGharb');
const Sud = require('../models/directions/Sud');
const TadlaOuardigha = require('../models/directions/TadlaOuardigha');

// Import other models as needed

async function calculateTotal() {
    const pipeline = [
        { $match: /*{  Add any match criteria here if needed */ /*} },
        {
            $group: {
                _id: null,
                total_bpt: { $sum: "$bpt" },
                total_bpp: { $sum: "$bpp" },
                total_bimfp: { $sum: "$bimfp" },
                total_biind: { $sum: "$biind" },
                total_bic: { $sum: "$bic" },
                total_bsc: { $sum: "$bsc" },
                total_bpabx: { $sum: "$bpabx" },
                total_bptel: { $sum: "$bptel" },
                total_bci: { $sum: "$bci" }
            }
        }
    ];

    const casanordTotals = await Casanord.aggregate(pipeline);
    const casasudTotals = await Casasud.aggregate(pipeline);
    const doukkalaabdaTotals = await DoukkalaAbda.aggregate(pipeline);
    const fesmeknesTotals = await FesMeknes.aggregate(pipeline);
    const haouzTotals = await Haouz.aggregate(pipeline);
    const nordTotals = await Nord.aggregate(pipeline);
    const orientalTotals = await Oriental.aggregate(pipeline);
    const rabattemaraTotals = await RabatTemara.aggregate(pipeline);
    const salegharbTotals = await SaleGharb.aggregate(pipeline);
    const sudTotals = await Sud.aggregate(pipeline);
    const tadlaouardighaTotals = await TadlaOuardigha.aggregate(pipeline);
    // Aggregate totals for other collections

    const consolidatedTotals = [
        casanordTotals,
        casasudTotals,
        doukkalaabdaTotals,
        fesmeknesTotals,
        haouzTotals,
        nordTotals,
        orientalTotals,
        rabattemaraTotals,
        salegharbTotals,
        sudTotals,
        tadlaouardighaTotals,
        // Add other collection totals here
    ].reduce((acc, curr) => {
        Object.keys(curr[0]).forEach(key => {
            if (key !== '_id') {
                acc[key] = (acc[key] || 0) + curr[0][key];
            }
        });
        return acc;
    }, {});

    const totalDocument = new Total({
        name: 'Consolidated Total',
        quantity: consolidatedTotals
    });

    await totalDocument.save();
}

module.exports = {
    calculateTotal
};
*/
//

//this works
/*
const Casanord = require("../models/directions/CasaNord");
const Casasud = require("../models/directions/CasaSud");
const Doukkalaabda = require("../models/directions/DoukkalaAbda");
const Fesmeknes = require("../models/directions/FesMeknes");
const Haouz = require("../models/directions/Haouz");
const Nord = require("../models/directions/Nord");
const Oriental = require("../models/directions/Oriental");
const Rabattemara = require("../models/directions/RabatTemara");
const Salegharb = require("../models/directions/SaleGharb");
const Sud = require("../models/directions/Sud");
const Tadlaouardigha = require("../models/directions/TadlaOuardigha");
const Total = require("../models/Total");

const fieldMapping = {
    bpt: "Poste de travail",
    bpp: "Pc Portable",
    bimfp: "Imprimante MFP",
    biind: "Imprimante individuelle",
    bic: "Imprimante couleur",
    bsc: "scanner",
    bpabx: "pabx",
    bptel: "poste telefonique",
    bci: "cablage informatique"
};

const computeAndSaveTotalQuantity = async () => {
    const schemas = [
        Casanord,
        Casasud,
        Doukkalaabda,
        Fesmeknes,
        Haouz,
        Nord,
        Oriental,
        Rabattemara,
        Salegharb,
        Sud,
        Tadlaouardigha
    ];

    const fields = Object.keys(fieldMapping);

    const totals = {};

    for (let field of fields) {
        totals[field] = 0;

        for (let schema of schemas) {
            const result = await schema.aggregate([
                { $group: { _id: null, total: { $sum: `$${field}` } } }
            ]);

            if (result.length > 0) {
                totals[field] += result[0].total;
            }
        }
    }

    // Clear previous totals
    await Total.deleteMany({});

    // Save new totals
    for (let field of fields) {
        /*const total = new Total({
            Name: fieldMapping[field],
            Pu: "", // Placeholder for Pu if needed
            Quantity: totals[field],
            Montant: 0 // Placeholder for Montant if needed
        });
        await total.save();*/

/*        await Total.findOneAndUpdate(
            { Name: fieldMapping[field] },
            {
                $set: {
                    Pu: "", // Placeholder for Pu if needed
                    Quantity: totals[field],
                    Montant: 0 // Placeholder for Montant if needed
                }
            },
            { upsert: true, new: true }
        );
        console.log(`Updated total for ${fieldMapping[field]}`);
        
    }

    return totals;
};

module.exports = {
    computeAndSaveTotalQuantity
};*/
//this fo9 works

const Casanord = require("../models/directions/CasaNord");
const Casasud = require("../models/directions/CasaSud");
const Doukkalaabda = require("../models/directions/DoukkalaAbda");
const Fesmeknes = require("../models/directions/FesMeknes");
const Haouz = require("../models/directions/Haouz");
const Nord = require("../models/directions/Nord");
const Oriental = require("../models/directions/Oriental");
const Rabattemara = require("../models/directions/RabatTemara");
const Salegharb = require("../models/directions/SaleGharb");
const Sud = require("../models/directions/Sud");
const Tadlaouardigha = require("../models/directions/TadlaOuardigha");
const Total = require("../models/Total");

const fieldMapping = {
    bpt: "Poste de travail",
    bpp: "Pc Portable",
    bimfp: "Imprimante MFP",
    biind: "Imprimante individuelle",
    bic: "Imprimante couleur",
    bsc: "scanner",
    bpabx: "pabx",
    bptel: "poste telefonique",
    bci: "cablage informatique"
};

const computeAndSaveTotalQuantity = async () => {
    const schemas = [
        Casanord,
        Casasud,
        Doukkalaabda,
        Fesmeknes,
        Haouz,
        Nord,
        Oriental,
        Rabattemara,
        Salegharb,
        Sud,
        Tadlaouardigha
    ];

    const fields = Object.keys(fieldMapping);

    const totals = {};

    for (let field of fields) {
        totals[field] = 0;

        for (let schema of schemas) {
            const result = await schema.aggregate([
                { $group: { _id: null, total: { $sum: `$${field}` } } }
            ]);

            if (result.length > 0) {
                totals[field] += result[0].total;
            }
        }
    }

    // Update totals
    for (let field of fields) {
        const totalDoc = await Total.findOne({ Name: fieldMapping[field] });

        if (totalDoc) {
            const updatedQuantity = totals[field];
            const updatedMontant = totalDoc.Pu * updatedQuantity;

            await Total.updateOne(
                { Name: fieldMapping[field] },
                {
                    $set: {
                        Quantity: updatedQuantity,
                        Montant: updatedMontant
                    }
                }
            );

            console.log(`Updated total for ${fieldMapping[field]}`);
        } else {
            // If no document exists, create a new one with default Pu and calculated Montant
            await Total.create({
                Name: fieldMapping[field],
                Pu: 0, // Default Pu value
                Quantity: totals[field],
                Montant: 0, // Default Montant value based on Pu
                Pexquantity:0,
                Pexmontant:0,
                Pextr:0,
                Dexquantity:0,
                Dexmontant:0,
                Dextr:0
            });

            console.log(`Created total for ${fieldMapping[field]}`);
        }
    }

    return totals;
};
const getAllTotalss=async()=>{
    await computeAndSaveTotalQuantity();

    return await Total.find()
}
const updateTotalss=async(t)=>{
    return await Total.findByIdAndUpdate(t._id,t)  
 }
const getTotalssById=async(id)=>{
    return await Total.findById(id)
}

module.exports = {
    computeAndSaveTotalQuantity,
    getAllTotalss,
    updateTotalss,
    getTotalssById
};
/*
const Casanord = require("../models/directions/CasaNord");
const Casasud = require("../models/directions/CasaSud");
const Doukkalaabda = require("../models/directions/DoukkalaAbda");
const Fesmeknes = require("../models/directions/FesMeknes");
const Haouz = require("../models/directions/Haouz");
const Nord = require("../models/directions/Nord");
const Oriental = require("../models/directions/Oriental");
const Rabattemara = require("../models/directions/RabatTemara");
const Salegharb = require("../models/directions/SaleGharb");
const Sud = require("../models/directions/Sud");
const Tadlaouardigha = require("../models/directions/TadlaOuardigha");
const Total = require("../models/Total");

const fieldMapping = {
    bpt: "Poste de travail",
    bpp: "Pc Portable",
    bimfp: "Imprimante MFP",
    biind: "Imprimante individuelle",
    bic: "Imprimante couleur",
    bsc: "scanner",
    bpabx: "pabx",
    bptel: "poste telefonique",
    bci: "cablage informatique"
};

const computeAndSaveTotalQuantity = async () => {
    try {
        const schemas = [
            Casanord,
            Casasud,
            Doukkalaabda,
            Fesmeknes,
            Haouz,
            Nord,
            Oriental,
            Rabattemara,
            Salegharb,
            Sud,
            Tadlaouardigha
        ];

        const fields = Object.keys(fieldMapping);
        const totals = {};

        for (let field of fields) {
            totals[field] = 0;

            for (let schema of schemas) {
                const result = await schema.aggregate([
                    { $group: { _id: null, total: { $sum: `$${field}` } } }
                ]);

                if (result.length > 0) {
                    totals[field] += result[0].total;
                }
            }
        }

        for (let field of fields) {
            const totalDoc = await Total.findOne({ Name: fieldMapping[field] });

            const updatedQuantity = totals[field];
            const updatedMontant = totalDoc ? totalDoc.Pu * updatedQuantity : 0;

            if (totalDoc) {
                await Total.updateOne(
                    { Name: fieldMapping[field] },
                    {
                        $set: {
                            Quantity: updatedQuantity,
                            Montant: updatedMontant
                        }
                    }
                );
                console.log(`Updated total for ${fieldMapping[field]}: Quantity = ${updatedQuantity}, Montant = ${updatedMontant}`);
            } else {
                await Total.create({
                    Name: fieldMapping[field],
                    Pu: 0, // Default Pu value
                    Quantity: updatedQuantity,
                    Montant: 0 // Default Montant value based on Pu
                });
                console.log(`Created total for ${fieldMapping[field]} with Quantity = ${updatedQuantity}`);
            }
        }

        return totals;
    } catch (error) {
        console.error("Error computing and saving total quantities:", error);
        throw error; // Rethrow the error after logging it
    }
};*/








/*
const computeTotalQuantity = async () => {
    const schemas = [
        Casanord,
        Casasud,
        Doukkalaabda,
        Fesmeknes,
        Haouz,
        Nord,
        Oriental,
        Rabattemara,
        Salegharb,
        Sud,
        Tadlaouardigha
    ];

    const fields = ["bpt", "bpp", "bimfp", "biind", "bic", "bsc", "bpabx", "bptel", "bci"];

    const totals = {};

    for (let field of fields) {
        totals[field] = 0;

        for (let schema of schemas) {
            const result = await schema.aggregate([
                { $group: { _id: null, total: { $sum: `$${field}` } } }
            ]);

            if (result.length > 0) {
                totals[field] += result[0].total;
            }
        }
    }

    return totals;
};

module.exports = {
    computeTotalQuantity
};
*/
/*
const computeAndSaveTotalQuantity = async () => {
    const schemas = [
        Casanord,
        Casasud,
        Doukkalaabda,
        Fesmeknes,
        Haouz,
        Nord,
        Oriental,
        Rabattemara,
        Salegharb,
        Sud,
        Tadlaouardigha
    ];

    const fields = ["bpt", "bpp", "bimfp", "biind", "bic", "bsc", "bpabx", "bptel", "bci"];

    const totals = {};

    for (let field of fields) {
        totals[field] = 0;

        for (let schema of schemas) {
            const result = await schema.aggregate([
                { $group: { _id: null, total: { $sum: `$${field}` } } }
            ]);

            if (result.length > 0) {
                totals[field] += result[0].total;
            }
        }
    }

    // Clear previous totals
    await Total.deleteMany({});

    // Save new totals
    for (let field of fields) {
        const total = new Total({
            Name: field,
            Pu: "", // Placeholder for Pu if needed
            Quantity: totals[field],
            Montant: 0 // Placeholder for Montant if needed
        });
        await total.save();
    }

    return totals;
};

module.exports = {
    computeAndSaveTotalQuantity
};
*/