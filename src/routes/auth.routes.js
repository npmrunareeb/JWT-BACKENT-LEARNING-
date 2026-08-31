const express = require("express")
const userModel = require("../models/user.models")
const authRouter = express.Router()
const jsonWebToken = {P}

authRouter.post("/register" , async (req , res ) => {
    const {name,email,password} = req.body
 
    const isUserAlreadyExists  = await userModel.findOne({email})

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"the account is already exists"

        })
    }

   const user = await userModel.create({
   name,email,password
   })
   res.status(200).json({
    message:"user Registered",
    user
   })
})
module.exports = authRouter