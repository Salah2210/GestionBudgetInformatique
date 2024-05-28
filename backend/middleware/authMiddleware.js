// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/user');

const SECRET_KEY = 'your_secret_key'; // Change this to a strong secret key

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.userId = decoded.userId;
        req.role = decoded.role;
        next();
    });
};

module.exports = { authenticateToken };
