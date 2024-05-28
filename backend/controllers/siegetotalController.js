const siegetotalService = require("../services/siegetotalService");
const siegTotal = require("../models/SiegeTotal");


const computeAndSaveSiegeTotalQuantity = async (req, res) => {
    try {
        const totals = await siegetotalService.computeAndSaveSiegeTotalQuantity();
        res.json(totals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getSiegeTotalQuantities = async (req, res) => {
    try {
        const totals = await siegTotal.find();
        res.json(totals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateSiegeTotalss=async(req,res)=>{
    try{
       const totalss=await siegetotalService.updateSiegeTotalss(req.body)
       res.status(200).json(totalss)
    }catch(error){
       res.status(500).json(error)
    }
  }
 
  const getSiegeTotals=async(req,res)=>{
    try{
       const totals=await siegetotalService.getSiegeTotalssById(req.params.id)
       res.status(200).json(totals)
    }catch(error){
       res.status(500).json(error)
    }
  }

module.exports = {
    computeAndSaveSiegeTotalQuantity,
    getSiegeTotalQuantities,
    updateSiegeTotalss,
    getSiegeTotals
};
