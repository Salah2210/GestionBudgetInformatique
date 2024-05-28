const express = require('express');
const router = express.Router();
const projectFactureController = require('../controllers/projectFactureController');

router.get('/:id/factures', projectFactureController.getAllProjectFactures);
router.post('/:id/factures', projectFactureController.createProjectFacture);
router.get('/:id/factures/:factureId', projectFactureController.getProjectFactureById);
router.put('/:id/factures/:factureId', projectFactureController.updateProjectFacture);
router.delete('/:id/factures/:factureId', projectFactureController.deleteProjectFacture);

module.exports = router;
