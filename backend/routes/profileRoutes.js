// routes/profileRoutes.js

const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/authMiddleware');
const profileController = require('../controllers/profileController');

router.get('/users', authenticateToken, profileController.getProfile);

module.exports = router;
