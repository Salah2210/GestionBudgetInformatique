const express=require("express")
const router=express.Router()
const budgetfonctionnelController=require("../controllers/budgetfonctionnel.controller")

router.route("/").get(budgetfonctionnelController.getBudgetfonctionnels)
                 .post(budgetfonctionnelController.addBudgetfonctionnel)

router.route("/:id").delete(budgetfonctionnelController.deleteBudgetfonctionnel)
                    .put(budgetfonctionnelController.updateBudgetfonctionnel)
                    .get(budgetfonctionnelController.getBudgetfonctionnel)

router.route("/:id/contractprestations").get(budgetfonctionnelController.getAllBudgetfonctionnelcontractprestations)
                                         .post(budgetfonctionnelController.createBudgetfonctionnelcontractprestation)
router.route("/:id/contractprestations/:contractprestationId").get(budgetfonctionnelController.getBudgetfonctionnelcontractprestationById)
                                                               .put(budgetfonctionnelController.updateBudgetfonctionnelcontractprestation)
                                                                .delete(budgetfonctionnelController.deleteBudgetfonctionnelcontractprestation)
//
router.route("/:id/contractprestations/:contractprestationId/factures").get(budgetfonctionnelController.getAllFactures)
                                                                        .post(budgetfonctionnelController.createFacture);

router.route("/:id/contractprestations/:contractprestationId/factures/:factureId").get(budgetfonctionnelController.getFactureById)
                                                                                .put(budgetfonctionnelController.updateFacture)
                                                                                .delete(budgetfonctionnelController.deleteFacture);

module.exports=router