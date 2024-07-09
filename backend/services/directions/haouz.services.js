const Haouz=require("../../models/directions/Haouz")
const { notifyClients } = require("../websocketServer");


const getAllHaouzs=async()=>{
return await Haouz.find()
}

/*const createHaouz=async(h)=>{
return await Haouz.create(h)
}

const updateHaouz=async(h)=>{
    return await Haouz.findByIdAndUpdate(h._id,h)
}*/
const createHaouz = async (h) => {
    const newHaouz = await Haouz.create(h);
    notifyClients({ type: 'create_Haouz', data: newHaouz });

    return newHaouz;
}
  
const updateHaouz = async (h) => {
    const updatedHaouz = await Haouz.findByIdAndUpdate(h._id, h, { new: true });
    notifyClients({ type: 'update_Haouz', data: updatedHaouz });

    return updatedHaouz;
}

const deleteHaouzById=async(id)=>{
return await Haouz.findByIdAndDelete(id)
}



const getHaouzById=async(id)=>{
    return await Haouz.findById(id)
}

module.exports={
 getAllHaouzs,
 createHaouz,
 deleteHaouzById,
 updateHaouz,
 getHaouzById,

}