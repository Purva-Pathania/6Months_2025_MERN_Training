const mongoose = require("mongoose")
let CategorySchema = mongoose.Schema({
    autoId:{type:Number, default:1},
    categoryName:{type:String, default:""},
    description:{type:String, default:""},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()}
})

module.exports=mongoose.model("CategoryModel", CategorySchema)