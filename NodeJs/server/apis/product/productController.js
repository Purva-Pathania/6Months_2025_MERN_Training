const ProductModel = require("./productModel")
const add = (req,res)=>{
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
    if(!req.file){
        validation+="Image is required"
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
                productObj.image = "product_images/" + req.file?.filename
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
single=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        ProductModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"No Product Found"
                })
            }else{
                res.json({
                    status:200,
                    success:true,
                    message:"Product Found",
                    data:productData
                })
            }
        }).catch((err=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                error:err
            })
        }))
    }
}
deleteProduct=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        ProductModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"Product doesn't exist"
                })
            }else{
                ProductModel.deleteOne({_id:formData._id})
                .then(()=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Product Deleted Successfully!!!"
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error",
                        error:err
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                error:err
            })
        })
    }
}
update=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        ProductModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"Product Data doesn't exist",
                })
            }else{
                if(!!formData.name){
                    productData.name=formData.name
                }
                if(!!formData.desc){
                    productData.desc=formData.desc
                }
                if(!!formData.image){
                    productData.image=formData.image
                }
                if(!!formData.price){
                    productData.price=formData.price
                }
                if(!!formData.category){
                    productData.category=formData.category
                }
                if(!!formData.quantity){
                    productData.quantity=formData.quantity
                }
                productData.save()
                .then((productData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Product Data updated successfully",
                        data:productData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:true,
                        message:"Internal Server Error",
                        error:err
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:true,
                message:"Internal Server Error",
                error:err
            })
        })
    }
}
changeStatus=(req,res)=>{
    let validation=""
    let formData=req.body
    if(!formData._id){
        validation+="_id is required"
    }
    if(!!validation.trim()){
        res.json({
            status:422,
            success:false,
            message:validation
        })
    }else{
        ProductModel.findOne({_id:formData._id})
        .then((productData)=>{
            if(!productData){
                res.json({
                    status:404,
                    success:false,
                    message:"Product data not found"
                })
            }else{
                productData.status=!productData.status
                productData.save()
                .then((productData)=>{
                    res.json({
                        status:200,
                        success:true,
                        message:"Product Status updated Successfully!!!",
                        data:productData
                    })
                })
                .catch((err)=>{
                    res.json({
                        status:500,
                        success:false,
                        message:"Internal Server Error",
                        error:err
                    })
                })
            }
        })
        .catch((err)=>{
            res.json({
                status:500,
                success:false,
                message:"Internal Server Error",
                error:err
            })
        })
    }
}
module.exports={add, all, single, deleteProduct, update, changeStatus}