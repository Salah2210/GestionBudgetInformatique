const TadlaOuardigha=require("../../models/directions/TadlaOuardigha")


const getAllTadlaOuardighas=async()=>{
return await TadlaOuardigha.find()
}

const createTadlaOuardigha=async(t)=>{
return await TadlaOuardigha.create(t)
}

const deleteTadlaOuardighaById=async(id)=>{
return await TadlaOuardigha.findByIdAndDelete(id)
}

const updateTadlaOuardigha=async(t)=>{
    return await TadlaOuardigha.findByIdAndUpdate(t._id,t)
}

const getTadlaOuardighaById=async(id)=>{
    return await TadlaOuardigha.findById(id)
}

module.exports={
 getAllTadlaOuardighas,
 createTadlaOuardigha,
 deleteTadlaOuardighaById,
 updateTadlaOuardigha,
 getTadlaOuardighaById,

}