const express = require('express');
const router = express.Router();
const { authenticateToken, authorizeRole } = require('../utils/jwtUtils');

// Example of a protected route accessible only by admin users
router.get('/admin-only', authenticateToken, authorizeRole('admin'), (req, res) => {
  res.status(200).json({ message: 'Admin-only route accessed successfully' });
});

// Example of a protected route accessible only by users with specific roles
router.get('/casanord-only', authenticateToken, authorizeRole('casanord'), (req, res) => {
  res.status(200).json({ message: 'Casa Nord-only route accessed successfully' });
});

router.get('/casasud-only', authenticateToken, authorizeRole('casasud'), (req, res) => {
    res.status(200).json({ message: 'Casa sud-only route accessed successfully' });
  });

router.get('/doukkalaabda-only', authenticateToken, authorizeRole('doukkalaabda'), (req, res) => {
    res.status(200).json({ message: 'doukkalaabda-only route accessed successfully' });
  });

router.get('/fesmeknes-only', authenticateToken, authorizeRole('fesmeknes'), (req, res) => {
    res.status(200).json({ message: 'fesmeknes-only route accessed successfully' });
  });

router.get('/haouz-only', authenticateToken, authorizeRole('haouz'), (req, res) => {
    res.status(200).json({ message: 'haouz-only route accessed successfully' });
  });

router.get('/nord-only', authenticateToken, authorizeRole('nord'), (req, res) => {
    res.status(200).json({ message: 'nord-only route accessed successfully' });
  });

router.get('/oriental-only', authenticateToken, authorizeRole('oriental'), (req, res) => {
    res.status(200).json({ message: 'oriental-only route accessed successfully' });
  });

router.get('/rabattemara-only', authenticateToken, authorizeRole('rabattemara'), (req, res) => {
    res.status(200).json({ message: 'rabattemara-only route accessed successfully' });
  });

router.get('/salegharb-only', authenticateToken, authorizeRole('salegharb'), (req, res) => {
    res.status(200).json({ message: 'salegharb-only route accessed successfully' });
  });

router.get('/sud-only', authenticateToken, authorizeRole('sud'), (req, res) => {
    res.status(200).json({ message: 'sud-only route accessed successfully' });
  });

router.get('/tadlaouardigha-only', authenticateToken, authorizeRole('tadlaouardigha'), (req, res) => {
    res.status(200).json({ message: 'tadlaouardigha-only route accessed successfully' });
  });

module.exports = router;
