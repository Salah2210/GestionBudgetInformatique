const express=require("express")
const router=express.Router()
const signupController=require("../controllers/signup.controller")

router.post("/register",signupController.createUser);
                
module.exports=router