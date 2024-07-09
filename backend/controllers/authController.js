// controllers/authController.js
/*
const authService = require('../services/authService');

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const { userId, role } = await authService.authenticateUser(email, password);
        const token = authService.generateToken(userId, role);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: error.message });
    }
};

module.exports = { login };
*/

// controllers/authController.js
/*
const authService = require('../services/authService');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = authService.generateToken(user);

        res.json({ token });
        //res.status(200).json(user)


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports={
    login,
 }
*/
const authService = require('../services/authService');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = authService.generateToken(user);

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server erooror' });
    }
};

module.exports = {
    login,
};

 
