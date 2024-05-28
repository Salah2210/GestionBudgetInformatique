/*const jwt = require("jsonwebtoken");
const {secretKey} = require("../configuration/jwtconfig");

function generateToken(user){
    const payload  = {
        id:user._id,
        email:user.email,
        role:user.role
    }
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

module.exports = {
    generateToken
};*/
const jwt = require('jsonwebtoken');
const { secretKey } = require('../configuration/jwtconfig');

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed: Token not provided' });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Authentication failed: Invalid token' });
        }
        req.user = decoded;
        next();
    });
};

const authorizeRole = (requiredRole) => {
    return (req, res, next) => {
        if (req.user.role !== requiredRole) {
            return res.status(403).json({ message: 'Authorization failed: Insufficient permissions' });
        }
        next();
    };
};

module.exports = { authenticateToken, authorizeRole };
