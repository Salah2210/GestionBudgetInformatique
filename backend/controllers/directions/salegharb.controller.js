const salegharbService=require("../../services/directions/salegharb.services")

const addSaleGharb=async(req,res)=>{
  try{
     await salegharbService.createSaleGharb(req.body)
     res.status(200).json("branche bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getSaleGharbs=async(req,res)=>{
  try{
     const salegharbs=await salegharbService.getAllSaleGharbs(req.body)
     res.status(200).json(salegharbs)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteSaleGharb=async(req,res)=>{
   try{
   await salegharbService.deleteSaleGharbById(req.params.id)
   res.status(200).json("branche bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateSaleGharb=async(req,res)=>{
   try{
      const salegharb=await salegharbService.updateSaleGharb(req.body)
      res.status(200).json(salegharb)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getSaleGharb=async(req,res)=>{
   try{
      const SaleGharb=await salegharbService.getSaleGharbById(req.params.id)
      res.status(200).json(SaleGharb)
   }catch(error){
      res.status(500).json(error)
   }
 }

module.exports={
  getSaleGharbs,
  addSaleGharb,
  deleteSaleGharb,
  updateSaleGharb,
  getSaleGharb,
}