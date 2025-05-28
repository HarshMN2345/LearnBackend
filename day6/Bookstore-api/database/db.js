const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    }catch{
        console.error("Error connecting to MongoDB", err);
        process.exit(1); // Exit the process with failure
    }
}
module.exports = connectDB;