const express=require("express")
const router=express.Router()
const casasudController=require("../../controllers/directions/casasud.controller")

router.route("/").get(casasudController.getCasaSuds)
                 .post(casasudController.addCasaSud)

router.route("/:id").delete(casasudController.deleteCasaSud)
                    .put(casasudController.updateCasaSud)
                    .get(casasudController.getCasaSud)



module.exports=router