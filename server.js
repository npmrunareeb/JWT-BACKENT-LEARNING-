const app = require("./src/app")
const connectedToDb = require("./src/config/database")
require("dotenv").config()

connectedToDb()
app.listen(3000 , ()=>{
    console.log("server is running on port number 3000")
})