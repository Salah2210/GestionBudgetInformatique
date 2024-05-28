const rabattemaraService=require("../../services/directions/rabattemara.services")

const addRabatTemara=async(req,res)=>{
  try{
     await rabattemaraService.createRabatTemara(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getRabatTemaras=async(req,res)=>{
  try{
     const rabattemaras=await rabattemaraService.getAllRabatTemaras(req.body)
     res.status(200).json(rabattemaras)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteRabatTemara=async(req,res)=>{
   try{
   await rabattemaraService.deleteRabatTemaraById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateRabatTemara=async(req,res)=>{
   try{
      const rabattemara=await rabattemaraService.updateRabatTemara(req.body)
      res.status(200).json(rabattemara)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getRabatTemara=async(req,res)=>{
   try{
      const RabatTemara=await rabattemaraService.getRabatTemaraById(req.params.id)
      res.status(200).json(RabatTemara)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getRabatTemaras,
  addRabatTemara,
  deleteRabatTemara,
  updateRabatTemara,
  getRabatTemara,
}