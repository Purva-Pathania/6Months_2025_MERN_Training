const mongoose = require("mongoose")
let brandSchema = mongoose.Schema({
    autoId:{type:Number, default:1},
    brandName:{type:String, default:""},
    image:{type:String, default:""},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()}
})
module.exports=mongoose.model("brandModel", brandSchema)