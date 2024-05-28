// services/authService.js

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
