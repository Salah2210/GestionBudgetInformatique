/*const mongoose = require('mongoose');
const CasaNord = require('./CasaNord');
const CasaSud = require('./CasaSud');
const DoukkalaAbda = require('./DoukkalaAbda');
const FesMeknes = require('./FesMeknes');
const Haouz = require('./Haouz');
const Nord = require('./Nord');
const Oriental = require('./Oriental');
const RabatTemara = require('./RabatTemara');
const SaleGharb = require('./SaleGharb');
const Sud = require('./Sud');
const TadlaOuardigha = require('./TadlaOuardigha');

const totalSchema = new mongoose.Schema({
    items: [{
        Name: String,
        Pu: String,
        Quantities: {
            bpt: Number,
            bpp: Number,
            bimfp: Number,
            biind: Number,
            bic: Number,
            bsc: Number,
            bpabx: Number,
            bptel: Number,
            bci: Number
        },
        Montant: Number
    }]
});*/

/*totalSchema.statics.calculateTotalQuantity = async function() {
    try {
        const schemas = [
            CasaNord, CasaSud, DoukkalaAbda, FesMeknes, Haouz,
            Nord, Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha
        ];
        const totalQuantitiesByItem = [];

        for (const schema of schemas) {
            const item = {
                Name: schema.modelName,
                Pu: '', // Add the appropriate value here
                Quantities: {},
                Montant: 0 // Adjust if needed
            };

            // Calculate the total quantity for each field
            for (const field of Object.keys(item.Quantities)) {
                const fieldSum = await schema.aggregate([
                    {
                        $group: {
                            _id: null,
                            total: { $sum: `$${field}` }
                        }
                    }
                ]);

                if (fieldSum.length > 0) {
                    item.Quantities[field] = fieldSum[0].total;
                }
            }

            totalQuantitiesByItem.push(item);
        }

        return totalQuantitiesByItem;
    } catch (error) {
        console.error('Error calculating total quantity:', error);
        throw error;
    }
};
*/
/*totalSchema.statics.calculateTotalQuantity = async function() {
    try {
        const schemas = [
            CasaNord, CasaSud, DoukkalaAbda, FesMeknes, Haouz,
            Nord, Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha
        ];
        const totalQuantitiesByItem = [];

        for (const schema of schemas) {
            const item = {
                Name: schema.modelName,
                Pu: '', // Add the appropriate value here
                Quantities: {},
                Montant: 0 // Adjust if needed
            };

            // Calculate the total quantity for each field
            for (const field of Object.keys(item.Quantities)) {
                console.log(`Calculating total quantity for field ${field} of schema ${schema.modelName}`);
                const fieldSum = await schema.aggregate([
                    {
                        $group: {
                            _id: null,
                            total: { $sum: `$${field}` }
                        }
                    }
                ]);
                console.log(`Result for field ${field} of schema ${schema.modelName}:`, fieldSum);

                if (fieldSum.length > 0) {
                    item.Quantities[field] = fieldSum[0].total;
                }
            }

            totalQuantitiesByItem.push(item);
        }

        console.log('Total quantities by item:', totalQuantitiesByItem);

        return totalQuantitiesByItem;
    } catch (error) {
        console.error('Error calculating total quantity:', error);
        throw error;
    }
};

const Total = mongoose.model('Total', totalSchema);
module.exports = Total;
*/

