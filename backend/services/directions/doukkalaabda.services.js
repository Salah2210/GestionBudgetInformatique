const DoukkalaAbda=require("../../models/directions/DoukkalaAbda")


const getAllDoukkalaAbdas=async()=>{
return await DoukkalaAbda.find()
}

const createDoukkalaAbda=async(d)=>{
return await DoukkalaAbda.create(d)
}

const deleteDoukkalaAbdaById=async(id)=>{
return await DoukkalaAbda.findByIdAndDelete(id)
}

const updateDoukkalaAbda=async(d)=>{
    return await DoukkalaAbda.findByIdAndUpdate(d._id,d)
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