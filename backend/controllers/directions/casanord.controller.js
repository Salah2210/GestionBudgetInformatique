const casanordService=require("../../services/directions/casanord.services")

const addCasaNord=async(req,res)=>{
  try{
     await casanordService.createCasaNord(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getCasaNords=async(req,res)=>{
  try{
     const casanords=await casanordService.getAllCasaNords(req.body)
     res.status(200).json(casanords)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteCasaNord=async(req,res)=>{
   try{
   await casanordService.deleteCasaNordById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateCasaNord=async(req,res)=>{
   try{
      const casanord=await casanordService.updateCasaNord(req.body)
      res.status(200).json(casanord)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getCasaNord=async(req,res)=>{
   try{
      const CasaNord=await casanordService.getCasaNordById(req.params.id)
      res.status(200).json(CasaNord)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getCasaNords,
  addCasaNord,
  deleteCasaNord,
  updateCasaNord,
  getCasaNord,
}