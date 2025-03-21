const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://pathaniaUser:Purva_Pathania4!@cluster0.s9ldk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/SkillHuntdb")
.then(()=>{
    console.log("MongoDB connected successfully!!!");
})
.catch((error)=>{
    console.log("Error in connection",error);
})