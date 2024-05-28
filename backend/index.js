const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const app=express()

const bodyParser = require("body-parser")
const authRoutes = require('./routes/authRoutes');


const projRoutes=require("./routes/project.routes")
const projfactRoutes= require("./routes/projectFactureRoutes")

const budfoncRoutes=require("./routes/budgetfonctionnel.routes")
const siegRoutes=require("./routes/siege.routes")

const siegtotalRoutes = require("./routes/siegetotalRoutes");


const signupRoute=require("./routes/signup.routes")
const loginRoute=require("./routes/login.routes")

const casasudRoute=require("./routes/directions/casasud.routes")
//const totalRoute=require("./routes/directions/total.routes")
const totalRoutes = require("./routes/totalRoutes");


const casanordRoute=require("./routes/directions/casanord.routes")
const doukkalaabdaRoute=require("./routes/directions/doukkalaabda.routes")
const fesmeknesRoute=require("./routes/directions/fesmeknes.routes")
const haouzRoute=require("./routes/directions/haouz.routes")
const nordRoute=require("./routes/directions/nord.routes")
const orientalRoute=require("./routes/directions/oriental.routes")
const rabattemaraRoute=require("./routes/directions/rabattemara.routes")
const salegharbRoute=require("./routes/directions/salegharb.routes")
const sudRoute=require("./routes/directions/sud.routes")
const tadlaouardighaRoute=require("./routes/directions/tadlaouardigha.routes")


app.use('/', authRoutes);
const profileRoutes = require('./routes/profileRoutes');
app.use('/', profileRoutes);

const aggregatedDataRoutes = require("./routes/aggregatedDataRoutes");
//const tableModels = require("./models/directions");
app.use("/aggregated-data", aggregatedDataRoutes);

//const totalRoutes = require('./routes/totalRoutes');
//app.use('/total', totalRoutes);

app.use(bodyParser.json());

app.use(cors())
app.use(express.json())
app.use("/projects",projRoutes)
app.use("/projectfactures",projfactRoutes)

app.use("/budgetfonctionnels",budfoncRoutes)
app.use("/siege",siegRoutes)
app.use("/user",signupRoute)
app.use("/auth",loginRoute)

app.use("/casasud",casasudRoute)
//app.use("/total",totalRoute)
app.use("/total", totalRoutes);
app.use("/siegetotal", siegtotalRoutes);


app.use("/casanord",casanordRoute)
app.use("/doukkalaabda",doukkalaabdaRoute)
app.use("/fesmeknes",fesmeknesRoute)
app.use("/haouz",haouzRoute)
app.use("/nord",nordRoute)
app.use("/oriental",orientalRoute)
app.use("/rabattemara",rabattemaraRoute)
app.use("/salegharb",salegharbRoute)
app.use("/sud",sudRoute)
app.use("/tadlaouardigha",tadlaouardighaRoute)

require("dotenv").config()

 mongoose.connect(process.env.MONGO_URL).then(result=>
  app.listen(process.env.PORT,()=>{
   console.log("server is running")
   })

  ).catch(error=>console.log(error))

