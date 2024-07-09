// middleware/authMiddleware.js

/*const jwt = require('jsonwebtoken');
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
*/
/*
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};
*/


// middleware/authMiddleware.js
/*
const jwt = require('jsonwebtoken');

const protectRoutes = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Not authorized to access this resource' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Invalid token' });
    }
};
module.exports = {
    protectRoutes,
}
*/
/*
const jwt = require('jsonwebtoken');

const protectRoutes = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Not authorized to access this resource' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Ensure that 'decoded' contains the 'userId'
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = {
    protectRoutes,
};
*/
/*
const jwt = require('jsonwebtoken');

const protectRoutes = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Not authorized to access this resource' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Ensure that 'decoded' contains the 'userId'
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = {
    protectRoutes,
};
*/
const jwt = require('jsonwebtoken');

const protectRoutes = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1]; // Extract the token after removing "Bearer "

    if (!token) {
        return res.status(401).json({ message: 'Not authorized to access this resource' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Ensure that 'decoded' contains the 'userId'
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = {
    protectRoutes,
};