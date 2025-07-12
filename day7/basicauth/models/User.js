import e from "express";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true,
        trim: true,
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [50, "Username must be at most 50 characters long"],
    }, 
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
        maxlength: [100, "Password must be at most 100 characters long"],
    },
    role: {
        type: String,
        enum: ['user', 'admin'], //only allow 'user' or 'admin'
        default: 'user',
    } // Automatically add createdAt and updatedAt fields
},{timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;