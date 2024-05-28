const { Project, ProjectFacture } = require('../models/Project');


const getAllProjects=async()=>{
return await Project.find()
}

const createProject=async(p)=>{
// Check if a project with the same name already exists
const existingProject = await Project.findOne({ name: p.name });

if (existingProject) {
    // Throw an error or handle it as needed
    throw new Error('A project with this name already exists. Please choose a different name.');
}

// If no project with the same name exists, create a new project

return await Project.create(p)
}

const deleteProjectById=async(id)=>{
return await Project.findByIdAndDelete(id)
}

/*const updateProject=async(p)=>{
   return await Project.findByIdAndUpdate(p._id,p)  
}*/
const updateProject = async (p) => {
    // Check if a project with the same name already exists (excluding the current project)
    const existingProject = await Project.findOne({ name: p.name });

    if (existingProject && existingProject._id.toString() !== p._id.toString()) {
        // Throw an error or handle it as needed
        throw new Error('A project with this name already exists. Please choose a different name.');
    }

    // If no other project with the same name exists, proceed with the update
    return await Project.findByIdAndUpdate(p._id, p, { new: true });
};

/*
const updateProject = async (id, updatedProjectData) => {
    try {
        // Find the project by id
        let project = await Project.findById(id);
        if (!project) {
            throw new Error('Project not found');
        }

        // Update initialBudget if it's present in the update data
        if (updatedProjectData.initialBudget !== undefined) {
            project.initialBudget = updatedProjectData.initialBudget;
        }

        // Recalculate remainingBudget
        const totalFactureAmount = project.factures.reduce((total, facture) => total + facture.amount, 0);
        project.remainingBudget = project.initialBudget - totalFactureAmount;

        // Save the updated project
        project = await project.save();

        return project;
    } catch (error) {
        throw new Error(`Error updating project: ${error.message}`);
    }
};*/


const getProjectById=async(id)=>{
    return await Project.findById(id)
}

//

const getAllProjectFactures = async (id) => {
    const project = await Project.findById(id);
    return project.factures;
};

/*const createProjectFacture = async (projectId, factureData) => {
    const project = await Project.findById(projectId);
    project.factures.push(factureData);
    await project.save();
    return project.factures;
};*/
/*
const createProjectFacture = async (projectId, factureData) => {
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            throw new Error("Project not found");
        }

        // Create a new instance of ProjectFacture using factureData
        const newFacture = new ProjectFacture(factureData);

        // Push the new facture to the project's factures array
        project.factures.push(newFacture);

        // Save the project
        await project.save();

        // Return the newly added facture
        return newFacture;
    } catch (error) {
        throw new Error(`Error creating project facture: ${error.message}`);
    }
}
*/
const createProjectFacture = async (id, factureData) => {
    const project = await Project.findById(id);
    if (!project) {
        throw new Error("Project not found");
    }

//
 // Check if a facture with the same name already exists in the project
        const factureExists = project.factures.some(facture => facture.name === factureData.name);
        if (factureExists) {
        throw new Error("A facture with this name already exists in the project.");
        }
//

    const newFacture = { ...factureData }; // Assuming factureData is a valid object
    project.factures.push(newFacture);
    await project.save();
    return newFacture;
};


const getProjectFactureById = async (id, factureId) => {
    const project = await Project.findById(id)
    const facture = project.factures.id(factureId)
    return facture
};

const updateProjectFacture = async (id, factureId, factureData) => {
    const project = await Project.findById(id)
    const facture = project.factures.id(factureId)
    
    const factureExists = project.factures.some(facture => facture.name === factureData.name);
    if (factureExists) {
    throw new Error("A facture with this name already exists in the project.");
    }

    facture.set(factureData)
    await project.save()
    return facture
};

/*const deleteProjectFacture = async (id, factureId) => {
    const project = await Project.findById(id)
    project.factures.id(factureId).remove()
    await project.save()
    return project.factures
}*/
const deleteProjectFacture = async (id, factureId) => {
    const project = await Project.findById(id);
    if (!project) {
        throw new Error('Project not found');
    }

    // Find the index of the facture in the factures array
    const factureIndex = project.factures.findIndex(facture => facture._id == factureId);
    if (factureIndex === -1) {
        throw new Error('Facture not found');
    }

    // Remove the facture from the factures array
    project.factures.splice(factureIndex, 1);

    await project.save();
    return project.factures;
};
//
const findFactureByName = async (id, name) => {
    const project = await Project.findById(id);
    if (!project) {
        throw new Error("Project not found");
    }

    const facture = project.factures.find(facture => facture.name === name);
    return facture || null;
};



module.exports={
 getAllProjects,
 createProject,
 deleteProjectById,
 updateProject,
 getProjectById,
 getAllProjectFactures,
 getProjectFactureById,
 createProjectFacture,
 deleteProjectFacture,
 updateProjectFacture,
 findFactureByName

}