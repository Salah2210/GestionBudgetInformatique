const Sud=require("../../models/directions/Sud")
const { notifyClients } = require("../websocketServer");


const getAllSuds=async()=>{
return await Sud.find()
}

/*const createSud=async(cs)=>{
return await Sud.create(cs)
}

const updateSud=async(cs)=>{
    return await Sud.findByIdAndUpdate(cs._id,cs)
}*/
const createSud = async (cs) => {
    const newSud = await Sud.create(cs);
    notifyClients({ type: 'create_Sud', data: newSud });

    return newSud;
}
  
const updateSud = async (cs) => {
    const updatedSud = await Sud.findByIdAndUpdate(cs._id, cs, { new: true });
    notifyClients({ type: 'update_Sud', data: updatedSud });

    return updatedSud;
}
const deleteSudById=async(id)=>{
return await Sud.findByIdAndDelete(id)
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