const projectService= require("../services/project.services")

const addProject=async(req,res)=>{
  try{
     await projectService.createProject(req.body)
     res.status(200).json("project bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getProjects=async(req,res)=>{
  try{
     const projects = await projectService.getAllProjects(req.body)
     res.status(200).json(projects)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteProject=async(req,res)=>{
   try{
   await projectService.deleteProjectById(req.params.id)
   res.status(200).json("Project bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

/*const updateProject=async(req,res)=>{
   try{
      const project=await projectService.updateProject(req.body)
      res.status(200).json(project)
   }catch(error){
      res.status(500).json(error)
   }
 }*/
 const updateProject = async (req, res) => {
   const projectData = req.body;

   try {
       const updatedProject = await await projectService.updateProject(projectData);
       res.status(200).json(updatedProject);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
};

 /*const updateProject = async (req, res) => {
   try {
      const { id } = req.params; // Extract project ID from request parameters
      const updatedProjectData = req.body; // Get updated project data from request body
      const project = await projectService.updateProject(id, updatedProjectData);
      res.status(200).json(project);
   } catch (error) {
      res.status(500).json(error);
   }
}*/


 const getProject=async(req,res)=>{
   try{
      const Project=await projectService.getProjectById(req.params.id)
      res.status(200).json(Project)
   }catch(error){
      res.status(500).json(error)
   }
 }

//
const getAllProjectFactures = async (req, res) => {
   const { projectId } = req.params
   try {
       const factures = await projectService.getAllProjectFactures(projectId)
       res.json(factures)
   } catch (error) {
       res.status(500).json({ error: error.message })
   }
}

const createProjectFacture = async (req, res) => {
   const { id } = req.params
   const factureData = req.body
   try {
       const factures = await projectService.createProjectFacture(id, factureData)
       res.status(201).json(factures)
   } catch (error)/* {
      if (error.message === "A facture with this name already exists in the project.") {
          // Handle the specific error when a facture name is not unique within the project
          res.status(400).json({ error: error.message });
      } else */{
      console.error("Error creating project facture:", error)
      res.status(500).json({ error: "Failed to create project facture" })
   }
   }
   

const getProjectFactureById = async (req, res) => {
   const { id, factureId } = req.params
   try {
       const facture = await projectService.getProjectFactureById(id, factureId)
       res.json(facture)
   } catch (error) {
       res.status(500).json({ error: error.message })
   }
}

const updateProjectFacture = async (req, res) => {
   const { id, factureId } = req.params
   const factureData = req.body
   try {
       const updatedFacture = await projectService.updateProjectFacture(id, factureId, factureData)
       res.json(updatedFacture)
   } catch (error) {
       res.status(500).json({ error: error.message })
   }
}

/*const deleteProjectFacture = async (req, res) => {
   const { id, factureId } = req.params
   try {
       const factures = await projectService.deleteProjectFacture(id, factureId)
       res.json(factures)
   } catch (error) {
       res.status(500).json({ error: error.message })
   }
}*/
const deleteProjectFacture = async (req, res) => {
   const { id, factureId } = req.params;
   try {
       const factures = await projectService.deleteProjectFacture(id, factureId);
       res.json({ success: true, factures });
   } catch (error) {
       res.status(500).json({ success: false, error: error.message });
   }
};
//
const findFactureByName = async (req, res) => {
   const { id } = req.params;
   const { name } = req.query;
   try {
       const facture = await projectService.findFactureByName(id, name);
       res.status(200).json(facture);
   } catch (error) {
       res.status(500).json(error.message);
   }
}




module.exports={
  getProjects,
  addProject,
  deleteProject,
  updateProject,
  getProject,
  getAllProjectFactures,
  createProjectFacture,
  getProjectFactureById,
  updateProjectFacture,
  deleteProjectFacture,

  findFactureByName

}