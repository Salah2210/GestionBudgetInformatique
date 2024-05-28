const mongoose=require("mongoose")
const orientalSchema=new mongoose.Schema({
    code:{type:Number,required:true},
    branche:{type:String,required:true},
    direg:{type:String,required:true},
    type:{type:String,required:true},
    classf:{type:String,required:true},
    bpt:{type:Number},
    ept:{type:String},
    bpp:{type:Number},
    epp:{type:String},
    bimfp:{type:Number},
    eimfp:{type:String},
    biind:{type:Number},
    eiind:{type:String},
    bic:{type:Number},
    eic:{type:String},
    bsc:{type:Number},
    esc:{type:String},
    bpabx:{type:Number},
    epabx:{type:String},
    bptel:{type:Number},
    eptel:{type:String},
    bci:{type:Number},
    eci:{type:String},
    coment:{type:String},
})
orientalSchema.post('save', async function () {
    const computeAndSaveTotalQuantity = require('../../services/totalService');
    await computeAndSaveTotalQuantity();
});

const Oriental=mongoose.model("Oriental",orientalSchema)
module.exports=Oriental


