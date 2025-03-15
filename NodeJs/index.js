const express = require("express")
const app = express()
const PORT = 5000
const api = require("./server/routes/ApiRoutes")
app.use("/api",api)
const db = require("./server/config/db")
app.listen(PORT,()=>{
    console.log("SERVER is running at",PORT)
}) 
app.get("/",(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"My Name is Purva Pathania"
    })
})
app.all("/**",(req,res)=>{
    res.status(404).json({
        status:400,
        success:false,
        message:"Not Found!!!"
    })
})
