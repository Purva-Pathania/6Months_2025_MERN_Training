const ProductModel = require("./productModel")
const product = (req,res)=>{
    let validation=""
    if(!req.body.name){
        validation+="Name is required"
    }
    if(!req.body.price){
        validation+="Price is required, "
    }
    if(!req.body.quantity){
        validation+="Quantity is required"
    }
    if(!!validation.trim()){
        res.json({
            status:400,
            success:false,
            message:validation
        })
    }else{
        ProductModel.findOne({name:req.body.name})
        .then(async (productData)=>{
            if(!productData){
                let productObj = new ProductModel()
                let total = await ProductModel.countDocuments().exec()
                productObj.autoId = total+1
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
            }else{
                res.json({
                    status:200,
                    success:true,
                    message:"Product already exists with the same name",
                    data:productData
                })
            }
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
}
all=(req,res)=>{
    let formData = req.body
    let limit = formData.limit
    let currentPage = formData.currentPage
    delete formData.limit
    delete formData.currentPage
    ProductModel.find(formData)
    .limit(limit)
    .skip((currentPage-1)*limit)
    .then((productData)=>{
        if(productData.length>0){
            res.json({
                status:200,
                success:true,
                message:"Product Loaded",
                data: productData
            })
        }else{
            res.json({
                status:400,
                success:false,
                message:"Product doesn't exist"
            })
        }
    })
    .catch({
        status:500,
        success:false,
        message:"Internal Server Error"
    })
}
module.exports={product, all}