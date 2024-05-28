const express=require("express")
const router=express.Router()
const casanordController=require("../../controllers/directions/casanord.controller")

router.route("/").get(casanordController.getCasaNords)
                 .post(casanordController.addCasaNord)

router.route("/:id").delete(casanordController.deleteCasaNord)
                    .put(casanordController.updateCasaNord)
                    .get(casanordController.getCasaNord)



module.exports=router