const express=require("express")
const router=express.Router()
const nordController=require("../../controllers/directions/nord.controller")

router.route("/").get(nordController.getNords)
                 .post(nordController.addNord)

router.route("/:id").delete(nordController.deleteNord)
                    .put(nordController.updateNord)
                    .get(nordController.getNord)



module.exports=router