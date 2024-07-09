const RabatTemara=require("../../models/directions/RabatTemara")
const { notifyClients } = require("../websocketServer");


const getAllRabatTemaras=async()=>{
return await RabatTemara.find()
}

/*const createRabatTemara=async(r)=>{
return await RabatTemara.create(r)
}

const updateRabatTemara=async(c)=>{
    return await RabatTemara.findByIdAndUpdate(r._id,r)
}*/
const createRabatTemara = async (r) => {
    const newRabatTemara = await RabatTemara.create(r);
    notifyClients({ type: 'create_RabatTemara', data: newRabatTemara });

    return newRabatTemara;
}
  
const updateRabatTemara = async (r) => {
    const updatedRabatTemara = await RabatTemara.findByIdAndUpdate(r._id, r, { new: true });
    notifyClients({ type: 'update_RabatTemara', data: updatedRabatTemara });

    return updatedRabatTemara;
}
const deleteRabatTemaraById=async(id)=>{
return await RabatTemara.findByIdAndDelete(id)
}



const getRabatTemaraById=async(id)=>{
    return await RabatTemara.findById(id)
}

module.exports={
 getAllRabatTemaras,
 createRabatTemara,
 deleteRabatTemaraById,
 updateRabatTemara,
 getRabatTemaraById,

}