const Project = require('../models/Project');

exports.getAllProjectFactures = async (projectId) => {
    const project = await Project.findById(projectId);
    return project.factures;
};

exports.createProjectFacture = async (projectId, factureData) => {
    const project = await Project.findById(projectId);
    project.factures.push(factureData);
    await project.save();
    return project.factures;
};

exports.getProjectFactureById = async (projectId, factureId) => {
    const project = await Project.findById(projectId);
    const facture = project.factures.id(factureId);
    return facture;
};

exports.updateProjectFacture = async (projectId, factureId, factureData) => {
    const project = await Project.findById(projectId);
    const facture = project.factures.id(factureId);
    facture.set(factureData);
    await project.save();
    return facture;
};

exports.deleteProjectFacture = async (projectId, factureId) => {
    const project = await Project.findById(projectId);
    project.factures.id(factureId).remove();
    await project.save();
    return project.factures;
};
