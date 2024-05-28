// controllers/authController.js

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
