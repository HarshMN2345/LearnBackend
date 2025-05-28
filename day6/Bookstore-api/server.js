const express = require('express');
const dotenv = require('dotenv');
const connectDB=require('../database/db'); // Import the database connection
dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;
if(PORT==5000){
    console.log("Running in development mode");
}
//connect to database
connectDB(); // Call the function to connect to the database

app.use(express.json()); // Middleware to parse JSON requests