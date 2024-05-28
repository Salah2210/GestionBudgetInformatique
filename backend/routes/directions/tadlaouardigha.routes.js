const express=require("express")
const router=express.Router()
const tadlaouardighaController=require("../../controllers/directions/tadlaouardigha.controller")

router.route("/").get(tadlaouardighaController.getTadlaOuardighas)
                 .post(tadlaouardighaController.addTadlaOuardigha)

router.route("/:id").delete(tadlaouardighaController.deleteTadlaOuardigha)
                    .put(tadlaouardighaController.updateTadlaOuardigha)
                    .get(tadlaouardighaController.getTadlaOuardigha)



module.exports=router