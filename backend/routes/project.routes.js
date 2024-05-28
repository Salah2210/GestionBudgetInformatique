const express=require("express")
const router=express.Router()
const projectController=require("../controllers/project.controller")

router.route("/").get(projectController.getProjects)
                 .post(projectController.addProject)

router.route("/:id").delete(projectController.deleteProject)
                    .put(projectController.updateProject)
                    .get(projectController.getProject)

//
router.route("/:id/factures").get(projectController.getAllProjectFactures)
                            .post(projectController.createProjectFacture)
router.route("/:id/factures/:factureId").get(projectController.getProjectFactureById)
                                        .put(projectController.updateProjectFacture)
                                        .delete(projectController.deleteProjectFacture)
//
router.route("/:id/factures/search")
    .get(projectController.findFactureByName);

module.exports=router