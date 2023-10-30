
const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.MONGODB_URL;
exports.connectDB = async()=>{
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Database connected successfully')
    } catch (error) {
        console.log(error.message)
    }
}