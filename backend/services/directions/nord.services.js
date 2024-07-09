const Nord=require("../../models/directions/Nord")
const { notifyClients } = require("../websocketServer");


const getAllNords=async()=>{
return await Nord.find()
}

/*const createNord=async(n)=>{
return await Nord.create(n)
}

const updateNord=async(n)=>{
    return await Nord.findByIdAndUpdate(n._id,n)
}*/
const createNord = async (n) => {
    const newNord = await Nord.create(n);
    notifyClients({ type: 'create_Nord', data: newNord });

    return newNord;
}
  
const updateNord = async (n) => {
    const updatedNord = await Nord.findByIdAndUpdate(n._id, n, { new: true });
    notifyClients({ type: 'update_Nord', data: updatedNord });

    return updatedNord;
}

const deleteNordById=async(id)=>{
return await Nord.findByIdAndDelete(id)
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