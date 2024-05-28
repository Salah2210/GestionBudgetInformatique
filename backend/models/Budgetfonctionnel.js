const mongoose = require("mongoose")

const budgetfonctionnelcontractprestationfactureSchema = new mongoose.Schema({
    
      name: { type: String, required: true },
      type: { type: String, required: true },
      date: { type: Date, required: true },
      amount: { type: Number, required: true }
  });

const budgetfonctionnelcontractprestationSchema = new mongoose.Schema({
    
      name: { type: String, required: true },
      description: { type: String, required: true },
      date: { type: Date, required: true },
      cbudget: { type: Number, required: true },
      rcbudget: { type: Number },
      factures : [budgetfonctionnelcontractprestationfactureSchema]
  });

const budgetfonctionnelSchema=new mongoose.Schema({
      rubrique:{type:String,required:true},
      budget:{type:Number,required:true},
      rbudget:{type:Number},
      bfdate:{type:Date,required:true},
      contractprestations : [budgetfonctionnelcontractprestationSchema]
});
budgetfonctionnelcontractprestationSchema.pre('save', async function(next) {
      const totalFactureAmount = this.factures.reduce((total, facture) => total + facture.amount, 0);
      this.rcbudget = this.cbudget - totalFactureAmount;
      next();
});
budgetfonctionnelSchema.pre('save', async function(next) {
      const totalContractAmount = this.contractprestations.reduce((total, contractprestation) => total + contractprestation.cbudget, 0);
      this.rbudget = this.budget - totalContractAmount;
      next();
  });

const Budgetfonctionnel = mongoose.model("Budgetfonctionnel",budgetfonctionnelSchema);
const BudgetfonctionnelcontractprestationSchema = mongoose.model("BudgetfonctionnelcontractprestationSchema", budgetfonctionnelcontractprestationSchema);
const BudgetfonctionnelcontractprestationfactureSchema = mongoose.model("BudgetfonctionnelcontractprestationfactureSchema",budgetfonctionnelcontractprestationfactureSchema);



module.exports = { Budgetfonctionnel, BudgetfonctionnelcontractprestationSchema, BudgetfonctionnelcontractprestationfactureSchema };