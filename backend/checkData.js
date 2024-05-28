const CasaNord = require('./models/directions/CasaNord');
const CasaSud = require('./models/directions/CasaSud');
// Import other schemas as needed...

async function countDocuments() {
    try {
        const casaNordCount = await CasaNord.countDocuments();
        const casaSudCount = await CasaSud.countDocuments();
        // Count documents for other collections...

        console.log('CasaNord count:', casaNordCount);
        console.log('CasaSud count:', casaSudCount);
        // Log counts for other collections...

    } catch (error) {
        console.error('Error counting documents:', error);
    }
}

countDocuments();
