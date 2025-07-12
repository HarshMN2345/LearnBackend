import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    try{
       mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: "admin", // Specify the authentication database
    });
        console.log("MongoDB connected successfully");
    }catch(err){
        console.error("MongoDB connection failed:", err.message);
        process.exit(1); // Exit the process with failure
    }
}
export default connectDB;
