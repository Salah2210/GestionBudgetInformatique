const TadlaOuardigha=require("../../models/directions/TadlaOuardigha")
const { notifyClients } = require("../websocketServer");


const getAllTadlaOuardighas=async()=>{
return await TadlaOuardigha.find()
}

/*const createTadlaOuardigha=async(t)=>{
return await TadlaOuardigha.create(t)
}

const updateTadlaOuardigha=async(t)=>{
    return await TadlaOuardigha.findByIdAndUpdate(t._id,t)
}*/
const createTadlaOuardigha = async (t) => {
    const newTadlaOuardigha = await TadlaOuardigha.create(t);
    notifyClients({ type: 'create_TadlaOuardigha', data: newTadlaOuardigha });

    return newTadlaOuardigha;
}
  
const updateTadlaOuardigha = async (t) => {
    const updatedTadlaOuardigha = await TadlaOuardigha.findByIdAndUpdate(t._id, t, { new: true });
    notifyClients({ type: 'update_TadlaOuardigha', data: updatedTadlaOuardigha });

    return updatedTadlaOuardigha;
}
const deleteTadlaOuardighaById=async(id)=>{
return await TadlaOuardigha.findByIdAndDelete(id)
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