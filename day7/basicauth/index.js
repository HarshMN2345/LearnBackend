import dotenv from 'dotenv';
import connectDB from './database/db.js';
dotenv.config();
import express from 'express';
const app= express();
const port = process.env.PORT || 3000;
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});