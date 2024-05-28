const siegeService=require("../services/siege.services")

const addSiege=async(req,res)=>{
  try{
     await siegeService.createSiege(req.body)
     res.status(200).json("bien ajoute")
  }catch(error){
     res.status(500).json(error)
  }
}

const getSieges=async(req,res)=>{
  try{
     const sieges=await siegeService.getAllSieges(req.body)
     res.status(200).json(sieges)
  }catch(error){
     res.status(500).json(error)
  }
}

const deleteSiege=async(req,res)=>{
   try{
   await siegeService.deleteSiegeById(req.params.id)
   res.status(200).json("bien supprimé")
   }catch(error){
   res.status(500).json(error)
   }
}

const updateSiege=async(req,res)=>{
   try{
      const siege=await siegeService.updateSiege(req.body)
      res.status(200).json(siege)
   }catch(error){
      res.status(500).json(error)
   }
 }

 const getSiege=async(req,res)=>{
   try{
      const Siege=await siegeService.getSiegeById(req.params.id)
      res.status(200).json(Siege)
   }catch(error){
      res.status(500).json(error)
   }
 }
module.exports={
  getSieges,
  addSiege,
  deleteSiege,
  updateSiege,
  getSiege,
}