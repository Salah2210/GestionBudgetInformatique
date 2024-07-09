const CasaNord=require("../../models/directions/CasaNord")
const { notifyClients } = require("../websocketServer");


const getAllCasaNords=async()=>{
return await CasaNord.find()
}

/*const createCasaNord=async(c)=>{
return await CasaNord.save(c)
}

const updateCasaNord=async(c)=>{
    return await CasaNord.findByIdAndUpdate(c._id,c)
}*/
const createCasaNord = async (c) => {
    const newCasaNord = await CasaNord.create(c);
    notifyClients({ type: 'create_casanord', data: newCasaNord });

    return newCasaNord;
}
  
const updateCasaNord = async (c) => {
    const updatedCasaNord = await CasaNord.findByIdAndUpdate(c._id, c, { new: true });
    notifyClients({ type: 'update_casanord', data: updatedCasaNord });

    return updatedCasaNord;
}

const deleteCasaNordById=async(id)=>{
return await CasaNord.findByIdAndDelete(id)
}



const getCasaNordById=async(id)=>{
    return await CasaNord.findById(id)
}

module.exports={
 getAllCasaNords,
 createCasaNord,
 deleteCasaNordById,
 updateCasaNord,
 getCasaNordById,

}