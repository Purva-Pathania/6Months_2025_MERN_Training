const mongoose = require("mongoose")
const CustomerSchema = mongoose.Schema({
    autoId:{type:Number, default:1},
    phone:{type:Number, default:0},
    address:{type:String, default:""},
    userId:{type:mongoose.Schema.Types.ObjectId, default:null, ref:"userModel"},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()}
})

module.exports = mongoose.model("CustomerModel", CustomerSchema)