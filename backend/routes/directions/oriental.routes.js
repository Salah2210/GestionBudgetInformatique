const express=require("express")
const router=express.Router()
const orientalController=require("../../controllers/directions/oriental.controller")

router.route("/").get(orientalController.getOrientals)
                 .post(orientalController.addOriental)

router.route("/:id").delete(orientalController.deleteOriental)
                    .put(orientalController.updateOriental)
                    .get(orientalController.getOriental)



module.exports=router