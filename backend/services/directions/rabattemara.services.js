const RabatTemara=require("../../models/directions/RabatTemara")


const getAllRabatTemaras=async()=>{
return await RabatTemara.find()
}

const createRabatTemara=async(r)=>{
return await RabatTemara.create(r)
}

const deleteRabatTemaraById=async(id)=>{
return await RabatTemara.findByIdAndDelete(id)
}

const updateRabatTemara=async(c)=>{
    return await RabatTemara.findByIdAndUpdate(r._id,r)
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