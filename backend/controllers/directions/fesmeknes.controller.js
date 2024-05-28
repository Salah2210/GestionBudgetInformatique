const fesmeknesService=require("../../services/directions/fesmeknes.services")

const addFesMeknes=async(req,res)=>{
  try{
     await fesmeknesService.createFesMeknes(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getFesMekness=async(req,res)=>{
  try{
     const fesmekness=await fesmeknesService.getAllFesMekness(req.body)
     res.status(200).json(fesmekness)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteFesMeknes=async(req,res)=>{
   try{
   await fesmeknesService.deleteFesMeknesById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateFesMeknes=async(req,res)=>{
   try{
      const fesmeknes=await fesmeknesService.updateFesMeknes(req.body)
      res.status(200).json(fesmeknes)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getFesMeknes=async(req,res)=>{
   try{
      const FesMeknes=await fesmeknesService.getFesMeknesById(req.params.id)
      res.status(200).json(FesMeknes)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getFesMekness,
  addFesMeknes,
  deleteFesMeknes,
  updateFesMeknes,
  getFesMeknes,
}