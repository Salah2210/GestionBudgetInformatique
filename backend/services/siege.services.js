const Siege=require("../models/Siege")


const getAllSieges=async()=>{
return await Siege.find()
}

const createSiege=async(s)=>{
return await Siege.create(s)
}

const deleteSiegeById=async(id)=>{
return await Siege.findByIdAndDelete(id)
}

const updateSiege=async(s)=>{
    return await Siege.findByIdAndUpdate(s._id,s)
}

const getSiegeById=async(id)=>{
    return await Siege.findById(id)
}

module.exports={
 getAllSieges,
 createSiege,
 deleteSiegeById,
 updateSiege,
 getSiegeById,

}