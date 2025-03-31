const mongoose=require("mongoose")
let productSchema = mongoose.Schema({
    autoId:{type:Number, default:1},
    category:{type:String, default:""},
    brandId:{type:mongoose.Schema.Types.ObjectId, default:null, ref:"brandModel"},
    name:{type:String, default:""},
    price:{type:Number, default:0},
    quantity:{type:Number, default:0},
    desc:{type:String, default:""},
    image:{type:String, default:""},
    stock:{type:Boolean, default:true},
    status:{type:Boolean, default:true},
    createdAt:{type:Date, default:Date.now()}
})
module.exports=mongoose.model("productModel", productSchema)