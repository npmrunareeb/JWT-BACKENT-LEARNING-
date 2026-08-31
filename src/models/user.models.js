const mongoose = require("mongoose")

const userShema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:[true , "With this email the account is already exists"]
    },
    password:String,
})
 const userModel = mongoose.model("users" , userShema)

 module.exports = userModel 