const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://akasaul:akasaul@niko.5puetkc.mongodb.net/?retryWrites=true&w=majority');
        console.log(`MonogoDb Connected: ${conn.connection.host}`.cyan.underline);
    } catch(err) {
        console.log(`Error: ${err}`.red.underline.bold);
        process.exit(1);
    }
}


module.exports = connectDB; 