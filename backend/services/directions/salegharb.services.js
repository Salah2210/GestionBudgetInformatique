const SaleGharb=require("../../models/directions/SaleGharb")
const { notifyClients } = require("../websocketServer");


const getAllSaleGharbs=async()=>{
return await SaleGharb.find()
}

/*const createSaleGharb=async(s)=>{
return await SaleGharb.create(s)
}

const updateSaleGharb=async(s)=>{
    return await SaleGharb.findByIdAndUpdate(s._id,s)
}*/
const createSaleGharb = async (s) => {
    const newSaleGharb = await SaleGharb.create(s);
    notifyClients({ type: 'create_SaleGharb', data: newSaleGharb });

    return newSaleGharb;
}
  
const updateSaleGharb = async (s) => {
    const updatedSaleGharb = await SaleGharb.findByIdAndUpdate(s._id, s, { new: true });
    notifyClients({ type: 'update_SaleGharb', data: updatedSaleGharb });

    return updatedSaleGharb;
}
const deleteSaleGharbById=async(id)=>{
return await SaleGharb.findByIdAndDelete(id)
}



const getSaleGharbById=async(id)=>{
    return await SaleGharb.findById(id)
}

module.exports={
 getAllSaleGharbs,
 createSaleGharb,
 deleteSaleGharbById,
 updateSaleGharb,
 getSaleGharbById,

}