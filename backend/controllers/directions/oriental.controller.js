const orientalService=require("../../services/directions/oriental.services")

const addOriental=async(req,res)=>{
  try{
     await orientalService.createOriental(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getOrientals=async(req,res)=>{
  try{
     const orientals=await orientalService.getAllOrientals(req.body)
     res.status(200).json(orientals)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteOriental=async(req,res)=>{
   try{
   await orientalService.deleteOrientalById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateOriental=async(req,res)=>{
   try{
      const oriental=await orientalService.updateOriental(req.body)
      res.status(200).json(oriental)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getOriental=async(req,res)=>{
   try{
      const Oriental=await orientalService.getOrientalById(req.params.id)
      res.status(200).json(Oriental)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getOrientals,
  addOriental,
  deleteOriental,
  updateOriental,
  getOriental,
}