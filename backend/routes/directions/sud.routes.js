const express=require("express")
const router=express.Router()
const sudController=require("../../controllers/directions/sud.controller")

router.route("/").get(sudController.getSuds)
                 .post(sudController.addSud)

router.route("/:id").delete(sudController.deleteSud)
                    .put(sudController.updateSud)
                    .get(sudController.getSud)



module.exports=router