///
/*const mongoose = require('mongoose');
const CasaNord = require('./CasaNord');
const CasaSud = require('./CasaSud');
const DoukkalaAbda = require('./DoukkalaAbda');
const FesMeknes = require ('./FesMeknes');
const Haouz = require ('./Haouz');
const Nord = require ('./Nord');
const Oriental = require ('./Oriental');
const RabatTemara = require ('./RabatTemara');
const SaleGharb = require ('./SaleGharb');
const Sud = require ('./Sud');
const TadlaOuardigha = require ('./TadlaOuardigha');
// Import other schemas...

const totalSchema = new mongoose.Schema({
    items: [{
        Name: String,
        Pu: String,
        Quantity: Number,
        Montant: Number
    }]
});

totalSchema.statics.calculateTotalQuantity = async function() {
    try {
        const casanordSum = await CasaNord.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        const casaSudSum = await CasaSud.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        const doukkalaAbdaSum = await DoukkalaAbda.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);

        const fesMeknesSum = await FesMeknes.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        // Aggregate for other sources...
        const haouzSum = await Haouz.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        const nordSum = await Nord.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        const orientalSum = await Oriental.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        const rabatTemaraSum = await RabatTemara.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        const saleGharbSum = await SaleGharb.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        const sudSum = await Sud.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);
        const tadlaOuardighaSum = await TadlaOuardigha.aggregate([{ $group: { _id: null, total: { $sum: '$bpt' } } }]);


        const totalQuantity = casanordSum[0].total + casaSudSum[0].total + doukkalaAbdaSum[0].total+ fesMeknesSum[0].total+ haouzSum[0].total+ nordSum[0].total+ orientalSum[0].total+ rabatTemaraSum[0].total+ saleGharbSum[0].total+ sudSum[0].total+ tadlaOuardighaSum[0].total;
        // Add other sums for total quantity calculation

        return totalQuantity;
    } catch (error) {
        console.error('Error calculating total quantity:', error);
        throw error;
    }
};

const Total = mongoose.model('Total', totalSchema);
module.exports = Total;

*/

