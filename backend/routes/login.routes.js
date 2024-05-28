const express = require("express");
const cors = require("cors");

//const {login} = require("../controllers/login.controller");
const authController = require('../controllers/login.controller');


const router = express.Router();

router.use(cors());

//router.post("/login",login);
router.post('/login', authController.loginUser);

module.exports = router;
///

