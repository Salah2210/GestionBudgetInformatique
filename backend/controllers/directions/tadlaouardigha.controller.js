const tadlaouardighaService=require("../../services/directions/tadlaouardigha.services")

const addTadlaOuardigha=async(req,res)=>{
  try{
     await tadlaouardighaService.createTadlaOuardigha(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getTadlaOuardighas=async(req,res)=>{
  try{
     const tadlaouardighas=await tadlaouardighaService.getAllTadlaOuardighas(req.body)
     res.status(200).json(tadlaouardighas)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteTadlaOuardigha=async(req,res)=>{
   try{
   await tadlaouardighaService.deleteTadlaOuardighaById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateTadlaOuardigha=async(req,res)=>{
   try{
      const tadlaouardigha=await tadlaouardighaService.updateTadlaOuardigha(req.body)
      res.status(200).json(tadlaouardigha)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getTadlaOuardigha=async(req,res)=>{
   try{
      const TadlaOuardigha=await tadlaouardighaService.getTadlaOuardighaById(req.params.id)
      res.status(200).json(TadlaOuardigha)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getTadlaOuardighas,
  addTadlaOuardigha,
  deleteTadlaOuardigha,
  updateTadlaOuardigha,
  getTadlaOuardigha,
}