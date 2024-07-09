// services/authService.js
/*
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const SECRET_KEY = 'your_secret_key'; // Change this to a strong secret key

const generateToken = (userId, role) => {
    return jwt.sign({ userId, role }, SECRET_KEY, { expiresIn: '1h' });
};

const authenticateUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        return { userId: user._id, role: user.role };
    } catch (error) {
        throw error;
    }
};

module.exports = { generateToken, authenticateUser };
*/



// services/authService.js
/*const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({ id: user.id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
};
module.exports={
    generateToken,
  }*/
// services/authService.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const secretKey = process.env.JWT_SECRET || 'your_secret_key'; // Replace with your secret key
    const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '1h' });
    return token;
};

module.exports = {
    generateToken,
};
 
 
