/*const totalService=require("../../services/directions/total.services")

const addTotal=async(req,res)=>{
  try{
     await totalService.createTotal(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getTotals=async(req,res)=>{
  try{
     const totals=await totalService.getAllTotals(req.body)
     res.status(200).json(totals)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteTotal=async(req,res)=>{
   try{
   await totalService.deleteTotalById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateTotal=async(req,res)=>{
   try{
      const total=await totalService.updateTotal(req.body)
      res.status(200).json(total)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getTotal=async(req,res)=>{
   try{
      const Total=await totalService.getTotalById(req.params.id)
      res.status(200).json(Total)
   }catch(error){
      res.status(500).json(error)
   }
 }


module.exports={
  getTotals,
  addTotal,
  deleteTotal,
  updateTotal,
  getTotal,
}*/