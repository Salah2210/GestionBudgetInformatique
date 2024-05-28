const express=require("express")
const router=express.Router()
const siegeController=require("../controllers/siege.controller")

router.route("/").get(siegeController.getSieges)
                 .post(siegeController.addSiege)

router.route("/:id").delete(siegeController.deleteSiege)
                    .put(siegeController.updateSiege)
                    .get(siegeController.getSiege)



module.exports=router