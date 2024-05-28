const sudService=require("../../services/directions/sud.services")

const addSud=async(req,res)=>{
  try{
     await sudService.createSud(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getSuds=async(req,res)=>{
  try{
     const suds=await sudService.getAllSuds(req.body)
     res.status(200).json(suds)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteSud=async(req,res)=>{
   try{
   await sudService.deleteSudById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateSud=async(req,res)=>{
   try{
      const sud=await sudService.updateSud(req.body)
      res.status(200).json(sud)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getSud=async(req,res)=>{
   try{
      const Sud=await sudService.getSudById(req.params.id)
      res.status(200).json(Sud)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getSuds,
  addSud,
  deleteSud,
  updateSud,
  getSud,
}