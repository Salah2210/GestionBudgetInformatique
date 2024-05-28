const CasaNord=require("../../models/directions/CasaNord")


const getAllCasaNords=async()=>{
return await CasaNord.find()
}

const createCasaNord=async(c)=>{
return await CasaNord.save(c)
}

const deleteCasaNordById=async(id)=>{
return await CasaNord.findByIdAndDelete(id)
}

const updateCasaNord=async(c)=>{
    return await CasaNord.findByIdAndUpdate(c._id,c)
}

const getCasaNordById=async(id)=>{
    return await CasaNord.findById(id)
}

module.exports={
 getAllCasaNords,
 createCasaNord,
 deleteCasaNordById,
 updateCasaNord,
 getCasaNordById,

}