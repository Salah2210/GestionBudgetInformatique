const express=require("express")
const router=express.Router()
const doukkalaabdaController=require("../../controllers/directions/doukkalaabda.controller")

router.route("/").get(doukkalaabdaController.getDoukkalaAbdas)
                 .post(doukkalaabdaController.addDoukkalaAbda)

router.route("/:id").delete(doukkalaabdaController.deleteDoukkalaAbda)
                    .put(doukkalaabdaController.updateDoukkalaAbda)
                    .get(doukkalaabdaController.getDoukkalaAbda)



module.exports=router