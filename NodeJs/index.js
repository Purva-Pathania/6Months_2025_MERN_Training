const express = require("express")
require("./server/config/db")
const app = express()
const PORT = 5000
const seed = require("./server/config/seed")
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"40mb"}))
app.use(express.static("./server/public/"))
const api = require("./server/routes/ApiRoutes")
app.use("/api",api)
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
