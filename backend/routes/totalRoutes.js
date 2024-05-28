/*// routes/totalRoutes.js
const express = require('express');
const router = express.Router();
const totalController = require('../controllers/totalController');

router.post('/calculate', totalController.calculateTotal);

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const totalController = require("../controllers/totalController");

router.get("/", totalController.getTotalQuantity);
router.get("/a", totalController.getTotalss);
router.route("/:id").put(totalController.updateTotalss)
                    .get(totalController.getTotals)

module.exports = router;
