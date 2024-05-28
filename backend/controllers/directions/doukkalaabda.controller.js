const doukkalaabdaService=require("../../services/directions/doukkalaabda.services")

const addDoukkalaAbda=async(req,res)=>{
  try{
     await doukkalaabdaService.createDoukkalaAbda(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getDoukkalaAbdas=async(req,res)=>{
  try{
     const doukkalaabdas=await doukkalaabdaService.getAllDoukkalaAbdas(req.body)
     res.status(200).json(doukkalaabdas)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteDoukkalaAbda=async(req,res)=>{
   try{
   await doukkalaabdaService.deleteDoukkalaAbdaById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateDoukkalaAbda=async(req,res)=>{
   try{
      const doukkalaabda=await doukkalaabdaService.updateDoukkalaAbda(req.body)
      res.status(200).json(doukkalaabda)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getDoukkalaAbda=async(req,res)=>{
   try{
      const DoukkalaAbda=await doukkalaabdaService.getDoukkalaAbdaById(req.params.id)
      res.status(200).json(DoukkalaAbda)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getDoukkalaAbdas,
  addDoukkalaAbda,
  deleteDoukkalaAbda,
  updateDoukkalaAbda,
  getDoukkalaAbda,
}