/*
const Casanord = require ('./CasaNord');
const CasaSud = require ('./CasaSud');
const DoukkalaAbda = require ('./DoukkalaAbda');
const FesMeknes = require ('./FesMeknes');
const Haouz = require ('./Haouz');
const Nord = require ('./Nord');
const Oriental = require ('./Oriental');
const RabatTemara = require ('./RabatTemara');
const SaleGharb = require ('./SaleGharb');
const Sud = require ('./Sud');
const TadlaOuardigha = require ('./TadlaOuardigha');

const mongoose=require("mongoose")

const totalSchema=new mongoose.Schema({
    items: [{
    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.bpt},
                {$sum: CasaSud.bpt},
                {$sum: DoukkalaAbda.bpt},
                {$sum: FesMeknes.bpt},
                {$sum: Haouz.bpt},
                {$sum: Nord.bpt},
                {$sum: Oriental.bpt},
                {$sum: RabatTemara.bpt},
                {$sum: SaleGharb.bpt},
                {$sum: Sud.bpt},
                {$sum: TadlaOuardigha.bpt}
            ]
        }
    },
    Montant: Number
    },{

    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.bpp},
                {$sum: CasaSud.bpp},
                {$sum: DoukkalaAbda.bpp},
                {$sum: FesMeknes.bpp},
                {$sum: Haouz.bpp},
                {$sum: Nord.bpp},
                {$sum: Oriental.bpp},
                {$sum: RabatTemara.bpp},
                {$sum: SaleGharb.bpp},
                {$sum: Sud.bpp},
                {$sum: TadlaOuardigha.bpp}
            ]
        }
    },
    Montant: Number
  },{

    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.bimfp},
                {$sum: CasaSud.bimfp},
                {$sum: DoukkalaAbda.bimfp},
                {$sum: FesMeknes.bimfp},
                {$sum: Haouz.bimfp},
                {$sum: Nord.bimfp},
                {$sum: Oriental.bimfp},
                {$sum: RabatTemara.bimfp},
                {$sum: SaleGharb.bimfp},
                {$sum: Sud.bimfp},
                {$sum: TadlaOuardigha.bimfp}
            ]
        }
    },
    Montant: Number
},{
    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.biind},
                {$sum: CasaSud.biind},
                {$sum: DoukkalaAbda.biind},
                {$sum: FesMeknes.biind},
                {$sum: Haouz.biind},
                {$sum: Nord.biind},
                {$sum: Oriental.biind},
                {$sum: RabatTemara.biind},
                {$sum: SaleGharb.biind},
                {$sum: Sud.biind},
                {$sum: TadlaOuardigha.biind}
            ]
        }
    },
    Montant: Number
    },{

    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.bic},
                {$sum: CasaSud.bic},
                {$sum: DoukkalaAbda.bic},
                {$sum: FesMeknes.bic},
                {$sum: Haouz.bic},
                {$sum: Nord.bic},
                {$sum: Oriental.bic},
                {$sum: RabatTemara.bic},
                {$sum: SaleGharb.bic},
                {$sum: Sud.bic},
                {$sum: TadlaOuardigha.bic}
            ]
        }
    },
    Montant: Number
    },{

    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.bsc},
                {$sum: CasaSud.bsc},
                {$sum: DoukkalaAbda.bsc},
                {$sum: FesMeknes.bsc},
                {$sum: Haouz.bsc},
                {$sum: Nord.bsc},
                {$sum: Oriental.bsc},
                {$sum: RabatTemara.bsc},
                {$sum: SaleGharb.bsc},
                {$sum: Sud.bsc},
                {$sum: TadlaOuardigha.bsc}
            ]
        }
    },
    Montant: Number
    },{

    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.bpabx},
                {$sum: CasaSud.bpabx},
                {$sum: DoukkalaAbda.bpabx},
                {$sum: FesMeknes.bpabx},
                {$sum: Haouz.bpabx},
                {$sum: Nord.bpabx},
                {$sum: Oriental.bpabx},
                {$sum: RabatTemara.bpabx},
                {$sum: SaleGharb.bpabx},
                {$sum: Sud.bpabx},
                {$sum: TadlaOuardigha.bpabx}
            ]
        }
    },
    Montant: Number
    },{

    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.bptel},
                {$sum: CasaSud.bptel},
                {$sum: DoukkalaAbda.bptel},
                {$sum: FesMeknes.bptel},
                {$sum: Haouz.bptel},
                {$sum: Nord.bptel},
                {$sum: Oriental.bptel},
                {$sum: RabatTemara.bptel},
                {$sum: SaleGharb.bptel},
                {$sum: Sud.bptel},
                {$sum: TadlaOuardigha.bptel}
            ]
        }
    },
    Montant: Number
    },{

    Name : String,
    Pu : String,
    Quantity: {
        $sum: {
            $add: [
                {$sum: Casanord.bci},
                {$sum: CasaSud.bci},
                {$sum: DoukkalaAbda.bci},
                {$sum: FesMeknes.bci},
                {$sum: Haouz.bci},
                {$sum: Nord.bci},
                {$sum: Oriental.bci},
                {$sum: RabatTemara.bci},
                {$sum: SaleGharb.bci},
                {$sum: Sud.bci},
                {$sum: TadlaOuardigha.bci}
            ]
        }
    },
    Montant: Number
    }]
})

const Total=mongoose.model("Total",totalSchema)
module.exports=Total
*/


/*
const mongoose = require("mongoose");
const Casanord = require("./CasaNord");
const CasaSud = require("./CasaSud");
const DoukkalaAbda = require("./DoukkalaAbda");
const FesMeknes = require("./FesMeknes");
const Haouz = require("./Haouz");
const Nord = require("./Nord");
const Oriental = require("./Oriental");
const RabatTemara = require("./RabatTemara");
const SaleGharb = require("./SaleGharb");
const Sud = require("./Sud");
const TadlaOuardigha = require("./TadlaOuardigha");

const totalSchema = new mongoose.Schema({
    items: [{
        Name: String,
        Pu: String,
        Quantity: Number,
        Montant: Number
    }]
});

// Function to calculate sum of quantities for each item
totalSchema.statics.calculateItemQuantities = async function() {
    try {
        const items = [
            { name: "Poste de Travail", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },
            { name: "Pc Portable", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },
            { name: "Imprimante MFP", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },

            { name: "Imprimante Individuelles", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },
            // Define other items similarly
            { name: "Imprimante Couleur", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },
            { name: "Câblage Informatique", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },
            { name: "Scanner", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },
            { name: "Poste téléphonique", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },
            { name: "PABX", schemas: [Casanord, CasaSud, DoukkalaAbda,FesMeknes, Haouz, Nord,Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha] },

        ];

        const totals = [];
        for (const item of items) {
            let totalQuantity = 0;
            for (const schema of item.schemas) {
                const sumResult = await schema.aggregate([
                    {
                        $group: {
                            _id: null,
                            totalQuantity: { $sum: `$${schema.name}` }
                        }
                    }
                ]);
                if (sumResult.length > 0) {
                    totalQuantity += sumResult[0].totalQuantity;
                }
            }
            totals.push({
                Name: item.name,
                Quantity: totalQuantity
            });
        }

        console.log(totals);
        return totals;
    } catch (error) {
        console.error("Error calculating item quantities:", error);
        throw error;
    }
};

const Total = mongoose.model("Total", totalSchema);

module.exports = Total;*/