/*
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser");
const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');
const projRoutes = require("./routes/project.routes");
const projfactRoutes = require("./routes/projectFactureRoutes");
const budfoncRoutes = require("./routes/budgetfonctionnel.routes");
const siegRoutes = require("./routes/siege.routes");
const siegtotalRoutes = require("./routes/siegetotalRoutes");
const signupRoute = require("./routes/signup.routes");
const loginRoute = require("./routes/login.routes");
const casasudRoute = require("./routes/directions/casasud.routes");
const totalRoutes = require("./routes/totalRoutes");
const casanordRoute = require("./routes/directions/casanord.routes");
const doukkalaabdaRoute = require("./routes/directions/doukkalaabda.routes");
const fesmeknesRoute = require("./routes/directions/fesmeknes.routes");
const haouzRoute = require("./routes/directions/haouz.routes");
const nordRoute = require("./routes/directions/nord.routes");
const orientalRoute = require("./routes/directions/oriental.routes");
const rabattemaraRoute = require("./routes/directions/rabattemara.routes");
const salegharbRoute = require("./routes/directions/salegharb.routes");
const sudRoute = require("./routes/directions/sud.routes");
const tadlaouardighaRoute = require("./routes/directions/tadlaouardigha.routes");

// Set up MongoDB change stream
const uri = 'mongodb://localhost:27017/?replicaSet=rs0';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(async (err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');

    const collectionNames = ['casanord', 'casasud', /* Add other collection names here */
    /*const dbName = 'db_budget_management';

    collectionNames.forEach((collectionName) => {
        const collection = client.db(dbName).collection(collectionName);
        const changeStream = collection.watch();

        changeStream.on('change', async (change) => {
            console.log(`Change detected in ${collectionName}:`, change);
            await computeAndSaveTotalQuantity();
        });
    });
});

// MongoDB Schema Models
const Total = require("./models/Total");

// Field mapping
const fieldMapping = {
    bpt: "Poste de travail",
    bpp: "Pc Portable",
    bimfp: "Imprimante MFP",
    biind: "Imprimante individuelle",
    bic: "Imprimante couleur",
    bsc: "scanner",
    bpabx: "pabx",
    bptel: "poste telefonique",
    bci: "cablage informatique"
};

// Calculate and save total quantity
const computeAndSaveTotalQuantity = async () => {
    const schemas = [
        require("../models/directions/CasaNord"),
        require("../models/directions/CasaSud"),
        // Add other models here
    ];

    const fields = Object.keys(fieldMapping);
    const totals = {};

    for (let field of fields) {
        totals[field] = 0;

        for (let schema of schemas) {
            const result = await schema.aggregate([
                { $group: { _id: null, total: { $sum: `$${field}` } } }
            ]);

            if (result.length > 0) {
                totals[field] += result[0].total;
            }
        }
    }

    // Update totals
    for (let field of fields) {
        const totalDoc = await Total.findOne({ Name: fieldMapping[field] });

        if (totalDoc) {
            const updatedQuantity = totals[field];
            const updatedMontant = totalDoc.Pu * updatedQuantity;

            await Total.updateOne(
                { Name: fieldMapping[field] },
                {
                    $set: {
                        Quantity: updatedQuantity,
                        Montant: updatedMontant
                    }
                }
            );

            console.log(`Updated total for ${fieldMapping[field]}`);
        } else {
            // If no document exists, create a new one with default Pu and calculated Montant
            await Total.create({
                Name: fieldMapping[field],
                Pu: 0, // Default Pu value
                Quantity: totals[field],
                Montant: 0, // Default Montant value based on Pu
                Pexquantity: 0,
                Pexmontant: 0,
                Pextr: 0,
                Dexquantity: 0,
                Dexmontant: 0,
                Dextr: 0
            });

            console.log(`Created total for ${fieldMapping[field]}`);
        }
    }

    return totals;
};

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Routes
app.use('/', authRoutes);
app.use('/', require('./routes/profileRoutes'));
app.use("/aggregated-data", require("./routes/aggregatedDataRoutes"));
app.use("/projects", projRoutes);
app.use("/projectfactures", projfactRoutes);
app.use("/budgetfonctionnels", budfoncRoutes);
app.use("/siege", siegRoutes);
app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/casasud", casasudRoute);
app.use("/total", totalRoutes);
app.use("/siegetotal", siegtotalRoutes);
app.use("/casanord", casanordRoute);
app.use("/doukkalaabda", doukkalaabdaRoute);
app.use("/fesmeknes", fesmeknesRoute);
app.use("/haouz", haouzRoute);
app.use("/nord", nordRoute);
app.use("/oriental", orientalRoute);
app.use("/rabattemara", rabattemaraRoute);
app.use("/salegharb", salegharbRoute);
app.use("/sud", sudRoute);
app.use("/tadlaouardigha", tadlaouardighaRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});

*/

/*
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const setupChangeStreams = require('./changeStreams'); // Adjust the path to your changeStreams file
const totalService = require('./services/totalService');

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes setup
const authRoutes = require('./routes/authRoutes');
const projRoutes = require('./routes/project.routes');
const projfactRoutes = require('./routes/projectFactureRoutes');
const budfoncRoutes = require('./routes/budgetfonctionnel.routes');
const siegRoutes = require('./routes/siege.routes');
const siegtotalRoutes = require('./routes/siegetotalRoutes');
const signupRoute = require('./routes/signup.routes');
const loginRoute = require('./routes/login.routes');
const casasudRoute = require('./routes/directions/casasud.routes');
const totalRoutes = require('./routes/totalRoutes');
const casanordRoute = require('./routes/directions/casanord.routes');
const doukkalaabdaRoute = require('./routes/directions/doukkalaabda.routes');
const fesmeknesRoute = require('./routes/directions/fesmeknes.routes');
const haouzRoute = require('./routes/directions/haouz.routes');
const nordRoute = require('./routes/directions/nord.routes');
const orientalRoute = require('./routes/directions/oriental.routes');
const rabattemaraRoute = require('./routes/directions/rabattemara.routes');
const salegharbRoute = require('./routes/directions/salegharb.routes');
const sudRoute = require('./routes/directions/sud.routes');
const tadlaouardighaRoute = require('./routes/directions/tadlaouardigha.routes');

app.use('/', authRoutes);
app.use('/', require('./routes/profileRoutes'));
app.use('/aggregated-data', require('./routes/aggregatedDataRoutes'));
app.use('/projects', projRoutes);
app.use('/projectfactures', projfactRoutes);
app.use('/budgetfonctionnels', budfoncRoutes);
app.use('/siege', siegRoutes);
app.use('/user', signupRoute);
app.use('/auth', loginRoute);
app.use('/casasud', casasudRoute);
app.use('/total', totalRoutes);
app.use('/siegetotal', siegtotalRoutes);
app.use('/casanord', casanordRoute);
app.use('/doukkalaabda', doukkalaabdaRoute);
app.use('/fesmeknes', fesmeknesRoute);
app.use('/haouz', haouzRoute);
app.use('/nord', nordRoute);
app.use('/oriental', orientalRoute);
app.use('/rabattemara', rabattemaraRoute);
app.use('/salegharb', salegharbRoute);
app.use('/sud', sudRoute);
app.use('/tadlaouardigha', tadlaouardighaRoute);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('Connected to MongoDB');

    try {
        await totalService.computeAndSaveTotalQuantity();
        console.log('Initial total quantities computed and saved');
    } catch (error) {
        console.error('Error computing initial total quantities:', error);
    }

    setupChangeStreams();

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});
*/