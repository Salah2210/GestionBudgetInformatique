const express=require("express")
const router=express.Router()
const rabattemaraController=require("../../controllers/directions/rabattemara.controller")

router.route("/").get(rabattemaraController.getRabatTemaras)
                 .post(rabattemaraController.addRabatTemara)

router.route("/:id").delete(rabattemaraController.deleteRabatTemara)
                    .put(rabattemaraController.updateRabatTemara)
                    .get(rabattemaraController.getRabatTemara)



module.exports=router