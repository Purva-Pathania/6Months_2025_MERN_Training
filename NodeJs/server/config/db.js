const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/SkillHuntdb")
.then(()=>{
    console.log("MongoDB connected successfully!!!");
})
.catch((error)=>{
    console.log("Error in connection",error);
})