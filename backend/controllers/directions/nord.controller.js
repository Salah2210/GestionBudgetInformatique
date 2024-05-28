const nordService=require("../../services/directions/nord.services")

const addNord=async(req,res)=>{
  try{
     await nordService.createNord(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getNords=async(req,res)=>{
  try{
     const nords=await nordService.getAllNords(req.body)
     res.status(200).json(nords)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteNord=async(req,res)=>{
   try{
   await nordService.deleteNordById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateNord=async(req,res)=>{
   try{
      const nord=await nordService.updateNord(req.body)
      res.status(200).json(nord)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getNord=async(req,res)=>{
   try{
      const Nord=await nordService.getNordById(req.params.id)
      res.status(200).json(Nord)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getNords,
  addNord,
  deleteNord,
  updateNord,
  getNord,
}