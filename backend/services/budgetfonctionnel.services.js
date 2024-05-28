const { Budgetfonctionnel, ProjectFacture } = require("../models/Budgetfonctionnel")


/*
*/



const getAllBudgetfonctionnels=async()=>{
return await Budgetfonctionnel.find()
}

const createBudgetfonctionnel=async(b)=>{

// Check if a budgetdefonctionnement with the same rubrique already exists
const existingBudgfonc = await Budgetfonctionnel.findOne({ rubrique: b.rubrique });

    if (existingBudgfonc) {
        // Throw an error or handle it as needed
    throw new Error('A Budget de fonctionnement with this rubrique already exists. Please choose a different rubrique.');
    }

    // If no budgetdefonctionnement with the same rubrique exists, create a new budgetdefonctionnement
    
return await Budgetfonctionnel.create(b)
}

const deleteBudgetfonctionnelById=async(id)=>{
return await Budgetfonctionnel.findByIdAndDelete(id)
}

const updateBudgetfonctionnel=async(b)=>{

// Check if a budgetdefonctionnement with the same rubrique already exists (excluding the current budgetdefonctionnement)
const existingBudgfonc = await Budgetfonctionnel.findOne({ rubrique: b.rubrique });

    if (existingBudgfonc && existingBudgfonc._id.toString() !== b._id.toString()) {
        // Throw an error or handle it as needed
    throw new Error('A Budget de fonctionnement with this rubrique already exists. Please choose a different rubrique.');
    }

    // If no other budgetdefonctionnement with the same rubrique exists, proceed with the update
return await Budgetfonctionnel.findByIdAndUpdate(b._id, b, { new: true });
}

const getBudgetfonctionnelById=async(id)=>{
    return await Budgetfonctionnel.findById(id)
}

/*
*/

const getAllBudgetfonctionnelcontractprestations = async (id) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id);
    return budgetfonctionnel.contractprestations;
};

const createBudgetfonctionnelcontractprestation = async (id, contractprestationData) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id);
    if (!budgetfonctionnel) {
        throw new Error("Budgetfonctionnel not found");
    }
     // Check if a contractprestation with the same name already exists in the project
    const contractprestationExists = budgetfonctionnel.contractprestations.some(contractprestation => contractprestation.name === contractprestationData.name);
    if (contractprestationExists) {
    throw new Error("A contractprestation with this name already exists in the budget de fonctionnement.");
    }
    //
    const newContractprestation = { ...contractprestationData }; // Assuming contractprestationData is a valid object
    budgetfonctionnel.contractprestations.push(newContractprestation);
    await budgetfonctionnel.save();
    return newContractprestation;
};

const getBudgetfonctionnelcontractprestationById = async (id, contractprestationId) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id)
    const contractprestation = budgetfonctionnel.contractprestations.id(contractprestationId)
    return contractprestation
};
//
const updateBudgetfonctionnelcontractprestation = async (id, contractprestationId, contractprestationData) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id)
    const contractprestation = budgetfonctionnel.contractprestations.id(contractprestationId)
   
    const contractprestationExists = budgetfonctionnel.contractprestations.some(contractprestation => contractprestation.name === contractprestationData.name);
    if (contractprestationExists) {
    throw new Error("A Contract/Prestation with this name already exists in the Budget de fonctionnement.");
    }
   
    contractprestation.set(contractprestationData)
    await budgetfonctionnel.save()
    return contractprestation
};


const deleteBudgetfonctionnelcontractprestation = async (id, contractprestationId) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id);
    if (!budgetfonctionnel) {
        throw new Error('budgetfonctionnel not found');
    }

    // Find the index of the facture in the factures array
    const contractprestationIndex = budgetfonctionnel.contractprestations.findIndex(contractprestation => contractprestation._id == contractprestationId);
    if (contractprestationIndex === -1) {
        throw new Error('Contract ou Prestation not found');
    }

    // Remove the facture from the factures array
    budgetfonctionnel.contractprestations.splice(contractprestationIndex, 1);

    await budgetfonctionnel.save();
    return budgetfonctionnel.contractprestations;
};
//
const getAllBudgetfonctionnelcontractprestationfactures = async (id, contractprestationId) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id);
    if (!budgetfonctionnel) {
        throw new Error('Budgetfonctionnel not found');
    }

    const contractprestation = budgetfonctionnel.contractprestations.id(contractprestationId);
    if (!contractprestation) {
        throw new Error('Contractprestation not found');
    }

    return contractprestation.factures;
};

