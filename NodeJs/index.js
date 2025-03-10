const express = require("express")
const app = express()
const PORT = 5000
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
app.post("/college",(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"College name is Guru Nanak Dev University Regional Campus Jalandhar"
    })
})
app.get("/hobby",(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"My Hobby is to paint and listen music"
    })
})
app.post("/course",(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"Course is Computer Science"
    })
})
app.get("/tech",(req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"Technology is Bachelor of Technology"
    })
})
