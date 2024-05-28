const express=require("express")
const router=express.Router()
const fesmeknesController=require("../../controllers/directions/fesmeknes.controller")

router.route("/").get(fesmeknesController.getFesMekness)
                 .post(fesmeknesController.addFesMeknes)

router.route("/:id").delete(fesmeknesController.deleteFesMeknes)
                    .put(fesmeknesController.updateFesMeknes)
                    .get(fesmeknesController.getFesMeknes)



module.exports=router