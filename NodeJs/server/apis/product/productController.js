const ProductModel = require("./productModel")
const product = (req,res)=>{
    let productObj = new ProductModel()
    productObj.category = req.body.category
    productObj.brand = req.body.brand
    productObj.name = req.body.name
    productObj.price = req.body.price
    productObj.quantity = req.body.quantity
    productObj.image = req.body.image
    productObj.stock = req.body.stock
    productObj.desc = req.body.desc
    productObj.save()
    .then((productData)=>{
        res.json({
            status:200,
            success:true,
            message:"Product Added",
            data: productData
        })
    })
    .catch((err)=>{
        res.status(404).json({
            status:400,
            success:false,
            message:"Internal Server Error",
            error: err
        })
    })
}
module.exports={product}