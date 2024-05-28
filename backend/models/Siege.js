const mongoose=require("mongoose")
const siegeSchema=new mongoose.Schema({
    dirdep:{type:String,required:true},
    npt:{type:Number},
    rpt:{type:Number},
    ncsp:{type:Number},
    rcsp:{type:Number},
    npp:{type:Number},
    rpp:{type:Number},
    niind:{type:Number},
    riind:{type:Number},
    nim:{type:Number},
    rim:{type:Number},
    nic:{type:Number},
    ric:{type:Number},
    nimc:{type:Number},
    rimc:{type:Number},
    nscc:{type:Number},
    rscc:{type:Number},
    nsc:{type:Number},
    rsc:{type:Number},
    nci:{type:Number},
    rci:{type:Number},
    nptel:{type:Number},
    rptel:{type:Number},
    nlog:{type:Number},
    rlog:{type:Number},
})

const Siege=mongoose.model("Siege",siegeSchema)
module.exports=Siege