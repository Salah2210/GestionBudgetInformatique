const mongoose = require('mongoose');
const totalService = require('./services/totalService'); // Adjust the path to your totalService file

const schemas = [
    require('./models/directions/CasaNord'),
    require('./models/directions/CasaSud'),
    require('./models/directions/DoukkalaAbda'),
    require('./models/directions/FesMeknes'),
    require('./models/directions/Haouz'),
    require('./models/directions/Nord'),
    require('./models/directions/Oriental'),
    require('./models/directions/RabatTemara'),
    require('./models/directions/SaleGharb'),
    require('./models/directions/Sud'),
    require('./models/directions/TadlaOuardigha')
];

const watchChanges = (schema) => {
    schema.watch().on('change', async (change) => {
        console.log(`Change detected in ${schema.modelName}:`, change);
        try {
            await totalService.computeAndSaveTotalQuantity();
            console.log('Total quantities updated successfully');
        } catch (error) {
            console.error('Error updating total quantities:', error);
        }
    });
};

const setupChangeStreams = () => {
    schemas.forEach(schema => {
        watchChanges(schema);
    });
};

module.exports = setupChangeStreams;
