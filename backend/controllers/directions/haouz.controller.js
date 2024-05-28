const haouzService=require("../../services/directions/haouz.services")

const addHaouz=async(req,res)=>{
  try{
     await haouzService.createHaouz(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getHaouzs=async(req,res)=>{
  try{
     const haouzs=await haouzService.getAllHaouzs(req.body)
     res.status(200).json(haouzs)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteHaouz=async(req,res)=>{
   try{
   await haouzService.deleteHaouzById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateHaouz=async(req,res)=>{
   try{
      const haouz=await haouzService.updateHaouz(req.body)
      res.status(200).json(haouz)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getHaouz=async(req,res)=>{
   try{
      const Haouz=await haouzService.getHaouzById(req.params.id)
      res.status(200).json(Haouz)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getHaouzs,
  addHaouz,
  deleteHaouz,
  updateHaouz,
  getHaouz,
}