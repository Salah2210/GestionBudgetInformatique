const FesMeknes=require("../../models/directions/FesMeknes")


const getAllFesMekness=async()=>{
return await FesMeknes.find()
}

const createFesMeknes=async(f)=>{
return await FesMeknes.create(f)
}

const deleteFesMeknesById=async(id)=>{
return await FesMeknes.findByIdAndDelete(id)
}

const updateFesMeknes=async(f)=>{
    return await FesMeknes.findByIdAndUpdate(f._id,f)
}

const getFesMeknesById=async(id)=>{
    return await FesMeknes.findById(id)
}

module.exports={
 getAllFesMekness,
 createFesMeknes,
 deleteFesMeknesById,
 updateFesMeknes,
 getFesMeknesById,

}