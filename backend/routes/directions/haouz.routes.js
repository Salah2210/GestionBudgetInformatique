const express=require("express")
const router=express.Router()
const haouzController=require("../../controllers/directions/haouz.controller")

router.route("/").get(haouzController.getHaouzs)
                 .post(haouzController.addHaouz)

router.route("/:id").delete(haouzController.deleteHaouz)
                    .put(haouzController.updateHaouz)
                    .get(haouzController.getHaouz)



module.exports=router