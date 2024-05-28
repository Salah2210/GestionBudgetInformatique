const projectFactureService = require('../services/projectFactureService');

exports.getAllProjectFactures = async (req, res) => {
    const { projectId } = req.params;
    try {
        const factures = await projectFactureService.getAllProjectFactures(projectId);
        res.json(factures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createProjectFacture = async (req, res) => {
    const { projectId } = req.params;
    const factureData = req.body;
    try {
        const factures = await projectFactureService.createProjectFacture(projectId, factureData);
        res.status(201).json(factures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProjectFactureById = async (req, res) => {
    const { projectId, factureId } = req.params;
    try {
        const facture = await projectFactureService.getProjectFactureById(projectId, factureId);
        res.json(facture);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProjectFacture = async (req, res) => {
    const { projectId, factureId } = req.params;
    const factureData = req.body;
    try {
        const updatedFacture = await projectFactureService.updateProjectFacture(projectId, factureId, factureData);
        res.json(updatedFacture);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProjectFacture = async (req, res) => {
    const { projectId, factureId } = req.params;
    try {
        const factures = await projectFactureService.deleteProjectFacture(projectId, factureId);
        res.json(factures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