const createBudgetfonctionnelcontractprestationfacture = async (id, contractprestationId, factureData) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id);
    if (!budgetfonctionnel) {
        throw new Error('Budgetfonctionnel not found');
    }

    const contractprestation = budgetfonctionnel.contractprestations.id(contractprestationId);
    if (!contractprestation) {
        throw new Error('Contractprestation not found');
    }

    // Check if a facture with the same name already exists in the project
    const factureExists = contractprestation.factures.some(facture => facture.name === factureData.name);
    if (factureExists) {
    throw new Error("A facture with this name already exists in the Contract/Prestation.");
    }
//
    const newFacture = { ...factureData }; // Assuming factureData is a valid object
    contractprestation.factures.push(newFacture);
    await budgetfonctionnel.save();
    return newFacture;
};

const getBudgetfonctionnelcontractprestationfactureById = async (id, contractprestationId, factureId) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id);
    if (!budgetfonctionnel) {
        throw new Error('Budgetfonctionnel not found');
    }

    const contractprestation = budgetfonctionnel.contractprestations.id(contractprestationId);
    if (!contractprestation) {
        throw new Error('Contractprestation not found');
    }

    const facture = contractprestation.factures.id(factureId);
    if (!facture) {
        throw new Error('Facture not found');
    }

    return facture;
};

const updateBudgetfonctionnelcontractprestationfacture = async (id, contractprestationId, factureId, factureData) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id);
    if (!budgetfonctionnel) {
        throw new Error('Budgetfonctionnel not found');
    }

    const contractprestation = budgetfonctionnel.contractprestations.id(contractprestationId);
    if (!contractprestation) {
        throw new Error('Contractprestation not found');
    }

    const facture = contractprestation.factures.id(factureId);
    if (!facture) {
        throw new Error('Facture not found');
    }
    const factureExists = contractprestation.factures.some(facture => facture.name === factureData.name);
    if (factureExists) {
    throw new Error("A facture with this name already exists in the Contract/Prestation.");
    }

    facture.set(factureData);
    await budgetfonctionnel.save();
    return facture;
};

const deleteBudgetfonctionnelcontractprestationfacture = async (id, contractprestationId, factureId) => {
    const budgetfonctionnel = await Budgetfonctionnel.findById(id);
    if (!budgetfonctionnel) {
        throw new Error('Budgetfonctionnel not found');
    }

    const contractprestation = budgetfonctionnel.contractprestations.id(contractprestationId);
    if (!contractprestation) {
        throw new Error('Contractprestation not found');
    }

    const factureIndex = contractprestation.factures.findIndex(facture => facture._id == factureId);
    if (factureIndex === -1) {
        throw new Error('Facture not found');
    }

    contractprestation.factures.splice(factureIndex, 1);
    await budgetfonctionnel.save();
    return contractprestation.factures;
};

//

module.exports={
    getAllBudgetfonctionnels,
    createBudgetfonctionnel,
    deleteBudgetfonctionnelById,
    updateBudgetfonctionnel,
    getBudgetfonctionnelById,
    getAllBudgetfonctionnelcontractprestations,
    createBudgetfonctionnelcontractprestation,
    getBudgetfonctionnelcontractprestationById,
    updateBudgetfonctionnelcontractprestation,
    deleteBudgetfonctionnelcontractprestation,
    getAllBudgetfonctionnelcontractprestationfactures,
    createBudgetfonctionnelcontractprestationfacture,
    getBudgetfonctionnelcontractprestationfactureById,
    updateBudgetfonctionnelcontractprestationfacture,
    deleteBudgetfonctionnelcontractprestationfacture,    
}