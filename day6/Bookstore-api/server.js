import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import bookRoutes from './routes/book.js' // Import the database connection
dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;
if(PORT==5000){
    console.log("Running in development mode");
}
//connect to database
connectDB(); // Call the function to connect to the database

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data
// Import the book routes
app.use(express.json()); // Middleware to parse JSON requests
app.use('/api/books', bookRoutes); // Use the book routes
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});