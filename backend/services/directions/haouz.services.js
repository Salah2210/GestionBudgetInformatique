const Haouz=require("../../models/directions/Haouz")


const getAllHaouzs=async()=>{
return await Haouz.find()
}

const createHaouz=async(h)=>{
return await Haouz.create(h)
}

const deleteHaouzById=async(id)=>{
return await Haouz.findByIdAndDelete(id)
}

const updateHaouz=async(h)=>{
    return await Haouz.findByIdAndUpdate(h._id,h)
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