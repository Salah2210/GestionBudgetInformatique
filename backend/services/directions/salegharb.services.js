const SaleGharb=require("../../models/directions/SaleGharb")


const getAllSaleGharbs=async()=>{
return await SaleGharb.find()
}

const createSaleGharb=async(s)=>{
return await SaleGharb.create(s)
}

const deleteSaleGharbById=async(id)=>{
return await SaleGharb.findByIdAndDelete(id)
}

const updateSaleGharb=async(s)=>{
    return await SaleGharb.findByIdAndUpdate(s._id,s)
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