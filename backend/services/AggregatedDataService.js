const AggregatedData = require("../models/AggregatedData");

const calculateTotalQuantity = async (rubrique, tableModel) => {
    let totalQuantity = 0;
    const documents = await tableModel.find({});
    documents.forEach(doc => {
        totalQuantity += doc[rubrique] || 0;
    });
    return totalQuantity;
};

const aggregateData = async (tableModels) => {
    const rubriques = ["bpt", "bpp", "bimfp", "biind", "bic", "bsc", "bpabx", "bptel", "bci"];
    for (let rubrique of rubriques) {
        let totalQuantity = 0;
        for (let tableModel of tableModels) {
            totalQuantity += await calculateTotalQuantity(rubrique, tableModel);
        }
        const newAggregatedData = new AggregatedData({
            name: rubrique,
            quantity: totalQuantity
        });
        await newAggregatedData.save();
    }
};

module.exports = {
    aggregateData
};
