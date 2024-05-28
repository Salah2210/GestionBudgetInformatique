/*const authService = require("../services/login");

async function login(req,res){
    try {
        const {email,password} = req.body;
        const token = await authService.login(email, password);
        res.json({ token: token });
    } catch (error) {
        res.status(401).json({ message: "Invalid credentials" });
    }
}

module.exports = {
    login
}*/

const authService = require('../services/login');

exports.registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        await authService.registerUser(name, email, password, role);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await authService.authenticateUser(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ message: 'Login failed', error: error.message });
    }
};
