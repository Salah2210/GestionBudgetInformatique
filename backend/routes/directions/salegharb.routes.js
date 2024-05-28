const express=require("express")
const router=express.Router()
const salegharbController=require("../../controllers/directions/salegharb.controller")

router.route("/").get(salegharbController.getSaleGharbs)
                 .post(salegharbController.addSaleGharb)

router.route("/:id").delete(salegharbController.deleteSaleGharb)
                    .put(salegharbController.updateSaleGharb)
                    .get(salegharbController.getSaleGharb)



module.exports=router