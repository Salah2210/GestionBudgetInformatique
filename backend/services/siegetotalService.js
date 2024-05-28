const Total = require("../models/SiegeTotal");
const Siege = require("../models/Siege");

const pairMapping = {
    "npt_rpt": "Poste de Travail",
    "ncsp_rcsp": "Configuration spécial",
    "npp_rpp": "Pc portable",
    "niind_riind": "Imprimante individuelle",
    "nim_rim": "Imprimante MFP",
    "nic_ric": "Imprimante couleur",
    "nimc_rimc": "Imprimante MFP couleur",
    "nscc_rscc": "Scanner avec chargeur",
    "nsc_rsc": "Scanner",
    "nci_rci": "Câblage informatique",
    "nptel_rptel": "Poste Téléphonique",
    "nlog_rlog": "Logiciel"
};

const computeAndSaveSiegeTotalQuantity = async () => {
    /*try {
        const totals = {};

        for (let pair in pairMapping) {
            const fields = pair.split('_');
            const total = fields.reduce(async (acc, field) => {
                const result = await Siege.aggregate([
                    { $group: { _id: null, total: { $sum: `$${field}` } } }
                ]);
                return acc + (result.length > 0 ? result[0].total : 0);
            }, 0);

            totals[pair] = total;

            const totalDoc = await Total.findOne({ name: pairMapping[pair] });
            const updatedMontant = totalDoc ? totalDoc.pu * total : 0;

            if (totalDoc) {
                await Total.updateOne(
                    { name: pairMapping[pair] },
                    {
                        $set: {
                            quantity: total,
                            montant: updatedMontant
                        }
                    }
                );
            } else {
                await Total.create({
                    name: pairMapping[pair],
                    pu: 0, // Default Pu value
                    quantity: total,
                    montant: updatedMontant
                });
            }
        }

        return totals;
    } catch (error) {
        throw new Error("Error calculating and saving totals: " + error);
    }*/
    try {
        const totals = {};

        for (let pair in pairMapping) {
            const fields = pair.split('_');
            const total = await fields.reduce(async (accPromise, field) => {
                const acc = await accPromise;
                const result = await Siege.aggregate([
                    { $group: { _id: null, total: { $sum: `$${field}` } } }
                ]);
                return acc + (result.length > 0 ? result[0].total : 0);
            }, Promise.resolve(0)); // Start with a resolved promise and initial value 0

            totals[pair] = total;

            const totalDoc = await Total.findOne({ name: pairMapping[pair] });
            const updatedMontant = totalDoc ? totalDoc.pu * total : 0;

            if (totalDoc) {
                await Total.updateOne(
                    { name: pairMapping[pair] },
                    {
                        $set: {
                            quantity: total,
                            montant: updatedMontant
                        }
                    }
                );
            } else {
                await Total.create({
                    name: pairMapping[pair],
                    pu: 0, // Default Pu value
                    quantity: total,
                    montant: updatedMontant
                });
            }
        }

        return totals;
    } catch (error) {
        throw new Error("Error calculating and saving totals: " + error);
    }
};

const updateSiegeTotalss=async(t)=>{
    return await Total.findByIdAndUpdate(t._id,t)  
 }
const getSiegeTotalssById=async(id)=>{
    return await Total.findById(id)
}

module.exports = {
    computeAndSaveSiegeTotalQuantity,
    updateSiegeTotalss,
    getSiegeTotalssById
};
