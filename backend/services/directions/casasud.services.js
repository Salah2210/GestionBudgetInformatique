const CasaSud=require("../../models/directions/CasaSud")


const getAllCasaSuds=async()=>{
return await CasaSud.find()
}

const createCasaSud=async(c)=>{
return await CasaSud.create(c)
}

const deleteCasaSudById=async(id)=>{
return await CasaSud.findByIdAndDelete(id)
}

const updateCasaSud=async(c)=>{
    return await CasaSud.findByIdAndUpdate(c._id,c)
}

const getCasaSudById=async(id)=>{
    return await CasaSud.findById(id)
}

module.exports={
 getAllCasaSuds,
 createCasaSud,
 deleteCasaSudById,
 updateCasaSud,
 getCasaSudById,

}