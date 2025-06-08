import mongoose from 'mongoose';
import dotenv from 'dotenv';
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Title is required"],
        trim: true,
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [100, "Title must be at most 100 characters long"],
    },
    author:{
        type: String,
        required: [true, "Author is required"],
        trim: true,
        minlength: [3, "Author must be at least 3 characters long"],
        maxlength: [50, "Author must be at most 50 characters long"],
    },
    year: {
        type: Number,   
        required: [true, "Year is required"],
        min: [1450, "Year must be after 1450"],
        max: [new Date().getFullYear(), "Year cannot be in the future"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const Book = mongoose.model('Book', bookSchema);
export default Book;