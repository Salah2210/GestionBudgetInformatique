const Oriental=require("../../models/directions/Oriental")
const { notifyClients } = require("../websocketServer");


const getAllOrientals=async()=>{
return await Oriental.find()
}

/*const createOriental=async(o)=>{
return await Oriental.create(o)
}

const updateOriental=async(o)=>{
    return await Oriental.findByIdAndUpdate(o._id,o)
}*/
const createOriental = async (o) => {
    const newOriental = await Oriental.create(o);
    notifyClients({ type: 'create_Oriental', data: newOriental });

    return newOriental;
}
  
const updateOriental = async (o) => {
    const updatedOriental = await Oriental.findByIdAndUpdate(o._id, o, { new: true });
    notifyClients({ type: 'update_Oriental', data: updatedOriental });

    return updatedOriental;
}
const deleteOrientalById=async(id)=>{
return await Oriental.findByIdAndDelete(id)
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