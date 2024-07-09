const CasaSud=require("../../models/directions/CasaSud")
const { notifyClients } = require("../websocketServer");

const getAllCasaSuds=async()=>{
return await CasaSud.find()
}

/*const createCasaSud=async(c)=>{
return await CasaSud.create(c)
}

const updateCasaSud=async(c)=>{
    return await CasaSud.findByIdAndUpdate(c._id,c)
}*/
const createCasaSud = async (c) => {
    const newCasaSud = await CasaSud.create(c);
    notifyClients({ type: 'create_casasud', data: newCasaSud });
    
    return newCasaSud;
  }
  
  const updateCasaSud = async (c) => {
    const updatedCasaSud = await CasaSud.findByIdAndUpdate(c._id, c, { new: true });
    notifyClients({ type: 'update_casasud', data: updatedCasaSud });

    return updatedCasaSud;
  }
/*
const createCasaSud = async (c) => {
    const newCasaSud = await CasaSud.create(c);
    notifyClients({
      type: 'new_casasud',
      data: newCasaSud,
    });
    return newCasaSud;
  };
  
  const updateCasaSud = async (c) => {
    const updatedCasaSud = await CasaSud.findByIdAndUpdate(c._id, c, { new: true });
    notifyClients({
      type: 'update_casasud',
      data: updatedCasaSud,
    });
    return updatedCasaSud;
  };
*/
const deleteCasaSudById=async(id)=>{
return await CasaSud.findByIdAndDelete(id)
}



const getCasaSudById=async(id)=>{
    return await CasaSud.findById(id)
}

module.exports={
 getAllCasaSuds,
 createCasaSud,
 deleteCasaSudById,
 updateCasaSud,
 getCasaSudById,

}