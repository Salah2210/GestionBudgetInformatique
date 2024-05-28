const mongoose = require("mongoose")

const projectfactureSchema = new mongoose.Schema({
    
      name: { type: String, required: true },
      type: { type: String, required: true },
      date: { type: Date, required: true },
      amount: { type: Number, required: true }
  });

const projectSchema=new mongoose.Schema({
      name:{type:String,required:true},
      description:{type:String,required:true},
      pdate:{type:Date,required:true},
      //budget:{type:Number,required:true},
      initialBudget: { type: Number, required: true },
      remainingBudget: { type: Number},
      factures : [projectfactureSchema]
});

projectSchema.pre('save', async function(next) {
      const totalFactureAmount = this.factures.reduce((total, facture) => total + facture.amount, 0);
      this.remainingBudget = this.initialBudget - totalFactureAmount;
      next();
  });
  
  

const Project = mongoose.model("Project",projectSchema);
const ProjectFacture = mongoose.model("ProjectFacture", projectfactureSchema);

module.exports = { Project, ProjectFacture };


/*projectSchema.pre('save', async function(next) {
      if (this.isModified('factures') || this.isModified('initialBudget')) {
          const totalFactureAmount = this.factures.reduce((total, facture) => total + facture.amount, 0);
          this.remainingBudget = this.initialBudget - totalFactureAmount;
      }
      next();
  });
  */
 /*
  projectSchema.pre('save', async function(next) {
      if (this.isModified('initialBudget')) {
          const totalFactureAmount = this.factures.reduce((total, facture) => total + facture.amount, 0);
          this.remainingBudget = this.initialBudget - totalFactureAmount;
      }
      next();
  });*/