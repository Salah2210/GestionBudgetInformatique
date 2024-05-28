const Oriental=require("../../models/directions/Oriental")


const getAllOrientals=async()=>{
return await Oriental.find()
}

const createOriental=async(o)=>{
return await Oriental.create(o)
}

const deleteOrientalById=async(id)=>{
return await Oriental.findByIdAndDelete(id)
}

const updateOriental=async(o)=>{
    return await Oriental.findByIdAndUpdate(o._id,o)
}

const getOrientalById=async(id)=>{
    return await Oriental.findById(id)
}

module.exports={
 getAllOrientals,
 createOriental,
 deleteOrientalById,
 updateOriental,
 getOrientalById,

}