///
/*
const mongoose = require('mongoose');
const CasaNord = require('./CasaNord');
const CasaSud = require('./CasaSud');
const DoukkalaAbda = require('./DoukkalaAbda');
const FesMeknes = require('./FesMeknes');
const Haouz = require('./Haouz');
const Nord = require('./Nord');
const Oriental = require('./Oriental');
const RabatTemara = require('./RabatTemara');
const SaleGharb = require('./SaleGharb');
const Sud = require('./Sud');
const TadlaOuardigha = require('./TadlaOuardigha');

const totalSchema = new mongoose.Schema({
    items: [{
        Name: String,
        Pu: String,
        Quantities: {
            bpt: Number,
            bpp: Number,
            bimfp: Number,
            biind: Number,
            bic: Number,
            bsc: Number,
            bpabx: Number,
            bptel: Number,
            bci: Number
        },
        Montant: Number
    }]
});

totalSchema.statics.calculateTotalQuantity = async function() {
    try {
        const schemas = [
            CasaNord, CasaSud, DoukkalaAbda, FesMeknes, Haouz,
            Nord, Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha
        ];
        const totalQuantitiesByItem = [];

        for (const schema of schemas) {
            const item = {
                Name: schema.modelName,
                Pu: '', // Add the appropriate value here
                Quantities: {},
                Montant: 0 // Adjust if needed
            };

            // Calculate the total quantity for each field
            for (const field of Object.keys(item.Quantities)) {
                const fieldSum = await schema.aggregate([
                    {
                        $group: {
                            _id: null,
                            total: { $sum: `$${field}` }
                        }
                    }
                ]);

                if (fieldSum.length > 0) {
                    item.Quantities[field] = fieldSum[0].total;
                }
            }

            totalQuantitiesByItem.push(item);
        }

        // Save the total quantities to the database
        const totalDocument = new Total({ items: totalQuantitiesByItem });
        await totalDocument.save();

        return totalQuantitiesByItem;
    } catch (error) {
        console.error('Error calculating total quantity:', error);
        throw error;
    }
};

const Total = mongoose.model('Total', totalSchema);
module.exports = Total;
*/
////
/*
const mongoose = require('mongoose');
const CasaNord = require('./CasaNord');
const CasaSud = require('./CasaSud');
const DoukkalaAbda = require('./DoukkalaAbda');
const FesMeknes = require('./FesMeknes');
const Haouz = require('./Haouz');
const Nord = require('./Nord');
const Oriental = require('./Oriental');
const RabatTemara = require('./RabatTemara');
const SaleGharb = require('./SaleGharb');
const Sud = require('./Sud');
const TadlaOuardigha = require('./TadlaOuardigha');

const totalSchema = new mongoose.Schema({
    items: [{
        Name: String,
        Pu: String,
        Quantities: {
            bpt: Number,
            bpp: Number,
            bimfp: Number,
            biind: Number,
            bic: Number,
            bsc: Number,
            bpabx: Number,
            bptel: Number,
            bci: Number
        },
        Montant: Number
    }]
});

async function countDocuments() {
    try {
        const casaNordCount = await CasaNord.countDocuments();
        const casaSudCount = await CasaSud.countDocuments();
        // Count documents for other collections...

        console.log('CasaNord count:', casaNordCount);
        console.log('CasaSud count:', casaSudCount);
        // Log counts for other collections...

    } catch (error) {
        console.error('Error counting documents:', error);
    }
}

countDocuments();

totalSchema.statics.calculateTotalQuantity = async function() {
    try {
        const schemas = [
            CasaNord, CasaSud, DoukkalaAbda, FesMeknes, Haouz,
            Nord, Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha
        ];
        const totalQuantitiesByItem = [];

        for (const schema of schemas) {
            const item = {
                Name: schema.modelName,
                Pu: '', // Add the appropriate value here
                Quantities: {},
                Montant: 0 // Adjust if needed
            };

            // Calculate the total quantity for each field
            for (const field of Object.keys(item.Quantities)) {
                const fieldSum = await schema.aggregate([
                    {
                        $group: {
                            _id: null,
                            total: { $sum: `$${field}` }
                        }
                    }
                ]);

                const totalValue = fieldSum.length > 0 ? fieldSum[0].total : 0;
                item.Quantities[field] = totalValue;
            }

            totalQuantitiesByItem.push(item);
        }

        // Save the total quantities to the database
        const totalDocument = new Total({ items: totalQuantitiesByItem });
        await totalDocument.save();

        return totalQuantitiesByItem;
    } catch (error) {
        console.error('Error calculating total quantity:', error);
        throw error;
    }
};

const Total = mongoose.model('Total', totalSchema);
module.exports = Total;
*/
///
/*
const mongoose = require('mongoose');
const CasaNord = require('./CasaNord');
const CasaSud = require('./CasaSud');
const DoukkalaAbda = require('./DoukkalaAbda');
const FesMeknes = require('./FesMeknes');
const Haouz = require('./Haouz');
const Nord = require('./Nord');
const Oriental = require('./Oriental');
const RabatTemara = require('./RabatTemara');
const SaleGharb = require('./SaleGharb');
const Sud = require('./Sud');
const TadlaOuardigha = require('./TadlaOuardigha');

const totalSchema = new mongoose.Schema({
    items: [{
        Name: String,
        Pu: String,
        Quantities: {
            bpt: Number,
            bpp: Number,
            bimfp: Number,
            biind: Number,
            bic: Number,
            bsc: Number,
            bpabx: Number,
            bptel: Number,
            bci: Number
        },
        Montant: Number
    }]
});

totalSchema.statics.calculateTotalQuantity = async function() {
    try {
        const schemas = [
            CasaNord, CasaSud, DoukkalaAbda, FesMeknes, Haouz,
            Nord, Oriental, RabatTemara, SaleGharb, Sud, TadlaOuardigha
        ];
        const totalQuantitiesByItem = [];

        for (const schema of schemas) {
            const item = {
                Name: schema.modelName,
                Pu: '', // Add the appropriate value here
                Quantities: {},
                Montant: 0 // Adjust if needed
            };

            // Calculate the total quantity for each field
            for (const field of Object.keys(item.Quantities)) {
                try {
                    const fieldSum = await schema.aggregate([
                        {
                            $group: {
                                _id: null,
                                total: { $sum: `$${field}` }
                            }
                        }
                    ]).maxTimeMS(60000); // Augmenter le délai à 60 secondes

                    if (fieldSum.length > 0) {
                        item.Quantities[field] = fieldSum[0].total;
                    } else {
                        // Si aucun résultat trouvé, considérer le total comme 0
                        item.Quantities[field] = 0;
                    }
                } catch (error) {
                    console.error('Error calculating total quantity for field', field, 'in', schema.modelName, ':', error);
                    throw error;
                }
            }

            totalQuantitiesByItem.push(item);
        }

        return totalQuantitiesByItem;
    } catch (error) {
        console.error('Error calculating total quantity:', error);
        throw error;
    }
};

const Total = mongoose.model('Total', totalSchema);
module.exports = Total;
*/
/////
/*
const mongoose = require("mongoose");

const totalSchema = new mongoose.Schema({
    Name: String,
    Pu: String,
    Quantity: Number,
    Montant: Number
});

const Total = mongoose.model("Total", totalSchema);
module.exports = Total;
*/