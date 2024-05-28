const casasudService=require("../../services/directions/casasud.services")

const addCasaSud=async(req,res)=>{
  try{
     await casasudService.createCasaSud(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getCasaSuds=async(req,res)=>{
  try{
     const casasuds=await casasudService.getAllCasaSuds(req.body)
     res.status(200).json(casasuds)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteCasaSud=async(req,res)=>{
   try{
   await casasudService.deleteCasaSudById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateCasaSud=async(req,res)=>{
   try{
      const casasud=await casasudService.updateCasaSud(req.body)
      res.status(200).json(casasud)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getCasaSud=async(req,res)=>{
   try{
      const CasaSud=await casasudService.getCasaSudById(req.params.id)
      res.status(200).json(CasaSud)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getCasaSuds,
  addCasaSud,
  deleteCasaSud,
  updateCasaSud,
  getCasaSud,
}