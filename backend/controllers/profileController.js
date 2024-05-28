// controllers/profileController.js

const getProfile = (req, res) => {
    const { role } = req;
    res.json({ message: `Welcome to your ${role} profile` });
};

module.exports = { getProfile };
