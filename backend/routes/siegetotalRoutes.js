const express = require("express");
const router = express.Router();
const siegetotalController = require("../controllers/siegetotalController");

router.post("/compute", siegetotalController.computeAndSaveSiegeTotalQuantity);
router.get("/computett", siegetotalController.getSiegeTotalQuantities); // Add this route
router.route("/:id").put(siegetotalController.updateSiegeTotalss)
                    .get(siegetotalController.getSiegeTotals)

module.exports = router;
