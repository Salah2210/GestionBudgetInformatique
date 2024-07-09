const FesMeknes=require("../../models/directions/FesMeknes")
const { notifyClients } = require("../websocketServer");


const getAllFesMekness=async()=>{
return await FesMeknes.find()
}

/*const createFesMeknes=async(f)=>{
return await FesMeknes.create(f)
}

const updateFesMeknes=async(f)=>{
    return await FesMeknes.findByIdAndUpdate(f._id,f)
}*/
const createFesMeknes = async (f) => {
    const newFesMeknes = await FesMeknes.create(f);
    notifyClients({ type: 'create_FesMeknes', data: newFesMeknes });

    return newFesMeknes;
}
  
const updateFesMeknes = async (f) => {
    const updatedFesMeknes = await FesMeknes.findByIdAndUpdate(f._id, f, { new: true });
    notifyClients({ type: 'update_FesMeknes', data: updatedFesMeknes });

    return updatedFesMeknes;
}

const deleteFesMeknesById=async(id)=>{
return await FesMeknes.findByIdAndDelete(id)
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