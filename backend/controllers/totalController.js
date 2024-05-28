/*// controllers/totalController.js
const totalService = require('../services/totalService');

async function calculateTotal(req, res) {
    try {
        await totalService.calculateTotal();
        res.status(200).json({ message: 'Total calculated and saved successfully' });
    } catch (error) {
        console.error('Error calculating total:', error);
        res.status(500).json({ error: 'An error occurred while calculating total' });
    }
}

module.exports = {
    calculateTotal
};
*//*
const totalService = require("../services/totalService");

const getTotalQuantity = async (req, res) => {
    try {
        const totals = await totalService.computeAndSaveTotalQuantity();
        res.json(totals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getTotalQuantity
};
*/
const totalService = require("../services/totalService");

const getTotalQuantity = async (req, res) => {
    try {
        const totals = await totalService.computeAndSaveTotalQuantity();
        res.json(totals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
const getTotalss=async(req,res)=>{
    try{
       const totalss = await totalService.getAllTotalss(req.body)
       res.status(200).json(totalss)
    }catch(error){
       res.status(500).json(error)
    }
}
const updateTotalss=async(req,res)=>{
    try{
       const totalss=await totalService.updateTotalss(req.body)
       res.status(200).json(totalss)
    }catch(error){
       res.status(500).json(error)
    }
  }
 
  const getTotals=async(req,res)=>{
    try{
       const totals=await totalService.getTotalssById(req.params.id)
       res.status(200).json(totals)
    }catch(error){
       res.status(500).json(error)
    }
  }

module.exports = {
    getTotalQuantity,
    getTotalss,
    updateTotalss,
    getTotals
};
