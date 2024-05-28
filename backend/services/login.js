/*const bcrypt = require("bcrypt");
const User = require("../models/user");

const { generateToken } = require("../utils/jwtUtils");

async function login(email, password){
    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser){
            throw new Error("User not found");
        }
        const isPasswordValid = bcrypt.compare(password, existingUser.password);
        if(!isPasswordValid){
            throw new Error("Incorrect password");
        }
        const token = generateToken(existingUser);
        return token;
    } catch (error) {
        console.log("login error:", error.message);
        throw new Error("Invalid credentials");
    }
} 

module.exports = {
    login 
}*/


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { secretKey, expiresIn } = require('../configuration/jwtconfig');

exports.registerUser = async (name, email, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
};

exports.authenticateUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, secretKey, { expiresIn });
    return token;
};

module.exports={
   
   }
