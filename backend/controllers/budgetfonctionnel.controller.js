const budgetfonctionnelService=require("../services/budgetfonctionnel.services")


const addBudgetfonctionnel=async(req,res)=>{
  try{
     await budgetfonctionnelService.createBudgetfonctionnel(req.body)
     res.status(200).json("budget bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getBudgetfonctionnels=async(req,res)=>{
  try{
     const budgetfonctionnels=await budgetfonctionnelService.getAllBudgetfonctionnels(req.body)
     res.status(200).json(budgetfonctionnels)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteBudgetfonctionnel=async(req,res)=>{
   try{
   await budgetfonctionnelService.deleteBudgetfonctionnelById(req.params.id)
   res.status(200).json("Budget fonctionnel bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateBudgetfonctionnel=async(req,res)=>{
   try{
      const budgetfonctionnel=await budgetfonctionnelService.updateBudgetfonctionnel(req.body)
      res.status(200).json(budgetfonctionnel)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getBudgetfonctionnel=async(req,res)=>{
   try{
      const Budgetfonctionnel=await budgetfonctionnelService.getBudgetfonctionnelById(req.params.id)
      res.status(200).json(Budgetfonctionnel)
   }catch(error){
      res.status(500).json(error)
   }
 }

/*
*/

const getAllBudgetfonctionnelcontractprestations = async (req, res) => {
   const { budgetfonctionnelId } = req.params
   try {
       const contractprestations = await budgetfonctionnelService.getAllBudgetfonctionnelcontractprestations(budgetfonctionnelId)
       res.json(contractprestations)
   } catch (error) {
       res.status(500).json({ error: error.message })
   }
}

const createBudgetfonctionnelcontractprestation= async (req, res) => {
   const { id } = req.params
   const contractprestationData = req.body
   try {
       const contractprestations = await budgetfonctionnelService.createBudgetfonctionnelcontractprestation(id, contractprestationData)
       res.status(201).json(contractprestations)
   } catch (error) {
      console.error("Error creating contrat ou prestation budget fonctionnement:", error)
      res.status(500).json({ error: "Failed to create contrat ou prestation budget fonctionnement" })
   }
}
//

//
const getBudgetfonctionnelcontractprestationById = async (req, res) => {
   const { id, contractprestationId } = req.params
   try {
       const contractprestation = await budgetfonctionnelService.getBudgetfonctionnelcontractprestationById(id, contractprestationId)
       res.json(contractprestation)
   } catch (error) {
       res.status(500).json({ error: error.message })
   }
}

const updateBudgetfonctionnelcontractprestation = async (req, res) => {
   const { id, contractprestationId } = req.params
   const contractprestationData = req.body
   try {
       const updatedContractprestation = await budgetfonctionnelService.updateBudgetfonctionnelcontractprestation(id, contractprestationId, contractprestationData)
       res.json(updatedContractprestation)
   } catch (error) {
       res.status(500).json({ error: error.message })
   }
}


const deleteBudgetfonctionnelcontractprestation = async (req, res) => {
   const { id, contractprestationId } = req.params;
   try {
       const contractprestations = await budgetfonctionnelService.deleteBudgetfonctionnelcontractprestation(id, contractprestationId);
       res.json({ success: true, contractprestations });
   } catch (error) {
       res.status(500).json({ success: false, error: error.message });
   }
};
//

const getAllFactures = async (req, res, next) => {
   try {
       const { budgetfonctionnelId, contractprestationId } = req.params;
       const factures = await budgetfonctionnelService.getAllBudgetfonctionnelcontractprestationfactures(budgetfonctionnelId, contractprestationId);
       res.json(factures);
   } catch (error) {
       next(error);
   }
};

const createFacture = async (req, res, next) => {
   try {
       const { id, contractprestationId } = req.params;
       const factureData = req.body;
       const facture = await budgetfonctionnelService.createBudgetfonctionnelcontractprestationfacture(id, contractprestationId, factureData);
       res.status(201).json(facture);
   } catch (error) {
       next(error);
   }
};

const getFactureById = async (req, res, next) => {
   try {
       const { id, contractprestationId, factureId } = req.params;
       const facture = await budgetfonctionnelService.getBudgetfonctionnelcontractprestationfactureById(id, contractprestationId, factureId);
       res.json(facture);
   } catch (error) {
       next(error);
   }
};

const updateFacture = async (req, res, next) => {
   try {
       const { id, contractprestationId, factureId } = req.params;
       const factureData = req.body;
       const updatedFacture = await budgetfonctionnelService.updateBudgetfonctionnelcontractprestationfacture(id, contractprestationId, factureId, factureData);
       res.json(updatedFacture);
   } catch (error) {
       next(error);
   }
};

const deleteFacture = async (req, res, next) => {
   try {
       const { id, contractprestationId, factureId } = req.params;
       await budgetfonctionnelService.deleteBudgetfonctionnelcontractprestationfacture(id, contractprestationId, factureId);
       res.sendStatus(204);
   } catch (error) {
       next(error);
   }
};


//

module.exports={
   getBudgetfonctionnels,
   addBudgetfonctionnel,
   deleteBudgetfonctionnel,
   updateBudgetfonctionnel,
   getBudgetfonctionnel,
   getAllBudgetfonctionnelcontractprestations,
   createBudgetfonctionnelcontractprestation,
   getBudgetfonctionnelcontractprestationById,
   updateBudgetfonctionnelcontractprestation,
   deleteBudgetfonctionnelcontractprestation, 
   getAllFactures,
   createFacture,
   getFactureById,
   updateFacture,
   deleteFacture,
 }

