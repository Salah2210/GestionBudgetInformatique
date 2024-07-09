const DoukkalaAbda=require("../../models/directions/DoukkalaAbda")
const { notifyClients } = require("../websocketServer");


const getAllDoukkalaAbdas=async()=>{
return await DoukkalaAbda.find()
}

/*const createDoukkalaAbda=async(d)=>{
return await DoukkalaAbda.create(d)
}

const updateDoukkalaAbda=async(d)=>{
    return await DoukkalaAbda.findByIdAndUpdate(d._id,d)
}*/
const createDoukkalaAbda = async (d) => {
    const newDoukkalaAbda = await DoukkalaAbda.create(d);
    notifyClients({ type: 'create_DoukkalaAbda', data: newDoukkalaAbda });

    return newDoukkalaAbda;
}
  
const updateDoukkalaAbda = async (d) => {
    const updatedDoukkalaAbda = await DoukkalaAbda.findByIdAndUpdate(d._id, d, { new: true });
    notifyClients({ type: 'update_doukkalaabda', data: updatedDoukkalaAbda });

    return updatedDoukkalaAbda;
}


const deleteDoukkalaAbdaById=async(id)=>{
return await DoukkalaAbda.findByIdAndDelete(id)
}



const getDoukkalaAbdaById=async(id)=>{
    return await DoukkalaAbda.findById(id)
}

module.exports={
 getAllDoukkalaAbdas,
 createDoukkalaAbda,
 deleteDoukkalaAbdaById,
 updateDoukkalaAbda,
 getDoukkalaAbdaById,

}