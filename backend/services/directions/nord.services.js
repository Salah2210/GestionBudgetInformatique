const Nord=require("../../models/directions/Nord")


const getAllNords=async()=>{
return await Nord.find()
}

const createNord=async(n)=>{
return await Nord.create(n)
}

const deleteNordById=async(id)=>{
return await Nord.findByIdAndDelete(id)
}

const updateNord=async(n)=>{
    return await Nord.findByIdAndUpdate(n._id,n)
}

const getNordById=async(id)=>{
    return await Nord.findById(id)
}

module.exports={
 getAllNords,
 createNord,
 deleteNordById,
 updateNord,
 getNordById,

}