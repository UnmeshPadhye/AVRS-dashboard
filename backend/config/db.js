const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://koushik:koushik@cluster0.7jqgxjl.mongodb.net/?retryWrites=true&w=majority");
        console.log('\n\t mongodb connected');
    }
    catch (error) {
        console.error(error);
        process.exit();

    }
};
module.exports = connectDB;