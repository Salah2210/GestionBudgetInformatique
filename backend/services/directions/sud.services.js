const Sud=require("../../models/directions/Sud")


const getAllSuds=async()=>{
return await Sud.find()
}

const createSud=async(cs)=>{
return await Sud.create(cs)
}

const deleteSudById=async(id)=>{
return await Sud.findByIdAndDelete(id)
}

const updateSud=async(cs)=>{
    return await Sud.findByIdAndUpdate(cs._id,cs)
}

const getSudById=async(id)=>{
    return await Sud.findById(id)
}

module.exports={
 getAllSuds,
 createSud,
 deleteSudById,
 updateSud,
 getSudById,

}